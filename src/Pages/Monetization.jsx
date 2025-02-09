import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Money from "../Tabs/Monetize";
import Subscription from "../Tabs/Subscription"
import Donations from "../Tabs/Donations"
import Store from "../Tabs/Store"
const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

// CustomTabPanel component
const CustomTabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
};

const Monetization = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <div className="flex-1 md:ml-64 overflow-auto">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Overview" {...a11yProps(0)} />
              <Tab label="Subscription" {...a11yProps(1)} />
              <Tab label="Donations" {...a11yProps(2)} />
              <Tab label="Store" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
           <Money />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
           < Subscription/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
           <Donations/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
           <Store/>
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
};

export default Monetization

