import { FC } from "react";
import Image from "next/image";

interface PageProps {
    params: {
        id: string
    }
}

const page: FC<PageProps> = async ({ params }) => {
    const res = await fetch(`${process.env.WEB_API_URL}/api/posts/${params.id}`, { method: 'GET' });
    const post = await res.json();

    return (
        <section className="w-full">
            <div className="container">
                <h1 className="text-2xl font-bold">News Detail Page</h1>

                <div className="row mt-4">
                    {post && (
                        <div key={post.id} className="col-md-12">
                            {post.featured ? (
                                <Image
                                    src={`${process.env.UPLOAD_URL}/${post.featured}`}
                                    alt="featured"
                                    width={100}
                                    height={100}
                                    className="w-full h-auto"
                                />
                            ) : (
                                <div className="flex justify-center py-4">
                                    <Image
                                        src={`${process.env.UPLOAD_URL}/img/logo_dmh.png`}
                                        alt="moph-logo"
                                        width={120}
                                        height={120}
                                    />
                                </div>
                            )}
                            <div className="my-4">
                                <h4 className="text-base font-light">{post.title}</h4>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default page