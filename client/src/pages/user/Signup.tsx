import React from 'react';
import NavBar from '../../components/Login/NavBar';
import SignUpCar from '../../components/SignUp/SignUpCard';

const Signup = () => {
  return (
    <>
          <NavBar />
      <section className="bg-gray-50 dark:bg-gray-900 bg-cover bg-center" >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <SignUpCar />
        </div>
      </section>
    </>
  );
};

export default Signup;
