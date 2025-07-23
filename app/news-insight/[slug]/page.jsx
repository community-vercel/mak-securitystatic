'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const newsData = [
  {
    slug: 'sia-licence-reduction',
    title: 'SIA makes a further reduction to the SIA licence fee',
    date: 'April 21, 2023',
    content: `From April 2023, the Security Industry Authority (SIA) has announced a further reduction in the cost of obtaining an individual SIA licence, bringing the fee down to £184 for any sector within the regulated private security industry. This reduction aims to make licensing more accessible for security professionals across the UK, supporting both new entrants and experienced operatives in maintaining compliance. The SIA’s decision reflects its commitment to balancing affordability with the need to uphold high standards in the security sector, as assessed across 78 different areas of business operations, including staff training and financial management. This change is expected to benefit thousands of professionals, including those working in door supervision, security guarding, and key holding services. MAK Security, an SIA-approved contractor since 2009, welcomes this initiative, as it aligns with our commitment to supporting our staff in achieving and maintaining their professional qualifications, ensuring we continue to deliver high-quality security services across Manchester, Liverpool, and Birmingham.`,
    image: '/SIA-Approved-Contractor-300x298.jpg',
  },
  {
    slug: 'acs-pacesetters-mak',
    title: 'ACS Pacesetters and Mak Security',
    date: 'April 18, 2023',
    content: `MAK Security Services is proud to announce its inclusion in the ACS Pacesetters, a prestigious group representing the top 15% of SIA-approved contractors in the UK. This accolade highlights our dedication to delivering exceptional security services, characterized by professionalism, reliability, and client satisfaction. The ACS Pacesetters is independent of the SIA and the Approved Contractor Scheme (ACS), focusing on recognizing companies that consistently exceed industry standards. Our membership in this elite group underscores our commitment to quality, as we continue to provide tailored security solutions, including manned guarding, key holding, and event security, across Manchester, Liverpool, Birmingham, and beyond. This achievement strengthens our position as a trusted partner for businesses and individuals seeking high-caliber security services, with a focus on client retention through hard work and meticulous attention to detail.`,
    image: '/news/news-acs-pacesetters-720x280-1.png',
  },
  {
    slug: 'car-park-security-manchester',
    title: 'Car Park Security Manchester',
    date: 'March 29, 2023',
    content: `MAK Security offers comprehensive car park security and management services across Manchester, addressing both car park management and parking enforcement needs. Our services include advanced surveillance systems, such as CCTV with AI capabilities to distinguish human intruders from animals, on-site SIA-licensed security personnel, and tailored enforcement strategies to ensure safe and efficient parking environments. Whether for commercial properties, retail centers, or residential complexes, our team provides round-the-clock monitoring and rapid response to incidents, minimizing risks such as theft, vandalism, or unauthorized parking. We utilize state-of-the-art technology and highly trained officers to deliver peace of mind to property owners and visitors alike. Our holistic approach to car park security, combined with our experience in facility management, ensures seamless operations and enhances the overall user experience in Manchester and surrounding areas.`,
    image: '/news/Manned-Guarding.jpg',
  },
  {
    slug: 'key-holding-response',
    title: 'Key Holding Response',
    date: 'March 15, 2023',
    content: `MAK Security provides professional key holding and alarm response services for both residential and commercial clients across Greater Manchester. Our key holding service ensures that your property’s keys are securely stored in a local key vault or mobile unit and accessible only to our vetted, SIA-licensed response officers. In the event of an alarm activation or security breach, our team responds promptly to secure your premises, minimizing risks and potential damage. This service is ideal for property owners who require a reliable, professional response without the need to be on-site themselves. With a 24-hour manned control room and dedicated account managers, MAK Security ensures rapid response times and real-time incident reporting, providing peace of mind for our clients. Our SIA-approved status for key holding services guarantees a high standard of professionalism and reliability.`,
    image: '/news/Key-Holding-Manchester-270x310.jpg',
  },
  {
    slug: 'event-security-manchester',
    title: 'Event Security Manchester',
    date: 'March 10, 2023',
    content: `MAK Security specializes in delivering top-tier event security services in Manchester, ensuring safe and enjoyable experiences for all attendees. We work closely with event organizers to develop customized security plans that address specific risks and requirements, including crowd control, access management, and incident response. Our SIA-licensed security personnel are trained to manage large crowds, prevent unauthorized access, and respond swiftly to any incidents, ensuring minimal disruption. From corporate events to large public gatherings, our proactive approach and attention to detail create a secure environment, allowing organizers and guests to focus on the event itself. With over 50 years of combined experience in the security industry, MAK Security is a preferred choice for event security in Manchester, delivering professional and effective services tailored to each client’s needs.`,
    image: '/news/Manne.jpg',
  },
  {
    slug: 'key-holding-services-manchester',
    title: 'Key Holding Services Greater Manchester',
    date: 'March 01, 2023',
    content: `MAK Security offers reliable key holding services across Greater Manchester, catering to both domestic and commercial clients. Our secure key holding solutions ensure that your property’s keys are stored in a high-security facility or mobile unit, accessible only to our trained, SIA-licensed officers. In the event of an emergency, such as an alarm activation or security issue, our rapid response team arrives promptly to secure your premises, dealing with all types of alarm systems and emergency incidents. This service provides peace of mind for property owners, eliminating the need to personally respond to incidents. With a 24-hour control room, GPS tracking, and real-time incident reporting, MAK Security ensures efficient and professional key holding services tailored to your needs, backed by our SIA-approved contractor status.`,
    image: '/news/Key_Holding_Security-270x310.jpg',
  },
  {
    slug: 'security-guards-manchester',
    title: 'Security Guards Manchester',
    date: 'February 24, 2023',
    content: `MAK Security provides 24/7 security guard services in Manchester, offering robust protection against burglary, vandalism, and other threats. Our SIA-licensed guards are highly trained, reliable, and equipped to handle a wide range of security challenges, providing a visible deterrent and rapid response to potential incidents. Whether for commercial properties, construction sites, or residential areas, our guards are deployed to prevent costly damage and ensure a safe environment. Due to reduced police response times, the presence of professional security officers has become increasingly vital, and MAK Security meets this need with experienced personnel and advanced technology, such as GPS tracking and real-time incident reporting. Our SIA-approved status and over 50 years of industry experience make us a trusted choice for security guarding in Manchester and beyond.`,
    image: '/news/Basit-Mak-Security.jpg',
  },
  {
    slug: 'hiring-staff-social-distancing',
    title: 'Guidance On Hiring Staff To Manage Social Distancing Queues',
    date: 'February 15, 2023',
    content: `In response to the ongoing challenges of the COVID-19 pandemic, MAK Security provides expert guidance and staffing solutions to manage social distancing queues for retailers and other businesses in Manchester. Our trained, SIA-licensed personnel ensure compliance with social distancing regulations, maintaining orderly queues and safe environments for customers and staff. We offer tailored solutions, including crowd management, clear signage, and enforcement strategies, to minimize health risks while maintaining operational efficiency. Our team’s professionalism and experience in high-pressure situations ensure a seamless experience, allowing businesses to focus on their operations. MAK Security’s commitment to safety and reliability makes us a trusted partner for businesses navigating the complexities of the pandemic.`,
    image: '/news/Corona-Virus.jpg',
  },
  {
    slug: 'corona-virus-security-personnel',
    title: 'Corona Virus And SIA Security Personnel',
    date: 'February 01, 2023',
    content: `Following Boris Johnson’s address to the British public outlining measures to combat the spread of COVID-19, MAK Security has implemented enhanced protocols for our SIA-licensed personnel to ensure the safety of both staff and clients. Our team is fully trained to operate in compliance with government guidelines, providing specialized security services to support businesses in maintaining safe environments. These services include queue management, access control, and enforcement of social distancing measures, particularly in high-traffic areas like retail and event spaces. With over 50 years of experience in the security industry and a proactive approach, MAK Security continues to deliver high-quality solutions amidst the challenges of the pandemic, ensuring client safety and business continuity across Manchester and beyond.`,
    image: '/news/Corona-Virus.jpg',
  },
  {
    slug: 'covid-19-pandemic-procedure',
    title: 'Covid-19 Pandemic Procedure',
    date: 'January 25, 2023',
    content: `MAK Security has developed a comprehensive set of COVID-19 pandemic procedures to ensure the safety of our clients, staff, and the public across all our operations. These measures include enhanced hygiene protocols, mandatory use of personal protective equipment (PPE), and strict adherence to social distancing guidelines. Our SIA-licensed personnel are trained to implement these procedures effectively, whether providing security for events, retail environments, or key holding services. We also conduct regular risk assessments and provide staff training to maintain compliance with evolving government regulations. Our commitment to maintaining the highest standards of safety and professionalism helps our clients navigate the challenges of the pandemic with confidence. For a full list of our procedures or to discuss your security needs, contact our team at 0161 223 7281.`,
    image: '/news/Covid-19-1-270x310.jpg',
  },
];

export default function NewsDetailPage() {
  const { slug } = useParams();
  const article = newsData.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen py-28 text-center text-gray-600">
        <h2 className="text-3xl font-semibold">Article Not Found</h2>
        <p className="mt-4">
          Please check the URL or return to the <Link href="/news" className="text-blue-500 underline">News</Link> page.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-26 px-6 md:px-32">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:underline">Home</Link> &gt; 
          <Link href="/news" className="hover:underline">News</Link> &gt; 
          <span>{article.title}</span>
        </nav>

        <p className="text-sm text-gray-500 mb-2">{article.date}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          {article.title}
        </h1>

        <div className="mb-8">
          <Image
            src={article.image}
            alt={article.title}
            width={960}
            height={500}
            className="rounded-xl w-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>{article.content}</p>
        </div>

        <div className="mt-10">
          <Link href="/news-insight" className="text-red-600 hover:underline">
            ← Back to News
          </Link>
        </div>
      </div>
    </div>
  );
}