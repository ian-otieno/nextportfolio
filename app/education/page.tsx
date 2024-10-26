import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Education from '@/components/Education';

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <Education />
      </main>
      <Footer />
    </div>
  );
}