import ScreenWrapper from "components/General/ScreenWrapper";
import PropertyCard from "components/HomeComponents/propertyCard/propertyCard";
import React from "react";
import { Col, Row } from "react-bootstrap";

const LatestSeen = () => {
  return (
    <ScreenWrapper>
      <div>
        <Row className="justify-content-around">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
            <Col lg={5}>
              <PropertyCard />
            </Col>
          ))}
        </Row>
      </div>
    </ScreenWrapper>
  );
};

export default LatestSeen;
