import SlideLogos from "@/components/SlideLogos";
import Image from "next/image";

export default function Home() {
    return (
        <div className="wrapper w-full">
            <div className="container">
                <h1 className="text-2xl font-bold">Home Page</h1>

                <hr className="mt-2" />

                <div className="row mt-4">
                    <div className="col-md-12 min-h-screen flex flex-col justify-between">
                        {/* Hero */}
                        <section className="border-2 border-red-500">

                        </section>
                        {/* Option Menus */}
                        <section className="border-2 border-red-500"></section>
                        {/* News Headlines */}
                        <section className="border-2 border-red-500"></section>
                        {/* Videos */}
                        <section className="border-2 border-red-500"></section>
                        {/* News */}
                        <section className="border-2 border-red-500"></section>
                        {/* Articles */}
                        <section className="border-2 border-red-500"></section>
                    </div>
                </div>
            </div>

            {/* Slide Logos */}
            <div className="h-[150px] bg-white p-4">
                <SlideLogos />
            </div>
        </div>
    );
}
