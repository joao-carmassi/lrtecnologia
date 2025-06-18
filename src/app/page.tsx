import ContainerForm from '@/components/ContainerForm';
import Destaque from '@/components/Destaque';
import ExplorerPowerBi from '@/components/ExplorerPowerBi';
import Features from '@/components/features-1';
import Foco from '@/components/Foco';
import HeroSection from '@/components/hero-section';
import Proposito from '@/components/Proposito';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <Features />
      <Foco />
      <Proposito />
      <Destaque />
      <ExplorerPowerBi />
      <ContainerForm />
    </main>
  );
}

