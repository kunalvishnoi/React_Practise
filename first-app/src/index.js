import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Components/Login';
import Navbarcustom from './Components/Navbarcustom';
import { BrowserRouter as Router, Route,  NavLink} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
const Root = () =>
<Router>
  <div>
    <Navbarcustom/>
    <Route exact path="/" component={App} />
    <Route exact path="/login" component={ Login } />
  </div>
</Router>

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
