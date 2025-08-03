import Header from './components/Header';
import Body from './components/Body';
import TopNav from './components/navigation/TopNav';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <TopNav />
      <Body />
    </main>
  );
}
