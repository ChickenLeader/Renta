import React from "react";
import { Col, Row } from "react-bootstrap";
import ScreenWrapper from "components/General/ScreenWrapper";
import PropertyCard from "components/HomeComponents/propertyCard/propertyCard";
import styles from "./latest.module.css";
import { Pagination } from "@mui/material";
const LatestSeen = () => {
  return (
    <ScreenWrapper>
      <div className={styles.latestContainer}>
        <Row className="justify-content-around">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
            <Col lg={6}>
              <PropertyCard />
            </Col>
          ))}
        </Row>
      </div>
      <div className=" d-flex justify-content-center align-items-center my-5">
        <Pagination count={5} color="primary" />
      </div>
    </ScreenWrapper>
  );
};

export default LatestSeen;
