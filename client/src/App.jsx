import React from 'react';
const axios = require('axios');

const App = () => {
    return (
        <div onClick={() => {axios.post('/test').then((data) => {console.log(data)})}}>
            Hello World!
        </div>
    );
}
//hello test
export default App;