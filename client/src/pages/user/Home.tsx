import { FC } from "react";
import NavBar from "../../components/Home/NavBar";
import Banner from "../../components/Home/Banner";
import CategorySec from "../../components/Home/CategorySec";

const Home: FC = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <CategorySec />
    </>
  );
};

export default Home;
