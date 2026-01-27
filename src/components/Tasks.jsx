import React from 'react'

const Tasks = () => {

    // 1. 
    // ❌ Wrong
    // function userCard() {                -----> UserCard
    //     return <h1>Profile</h1>;
    // }
    // export default userCard;             -----> UserCard


    // 2.Question: Which file name should you create in your src folder?
        // 1. footer.jsx
        // 2. Footer.jsx  <-----  
        // 3. myFooter.js


    // 3. 
    //     <!-- ❌ HTML format -->
    // <div class="container">
    // <h1 class="text-bold">Hello</h1>
    // </div>

    //     // JSX format
    // <div className="container">
    // <h1 className="text-bold">Hello</h1>
    // </div>


    // 4. Scenario: JavaScript variables should not use underscores (_) or PascalCase.
    // Fix it: Rewrite these variable names using camelCase.
        // 1. User_First_Name → userFirstName
        // 2. Productprice → productPrice
        // 3. is_active → isActive


    // 5. Scenario: The button below won't work in React.
    // Fix it: Change the attribute to the correct React event syntax.
        // // ❌ Wrong
        // <button onclick={doSomething}>Click Me</button>

        // // Correct
        // <button onClick={doSomething}>Click Me</button>


    // 6. // ❌ Poor Naming
        // function f() {                    -----> handleFormSubmit
        // console.log("Form submitted");
        // }
        // <form onSubmit={f}>...</form>     -----> handleFormSubmit


    // 7. Scenario: You want to pass a prop to show if a user is an admin.
    // Task: Rename the prop admin to follow the Boolean convention
        // // ❌ Vague
        // <Dashboard admin={true} />
        // // ✅ Better naming?
        // <Dashboard isAdmin={true} />   -----> isAdmin instead of admin


    // 8. Scenario: In HTML, <img src="..."> is fine. In JSX, it crashes.
    // Fix it: Fix the closing tag syntax for these elements.
        // // ❌ Wrong
        // <div>
        // <img src="logo.png">        ------> <img src="logo.png" />
        // <br>                        ------> <br />
        // <input type="text">         ------> <input type="text" />
        // <br>                        ------> <br />
        // </div>


    // 9. Scenario: A component tries to return two divs side-by-side.
    // Fix it: Use a Fragment (<>...</>) to fix the error without adding an extra div to the
    // DOM.
        // // ❌ Error: Adjacent JSX elements must be wrapped
        // return (
        // <h1>Title</h1>
        // <p>Description</p>
        // );

        // Fixed with Fragment
        // return (
        // <>
        // <h1>Title</h1>
        // <p>Description</p>
        // </>
        // );
        

    // 10. Scenario: Passing a number as a string instead of a number.
    // Fix it: Pass the age 25 as a number using curly braces {}.
        // // ❌ Passed as string "25"
        // <User age="25" />
        // // ✅ Pass as number 25?
        // <User age={25} />            -----> age={25} instead of age="25"



    // ---------------------------------------------------------------------------------------------



    // Goal: Convert an array of strings into an array of <li> tags.
        // const colors = ["Red", "Green", "Blue"];
        // // Write code here using .map()
        // // Expected Result: [ <li>Red</li>, <li>Green</li>, <li>Blue</li> ]

        // const colors = ["Red", "Green", "Blue"];
        // const colors = colors.map((color, index) => <li key={index}>{color}</li>);


    //Goal: Create a new list that only contains numbers greater than 50.
        // const scores = [10, 50, 90, 30, 100];
        // // Write code here using .filter()
        // // Expected Result: [90, 100]

        // const scores = [10, 50, 90, 30, 100];
        // const newScores = scores.filter(score => score > 50);


    //Goal: Create a newMenu array that contains all items from oldMenu, plus "Burger".
        // const oldMenu = ["Fries", "Shake"];
        // // Write code here using ...spread
        // // Expected Result: ["Fries", "Shake", "Burger"]

        // const oldMenu = ["Fries", "Shake"];
        // const newMenu = [...oldMenu, "Burger"];


    //Goal: Create an updatedCar object. Keep the model the same, but change color to "Red".
        // const car = { model: "Ferrari", color: "Black", year: 2024 };
        // // Write code here using ...spread
        // // Expected Result: { model: "Ferrari", color: "Red", year: 2024 }

        // const car = { model: "Ferrari", color: "Black", year: 2024 };
        // const updatedCar = { ...car, color: "Red" };


    //Goal: Find the user with the ID of 3.
        // const users = [
        // { id: 1, name: "A" },
        // { id: 2, name: "B" },
        // { id: 3, name: "C" }
        // ];
        // Write code here using .find()
        // Expected Result: { id: 3, name: "C" }

        // const users = [
        // { id: 1, name: "A" },
        // { id: 2, name: "B" },
        // { id: 3, name: "C" }
        // ];
        // const user = users.find(user => user.id === 3);


    return (
        <div>

        </div>
    )
}

export default Tasks;