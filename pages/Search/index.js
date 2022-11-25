import React from "react";
import ScreenWrapper from "components/General/ScreenWrapper";
import { Col, Row } from "react-bootstrap";
import PropertyCard from "components/HomeComponents/propertyCard/propertyCard";
const Search = () => {
  return (
    <ScreenWrapper>
      <Row>
        <Col lg={5}>
          <PropertyCard />
        </Col>
        <Col></Col>
      </Row>
    </ScreenWrapper>
  );
};

export default Search;
