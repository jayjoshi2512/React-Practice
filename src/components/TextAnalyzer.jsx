import { useState } from "react";

function TextAnalyzer() {
    const [text, setText] = useState("");

    return (
        <div>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
            />

            <p style={{ color: "black" }}>
                Character Count: <span style={{ color: text.length > 20 ? "red" : "black" }}>{text.length}</span>
            </p>
        </div>
    );
}

export default TextAnalyzer;
