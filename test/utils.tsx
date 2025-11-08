import { render, RenderOptions } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';

// Default messages for testing
const defaultMessages = {
  hero: {
    greeting: 'Welcome',
    title: 'Test Title',
  },
  contact: {
    title: 'Contact',
    form: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      submit: 'Submit',
      privacy: 'I agree to the privacy policy',
      success: 'Message sent successfully',
      error: 'Failed to send message',
    },
  },
};

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  locale?: string;
  messages?: Record<string, any>;
}

function AllTheProviders({ children, locale = 'en', messages = defaultMessages }: {
  children: ReactNode;
  locale?: string;
  messages?: Record<string, any>;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}

function customRender(
  ui: ReactElement,
  { locale = 'en', messages = defaultMessages, ...options }: CustomRenderOptions = {}
) {
  return render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders locale={locale} messages={messages}>
        {children}
      </AllTheProviders>
    ),
    ...options,
  });
}

export * from '@testing-library/react';
export { customRender as render };
