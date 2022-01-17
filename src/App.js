import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from "./components/Dashboard";
import { Admin } from "./components/Admin"
import { Login } from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./components/NoteFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div >
  );
}

export default App;
