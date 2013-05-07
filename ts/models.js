var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(options) {
        _super.call(this, options);
        this.localStorage = new Store('typescript-employees');
        this.reports = new EmployeeCollection();
    }
    Employee.prototype.clear = function () {
        this.destroy();
    };
    return Employee;
})(Backbone.Model);
var Book = (function (_super) {
    __extends(Book, _super);
    function Book() {
        _super.apply(this, arguments);

    }
    return Book;
})(Backbone.Model);
var EmployeeCollection = (function (_super) {
    __extends(EmployeeCollection, _super);
    function EmployeeCollection() {
        _super.apply(this, arguments);

        this.url = "/employees";
        this.localStorage = new Store('typescript-employees');
        this.model = Book;
    }
    EmployeeCollection.prototype.findByName = function (key) {
        console.log("Find by name : " + key);
        var self = this;
        var objs = this.localStorage.findAll();
        for(var i in objs) {
            var obj = objs[i];
            if((key.toLowerCase() == obj.lastName.toLowerCase()) || (key.toLowerCase() == obj.firstName.toLowerCase()) || (key.toLowerCase() == obj.email.toLowerCase())) {
                self.reset(obj);
            }
        }
    };
    return EmployeeCollection;
})(Backbone.Collection);
//@ sourceMappingURL=models.js.map
