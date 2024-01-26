import { MdDashboardCustomize } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { Link, useLocation,Location } from "react-router-dom";
import { IconType } from "react-icons";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2> Logo. </h2>
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
             Icon={CiShop }
             location={location} 
          />
          <Li url = "/admin/customer"
          text = "Customer "
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
    </aside>
  );
};

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
    <Link to={url} style={ {
      color: location.pathname.includes(url)
      ? "rgb(0,115,255)":"black",
    }}>
      <Icon/>
      {text}
    </Link>
  </li>
}

export default AdminSidebar;
