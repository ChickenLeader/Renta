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

const MapWithNoSSR = dynamic(
  () => import("components/HomeComponents/map/Map"),
  {
    ssr: false,
  }
);
const Search = ({ data, areas, propertyType, monthlyRates }) => {
  const router = useRouter();
  // const filtersData = useSelector((state) => state.app.filtersData);
  const selectedFilters = JSON.parse(router.query.filter);
  const [filteredProperties, setfilteredProperties] = useState(data);
  const [mapTrigger, setmapTrigger] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setpage] = useState(1);
  const sideNavData = {
    areas: areas,
    propertyTypes: propertyType,
    monthlyRates: monthlyRates,
  };
  const [locations, setlocations] = useState([]);

  // this not to be send inside the Comp so we can have the result properties
  // it should be sent as a props to the component, and called from inside
  const submitFilters = async (values) => {
    const Valu = { ...values, page: page };
    const properties = await Services.getProperties(Valu);
    setfilteredProperties(properties);
    setmapTrigger(!mapTrigger);
  };

  // useEffect(() => {
  //   console.log(selectedFilters, "sdsdsdssdd");
  // }, []);
  useLayoutEffect(() => {
    let tempArr = [];
    // console.log(filteredProperties, "data?");
    filteredProperties.results.map((item) =>
      tempArr.push({
        id: item.id,
        latitude: item.latitude,
        longitude: item.longitude,
      })
    );
    setlocations(tempArr)
  }, [mapTrigger]);

  return (
    <ScreenWrapper style={{ minHeight: 750 }}>
      <Container fluid style={{ minHeight: 750 }}>
        <SideNavBar
          submitFilters={(data) => submitFilters(data)}
          filters={selectedFilters}
          sideNavData={sideNavData}
          // setfilteres={(values) => setselectedFilters(values)}
        />
        <Row className="justify-content-between">
          <Col lg={6} md={12} className="mt-4 ps-5">
            {filteredProperties.results.length ? (
              filteredProperties.results.map((item) => (
                <PropertyCard key={item.id + ""} item={item} />
              ))
            ) : (
              <Text style={{ textAlign: "center" }}>No results found</Text>
            )}
          </Col>
          <Col lg={6} md={12} className="pe-0 pb-2" style={{ minHeight: 755 }}>
            <div className={styles.iframe}>
            <MapWithNoSSR data={locations}/>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d78146.87474262953!2d31.33369147247803!3d30.04728278348716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1669470927403!5m2!1sen!2seg"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe> */}
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
  const areas = await Services.areas();
  const propertyType = await Services.propertyTypes();
  const monthlyRates = await Services.monthlyRates();
  return { props: { data, areas, propertyType, monthlyRates } };
}
export default Search;
