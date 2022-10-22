// Add the questions dinamically with JS

function displayQuestions()
{
    // Change the content of questions
    function showQuestions(preview, question, responses)
    {
        // Change the preview for the question
        previewH2.innerHTML = preview;

        // Change the question content
        questionH3.innerHTML = question;

        // Change the answers content
        for (let i = 0; i < answers.length; i++)
        {
            answers[i].innerHTML = responses["answers"][i]["response"];
        }
    }
    // Firsly, fill the relevant DOM elements with the first question details BY DEFAULT
    //previewH2.innerHTML = qAndAs[0]["preview"];
    //questionH3.innerHTML = qAndAs[0]["question"];

    //for (let i = 0; i < answers.length; i++)
    //{
        //answers[i].innerHTML = qAndAs[0]["answers"][i]["response"];
    //}

    // Show the 1st question
    showQuestions(qAndAs[0]["preview"], qAndAs[0]["question"], qAndAs[0]);

    // By default, disable all buttons
    for (let button of buttons)
    {
        button.disabled = true;
    }

    // Check clicks for Next and Back Buttons

    // Click event for the Back Button
    buttons[1].addEventListener("click", function(){

        // Firstly, get the number from the preview
        var previewNumber = previewH2.innerHTML.split(" ")[1];

        // Calculate the index for the responses list
        var arrayIndex = previewNumber - 1;

        // Remove the latest answer from the selectedAnswers array found at index.js
        selectedAnswers.pop();

        // Change the questions shown to the previous index
        showQuestions(qAndAs[arrayIndex - 1]["preview"], qAndAs[arrayIndex - 1]["question"], qAndAs[arrayIndex - 1]);

        // Remove the "clicked" class from the answers
        for (let i = 0; i < answers.length; i++)
        {
            if (answers[i].classList.contains("clicked"))
            {
                answers[i].classList.remove("clicked");
            }
        }
    });


    // Click event for the Next Button
    buttons[0].addEventListener("click", function() {

        // Execute the following code, only if the text "Next" is the button
        if (buttons[0].innerHTML == "Next")
        {
            // Firstly, get the number from the preview
            var previewNumber = previewH2.innerHTML.split(" ")[1];

            // Calculate the index for the responses list
            var arrayIndex = previewNumber - 1;

            // Add the selected answer in the array of selectedAnswers found at index.js
            for (let answer of answers)
            {
                if (answer.classList.contains("clicked"))
                {
                    selectedAnswers.push(answer.innerHTML);
                }
            }

            // Change the questions shown to the next index
            showQuestions(qAndAs[arrayIndex + 1]["preview"], qAndAs[arrayIndex + 1]["question"], qAndAs[arrayIndex + 1]);

            // Remove the "clicked" class from the answers
            for (let i = 0; i < answers.length; i++)
            {

                if (answers[i].classList.contains("clicked"))
                {
                    answers[i].classList.remove("clicked");
                }

            }
        }


        else
        {
            // Add the selected answer in the array of selectedAnswers found at index.js
            for (let answer of answers)
            {
                if (answer.classList.contains("clicked"))
                {
                    selectedAnswers.push(answer.innerHTML);
                }
            }

            // Make result section from index.html display flex and hide header and question section
            header.style.display = "none";
            questionsSection.style.display = "none";
            buttonsSection.style.display = "none";
            resultsSection.style.display = "flex";
        }

    });

    // When the user clicks the again button, clear out the array of previous answers and undo the style changes
    // done when the user hit submit
    // Change the text of the submit button from submit to next
    againButton.addEventListener("click", function(){

        header.style.display = "flex";
        questionsSection.style.display = "flex";
        buttonsSection.style.display = "flex";
        resultsSection.style.display = "none";

        // Show the 1st question again
        showQuestions(qAndAs[0]["preview"], qAndAs[0]["question"], qAndAs[0]);

        while (selectedAnswers.length > 0)
        {
            selectedAnswers.pop();
        }
    });
}

displayQuestions();