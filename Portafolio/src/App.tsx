import "./App.css";
import About_Me from "./Seccion/About_Me";
import Education from "./Seccion/Education";
import Experiencia from "./Seccion/Experiencia";
import Footer from "./Seccion/Footer";
import Header from "./Seccion/Header";
import Menu from "./Seccion/Menu";
import Skils from "./Seccion/Skils";
import Proyectos from "./Seccion/Proyectos";

function App() {
  return (
    <div className="bg-background min-h-screen selection:bg-primary selection:text-black">
      {/* Navigation */}
      <Menu />
      
      {/* Content Flow */}
      <main className="relative overflow-hidden">
        <Header />
        
        <div className="flex flex-col">
          <About_Me />
          <Skils />
          <Proyectos />
          <Experiencia />
          <Education />
        </div>
        
        <Footer />
      </main>
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(250,204,21,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      </div>
    </div>
  );
}

export default App;
