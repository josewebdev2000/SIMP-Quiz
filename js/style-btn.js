// Style buttons apropiately

function buttonStyling()
{
    // Make a special space for each btn
    var backBtn = buttons[1];
    var nextBtn = buttons[0];

    // Check for the following events
    // "mouseover" -> Check for hover
    // "mouseout"  -> When mouse it out of the button
    // "mousedown" -> Check while the user presses down an element
    // "mouseup"   -> Check when the user stops pressing an element with the mouse

    // Always consider whether the mouse is disabled or not, if it is. Do not apply any special styling
    backBtn.addEventListener("mouseover", function(){

        // Only apply styling if the button is NOT disabled
        if (!backBtn.disabled)
        {
            backBtn.style.cursor = "pointer";
            backBtn.style.transform = "rotateX(30deg)";
            backBtn.style.backgroundColor = "rgb(65, 206, 252)";
        }

    });

    backBtn.addEventListener("mouseout", function(){

        // Always restore cursor to default
       

        // Only apply styling if the button is not disabled
        if (!backBtn.disabled)
        {
            backBtn.style.transform = "rotateX(0deg)";
            backBtn.style.cursor = "default";
            backBtn.style.backgroundColor = "rgb(58, 187, 230)";
        }

        else
        {
            backBtn.style.cursor = "not-allowed";
        }

    });

    backBtn.addEventListener("mousedown", function(){

        // Only apply styling if the button is not disabled
        if (!backBtn.disabled)
        {
            backBtn.style.transform = "scale(1.2)";
        }

    });

    backBtn.addEventListener("mouseup", function(){
        
        // Only apply styling if the button is not disabled
        if (!backBtn.disabled)
        {
            backBtn.style.transform = "none";
        }

    });

    nextBtn.addEventListener("mouseover", function(){

        // Only apply styling if the button is not disabled
        if (!nextBtn.disabled)
        {
            nextBtn.style.transform = "rotateX(30deg)";
            nextBtn.style.cursor = "pointer";
            nextBtn.style.backgroundColor = "rgb(49, 210, 49)";
        }

    });

    nextBtn.addEventListener("mouseout", function(){

        // Only apply styling if the button is not disabled
        if (!nextBtn.disabled)
        {
            nextBtn.style.transform = "rotateX(0deg)";
            nextBtn.style.cursor = "default";
            nextBtn.style.backgroundColor = "rgb(36, 169, 36)";
        }

        else
        {
            nextBtn.style.cursor = "not-allowed";
        }

    });

    nextBtn.addEventListener("mousedown", function(){

        // Only apply styling if the button is not disabled
        if (!nextBtn.disabled)
        {
            nextBtn.style.transform = "scale(1.2)";
        }

    });

    nextBtn.addEventListener("mouseup", function(){

        // Only apply styling if the button is not disabled
        if (!nextBtn.disabled)
        {
            nextBtn.style.transform = "none";
        }
        
    });
    
}

buttonStyling();