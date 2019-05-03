import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core'; 


const Footer = ({ muscles, onSelect, category }) => {
  const index = category ? muscles.findIndex(group => group === category ) + 1 : 0;
  return (
    <Paper>
        <Tabs
          value={index}
          onChange={(e, index) => {
            onSelect(index === 0 ? '' : muscles[index - 1])
          }}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
        <Tab label="All"/>
          { muscles.map(muscle => {
            return (
              <Tab label={muscle}  key={muscle}/>
            )
          })}
        </Tabs>
      </Paper>
  )
}

export default Footer;
