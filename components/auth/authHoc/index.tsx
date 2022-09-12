import React from "react";
import { useRouter, withRouter } from "next/router";
import Login from "components/auth/login";
import { useAppSelector } from "redux/store/store";

const WithAuth = (Component: any) => {
  const router = useRouter();
  const { user } = useAppSelector(({ authUserReducer }) => authUserReducer);
  return user ? <Component /> : router.push("/login");
  // const AuthenticatedComponent = () => {
  // };

  // return AuthenticatedComponent;
};

export default WithAuth;
