import headerImg from "@/assets/header.jpg";
import ButtonStyle from "@/components/button";
import { Separator } from "@/components/ui/separator";
import { Asterisk, MoveUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { motion } from "framer-motion";

import { useState } from "react";

export default function Homepage() {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <header className="grid md:grid-cols-2 grid-cols-1 px-10 mb-20">
        <section className="flex mb-20 md:mb-0 flex-col">
          <div className="relative w-50 h-4 flex items-center justify-center">
            <div className="bg-terracotta w-full h-px"></div>
            <span className="bg-cream absolute px-5 pl-2 right-px text-xs top-0 uppercase text-terracotta">
              coffe, slowly made
            </span>
          </div>
          <h1 className="text-[50px] md:text-[60px] lg:text-[80px] text-espresso font-title mt-5">
            Good coffe.
          </h1>
          <h2 className="text-[50px] md:text-[60px] lg:text-[80px] text-terracotta italic font-title">
            Good days.
          </h2>
          <p className="lg:w-120 text-lg text-espresso mt-5">
            Ruang kecil untuk kopi yang diracik dengan niat, obrolan yang tidak
            buru-buru, dan jeda yang selalu terasa pas.
          </p>
          <div className="md:flex grid grid-cols-1 items-center justify-start my-10 gap-5">
            <ButtonStyle
              text={"explore our menu"}
              style={
                "uppercase bg-espresso text-cream cursor-pointer hover:bg-caramel-gold hover:text-espresso hover:scale-102 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 py-6 px-5 w-full md:w-fit text-xs tracking-[5px]"
              }
              icons={<MoveUpRight className="w-3! h-3!" />}
            ></ButtonStyle>
            <NavLink className={"flex flex-col ml-2 md:ml-0 mt-5 md:mt-0"}>
              <span className="uppercase text-sm">our philosophy</span>
              <Separator className={"bg-caramel-gold w-35 h-px mt-2"} />
            </NavLink>
          </div>
          <div className="flex h-5 mt-5 items-center gap-7 text-sm">
            <div className="flex w-30 items-center gap-2">
              <span className="text-2xl font-title">4.7</span>
              <span className="text-xs">rating dari coffe friends</span>
            </div>
            <Separator
              orientation="vertical"
              className={"bg-espresso/50 h-10! w-px! mt-2"}
            />
            <div className="flex w-30 items-center gap-2">
              <span className="text-2xl font-title">5+</span>
              <span className="text-xs">tahun menyeduh dengan cinta</span>
            </div>
          </div>
        </section>
        <section className="relative w-full flex items-center justify-center">
          <div className="relative w-full z-10 overflow-hidden rounded-t-[45%] rounded-b-4xl h-fit">
            <img
              src={headerImg}
              className="w-full h-90 md:h-110 object-cover object-center"
            />
            <div className="bg-espresso/80 w-full h-full absolute top-0 left-0"></div>
            <div className="flex p-5 w-full items-center justify-between absolute bottom-0 left-0">
              <div className="flex flex-col">
                <h1 className="text-4xl font-title text-cream">Made for</h1>
                <span className="italic text-4xl font-title text-cream">
                  your pause.
                </span>
              </div>
              <Asterisk className="w-10 h-10 text-cream" />
            </div>
          </div>
          <div className="absolute bottom-0 md:-bottom-40 w-[85%] rounded-b-4xl rotate-4 h-70 bg-caramel-gold/50"></div>
          <div className="absolute -rotate-12 -bottom-2 md:-bottom-40 -left-1 md:left-0 z-10 flex w-10 h-10 bg-cream items-center justify-center p-10 rounded-full border border-terracotta">
            <span className="uppercase text-terracotta text-xs">
              est 2026 rona
            </span>
          </div>
        </section>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 0.7 }}
        id="our-story"
        className="mb-10 mt-50 md:mt-70 bg-espresso p-10  grid md:grid-cols-2 grid-cols-1"
      >
        <div className="flex w-full items-end justify-start">
          <span className="text-caramel-gold text-md uppercase">
            a litte about us
          </span>
        </div>
        <div className="flex w-full mt-10 md:mt-0 justify-end flex-col">
          <h1 className="text-[30px] md:text-[50px] text-cream font-title mb-10">
            Kami percaya secangkir kopi yang baik bisa{" "}
            <span className="text-caramel-gold italic">mengubah ritme</span>{" "}
            satu hari.
          </h1>
          <p className="text-sm text-cream">
            Di Rona. kami memilih biji dari petani yang kami kenal,
            memanggangnya dalam batch kecil, lalu menyeduhnya untuk kamu nikmati
            tanpa terburu-buru. Datang sebagai tamu, pulang sebagai bagian dari
            cerita.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 0.7 }}
        id="menu"
        className="my-30 md:my-50 px-10 flex flex-col"
      >
        <span className="text-terracotta font-title uppercase">
          from our bar
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-end">
          <h1 className="text-4xl my-5 md:my-0 md:text-[70px] text-espresso font-title">
            The daily pour
          </h1>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full h-10 flex md:items-end md:justify-end"
          >
            <TabsList className={"space-x-5"}>
              <TabsTrigger
                value="all"
                className="
                  rounded-none
                  px-1 pb-3 pt-2
                  text-sm font-medium
                  text-muted-foreground
                  data-active:text-terracotta!
                  data-active:after:terracotta!
                  data-active:after:w-10!
                  cursor-pointer
                  data-active:after:h-px!
                  data-active:after:bottom-0!
                "
              >
                All
              </TabsTrigger>

              <TabsTrigger
                value="coffe"
                className="
                  rounded-none
                  px-1 pb-3 pt-2
                  text-sm font-medium
                  text-muted-foreground
                  data-active:text-terracotta!
                  data-active:after:terracotta!
                  data-active:after:w-10!
                  cursor-pointer
                  data-active:after:h-px!
                  data-active:after:bottom-0!
                "
              >
                Coffe
              </TabsTrigger>

              <TabsTrigger
                value="bites"
                className="
                  rounded-none
                  px-1 pb-3 pt-2
                  text-sm font-medium
                  text-muted-foreground
                  data-active:text-terracotta!
                  data-active:after:terracotta!
                  data-active:after:w-10!
                  cursor-pointer
                  data-active:after:h-px!
                  data-active:after:bottom-0!
                "
              >
                Bites
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <Tabs value={activeTab} className={"mt-10"}>
          <TabsContent value="all">
            <section className="flex flex-col gap-10">
              <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-row relative items-start gap-5">
                  <span className="font-title text-terracotta text-lg">01</span>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <h1 className="font-title text-xl md:text-2xl">
                        Espresso Tonic
                      </h1>
                      <span className="text-espresso/80 text-xs md:text-sm">
                        Espresso, tonic, lemon
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="font-title text-lg md:text-2xl text-espresso/80">
                        50K
                      </span>
                    </div>
                  </div>
                  <Separator
                    className={"w-full h-px bg-espresso/50 -bottom-5 absolute"}
                  />
                </div>
                <div className="flex flex-row relative hover:text-terracotta cursor-pointer items-start gap-5">
                  <span className="font-title text-terracotta text-lg">02</span>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <h1 className="font-title text-xl md:text-2xl">
                        Butterscoth Latte
                      </h1>
                      <span className="text-espresso/80 text-xs md:text-sm">
                        House caramel, oat milk
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="font-title text-lg md:text-2xl text-espresso/80">
                        80k
                      </span>
                    </div>
                  </div>
                  <Separator
                    className={"w-full h-px bg-espresso/50 -bottom-5 absolute"}
                  />
                </div>
              </section>
              <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-row relative hover:text-terracotta cursor-pointer items-start gap-5">
                  <span className="font-title text-terracotta text-lg">03</span>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <h1 className="font-title text-xl md:text-2xl">
                        Vbo Gayo
                      </h1>
                      <span className="text-espresso/80 text-xs md:text-sm">
                        Gayo wine, hand brew
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="font-title text-lg md:text-2xl text-espresso/80">
                        100K
                      </span>
                    </div>
                  </div>
                  <Separator
                    className={"w-full h-px bg-espresso/50 -bottom-5 absolute"}
                  />
                </div>
                <div className="flex flex-row relative hover:text-terracotta cursor-pointer items-start gap-5">
                  <span className="font-title text-terracotta text-lg">04</span>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <h1 className="font-title text-xl md:text-2xl">
                        Cinnamon Roll
                      </h1>
                      <span className="text-espresso/80 text-xs md:text-sm">
                        Warm, butter glaze
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="font-title text-lg md:text-2xl text-espresso/80">
                        750K
                      </span>
                    </div>
                  </div>
                  <Separator
                    className={"w-full h-px bg-espresso/50 -bottom-5 absolute"}
                  />
                </div>
              </section>
            </section>
          </TabsContent>
          <TabsContent value="coffe">
            <section className="flex flex-col gap-10">
              <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-row relative items-start gap-5">
                  <span className="font-title text-terracotta text-lg">01</span>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <h1 className="font-title text-xl md:text-2xl">
                        Espresso Tonic
                      </h1>
                      <span className="text-espresso/80 text-xs md:text-sm">
                        Espresso, tonic, lemon
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="font-title text-lg md:text-2xl text-espresso/80">
                        50K
                      </span>
                    </div>
                  </div>
                  <Separator
                    className={"w-full h-px bg-espresso/50 -bottom-5 absolute"}
                  />
                </div>
                <div className="flex flex-row relative hover:text-terracotta cursor-pointer items-start gap-5">
                  <span className="font-title text-terracotta text-lg">02</span>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <h1 className="font-title text-xl md:text-2xl">
                        Butterscoth Latte
                      </h1>
                      <span className="text-espresso/80 text-xs md:text-sm">
                        House caramel, oat milk
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="font-title text-lg md:text-2xl text-espresso/80">
                        80k
                      </span>
                    </div>
                  </div>
                  <Separator
                    className={"w-full h-px bg-espresso/50 -bottom-5 absolute"}
                  />
                </div>
              </section>
              <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-row relative hover:text-terracotta cursor-pointer items-start gap-5">
                  <span className="font-title text-terracotta text-lg">03</span>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <h1 className="font-title text-xl md:text-2xl">
                        Vbo Gayo
                      </h1>
                      <span className="text-espresso/80 text-xs md:text-sm">
                        Gayo wine, hand brew
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="font-title text-lg md:text-2xl text-espresso/80">
                        100K
                      </span>
                    </div>
                  </div>
                  <Separator
                    className={"w-full h-px bg-espresso/50 -bottom-5 absolute"}
                  />
                </div>
              </section>
            </section>
          </TabsContent>
          <TabsContent value="bites">
            <section className="flex flex-col gap-10">
              <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-row relative hover:text-terracotta cursor-pointer items-start gap-5">
                  <span className="font-title text-terracotta text-lg">04</span>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <h1 className="font-title text-xl md:text-2xl">
                        Cinnamon Roll
                      </h1>
                      <span className="text-espresso/80 text-xs md:text-sm">
                        Warm, butter glaze
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="font-title text-lg md:text-2xl text-espresso/80">
                        750K
                      </span>
                    </div>
                  </div>
                  <Separator
                    className={"w-full h-px bg-espresso/50 -bottom-5 absolute"}
                  />
                </div>
              </section>
            </section>
          </TabsContent>
        </Tabs>
      </motion.section>
    </>
  );
}
