import { Container } from "@mui/system";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ScreenWrapper from "components/General/ScreenWrapper";
import Text from "components/General/Text";
import styles from "styles/Home.module.scss";
import { FontFamily } from "constants/FontFamily";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/Home");
  });
  return <ScreenWrapper></ScreenWrapper>;
}

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      redirect: {
        destination: "/Home",
        permanent: true,
      },
    },
  };
};

// export async function getServerSideProps(cxt) {
//   return {
//     redirect: {
//       destination: "/Home",
//       permanent: true,
//     },
//   };
// }
