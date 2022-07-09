import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import DetailPage from './pages/detail/DetailPage';
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [flowers,setflowers] = useState([
    {
     'id': 1,
     'title': 'John',
     'title_ar': 'arab',
     'description':'This Is description',
     'description_ar': 'arab'
    },
    {
      'id': 2,
      'title': 'John',
      'title_ar': 'arab',
      'description':'This Is description',
      'description_ar': 'arab'
     }

  ]);

  return (
    <div className="is-preload">
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <Router>
            <Header  />
              <Switch>
                
                <Route exact path="/">
                  <HomePage flowers={flowers} />
                </Route>
                
                <Route path="/flower/:id">
                  <DetailPage />
                </Route>
                
                <Route path="/login/">
                  <LoginPage />
                </Route>

              </Switch>
            </Router>
          </div>
	      </div>
      </div>
      <script src="{% static 'js/jquery.min.js' %}"></script>
      <script src="{% static 'js/browser.min.js' %}"></script>
      <script src="{% static 'js/breakpoints.min.js' %}"></script>
      <script src="{% static 'js/util.js' %}"></script>
      <script src="{% static 'js/main.js' %}"></script>
    </div>
  );
}

export default App;
