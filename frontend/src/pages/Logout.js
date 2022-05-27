import React from 'react';

const Logout = () => {

    const clearStorage = () => {
        localStorage.setItem("JWT",undefined)
    }
    return (
        <div>
            <button onClick={clearStorage}> LOG OUT </button>
        </div>
    );
};

export default Logout;