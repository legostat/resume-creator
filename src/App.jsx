import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.scss";
import { ResumePage } from "./pages/resume-page";
import { MainPage } from "./pages/main-page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:userName" component={ResumePage} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
