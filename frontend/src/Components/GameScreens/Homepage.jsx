import React from "react";

function HomePage() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <img className="w-40 h-40 mt-10" src="https://www.freeiconspng.com/thumbs/lightning-png/yellow-lightning-png-31.png" alt="Jellyfish" />
            <h1 className="text-white text-8xl mt-4">Human Benchmark</h1>
            <h1 className="text-white text-2xl mt-4">Measure Your Ability with brain games and cognitive tests</h1>

            <button className="h-17 w-40 bg-yellow-400 text-black font-bold py-2 px-4  hover:bg-yellow-600 transition duration-300 mt-10">Get Started</button>
        </div>
    );
}

export default HomePage;