import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./Components/Loader.tsx"

const Dashboard = lazy(() => import ("./Pages/dashboard.tsx"));
const Product = lazy(() => import   ("./Pages/product.tsx"));
const Transaction = lazy(() => import ("./Pages/transaction.tsx"));
const Customers = lazy(() => import ("./Pages/customers.tsx"));

const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/transaction" element={<Transaction />} />
        <Route path="/admin/customers" element={<Customers />} />
      </Routes>
    </Router>
    </Suspense>
  );
};

export default App;
