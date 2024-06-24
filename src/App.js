import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Color Factory</h1>
      <nav>
        <ul>
          <li><Link to="/colors">Colors</Link></li>
          <li><Link to="/colors/new">Add New Color</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}


export default App;
