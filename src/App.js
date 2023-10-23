import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import GlobalCandidateArea from "./components/globalCandidateArea/GlobalCandidateArea";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./page/login/Login";
import { useState } from "react";

function App() {
  const [selectedCandidates, setSelectedCandidates] = useState(0);
  return (
    <>
      {/* <div>
        <Navbar />
        <div className="container">
          <Sidebar />
          <div className="content">
            <GlobalCandidateArea />
          </div>
        </div>
      </div> */}
      <Router>
        <Switch>
          <Route path="/login">
            <div className="contentLogin">
              <Login />
            </div>
          </Route>
          <Route path="/">
            <div>
              <Navbar />
              <div className="container">
                <Sidebar selectedCandidates={selectedCandidates} />
                <div className="content">
                  <GlobalCandidateArea selectedItem={item => setSelectedCandidates(item)} />
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
