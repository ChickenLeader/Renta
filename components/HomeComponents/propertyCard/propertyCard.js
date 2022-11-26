import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./property.module.css";
import Image from "next/image";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import { Card } from "antd";
const img = require("../../../public/assets/housex2.png");

const PropertyCard = () => {
  const [loading, setLoading] = useState(false);
  let tempIcons = [
    {
      id: 1,
      name: "space",
      icon: require("../../../public/assets/bathSvg.svg"),
      digit: 167,
    },
    {
      id: 1,
      name: "space",
      icon: require("../../../public/assets/bathSvg.svg"),
      digit: 200,
    },
    {
      id: 1,
      name: "space",
      icon: require("../../../public/assets/bathSvg.svg"),
      digit: 167,
    },
    {
      id: 1,
      name: "space",
      icon: require("../../../public/assets/bathSvg.svg"),
      digit: 167,
    },
    {
      id: 1,
      name: "space",
      icon: require("../../../public/assets/bathSvg.svg"),
      digit: 167,
    },
    {
      id: 1,
      name: "space",
      icon: require("../../../public/assets/bathSvg.svg"),
      digit: 167,
    },
  ];
  return (
    <Card className={styles.cardCon}>
      <Row>
        <Col lg={3} xs={6} className="p-0">
          <div className={styles.cardImg}>
            <Image src={img} alt="property card" width={280} height={200} />
          </div>
        </Col>
        <Col className="p-0">
          <div className={styles.details}>
            <div>
              <Text fontSize={20}>Small apartment</Text>
              <Text color={Colors.primary} fontSize={14}>
                Mountain View, New cairo
              </Text>
            </div>
            <div>
              <Text
                fontSize={28}
                className="d-inline"
                fontFamily="semiBold"
                style={{ fontWeight: 800 }}
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
        <Col lg={3} xs={6}>
          <div className={styles.iconsCon}>
            <Row className="h-100 align-items-center d-flex justify-content-center">
              {tempIcons.map((item) => {
                return (
                  <Col lg={6} xs={6} className="d-flex align-items-center">
                    <Image
                      src={item.icon}
                      alt="space icon"
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
