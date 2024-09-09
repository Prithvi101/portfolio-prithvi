import type { AppProps } from "next/app";
import { Lato } from "@next/font/google";

const lato = Lato({
  subsets: ["latin"], // Choose the subset(s) that your app supports
  weight: ["100", "300", "400", "700", "900"], // Select the weights you need
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={lato.className}>
      <Component {...pageProps} />
    </main>
  );
}
