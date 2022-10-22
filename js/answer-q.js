// All the code that concerns with answer selection
function answerSelection()
{
    // Add a window event listener for clicks to remove clicks if user clicks outside answers
    window.addEventListener("click", cancelClick);

    // Add an event listener to each answer
    for (let answer of answers)
    {
        answer.addEventListener("click", clickedAnswer);
    }

    // Check if at least one HTML element contains a certain class
    function oneHasClass(cssClass, elements)
    {
        for (let element of elements)
        {
            if (element.classList.contains(cssClass))
            {
                return true;
            }
        }

        // If none have that class, then return false
        return false;
    }

    // Regulate changes on buttons with JS
    function buttonManaging()
    {
        // Firstly, get the value for the previewH2
        var previewValue = previewH2.innerHTML;

        // Split this value.
        var previewNumber = previewValue.split(" ")[1];

        // If the preview number is 1, disable the Back Button
        if (previewNumber == "1")
        {
            buttons[1].disabled = true;
        }

        else
        {
            buttons[1].disabled = false;
        }

        // If the preview number is 10, change the text of "Next" button from "Next" to "Submit"
        if (previewNumber == "10")
        {
            buttons[0].innerHTML = "Submit";
        }

        else
        {
            buttons[0].innerHTML = "Next";
        }

        // If there is no selected answer by the user, disable the next element
        if (!oneHasClass("clicked", answers))
        {
            buttons[0].disabled = true;
        }

        else
        {
            buttons[0].disabled = false;
        }

    }

    // Function to add/remove class to select clicked element
    // Event parameter to capture click event
    function clickedAnswer()
    {
        // Make it so that only one answer has the clicked class
        for (let answer of answers)
        {
            if (answer != this && answer.classList.contains("clicked"))
            {
                answer.classList.remove("clicked");
            }
        }

        // Check if the answer has the class .clicked
        var isClicked = this.classList.contains("clicked");

        // If is is not clicked, add that class to the element
        if (!isClicked)
        {
            this.classList.add("clicked");
        }

        else
        {
            this.classList.remove("clicked");
        }

        // Call function to regulate button disabling
        buttonManaging();
    }

    // Cancel click when user clicks outside any answer
    function cancelClick(event)
    {
        // If the element clicked is not part of the relevant list of elements, remove the clicked class from it
        if (!relevantElements.includes(event.target))
        {
            for (let answer of answers)
            {
                if (answer.classList.contains("clicked"))
                {
                    answer.classList.remove("clicked");
                }
            }
        }

        // Run function buttonManaging here also
        buttonManaging();
    }
}

answerSelection();