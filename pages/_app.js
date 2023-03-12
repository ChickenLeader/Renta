import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import "styles/globals.scss";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import MainLayout from "components/General/MainLayout";
import { theme } from "styles/theme";
import createEmotionCache from "hooks/createEmotionCache";
import { loginHandler } from "hooks/loginHandler";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import Navbar from "components/HomeComponents/navbar/Navbar";
import Footer from "components/HomeComponents/footer/Footer";
import { store } from "../redux";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }) {
  const emotionCache = clientSideEmotionCache;
  const router = useRouter();

  const autoLogin = () => {
    let token = localStorage.getItem("token");
    if (token) {
      loginHandler(token);
    }
  };

  const langAdjustment = () => {
    localStorage.setItem("lang", router.locale);

    let isArabicLang = router.locale === "ar";
    let dir = isArabicLang ? "rtl" : "ltr";

    document.body.setAttribute("dir", dir);
    if (document.getElementsByTagName("nav").length) {
      document.querySelector("nav").setAttribute("dir", dir);
    }
  };

  useEffect(() => {
    // router.replace("/Home");
    autoLogin();
    langAdjustment();
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <MainLayout>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </MainLayout>
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

// export async function getServerSideProps(cxt) {
//   return {
//     redirect: {
//       destination: "/Home",
//       permanent: true,
//     },
//   };
// }

export default appWithTranslation(MyApp);
