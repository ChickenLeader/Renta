import React from "react";
import Container from "components/General/Container";
import ScreenWrapper from "components/General/ScreenWrapper";
import Text from "components/General/Text";
import PropertyCard from "components/HomeComponents/propertyCard/propertyCard";
import { FontFamily } from "constants/FontFamily";
import { Col, Row } from "react-bootstrap";
import styles from "./units.module.css";
import UnitCard from "components/HomeComponents/propertyCard/unitCard";
import { Colors } from "constants/Colors";
import { logoutHandler } from "hooks/logoutHandler";
import Image from "next/image";

const Units = () => {
  let myUnits = [
    {
      id: 1,
      name: "ahmed mosaad mohamed",
      rent: "28,500",
      startDate: "12.05.2022",
      endDate: "11.05.2025",
      photo: "W1235..123512345.1235./23512.png",
      idPhoto: "W1235..123512345.1235./23512.png",
    },
    {
      id: 2,
      name: "ahmed mosaad mohamed",
      rent: "28,500",
      startDate: "12.05.2022",
      endDate: "11.05.2025",
      photo: "W1235..123512345.1235./23512.png",
      idPhoto: "W1235..123512345.1235./23512.png",
    },
  ];

  return (
    <ScreenWrapper>
      <Container>
        <div className="my-2">
          <div
            className="d-flex justify-content-between align-items-center my-5 mx-2"
            style={{ width: "80%" }}
          >
            <Text fontSize={64} color="#162137" fontFamily={FontFamily.bold}>
              my units
            </Text>
            <div className="pointer" onClick={logoutHandler}>
              <Text
                fontSize={18}
                color={Colors.primary}
                fontFamily={FontFamily.bold}
                style={{ textDecoration: "underline" }}
              >
                Logout
              </Text>
            </div>
          </div>
          <Row className="justify-content-between align-items-center">
            {myUnits.map((item) => {
              return (
                <Col key={item.id + ""} lg={5}>
                  <UnitCard item={item} />
                </Col>
              );
            })}
            <Col lg={2}>
              <div className={styles.arrowCon}>
                <Image src={require("public/assets/UnitsArrow.svg")} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </ScreenWrapper>
  );
};

export default Units;
