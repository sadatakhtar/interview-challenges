import './App.css';
import HeaderComponent from './components/headerComponent/HeaderComponent'
import SearchBar from './components/searchBar/SearchBar'



function App() {
  return (
    <div className="App">
      <div className="Container">
        <HeaderComponent  />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
