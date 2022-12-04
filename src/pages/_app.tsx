import "../styles/globals.css";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";

import store from "../store";

const poppings = Poppins({
  subsets: ['latin'],
  style: "normal",
  weight: ["400", "500", "600"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={poppings.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
