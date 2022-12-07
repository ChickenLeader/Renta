import React from "react";
import ScreenWrapper from "components/General/ScreenWrapper";
import styles from "./home.module.css";
import Text from "components/General/Text";
import { Colors } from "constants/Colors";
import { FontFamily } from "constants/FontFamily";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
const Home = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
          <FormControl className={styles.areas} sx={{ m: 1 }}>
            <InputLabel>Select area</InputLabel>
            <Select
              labelId="demo-simple-select-disabled-label"
              id="demo-simple-select-disabled"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={styles.areas} sx={{ m: 1 }}>
            <InputLabel>Type of property</InputLabel>
            <Select
              labelId="demo-simple-select-disabled-label"
              id="demo-simple-select-disabled"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={styles.areas} sx={{ m: 1 }}>
            <InputLabel>Monthly rate</InputLabel>
            <Select
              labelId="demo-simple-select-disabled-label"
              id="demo-simple-select-disabled"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <div className={styles.searchIcon}></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Home;
