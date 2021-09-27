
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Navbar title ='Words Counter' />

    <div className="container my-5">
    <TextForm heading= "Enter the text to Analyze Below"/>

    </div>
    
    </>
  );
}

export default App;
