import AdminSidebar from "../Components/AdminSidebar"

const Stopwatch = () => {
  return (
    <div className="admin-container">
    <AdminSidebar/>
      <main className="Stopwatch">
        <div className="bar">
        </div>
      </main>
    </div>
  )
}

export default Stopwatch