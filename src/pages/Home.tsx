import { ThemeProvider } from '@/context/ThemeContext';
import { getAllPosts } from '../lib/posts';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import BlogList from './BlogList';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');

      // delay nhẹ để DOM render xong
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: 'smooth',
        });
      }, 100);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <BlogList />
      <Contact />
    </>
  );
}