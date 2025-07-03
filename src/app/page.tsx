import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight, Bot, Database, LayoutDashboard, GanttChartSquare, PencilRuler, Files, BarChart3, UserCog } from 'lucide-react';

// This is a helper component for the feature cards
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="font-bold text-lg mb-2 text-white">{title}</h3>
    <p className="text-neutral-light text-sm">{description}</p>
  </div>
);

export default async function HomePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const coreModules = [
    { icon: <UserCog size={24} />, title: "Authentication Module", description: "Secure user sign-up, login, and access management." },
    { icon: <GanttChartSquare size={24} />, title: "Project Management", description: "Organize tasks, track progress, and manage workflows." },
    { icon: <Database size={24} />, title: "Data Engine Module", description: "Ingest, process, and manage your datasets efficiently." },
    { icon: <PencilRuler size={24} />, title: "Annotation/Labeling", description: "Tools for precise data labeling and quality control." },
    { icon: <Bot size={24} />, title: "AI/ML Service Module", description: "Deploy and manage your machine learning models." },
    { icon: <Files size={24} />, title: "Billing & Reporting", description: "Handle subscriptions, usage, and financial reports." },
    { icon: <LayoutDashboard size={24} />, title: "Admin Dashboard", description: "Oversee the entire platform and user activities." },
    { icon: <BarChart3 size={24} />, title: "User Dashboard", description: "Personalized space for users to manage their work." },
  ];

  return (
    <div className="bg-dark-bg text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-dark-bg/80 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Melek<span className="text-primary">AI</span></h1>
          <div className="flex items-center gap-4">
            {!user ? (
              <>
                <LoginLink className="text-neutral-light hover:text-white transition-colors">Sign in</LoginLink>
                <RegisterLink className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                  Get Started
                </RegisterLink>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <p className="text-sm text-neutral-light">Welcome, {user.email}</p>
                <LogoutLink className="bg-accent text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                  Sign Out
                </LogoutLink>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 text-center bg-hero-pattern">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              The End-to-End Data Engine <br /> for Building AI
            </h2>
            <p className="text-lg text-neutral-light max-w-2xl mx-auto mb-8">
              From data management and annotation to model deployment and billing, MelekAI provides a unified platform to accelerate your AI development lifecycle.
            </p>
            <RegisterLink className="bg-primary text-white font-bold py-3 px-8 rounded-lg inline-flex items-center gap-2 hover:opacity-90 transition-transform transform hover:scale-105">
              Start Building for Free <ArrowRight size={20} />
            </RegisterLink>
          </div>
        </section>

        {/* Core Modules Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold">A Unified Platform, Built for Scale</h3>
              <p className="text-neutral-light mt-2">All the tools you need in one integrated solution.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreModules.map((mod) => (
                <FeatureCard key={mod.title} icon={mod.icon} title={mod.title} description={mod.description} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-neutral-dark">
          <p>&copy; {new Date().getFullYear()} MelekAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
