import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./property.module.css";
import Image from "next/image";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import { Card } from "antd";
import { useRouter } from "next/router";
const img = require("../../../public/assets/houseCardx2.png");

const UnitCard = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useRouter()
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
  return (
    <Card
      hoverable
      className={styles.unitCardCon}
      onClick={() => navigate.push("/detail/jghghbbj")}
    >
      <Row>
        <Col md={4} className="p-0 position-relative">
          <div className={styles.cardImgCon}>
            <Image
              src={img}
              alt="property card"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Col>
        <Col
          md={4}
          className="p-0 flex-column align-items-center justify-content-center"
        >
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
        <Col md={4} className="ps-0">
          <div className={styles.iconsCon}>
            <Row
              style={{ minHeight: 120 }}
              className="align-items-center p-1 d-flex justify-content-center border-start border-1 m-auto"
            >
              {tempIcons.map((item) => {
                return (
                  <Col
                    key={item.id + ""}
                    lg={4}
                    md={6}
                    xs={6}
                    className="d-flex align-items-center justify-content-center p-0"
                  >
                    <Image
                      src={item.icon}
                      alt="space icon"
                      objectFit="contain"
                      width={25}
                      height={25}
                    />
                    <Text className="d-inline ms-1">{item.digit}</Text>
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
