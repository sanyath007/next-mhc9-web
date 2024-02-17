import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from 'react-icons/fa'

interface PageProps {
    params: {
        id: string
    }
}

const page: FC<PageProps> = async ({ params }) => {
    const res = await fetch(`${process.env.WEB_API_URL}/api/posts/${params.id}`, { method: 'GET' });
    const post = await res.json();

    return (
        <div className="wrapper w-full">
            <div className="container">
                <h1 className="text-2xl font-bold">{post.title}</h1>

                <hr className="mt-2" />

                <div className="row mt-4">
                    {post && (
                        <div key={post.id} className="col-md-12 flex flex-col items-center justify-center">
                            <div className="overflow-hidden rounded-md w-3/5">
                                {post.featured ? (
                                    <Image
                                        src={`${process.env.UPLOAD_URL}/${post.featured}`}
                                        alt="featured"
                                        width={500}
                                        height={500}
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
                            </div>

                            {post.category_id === 2 && (
                                <div className="my-4 flex justify-center items-center">
                                    <div className="text-base font-light w-4/5" dangerouslySetInnerHTML={{ __html: post.full_text }}></div>
                                </div>
                            )}

                            {post.category_id !== 2 && (
                                <div className="my-4 flex justify-center items-center">
                                    <div className="flex justify-center items-center text-base font-light">
                                        { post.intro_text}
                                        <Link href={post.urls} className="font-bold btn ml-2 flex items-center justify-center gap-1">
                                            ดูรายละเอียด <FaArrowCircleRight />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default page