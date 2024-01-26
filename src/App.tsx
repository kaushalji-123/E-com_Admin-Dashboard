import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./Components/Loader.tsx"

const Dashboard = lazy(() => import ("./Pages/Dashboard.tsx"));
const Product = lazy(() => import   ("./Pages/Product.tsx"));
const Transaction = lazy(() => import ("./Pages/Transaction.tsx"));
const Customers = lazy(() => import ("./Pages/Customers.tsx"));

const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/transaction" element={<Transaction />} />
        <Route path="/admin/customers" element={<Customers />} />

        {/*   Charts  */}


        {/*  Apps */}
        
      </Routes>
    </Router>
    </Suspense>
  );
};

export default App;
