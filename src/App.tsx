import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import PostDetail from './pages/PostDetail';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="bg-white dark:bg-slate-950 dark:text-white min-h-screen">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<PostDetail />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
