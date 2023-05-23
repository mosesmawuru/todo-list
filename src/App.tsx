import React from "react";
import { AppLayout } from "./layouts/AppLayout";
import { HomePage } from "./pages";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppLayout>
        <HomePage />
      </AppLayout>
    </Provider>
  );
};

export default App;
