let buttonDisappear = document.getElementById("disappearButton");
        let imageAppearButton = document.getElementById("showImageButton");
        let imageHideButton = document.getElementById("hideImageButton");
        let balletPar = document.getElementById("balletTitle");
        let ballerinaImage = document.getElementById("imageOfBallerinas");
        var stateTracker = 1;
        buttonDisappear.addEventListener("click", function(event) {
            var balletTitleElement = document.getElementById("balletTitle");
            if (stateTracker == 1){
                balletTitleElement.style.opacity = "0.0";
                document.getElementById("disappearButton").innerHTML = "Show the title!";
                stateTracker = 2;
            }
            else if (stateTracker == 2){
                balletTitleElement.style.opacity = "1.0";
                document.getElementById("disappearButton").innerHTML = "Click to make the title above disappear!";
                stateTracker = 1;
            }
        });
        imageAppearButton.addEventListener("click", function(event) {
            var balletImgElement = document.getElementById("imageOfBallerinas");
            balletImgElement.style.display = "initial";
            var balletVidElement = document.getElementById("ballerinaVideo");
            balletVidElement.style.display = "initial";
        });
        
        ballerinaImage.addEventListener("mouseover", mouseOverBallerina) 
        ballerinaImage.addEventListener("mouseout", mouseOutBallerina) 

        function mouseOverBallerina(event) {
            let ballerinaImage = event.currentTarget;
            ballerinaImage.src = "images/ballet2.jpg";
            ballerinaImage.style.borderStyle = "solid";
            ballerinaImage.style.borderColor = "purple";
        }
        function mouseOutBallerina(event) {
            let ballerinaImage = event.currentTarget;
            ballerinaImage.src = "images/ballet1.jpg";
            ballerinaImage.style.borderStyle = "none";
            ballerinaImage.style.borderColor = "none";
        }

        imageHideButton.addEventListener("click", function(event) {
            var balletImgElement = document.getElementById("imageOfBallerinas");
            balletImgElement.style.display = "none";
            var balletVidElement = document.getElementById("ballerinaVideo");
            balletVidElement.style.display = "none";
        });