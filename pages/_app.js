import "../styles/globals.css";
import { Provider } from "../context";

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    document.title = "MahjongL - 麻雀学習";
  }
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
