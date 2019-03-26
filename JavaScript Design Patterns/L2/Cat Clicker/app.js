/* 
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
*/
// L2


var model = {
    currentCat: null,

    catData: [
        {
            name: "Alert Kitten",
            clickCount: 0,
            picSrc: "img/Alert Kitten.jpg"
        },{
            name: "Cute Kitten",
            clickCount: 0,
            picSrc: "img/Cute Kitten.jpg"
        },{
            name: "Dramatic Kitten",
            clickCount: 0,
            picSrc: "img/Dramatic Kitten.jpg"
        },{
            name: "Sleeping Kitten",
            clickCount: 0,
            picSrc: "img/Sleeping Kitten.jpg"
        },{
            name: "Xuxa the Kitten",
            clickCount: 0,
            picSrc: "img/Xuxa the Kitten.jpg"
        }
    ]
};

var octopus = {

    init: function() {
        model.currentCat = model.catData[0];// setcurrent cat to 1st one
        viewList.init();// initiate list view
        viewDetail.init();// initiate details view
    },

    currentCat: function() {
        return model.currentCat;
    },

    getAllData: function() {
        return model.catData;
    },

    setCurrentCat: function(cat) {// set the currently-selected cat to the object passed in
        model.currentCat = cat;
    },

    increaseCount: function() {
        model.currentCat.clickCount++;
        viewDetail.render();
    }
};

var viewList = {
    init: function() {
        this.catList = $('#catList');
        viewList.render();
    },
    render: function() {
        this.catList.innerHTML = '';// empty the cat list
        // loop over the cats data
        octopus.getAllData().forEach(function(data) {
            var elem = document.createElement('li');// make a new cat list item and set its text
            elem.setAttribute('class', 'listName');
            elem.textContent = data.name;

            elem.addEventListener('click', (function(presentCatData) {
                return function() {
                    octopus.setCurrentCat(presentCatData);
                    viewDetail.render();
                };
            })(data));
            this.catList.appendChild(elem);
        });
    }
};

var viewDetail = {
    init: function() {
        this.newCatContent = document.getElementById("content");
        this.newCatName = document.getElementById("catName");
        this.newClickCount = document.getElementById('clickCount');
        this.newCatPic = document.getElementById('catPic');

        // on click, increment the current cat's counter
        this.newCatPic.addEventListener('click', function() {
            return octopus.increaseCount();
        });
        viewDetail.render();
    },
    render: function() {
        var currentCatData = octopus.currentCat();
        this.newCatName.innerHTML = currentCatData.name;
        this.newClickCount.innerHTML = currentCatData.clickCount;
        this.newCatPic.src = currentCatData.picSrc;
    }
};

octopus.init();
