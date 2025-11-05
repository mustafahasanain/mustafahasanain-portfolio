# Deployment Guide for Hostinger

## Changes Made

### 1. Removed Middleware
- **Deleted**: `proxy.ts` (contained next-intl middleware incompatible with static export)
- Middleware requires a Node.js server and cannot work with static HTML exports

### 2. Updated Next.js Configuration
- **File**: `next.config.ts`
- Added `trailingSlash: true` for consistent routing
- Kept `output: "export"` for static HTML generation
- Kept `images: { unoptimized: true }` (required for static export)

### 3. Updated Build Script
- **File**: `package.json`
- Added postbuild script to copy `/en/index.html` to `/index.html`
- This ensures the root URL serves English content by default

### 4. Created .htaccess Configuration
- **File**: `public/.htaccess`
- Automatically copied to `out/.htaccess` during build
- Handles URL routing, clean URLs, and security

## Build Output Structure

After running `npm run build`, the `out/` folder contains:

```
out/
├── index.html          # English homepage (root URL)
├── .htaccess           # Apache configuration
├── 404.html            # Error page
├── en/
│   ├── index.html      # English homepage
│   ├── contact/
│   │   └── index.html
│   └── projects/
│       └── index.html
├── ar/
│   ├── index.html      # Arabic homepage
│   ├── contact/
│   │   └── index.html
│   └── projects/
│       └── index.html
├── tr/
│   ├── index.html      # Turkish homepage
│   ├── contact/
│   │   └── index.html
│   └── projects/
│       └── index.html
├── _next/              # Static assets
└── [public files]      # Images, SVGs, PDFs, etc.
```

## URL Routing

### How URLs Work

- **`/`** → Serves English content (from `out/index.html`)
- **`/en/`** → English homepage
- **`/ar/`** → Arabic homepage (العربية)
- **`/tr/`** → Turkish homepage (Türkçe)
- **`/en/contact/`** → English contact page
- **`/ar/contact/`** → Arabic contact page
- **`/tr/contact/`** → Turkish contact page

### .htaccess Features

1. **Root URL Handling**: Rewrites `/` internally to `/en/` while keeping URL as `/`
2. **Clean URLs**: Automatically handles `.html` extensions
3. **Trailing Slashes**: Ensures proper directory/file matching
4. **Security Headers**: Prevents clickjacking, MIME sniffing, XSS
5. **Caching**: Optimizes static asset delivery
6. **Error Handling**: Custom 404 page

## Deployment Steps

### 1. Build the Project

```bash
npm run build
```

This will:
- Generate static HTML files in the `out/` directory
- Copy `.htaccess` from `public/` to `out/`
- Copy `/en/index.html` to `/index.html` for root URL

### 2. Upload to Hostinger

**Option A: Using File Manager**
1. Log in to Hostinger control panel
2. Go to File Manager
3. Navigate to `public_html/` (or your domain's root directory)
4. Delete all existing files (if this is a fresh deployment)
5. Upload the **contents** of the `out/` folder (not the `out/` folder itself)
6. Verify `.htaccess` file is present in the root

**Option B: Using FTP**
1. Connect via FTP using your Hostinger credentials
2. Navigate to `public_html/`
3. Upload all files from the `out/` directory
4. Ensure `.htaccess` is uploaded (it may be hidden)

**Important**: Upload the **contents** of `out/`, not the `out/` folder itself. Your server's root should contain `index.html`, `.htaccess`, `en/`, `ar/`, `tr/`, etc.

### 3. Verify Deployment

Test these URLs on your live site:

- `https://yourdomain.com/` → Should show English homepage
- `https://yourdomain.com/en/` → Should show English homepage
- `https://yourdomain.com/ar/` → Should show Arabic homepage
- `https://yourdomain.com/tr/` → Should show Turkish homepage
- `https://yourdomain.com/en/contact/` → Should show English contact page
- `https://yourdomain.com/invalid-page/` → Should show 404 page

## Troubleshooting

### Issue: 403 Forbidden Error

**Causes:**
1. Missing `.htaccess` file
2. Incorrect file permissions
3. Missing `index.html` in directories

**Solutions:**
1. Verify `.htaccess` exists in the root directory
2. Set file permissions: Files = 644, Directories = 755
3. Re-upload the `out/` folder contents

### Issue: 404 on All Pages

**Causes:**
1. `.htaccess` not being read by Apache
2. Mod_rewrite not enabled

**Solutions:**
1. Check Hostinger control panel → ensure Apache mod_rewrite is enabled
2. Contact Hostinger support to enable `.htaccess` overrides

### Issue: Styles/Images Not Loading

**Causes:**
1. Incorrect base path
2. Files not uploaded

**Solutions:**
1. Verify `_next/` folder exists and contains static files
2. Check browser console for 404 errors on assets
3. Ensure all files from `out/` were uploaded

### Issue: Language Switcher Not Working

**Causes:**
1. JavaScript not loading properly
2. Routing issues

**Solutions:**
1. Check browser console for errors
2. Verify `_next/static/` folder contains JavaScript bundles
3. Clear browser cache and test again

## Maintenance

### Updating Content

1. Make changes to your source code
2. Run `npm run build`
3. Upload the new `out/` folder contents to Hostinger
4. Clear browser cache or use hard refresh (Ctrl+F5)

### Adding New Pages

1. Create new pages in your Next.js app under `app/[locale]/`
2. Rebuild with `npm run build`
3. Upload updated `out/` folder to Hostinger

## Performance Optimization

The `.htaccess` file includes:

- **Asset Caching**: Static files cached for 1 year
- **HTML Caching**: HTML pages cached for 1 hour
- **Compression**: Enabled via Hostinger's default settings
- **Security Headers**: XSS protection, clickjacking prevention

## Security Notes

- Directory listing is disabled (`Options -Indexes`)
- Security headers are enabled (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection)
- HTTPS redirect can be enabled (see commented section in `.htaccess`)

## Important Notes

1. **No Middleware**: This static export does not support Next.js middleware
2. **No API Routes**: Static export cannot include API routes
3. **No Server-Side Rendering**: All pages are pre-rendered at build time
4. **No Dynamic Routes**: Only statically generated routes work
5. **Manual Language Selection**: Users must use the language switcher (no automatic detection)

## Need Help?

If you encounter issues:

1. Check browser console for errors
2. Verify all files uploaded correctly
3. Check Hostinger's error logs in control panel
4. Ensure `.htaccess` is present and readable
5. Contact Hostinger support if Apache configuration issues persist
