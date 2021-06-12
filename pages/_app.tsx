import { useHydrate, Provider } from "../lib/store";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const store = useHydrate(pageProps.initialZustandState);
  return (
    <Provider initialStore={store as any}>
      <Component {...pageProps} />
    </Provider>
  );
}
