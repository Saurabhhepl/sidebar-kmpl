import './App.css';
import Navigation from './Components/layout/navBar';
import Sidebar from './Components/layout/sideBar';

const App = () => {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      
      <main>
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
