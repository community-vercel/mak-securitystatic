 
export default function Hero({ title, subtitle, image }) {
  return (
    <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}