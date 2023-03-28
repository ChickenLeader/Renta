import React from "react";
import { Col, Row } from "react-bootstrap";
import ScreenWrapper from "components/General/ScreenWrapper";
import PropertyCard from "components/HomeComponents/propertyCard/propertyCard";
import styles from "./latest.module.css";
import { Pagination } from "@mui/material";
import CustomPropertyCard from "components/HomeComponents/propertyCard/customPropertyCard";
import { Services } from "apis/Services/Services";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const LatestSeen = ({ data }) => {
  const router = useRouter();

  const handlePagination = (event, value) => {
    const currentQuery = router.query;
    currentQuery.page = value;
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
            className="pagination"
            count={data.pages_number}
            defaultPage={+router.query?.page || 1}
            page={+router.query?.page}
            color="primary"
            onChange={handlePagination}
          />
        </div>
      )}
    </ScreenWrapper>
  );
};

export async function getServerSideProps({ query, locale }) {
  const valu = { most_viewed: true, pages_number: 6, page: 1 };
  const data = await Services.getProperties(valu, locale);
  return {
    props: { data, ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default LatestSeen;
