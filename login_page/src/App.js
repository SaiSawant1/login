import LoginPage from "./components/LoginPage/LoginPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
