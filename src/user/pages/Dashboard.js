import React from "react";
import MainLayout from "../layouts/MainLayout";
import Carousel from "../layouts/dashboard/Carousel";
import Intro from "../layouts/dashboard/Intro";
import Portfolio from "../layouts/dashboard/Portfolio";
import EmailForm from "../layouts/dashboard/Email";
import Footer from "../layouts/dashboard/Footer";

function Dashboard() {
  return (
    <React.Fragment>
      <MainLayout>
        <Carousel />
        <Intro />
        <Portfolio />
        <EmailForm />
        <Footer />
      </MainLayout>
    </React.Fragment>
  );
}

export default Dashboard;
