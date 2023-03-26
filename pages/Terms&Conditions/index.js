import { Services } from "apis/Services/Services";
import ScreenWrapper from "components/General/ScreenWrapper";
import Text from "components/General/Text";
import { FontFamily } from "constants/FontFamily";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const TermsAndConditions = ({ data }) => {
  return (
    <ScreenWrapper>
      <div className="m-5 text-center">
        <Text fontSize={30} fontFamily={FontFamily.bold}>
          Terms & Conditions
        </Text>
        <div className=" mt-4 text-start">
          <Text>{data[0]?.terms_conditions}</Text>
        </div>
      </div>
    </ScreenWrapper>
  );
};

export async function getServerSideProps({ locale }) {
  const data = await Services.terms_privacy(locale);
  return {
    props: { data, ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default TermsAndConditions;
