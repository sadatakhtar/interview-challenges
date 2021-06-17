import './App.css';
import HeaderComponent from './components/headerComponent/HeaderComponent'
import SearchBar from './components/searchBar/SearchBar'
import HowYouFeel from './components/howYouFeel/HowYouFeel';
import Excercises from './components/excercises/Excercises'



function App() {
  return (
    <div className="App">
      <div className="Container">
        <HeaderComponent  />
        <SearchBar />
        <HowYouFeel />
        <Excercises />
      </div>
    </div>
  );
}

export default App;
