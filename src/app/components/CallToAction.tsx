import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-[url('/asset/call-to-action-bg.svg')] bg-no-repeat bg-cover bg-center py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-[#101044] flex flex-col items-center  gap-6 tracking-wide">
          <p className="text-2xl md:text-3xl tracking-wide font-semibold text-center">
            Marketing with confidence.
          </p>
          <p className="text-center">
            Start your marketing campaign now and reach your customers
            efficiently.
          </p>
          <Link
            href="/signup"
            className="rounded-[50rem] font-semibold tracking-widest px-9 py-4 text-white hover:bg-[#101044] bg-[#2161e0] transition-all">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
