import "./App.css";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Header />
      <main className="space-y-40 mb-40">
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
