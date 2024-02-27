import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { useState } from 'react';
import SideNav from './Components/SideNav';
import Dashboard from './Components/Dashboard';
import Users from './Components/Users';
import Requests from './Components/Requests';

function App() {
  const [path, setPath] = useState("/");
  const changePath = () => {
    const path = window.location.pathname.split("/");
    const path1 = path[path.length - 1];
    setPath(path1);
  };
  return (
    <div className="App">
      <Router>
        <Navbar path={path} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/dashboard' element={<SideNav path={path} changePath={changePath} />}>
            <Route index element={<Dashboard changePath={changePath} />} />
            <Route path='/dashboard/users' element={<Users changePath={changePath} />} />
            <Route path='/dashboard/requests' element={<Requests changePath={changePath} />} />
          </Route>
          <Route path='/admin/dashboard' element={<SideNav path={path} changePath={changePath} />}>
            <Route index element={<Dashboard changePath={changePath} />} />
            <Route path='/admin/dashboard/users' element={<Users changePath={changePath} />} />
            <Route path='/admin/dashboard/requests' element={<Requests changePath={changePath} />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
