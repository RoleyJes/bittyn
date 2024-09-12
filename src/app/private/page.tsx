import { redirect } from "next/navigation";

import { createClient } from "../../../utils/supabase/server";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BarLoader } from "react-spinners";
import Error from "../components/Error";
import useFetch from "../hooks/use-fetch";
import { getUrls } from "../db/apiUrls";

export default async function PrivatePage() {
  const supabase = createClient();

  // const { user } = UrlState();
  // const { loading, error, data } = useFetch(getUrls, user?.id);

  const { data: datae, error: errore } = await supabase.auth.getUser();
  if (errore || !datae?.user) {
    redirect("/login");
  }

  const userName: string = datae?.user?.user_metadata?.user_name;

  return (
    <section>
      <main className="pt-12 md:pt-20 pb-24 bg-[url('/asset/main-banner-bg.png')] bg-no-repeat bg-cover bg-center ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-24 items-center px-3 md:px-8">
            <figure className="max-md:w-72 max-md:h-72  place-self-center">
              <img
                src="asset/banner-img.png"
                alt=""
                className="w-full h-full"
              />
            </figure>

            <div className="col-span-2">
              <h1 className="text-center text-lg md:text-2xl mb-12 font-bold">
                Hello, {userName}
              </h1>

              <div className="bg-white w-full rounded-[50rem] shadow-lg  pl-10 md:pl-12 md:overflow-hidden h-16  relative">
                <img
                  src="asset/link.svg"
                  alt=""
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6"
                />
                <input
                  type="text"
                  placeholder="Paste your long link here"
                  className="w-full h-full border-none outline-none text-sm pr-4 md:pr-36 rounded-[50rem]"
                />
                <button className="rounded-[50rem] font-semibold absolute top-[4.5rem] max-md:left-1/2 -translate-x-1/2 translate-y-1/2 md:right-2 md:top-1/2  md:-translate-y-1/2 md:translate-x-0  text-sm tracking-widest px-8 py-3 text-white hover:bg-[#b0ddff] hover:text-[#101044] bg-[#2161e0] transition-all">
                  Shorten
                </button>
              </div>

              <div className="mt-32 md:mt-24 bg-white px-8 shadow-lg pb-6">
                {true && <BarLoader width={"100%"} color="#101044" />}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="px-4 py-3 border-2">
                    <p className="font-bold mb-3">Links Created</p>
                    <p>0</p>
                  </div>
                  <div className="px-4 py-3 border-2">
                    <p className="font-bold mb-3">Total Clicks</p>
                    <p>0</p>
                  </div>
                </div>

{/*                 <div>
                  <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
                    <div>
                      <div className=""></div>
                    </div>
                    <div className="col-span-2">
                      <p className="text-center">
                        Here's your shortened link:{" "}
                        <span className="font-semibold">
                          Lorem ipsum dolor sit amet
                        </span>
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* <Error message={error.message} /> */}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </section>
  );
}
