import './App.css';
import Dashboard from "./pages/Dashboard/Dashboard";
import Events from "./pages/Events/Events";
import Help from "./pages/Help/Help";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="events" element={<Events />}/>
                    <Route path="help" element={<Help />}/>
                </Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
