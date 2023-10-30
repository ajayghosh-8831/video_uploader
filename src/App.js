import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import History from './pages/History';
import CategoryVideo from './components/CategoryVideo';




function App() {
  return (
    <div className="App" style={{width:'100%'}}>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Landing></Landing>}></Route> 
      <Route path='/home' element={<Home></Home>}></Route> 
      <Route path='/watch-history' element={<History></History>}></Route>
      <Route path='CategoryVideo/:categId' element={<CategoryVideo></CategoryVideo>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
