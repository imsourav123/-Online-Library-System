import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BrowseBooks from './components/BrowseBooks';
import AddBook from './components/AddBook';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';  // Import the Navbar component


function App() {
  return (
    <Router>
      <Navbar />  {/* Include the Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseBooks />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;
