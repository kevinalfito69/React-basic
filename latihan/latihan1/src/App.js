// import logo from './logo.svg';
import './App.css';
import BlogPost from './container/BlogPost/BlogPost';
function App() {
  return (  
    <div className="container mx-auto px-4 bg-slate-200 pt-28">
        <h1 className='text-slate-900 text-4xl font-bold my-5'> Youtube Playlist</h1>
      <div className="flex flex-wrap gap-2 justify-evenly mb-96">
      <BlogPost/>
      </div>
    </div>
  );
}

export default App;
