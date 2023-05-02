import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import { FontFamily } from "constants/FontFamily";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Services } from "apis/Services/Services";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
export default function Home({ areas, propertyType, monthlyRates }) {
  const router = useRouter();
  const { t } = useTranslation();
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
}

export const getServerSideProps = async ({ locale }) => {
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
};

