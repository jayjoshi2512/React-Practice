import { useState } from "react";

function Converter() {
    const [usd, setUsd] = useState(1);

    return (
        <div style={{color : "black"}}>
            <label>USD ($): </label>
            <input
                type="number"
                value={usd}
                onChange={(e) => setUsd(e.target.value)}
            />

            <p>
                {usd < 0
                    ? "Invalid Amount"
                    : `₹ ${usd * 85}`}
            </p>
        </div>
    );
}

export default Converter;
