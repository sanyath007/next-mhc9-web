
async function About ({ content }: { content: string }) {
    return (
        <div className="wrapper w-full">
            <div className="container">
                <h1 className="text-2xl font-bold">About Page</h1>

                <hr className="mt-2" />

                <div className="row mt-4">
                    {content}
                </div>
            </div>
        </div>
    )
}

export async function getServerStaticProps() {
    return { props: { content: 'Test!!' }};
}

export default About;
