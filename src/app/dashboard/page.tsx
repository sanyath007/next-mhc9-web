import Image from "next/image";

export default async function Dashboard() {
    const res = await fetch(`${process.env.WEB_API_URL}/api/posts?cate=2`, { method: 'GET' });
    const posts = await res.json();

    return (
        <section>
            <div className="container">
                <h1>Dashboard Page</h1>

                <div className="row">
                    {posts && posts.data.map((post: any, index: number) => (
                        <div key={post.id} className="col-md-3">
                            <div className="card mb-2">
                                <Image
                                    src={`${process.env.UPLOAD_URL}/${post.featured}`}
                                    alt="featured"
                                    width={200}
                                    height={80}
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h3>{post.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}