import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

// <!-- Google tag (gtag.js) -->
{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-HL6XJV7L25"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){
    dataLayer.push(arguments)
  }
  gtag('js', new Date());

  gtag('config', 'G-HL6XJV7L25');
</script> */}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
