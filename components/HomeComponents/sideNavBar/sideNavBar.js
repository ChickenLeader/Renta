import Text from "components/General/Text";
import React, { useEffect, useRef, useState } from "react";
import styles from "./sideNavBar.module.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Image from "next/image";
import { Button, Slider } from "antd";
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
  const [priceRange, setpriceRange] = useState([2500, 5500]);
  const [areaRange, setareaRange] = useState([120, 250]);
  const [room, setroom] = useState(null);
  const [priceScale, setpriceScale] = useState(0);
  const [areaScale, setareaScale] = useState(0);
  const Ref = useRef();
  const rangeWidth = (priceRange[0] - priceRange[1]) / (1000 - 7000);
  const distanceWidth = (areaRange[0] - areaRange[1]) / (70 - 300);
  const resetFilters = () => {
    setarea(areas[0]["id"]);
    setproperty(properties[0]["id"]);
    setroom(null);
  };

  const applyFilters = () => {
    setExpendState(false);
  };

  useEffect(() => {
    setpriceScale(Ref.current.clientWidth * rangeWidth);
    setareaScale(Ref.current.clientWidth * distanceWidth);
  }, [isExpanded, rangeWidth, distanceWidth]);

  return (
    <div
      ref={Ref}
      className={
        isExpanded ? styles.sideNavContainer : styles.sideNavContainerNX
      }
    >
      <div className={styles.navHeading}>
        <div
          className={isExpanded ? styles.hamburgerNX : styles.hamburger}
          onClick={() => setExpendState(!isExpanded)}
        >
          {isExpanded ? (
            <Image src={leftArrow} />
          ) : (
            <>
              <Text style={{ color: "white" }}>Filters </Text>
              <Image
                src={rightArrow}
                style={{ margin: 15 }}
                objectFit="contain"
              />
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
              <div>
                <Image
                  src={require("public/assets/rangeTest1.svg")}
                  objectFit="contain"
                  width={priceScale - 20}
                />
                <Slider
                  range
                  defaultValue={priceRange}
                  min={1000}
                  max={7000}
                  onChange={(x) => setpriceRange(x)}
                  trackStyle={{ backgroundColor: Colors.primary }}
                  handleStyle={{
                    borderColor: Colors.primary,
                  }}
                />
                <div className="d-flex align-items-center justify-content-around">
                  <Text
                    color="white"
                    fontSize={14}
                    className={styles.priceRange}
                  >
                    {priceRange[0]
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Text>
                  <Text
                    color="white"
                    fontSize={14}
                    className={styles.priceRange}
                  >
                    {priceRange[1]
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Text>
                </div>
              </div>
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
              <Image
                src={require("public/assets/rangeTest1.svg")}
                objectFit="contain"
                width={areaScale - 20}
              />
              <Slider
                range
                defaultValue={areaRange}
                min={70}
                max={300}
                // className="my-4"
                onChange={(x) => setareaRange(x)}
                trackStyle={{ backgroundColor: Colors.primary }}
                handleStyle={{ borderColor: Colors.primary }}
              />
              <div className="d-flex align-items-center justify-content-around">
                <Text
                  color="white"
                  fontSize={14}
                  className={styles.priceRange}
                  // style={{
                  //   position: "relative",
                  //   left: (priceRange[0] / 7000) * 100,
                  // }}
                >
                  {areaRange[0]}
                </Text>
                <Text
                  color="white"
                  fontSize={14}
                  className={styles.priceRange}
                  // style={{
                  //   position: "relative",
                  //   right: (priceRange[1] / 7000) * 100,
                  // }}
                >
                  {areaRange[1]}
                </Text>
              </div>
            </div>
            <div className=" d-flex flex-column align-items-center justify-content-center">
              <Text
                color="white"
                className={styles.resetButton}
                onClickAction={resetFilters}
              >
                Reset filter
              </Text>
              <Button
                type="primary"
                className={styles.applyButton}
                onClick={applyFilters}
              >
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
