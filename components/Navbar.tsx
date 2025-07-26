import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [menu, setMenu] = useState(false);
  const navigation = [{ name: "About", href: "/about", current: false }];

  return (
    <>
      <header aria-label="Site Header" className="bg-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link className="block" href="/">
            <span className="sr-only">Home</span>
            <Image
              className="block h-8 w-auto"
              src={"/logo.svg"}
              alt={"Ancient Mountain Health Logo"}
              width={150}
              height={105}
            />
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm ">
                <li>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      className="transition "
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  ))}
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  href="https://goo.gl/maps/LKCMvXoErThjUfpu9"
                  className="hidden md:flex md:items-center"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="pl-2 inline-block">
                    540 Dellwood City Rd
                  </span>
                </Link>
                <Link
                  href="/booknow"
                  className="inline-flex items-center rounded border px-8 py-2.5 text-white focus:outline-none focus:ring transition-colors duration-200 bg-primary border-primary hover:bg-transparent hover:text-primary"
                >
                  <span className="text-sm font-medium">Book Now</span>
                </Link>
              </div>

              <button
                onClick={() => setMenu(!menu)}
                className="block p-2.5 rounded border transition bg-white border-gray-300 md:hidden text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring"
              >
                <span className="sr-only">Toggle menu</span>
                {menu ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {menu && (
          <div className="md:hidden mx-auto flex py-8 items-center text-center bg-white absolute border-green-50 shadow ">
            <ul className="flex flex-col  px-4 w-screen relative ">
              {navigation.map((item) => (
                <li key={item.name} className="shadow-sm py-6">
                  <Link className="transition " href={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-8">
                <Link
                  href="https://goo.gl/maps/LKCMvXoErThjUfpu9"
                  className="flex items-center justify-center md:hidden "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="pl-2 inline-block">
                    540 Dellwood City Rd
                    <br />
                    Waynesville, NC 28786 <br />
                    (Inside Waynesville Wellness )
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
