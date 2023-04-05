import "@/styles/globals.css";
import "../styles/about.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "./terminal-grotesque.ttf" });

export default function App({ Component, pageProps }) {
  return (
    <div className={myFont.className}>
      <Component {...pageProps} />
    </div>
  );
}
