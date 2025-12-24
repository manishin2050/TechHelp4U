'use client';

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Teams } from '@/components/teams';
import { CommunityStats } from '@/components/community-stats';
import  OurTeam  from '@/app/our-team/page';
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
      <Teams />
      {/* <CommunityStats /> */}
      {/* <OurTeam /> */}
      <WhyJoinUs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
