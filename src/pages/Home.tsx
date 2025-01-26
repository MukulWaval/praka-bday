import React from "react";
import AboutSection from "../components/AboutSection";
import QuotesCard from "../components/QuotesCard";
import Hero from "../components/Hero";
import Gallary from "../components/Gallary";
import AcademyOfConsciousness from "../components/AcademyOfConsciousness";
import Socials from "../components/Socials";
import Videos from "../components/Videos";
import Workshops from "../components/Workshops";
import Books from "../components/Books";
import Cohum from "../components/Cohum";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <AcademyOfConsciousness />
      <Cohum />
      <Workshops />
      <QuotesCard />
      <Gallary />
      <Videos />
      <Books />
      <Socials />
    </>
  );
};

export default Home;
