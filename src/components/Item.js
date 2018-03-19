import React from "react";
import SectionList from "./SectionList";

const Item = ({name, url, bio, canciones}) => (
  <div>
    <p>{name}</p>
    <img src={url} alt={name}/>
    <p>{bio}</p>
    <SectionList cancionesP={canciones}/>
  </div>
)

export default Item;