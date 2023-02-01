import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function App({ Component, pageProps }: AppProps) {
  // Create a TanstackQuery client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />

      {/* Dev tools for Tanstack Query */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
