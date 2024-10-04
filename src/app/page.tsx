import Hero from "@/components/Hero";
import Stacks from "@/components/Stacks";
import Footer from "@/components/Footer";
import ScrollNav from "@/components/ScrollNav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollNav />
      <Hero />
      <Stacks />
      <Footer />
    </main>
  );
}
