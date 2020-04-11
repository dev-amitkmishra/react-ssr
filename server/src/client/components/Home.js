import React from 'react';

const Home = () => {
    return (
        <div>
            <div>I am at home</div>
            <button onClick={() => alert('button clicked!')}>Press me!</button>
        </div>
    );
};

export default Home;