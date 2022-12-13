import Text from "components/General/Text";
import React, { useState } from "react";
import styles from "./sideNavBar.module.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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

const SideNavBar = () => {
  const [isExpanded, setExpendState] = useState(false);
  const [area, setarea] = useState(1);

  return (
    <div
      className={
        isExpanded ? styles.sideNavContainer : styles.sideNavContainerNX
      }
    >
      <div className={styles.navUpper}>
        <div className={styles.navHeading}>
          <div
            className={styles.hamburger}
            onClick={() => setExpendState(!isExpanded)}
          >
            <Text style={{ color: "white" }}>Filters </Text>
          </div>
        </div>
        <div className="nav-menu"></div>
      </div>
      <div>
        {isExpanded && (
          <div>
            <Text color="white">Select Area</Text>
            <FormControl
              sx={{ m: 1, minWidth: "100%", backgroundColor: "white" }}
            >
              <Select
                value={area}
                onChange={setarea}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNavBar;
