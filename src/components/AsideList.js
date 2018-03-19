import React from 'react';
import Item from './Item';

const AsideList = ({tai}) => (
  <div>
  {tai.map(t => (
    <Item key={t.id} {...t}/>
  ))}
  </div>
)

export default AsideList;