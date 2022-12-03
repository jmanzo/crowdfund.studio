import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";

export default function Navbar({ page }) {
  const navigation = [
    {
      label: "Pricing",
      url: "/docs/choose-a-plan"
    },
    {
      label: "Docs",
      url: "/docs/guide"
    }
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <a className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <img
                        src="/img/logo.png"
                        alt="N"
                        width="74"
                        height="74"
                        className="rounded-full"
                      />
                    </span>
                    <span className="hidden">Crowdfunding Studio</span>
                  </a>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className={`
                    px-2 
                    py-1 
                    ml-auto
                    ${ page ? 'text-cfsGray' : 'text-white' }
                    rounded-md 
                    lg:hidden 
                    focus:outline-none
                  `}>
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={item.url}>
                        <a className={`
                          w-full 
                          py-2
                          ${ page ? 'text-cfsGray' : 'text-white' }
                          rounded-md  
                          focus:outline-none 
                          text-center
                          font-bold
                        `}>
                          {item.label}
                        </a>
                      </Link>
                    ))}
                    <Link href="https://apps.shopify.com/crowdfund-studio">
                      <a
                        target="_blank"
                        className="
                          w-full 
                          px-6 
                          py-2 
                          mt-3 
                          text-center 
                          text-white 
                          rounded-md 
                          lg:ml-5
                          bg-gradient-to-r from-[#f8875f] to-[#fa6262]
                        "
                      >
                        Shopify App
                      </a>
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center xl:w-3/6 lg:w-6/6">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.url}>
                  <a className="inline-block px-4 py-2 text-lg text-cfsBlue no-underline dark:text-gray-200 font-bold text-base">
                    {menu.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item xl:w-1/6">
          <Link href="https://apps.shopify.com/crowdfund-studio">
            <a target="_blank" className="
              px-6 py-2 
              text-white
              text-base
              rounded-md 
              md:ml-5
              bg-gradient-to-r from-[#f8875f] to-[#fa6262]
            ">
            Shopify App
            </a>
          </Link>

          <ThemeChanger page={page}/>
        </div>
      </nav>
    </div>
  );
}
