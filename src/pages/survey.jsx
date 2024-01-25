import * as React from "react";

// Functional component representing a Survey section
const Survey = () => {
  return (
    <div className="my-10">
      {/* Logo */}
      <img className="w-24 sm:w-36 mx-auto" src="/images/logo.png" />

      {/* Register section */}
      <div className=" bg-primaryColor w-full p-8 mt-2 mb-6">
        <p className="text-white text-center text-xl">
          {
            "Register NOW for free. \n\n Get FREE membership for life \n\n Free entry to a closed draw for ..."
          }
        </p>
      </div>

      {/* Success message */}
      <div className="mx-4 my-8">
        <p className="font-bold text-lg text-center">
          You've successfully registered
        </p>
      </div>

      {/* Take survey section */}
      <div className=" bg-primaryColor w-full p-8 mt-2 mb-6">
        <p className="text-white text-center text-xl font-bold">
          {
            "Take our quick survey to have a chance to win ...."
          }
        </p>
      </div>

      {/* Link to the survey */}
      <div className="mx-4 my-8">
        <p className="font-bold text-2xl text-center text-linkColor underline hover:cursor-pointer">
          Take our survey
        </p>
      </div>
    </div>
  );
};

export default Survey;
