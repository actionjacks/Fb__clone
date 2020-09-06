import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {/* jesli w probsie przekaze sie icon && to wyswietl komponent icon */}
      {Icon && <Icon />}
      <p>{title}</p>
    </div>
  );
}

export default SidebarRow;
