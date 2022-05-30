import './App.css';
import Header from './Components/Header';
import Home from './pages/Home';
import Blogpage from './pages/Blogpage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ArticleContextProvider } from './Context/articleContext';
import Detailedblog from './pages/Detailedblog';
function App() {
  return (
      <ArticleContextProvider>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category/hollywood' element={<Blogpage key='hollywood' category="Hollywood"/>}/>
            <Route path='/category/technology' element={<Blogpage key='technology' category="Technology"/>}/>
            <Route path='/category/health' element={<Blogpage key='health' category="Health"/>}/>
            <Route path='/category/bollywood' element={<Blogpage key='bollywood' category="Bollywood"/>}/>
            <Route path='/category/sports' element={<Blogpage key='sports' category="Sports"/>}/>
            <Route path='/category/:id' element={<Detailedblog/>} />
          </Routes>
        </BrowserRouter>
      </ArticleContextProvider>
  );
}

export default App;
