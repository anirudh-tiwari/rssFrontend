import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddFeed from "./cmp/AddFeed";
import Otp from "./cmp/Otp";
import Verifyotp from "./cmp/Verifyotp";
import Feed from "./cmp/Feed";
import ShowBookmark from "./cmp/showBookmark";
import Loader from "./cmp/Loader";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Switch>
          <Route path="/" component={Otp} exact />
          <Route path="/addfeed" component={AddFeed} />
          <Route path="/verify" component={Verifyotp} />
          {/* <Route path="/getfeed" component={GetFeed} />
        <Route path="/feeddata" component={FeedData} /> */}
          <Route path="/feed" component={Feed} />
          <Route path="/showbookmark" component={ShowBookmark} />
          <Route path="/loading" component={Loader} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
