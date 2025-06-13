function checkAnswer() {
    // 1. Identify the correct answer
    const correctAnswer = "4";
    
    // 2. Retrieve the user's answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Get feedback element
    const feedbackElement = document.getElementById('feedback');
    
    // 3. Compare answers and provide feedback
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedbackElement.textContent = "Please select an answer!";
    }
}

// 4. Add event listener to submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
