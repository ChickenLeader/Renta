import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import ScreenWrapper from "components/General/ScreenWrapper";
import Text from "components/General/Text";
import styles from "./detail.module.css";
import { Colors } from "constants/Colors";
import { FontFamily } from "constants/FontFamily";
import { IoLogoWhatsapp, IoMdHeart, IoMdClose } from "react-icons/io";
import { Carousel } from "antd";

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
    icon: require("public/assets/spaceIcon.svg"),
    digit: "Apartment",
  },
  {
    id: 2,
    name: "No of bedrooms:",
    icon: require("public/assets/spaceIcon.svg"),
    digit: 200,
  },
  {
    id: 3,
    name: "Property area:",
    icon: require("public/assets/spaceIcon.svg"),
    digit: 167,
  },
  {
    id: 4,
    name: "No of bathrooms:",
    icon: require("public/assets/spaceIcon.svg"),
    digit: 167,
  },
];

const PropertyDetails = () => {
  const [showCarousel, setshowCarousel] = useState(false);
  const [index, setindex] = useState(null);
  const Ref = useRef();

  const openCarousel = () => {
    setshowCarousel(true);
  };

  const closeCarousel = () => {
    setshowCarousel(false);
  };

  useEffect(() => {
    if (index) {
      setTimeout(() => {
        Ref.current.goTo(index, true);
      }, 500);
    }
  }, [index, Ref]);

  return (
    <ScreenWrapper>
      <div className={styles.ContainerFluid}>
        {showCarousel && (
          <div className={styles.carouselLayer}>
            <div className={styles.carouselCon}>
              {/* Left Button  */}
              <div
                className={styles.leftButton}
                onClick={() => Ref.current.prev()}
              >
                <Image src={require("public/assets/Carousel-arrow-left.svg")} />
              </div>

              {/* Right Button  */}
              <div
                className={styles.rightButton}
                onClick={() => Ref.current.next()}
              >
                <Image
                  src={require("public/assets/Carousel-arrow-right.svg")}
                />
              </div>

              {/* close button */}
              <div
                className={styles.closeButton}
                onClick={() => closeCarousel()}
              >
                <IoMdClose size={36} color="white" />
              </div>
              <Carousel ref={Ref}>
                {images.map((item, index) => (
                  <div className={styles.cardImgCon}>
                    <Image
                      src={item.image}
                      // style={{ borderRadius: 20 }}
                      alt="property card"
                      // layout="fill"
                      objectFit="contain"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        )}

        <Container fluid>
          {/* Images Row */}
          <Row className="mb-4 align-items-center justify-content-center">
            {images.map((item, index) => (
              <>
                <Col md={3} className="p-1">
                  <Image
                    src={item.image}
                    className={styles.images}
                    onClick={() => {
                      openCarousel();
                      setindex(index);
                    }}
                  />
                </Col>
              </>
            ))}
          </Row>
          {/* Details and contact Row */}
          <Row className="mb-4 align-items-center justify-content-center">
            <Col>
              <div className="mb-2">
                <Text fontSize={32} color={Colors.secondary}>
                  Small apartment
                </Text>
              </div>
              <Row className="align-items-center justify-content-center">
                {tempIcons.map((item, index) => {
                  return (
                    <Col md={6}>
                      <div
                        className="d-flex align-items-center my-2"
                        style={{
                          justifyContent: index % 2 ? "center" : "flex-start",
                        }}
                      >
                        <Image
                          src={item.icon}
                          alt="space icon"
                          objectFit="contain"
                          width={25}
                          height={25}
                        />

                        <Text
                          color={Colors.secondaryText}
                          className="ms-2 me-4"
                        >
                          {item.name}
                        </Text>

                        <Text fontFamily={FontFamily.semiBold}>
                          {item.digit}
                        </Text>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col className="mt-3">
              <div className={styles.detailCon}>
                <div className="mb-2">
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
                <Row className="mx-1 py-2 gap-2">
                  <Col>
                    <Row className={styles.callUs}>
                      <Col>
                        <Text color="white">Call us</Text>
                      </Col>
                      <Col md={8} className="pe-0">
                        <Text
                          color="white"
                          fontSize={18}
                          style={{
                            textDecoration: "underline",
                            textAlign: "center",
                          }}
                        >
                          01001001000
                        </Text>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row className={styles.ChatwitUs}>
                      <Col md={8}>
                        <Text>Chat with us</Text>
                      </Col>
                      <Col className="pe-0 text-center">
                        <IoLogoWhatsapp color={Colors.primary} size={26} />
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row className={styles.ChatwitUs}>
                      <Col md={8}>
                        <Text>Add to Shortlist</Text>
                      </Col>
                      <Col className="pe-0 text-center">
                        <IoMdHeart color={Colors.primary} size={26} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          {/* Description and map Row */}
          <Row>
            <Col>
              <div>
                <Text
                  fontSize={18}
                  color={Colors.secondaryText}
                  className="mb-2"
                >
                  Description:
                </Text>
                <Text color={Colors.secondary}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est
                </Text>
              </div>
              <div className="mt-5">
                <Text
                  color={Colors.secondaryText}
                  fontSize={18}
                  className="mb-4"
                >
                  Compound facilities
                </Text>
                <div>
                  {tempIcons.map((item) => (
                    <div className="d-flex flex-row align-self-center mb-3">
                      <Image
                        src={item.icon}
                        alt="space icon"
                        objectFit="contain"
                        width={25}
                        height={25}
                      />
                      <Text color={Colors.secondary} className="mx-3">
                        {item.name}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d78146.87474262953!2d31.33369147247803!3d30.04728278348716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1669470927403!5m2!1sen!2seg"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
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
