import { Services } from "apis/Services/Services";
import ScreenWrapper from "components/General/ScreenWrapper";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import { FontFamily } from "constants/FontFamily";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./contactUs.module.css";

const ContactUs = ({ data }) => {
  const ContactUsArr = [
    {
      id: 1,
      text: data?.contact_no,
      icon: require("public/assets/phoneSvg.svg"),
    },
    {
      id: 2,
      text: data?.email,
      icon: require("public/assets/mailSvg.svg"),
    },
    {
      id: 3,
      text: data?.address,
      icon: require("public/assets/locationSvg.svg"),
    },
  ];
  return (
    <ScreenWrapper>
      <div className={styles.ContactUsContainer}>
        <Row className="justify-content-between">
          <Col lg={6} className={styles.detailsCol}>
            <Text
              fontSize={24}
              color={Colors.primary}
              fontFamily={FontFamily.semiBold}
            >
              Find us
            </Text>
            <Text fontSize={18} className="my-3">
              {data?.find_us}
            </Text>
            <div className="my-5">
              {ContactUsArr.map((item) => {
                return (
                  <div
                    key={item.id + ""}
                    className="d-flex align-items-center my-4"
                  >
                    <Image alt=" " src={item.icon} />
                    <Text fontSize={18} className="d-inline ms-4">
                      {item.text}
                    </Text>
                    <br />
                  </div>
                );
              })}
            </div>
          </Col>
          <Col lg={5}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d78146.87474262953!2d31.33369147247803!3d30.04728278348716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1669470927403!5m2!1sen!2seg"
              width={"100%"}
              height={"100%"}
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </div>
    </ScreenWrapper>
  );
};

export async function getServerSideProps({ locale }) {
  const data = await Services.getContactUs();
  return {
    props: { data, ...(await serverSideTranslations(locale, ["common"])) },
  };
}

export default ContactUs;
