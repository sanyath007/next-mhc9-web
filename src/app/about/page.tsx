
async function About () {
    const content = 'Test!!';

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

export default About;
