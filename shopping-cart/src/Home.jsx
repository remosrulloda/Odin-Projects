function Home() {
    return (
        <div
            className="relative h-screen w-screen"
        >
            <div className='bg-store'></div>
            <div className="absolute inset-0 bg-black" style={{ opacity: 0.5 }}></div>
            <div className="relative flex items-center justify-center h-full">
                <h1 className="text-white text-3xl font-bold">Noir's</h1>
            </div>
        </div>
    )
};

export default Home;