export default function Footer() {
  return (
    <footer className="bg-[url('/asset/Footer-BG.png')] bg-no-repeat bg-cover bg-center py-20 px-6 lg:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 md:gap-3 text-center md:text-start">
          <div className="md:col-span-2">
            <a
              href="#body"
              className="font-bold tracking-widest text-2xl text-white hover:text-[rgb(233,245,255)] italic transition-all">
              BITTYN
            </a>
          </div>

          <div>
            <p className="mb-6 text-lg font-medium">Features</p>
            <ul className="flex flex-col gap-4">
              <li className="text-sm tracking-wider text-[#f2f2fb]">
                Link Shortening
              </li>
              <li className="text-sm tracking-wider text-[#f2f2fb]">
                Branded Links
              </li>
              <li className="text-sm tracking-wider text-[#f2f2fb]">
                Analytics
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-6 text-lg">Resources</p>
            <ul className="flex flex-col gap-4">
              <li className="text-sm tracking-wider text-[#f2f2fb]">Blogs</li>
              <li className="text-sm tracking-wider text-[#f2f2fb]">
                Developers
              </li>
              <li className="text-sm tracking-wider text-[#f2f2fb]">Support</li>
            </ul>
          </div>

          <div>
            <p className="mb-6 text-lg">Company</p>
            <ul className="flex flex-col gap-4">
              <li className="text-sm tracking-wider text-[#f2f2fb]">About</li>
              <li className="text-sm tracking-wider text-[#f2f2fb]">
                Our Team
              </li>
              <li className="text-sm tracking-wider text-[#f2f2fb]">Careers</li>
              <li className="text-sm tracking-wider text-[#f2f2fb]">Contact</li>
            </ul>
          </div>

          <div>
            <figure className="flex items-center justify-center md:justify-start gap-6">
              <a href="" className=" hover:scale-125 transition-all">
                <img src="asset/medium.png" alt="" />
              </a>
              <a
                href="https://x.com/jessey_ca"
                target="d_blank"
                className=" hover:scale-125 transition-all">
                <img src="asset/twitter.png" alt="" />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </footer>
  );
}
