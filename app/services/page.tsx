import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <Services />
      </main>
      <Footer />
    </div>
  );
}