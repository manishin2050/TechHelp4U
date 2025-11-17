'use client';

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { CommunityStats } from '@/components/community-stats';
import { WhyJoinUs } from '@/components/why-join-us';
import { Testimonials } from '@/components/testimonials';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main  className="min-h-screen bg-background">
      <Navbar />
        
      <Hero />
      <About />
      <Services />
      <CommunityStats />
      <WhyJoinUs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
