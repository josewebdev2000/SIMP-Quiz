// Get the SIMP status of the user and display it
// Call the function to call and display results as soon as the submit button is clicked

function handleResults()
{
    // Get the status of the answers entered by the user
    function getAnswerStatus()
    {
        // Create an array of status for user answers
        var answerStatus = [];

        // Loop through the array of selected answers
        for (let userAnswer of selectedAnswers)
        {
            // Loop through the list of questions
            for (let question of qAndAs)
            {
                // Loop through the each array of answers
                for (let eachAnswer of question["answers"])
                {
                    if (userAnswer == eachAnswer["response"])
                    {
                        answerStatus.push(eachAnswer["status"]);
                        break;
                    }
                }
            }

        }

        // return the list of status
        return answerStatus;
    }

    // Determine SIMP status by the answer status that repeats the most
    function getSimpStatus(answerStatusArray)
    {
        // Create an object to count how many times a status repeats
        var statusCount = {};

        // Loop through the array of status
        for (let answerStatus of answerStatusArray)
        {
            // If the element not present in the statusCount object, add it with a value of 1
            if (!statusCount.hasOwnProperty(answerStatus))
            {
                statusCount[answerStatus] = 1
            }

            else
            {
                statusCount[answerStatus]++;
            }
        }

        // Get the maximum count avaliable
        var maxCount = Math.max(...Object.values(statusCount));

        // Create a list of properties that have the maximum values
        var maxProps = [];

        // For each key of the statusCount object, if the max count is associated to that key, add the key to the list of
        // Max props
        for (let simpStatus of Object.keys(statusCount))
        {
            if (statusCount[simpStatus] == maxCount)
            {
                maxProps.push(simpStatus);
            }
        }

        // If the length of length of maxProps array is more than 1, return unclear
        if (maxProps.length > 1)
        {
            return "unclear";
        }

        // Otherwise, return the status present in the maxProps array
        else
        {
            return maxProps[0];
        }

    }

    // Fill results DOM elements
    function fillElements(resultObject)
    {
        resultHeading.innerHTML = resultObject["title"];
        resultPicture.src = resultObject["image"];

        for (let i = 0; i < descriptions.length; i++)
        {
            descriptions[i].innerHTML = resultObject["desc"][i];
        }

    }

    // Change the DOM to display SIMP Results
    function displayResults(status)
    {
        // Consider every single SIMP possibility with the switch statement
        switch (status)
        {
            case "simp":
                fillElements(resultsData[0]);
                break;
            
            case "beta":
                fillElements(resultsData[1]);
                break;
            
            case "alpha":
                fillElements(resultsData[2]);
                break;
            
            case "dark":
                fillElements(resultsData[3]);
                break;
            
            default:
                fillElements(resultsData[4]);
            
        }

    }

    var allStatus = getAnswerStatus();
    var simpStatus = getSimpStatus(allStatus);
    displayResults(simpStatus);
}


// When the user clicks submit, show SIMP result to the user
// Use a second click event listener
buttons[0].addEventListener("click", function() {

    if (this.innerHTML == "Submit")
    {
        // Display SIMP results to the user
        handleResults();
    }
    
})