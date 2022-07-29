// import logo from './logo.svg';
import './App.css';
import BlogPost from './container/BlogPost/BlogPost';
import PostForm from './components/Post/PostForm';
function App() {
  return (  
    <div className="container mx-auto px-4 bg-slate-200 pt-28">
        <h1 className='text-slate-900 text-4xl font-bold my-5'> Blog List</h1>

      <div className="flex flex-col gap-2 items-center mb-96">
      <BlogPost/>
      </div>
    </div>
  );
}

export default App;
