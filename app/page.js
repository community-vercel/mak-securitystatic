 
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

export default function Home() {
  return (
    <div>
      <Hero
        title="MAK Security - Your Trusted Security Partner"
        subtitle="Delivering professional security services across the UK."
        image="/images/hero-bg.jpg"
      />
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </section>
    </div>
  );
}