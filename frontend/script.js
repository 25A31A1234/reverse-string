// Step 1: Grab the elements from the page using their IDs
const inputString = document.getElementById("inputString");
const reverseButton = document.getElementById("reverseButton");
const originalResult = document.getElementById("originalResult");
const reversedResult = document.getElementById("reversedResult");

// Step 2: Listen for a click on the button
reverseButton.addEventListener("click", function () {
    // Step 3: Read what the user typed
    const text = inputString.value;

    // Step 4: Handle empty input
    if (text === "") {
        originalResult.textContent = "—";
        reversedResult.textContent = "Please enter some text first.";
        return;
    }

    // Step 5: Build the reversed string using a simple loop
    let reversed = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reversed = reversed + text[i];
    }

    // Step 6: Show both results on the page
    originalResult.textContent = text;
    reversedResult.textContent = reversed;
});