import React from "react";
import Container from "components/General/Container";
import ScreenWrapper from "components/General/ScreenWrapper";
import Text from "components/General/Text";
import PropertyCard from "components/HomeComponents/propertyCard/propertyCard";
import { FontFamily } from "constants/FontFamily";
import { Col, Row } from "react-bootstrap";
import styles from "./units.module.css";
import UnitCard from "components/HomeComponents/propertyCard/unitCard";

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
          <Text
            fontSize={64}
            color="#162137"
            fontFamily={FontFamily.bold}
            className="my-5"
          >
            my units
          </Text>
          <Row className="justify-content-between">
            {myUnits.map((item) => {
              return (
                <Col key={item.id + ""} lg={6}>
                  <UnitCard />
                  <div className="ms-3">
                    <div className={styles.unitDetails}>
                      <Text>Renter name</Text>
                      <Text fontSize={18} fontFamily={FontFamily.medium}>
                        {item.name}
                      </Text>
                    </div>
                    <div className={styles.unitDetails}>
                      <Text>Rent amount per month</Text>
                      <Text fontSize={18} fontFamily={FontFamily.medium}>
                        {item.rent}
                      </Text>
                    </div>
                    <div className={styles.unitDetails}>
                      <Text>Contract start</Text>
                      <Text fontSize={18} fontFamily={FontFamily.medium}>
                        {item.startDate}
                      </Text>
                    </div>
                    <div className={styles.unitDetails}>
                      <Text>Contract end</Text>
                      <Text fontSize={18} fontFamily={FontFamily.medium}>
                        {item.endDate}
                      </Text>
                    </div>
                    <div className={styles.unitDetails}>
                      <Text>Contract photo</Text>
                      <Text fontSize={18} fontFamily={FontFamily.medium}>
                        {item.photo}
                      </Text>
                    </div>
                    <div className={styles.unitDetails}>
                      <Text>Renter id photo</Text>
                      <Text fontSize={18} fontFamily={FontFamily.medium}>
                        {item.idPhoto}
                      </Text>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </ScreenWrapper>
  );
};

export default Units;
