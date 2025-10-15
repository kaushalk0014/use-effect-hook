import React, { useState, useRef, useLayoutEffect } from 'react';

const ExampleOfUseLayoutEffect = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
         console.log(`Width measured useLayoutEffect: ${width}px`);
        if (boxRef.current) {
            const rect = boxRef.current.getBoundingClientRect();
            setWidth(rect.width);
        }
    }, []);

    React.useEffect(() => {
        console.log(`Width measured useEffect: ${width}px`);
    }, []);

    return (
        <div>
            <div
                ref={boxRef}
                style={{ width: '60%', height: '100px', backgroundColor: 'lightblue' }}
            >
                I'm a box<hr></hr>
              
            </div>
            <p>Measured width: {width}px</p><br>xz</br>


              <div>
                    Use Case of useLayoutEffect<br /><hr/>

                  1. Timing    | Runs before the browser paints<br /> 
                  2. Use Case  | Layout reads, DOM measurements, animations<br /> 
                  3. Blocking Paint | Yes — delays paint until effect completes<br /> 
                  4. Performance | Can impact performance if overused<br />
                5. Common Use Cases | Measuring DOM elements, synchronously applying styles<br /> 
    
                 </div>
        </div>
    );




}
export default ExampleOfUseLayoutEffect;
