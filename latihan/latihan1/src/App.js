// import logo from './logo.svg';
import './App.css';
import LifeCycleComp from './pages/LifeCycleComponent/LifeCycleComp';
import Product from './pages/Product/Product';
import BlogPost from './pages/BlogPost/BlogPost';
import YoutubeComponent from './pages/YoutubeComponent/YoutubeComponent'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import { Fragment } from 'react';
function App() {
  return (  
    <Fragment>
    
    <BrowserRouter>
    <nav className='bg-teal-500 fixed top-0 p-4 w-full z-10 flex justify-end'>
      <ul className=' flex text-white font-semibold gap-4 mx-8'>
        <li><Link to="/">BLog</Link></li>
        <li>  <Link to="/youtube">Youtube</Link></li>
        <li>  <Link to="/product">Product</Link></li>
        <li>  <Link to="/lifecycle">lifecycle</Link></li>
      </ul>
    </nav>
    <div className="container mx-auto px-4 bg-slate-200 pt-28 pb-24">    
        <h1 className='text-slate-900 text-4xl font-bold my-5'> Blog List</h1>
      <div className="flex flex-col gap-2 items-center mb-96">
      <Routes>
      <Route path="/"  element ={<BlogPost />} />
      <Route path='/youtube' element={
        <div class="flex flex-wrap gap-2 justify-evenly">
        <YoutubeComponent time="18:00" title="ayam laki"/>
        <YoutubeComponent time="18:00" title="ayam wanita"/>
        <YoutubeComponent time="18:00" title="ayam jantan"/>
        <YoutubeComponent time="18:00" title="ayam tino"/>
        <YoutubeComponent time="19:00" title="ayam potong"/>
        </div>
      }/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/lifecycle' element={<LifeCycleComp/>}/>
    </Routes>
      </div>
      
    </div>
      
    
    
    </BrowserRouter>
    </Fragment>
  );
}

export   default App;
