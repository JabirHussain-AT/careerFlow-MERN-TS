import React from "react";
import NavBar from "../../components/Login/NavBar";
import SignUpCard from "../../components/SignUp/SignUpCard";

const Signup = () => {
  return (
    <>
      <NavBar />
      <section className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 relative z-10">
          <SignUpCard />
        </div>
        <div className="absolute  flex justify-center items-center top-16 left-0 right-0 bottom-0 bg-blue-500 transform -skew-y-6 -z-1">
          <h2 className="text-5xl text-gray-500">Career Flow</h2>
        </div>
      
      </section>
    </>
  );
};

export default Signup;
