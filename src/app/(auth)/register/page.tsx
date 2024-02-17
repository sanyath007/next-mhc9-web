import { FC } from "react";

interface PageProps {}

const page: FC<PageProps> = async ({}) => {
    return (
        <div className="wrapper w-full">
            <div className="container">
                <h1 className="text-2xl font-bold">Register Page</h1>

                <hr className="mt-2" />

                <div className="row mt-4">

                </div>
            </div>
        </div>
    )
}

export default page;