import './App.scss';
import HomePage from './HomePage/HomePage';
import { Routes, Route } from "react-router-dom";
import ArticlePage from './ArticlePage/ArticlePage';
function App() {
  return (
    <Routes>
    <Route
      path="/"
      element={
        <HomePage/>
      }
    />
    <Route
      path="/article"
      element={<ArticlePage/> }
    />
  </Routes>
  );
}

export default App;
