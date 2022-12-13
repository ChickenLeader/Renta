import React from "react";
import ScreenWrapper from "components/General/ScreenWrapper";
import { Col, Container, Row } from "react-bootstrap";
import PropertyCard from "components/HomeComponents/propertyCard/propertyCard";
import SideNavBar from "components/HomeComponents/sideNavBar/sideNavBar";
const Search = () => {
  return (
    <ScreenWrapper>
      <Container fluid>
        <SideNavBar />
        <Row className="justify-content-between">
          <Col lg={6} md={12} className="my-4">
            {[1, 2, 3, 4].map((item) => (
              <PropertyCard key={item + ""} />
            ))}
          </Col>
          <Col lg={6} md={12} className="pe-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d78146.87474262953!2d31.33369147247803!3d30.04728278348716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1669470927403!5m2!1sen!2seg"
              width="100%"
              height="100%"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </ScreenWrapper>
  );
};

export default Search;
