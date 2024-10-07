import Navbar from "../components/Navbar";
import "../styles/globals.css"; // Assuming you have a global CSS file

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
