import AdminSidebar from "../Components/AdminSidebar"
import { BsSearch } from "react-icons/bs" 
import { FaRegBell } from "react-icons/fa"
import user from "../assets/user.png";

const Dashboard = () => {
  return (
    <div className="admin-container">
    <AdminSidebar/>
      <main className="dashboard">
        <div className="bar">

          <BsSearch/>
          <input type="text" placeholder="Search for data , User" />
          <FaRegBell/>
          <img src={user} alt="User" />
        </div>
      </main>
    </div>
    )
}

export default Dashboard 