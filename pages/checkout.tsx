import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { PageLoader } from "components/pageLoader";

const CheckoutComponent = dynamic(() => import("components/checkout"), {
  loading: () => <PageLoader />,
});

const CheckoutModule: NextPage = () => <CheckoutComponent />;

export default CheckoutModule;
