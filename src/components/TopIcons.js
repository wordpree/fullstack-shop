import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
const TopIcons = () => {
  return (
    <IconButtonWrapper>
      <SearchIcon />
      <FavoriteBorderIcon />
      <PersonOutlineIcon />
      <LocalGroceryStoreOutlinedIcon />
    </IconButtonWrapper>
  );
};

const IconButtonWrapper = ({ children }) => {
  return React.Children.map(children, (child) => {
    return (
      <div>
        <IconButton>{child}</IconButton>
      </div>
    );
  });
};

export default TopIcons;
