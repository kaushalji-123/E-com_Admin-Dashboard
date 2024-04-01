import AdminSidebar from "../Components/AdminSidebar";
// React icons
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from "../assets/data.json";
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

        <section className="widget-container">
          <WidgetItem
            percent={40}
            amount={true}
            value={4000}
            heading="Revenue"
            color="rgb(0,198,202)"
          />
          <WidgetItem
            percent={-24}
            amount={false}
            value={9990}
            heading="User"
            color="rgb(255,196,0)"
          />
          <WidgetItem
            percent={80}
            amount={true}
            value={980}
            heading="Transaction"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={80}
            amount={true}
            value={980}
            heading="Products"
            color="rgb(20,336,235)"
          />
        </section>
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue and Transaction</h2>
          </div>
          <div className="dashboard-categories">
            <h2> Inventory</h2>
            <div>
            {data.catagories.map((i) =>(
              <CatagoryItem
              key = {i.heading}
              heading="i.heading"
              value={i.value}
              color="hsl(69,100%,50%)"
            /> 
            ))}
            </div>
          </div>
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
    <div className="widget-circle" style={{ 
      background: `conic-gradient( 
        ${color} ${Math.abs(percent)/100*360}deg, rgb(255, 255, 255)0
      )`,
    }}>
       <span style={{
        color,
        }}>
          {percent}%
        </span> 
    </div>
  </article>
);
interface CatagoryItemProps{
  color:string;
  value:number;
  heading:string;
}

const CatagoryItem = ({color,value,heading}:CatagoryItemProps) =>{
  <div className="catagory-item">'
    <h5> {heading} </h5>
    <div>
      <div style={{
        backgroundColor:color,
        width:`${value}` 
      }}>        
      </div>
    </div>
    <span>{value}</span>
  </div>
}

export default Dashboard;