import { useNavigate, useLocation } from 'react-router-dom';

export const navItems = [
  { label: "Home", id: "home" },
  { label: "Blog", id: "blogs" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
  { label: "About", id: "about" },
]

export default function useScrollToId() {
  const navigate = useNavigate();
  const location = useLocation();

  return (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
}