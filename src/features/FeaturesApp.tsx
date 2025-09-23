import React from 'react';

const FeaturesApp = () => {

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log(`Count updated to: ${count}`);
    }, [count]);



    return (
        <div>
            <h1> Count : {count}</h1>
            
            <button onClick={() => setCount(count + 1)}>  Increment : {count}</button>

        </div>
    );
};

export default FeaturesApp;