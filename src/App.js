import React from "react";
import CakeConatiner from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import CookieContainer from "./components/CookieContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import NewCookieContainer from "./components/NewCookieContainer";
import ItemContainer from "./components/ItemContainer";
import UsersContainer from "./components/UsersContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeConatiner />
        <IceCreamContainer />
        <CookieContainer />
        <NewCakeContainer />
        <NewCookieContainer />
        <ItemContainer cake/>
        <ItemContainer />
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
