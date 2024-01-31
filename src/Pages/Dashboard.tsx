import AdminSidebar from "../Components/AdminSidebar";
// React icons
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

import userImg from "../assets/user.png";

const Dashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data , User" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>

        <section className="widgetcontainer">
          <WidgetItem
            percent={40}
            amount={true}
            value={4000}
            heading="Revenue"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={-40}
            amount={true}
            value={9990}
            heading="User"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={40}
            amount={true}
            value={65240}
            heading="Transaction"
            color="rgb(0,115,255)"
          />
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}
const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> + {percent}%{""}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%{""}
        </span>
      )}
    </div>
    <div className="widgetCircle">
      <span color={color}>{percent}%</span>
    </div>
  </article>
);
// function to calculate days between two days

export default Dashboard;
