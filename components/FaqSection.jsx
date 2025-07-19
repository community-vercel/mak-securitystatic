
'use client';
import { useState } from 'react';
import { FaThumbsUp, FaUsers, FaChartLine, FaArrowUp, FaStar, FaMapMarkerAlt, FaPlus, FaMinus } from 'react-icons/fa';

const stats = [
  { icon: <FaThumbsUp size={24} />, text: '92 % Employee Satisfaction' },
  { icon: <FaUsers size={24} />, text: '94 % Rated Us As People First' },
  { icon: <FaChartLine size={24} />, text: '75 % Staff Retention' },
  { icon: <FaArrowUp size={24} />, text: '78 % Promoted From Within' },
  { icon: <FaStar size={24} />, text: '97 % Employee Excellence' },
  { icon: <FaMapMarkerAlt size={24} />, text: '94 % Site Excellence' },
];

const faqs = [
  {
    question: 'Who Are MAK Security?',
    answer: 'MAK Security is an SIA‑approved and ISO 9001-registered security provider since 2009, offering licensed manned guarding, mobile patrols, event security, CCTV, key‑holding & alarm response, facility management, concrete block hire, car‑park management, court enforcement, and dog handling across Manchester, London, the North West and nationwide.' // :contentReference[oaicite:1]{index=1}
  },
  {
    question: 'Why Would I Choose MAK Security?',
    answer: 'You should choose MAK because they are SIA‑approved, hold ISO 9001 and Safe Contractor accreditations, boast over 50 years of management experience, operate a 24/7 control room, offer rapid response, GPS tracking, pre-start shift checks and real-time reporting, plus provide a single point of contact and customized service for every client.' // :contentReference[oaicite:2]{index=2}
  },
  {
    question: 'What Services Do MAK Security Offer?',
    answer: 'They provide a comprehensive suite of security services including manned guarding (commercial, event, retail, vacant property, concierge), mobile patrols, event security, CCTV monitoring, commercial & domestic key-holding & alarm response, facility management, car park supervision, concrete block hire, court enforcement, and dog handling K9 units.' // :contentReference[oaicite:3]{index=3}
  },
  {
    question: 'How Can I Work For MAK Security?',
    answer: 'MAK offers roles as Security Officers across Manchester, Liverpool, Bolton and more. Candidates must hold a valid SIA licence, be 18+, UK‑eligible to work, and ideally have security experience and a full UK driving licence. Shifts include days, nights, 10/12‑hour rotations on zero‑hours or full‑time contracts.' // :contentReference[oaicite:4]{index=4}
  },
  {
    question: 'Which Areas Do MAK Security Cover?',
    answer: 'They operate in Manchester, Merseyside, Cheshire, Lancashire, Staffordshire, London, Birmingham and nationwide—including specific coverage in Stoke-on-Trent, Wigan, Lancashire, London, and across the UK.' // :contentReference[oaicite:5]{index=5}
  },
  {
    question: 'How Quickly Can You Get Started?',
    answer: 'MAK typically begins with a free no‑obligation site visit, risk assessment and quote. They have the capability to provide same‑day setup and can deploy manned guarding or mobile patrols rapidly, backed by their 24/7 control room and dedicated account management.' // :contentReference[oaicite:6]{index=6}
  },
  {
    question: 'How Much Do MAK Security’s Services Cost?',
    answer: 'Costs depend on service type, location, risk level and required hours. MAK offers competitive bespoke quotes after assessment—reliable pricing is provided post-site survey.' // :contentReference[oaicite:7]{index=7}
  },
];


export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-gray-100 py-10 px-4">
      {/* Stats Row */}
   <div className="max-w-9xl overflow-x-auto flex items-center text-center justify-center ">
  <div className="flex flex-nowrap gap-6 px-4 py-4 text-center justify-start">
    {stats.map((item, i) => (
      <div
        key={i}
        className="bg-white shadow-md rounded-md px-2 py-2 flex items-center gap-3 w-[160px] text-center justify-center flex-shrink-0"
      >
        <div className="text-[#ff0600]">{item.icon}</div>
        <p className="text-sm font-semibold text-gray-700">{item.text}</p>
      </div>
    ))}

    {/* Jobs card inline */}
    <div className="bg-white shadow-md rounded-md px-4 py-4 flex flex-col items-center justify-center w-[200px] flex-shrink-0">
      <p className="text-sm text-gray-700 font-semibold mb-2">Current Listings</p>
      <button className="bg-[#ff0600] hover:bg-black text-white text-sm font-semibold px-4 py-2 rounded-md">
        VIEW JOBS
      </button>
    </div>
  </div>
</div>


      {/* FAQ Heading */}
      <div className="bg-black text-white text-center py-3 text-lg font-semibold">
        Frequently Asked Questions
      </div>

      {/* FAQ Grid */}
    <div className="max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
  {faqs.map(({ question, answer }, i) => (
    <div key={i} className="bg-white rounded shadow p-4 cursor-pointer" onClick={() => toggle(i)}>
      <div className="flex justify-between items-center">
        <span className="text-gray-800 font-medium">{question}</span>
        <div className="bg-[#ff0600] text-white p-1 rounded">
          {openIndex === i ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      {openIndex === i && (
        <p className="text-gray-600 mt-3">
          {answer}
        </p>
      )}
    </div>
  ))}
</div>

 

      {/* Extra Note */}
      <div className="text-center mt-6 text-sm text-gray-700">
        Have another question not answered above?{' '}
        <span className="font-semibold text-[#ff0600] cursor-pointer hover:underline">
          Find Out More Here
        </span>
      </div>
    </section>
  );
}
