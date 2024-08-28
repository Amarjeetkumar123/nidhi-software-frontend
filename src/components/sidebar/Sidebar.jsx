import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import ApprovalIcon from "@mui/icons-material/Approval";
import BusinessIcon from '@mui/icons-material/Business';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import React, { useState } from 'react';
import DropdownList from "./DropdownList";
import { IoIosGitBranch } from "react-icons/io";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaPeopleLine } from "react-icons/fa6";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { GiReceiveMoney } from "react-icons/gi";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { MdOutlineSavings } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { MdMoneyOff } from "react-icons/md";
import { IoReceiptOutline } from "react-icons/io5";
import { IoMdBook } from "react-icons/io";
import { FiPrinter } from "react-icons/fi";
import { MdOutlineInsertComment } from "react-icons/md"
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { MdVerifiedUser } from "react-icons/md";
// import logo from '../../assets/logo.png'

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [openUserList, setOpenUserList] = useState(false);
  const [openMembers, setOpenMembers] = useState(false);
  const [openMasters, setOpenMasters] = useState(false);
  const [openAccounts, setOpenAccounts] = useState(false);
  const [openKyc, setOpenKyc] = useState(false);

  const MasterItems = [
    { to: "/company/profile", label: "Company", Icon: BusinessIcon },
    { to: "", label: "Branches", Icon: IoIosGitBranch },
    { to: "", label: "Directors", Icon: FaPeopleRoof },
    { to: "", label: "Agents", Icon: FaPeopleLine },
    { to: "", label: "Employees", Icon: FaArrowsDownToPeople },
    { to: "", label: "Account Schemes", Icon: AccountTreeIcon },
    { to: "", label: "Loan Plans", Icon: GiReceiveMoney },
  ]
  const memberItems = [
    { to: "/members", label: "Members List", Icon: Diversity3OutlinedIcon },
    { to: "", label: "Approval", Icon: ApprovalIcon },
    { to: "", label: "Guarantors", Icon: AdminPanelSettingsIcon },
  ];
  const savingAccountsItems = [
    { to: "/accounts", label: "Accounts", Icon: MdOutlineSavings },
    { to: "", label: "Deposit", Icon: MdAttachMoney },
    { to: "", label: "Withdraw", Icon: MdMoneyOff },
    { to: "", label: "Passbook", Icon: IoMdBook },
    { to: "", label: "Statement", Icon: IoReceiptOutline },
    { to: "", label: "Enquiry", Icon: MdOutlineInsertComment },
    { to: "", label: "Approval", Icon: ApprovalIcon },
    { to: "", label: "Reciept Print", Icon: FiPrinter },
  ]
  const kycItems = [
    { to: "", label: "PAN", Icon: MdVerifiedUser },
    { to: "", label: "Addhar", Icon: MdVerifiedUser },
    { to: "", label: "Bank Statement", Icon: MdVerifiedUser },
  ];
  const userItems = [
    { to: "/users", label: "Users List", Icon: PeopleOutlineIcon },
    { to: "/usergroups", label: "Groups List", Icon: PeopleOutlineIcon },
  ];
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          {/* <img src={logo} alt="Company Logo" /> */}
          <span className="logo">Nidhi Software</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <DropdownList
            title="Masters"
            icon={ManageAccountsIcon}
            items={MasterItems}
            open={openMasters}
            handleClick={() => setOpenMasters(!openMasters)}
          />
          <DropdownList
            title="Members"
            icon={Diversity1OutlinedIcon}
            items={memberItems}
            open={openMembers}
            handleClick={() => setOpenMembers(!openMembers)}
          />
          <DropdownList
            title="Saving Accounts"
            icon={AccountBalanceIcon}
            items={savingAccountsItems}
            open={openAccounts}
            handleClick={() => setOpenAccounts(!openAccounts)}
          />
          <DropdownList
            title="KYC"
            icon={RiVerifiedBadgeLine}
            items={kycItems}
            open={openKyc}
            handleClick={() => setOpenKyc(!openKyc)}
          />
          <DropdownList
            title="Users"
            icon={PersonOutlineIcon}
            items={userItems}
            open={openUserList}
            handleClick={() => setOpenUserList(!openUserList)}
          />
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
