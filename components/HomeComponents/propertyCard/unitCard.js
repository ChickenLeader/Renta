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
      icon: require("../../../public/assets/spaceIcon.svg"),
      digit: Math.floor(item.property_id.squared_area),
    },
    {
      id: 2,
      name: "bedrooms",
      icon: require("../../../public/assets/bedsSvg.svg"),
      digit: item.property_id.Bedrooms,
    },
    {
      id: 3,
      name: "bathrooms",
      icon: require("../../../public/assets/bathSvg.svg"),
      digit: item.property_id.Bathrooms,
    },
    {
      id: 4,
      name: "space",
      icon: require("../../../public/assets/furnished.svg"),
      digit: item.is_furnished ? "Yes" : "No",
    },
  ];
  const unitDetails = [
    { id: 1, title: "Renter name:", value: item.renter_name },
    {
      id: 2,
      title: "Rent amount per month:",
      value: item.rent_amount_per_month,
    },
    { id: 3, title: "Contract start:", value: item.contract_start },
    { id: 4, title: "Contract end:", value: item.contract_end },
    {
      id: 5,
      title: "Contract photo:",
      value: item.contract_photo || "No Photo",
      underline: true,
    },
    {
      id: 6,
      title: "Renter id photo:",
      value: item.renter_id_photo || "No Photo",
      underline: true,
    },
  ];

  const viewPhoto = (photo) => {
    if (photo !== "No Photo") {
      window.open(photo, "_blank");
    }
  };
  return (
    <Card
      hoverable
      className={styles.unitCardCon}
      onClick={() => navigate.push(`/Details/${item.id}`)}
    >
      <div className={styles.cardHeader}>
        <Row
          className={`justify-content-around align-items-center ${styles.cardDetails}`}
          style={{ backgroundColor: "#f4f4f4" }}
        >
          <Col className=" flex-column align-items-center justify-content-center">
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
          <Col className="ps-0">
            <div className={styles.iconsCon}>
              <Row
                style={{ minHeight: 120 }}
                className="align-items-center p-1 d-flex justify-content-center border-start border-1 m-auto"
              >
                {tempIcons.map((item) => {
                  return (
                    <Col
                      key={item.id + ""}
                      className="d-flex align-items-center justify-content-start "
                      md={6}
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
        <div className="px-3">
          {unitDetails.map((detail) => {
            return (
              <div className={"d-flex align-items-center my-5"}>
                <div style={{ width: 8, height: 8, background: "#D6D7DB" }} />
                <Text className={"mx-2"}>{detail.title}</Text>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    [5, 6].includes(detail.id) && viewPhoto(detail.value);
                  }}
                >
                  <Text
                    fontSize={18}
                    fontFamily={FontFamily.medium}
                    style={{
                      textDecoration: detail.underline ? "underline" : "none",
                      maxWidth: "100%",
                    }}
                  >
                    {detail.underline
                      ? detail.value.slice(0, 35)
                      : detail.value}
                  </Text>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default UnitCard;
