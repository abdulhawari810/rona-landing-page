import { Link } from "react-router-dom";
import ButtonStyle from "./button";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [sidemenu, setSideMenu] = useState(false);
  const lastScrollY = useRef(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    if (sidemenu) {
      setShowNav(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sidemenu]);
  return (
    <>
      <nav
        className={`flex z-50 items-center transition-all duration-300 flex-col justify-center fixed top-0 left-0 w-full ${showNav ? "translate-y-0" : "-translate-y-full"}`}
      >
        <section className="w-full h-12 bg-espresso flex items-center justify-center">
          <span className="text-[7px] sm:text-[10px] font-text tracking-[2px] uppercase text-cream-light">
            open daily &#x2022; 07:00 - 22:00 &#x2022; jl. kemang raya no. 8
          </span>
        </section>
        <section className="flex p-5 px-10 bg-cream h-20 w-full items-center justify-between">
          <h1 className="text-3xl font-title font-bold">
            Rona<span className="text-espresso">.</span>
          </h1>
          <div className="hidden md:flex items-center gap-5 justify-center">
            <Link
              to={"#our-story"}
              className={
                "uppercase hover:text-caramel-gold transition-colors duration-300 text-espresso text-md"
              }
            >
              our story
            </Link>
            <Link
              to={"#menu"}
              className={
                "uppercase hover:text-caramel-gold transition-colors duration-300 text-espresso text-md"
              }
            >
              menu
            </Link>
            <Link
              to={"#visit-us"}
              className={
                "uppercase hover:text-caramel-gold transition-colors duration-300 text-espresso text-md"
              }
            >
              visit us
            </Link>
          </div>
          <Link className={"hidden md:flex"}>
            <ButtonStyle
              text={"find a table"}
              style={
                "p-5 cursor-pointer hover:scale-105 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl uppercase"
              }
            />
          </Link>
          <ButtonStyle
            onClick={() => setSideMenu(!sidemenu)}
            style={
              "cursor-pointer hover:scale-105 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl w-fit h-fit uppercase bg-cream md:hidden rounded-none!"
            }
            icons={
              <div className="w-7 h-7 flex items-center justify-center relative overflow-hidden">
                <span
                  className={`w-full absolute left-0 h-[1.5px] rounded-full bg-espresso transition-all duration-300 ${sidemenu ? "translate-y-0 rotate-45" : "-translate-y-1.5 rotate-0"}`}
                ></span>
                <span
                  className={`w-full absolute left-0 h-[1.5px] rounded-full bg-espresso transition-all duration-300 ${sidemenu ? "left-225" : "left-0"}`}
                ></span>
                <span
                  className={`w-full absolute left-0 h-[1.5px] rounded-full bg-espresso transition-all duration-300 ${sidemenu ? "translate-y-0 rotate-[-220deg]" : "translate-y-1.5 rotate-0"}`}
                ></span>
              </div>
            }
          />
        </section>
      </nav>
      <nav
        className={`w-full flex flex-col gap-2 px-10 py-2 h-fit bg-cream fixed transition-all duration-300 top-0 z-40 ${sidemenu ? "translate-y-30" : "-translate-y-225"}`}
      >
        <Link
          to={"#our-story"}
          onClick={() => setSideMenu(!sidemenu)}
          className={"hover:underline hover:text-terracotta"}
        >
          <span className="uppercase text-lg">our story</span>
        </Link>
        <Link
          to={"#menu"}
          onClick={() => setSideMenu(!sidemenu)}
          className={"hover:underline hover:text-terracotta"}
        >
          <span className="uppercase text-lg">menu</span>
        </Link>
        <Link
          to={"#visit-us"}
          onClick={() => setSideMenu(!sidemenu)}
          className={"hover:underline hover:text-terracotta"}
        >
          <span className="uppercase text-lg">visit us</span>
        </Link>
      </nav>
    </>
  );
}
