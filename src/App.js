import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Book from './pages/Book';

import Profilepage from './pages/Profilepage';
import LoginForm from './components/Login';
import SignupForm from './components/SignUp';

import PlayPage from './pages/PlayPage';
import {Provider} from "react-redux"
import Store from './Redux/Store';
import CardDetailpage from './pages/Carddetailspage';

function App() {
  return (
    <div className="App">
       <Provider store={Store}>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='play' element={<PlayPage/>}></Route>
        <Route path='book' element={<Book />}></Route>
        <Route path="/profile" element={<Profilepage/>}></Route>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/card-details/:id" element={<CardDetailpage />} />
       

      </Routes>
      </Provider>
    </div>
  );
}

export default App;
