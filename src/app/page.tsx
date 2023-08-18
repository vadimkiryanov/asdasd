import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <div className="card z-10  w-full  bg-base-200 p-10 shadow-xl">
        <div className="z-20 flex flex-col items-center justify-center gap-6">
          <h3 className="text-center text-3xl text-white">
            Let’s create something <br /> together!
          </h3>
          <button className="btn bg-base-100">Contact</button>
        </div>
        <div className="bg absolute inset-0 z-0 bg-[url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)] bg-[length:161px] bg-repeat opacity-[0.02]" />
      </div>

      <Footer />
    </>
  );
}
