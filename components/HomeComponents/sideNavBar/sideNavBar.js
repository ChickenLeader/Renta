import Text from "components/General/Text";
import React, { useEffect, useRef, useState } from "react";
import styles from "./sideNavBar.module.css";
import { FormControl, MenuItem, Select } from "@mui/material";
import Image from "next/image";
import { Button, Slider } from "antd";
import { Colors } from "constants/Colors";
import { i18n, useTranslation } from "next-i18next";

const rightArrow = require("public/assets/vuesax-linear-arrow-square-right.svg");
const leftArrow = require("public/assets/vuesax-linear-arrow-square-left.svg");

const SideNavBar = ({ filters, submitFilters, sideNavData }) => {
  const Ref = useRef();
  const { t } = useTranslation();
  // const filtersData = useSelector((state) => state.app.filtersData);
  const [isExpanded, setExpendState] = useState(false);
  const [area, setarea] = useState(filters.area__name);
  const [property, setproperty] = useState(filters.property_type__id);
  const [areaRange, setareaRange] = useState([120, 250]);
  const [room, setroom] = useState(null);
  const [priceRange, setpriceRange] = useState([
    filters.price_gte,
    filters.price_lte,
  ]);

  const rooms = [
    { id: 1, name: 1, value: 1 },
    { id: 2, name: 2, value: 2 },
    { id: 3, name: 3, value: 3 },
    { id: 4, name: 4, value: 4 },
    { id: 5, name: 5, value: 5 },
    { id: 6, name: 6, value: 6 },
    { id: 7, name: "More", value: 7 },
  ];

  const resetFilters = () => {
    setarea(sideNavData.areas[0]["id"]);
    setproperty(sideNavData.propertyTypes[0]["id"]);
    setroom(null);
  };

  const applyFilters = () => {
    setExpendState(false);
    let Valu = {
      area__name: "DownTown",
      area_gte: areaRange[0],
      area_lte: areaRange[1],
      property_type__name: property,
      price_gte: priceRange[0],
      price_lte: priceRange[1],
      Bedrooms: room.value,
    };
    submitFilters(Valu);
  };

  return (
    <div
      ref={Ref}
      className={`${
        isExpanded ? styles.sideNavContainer : styles.sideNavContainerNX
      } sideNavCon`}
    >
      <div className={`${styles.navHeading} navHeading`}>
        <div
          className={`${isExpanded ? styles.hamburger : styles.hamburgerNX} ${
            isExpanded ? "sideNavHamburgerNX" : "sideNavHamburger"
          } `}
          onClick={() => setExpendState(!isExpanded)}
        >
          {isExpanded ? (
            <Image alt=" " src={i18n.dir() == "rtl" ? rightArrow : leftArrow} />
          ) : (
            <>
              <Text style={{ color: "white" }}>Filters</Text>
              <Image
                alt=" "
                src={i18n.dir() == "rtl" ? leftArrow : rightArrow}
                style={{ margin: 15 }}
                objectFit="contain"
              />
            </>
          )}
        </div>
      </div>
      <div>
        <div className={isExpanded ? styles.filters : styles.filtersNX}>
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
                {sideNavData?.areas?.map((item) => (
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
                {sideNavData?.propertyTypes?.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="mb-5">
            <Text color="white" className="mb-2">
              Price range
            </Text>
            <div>
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
                <Text color="white" fontSize={14} className={styles.priceRange}>
                  {priceRange[0]
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Text>
                <Text color="white" fontSize={14} className={styles.priceRange}>
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
              {rooms.map((item) => (
                <div
                  key={item + ""}
                  className={room == item ? styles.selectedRoom : styles.room}
                  onClick={() => setroom(item)}
                >
                  <Text
                    color={room == item ? "black" : "white"}
                    style={{ textAlign: "center" }}
                  >
                    {item.name}
                  </Text>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-5">
            <Text color="white" className="mb-2">
              Property area (m2)
            </Text>

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
              <Text color="white" fontSize={14} className={styles.priceRange}>
                {areaRange[0]}
              </Text>
              <Text color="white" fontSize={14} className={styles.priceRange}>
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
              {t("Apply filter")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
