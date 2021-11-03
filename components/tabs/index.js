import styles from "../../styles/Tabs.module.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import YTFORM from "../forms/yt";
import FBFORM from "../forms/fb";
import IGFORM from "../forms/ig";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className={styles.tabpanel}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className={styles.tabsContainer}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="forms tabs"
          centered
        >
          <Tab label="Youtube" {...a11yProps(0)} />
          <Tab label="Facebook" {...a11yProps(1)} />
          <Tab label="Instagram" {...a11yProps(2)} />
          <Tab label="Twitter" {...a11yProps(3)} />
          <Tab label="Reddit" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
          <YTFORM />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FBFORM />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <IGFORM />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Coming Soon...
      </TabPanel>
      <TabPanel value={value} index={4}>
        Coming Soon...
      </TabPanel>
    </Box>
  );
}
