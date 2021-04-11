// import BabaValuatorPage from "./Components/BabaValuatorPage";
// import BabaStartPage from "./Components/BabaNewsPage";
// import BabaCubePage from "./Components/BabaCubePage";

// import SignIn from "./Components/SignIn";
// import CreateAccount from "./Components/CreateAccount";

// import BabaBlogs from "./Components/BabaBlogs";
// import StartupNews from "./Components/StartupNews";
// import EntrepreneurNews from "./Components/EntrepreneurNews";

// import StartupName from "./Components/StartupName";
// import IncubatorName from "./Components/IncubatorName";
// import BabaIncPage from "./Components/BabaIncPage";
// import BabaPsy from "./Components/BabaPsy";

import HomeComp from "./Components/HomeRoute";
import LoginComp from "./Components/LoginRoute";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateAccount from "./Components/CreateAccount";
import StartupNews from "./Components/StartupNews";
import BabaBlogs from "./Components/BabaBlogs";
import EntrepreneurNews from "./Components/EntrepreneurNews";
import BabaStartPage from "./Components/BabaStartPage";
import BabaCubePage from "./Components/BabaCubePage";
import BabaValuatorPage from "./Components/BabaValuatorPage";
import BabaIncPage from "./Components/BabaIncPage";
import ThirdPartyLogin from "./Components/ThirdPartyLogin";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route exact path="/">
            <HomeComp />
          </Route>
          <Route exact path="/thirdparty/linkedin">
            <ThirdPartyLogin type="linkedin" />
          </Route>
          <Route exact path="/thirdparty/google">
            <ThirdPartyLogin type="google" />
          </Route>
          <Route exact path="/login">
            <LoginComp />
          </Route>
          <Route exact path="/CreateAccount">
            <CreateAccount />
          </Route>
          <Route exact path="/StartupNews">
            <StartupNews />
          </Route>
          <Route exact path="/BabaBlogs">
            <BabaBlogs />
          </Route>
          <Route exact path="/EntrepreneurNews">
            <EntrepreneurNews />
          </Route>
          <Route exact path="/BabaStartPage">
            <BabaStartPage />
          </Route>
          <Route exact path="/BabaCubePage">
            <BabaCubePage />
          </Route>
          <Route exact path="/BabaValuatorPage">
            <BabaValuatorPage />
          </Route>
          <Route exact path="/BabaIncPage">
            <BabaIncPage />
          </Route>
          {/* <SignIn />
      <BabaBlogs />
      <BabaValuatorPage />
      <BabaStartPage />
      <BabaCubePage />
      <CreateAccount />
      <StartupNews />
      <StartupName />
      <IncubatorName />
      <BabaIncPage />
      <BabaPsy />
      <EntrepreneurNews /> */}
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
