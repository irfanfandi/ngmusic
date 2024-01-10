"use client";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Roboto } from "next/font/google";
import "./../globals.css";

const roboto = Roboto({ style: "normal", weight: "500", subsets: ["latin"] });

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="sticky top-0 backdrop-blur-xl ">
          <nav
            style={{
              backgroundImage: "linear-gradient(100deg, #712bda, #a45deb 100%)",
              boxShadow: "0 0 6px 0 rgba(148, 77, 230, 0.75)",
            }}
            className="container  mx-auto flex flex-wrap p-5 justify-between w-full sm:w-96 "
            aria-label="Global"
          >
            <div className="flex">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 dark:text-yellow-500"
              >
                <Bars3Icon className="h-8 w-8 text-white" aria-hidden="true" />
              </button>
            </div>
            <div className="flex">
              <h6 className="text-white font-bold">ngmusic</h6>
            </div>
            <div className="flex">
              <button
                type="button"
                onClick={() => {
                  window.location.replace("/");
                }}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 dark:text-yellow-500"
              >
                <MagnifyingGlassIcon
                  className="h-8 w-8  text-white"
                  aria-hidden="true"
                />
              </button>
            </div>
          </nav>
        </div>
        <div className="flex  flex-col items-center">
          <main
            style={{
              backgroundColor: "#f8fafc",
            }}
            className="min-h-screen w-full sm:w-96 "
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
