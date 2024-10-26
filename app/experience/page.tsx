import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Experience from '@/components/Experience';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <Experience />
      </main>
      <Footer />
    </div>
  );
}