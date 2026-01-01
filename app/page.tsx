import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Process from "@/components/process";
import Testimonial from "@/components/testimonial";
import TrustedClient from "@/components/trustedclient";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedClient />
      <Process />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
}
