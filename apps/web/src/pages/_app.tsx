import '@package/theme/style';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
