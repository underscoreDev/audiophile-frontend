import store from "redux/store/store";
import { Provider } from "react-redux";
import Footer from "components/footer";
import type { AppProps } from "next/app";
import { Global } from "utils/globalStyles";
import { Toaster } from "react-hot-toast";
import { persistStore } from "redux-persist";
import { authApi } from "redux/api/auth.api";
import * as _ from "styled-components/cssprop";
import ResponsiveAppBar from "components/navbar";
import { PageLoader } from "components/pageLoader";
import { PersistGate } from "redux-persist/integration/react";
import { getAuthUser } from "redux/reducers/authUser.reducer";

const MyApp = ({ Component, pageProps }: AppProps) => {
  let persistor = persistStore(store);

  (async () => {
    try {
      const audio = await store.dispatch(authApi.endpoints.verifyCookie.initiate());
      store.dispatch(getAuthUser(audio.data));
    } catch (error) {
      console.log("user not logged in");
    }
  })();

  return (
    <Provider store={store}>
      <PersistGate loading={<PageLoader />} persistor={persistor}>
        <Global />
        <ResponsiveAppBar />
        <Toaster />
        <Component {...pageProps} />
        <Footer />
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
