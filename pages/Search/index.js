import React, { useEffect, useLayoutEffect, useState } from "react";
import ScreenWrapper from "components/General/ScreenWrapper";
import { Col, Container, Row } from "react-bootstrap";
import PropertyCard from "components/HomeComponents/propertyCard/propertyCard";
import SideNavBar from "components/HomeComponents/sideNavBar/sideNavBar";
import { Pagination } from "@mui/material";
import { Colors } from "constants/Colors";
import styles from "./search.module.css";
import { useRouter } from "next/router";
import { Services } from "apis/Services/Services";
import { useSelector } from "react-redux";
import Text from "components/General/Text";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const MapWithNoSSR = dynamic(
  () => import("components/HomeComponents/map/Map"),
  {
    ssr: false,
  }
);

const Search = ({ data, areas, propertyType, monthlyRates }) => {
  const router = useRouter();
  const selectedFilters = router.query;
  const [mapTrigger, setmapTrigger] = useState(false);
  const [locations, setlocations] = useState([]);
  const sideNavData = {
    areas: areas,
    propertyTypes: propertyType,
    monthlyRates: monthlyRates,
  };

  const submitFilters = async (values) => {
    const Valu = { ...values, page: router.query.page || 1, page_size: 4 };
    router.push({ query: Valu }, undefined, { shallow: false });
    setmapTrigger(!mapTrigger);
  };

  const handlePagination = (page) => {
    const currentQuery = router.query;
    currentQuery.page = page;
    router.push({ query: currentQuery }, undefined, { shallow: false });
  };

  useLayoutEffect(() => {
    let tempArr = [];
    data.results.map((item) =>
      tempArr.push({
        id: item.id,
        latitude: item.latitude,
        longitude: item.longitude,
      })
    );
    setlocations(tempArr);
  }, [mapTrigger]);

  return (
    <ScreenWrapper style={{ minHeight: 750 }}>
      <Container fluid style={{ minHeight: 750 }}>
        <SideNavBar
          submitFilters={(data) => submitFilters(data)}
          filters={selectedFilters}
          sideNavData={sideNavData}
        />
        <Row className="justify-content-between">
          <Col lg={6} md={12} className="mt-4 ps-5">
            {data.results.length ? (
              data.results.map((item) => (
                <PropertyCard key={item.id + ""} item={item} />
              ))
            ) : (
              <Text style={{ textAlign: "center" }}>No results found</Text>
            )}
          </Col>
          <Col lg={6} md={12} className="pe-0 pb-0" style={{ minHeight: 755 }}>
            <div className={styles.iframe}>
              <MapWithNoSSR data={locations} />
            </div>
          </Col>
        </Row>
        {data?.count > 4 && (
          <div className=" d-flex justify-content-center align-items-center my-5">
            <Pagination
              count={data.pages_number}
              color="primary"
              onChange={(x) => handlePagination(+x.target.innerText)}
            />
          </div>
        )}
      </Container>
    </ScreenWrapper>
  );
};

export async function getServerSideProps({ query, locale }) {
  let filterData = query || "";
  const valu = { ...filterData, page: +query.page || 1, page_size: 4 };
  const data = await Services.getProperties(valu, locale);
  const areas = await Services.areas();
  const propertyType = await Services.propertyTypes();
  const monthlyRates = await Services.monthlyRates();
  return {
    props: {
      data,
      areas,
      propertyType,
      monthlyRates,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default Search;
