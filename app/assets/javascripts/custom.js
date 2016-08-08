
function switchFields() {
    if(document.getElementById("lgfields").style.visibility == "hidden") {
        document.getElementById("lgfields").style.visibility = "visible"
    } else {
        document.getElementById("lgfields").style.visibility = "hidden"
    }; 

}

$(document).ready(function () {
    document.getElementById("lgfields").style.visibility = "hidden";
    document.getElementById("selectedImage").innerHTML = imagesArray[0].path;
});

