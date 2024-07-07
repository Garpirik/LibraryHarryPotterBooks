import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import BookShow from './components/Books/BookShowContainer';
import BookShowContainer from './components/Books/BookShowContainer';


const App= () => {
  return (
    <BrowserRouter>
    <div >
    <Header/>

    <div>
    <Routes>
    
    { <Route path='/books' element={<BookShowContainer/>}/> }
    
    </Routes>

    </div>
    </div>
    </BrowserRouter>
 
  );
}

export default App;
