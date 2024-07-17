// src/components/Card.js

import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function Card() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts or location changes
    }, [location.pathname]); // Listen to changes in location.pathname

    return (
        <Link to="/Number-Memory" className="text-black">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs mx-auto cursor-pointer px-10 py-10">
                <div className="flex items-center justify-center">
                    <img
                        src="https://www.freepnglogos.com/uploads/games-png/games-pad-icon-12.png"
                        alt="Game Pad Icon"
                        className="w-20 h-20 mb-4"
                    />
                </div>
                <div className="text-center">
                    <p className="text-gray-800 text-xl mb-4">
                        Remember the longest number you can
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default Card;
