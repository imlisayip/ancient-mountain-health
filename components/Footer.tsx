import Image from "next/image";

interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer>
      <div className="wrapper">
        <div className="flex items-center flex-col md:flex-row justify-between">
          <a className="flex title-font font-medium items-center md:justify-start justify-center">
            <Image
              src={"./logo.svg"}
              alt={"Ancient Mountain Health Logo"}
              width={"150"}
              height={"105"}
            />
          </a>

          <span className="flex flex-col pt-8 md:pt-0 gap-4 justify-end">
            <a href="https://www.instagram.com/ancientmountainhealth/">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5 inline-block"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
              <span className="inline-block pl-4">@ancientmountainhealth</span>
            </a>
            <a
              href="https://goo.gl/maps/LKCMvXoErThjUfpu9"
              className="flex items-center"
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
              <span className="pl-4 inline-block">
                540 Dellwood City Rd
                <br />
                Waynesville, NC 28786
              </span>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
