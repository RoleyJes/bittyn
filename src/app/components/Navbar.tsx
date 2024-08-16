import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed bg-[rgb(233,245,255)] py-8 top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between max-sm:gap-3 max-w-7xl mx-auto px-3 md:px-10 lg:px-20">
        <Link
          href="/"
          className="font-bold tracking-widest text-base md:text-2xl text-[#101044] italic">
          BITTYN
        </Link>

        <ul className="flex items-center gap-3 md:gap-12 lg:gap-24  tracking-wider text-[#54547a] text-xs md:text-base">
          <li className="hover:text-[#e93266] hover:transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#e93266] hover:transition-all">
            <Link href="/login">Login</Link>
          </li>
          <li className="text-white bg-[#e93266] hover:bg-[#b0ddff] hover:text-[#101044] px-3 py-2 md:px-6 md:py-3 rounded-3xl font-semibold hover:transition-all w-fit text-xs text-center">
            <Link href="/signup">Get Started</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
