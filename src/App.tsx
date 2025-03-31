import './App.css';

import { Routes, Route, BrowserRouter } from "react-router-dom"
import Banner from './components/Banner/Banner';
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Banner />
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/followers" element={<FollowersPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
