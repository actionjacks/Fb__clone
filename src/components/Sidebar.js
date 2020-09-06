import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import WcIcon from "@material-ui/icons/Wc";
import SmokingRoomsIcon from "@material-ui/icons/SmokingRooms";
import TextsmsIcon from "@material-ui/icons/Textsms";
import StyleIcon from "@material-ui/icons/Style";
import SwitchVideoIcon from "@material-ui/icons/SwitchVideo";
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div>
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={RadioButtonUncheckedIcon} title={"Covido sciema"} />
      <SidebarRow Icon={SmokingRoomsIcon} title={"Pages"} />
      <SidebarRow Icon={WcIcon} title={"Friends"} />
      <SidebarRow Icon={TextsmsIcon} title={"Messenger"} />
      <SidebarRow Icon={StyleIcon} title={"Marketplace"} />
      <SidebarRow Icon={SwitchVideoIcon} title={"Videos"} />
      <SidebarRow Icon={SportsKabaddiIcon} title={"Market"} />
    </div>
  );
}

export default Sidebar;
