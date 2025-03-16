import Image from "next/image";

export default function Banner() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
      <Image src="/bg-hands.jpg" alt="Charity Logo" width={48}
      height={48} className="h-12 w-auto" />
      </div>
    </header>
  );
} 