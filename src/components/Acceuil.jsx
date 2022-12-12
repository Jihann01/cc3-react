import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import ListUser from "./ListUser";

export default function Acceuil() {
  const navigate = useNavigate();
  const user = useSelector(state => state.user.firstName);

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate("/");
    }
  }, []);

  return (
    <div className="acceuil">
      <Header />
      <ListUser />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
