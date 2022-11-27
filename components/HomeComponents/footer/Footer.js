import Text from "components/General/Text";
import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./footer.module.css";
import logo from "../../../public/assets/RentaLogo.png";
import { Colors } from "constants/Colors";
export const Footer = () => {
  const Registration = true;

  const BottomTabItems = [
    {
      id: 1,
      name: "Navigation",
      list: [
        { id: 1, name: "Latest seen" },
        { id: 2, name: "Shortlist" },
      ],
    },
    {
      id: 2,
      name: "ABOUT RENTA",
      list: [
        { id: 1, name: "Contact us" },
        { id: 2, name: "About us" },
      ],
    },
    {
      id: 3,
      list: [
        { id: 1, name: "Terms & conditions" },
        { id: 2, name: "Privacy policy" },
      ],
    },
    {
      id: 4,
      name: "ABOUT RENTA",
      list: [
        { id: 1, name: "INSTAGRAM" },
        { id: 2, name: "YOUTUBE" },
        { id: 3, name: "FACEBOOK" },
      ],
    },
  ];

  return (
    <div className={styles.footercontainer}>
      <div>
        <Row>
          <Col lg={4} sm={6} xs={12}>
            <div className={styles.footerImage}>
              <Image alt="logo" src={logo} />
            </div>
          </Col>
          <Col>
            <Row className="justify-content-end">
              {BottomTabItems.map((item, index) => {
                return (
                  <Col
                    key={item.id}
                    lg={index == BottomTabItems.length - 1 ? 2 : 3}
                    xs={6}
                  >
                    <div className={styles.listColumn}>
                      {item.name && (
                        <Text
                          fontSize={12}
                          className="mb-3"
                          color={Colors.secondaryText}
                        >
                          {item?.name}
                        </Text>
                      )}

                      {item?.list?.map((sub_item) => (
                        <div key={sub_item.id}>
                          <Text
                            fontSize={14}
                            className="pb-2 mb-1"
                            color="white"
                          >
                            {sub_item.name}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};
