import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './Auth/privateRoutes'
import { createBrowserHistory } from 'history'

import { Home } from './pages'

import Login from './Auth/login'
import Signup from './Auth/signup'
import PrivateRoute from './Auth/privateRoutes';
function App() {

  const history = createBrowserHistory()

  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/home' element={
            <PrivateRoute >
              <Home />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
