import ScreenWrapper from "components/General/ScreenWrapper";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import { FontFamily } from "constants/FontFamily";
import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./contactUs.module.css";

const ContactUs = () => {
  const ContactUsArr = [
    { id: 1, text: +20012412342, icon: require("public/assets/phoneSvg.svg") },
    {
      id: 2,
      text: "renta@info.com",
      icon: require("public/assets/mailSvg.svg"),
    },
    {
      id: 3,
      text: "13 Abbas elakkad, Nasr city, cairo, egypt",
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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est
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

export default ContactUs;
