 
export default function ServiceCard({ title, description }) {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}