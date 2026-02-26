export const navItems = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
  { label: "About", id: "about" },
  // { label: "Notes", id: "resume" },
]

export const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  })
}