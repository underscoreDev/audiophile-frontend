import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useVerifyCookieQuery } from "redux/api/auth.api";

const WithAuth = (Component: any) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();

    const { data, isError, isFetching, isLoading, isSuccess, error } = useVerifyCookieQuery();
    console.log({ data, isError, isFetching, isLoading, isSuccess, error });

    if (!data) {
      // setIsAuthenticated(false);
      router.push("/auth/login");
    } else {
      // setIsAuthenticated(true);
      <Component />;
      // router.push("/checkout");
    }
    // useEffect(() => {
    //   if (!data) {
    //     setIsAuthenticated(false);
    //     router.push("/auth/login");
    //   } else {
    //     setIsAuthenticated(true);
    //     <Component />;
    //     // router.push("/checkout");
    //   }
    //   // return isAuthenticated ? <Component /> : router.push("/auth/login");
    // }, [data, isError, isFetching, isLoading, isSuccess, error, isAuthenticated]);
  };
  return AuthenticatedComponent;
};

export default WithAuth;
