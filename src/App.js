import './App.css';
// import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

const App = () => {
  // const name = "Himal";
  
  return (
    <Router>
      <div className="App">
        {/* <h1>Hello World!</h1>
        <h2>Hello {2 * 3}</h2>
        <h3>Hello {2 + 4 == 6 ? name : "User"}</h3> */}
      </div>
      <Route path="/" exact component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
    </Router>
  );
}

// Class based components
// class App extends React.Component {
//   render() {
//     return <h1>Hello Friends!</h1>
//   }
// }

export default App;
