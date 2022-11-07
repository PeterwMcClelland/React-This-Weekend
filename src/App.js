import './App.css';
import Header from './components/Header';
import Search from './components/SearchBar';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header></Header>
    <body>
      <Search></Search>
    </body>
    <footer>
      <Footer></Footer>
    </footer>
    </div>
  );
}

export default App;
