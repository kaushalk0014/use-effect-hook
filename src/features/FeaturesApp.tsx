import React from 'react';

const FeaturesApp = () => {

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log(`Count updated to: ${count}`);
    }, [count]);

    function getDate() {
    
        fetch('http://localhost:8080/user/id/USRF4BDA5')
            .then(response => response.json())
            .then(json => 
               {
                  console.log("==================");
                console.log(json)
               })
            .catch(error => console.error('Error fetching data:', error));
    }

    return (
        <div>
            <h1> Count : {count}</h1>
            
            <button onClick={() => setCount(count + 1)}>  Increment : {count}</button>

            <button onClick={() => getDate()}>Load Data</button>
        </div>
    );
};

export default FeaturesApp;