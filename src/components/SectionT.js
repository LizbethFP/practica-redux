import React from 'react';
import Item from './Item';

const SectionT = ({li}) => (
<section>
{li.map(e => (
  <Item key={e.id} {...e}/>
))}
</section>
)

export default SectionT;

