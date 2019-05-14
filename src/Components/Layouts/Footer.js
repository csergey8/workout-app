import React from 'react';
import { Paper, Tabs, Tab, AppBar } from '@material-ui/core'; 
import { withWidth } from '@material-ui/core';


export default withWidth()(({ muscles, onSelect, category, width }) => {
  const index = category ? muscles.findIndex(group => group === category ) + 1 : 0;
  return (
    <AppBar position="static">
        <Tabs
          value={index}
          onChange={(e, index) => {
            onSelect(index === 0 ? '' : muscles[index - 1])
          }}
          indicatorColor="secondary"
          textColor="secondary"
          centered={width !== 'xs'}
          scrollable={width === 'xs'}
          scrollButtons="on"
        >
        <Tab label="All"/>
          { muscles.map(muscle => {
            return (
              <Tab label={muscle}  key={muscle}/>
            )
          })}
        </Tabs>
      </AppBar>
  )
}
)

