import './App.css';
import React,{useState} from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import{BrowserRouter as Router,Route,Routes}from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App = ()=>{
  const pageSize = 6;
  const apiKey = "23b5a010cecb420e87b88ffea89ecae8"

const [progress, setprogress] = useState(0)
 
  
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
       
        <Routes>
          <Route exact path="/" element={<News setProgress={setprogress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="sports"/>} />
           <Route exact path="/bussiness" element={<News setProgress={setprogress} apiKey={apiKey}  key="bussiness" pageSize={pageSize} country="in" category="bussiness"/>} />
           <Route exact path="/entertainment" element={<News setProgress={setprogress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}  />
           <Route exact path="/general" element={<News setProgress={setprogress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="general"/>} />
           <Route exact path="/health" element={<News setProgress={setprogress} apiKey={apiKey}   key="health"ageSize={5} country="in" category="health"/>} />
           <Route exact path="/science" element={<News setProgress={setprogress} apiKey={apiKey}  key="science" pageSize={pageSize} country="in" category="science"/>} />
           <Route exact path="/sports" element={<News setProgress={setprogress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="sports"/>} />
           <Route exact path="/technology" element={<News setProgress={setprogress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="in" category="technology"/>} />
        </Routes>
        </Router>
      </div>
    )
  
}
export default  App;