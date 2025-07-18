export default function ServiceHighlights() {
  const highlights = [
    {
      id: 1,
      title: '#1 Site Visit',
      description: 'We conduct a full site survey, risk assessment, and identify security requirements.',
    },
    {
      id: 2,
      title: '#2 Service Delivery',
      description: 'Complete system installation, CCTV or manned security deployment before handover.',
    },
    {
      id: 3,
      title: '#3 Friendly Service',
      description: 'Throughout the process, you can rely on us 24/7.',
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About MAK Security</h2>
        <p className="text-center mb-6">
          MAK Security implements ways to improve business continuity, remove service disruptions, and proactively enhance security for you. Accredited Services For You. MAK Security is a SIA-approved company registered with the Security Industry Authority, holding ISO 9001:2008 certification and accredited by SafeContractor, CHAS, and Constructionline. With over 20 years of experience in security industry and 30 years front line experience in Greater Manchester.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="text-center p-6 bg-gray-100 rounded">
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}