
import './App.css';
// import FilesView from './Components/filesView/FilesView';
import Header from './Components/Header'
import Sidebar from './Components/sidebar'
//import FileContainer from './Components/FileContainer'

function Test() {
  let temp = {
    name:"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"
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
function Test1() {
  fetch('http://localhost:8080/getFiles').then(res=> {
    res.json().then(d=>{
      console.log(d)
    });
  });
  /*return (
    <span>a</span>
  );*/
}
Test1();

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
{/* <FileContainer/> */}
      {/* <FilesView/> */}
    </div>
  );
}

export default App;
