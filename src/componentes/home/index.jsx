import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


const TabsHome = () => {

        const [value, setValue] = React.useState('one');
      
        const handleChange = (value, newValue) => {
          setValue(newValue);
        }; 

    return (
        <div>
            
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="one" label="Limpiadores" />
                    <Tab value="two" label="Toners" />
                    <Tab value="three" label="Protectores Solares" />
                </Tabs>
            </Box>

        </div>
    );
}

export default TabsHome;
