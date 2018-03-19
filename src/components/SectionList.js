import React from 'react';

const SectionList = ({cancionesP}) => (
  <ul>
    {cancionesP.map(e => (
      <li>{e}</li>
    ))}  
  </ul>
  
)

export default SectionList;