import React from "react";
import { Col, Row } from "react-bootstrap";
import ScreenWrapper from "components/General/ScreenWrapper";
import PropertyCard from "components/HomeComponents/propertyCard/propertyCard";
import styles from "./latest.module.css";
import { Pagination } from "@mui/material";
import CustomPropertyCard from "components/HomeComponents/propertyCard/customPropertyCard";
import { Services } from "apis/Services/Services";
import { useRouter } from "next/router";
const LatestSeen = ({ data }) => {
  const router = useRouter();

  const handlePagination = (page) => {
    const currentQuery = router.query;
    currentQuery.page = page;
    router.push({ query: currentQuery }, undefined, { shallow: false });
  };
  return (
    <ScreenWrapper>
      <div className={styles.latestContainer}>
        <Row className="justify-content-start">
          {data.results.map((item) => (
            <Col key={item + ""} lg={6}>
              <CustomPropertyCard item={item} />
            </Col>
          ))}
        </Row>
      </div>
      {data.pages_number > 1 && (
        <div className=" d-flex justify-content-center align-items-center my-5">
          <Pagination
            count={data.pages_number}
            color="primary"
            onChange={(x) => handlePagination(+x.target.innerText)}
          />
        </div>
      )}
    </ScreenWrapper>
  );
};

export async function getServerSideProps({ query }) {
  const valu = { most_viewed: true, pages_number: 6, page: 1 };
  const data = await Services.getProperties(valu);
  return { props: { data } };
}

export default LatestSeen;
