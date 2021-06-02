import React, {useState} from "react";
import {AppBar, Tabs, Tab, Box} from '@material-ui/core'

import "./App.css";
import { pages } from "./pages";

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          {children}
        </Box>
      )}
    </div>
  );
}

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" color='transparent'>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {pages.map((element, id) => (
            <Tab label={element.name} key={element.name} disabled={element.disabled} {...a11yProps(id)} />
          ))}
        </Tabs>
      </AppBar>
      <Box p={2}>
        {pages.map((element, id) => (
          <TabPanel value={value} index={id} key={element.name}>
            {element.component}
          </TabPanel>
        ))}
      </Box>
    </>
  );
}

export default App;
