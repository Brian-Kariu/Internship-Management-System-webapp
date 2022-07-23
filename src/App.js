import './App.css';
import { Routes, Route } from "react-router-dom"
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { JobPage } from './Pages/JobPage';
import { ProfilePage } from './Pages/ProfilePage';
import HomePage from './Pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="signin/" element={ <SignIn/> } />
        <Route path="signup/" element={ <SignUp/> } />
        <Route path="jobs/" element={ <JobPage/> } />
        <Route path="profile/" element={ <ProfilePage/> } />
      </Routes>
    </div>
  );
}

export default App;
