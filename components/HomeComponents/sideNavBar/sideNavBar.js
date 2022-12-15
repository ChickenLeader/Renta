import Text from "components/General/Text";
import React, { useState } from "react";
import styles from "./sideNavBar.module.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Image from "next/image";
import { Button } from "antd";
import { Colors } from "constants/Colors";

let areas = [
  { id: 1, name: "New Cairo" },
  { id: 2, name: "Zamalek" },
  { id: 3, name: "Downtown" },
];

let properties = [
  { id: 1, name: "Apartment" },
  { id: 2, name: "Office" },
  { id: 3, name: "Villa" },
];
let monthlyRates = [
  { id: 1, name: "+2000 LE" },
  { id: 2, name: "+5000 LE" },
  { id: 3, name: "+7000 LE" },
];

const rightArrow = require("public/assets/vuesax-linear-arrow-square-right.svg");
const leftArrow = require("public/assets/vuesax-linear-arrow-square-left.svg");

const SideNavBar = () => {
  const [isExpanded, setExpendState] = useState(false);
  const [area, setarea] = useState(areas[0]["id"]);
  const [property, setproperty] = useState(properties[0]["id"]);
  const [room, setroom] = useState(null);

  return (
    <div
      className={
        isExpanded ? styles.sideNavContainer : styles.sideNavContainerNX
      }
    >
      <div className={styles.navHeading}>
        <div
          className={styles.hamburger}
          onClick={() => setExpendState(!isExpanded)}
        >
          {isExpanded ? (
            <Image src={leftArrow} />
          ) : (
            <>
              <Text style={{ color: "white" }}>Filters </Text>
              <Image src={rightArrow} className="ms-2" objectFit="contain" />
            </>
          )}
        </div>
      </div>
      <div>
        {isExpanded && (
          <>
            <div className="mb-5">
              <Text color="white" className="mb-2">
                Select Area
              </Text>
              <FormControl sx={{ minWidth: "100%", backgroundColor: "white" }}>
                <Select
                  value={area}
                  onChange={(event) => setarea(event.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {areas.map((item) => (
                    <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="mb-5">
              <Text color="white" className="mb-2">
                Property type
              </Text>
              {properties.map((item) => (
                <div
                  className={
                    property == item.id
                      ? styles.propertyView
                      : styles.propertyViewSelected
                  }
                  onClick={() => setproperty(item.id)}
                >
                  <Text
                    fontSize={14}
                    color={property == item.id ? "black" : "white"}
                  >
                    {item.name}
                  </Text>
                </div>
              ))}
            </div>
            <div className="mb-5">
              <Text color="white" className="mb-2">
                Price range
              </Text>
            </div>
            <div className="mb-5">
              <Text color="white" className="mb-2">
                No. Of rooms
              </Text>
              <div className={styles.roomView}>
                {[1, 2, 3, 4, 5, 6, "More"].map((item) => (
                  <div
                    className={room == item ? styles.selectedRoom : styles.room}
                    onClick={() => setroom(item)}
                  >
                    <Text
                      color={room == item ? "black" : "white"}
                      style={{ textAlign: "center" }}
                    >
                      {item}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-5">
              <Text color="white" className="mb-2">
                Property area (m2)
              </Text>
            </div>
            <div className=" d-flex flex-column align-items-center justify-content-center">
              <Text color="white" className={styles.resetButton}>
                Reset filter
              </Text>
              <Button type="primary" className={styles.applyButton}>
                Apply filter (320)
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SideNavBar;
