import { FC } from "react";
import NavBar from "../../components/Home/NavBar";
import Banner from "../../components/Home/Banner";
import CategorySec from "../../components/Home/CategorySec";
import FeaturedJobSec from "../../components/Home/FeaturedJobSec";
import TopCompanies from "../../components/Home/TopCompanies";

const Home: FC = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <CategorySec />
      <FeaturedJobSec />
      <TopCompanies />
    </>
  );
};

export default Home;
