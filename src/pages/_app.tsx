import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { EditorContextProvider } from '@/providers/EditorProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EditorContextProvider>
      <Component {...pageProps} />
    </EditorContextProvider>
  );
}

export default MyApp;
