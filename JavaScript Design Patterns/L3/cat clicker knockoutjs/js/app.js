var initialCats = [
    {
        name: "Alert Kitten",
        clickCount: 0,
        imgSrc: "img/Alert Kitten.jpg",
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
        nickNames: ['Tabtab', 'T-bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
    },{
        name: "Cute Kitten",
        clickCount: 0,
        imgSrc: "img/Cute Kitten.jpg",
        imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
        nickNames: ['Cuty']
    },{
        name: "Dramatic Kitten",
        clickCount: 0,
        imgSrc: "img/Dramatic Kitten.jpg",
        imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
        nickNames: ['Dramaqueen']
    },{
        name: "Sleeping Kitten",
        clickCount: 0,
        imgSrc: "img/Sleeping Kitten.jpg",
        imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
        nickNames: ['sleepy']
    },{
        name: "Xuxa the Kitten",
        clickCount: 0,
        imgSrc: "img/Xuxa the Kitten.jpg",
        imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
        nickNames: ['Xuxa']
    }
];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nickNames = ko.observableArray(data.nickNames);

    this.catLevel = ko.computed(function() {
        var level;
        var numClicks = this.clickCount();
        if (numClicks < 10) {
            level = 'Newborn';
        } else if (numClicks < 50) {
            level = 'Infant';
        } else if (numClicks < 100) {
            level = 'Teen'
        } else if (numClicks < 200) {
            level = 'Adult';
        } else {
            level = 'Ninja'
        }
        return level;
    }, this);
};

var ViewModel = function() {
    var self = this;
    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList() [0]);

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);//if using this. then this. refer to currentCat as we bind it with "with"
    };

    this.setNewCurrentCat = function() {
        self.currentCat(this);
    };
};

ko.applyBindings(new ViewModel());