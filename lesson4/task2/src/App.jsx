import React from "react";
import Counter from "./Counter.jsx";

const App = () => {
    return (
        <>
        <Counter location="NEW YORK" offset={-5} />
        <Counter location="LONDON" offset={0} />
        <Counter location="KYIV" offset={2} />
        </>
    )
}
export default App;