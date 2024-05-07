import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      
      <Image
        src="/skull.png"
        alt="Next.js Logo"
        width={200}
        height={200}
      />
      <Link href="/Dob">
      <button className="font-family bg-[#1a1a1a] shadow-sm text-white font-bold py-2 px-4 mt-5 rounded"> Shall we proceed?</button>
      </Link>
    </main>
  );
}
