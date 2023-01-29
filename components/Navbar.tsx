import Link from "next/link";
import Headroom from "react-headroom";

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  return (
    <Headroom>
      <div className="flex py-8 px-8 align-middle justify-between">
        <div>logo</div>

        <ul className="flex gap-5">
          {/* todo aria */}
          <li>
            <Link href={"/about"} className="">
              About
            </Link>
          </li>
          <li>
            <Link href={"/services"} className="">
              Services
            </Link>
          </li>
          <li>
            <li>
              <Link href={""} className="">
                For Patient
              </Link>
            </li>
            {/* <li>
              <Link href={""} className="">
                form 2
              </Link>
            </li>
            <li>
              <Link href={""} className="">
                form 3
              </Link>
            </li> */}
          </li>
          <li>
            <Link href={"/contact"} className="">
              Contact
            </Link>
          </li>
        </ul>

        <ul className="flex gap-5">
          <li>
            <Link href="https://goo.gl/maps/RuBQWYVfkRjZ2K8N8" className=" ">
              540 Dellwood City Rd, Waynesville, NC
            </Link>
          </li>
          <li>
            <Link
              href="/booknow"
              className="py-4 px-8 rounded bg-[color:var(--primary-color)] text-white"
            >
              Book now
            </Link>
          </li>
        </ul>
      </div>
    </Headroom>
  );
}
