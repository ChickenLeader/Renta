import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./property.module.css";
import Image from "next/image";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import { Card } from "antd";
import { useRouter } from "next/router";
import { FontFamily } from "constants/FontFamily";
const img = require("../../../public/assets/houseCardx2.png");

const UnitCard = ({ item }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useRouter();
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

  const unitDetails = [
    { id: 1, title: "Renter name:", value: item.name },
    { id: 2, title: "Rent amount per month:", value: item.rent },
    { id: 3, title: "Contract start:", value: item.startDate },
    { id: 4, title: "Contract end:", value: item.endDate },
    { id: 5, title: "Contract photo:", value: item.photo, underline: true },
    { id: 6, title: "Renter id photo:", value: item.idPhoto, underline: true },
  ];
  return (
    <Card
      hoverable
      className={styles.unitCardCon}
      onClick={() => navigate.push("/detail/jghghbbj")}
    >
      <div className={styles.cardHeader}>
        <Row
          className={`justify-content-around align-items-center ${styles.cardDetails}`}
          style={{ backgroundColor: "#f4f4f4" }}
        >
          <Col
            md={5}
            className=" flex-column align-items-center justify-content-center"
          >
            <div className={styles.details}>
              <div>
                <Text fontSize={20} className={styles.propertyType}>
                  Small apartment
                </Text>
                <Text color={Colors.primary} fontSize={14}>
                  Mountain View, New cairo
                </Text>
              </div>
            </div>
          </Col>
          <Col md={6} className="ps-0">
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
      </div>

      <div>
        <div className="ms-3">
          {unitDetails.map((detail) => {
            return (
              <div className={"d-flex align-items-center my-5"}>
                <div style={{ width: 8, height: 8, background: "#D6D7DB" }} />
                <Text className={"mx-2"}>{detail.title}</Text>
                <Text
                  fontSize={18}
                  fontFamily={FontFamily.medium}
                  style={{
                    textDecoration: detail.underline ? "underline" : "none",
                  }}
                >
                  {detail.value}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default UnitCard;
