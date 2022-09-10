import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { PageLoader } from "components/pageLoader";
import withAuth from "components/auth/authHoc";

const CheckoutComponent = dynamic(() => import("components/checkout"), {
  loading: () => <PageLoader />,
});

const CheckoutModule:NextPage = () => <CheckoutComponent />;

export default withAuth(CheckoutModule);
