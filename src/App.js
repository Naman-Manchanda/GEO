
import './App.css';
// import FilesView from './Components/filesView/FilesView';
import Header from './Components/Header'
import Sidebar from './Components/sidebar'
//import FileContainer from './Components/FileContainer'

function Test() {
  let temp = {
    name:"n",
    heading:"h",
    data:"d"
  };
  fetch('http://localhost:8080/putFiles', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(temp)
  }).then(res=> {
    res.json().then(d=>{
      console.log(d)
    });
  });
  /*return (
    <span>a</span>
  );*/
}
Test();

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
<<<<<<< Updated upstream
{/* <FileContainer/> */}
=======
>>>>>>> Stashed changes
      {/* <FilesView/> */}
    </div>
  );
}

export default App;
