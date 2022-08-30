import store from "redux/store/store";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { Global } from "utils/globalStyles";
import { persistStore } from "redux-persist";
import Footer from "components/footer";
import * as _ from "styled-components/cssprop";
import { PersistGate } from "redux-persist/integration/react";
import ResponsiveAppBar from "components/navbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Global />
        <ResponsiveAppBar />
        <Component {...pageProps} />
        <Footer />
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
