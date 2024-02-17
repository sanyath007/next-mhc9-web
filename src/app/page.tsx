import Image from "next/image";
import SlideLogos from "@/components/SlideLogos";
import SlideHeros from "@/components/SlideHeros";

export default function Home() {
    return (
        <div className="wrapper w-full">
            {/* Heros */}
            <div className="hero bg-white relative">
                {/* Slide Heros */}
                <SlideHeros />

                {/* Option Menus */}
                <section className="h-[60px] absolute bottom-0 w-full bg-gray-100 z-999">
                    <h1>Option Menus</h1>
                </section>
            </div>

            <div className="content">
                {/* News Headlines */}
                <section className="">
                    {/* News Headlines */}
                    <div className="container min-h-[480px] pt-5">
                        <h1 className="text-2xl font-bold">News Headlines Section</h1>

                        <hr className="mt-2" />
                    </div>

                    {/* Director */}
                </section>

                {/* Videos */}
                <section className="">
                    {/* Videos */}
                    <div className="container min-h-[480px]">
                        <h1 className="text-2xl font-bold">Videos Section</h1>

                        <hr className="mt-2" />
                    </div>

                    {/* Officer Services */}
                </section>

                {/* News */}
                <section className="">
                    <div className="container min-h-[480px]">
                        <h1 className="text-2xl font-bold">News Section</h1>

                        <hr className="mt-2" />
                    </div>
                </section>

                {/* One pages */}
                <section className="border-2 border-red-500">

                </section>

                {/* Articles */}
                <section className="border-2 border-red-500">

                </section>

                {/* E-Services */}
                <section className="border-2 border-red-500">

                </section>
            </div>

            {/* Slide Bottom Logos */}
            <div className="h-[150px] bg-white p-4">
                <SlideLogos />
            </div>
        </div>
    );
}
