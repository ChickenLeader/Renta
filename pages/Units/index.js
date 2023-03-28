import React, { useEffect, useState } from "react";
import Container from "components/General/Container";
import ScreenWrapper from "components/General/ScreenWrapper";
import Text from "components/General/Text";
import { FontFamily } from "constants/FontFamily";
import { Col, Row } from "react-bootstrap";
import UnitCard from "components/HomeComponents/propertyCard/unitCard";
import { Colors } from "constants/Colors";
import { logoutHandler } from "hooks/logoutHandler";
import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { Services } from "apis/Services/Services";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Units = () => {
  const router = useRouter();
  const [data, setdata] = useState([]);
  const getUnits = async () => {
    let lang = localStorage.getItem("AppLang") || "en";
    await Services.myUnits(lang)
      .then((res) => {
        console.log(res, "ress");
        setdata(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const logout = () => {
    logoutHandler();
    router.push("/");
  };
  useEffect(() => {
    getUnits();
  }, []);

  return (
    <ScreenWrapper>
      <Container>
        <div className="my-2">
          <div
            className="d-flex justify-content-between align-items-center my-5 mx-2"
            // style={{ width: "80%" }}
          >
            <Text fontSize={64} color="#162137" fontFamily={FontFamily.bold}>
              my units
            </Text>
            <div className="pointer" onClick={logout}>
              <Text
                fontSize={18}
                color={Colors.primary}
                fontFamily={FontFamily.bold}
                style={{ textDecoration: "underline" }}
              >
                Logout
              </Text>
            </div>
          </div>
          {data?.results?.length > 0 ? (
            <Row className="justify-content-center align-items-center">
              {data.results.map((item) => {
                return (
                  <Col lg={6} md={12} xs={12} key={item.id + ""}>
                    <UnitCard item={item} />
                  </Col>
                );
              })}
              {/* <Col lg={2}>
              <div className={styles.arrowCon}>
                <Image src={require("public/assets/UnitsArrow.svg")} />
              </div>
            </Col> */}
            </Row>
          ) : (
            <Text fontSize={20} className={"text-center mt-2"}>
              No units yet
            </Text>
          )}
          {data?.count > 2 && (
            <div className=" d-flex justify-content-center align-items-center my-5">
              <Pagination
                className="pagination"
                count={data?.pages_number}
                color="primary"
                // onChange={(x) => handlePagination(+x.target.innerText)}
              />
            </div>
          )}
        </div>
      </Container>
    </ScreenWrapper>
  );
};

export async function getServerSideProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ["common"])) } };
}

export default Units;
