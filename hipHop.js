let buttonHipHopTitleDisappear = document.getElementById("disappearHipHopTitleButton");
        let hipHopImageAppearButton = document.getElementById("showHipHopImage");
        let hipHopImageHideButton = document.getElementById("hideHipHopImage");
        var hipHopImg = document.getElementById("hipHopImage");
        var stateTracker = 1;
        buttonHipHopTitleDisappear.addEventListener("click", function(event) {
            var hipHopTitleElement = document.getElementById("hipHopTitle");
            if (stateTracker == 1){
                hipHopTitleElement.style.opacity = "0.0";
                document.getElementById("disappearHipHopTitleButton").innerHTML = "Show the title!";
                stateTracker = 2;
            }
            else if (stateTracker == 2){
                hipHopTitleElement.style.opacity = "1.0";
                document.getElementById("disappearHipHopTitleButton").innerHTML = "Click to make the title above disappear!";
                stateTracker = 1;
            }
        });
        hipHopImageAppearButton.addEventListener("click", function(event) {
            var hipHopImgElement = document.getElementById("hipHopImage");
            hipHopImgElement.style.display = "initial";
            var hipHopVidElement = document.getElementById("hipHopVideo");
            hipHopVidElement.style.display = "initial";
        });
        hipHopImg.addEventListener("mouseover", mouseOverDancers) 
        hipHopImg.addEventListener("mouseout", mouseOutDancers) 

        function mouseOverDancers(event) {
            let hipHopImg = event.currentTarget;
            hipHopImg.src = "images/hiphop2.jpeg";
            hipHopImg.style.borderStyle = "solid";
            hipHopImg.style.borderColor = "purple";
        }
        function mouseOutDancers(event) {
            let hipHopImg = event.currentTarget;
            hipHopImg.src = "images/hiphop1.jpg";
            hipHopImg.style.borderStyle = "none";
            hipHopImg.style.borderColor = "none";
        }
        hipHopImageHideButton.addEventListener("click", function(event) {
            var hipHopImgElement = document.getElementById("hipHopImage");
            hipHopImgElement.style.display = "none";
            var hipHopVidElement = document.getElementById("hipHopVideo");
            hipHopVidElement.style.display = "none";
        });