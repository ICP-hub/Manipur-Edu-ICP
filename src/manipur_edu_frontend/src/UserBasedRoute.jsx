import React from "react";
import { useAuth } from "./utils/useAuthClient";

const UserBasedRoute = ({ component: Component, allowedUser }) => {
  const { userType } = useAuth();
  const isAuthorized = allowedUser.includes(userType);
  return isAuthorized && Component;
};

export default UserBasedRoute;
