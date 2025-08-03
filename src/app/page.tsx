import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TopNav from './components/navigation/TopNav';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <TopNav />
      <HeroSection />
    </main>
  );
}
