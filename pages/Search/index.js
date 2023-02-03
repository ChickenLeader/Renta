import React, { useEffect, useState } from "react";
import ScreenWrapper from "components/General/ScreenWrapper";
import { Col, Container, Row } from "react-bootstrap";
import PropertyCard from "components/HomeComponents/propertyCard/propertyCard";
import SideNavBar from "components/HomeComponents/sideNavBar/sideNavBar";
import { Pagination } from "@mui/material";
import { Colors } from "constants/Colors";
import styles from "./search.module.css";
import { useRouter } from "next/router";
import { Services } from "apis/Services/Services";

const Search = ({ data }) => {
  const router = useRouter();
  const filtersParsed = JSON.parse(router.query.filter);
  const filterData = JSON.parse(router.query.filterData);
  const [filteres, setfilteres] = useState(filtersParsed);
  const [filteredProperties, setfilteredProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setpage] = useState(1);

  const submitFilters = async (values) => {
    let Valu = {};
    const properties = await Services.getProperties();
    setfilteredProperties(properties);
    // console.log(properties, "normal");
  };

  return (
    <ScreenWrapper style={{ minHeight: 750 }}>
      <Container fluid style={{ minHeight: 750 }}>
        <SideNavBar
          filters={filteres}
          setfilteres={(values) => setfilteres(values)}
          filterData={filterData}
        />
        <Row className="justify-content-between">
          <Col lg={6} md={12} className="mt-4 ps-5">
            {data.results.map((item) => (
              <PropertyCard key={item.id + ""} item={item} />
            ))}
          </Col>
          <Col lg={6} md={12} className="pe-0 pb-2" style={{ minHeight: 755 }}>
            <div className={styles.iframe}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d78146.87474262953!2d31.33369147247803!3d30.04728278348716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1669470927403!5m2!1sen!2seg"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
        {data.results.length > 5 && (
          <div className=" d-flex justify-content-center align-items-center my-5">
            <Pagination
              count={data.results.length / 5}
              color="primary"
              onChange={(x) => setpage(+x.target.innerText)}
            />
          </div>
        )}
      </Container>
    </ScreenWrapper>
  );
};

export async function getServerSideProps({ query }) {
  let filterData = JSON.parse(query.filter);
  const data = await Services.getProperties(filterData);
  return { props: { data } };
}
export default Search;
