import React from 'react';

const App = () => {
    return (
        <div onClick={() => {fetch('/test').then((data) => {console.log(data)})}}>
            Hello World!
        </div>
    );
}

export default App;