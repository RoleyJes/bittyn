import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <main id="body" className="relative">
      <a
        href="#body"
        className="w-12 h-12 rounded-full bg-[#e93266] flex justify-center items-center text-white fixed bottom-3 right-3 z-50 font-bold">
        &uarr;
      </a>
      <section className="pt-36 lg:pt-56 pb-16 lg:pb-36 px-4 relative bg-[url('/asset/main-banner-bg.png')] bg-no-repeat bg-cover bg-center">
        <Navbar />

        <div className="max-w-7xl  mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:max-lg:gap-10 items-center">
            <div className="flex flex-col gap-6 md:px-8 xl:px-20 text-center lg:text-start">
              <small className="text-xs tracking-wide font-bold text-[#e93266] bg-[#e7e2f0] px-5 py-2 w-fit max-lg:mx-auto rounded-3xl">
                Easy link shortening
              </small>
              <h1 className="text-2xl md:text-[2.875rem] leading-relaxed md:leading-[4.5rem] tracking-wide font-bold text-[#101044]">
                RX short URL & QR code generator
              </h1>
              <p className="text-lg md:text-[20px] leading-relaxed text-[#54547a]">
                A short link allows you to collect so much data about your
                customers & their behaviors.
              </p>
            </div>

            <figure className="place-self-center">
              <img src="asset/banner-img.png" alt="" className="" />
            </figure>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="px-4 py-12 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-[676px] text-center mx-auto mb-10">
            <p className="text-[#101044] text-2xl md:text-4xl font-bold tracking-wide mb-8">
              One short link, infinite possibilities
            </p>
            <p className="tracking-wide text-[#54547a] leading-relaxed">
              A short link is a powerful marketing tool when you use it
              carefully. It is not just a link but a medium between your
              customer and their destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-12 md:px-6">
            <div className="bg-white rounded-2xl p-6 pb-10 drop-shadow-xl flex flex-col gap-3 md:gap-6">
              <figure>
                <img src="asset/services-icon1.svg" alt="" />
              </figure>

              <p className="text-[#101044] text-lg md:text-xl font-semibold">
                Smart Targeting
              </p>
              <p className="text-[#6f6f87] text-sm tracking-wide md:text-base">
                Target your customers to increase your reach and redirect them
                to a relevant page. Add a pixel to retarget them in your social
                media ad campaign to capture them.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 pb-10 drop-shadow-xl flex flex-col gap-3 md:gap-6">
              <figure>
                <img src="asset/services-icon2.svg" alt="" />
              </figure>

              <p className="text-[#101044] text-lg md:text-xl font-semibold">
                In-Depth Analytics
              </p>
              <p className="text-[#6f6f87] text-sm tracking-wide md:text-base">
                Share your links to your network and measure data to optimize
                your marketing campaign's performance. Reach an audience that
                fits your needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 pb-10 drop-shadow-xl flex flex-col gap-3 md:gap-6">
              <figure>
                <img src="asset/services-icon3.svg" alt="" />
              </figure>

              <p className="text-[#101044] text-lg md:text-xl font-semibold">
                Digital Experience
              </p>
              <p className="text-[#6f6f87] text-sm tracking-wide md:text-base">
                Use various powerful tools increase conversion and provide a
                non-intrusive experience to your customers without disengaging
                them.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
      <Footer />
    </main>
  );
}
