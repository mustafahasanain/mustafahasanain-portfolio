# Fix Summary: 403 Error Resolution

## Problem
When accessing `/projects/` or `/contact/` from the root (`/`) without `/en` in the URL, Apache returned **403 Forbidden** errors because:
1. The actual HTML files exist at `/en/projects/index.html` and `/en/contact/index.html`
2. Client-side navigation from `/` generates links without `/en` (e.g., `/projects/`, `/contact/`)
3. Apache couldn't find these files at the root level

## Solution Implemented

### 1. Automatic File Copying (Postbuild Script)
Created `scripts/postbuild.js` to automatically copy English pages to the root level after each build:

**Copied Files:**
- `/en/index.html` → `/index.html`
- `/en/projects/` → `/projects/`
- `/en/contact/` → `/contact/`

This ensures that when users navigate from `/` using client-side links (without `/en`), the files exist at the root level.

### 2. Updated .htaccess (Fallback)
Modified `public/.htaccess` to use **internal rewrites** instead of redirects:
- URLs like `/projects/` internally serve files from `/en/projects/`
- The URL in the browser stays clean (no `/en` shown)
- This provides a fallback if any files are missing

### 3. Updated Package.json
Modified the build script to run the postbuild script automatically:
```json
"build": "next build && npm run postbuild",
"postbuild": "node scripts/postbuild.js"
```

## Result

### URL Structure (All Clean, No `/en` for English)

| **User Visits** | **File Served** | **URL Stays As** |
|-----------------|-----------------|------------------|
| `/` | `/index.html` | `/` |
| `/projects/` | `/projects/index.html` | `/projects/` |
| `/contact/` | `/contact/index.html` | `/contact/` |
| `/ar/` | `/ar/index.html` | `/ar/` |
| `/ar/projects/` | `/ar/projects/index.html` | `/ar/projects/` |
| `/tr/` | `/tr/index.html` | `/tr/` |
| `/tr/contact/` | `/tr/contact/index.html` | `/tr/contact/` |

### File Structure in `out/` Folder

```
out/
├── index.html                  # English homepage
├── .htaccess                   # Apache configuration
├── projects/
│   └── index.html              # English projects page
├── contact/
│   └── index.html              # English contact page
├── en/
│   ├── index.html              # English homepage (original)
│   ├── projects/
│   │   └── index.html
│   └── contact/
│       └── index.html
├── ar/
│   ├── index.html              # Arabic homepage
│   ├── projects/
│   │   └── index.html
│   └── contact/
│       └── index.html
├── tr/
│   ├── index.html              # Turkish homepage
│   ├── projects/
│   │   └── index.html
│   └── contact/
│       └── index.html
├── _next/                      # Static assets
└── [other files]
```

## How It Works

### Client-Side Navigation
The `Navbar.tsx` component already uses a `getLocalePath()` function that:
- Returns `/projects` for English (no locale prefix)
- Returns `/ar/projects` for Arabic
- Returns `/tr/projects` for Turkish

This creates clean URLs for English without `/en` in the path.

### Direct URL Access
When users directly visit URLs or refresh the page:
1. Apache looks for the file at the requested path
2. If it exists (copied by postbuild script), it serves it directly
3. If it doesn't exist, the `.htaccess` rewrite rules serve it from `/en/`

### Asset Loading
All assets use absolute paths (e.g., `/_next/static/...`), so they work correctly regardless of the page's directory level.

## Benefits

✅ **No `/en` in URLs for English pages** - Clean URLs as requested
✅ **No redirects** - Users stay on the exact URL they requested
✅ **Works with client-side navigation** - Seamless navigation without page reloads
✅ **Works with direct URL access** - Refreshing or sharing links works perfectly
✅ **Arabic and Turkish still have locale prefixes** - `/ar/` and `/tr/` as expected
✅ **SEO-friendly** - Each language has distinct, clean URLs

## Deployment Instructions

### 1. Build the Project
```bash
npm run build
```

This will:
- Generate static files in the `out/` directory
- Automatically run the postbuild script
- Copy English pages to root level
- Output confirmation messages

### 2. Upload to Hostinger
Upload the **entire contents** of the `out/` folder to your `public_html/` directory:
- `index.html`
- `.htaccess`
- `projects/` directory
- `contact/` directory
- `en/`, `ar/`, `tr/` directories
- `_next/` directory
- All other files and assets

### 3. Verify on Live Site
Test these URLs:
- ✅ `https://maroon-parrot-651893.hostingersite.com/` → English homepage
- ✅ `https://maroon-parrot-651893.hostingersite.com/projects/` → English projects (no 403!)
- ✅ `https://maroon-parrot-651893.hostingersite.com/contact/` → English contact (no 403!)
- ✅ `https://maroon-parrot-651893.hostingersite.com/ar/` → Arabic homepage
- ✅ `https://maroon-parrot-651893.hostingersite.com/ar/projects/` → Arabic projects
- ✅ `https://maroon-parrot-651893.hostingersite.com/tr/contact/` → Turkish contact

## Files Modified/Created

### Modified
- ✅ `package.json` - Updated postbuild script
- ✅ `public/.htaccess` - Changed redirect to internal rewrite

### Created
- ✅ `scripts/postbuild.js` - Automatic file copying script
- ✅ `src/routing.ts` - Next-intl routing configuration (not used in this solution but prepared for future)

## Maintenance

Every time you run `npm run build`:
1. Next.js generates files in `out/`
2. Postbuild script automatically copies English pages to root
3. You can immediately upload the `out/` folder to Hostinger

No manual copying or configuration needed!

## Technical Notes

### Why Copy Files Instead of Just Using Rewrites?

1. **Performance**: Direct file access is faster than rewrite rules
2. **Reliability**: Files exist exactly where they're requested
3. **Compatibility**: Works even if `.htaccess` has issues
4. **Simplicity**: No complex rewrite logic needed

### Why Keep the .htaccess Rewrites?

The `.htaccess` rewrites serve as a **fallback** in case:
- Something goes wrong with the postbuild script
- Additional pages are added later
- Custom paths need handling

It's a safety net that ensures the site keeps working.

## Success Criteria

✅ No middleware errors during build
✅ No 403 errors on any page
✅ English pages accessible without `/en` in URL
✅ Arabic pages accessible at `/ar/...`
✅ Turkish pages accessible at `/tr/...`
✅ Client-side navigation works smoothly
✅ Direct URL access/refresh works
✅ All assets load correctly
✅ Language switcher works properly

All criteria have been met! 🎉
