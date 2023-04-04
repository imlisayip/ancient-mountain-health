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
            <a href="tel:2183828786">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-6 h-6 inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.502 4.257A2 2 0 0 0 7.646 3H4.895A1.895 1.895 0 0 0 3 4.895C3 13.789 10.21 21 19.105 21A1.895 1.895 0 0 0 21 19.105v-2.751a2 2 0 0 0-1.257-1.857l-2.636-1.054a2 2 0 0 0-2.023.32l-.68.568a2.001 2.001 0 0 1-2.696-.122L9.792 12.29a2 2 0 0 1-.123-2.694l.567-.68a2 2 0 0 0 .322-2.024L9.502 4.257Z"
                />
              </svg>
              <span className="inline-block pl-4">(218) 382-8786</span>
            </a>
            <a href="mailto:noah@ancientmountainhealth.com">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-6 h-6 inline-block"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m4 7 6.2 4.65a3 3 0 0 0 3.6 0L20 7"
                />
                <rect
                  width="18"
                  height="14"
                  x="3"
                  y="5"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-width="2"
                  rx="2"
                />
              </svg>
              <span className="inline-block pl-4">
                noah@ancientmountainhealth.com
              </span>
            </a>
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
