import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import ScreenWrapper from "components/General/ScreenWrapper";
import Text from "components/General/Text";
import styles from "./detail.module.css";
import { Colors } from "constants/Colors";
import { FontFamily } from "constants/FontFamily";
import { IoLogoWhatsapp, IoMdHeart, IoMdClose } from "react-icons/io";
import { Services } from "apis/Services/Services";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
// import { Carousel } from "antd";

const MapWithNoSSR = dynamic(
  () => import("components/HomeComponents/map/Map"),
  {
    ssr: false,
  }
);

const images = [
  { id: 1, image: require("public/assets/housex2.png") },
  { id: 2, image: require("public/assets/housex2.png") },
  { id: 3, image: require("public/assets/housex2.png") },
  { id: 4, image: require("public/assets/housex2.png") },
  { id: 5, image: require("public/assets/housex2.png") },
  { id: 6, image: require("public/assets/housex2.png") },
  { id: 7, image: require("public/assets/housex2.png") },
];

const PropertyDetails = ({ data }) => {
  const { t } = useTranslation();
  const [showCarousel, setshowCarousel] = useState(false);
  const [index, setindex] = useState(0);
  const Ref = useRef();
  const router = useRouter();

  let tempIcons = [
    {
      id: 1,
      name: t("Property type:"),
      icon: require("public/assets/spaceIcon.svg"),
      digit: data.property_type,
    },
    {
      id: 2,
      name: t("No of bedrooms:"),
      icon: require("public/assets/bedsSvg.svg"),
      digit: data.Bedrooms,
    },
    {
      id: 3,
      name: t("No of bathrooms:"),
      icon: require("public/assets/bathSvg.svg"),
      digit: data.Bathrooms,
    },
    {
      id: 4,
      name: t("area"),
      icon: require("public/assets/spaceIcon.svg"),
      digit: Math.floor(data.squared_area),
    },
  ];

  const getPropertyById = () => {
    console.log(router.query.slug);
    Services.getPropertyByID(router.query.slug)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => console.log(err));
  };
  const openCarousel = () => {
    setshowCarousel(true);
  };

  const closeCarousel = () => {
    setshowCarousel(false);
  };

  const handleSelect = (selectedIndex, e) => {
    setindex(selectedIndex);
  };
  useEffect(() => {
    getPropertyById();
  }, []);

  return (
    <ScreenWrapper>
      <div className={styles.ContainerFluid}>
        {showCarousel && (
          <div className={styles.carouselLayer} onClick={() => closeCarousel()}>
            <div className={styles.carouselCon}>
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                className={styles.carousel}
                onClick={(e) => e.stopPropagation()}
              >
                {property_image?.map((item, index) => (
                  <Carousel.Item key={item.id}>
                    <div className="w-100 position-relative">
                      <Image
                        src={item.image}
                        className="d-block w-100"
                        alt="property card"
                        objectFit="contain"
                      />
                    </div>
                  </Carousel.Item>
                ))}
                {/* close button */}
              </Carousel>
            </div>
          </div>
        )}

        <Container fluid>
          {/* Images Row */}
          <Row className="mb-4 align-items-center justify-content-center">
            {data?.property_image?.map((item, index) => (
              <Col key={item.id} md={3} className="p-1">
                <Image
                  alt=" "
                  src={item.image}
                  className={styles.images}
                  onClick={() => {
                    openCarousel();
                    setindex(index);
                  }}
                />
              </Col>
            ))}
          </Row>
          {/* Details and contact Row */}
          <Row className="mb-4 align-items-center justify-content-center">
            <Col>
              <div className="mb-2">
                <Text fontSize={32} color={Colors.secondary}>
                  {data.title}
                </Text>
              </div>
              <Row className="align-items-center justify-content-center">
                {tempIcons.map((item, index) => {
                  return (
                    <Col key={item.id} md={6}>
                      <div
                        className="d-flex align-items-center my-2"
                        style={{
                          justifyContent: "flex-start",
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
                    {data.price}
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
                    <Row
                      className={styles.callUs}
                      onClick={() => {
                        window.open(`tel:${data?.phone}`);
                      }}
                    >
                      <Col md={7}>
                        <Text color="white">Call us</Text>
                      </Col>
                      <Col className="pe-0">
                        <Text
                          color="white"
                          fontSize={18}
                          className={styles.phoneNumber}
                        >
                          {data?.phone}
                        </Text>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row
                      className={styles.ChatwitUs}
                      onClick={() => {
                        window.open(`https://wa.me/${data?.phone}`);
                      }}
                    >
                      <Col md={9} xs={7}>
                        <Text>Chat with us</Text>
                      </Col>
                      <Col className="pe-0 text-center">
                        <IoLogoWhatsapp color={Colors.primary} size={26} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          {/* Description and map Row */}
          <Row>
            <Col md={6}>
              <div>
                <Text
                  fontSize={18}
                  color={Colors.secondaryText}
                  className="mb-2"
                >
                  Description
                </Text>
                <Text color={Colors.secondary}>{data?.description}</Text>
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
                    <div
                      key={item.id}
                      className="d-flex flex-row align-self-center mb-3"
                    >
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
            <Col md={6}>
              <MapWithNoSSR
                data={[
                  {
                    id: data?.id,
                    name: data?.title,
                    latitude: data?.latitude,
                    longitude: data?.longitude,
                  },
                ]}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </ScreenWrapper>
  );
};
export async function getServerSideProps({ query, locale }) {
  let data = await Services.getPropertyByID(query.slug, locale);
  return {
    props: { data, ...(await serverSideTranslations(locale, ["common"])) },
  };
}
export default PropertyDetails;
