import HeadShare from "@/components/HeadShare";
import Login from "@/layouts/Auth/Login";
import React from "react";

function login() {
  return (
    <div>
      <HeadShare title="Log in" />
      <Login />
    </div>
  );
}

export default login;
