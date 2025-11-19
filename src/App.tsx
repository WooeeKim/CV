import { ContactSection } from "./components/ContactSection";
import { CourseArchiveSection } from "./components/CourseArchiveSection";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SelectedProjectsSection } from "./components/SelectedProjectsSection";

export function App() {
  return (
    <div className="min-h-screen bg-fog text-ink font-sans">
      <Header />
      <main className="max-w-5xl mx-auto px-5 md:px-8">
        <div id="top" />
        <Hero />
        <SelectedProjectsSection />
        <CourseArchiveSection />
        <ContactSection />
      </main>
    </div>
  );
}
