import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
    params: {
        id: string
    }
}

const page: FC<PageProps> = async ({ params }) => {
    const res = await fetch(`${process.env.WEB_API_URL}/api/posts?cate=${params.id}`, { method: 'GET' });
    const posts = await res.json();

    return (
        <div className="wrapper w-full">
            <div className="container">
                <h1 className="text-2xl font-bold">News Category Page</h1>

                <hr className="mt-2" />

                <div className="row mt-4">
                    {posts && posts.data.map((post: any, index: number) => (
                        <div key={post.id} className="col-md-4">
                            <div className="card mb-4">
                                {post.featured ? (
                                    <div className="card-img-top overflow-hidden">
                                        <Image
                                            src={`${process.env.UPLOAD_URL}/${post.featured}`}
                                            alt="featured"
                                            width={500}
                                            height={500}
                                            className="w-full h-[220px]"
                                        />
                                    </div>
                                ) : (
                                    <div className="card-img-top flex justify-center py-4">
                                        <Image
                                            src={`${process.env.UPLOAD_URL}/img/logo_dmh.png`}
                                            alt="moph-logo"
                                            width={120}
                                            height={120}
                                        />
                                    </div>
                                )}
                                <div className="card-body h-[10rem]">
                                    <Link href={`/news/${post.id}`}>
                                        <h4 className="text-base font-light">{post.title}</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page