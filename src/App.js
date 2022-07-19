import './App.css';
import Jobs from './components/Content/Jobs';
import PrimarySearchAppBar from './components/Navbar/Navbar';
import SearchInput from './components/Content/SearchInput'

function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      <SearchInput />
      <Jobs />
    </div>
  );
}

export default App;
