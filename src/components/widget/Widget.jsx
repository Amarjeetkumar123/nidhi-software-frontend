import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { IoIosGitBranch } from "react-icons/io";
import { FaPeopleLine } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "members":
      data = {
        title: "MEMBERS",
        isMoney: false,
        link: "See all members",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "accounts":
      data = {
        title: "ACCOUNTS",
        isMoney: false,
        link: "View all accounts",
        icon: (
          <AccountBalanceIcon
            className="icon"
            style={{ backgroundColor: "#bde0fe", color: "blue" }}
          />
        ),
      };
      break;
    case "today_accounts":
      data = {
        title: "TODAY ACCOUNTS",
        isMoney: false,
        link: "See all today's account",
        icon: (
          <AccountBalanceIcon
            className="icon"
            style={{ backgroundColor: "#bde0fe", color: "blue" }}
          />
        ),
      };
      break;
    case "agents":
      data = {
        title: "AGENTS",
        isMoney: false,
        link: "See all agents",
        icon: (
          <FaPeopleLine
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    case "today_agents":
      data = {
        title: "TODAY AGENTS",
        isMoney: false,
        link: "See all today agents",
        icon: (
          <FaPeopleLine
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    case "today_loan_maturity":
      data = {
        title: "TODAY LOAN/MATURITY",
        isMoney: true,
        link: "See all today loan/maturity",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "branches":
      data = {
        title: "BRANCHES",
        isMoney: false,
        link: "See all branches",
        icon: (
          <IoIosGitBranch
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "addhar":
      data = {
        title: "ADDHAR VERIFICATIONS",
        isMoney: false,
        link: "See all addhar verifications",
        icon: (
          <MdVerifiedUser
            className="icon"
            style={{
              backgroundColor: "#cdc1ff",
              color: "#390099",
            }}
          />
        ),
      };
      break;
    case "pan":
      data = {
        title: "PAN VERIFICATIONS",
        isMoney: false,
        link: "See all pan verifications",
        icon: (
          <MdVerifiedUser
            className="icon"
            style={{
              backgroundColor: "#cdc1ff",
              color: "#390099",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
