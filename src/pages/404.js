import React from "react";

const ErrorPage = () => {
  if (typeof window !== "undefined") {
    window.location = "/";
  }
  return (
    <>
      <h1>Error! Page not found!</h1>
    </>
  );
};

export default ErrorPage;
