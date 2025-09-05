import Hero from "./components/hero";
import About from "./components/About";
import GooeyNav from "./components/GooeyNav";

function App() {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative">
      {/* Fixed Navigation */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <GooeyNav items={navItems} />
      </div>
      <Hero />
      <About />
    </div>
  );
}

export default App;
