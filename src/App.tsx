import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Programs from "./components/Programs";
import Schedule from "./components/Schedule";
import Trainers from "./components/Trainers";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Faq from "./components/Faq";
import JoinForm from "./components/JoinForm";
import Footer from "./components/Footer";
import { useScrollReveal } from "./useScrollReveal";

export default function App() {
  useScrollReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Programs />
        <Schedule />
        <Trainers />
        <Pricing />
        <Faq />
        <Gallery/>
        <JoinForm />
      </main>
      <Footer />
    </>
  );
}
