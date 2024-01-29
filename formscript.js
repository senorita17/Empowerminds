function calculateScore() {
    // Define the scores for each question
    const scores = {
      q1: parseInt(document.querySelector('input[name="q1"]:checked').value),
      q2: parseInt(document.querySelector('input[name="q2"]:checked').value),
      q3: parseInt(document.querySelector('input[name="q3"]:checked').value),
      q4: parseInt(document.querySelector('input[name="q4"]:checked').value),
      q5: parseInt(document.querySelector('input[name="q5"]:checked').value),
      q6: parseInt(document.querySelector('input[name="q6"]:checked').value),
      q7: parseInt(document.querySelector('input[name="q7"]:checked').value),
      q8: parseInt(document.querySelector('input[name="q8"]:checked').value),
      q9: parseInt(document.querySelector('input[name="q9"]:checked').value),
      q10: parseInt(document.querySelector('input[name="q10"]:checked').value),
      q11: parseInt(document.querySelector('input[name="q11"]:checked').value),
      q12: parseInt(document.querySelector('input[name="q12"]:checked').value),
      q13: parseInt(document.querySelector('input[name="q13"]:checked').value),
      q14: parseInt(document.querySelector('input[name="q14"]:checked').value),
      q15: parseInt(document.querySelector('input[name="q15"]:checked').value),
      
    };

    // Calculate the total score
    const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);

    // Determine the result based on the total score
    let result;
    if (totalScore <= 9) {
      result = "You are just feeling low";
    } else if (totalScore <=18 ) {
      result = "Mild Anxiety";
    } else if (totalScore <= 25){
      result = "Mild Depression and Anxiety";
    }else if (totalScore <= 35){
      result = "Severe Depression and Anxiety";
    } else if (totalScore <= 40){
      result ="Acute Depression and Anxiety"
    } else
    {
      result = "Chronic Depression and Anxiety"
    }


    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Your total score is: ${totalScore}</p>`;
    resultElement.innerHTML += `<p>Result: ${result}</p>`;
  }