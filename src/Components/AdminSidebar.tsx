import { MdDashboardCustomize } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { Link, useLocation,Location } from "react-router-dom";
import { IconType } from "react-icons";
import { MdOutlineBarChart } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { RiCoupon2Line } from "react-icons/ri";
import { IoMdStopwatch } from "react-icons/io";
import { FaGamepad } from "react-icons/fa";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2> Logo. </h2>
      <DivOne location={location}/>
      <DivTwo location={location}/>
      <DivThree location={location}/>
    </aside>
  );
};
const DivOne =({location}:{location:Location})=>(
<div>
        <h5> Dashboard </h5>
        <ul>
         <Li url = "/admin/dashboard"
             text = "Dashboard "
             Icon={MdDashboardCustomize }
             location={location}
          />
         <Li url = "/admin/product"
             text = "Product "
             Icon={IoBagHandleSharp }
             location={location} 
          />
          <Li url = "/admin/customer"
          text = "Customer"
          Icon={IoPeopleSharp }
          location={location}
       />
          <Li url = "/admin/transaction"
          text = "Transaction"
          Icon={GrTransaction }
          location={location}
       />
        </ul>
      </div>
) 
const DivTwo = ({location}:{location:Location})=>(
  <div>
        <h5> Chart </h5>
        <ul>
         <Li url = "/admin/chart/bar"
             text = "Bar"
             Icon={MdOutlineBarChart }
             location={location}
          />
         <Li url = "/admin/chart/pie"
             text = "Pie "
             Icon={FaChartPie }
             location={location} 
          />
          <Li url = "/admin/chart/line"
          text = "Line"
          Icon={FaChartLine }
          location={location}
       />
        </ul>
      </div>
)
const DivThree = ({location}:{location:Location})=>(
  <div>
        <h5> Apps </h5>
        <ul>
         <Li url = "/admin/app/stopwatch"
             text = "Stopwatch "
             Icon={IoMdStopwatch }
             location={location}
          />
         <Li url = "/admin/app/coupon"
             text = "Coupon "
             Icon={RiCoupon2Line }
             location={location} 
          />
          <Li url = "/admin/app/toss"
          text = "Toss"
          Icon={FaGamepad  }
          location={location}
       />
        </ul>
      </div>
)
interface LiProps{
  url:string,
  text:string,
  location:Location,
  Icon:IconType;

}
const Li =({url,text,location,Icon}: LiProps)=>{
  return <li style={
    {
      backgroundColor:location.pathname.includes(url)
      ? "rgba(0,115,255,0.1)" : "white",
    }
  }>
    <Link to={url} style={{
      color: location.pathname.includes(url)
      ? "rgb(0,115,255)":"black",
    }}>
      <Icon/>
      {text}
    </Link>
  </li>
}

export default AdminSidebar;
