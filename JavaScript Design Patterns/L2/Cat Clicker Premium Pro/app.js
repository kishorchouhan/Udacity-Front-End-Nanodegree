var model = {
    currentCat: null,

    catData: [
        {
            name: "Alert Kitten",
            clickCount: 0,
            picSrc: "img/Alert Kitten.jpg",
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
        },{
            name: "Cute Kitten",
            clickCount: 0,
            picSrc: "img/Cute Kitten.jpg",
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
        },{
            name: "Dramatic Kitten",
            clickCount: 0,
            picSrc: "img/Dramatic Kitten.jpg",
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709'
        },{
            name: "Sleeping Kitten",
            clickCount: 0,
            picSrc: "img/Sleeping Kitten.jpg",
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
        },{
            name: "Xuxa the Kitten",
            clickCount: 0,
            picSrc: "img/Xuxa the Kitten.jpg",
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
        }
    ]
};

var octopus = {

    init: function() {
        model.currentCat = model.catData[0];// setcurrent cat to 1st one
        viewList.init();// initiate list view
        viewDetail.init();// initiate details view
        viewAdmin.init();// initiate admin view
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
    },

    //change cat data after clicking save
    changedata: function() {
        model.currentCat.name = document.getElementById("adminName").value;
        model.currentCat.imgAttribution = document.getElementById("adminUrl").value;
        model.currentCat.clickCount = document.getElementById("adminClick").value;
        viewDetail.render();
        viewAdmin.render();
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
                    viewAdmin.render();// To hide admin content on clicking cat list
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

var viewAdmin = {
    init: function() {
        this.adminButton = document.getElementById("admin");
        this.adminContent = document.getElementById("admin-content");
        this.cancelButton = document.getElementById("cancel");
        this.adminName = document.getElementById("adminName");
        this.adminUrl = document.getElementById("adminUrl");
        this.adminClick = document.getElementById("adminClick");
        this.adminSave = document.getElementById("save");
        viewAdmin.render();
    },
    render: function() {
        var adminData = this.adminContent;

        adminData.style.display = "none";//hide admin content by default

        //show admin content on clicking admin button
        this.adminButton.addEventListener('click', function() {
            return function() {
                var currentCatDataForAdmin = octopus.currentCat();
                this.adminName.value = currentCatDataForAdmin.name;
                this.adminUrl.value = currentCatDataForAdmin.imgAttribution;
                this.adminClick.value = currentCatDataForAdmin.clickCount;
                adminData.style.display = "block";
            }();
        });

        //currently-selected cat's values update with the values in the admin area, and the admin area disappears.
        this.adminSave.addEventListener('click', function() {
            return octopus.changedata();
        });

        //hide admin content on clicking cancel button
        this.cancelButton.addEventListener('click', function() {
            return (adminData.style.display = "none");
        });
    }
};

octopus.init();
