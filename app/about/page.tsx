import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  );
}