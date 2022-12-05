import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./property.module.css";
import Image from "next/image";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import { Card, Carousel } from "antd";
import { FontFamily } from "constants/FontFamily";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const img = require("../../../public/assets/houseCardx2.png");
let tempIcons = [
  {
    id: 1,
    name: "space",
    icon: require("../../../public/assets/bathSvg.svg"),
    digit: 167,
  },
  {
    id: 2,
    name: "space",
    icon: require("../../../public/assets/bedsSvg.svg"),
    digit: 200,
  },
  {
    id: 3,
    name: "space",
    icon: require("../../../public/assets/bathSvg.svg"),
    digit: 167,
  },
  {
    id: 4,
    name: "space",
    icon: require("../../../public/assets/bedsSvg.svg"),
    digit: 167,
  },
  {
    id: 5,
    name: "space",
    icon: require("../../../public/assets/bathSvg.svg"),
    digit: 167,
  },
  {
    id: 6,
    name: "space",
    icon: require("../../../public/assets/bedsSvg.svg"),
    digit: 167,
  },
];

const PropertyCard = () => {
  const [loading, setLoading] = useState(false);
  const sliderRef = useRef();
  return (
    <Card hoverable className={styles.cardCon}>
      <Row>
        <Col md={4} className="p-0 position-relative">
          <div className={styles.directions}>
            <div
              className={styles.prev}
              onClick={() => sliderRef.current.prev()}
            >
              <FiArrowLeft size={22} color="white" />
            </div>
            <div
              className={styles.next}
              onClick={() => sliderRef.current.next()}
            >
              <FiArrowRight size={22} />
            </div>
          </div>
          <Carousel ref={sliderRef} dots={{ className: styles.test }}>
            {[1, 2, 3, 4].map((item) => (
              <div key={item + ""} className={styles.cardImgCon}>
                <Image
                  src={img}
                  style={{ borderRadius: 20 }}
                  alt="property card"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </Carousel>
        </Col>
        <Col md={4} xs={12} className="p-0">
          <div className={styles.details}>
            <div>
              <Text fontSize={20} className="mb-3">
                Small apartment
              </Text>
              <Text color={Colors.primary} fontSize={14}>
                Mountain View, New cairo
              </Text>
            </div>
            <div>
              <Text
                fontSize={26}
                className="d-inline"
                fontFamily={FontFamily.semiBold}
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
          </div>
        </Col>
        <Col md={4} xs={12} className={styles.iconsSection}>
          <div className={styles.iconsCon}>
            <Row className="h-100 align-items-center d-flex justify-content-center m-auto">
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
                    <Text className="d-inline ms-2">{item.digit}</Text>
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

export default PropertyCard;
