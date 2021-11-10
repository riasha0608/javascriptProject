let buttonTitleDisappear = document.getElementById("disappearClassicalTitleButton");
        let videoAppearButton = document.getElementById("showClassicalVideoButton");
        let videoHideButton = document.getElementById("hideClassicalVideoButton");
        var stateTracker = 1;
        buttonTitleDisappear.addEventListener("click", function(event) {
            var classicalTitleElement = document.getElementById("indianClassicalTitle");
            if (stateTracker == 1){
                classicalTitleElement.style.opacity = "0.0";
                document.getElementById("disappearClassicalTitleButton").innerHTML = "Show the title!";
                stateTracker = 2;
            }
            else if (stateTracker == 2){
                classicalTitleElement.style.opacity = "1.0";
                document.getElementById("disappearClassicalTitleButton").innerHTML = "Click to make the title above disappear!";
                stateTracker = 1;
            }
        });
        videoAppearButton.addEventListener("click", function(event) {
            var indianClassicalImgElement = document.getElementById("indianClassicalVideo");
            indianClassicalImgElement.style.display = "initial";
        });
        videoHideButton.addEventListener("click", function(event) {
            var indianClassicalImgElement = document.getElementById("indianClassicalVideo");
            indianClassicalImgElement.style.display = "none";
        });