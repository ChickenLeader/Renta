import { Services } from "apis/Services/Services";
import ScreenWrapper from "components/General/ScreenWrapper";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import { FontFamily } from "constants/FontFamily";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./aboutUs.module.css";
const aboutUs = [
  {
    id: 1,
    title: "Who we are",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est",
  },
  {
    id: 2,
    title: "What we offer",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est",
  },
  {
    id: 3,
    title: "More than 500 units",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est",
  },
  {
    id: 4,
    title: "More than 500 units",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est",
  },
];
const AboutUs = ({ data }) => {
  const AboutItem = ({ index, title, text }) => (
    <div className="py-4 mb-4">
      <Text
        fontSize={24}
        color={Colors.primary}
        fontFamily={FontFamily.semiBold}
      >
        {title}
        {/* {aboutUs[index]["title"]} */}
      </Text>
      <Text fontSize={18}>
        {/* {aboutUs[index]["description"]} */}
        {text}
      </Text>
    </div>
  );

  return (
    <ScreenWrapper>
      <div className={styles.ContainerFluid}>
        <Row className="mb-4">
          <Col>
            <AboutItem
              index={0}
              title={data?.first_paragraph_title}
              text={data?.first_paragraph_text}
            />
            <AboutItem
              index={1}
              title={data?.second_paragraph_title}
              text={data?.second_paragraph_text}
            />
          </Col>
          <Col>
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <Image
                alt=" "
                src={require("public/assets/RentaLogo.png")}
                width={170}
                height={300}
              />
            </div>
          </Col>
        </Row>
        <AboutItem
          index={2}
          title={data?.third_paragraph_title}
          text={data?.third_paragraph_text}
        />
        <AboutItem
          index={3}
          title={data?.forth_paragraph_title}
          text={data?.forth_paragraph_text}
        />
      </div>
    </ScreenWrapper>
  );
};

export async function getServerSideProps({ locale }) {
  const data = await Services.aboutUs();
  return {
    props: { data, ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default AboutUs;
