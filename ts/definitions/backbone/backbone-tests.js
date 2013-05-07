var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
function test_events() {
    var object = new Backbone.Events();
    object.on("alert", function (msg) {
        return alert("Triggered " + msg);
    });
    object.trigger("alert", "an event");
    var onChange = function () {
        return alert('whatever');
    };
    var context;
    object.off("change", onChange);
    object.off("change");
    object.off(null, onChange);
    object.off(null, null, context);
    object.off();
}
function test_models() {
    var Sidebar = Backbone.Model.extend({
        promptColor: function () {
            var cssColor = prompt("Please enter a CSS color:");
            this.set({
                color: cssColor
            });
        }
    });
    var sidebar = new Sidebar();
    sidebar.on('change:color', function (model, color) {
        return $('#sidebar').css({
            background: color
        });
    });
    sidebar.set({
        color: 'white'
    });
    sidebar.promptColor();
    var Note = Backbone.Model.extend({
        initialize: function () {
        },
        author: function () {
        },
        coordinates: function () {
        },
        allowedToEdit: function (account) {
            return true;
        }
    });
    var PrivateNote = Note.extend({
        allowedToEdit: function (account) {
            return account.owns(this);
        }
    });
    var note = Backbone.Model.extend({
        set: function (attributes, options) {
            this.call(this, attributes, options);
        }
    });
    note.get("title");
    note.set({
        title: "March 20",
        content: "In his eyes she eclipses..."
    });
    note.set("title", "A Scandal in Bohemia");
}
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(options) {
        _super.call(this, options);
        this.reports = new EmployeeCollection();
        this.reports.url = '../api/employees/' + this.id + '/reports';
    }
    Employee.prototype.more = function () {
        this.reports.reset();
    };
    return Employee;
})(Backbone.Model);
var EmployeeCollection = (function (_super) {
    __extends(EmployeeCollection, _super);
    function EmployeeCollection() {
        _super.apply(this, arguments);

        this.url = "../api/employees";
    }
    EmployeeCollection.prototype.findByName = function (key) {
    };
    return EmployeeCollection;
})(Backbone.Collection);
var Book = (function (_super) {
    __extends(Book, _super);
    function Book() {
        _super.apply(this, arguments);

    }
    return Book;
})(Backbone.Model);
var Library = (function (_super) {
    __extends(Library, _super);
    function Library() {
        _super.apply(this, arguments);

    }
    return Library;
})(Backbone.Model);
function test_collection() {
    var Books;
    Books.each(function (book) {
    });
    var titles = Books.map(function (book) {
        return book.get("title");
    });
    var publishedBooks = Books.filter(function (book) {
        return book.get("published") === true;
    });
    var alphabetical = Books.sortBy(function (book) {
        return null;
    });
}
Backbone.history.start();
//@ sourceMappingURL=backbone-tests.js.map
