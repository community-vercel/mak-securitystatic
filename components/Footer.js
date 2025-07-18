export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 text-center text-sm">
      <div className="max-w-6xl mx-auto">
        <p>&copy; {new Date().getFullYear()} MAK Security Services Ltd. All rights reserved.</p>
        <p className="mt-2">Registered in England & Wales | Company No. 12345678</p>
      </div>
    </footer>
  );
}
