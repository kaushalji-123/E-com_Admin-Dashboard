import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./Components/Loader.tsx"

const Dashboard = lazy(() => import ("./Pages/Dashboard.tsx"));
const Product = lazy(() => import   ("./Pages/Product.tsx"));
const Transaction = lazy(() => import ("./Pages/Transaction.tsx"));
const Customers = lazy(() => import ("./Pages/Customers.tsx"));
const Bar = lazy(()=> import("./Pages/Bar.tsx"));
const Pie = lazy(()=> import("./Pages/Pie.tsx"));
const Line = lazy(()=> import("./Pages/Line.tsx"));
const Stopwatch = lazy(()=> import("./Pages/Stopwatch.tsx"));
const Coupon = lazy(()=> import("./Pages/Coupon"));
const Toss = lazy(()=> import("./Pages/Toss.tsx"));


const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/transaction" element={<Transaction />} />
        <Route path="/admin/customer" element={<Customers />} />

        {/*   Charts  */}
        <Route path="/admin/chart/bar" element={<Bar/>} />
        <Route path="/admin/chart/pie" element={<Pie/>} />
        <Route path="/admin/chart/line" element={<Line/>} />


        {/*  Apps */}
        <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
        <Route path="/admin/app/coupon" element={<Coupon />} />
        <Route path="/admin/app/toss" element={<Toss />} />
        
      </Routes>
    </Router>
    </Suspense>
  );
};

export default App;
