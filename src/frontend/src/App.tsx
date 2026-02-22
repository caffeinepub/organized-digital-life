import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import PreviewSection from './components/PreviewSection';
import AudienceSection from './components/AudienceSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <PreviewSection />
      <AudienceSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default App;
