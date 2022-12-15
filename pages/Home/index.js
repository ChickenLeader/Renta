import React, { useState } from "react";
import ScreenWrapper from "components/General/ScreenWrapper";
import styles from "./home.module.css";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import { FontFamily } from "constants/FontFamily";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/router";

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

const Home = () => {
  const [area, setarea] = useState(1);
  const [property, setproperty] = useState(1);
  const [monthlyRate, setmonthlyRate] = useState(1);
  const navigate = useRouter();

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
        <div className="mb-5">
          <Text
            fontFamily={FontFamily.bold}
            fontSize={64}
            color={Colors.secondary}
          >
            find you dream house
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
            <InputLabel>Select area</InputLabel>
            <Select
              value={area}
              onChange={(event) => setarea(event.target.value)}
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
            <InputLabel>Type of property</InputLabel>
            <Select
              value={property}
              // label="Age"
              onChange={(event) => setproperty(event.target.value)}
            >
              {properties.map((item) => (
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
            <InputLabel>Monthly rate</InputLabel>
            <Select
              value={monthlyRate}
              // label="Age"
              onChange={(event) => setmonthlyRate(event.target.value)}
            >
              {monthlyRates.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div
            className={styles.searchIcon}
            onClick={() => navigate.push("/Search")}
          >
            <Image src={require("public/assets/searchIcon.svg")} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Home;
