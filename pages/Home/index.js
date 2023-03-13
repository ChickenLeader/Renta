import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import { useDispatch } from "react-redux";
import ScreenWrapper from "components/General/ScreenWrapper";
import styles from "./home.module.css";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import { FontFamily } from "constants/FontFamily";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FiChevronDown } from "react-icons/fi";
import { Services } from "apis/Services/Services";
import { setFiltersData } from "redux/appReducer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// let areas = [
//   { id: 1, name: "New Cairo" },
//   { id: 2, name: "Zamalek" },
//   { id: 3, name: "Downtown" },
// ];

// let properties = [
//   { id: 1, name: "Apartment" },
//   { id: 2, name: "Office" },
//   { id: 3, name: "Villa" },
// ];

// let monthlyRates = [
//   { id: 1, min: 2000, max: 5000, name: "2000 - 5000 LE" },
//   { id: 2, min: 5000, max: 8000, name: "5000 - 8000 LE" },
//   { id: 3, min: 8000, max: 11000, name: "8000 - 11000 LE" },
//   { id: 4, min: 11000, max: 15000, name: "11000 - 15000 LE" },
//   { id: 5, min: 15000, max: 20000, name: "15000 - 19000 LE" },
//   { id: 6, min: 20000, max: 25000, name: "19000 - 23000 LE" },
//   { id: 7, min: 25000, max: 30000, name: "23000 - 30000 LE" },
// ];

const Home = ({ areas, propertyType, monthlyRates }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [area, setarea] = useState(1);
  const [property, setproperty] = useState(1);
  const [monthlyRate, setmonthlyRate] = useState(1);
  const selectedFilters = {
    area__name: areas[area - 1]["id"],
    property_type__id: propertyType[property - 1]["id"],
    price_gte: +monthlyRates[monthlyRate - 1]["min_price_range"],
    price_lte: +monthlyRates[monthlyRate - 1]["max_price_range"],
    page_size: 4,
  };

  const dropdownIcon = (props) => {
    return (
      <div>
        <FiChevronDown fontSize={26} color={Colors.primary} />
        {/* <Image src={require("public/assets/searchIcon.svg")} /> */}
      </div>
    );
  };

  // There's a problem in navBar being absolute on this screen because of the toggler in mobile view

  return (
    <div className={styles.homeCon}>
      <div className={styles.subCon}>
        <div className="mb-5 text-center">
          <Text
            fontFamily={FontFamily.bold}
            fontSize={64}
            color={Colors.secondary}
          >
            perfecting renting
          </Text>
          <Text fontSize={21} color={Colors.secondary} className="text-center">
            more than 500 units in one click
          </Text>
        </div>
        <div className={styles.searchCon}>
          <FormControl
            variant="standard"
            className={styles.areas}
            sx={{ m: 1 }}
          >
            <InputLabel className="home-input-label">
              {t("Select area")}
            </InputLabel>
            <Select
              value={area}
              onChange={(event) => setarea(event.target.value)}
              className="home-input-select"
              style={{ border: "none" }}
              // inputComponent={dropdownIcon}
            >
              {areas.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            className={styles.areas}
            sx={{ m: 1 }}
          >
            <InputLabel className="home-input-label">
              {t("Type of property")}
            </InputLabel>
            <Select
              value={property}
              className="home-input-select"
              onChange={(event) => setproperty(event.target.value)}
            >
              {propertyType.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            className={styles.areas}
            sx={{ m: 1 }}
          >
            <InputLabel className="home-input-label">
              {t("Monthly rate")}
            </InputLabel>
            <Select
              value={monthlyRate}
              className="home-input-select"
              onChange={(event) => setmonthlyRate(event.target.value)}
            >
              {/* {item.name} */}
              {monthlyRates.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {`${item.min_price_range} - ${item.max_price_range} LE`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div
            className={styles.searchIcon}
            onClick={() => {
              router.push({
                pathname: "/Search",
                query: { ...selectedFilters },
              });
            }}
          >
            <Image alt=" " src={require("public/assets/searchIcon.svg")} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export async function getServerSideProps({ locale }) {
  const areas = await Services.areas(locale);
  const propertyType = await Services.propertyTypes(locale);
  const monthlyRates = await Services.monthlyRates(locale);
  return {
    props: {
      areas,
      propertyType,
      monthlyRates,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default Home;
