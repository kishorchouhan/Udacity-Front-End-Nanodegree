var images = ["Alert Kitten", "Cute Kitten", "Dramatic Kitten", "Sleeping Kitten", "Xuxa the Kitten"];

// Let's loop over the kitten names in our array
for (var i=0; i < images.length; i++) {
    // This is the name we're on...
    var kitName = images[i];
    
    // We're creating a list of the names
    var listofNames = document.createElement("LI");
    listofNames.innerHTML = kitName;
    document.getElementById("listName").appendChild(listofNames);

    // ... and when we click on any name in list, it show the data of cat
    listofNames.addEventListener('click', (function(presentCat){
        return function() {
            // clear the data screen
            document.getElementById("content").innerHTML = '';
            var numClick = 0;

            // We're creating a DOM element for the Cat Name
            var catName = document.createElement("H1");
            catName.innerHTML = presentCat;
            document.getElementById("content").appendChild(catName);

            // We're creating a DOM element for the picture of kitten
            var picSrc = "img/" + presentCat + ".jpg";
            var pic = document.createElement("img");
            document.getElementById("content").appendChild(pic);
            pic.setAttribute("id", "catPic");
            pic.setAttribute("src", picSrc);

            // We're creating a DOM element for the number of click text
            var clicksText = document.createElement("H3");
            clicksText.innerHTML = "Number of Clicks:";
            document.getElementById("content").appendChild(clicksText);

            // We're creating a DOM element for the number of click count
            var clicksCount = document.createElement("P");
            clicksCount.innerHTML = "0";
            document.getElementById("content").appendChild(clicksCount);
            clicksCount.setAttribute("id", "num");

            // We're increasing the number and showing it
            $("#catPic").on("click", function() {
                numClick += 1;
                var n = numClick.toString();
                document.getElementById("num").innerHTML = n;
            });
        };
    })(kitName));
}