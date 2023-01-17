
import { Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
<h1>Wellcome to React Redux</h1>











<h3>Explore some application</h3>

<div className="links">
<Link to='/counter' >Counter App</Link>
<Link to='/fatch' >Data Fatch</Link>
</div>


    </div>
  );
}

export default App;
