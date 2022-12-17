import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import ScreenWrapper from "components/General/ScreenWrapper";
import Text from "components/General/Text";
import styles from "./detail.module.css";
import { Colors } from "constants/Colors";
import { FontFamily } from "constants/FontFamily";
import { IoLogoWhatsapp, IoMdHeart } from "react-icons/io";

const images = [
  { id: 1, image: require("public/assets/housex2.png") },
  { id: 2, image: require("public/assets/housex2.png") },
  { id: 3, image: require("public/assets/housex2.png") },
  { id: 4, image: require("public/assets/housex2.png") },
  { id: 5, image: require("public/assets/housex2.png") },
  { id: 6, image: require("public/assets/housex2.png") },
  { id: 7, image: require("public/assets/housex2.png") },
];
let tempIcons = [
  {
    id: 1,
    name: "Property type:",
    icon: require("public/assets/bathSvg.svg"),
    digit: "Apartment",
  },
  {
    id: 2,
    name: "No of bedrooms:",
    icon: require("public/assets/bedsSvg.svg"),
    digit: 200,
  },
  {
    id: 3,
    name: "Property area:",
    icon: require("public/assets/bathSvg.svg"),
    digit: 167,
  },
  {
    id: 4,
    name: "No of bathrooms:",
    icon: require("public/assets/bedsSvg.svg"),
    digit: 167,
  },
];

const PropertyDetails = () => {
  return (
    <ScreenWrapper>
      <div className={styles.ContainerFluid}>
        <Container fluid>
          <Row className="mb-4 align-items-center justify-content-center">
            {images.map((item) => (
              <>
                <Col md={3} className="p-1">
                  <Image src={item.image} />
                </Col>
              </>
            ))}
          </Row>
          <Row className="mb-4 align-items-center justify-content-center">
            <Col>
              <div>
                <Text fontSize={32} color={Colors.secondary}>
                  Small apartment
                </Text>
              </div>
              <Row className="align-items-center justify-content-between bg-primary">
                {tempIcons.map((item) => {
                  return (
                    <Col md={6}>
                      <Row className="align-items-center">
                        <Col md={2}>
                          <Image
                            src={item.icon}
                            alt="space icon"
                            objectFit="contain"
                            width={25}
                            height={25}
                          />
                        </Col>
                        <Col>
                          <Text className="mx-2">{item.name}</Text>
                        </Col>
                        <Col>
                          <Text fontFamily={FontFamily.semiBold}>
                            {item.digit}
                          </Text>
                        </Col>
                      </Row>
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col className="mt-3">
              <div className={styles.detailCon}>
                <div>
                  <Text
                    fontSize={30}
                    className="d-inline"
                    fontFamily={FontFamily.bold}
                  >
                    7,600
                  </Text>
                  <Text
                    className="d-inline ms-1"
                    fontSize={16}
                    color={Colors.primary}
                  >
                    / month
                  </Text>
                </div>
                <Row className="mx-1 py-2">
                  <Col>
                    <Row className={styles.callUs}>
                      <Col>
                        <Text color="white">Call us</Text>
                      </Col>
                      <Col>
                        <Text color="white">01001001000</Text>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row className={styles.ChatwitUs}>
                      <Col md={9}>
                        <Text>Chat with us</Text>
                      </Col>
                      <Col>
                        <IoLogoWhatsapp color={Colors.primary} size={26} />
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row className={styles.ChatwitUs}>
                      <Col md={9}>
                        <Text>Add to Shortlist</Text>
                      </Col>
                      <Col>
                        <IoMdHeart color={Colors.primary} size={26} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </ScreenWrapper>
  );
};

{
  /* <Raw>
<Col>
  <Row>
    <Col>
      <Image
        src={item.icon}
        alt="space icon"
        objectFit="contain"
        width={25}
        height={25}
      />
    </Col>
  </Row>
</Col>
<Col></Col>
</Raw> */
}
export default PropertyDetails;
