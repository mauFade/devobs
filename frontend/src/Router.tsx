import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Timeline from "./pages/Timeline";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/timeline" element={<Timeline />} />
    </Routes>
  );
};

export default Router;
