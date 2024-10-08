import "./dashboard.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Dashboard = () => {
  return (
    <>
      <div className="widgets">
        <Widget type="members" />
        <Widget type="accounts" />
        <Widget type="today_accounts" />
        <Widget type="agents" />
        <Widget type="today_agents" />
        <Widget type="today_loan_maturity" />
        <Widget type="branches" />
        <Widget type="addhar" />
        <Widget type="pan" />
      </div>
      <div className="charts">
        <Featured />
        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <Table />
      </div>
    </>
  );
};

export default Dashboard;
