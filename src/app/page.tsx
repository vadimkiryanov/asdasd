import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import Image from "next/image"

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <div className="card bg-base-200  shadow-xl  z-10 w-full p-10">
        <div className="flex flex-col items-center justify-center gap-6 z-20">
          <h3 className="text-3xl text-white text-center">
            Let’s create something <br /> together!
          </h3>
          <button className="btn bg-base-100">Contact</button>
        </div>
        <div className="bg-[url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)] absolute inset-0 opacity-[0.02] bg z-0 bg-[length:161px] bg-repeat" />
      </div>

      <Footer />
    </>
  )
}
