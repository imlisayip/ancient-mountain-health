import { Disclosure } from "@headlessui/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <Disclosure as="nav">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href={"/"}>
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="./logo.svg"
                  alt="Ancient Mountain Health"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="./logo.svg"
                  alt="Ancient Mountain Health"
                />
              </Link>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href="https://goo.gl/maps/LKCMvXoErThjUfpu9"
              className="flex items-center pr-4"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-6 h-6 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="pl-2 inline-block">540 Dellwood City Rd</span>
            </a>
            <Link href={"./booknow"}>
              <button>Book now</button>
            </Link>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
