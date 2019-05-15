import React, { Component } from 'react';
import { Paper, Tabs, Tab, AppBar } from '@material-ui/core'; 
import { withWidth } from '@material-ui/core';
import { withContext } from '../../context';


class Footer extends Component {
  onIndexSelect = (e, index) => {
    const { onCategorySelect, muscles } = this.props;
    onCategorySelect(index === 0 ? '' : muscles[index - 1])
  }

  getIndex = () => {
    const { category, muscles } = this.props;
    return category ? muscles.findIndex(group => group === category) + 1 : 0;
  }

  render() {
    const { width, muscles } = this.props;
    return (
      <AppBar position="static">
        <Tabs
          value={this.getIndex()}
          onChange={this.onIndexSelect}
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
}

export default withContext((withWidth(Footer)));