import Text from "components/General/Text";
import React, { useEffect, useRef, useState } from "react";
import styles from "./sideNavBar.module.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Image from "next/image";
import { Button, Slider } from "antd";
import { Colors } from "constants/Colors";
import { Services } from "apis/Services/Services";

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

const SideNavBar = ({ filters, setfilteres, filterData }) => {
  const Ref = useRef();
  const [isExpanded, setExpendState] = useState(false);
  const [filteredProperties, setfilteredProperties] = useState([]);
  const [area, setarea] = useState(filters.area);
  const [property, setproperty] = useState(filters.property_type);
  const [areaRange, setareaRange] = useState([120, 250]);
  const [room, setroom] = useState(null);
  const [priceRange, setpriceRange] = useState([
    filters.price_gte,
    filters.price_lte,
  ]);
  // const [priceScale, setpriceScale] = useState(0);
  // const [areaScale, setareaScale] = useState(0);
  // const rangeWidth = (priceRange[0] - priceRange[1]) / (1000 - 7000);
  // const distanceWidth = (areaRange[0] - areaRange[1]) / (70 - 300);

  const submitFilters = async (values) => {
    let Valu = {};
    const properties = await Services.getProperties();
    setfilteredProperties(properties);
    // console.log(properties, "normal");
  };
  const resetFilters = () => {
    setarea(areas[0]["id"]);
    setproperty(properties[0]["id"]);
    setroom(null);
  };

  const applyFilters = () => {
    setExpendState(false);
  };

  useEffect(() => {
    let x = {
      area__name: area,
      area_gte: areaRange[0],
      area_lte: areaRange[1],
      property_type__name: property,
      price_gte: priceRange[0],
      price_lte: priceRange[1],
      Bedrooms: room,
    };
    console.log(x, "xxxx");
  }, [area]);

  // useEffect(() => {
  //   setpriceScale(Ref.current.clientWidth * rangeWidth);F
  //   setareaScale(Ref.current.clientWidth * distanceWidth);
  // }, [isExpanded, rangeWidth, distanceWidth]);

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
            <Image alt=" " src={leftArrow} />
          ) : (
            <>
              <Text style={{ color: "white" }}>Filters</Text>
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
                  {filterData.areas.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="mb-5">
              <Text color="white" className="mb-2">
                Property type
              </Text>
              <FormControl sx={{ minWidth: "100%", backgroundColor: "white" }}>
                <Select
                  value={property}
                  onChange={(event) => setproperty(event.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {filterData.propertyTypes.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* {filterData.propertyTypes.map((item) => (
                <div
                  key={item.id}
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
              ))} */}
            </div>
            <div className="mb-5">
              <Text color="white" className="mb-2">
                Price range
              </Text>
              <div>
                {/* <Image
                  src={require("public/assets/rangeTest1.svg")}
                  objectFit="contain"
                  width={priceScale - 20}
                /> */}
                <Slider
                  range
                  defaultValue={priceRange}
                  min={1500}
                  max={30000}
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
                    key={item + ""}
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
              {/* <Image
                src={require("public/assets/rangeTest1.svg")}
                objectFit="contain"
                width={areaScale - 20}
              /> */}
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
