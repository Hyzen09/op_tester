import React, { useState } from "react";

function NumberGame() {

    const [start, setStart] = useState(false);
    const [number, setNumber] = useState((Math.floor(Math.random() * 9) + 1).toString());
    const [level, setLevel] = useState(1);
    const [userInput, setUserInput] = useState("");

    function getRand() {
        let temp = "";
        for (let i = 0; i < level; i++) {
            const num = Math.floor(Math.random() * 9) + 1;
            temp += num.toString();
        }
        return temp;
    }

    const handleClick = () => {
        setStart(true);
        let randnum = getRand();
        setNumber(randnum);
        console.log(number);
        setLevel(level + 1);
    }

    const handleSubmit = () => {
        if (number == userInput) {
            console.log(true);
            let randnum = getRand();
            setNumber(randnum);
            console.log(number);
            setLevel(level + 1);
            setUserInput("");
        } else {
            console.log(false);
            setStart(false);
            setUserInput("");
            setLevel(1);
            setNumber((Math.floor(Math.random() * 9) + 1).toString());
            alert("Game Over");

        }
    }

    return (


        !start ? (
            <div className="flex flex-col items-center min-h-screen">
                <img className="w-40 h-40 mt-10 bg-transparent" src="https://media.istockphoto.com/id/521531102/zh/%E5%90%91%E9%87%8F/numeric-cubes-vector-illustration-building-blocks-with-numbers.jpg?s=612x612&w=0&k=20&c=iFH3KNWSwGEijMVUdBco9Y7SxLfallUyYgjFzLeDOS4=" />
                <h1 className="text-white text-8xl mt-4"> Number Memory Game </h1>
                <h1 className="text-white text-2xl mt-4">An average person can remember upto 7 numbers at a time</h1>

                <button onClick={handleClick} className="h-17 w-40 bg-yellow-400 text-black font-bold py-2 px-4  hover:bg-yellow-600 transition duration-300 mt-10">Start</button>
            </div>
        ) : (
            <div className="flex flex-col items-center min-h-screen">
                {/* <img className="w-40 h-40 mt-10 bg-transparent" src="https://media.istockphoto.com/id/521531102/zh/%E5%90%91%E9%87%8F/numeric-cubes-vector-illustration-building-blocks-with-numbers.jpg?s=612x612&w=0&k=20&c=iFH3KNWSwGEijMVUdBco9Y7SxLfallUyYgjFzLeDOS4=" /> */}
                <h1 className="text-white text-8xl mt-20"> {number} </h1>
                <br />
                {/* <h1 className="text-white text-2xl mt-4">An average person can remember upto 7 numbers at a time</h1> */}
                <label htmlFor="ans">Put Your Guess Here : </label>
                <br />
                <input
                    className="rounded h-10 w-30 border-none text-center bg-gray-100 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                    onChange={(e) => setUserInput(e.target.value)}
                    id="ans"
                    type="text"
                    placeholder="Enter your answer..."
                />

                <button onClick={handleSubmit} className="h-17 w-40 bg-yellow-400 text-black font-bold py-2 px-4  hover:bg-yellow-600 transition duration-300 mt-10">Submit</button>
            </div>
        )


    );
}

export default NumberGame;