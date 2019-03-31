function AddressBook() {
    var self = this;
    this.contacts = [];
    this.initialComplete = false;

    this.addContact = function(contact) {
        self.contacts.push(contact);
    }
    
    this.getContact = function(i) {
        return self.contacts[i];
    }

    this.deleteContact = function(i) {
        self.contacts.splice(i, 1);
    };

    this.getInitialContacts = function(cb) {
        var that = this;

        setTimeout(function() {
            that.initialComplete = true;
            if(cb) {
                return cb();
            }
        }, 3);
    };
};
