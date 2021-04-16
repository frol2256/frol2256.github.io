function scrollToTop() {
    window.scrollTo(0, -10);
}

function DarkMode() {

    var elem = document.getElementById("DarkModeButton");
    if (elem.innerHTML == "Light Mode") {
        elem.innerHTML = "Dark Mode";
    
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.color = "#1C1C1C";
        elem.style.backgroundColor = "#FFFFFF";
        elem.style.color = "#1C1C1C";
        elem.style.borderColor = "#1C1C1C";
        document.getElementById("heading").style.color = "#1C1C1C";
        var ilist = document.images;

        for (var i = 0; i < ilist.length; i++) {
            ilist[i].style.borderColor = '#333333';
        }
    }

    else {
        elem.innerHTML = "Light Mode";
        
        elem.style.color = "#FFFFFF";
        elem.style.backgroundColor = "#1C1C1C";
        elem.style.borderColor = "#FFFFFF";

        document.body.style.backgroundColor = "#1C1C1C";
        document.body.style.color = "#FFFFFF";
        document.getElementById("heading").style.color = "#f6b93b";
        var ilist = document.images;

        for (var i = 0; i < ilist.length; i++) {
            ilist[i].style.borderColor = 'white';
        }
    }
}
