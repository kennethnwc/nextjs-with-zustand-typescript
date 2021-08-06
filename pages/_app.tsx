import { useCreateStore, Provider } from "../lib/store";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const createStore = useCreateStore(pageProps.initialZustandState);
  return (
    <Provider createStore={createStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
