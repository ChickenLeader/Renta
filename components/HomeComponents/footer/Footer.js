import Text from "components/General/Text";
import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Colors } from "constants/Colors";
import { useRouter } from "next/router";
import logo from "public/assets/RentaFinalLogo2x.png";
import Link from "next/link";
import Slider from "react-slick";
import styles from "./footer.module.css";

var settings = {
  dots: false,
  arrows: false,
  autoplay: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  centerMode: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


export const Footer = () => {
  const router = useRouter();
  const pathName = router.pathname;

  const BottomTabItems = [
    {
      id: 1,
      name: "Navigation",
      list: [
        { id: 1, name: "Latest seen", navigateTo: "/Latest" },
        { id: 2, name: "Shortlist", navigateTo: "#" },
      ],
    },
    {
      id: 2,
      name: "ABOUT RENTA",
      list: [
        { id: 1, name: "Contact us", navigateTo: "/ContactUs" },
        { id: 2, name: "About us", navigateTo: "/AboutUs" },
      ],
    },
    {
      id: 3,
      list: [
        { id: 1, name: "Terms & conditions", navigateTo: "#" },
        { id: 2, name: "Privacy policy", navigateTo: "#" },
      ],
    },
    {
      id: 4,
      name: "ABOUT RENTA",
      list: [
        { id: 1, name: "INSTAGRAM", navigateTo: "#" },
        { id: 2, name: "YOUTUBE", navigateTo: "#" },
        { id: 3, name: "FACEBOOK", navigateTo: "#" },
      ],
    },
  ];

  const HomeVendors = [
    { id: 1, image: require("public/assets/HomeVendor.svg") },
    { id: 2, image: require("public/assets/HomeVendor.svg") },
    { id: 3, image: require("public/assets/HomeVendor.svg") },
    { id: 4, image: require("public/assets/HomeVendor.svg") },
    { id: 5, image: require("public/assets/HomeVendor.svg") },
    { id: 6, image: require("public/assets/HomeVendor.svg") },
  ];

  return (
    <div
      className={
        pathName.includes("/Home")
          ? styles.customizedFooterContainer
          : styles.footercontainer
      }
    >
      {/* Customized Footer only for Home Screen */}

      {pathName.includes("/Home") ? (
        <div className="w-100 align-items-center">
          {/* <Row className="justify-content-between align-items-center">
            {HomeVendors.map((item) => (
              <Col key={item.id} md={2} xs={6} className={styles.vendorImage}>
                <Image src={item.image} alt="vendor icon" objectFit="contain" />
              </Col>
            ))}
          </Row> */}
          <Slider {...settings}>
            {HomeVendors.map((item) => (
              <Image key={item.id + ""} src={item.image} alt="vendor icon" objectFit="contain" className={styles.vendorImage} />
            ))}
          </Slider>

        </div>
      ) : (
        <div>
          <Row>
            <Col lg={4} sm={6} xs={12}>
              <div className={styles.footerImage}>
                <Image objectFit="fill" alt="logo" src={logo} className={styles.footerLogo} />
              </div>
            </Col>
            <Col>
              <Row className="justify-content-end">
                {BottomTabItems.map((item, index) => {
                  return (
                    <Col
                      key={item.id}
                      lg={index == BottomTabItems.length - 1 ? 2 : 3}
                      xs={6}
                    >
                      <div className={styles.listColumn}>
                        {item.name && (
                          <Text
                            fontSize={12}
                            className="mb-3"
                            color={Colors.secondaryText}
                          >
                            {item?.name}
                          </Text>
                        )}

                        {item?.list?.map((sub_item) => (
                          <Link
                            key={sub_item.id}
                            href={sub_item.navigateTo + ""}
                          >
                            <div>
                              <Text
                                fontSize={14}
                                className="pb-2 mb-1"
                                color="white"
                                style={{ cursor: "pointer" }}
                              >
                                {sub_item.name}
                              </Text>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};
