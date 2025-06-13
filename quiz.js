function checkAnswer() {
    // 1. Identify the correct answer
    const correctAnswer = "4";
    
    // 2. Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');
    
    // 3. Check if an answer was selected
    if (!selectedOption) {
        feedbackElement.textContent = "Please select an answer!";
        return;
    }
    
    // Get the user's answer value
    const userAnswer = selectedOption.value;
    
    // 4. Compare answers and provide feedback
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// 5. Add event listener to the submit button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
