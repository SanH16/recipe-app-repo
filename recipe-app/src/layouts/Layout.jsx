import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Content";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
