import './App.css';
import { Route, Switch } from 'react-router-dom';
import AddFeed from './cmp/AddFeed';
import Otp from "./cmp/Otp";
import Verifyotp from "./cmp/Verifyotp";
import GetFeed from "./cmp/GetFeed";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Otp} exact />
        <Route path="/addfeed" component={AddFeed} />
        <Route path="/verify" component={Verifyotp} />
        <Route path="/getfeed" component={GetFeed} />

      </Switch>
    </div>
  );
}

export default App;
