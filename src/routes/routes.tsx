import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";
import Home from "../pages/Home";

const AppRoutes: React.FC = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </Router>
);

export default AppRoutes;
