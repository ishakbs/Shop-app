import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Shop from "../pages/shop";
import NotFound from "../pages/error";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="*" element={<NotFound />} /> {/* Catch all unmatched routes */}
    </Routes>
  );
};

export default App;
