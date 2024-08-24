import React from "react";
import { Link } from "react-router-dom";
import { Collapse, List, ListItem } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const DropdownList = ({ title, icon: Icon, items, open, handleClick }) => (
    <List>
        <ListItem onClick={handleClick}>
            <Icon className="icon" />
            <span>{title}</span>
            {open ? <ExpandLess className="expand-icon" /> : <ExpandMore className="expand-icon" />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {items.map(({ to, label, Icon }) => (
                    <Link to={to} style={{ textDecoration: "none" }} key={label}>
                        <ListItem sx={{ pl: 4 }}>
                            <Icon className="d-icon" />
                            <span className="d-span">{label}</span>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Collapse>
    </List>
);

export default DropdownList;
