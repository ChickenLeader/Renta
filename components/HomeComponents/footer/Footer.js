import Text from "components/General/Text";
import Image from "next/image";
import React, { memo, useEffect, useLayoutEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Colors } from "constants/Colors";
import { useRouter } from "next/router";
import logo from "public/assets/RentaFinalLogo2x.png";
import Link from "next/link";
import Slider from "react-slick";
import styles from "./footer.module.css";
import { Services } from "apis/Services/Services";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

var settings = {
  dots: false,
  arrows: false,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  centerMode: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 500,
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
  const [images, setimages] = useState([]);
  const [socialMedia, setsocialMedia] = useState({});

  const getSocialMedia = () => {
    Services.social_media()
      .then((res) => {
        setsocialMedia(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const BottomTabItems = [
    {
      id: 1,
      name: "Navigation",
      list: [
        { id: 1, name: "Most viewed", navigateTo: "/Latest" },
        { id: 2, name: "Shortlist", navigateTo: "#" },
      ],
    },
    {
      id: 2,
      name: "About Renta",
      list: [
        { id: 1, name: "Contact us", navigateTo: "/ContactUs" },
        { id: 2, name: "About us", navigateTo: "/AboutUs" },
      ],
    },
    {
      id: 3,
      list: [
        { id: 1, name: "Terms & conditions", navigateTo: "/Terms&Conditions" },
        { id: 2, name: "Privacy policy", navigateTo: "#" },
      ],
    },
  ];
  const social = {
    id: 4,
    name: "Social Media",
    list: [
      {
        id: 1,
        icon: <FaFacebookF size={22} color={Colors.primary} />,
        navigateTo: socialMedia.facebook,
      },
      {
        id: 2,
        icon: <FaTwitter size={22} color={Colors.primary} />,
        navigateTo: socialMedia.twitter,
      },
      {
        id: 3,
        icon: <FaInstagram size={22} color={Colors.primary} />,
        navigateTo: socialMedia.instagram,
      },
      {
        id: 4,
        icon: <FaLinkedin size={22} color={Colors.primary} />,
        navigateTo: socialMedia.linkedin,
      },
    ],
  };

  const HomeVendors = [
    {
      id: 4,
      image: require("public/assets/footer/Emaar Both color & White.svg"),
    },
    { id: 1, image: require("public/assets/footer/sodic.svg") },
    { id: 2, image: require("public/assets/footer/Palm hills White.svg") },
    { id: 5, image: require("public/assets/footer/LMD White.svg") },
    { id: 3, image: require("public/assets/footer/Hyde park white.svg") },
    { id: 6, image: require("public/assets/footer/mnhd White.svg") },
  ];

  const footerImages = () => {
    Services.footerImages()
      .then((res) => {
        // console.log(res);
        setimages(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSocialMedia();
    footerImages();
  }, []);

  const customFooterPages = ["/", "/Home"];
  return (
    <div
      className={
        customFooterPages.includes(pathName)
          ? styles.customizedFooterContainer
          : styles.footercontainer
      }
    >
      {/* Customized Footer only for Home Screen */}

      {customFooterPages.includes(pathName) ? (
        <div className="w-100 ">
          {images.length > 0 && (
            <Slider {...settings} className={"footerSlider"}>
              {images.map((item) => (
                <div key={item.id + ""}>
                  <Image
                    src={item?.image}
                    alt="vendor icon"
                    objectFit="initial"
                    className={styles.vendorImage}
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
      ) : (
        <div>
          <Row>
            <Col lg={3} sm={6} xs={12}>
              <div className={styles.footerImage}>
                <Image
                  // objectFit="contain"
                  width={65}
                  height={115}
                  alt="logo"
                  src={logo}
                  className={styles.footerLogo}
                />
              </div>
            </Col>
            <Col>
              <Row className="justify-content-end">
                {BottomTabItems.map((item, index) => {
                  return (
                    <Col key={item.id} lg={3} xs={6}>
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
                                {sub_item?.name}
                              </Text>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Col>
                  );
                })}
                <Col>
                  <div className={styles.listColumn}>
                    <Text
                      fontSize={12}
                      className="mb-3"
                      color={Colors.secondaryText}
                    >
                      {social?.name}
                    </Text>

                    <div className="d-flex align-items-center gap-3">
                      {social?.list?.map((social_item) => (
                        <div
                          key={social_item.id}
                          className="pointer"
                          onClick={() =>
                            window.open(social_item.navigateTo, "_blank")
                          }
                        >
                          {social_item?.icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default memo(Footer);
