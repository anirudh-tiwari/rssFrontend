import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddFeed from "./cmp/AddFeed";
import Otp from "./cmp/Otp";
import Verifyotp from "./cmp/Verifyotp";
import Feed from "./cmp/Feed";
import ShowBookmark from "./cmp/showBookmark";
import ProtectedRoute from "./route/protected";
import Loader from "./cmp/Loader";
import Popup from "./cmp/Popup";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Redirect } from "react-router-dom";

function App() {
  var token = localStorage.getItem("accessToken");
  return (
    <div>
      <Provider store={store}>
        {/* <Switch> */}

        <Route path="/" exact>
          <Otp />
        </Route>
        <Route path="/verify">
          <Verifyotp />
        </Route>
        <Route path="/addfeed">
          <ProtectedRoute cmp={AddFeed} />
        </Route>
        <Route path="/feed">
          <ProtectedRoute cmp={Feed} />
        </Route>
        <Route path="/showbookmark">
          <ProtectedRoute cmp={ShowBookmark} />
        </Route>
        <Route path="/loader">
          <ProtectedRoute cmp={Loader} />
        </Route>
        <Route path="/popup">
          <ProtectedRoute cmp={Popup} />
        </Route>
        {token ? <Redirect to="/feed" /> : <Redirect to="/" />}
        {/* </Switch> */}
      </Provider>
    </div>
  );
}

export default App;

{
  /* <Route path="/" component={Otp} exact />
  <Route path="/verify" component={Verifyotp} />
  <Route path="/addfeed" component={AddFeed} />
  <Route path="/feed" component={Feed} />
  <Route path="/showbookmark" component={ShowBookmark} />
  <Route path="/loading" component={Loader} />
  <Route path="/popup" component={Popup} /> */
}
