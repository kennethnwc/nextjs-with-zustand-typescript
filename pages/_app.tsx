import { AppProps } from "next/app";
import { StoreProvider } from "../lib/StoreProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider {...pageProps.initialZustandState}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
