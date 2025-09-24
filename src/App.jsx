import Hero from "./components/hero.jsx";
import About from "./components/About.jsx";
import GooeyNav from "./components/GooeyNav.jsx";
import Features from "./components/features.jsx";
import Impact from "./components/Impact.jsx";
import AppPreview from "./components/AppPreview.jsx";
import WasteGallery from "./components/WasteGallery.jsx";
import Footer from "./components/Footer.jsx";


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
      <Features/>
      <Impact/>
      <AppPreview/>
     <WasteGallery/>
     <Footer/>
    </div>
  );
}

export default App;
