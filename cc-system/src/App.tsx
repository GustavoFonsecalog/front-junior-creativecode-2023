import './App.css';
import AppRoutes from './Routes/routes';

import NavBar from './components/navbar'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <AppRoutes />
      </header>
    </div>
  );
}

export default App;
