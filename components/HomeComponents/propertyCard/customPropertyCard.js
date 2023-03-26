import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./property.module.css";
import Image from "next/image";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import { Card, Carousel } from "antd";
import { FontFamily } from "constants/FontFamily";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/router";
import { i18n } from "next-i18next";

const img = require("../../../public/assets/houseCard.png");
const images = [
  require("../../../public/assets/housex2.png"),
  require("public/assets/ables-ladprao-27-condo-bangkok-515085b5ef237783c2000032_full-436x386.jpg"),
  require("../../../public/assets/2x1.jpg"),
];

const CustomPropertyCard = ({ item }) => {
  const [loading, setLoading] = useState(false);
  const sliderRef = useRef();
  const navigate = useRouter();
  let tempIcons = [
    {
      id: 1,
      name: "space",
      icon: require("../../../public/assets/spaceIcon.svg"),
      digit: Math.floor(item.squared_area),
    },
    {
      id: 2,
      name: "bedrooms",
      icon: require("../../../public/assets/bedsSvg.svg"),
      digit: item.Bedrooms,
    },
    {
      id: 3,
      name: "bathrooms",
      icon: require("../../../public/assets/bathSvg.svg"),
      digit: item.Bathrooms,
    },
    {
      id: 4,
      name: "space",
      icon: require("../../../public/assets/furnished.svg"),
      digit: item.is_furnished ? "Yes" : "No",
    },
  ];
  const next = () => {
    setTimeout(() => {
      sliderRef.current.next();
    }, 200);
  };
  console.log(item, "itemememem");

  return (
    <Card
      hoverable
      className={styles.cardCon}
      onClick={() => navigate.push(`/Details/${item.id}`)}
    >
      <Row>
        <Col md={12}>
          {item?.property_image.length > 0 && (
            <div className={styles.directions}>
              <div
                className={styles.prev}
                onClick={(e) => {
                  sliderRef.current.prev();
                  // e.stopPropagation();
                }}
              >
                <FiArrowLeft size={22} color="white" />
              </div>
              <div
                className={styles.next}
                onClick={(e) => {
                  next();
                  // e.stopPropagation();
                }}
              >
                <FiArrowRight size={22} />
              </div>
            </div>
          )}

          <Carousel ref={sliderRef}>
            {item?.property_image.map((item) => (
              <div key={item + ""} className={styles.customCardImgCon}>
                <Image
                  src={item}
                  style={{ borderRadius: 20 }}
                  alt="property card"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>

      <Row className="d-flex justify-content-around">
        <Col md={5} xs={12} className="p-0">
          <div
            className={styles.details}
            onClick={() => navigate.push(`/Details/${item.id}`)}
          >
            <div>
              <Text fontSize={20} className={styles.propertyType}>
                {item.title}
              </Text>
              <Text color={Colors.primary} fontSize={14}>
                {item.address}
              </Text>
            </div>
            <div>
              <Text
                fontSize={30}
                className="d-inline"
                fontFamily={FontFamily.semiBold}
              >
                {item.price}
              </Text>
              <Text
                className="d-inline ms-1"
                fontSize={16}
                color={Colors.primary}
              >
                / month
              </Text>
            </div>
          </div>
        </Col>
        <Col md={5} xs={12} className={styles.iconsSection}>
          <div
            className={styles.iconsCon}
            onClick={() => navigate.push(`/Details/${item.id}`)}
          >
            <Row
              className="h-100 align-items-center d-flex justify-content-between m-auto"
              style={{ minHeight: 150 }}
            >
              {tempIcons.map((item) => {
                return (
                  <Col
                    lg={5}
                    md={6}
                    xs={6}
                    className="d-flex align-items-center justify-content-center p-0"
                    key={item.id + ""}
                  >
                    <Image
                      src={item.icon}
                      alt="space icon"
                      objectFit="contain"
                      width={25}
                      height={25}
                    />
                    <Text style={{ width: 30, marginInlineStart: 4 }}>
                      {item.digit}
                    </Text>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default CustomPropertyCard;
