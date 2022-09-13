import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { getAuthUser } from "redux/reducers/authUser.reducer";
import { useAppDispatch, useAppSelector } from "redux/store/store";
import { PageLoader } from "components/pageLoader";
import { API_URL } from "redux/api/axiosBaseQuery";

const withAuth = (Component: any) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(({ authUserReducer }) => authUserReducer);

    useEffect(() => {
      (async () => {
        try {
          const { data } = await axios({
            url: `${API_URL}/auth/verify-cookie`,
            method: "get",
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem("token") as string)}`,
            },
          });
          dispatch(getAuthUser({ user: data?.data }));
          toast.success("Authenticated Successfully");
        } catch (err) {
          dispatch(getAuthUser({ user: null }));
          toast.error("You must login or signup to checkout");
          router.push("/auth/login");
        }
      })();
    }, []);

    return !!user ? <Component /> : <PageLoader />; // Render whatever you want while the authentication occurs
  };

  return AuthenticatedComponent;
};

export default withAuth;
