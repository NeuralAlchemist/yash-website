import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import BookPage from "./pages/BookPage";

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/books" element={<BookPage/>}/>
        </Routes>
      </BrowserRouter>
      Yash is creating ...
    </div>
  );
}

export default App;
