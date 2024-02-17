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

            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-12 min-h-screen flex flex-col justify-between">
                        {/* News Headlines */}
                        <section className="border-2 border-red-500">
                            {/* News Headlines */}

                            {/* Director */}
                        </section>

                        {/* Videos */}
                        <section className="border-2 border-red-500">
                            {/* Videos */}

                            {/* Officer Services */}
                        </section>

                        {/* News */}
                        <section className="border-2 border-red-500">

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
                </div>
            </div>

            {/* Slide Bottom Logos */}
            <div className="h-[150px] bg-white p-4">
                <SlideLogos />
            </div>
        </div>
    );
}
