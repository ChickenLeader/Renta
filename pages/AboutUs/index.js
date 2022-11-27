import ScreenWrapper from "components/General/ScreenWrapper";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import { FontFamily } from "constants/FontFamily";
import Image from "next/image";
import React from "react";
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
const AboutUs = (index) => {
  const aboutItem = (index) => (
    <div className="py-4 mb-4">
      <Text
        fontSize={24}
        color={Colors.primary}
        fontFamily={FontFamily.semiBold}
      >
        {aboutUs[index]["title"]}
      </Text>
      <Text fontSize={18}>{aboutUs[index]["description"]}</Text>
    </div>
  );

  return (
    <ScreenWrapper>
      <div className={styles.ContainerFluid}>
        <Row className="mb-4">
          <Col>
            {aboutItem(0)}
            {aboutItem(1)}
          </Col>
          <Col>
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <Image
                src={require("public/assets/RentaLogo.png")}
                width={170}
                height={300}
              />
            </div>
          </Col>
        </Row>
        {aboutItem(2)}
        {aboutItem(3)}
      </div>
    </ScreenWrapper>
  );
};

export default AboutUs;
