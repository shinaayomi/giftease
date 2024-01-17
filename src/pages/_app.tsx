import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";

import { theme } from "./theme/themeConfig";

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <Component {...pageProps} />
  </ConfigProvider>
);

export default App;
