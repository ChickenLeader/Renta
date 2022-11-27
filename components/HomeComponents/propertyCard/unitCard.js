import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./property.module.css";
import Image from "next/image";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import { Card } from "antd";
const img = require("../../../public/assets/houseCardx2.png");

const UnitCard = () => {
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
      icon: require("../../../public/assets/bedsSvg.svg"),
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
      icon: require("../../../public/assets/bedsSvg.svg"),
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
      icon: require("../../../public/assets/bedsSvg.svg"),
      digit: 167,
    },
  ];
  return (
    <Card hoverable className={styles.unitCardCon}>
      <Row>
        <Col lg={3} md={4} xs={4} className="p-0">
          <div className={styles.cardImgCon}>
            <Image src={img} alt="property card" layout="fill" />
          </div>
        </Col>
        <Col lg={3} md={4} xs={4} className="p-0">
          <div className={styles.details}>
            <div>
              <Text fontSize={20} className="mb-3">
                Small apartment
              </Text>
              <Text color={Colors.primary} fontSize={14}>
                Mountain View, New cairo
              </Text>
            </div>
          </div>
        </Col>
        <Col lg={6} md={4} xs={4}>
          <div className={styles.iconsCon}>
            <Row className="h-100 align-items-center d-flex justify-content-center border-start border-2 m-auto">
              {tempIcons.map((item) => {
                return (
                  <Col
                    lg={4}
                    md={6}
                    xs={12}
                    className="d-flex align-items-center justify-content-center p-0"
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

export default UnitCard;
