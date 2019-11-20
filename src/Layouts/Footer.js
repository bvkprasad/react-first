import React from 'react'
import { Paper, Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core'

export default ({ muscles, onSelect, category }) => {

  const index = category ? muscles.findIndex(group => group === category) + 1 : 0;
  const onIndexSelect = (id, index) => {
    onSelect(index === 0 ? '' : muscles[index-1]);
  }
  return (<Paper>
    <Tabs
      value={index}
      indicatorColor="primary"
      onChange = {onIndexSelect}
      textColor="primary"
      centered
    >
      <Tab label="All" />
      {muscles.map(group =>
        <Tab key={group} label={group} />
      )}
    </Tabs>
  </Paper>)
}