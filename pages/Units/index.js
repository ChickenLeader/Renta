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
  let myUnits = [
    {
      id: 1,
      name: "ahmed mosaad mohamed",
      rent: "28,500",
      startDate: "12.05.2022",
      endDate: "11.05.2025",
      photo: "W1235..123512345.1235./23512.png",
      idPhoto: "W1235..123512345.1235./23512.png",
    },
    {
      id: 2,
      name: "ahmed mosaad mohamed",
      rent: "28,500",
      startDate: "12.05.2022",
      endDate: "11.05.2025",
      photo: "W1235..123512345.1235./23512.png",
      idPhoto: "W1235..123512345.1235./23512.png",
    },
  ];
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
    router.push("/Home");
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
          {data?.length > 0 ? (
            <Row className="justify-content-center align-items-center">
              {data.map((item) => {
                return (
                  <Col md={6} key={item.id + ""}>
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
                count={data?.count / 2}
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
