import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <Skills />
      </main>
      <Footer />
    </div>
  );
}