import './App.css';
import HeaderComponent from './components/headerComponent/HeaderComponent'
import SearchBar from './components/searchBar/SearchBar'
import HowYouFeel from './components/howYouFeel/HowYouFeel';



function App() {
  return (
    <div className="App">
      <div className="Container">
        <HeaderComponent  />
        <SearchBar />
        <HowYouFeel />
      </div>
    </div>
  );
}

export default App;
