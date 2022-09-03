import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:9898/api/v1",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTIxMjBlNjNmZWMyYWRlMTQzYmI2OCIsImlhdCI6MTY2MjEyODc2MSwiZXhwIjoxNjY5OTA0NzYxfQ.xm-NDZevnw10pRhO8Y-pefo8J2f4wHNo-x75RpIgRmg`,
  },
});

const greg = async () => {
  const data = await axiosInstance({ method: "get", url: "/users/verify-cookie" });
  return data;
};

const WithAuth = (WrappedComponent: any) => {
  return (props: JSX.IntrinsicAttributes) => {
    const router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      const me = greg();
      console.log(me);
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
      //   router.push("/");
    }
  };
};

export default WithAuth;
