import { Metadata } from 'next';
import Hero from '@/components/Hero';
import TopCategories from '@/components/TopCategories';
import Testimonials from '@/components/Testimonials';
import TrustBadges from '@/components/TrustBadges';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Crispy Fruits - Your fresh fruit destination',
};

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Top Categories Section */}
      <section id="products">
        <TopCategories />
      </section>

      {/* Testimonials Section */}
      <section id="about">
        <Testimonials />
      </section>

      {/* Trust Badges Section */}
      <section id="faq">
        <TrustBadges />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Recipes Section */}
      <section id="recipes">
        {/* Additional content for recipes can be added here */}
      </section>
    </main>
  );
}