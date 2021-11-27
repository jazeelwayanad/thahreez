import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddData from "./components/AddData";
import DefaultSlideshow from "./components/DefaultSlide";
import Edit from "./components/Edit";
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
              <DefaultSlideshow />
            </Route>
            <Route path="/sms">
              <Slideshow url={"sms"} />
            </Route>
            <Route path="/edit/sms">
              <Edit url={"sms"} />
            </Route>
            <Route path="/edit/chs">
              <Edit url={"chs"} />
            </Route>

            <Route path="/chs">
              <Slideshow url={"chs"} />
            </Route>
            <Route path="/add/smsjfdksjldkffjflkafdkjansifdjffjhfdjfkdf">
              <AddData url={"sms"} title={"SMS section"} />
            </Route>
            <Route path="/add/chsfjkdfjkfjkfjdkfjkfjkdjfklafjajflfjdlffjkdjf">
              <AddData url={"chs"} title={"CHS section"} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
