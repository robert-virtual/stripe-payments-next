import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ItemsProvider } from "../context/ItemsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ItemsProvider>
      <Component {...pageProps} />
    </ItemsProvider>
  );
}

export default MyApp;
