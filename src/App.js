import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddData from "./components/AddData";
import Slideshow from "./components/SlideShow";

export default function App() {
  return (
    <div>
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Slideshow url={"chs"} />
            </Route>
            <Route path="/add/7771817282738">
              <AddData url={"chs"} title={"Add Result"} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
