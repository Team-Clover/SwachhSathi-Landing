import Hero from "./components/hero";
import About from "./components/About";
import GooeyNav from "./components/GooeyNav";
import Features from "./components/Features";
import Impact from "./components/Impact";
import AppPreview from "./components/AppPreview";
import WasteGallery from "./components/WasteGallery";
import Footer from "./components/Footer";


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
