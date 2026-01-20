import { useState } from "react";

function PasswordCheck() {
    const [password, setPassword] = useState("");

    return (
        <div>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
            />

            <p
                style={{
                    color:
                        password.length === 0
                            ? "black"
                            : password.length < 5
                                ? "red"
                                : "green",
                }}
            >
                {password.length === 0
                    ? "Please enter a password"
                    : password.length < 5
                        ? "Weak Password"
                        : "Strong Password"}
            </p>
        </div>
    );
}

export default PasswordCheck;
