import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage'

const App = () => {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
          <Route exact path="/" element={<NotesListPage />} />
          {/* using dynamic parameter */}
          <Route exact path="/note/:id" element={<NotePage />} />  
      </Routes>
      </div>
    </Router>
  );
}

export default App;
