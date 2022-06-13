import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import 'animate.css/animate.min.css';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blogs';


function App() {


  return (


    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='/projects/:id' element={<ProjectDetails></ProjectDetails>} ></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
