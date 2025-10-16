import { useContext } from "react";
import CountProvider from "./CountProvider";
//import DisplayCount from "./DisplayCount";
import { CountContext } from "./CountContext";


const TestContextApp = () => {

    const count = useContext(CountContext); // ✅ Access shared data

    return (
        <CountProvider>
            <h1>Use of context api</h1>
            {count}
        </CountProvider>
    );


}
export default TestContextApp;