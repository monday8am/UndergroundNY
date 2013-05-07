/// <reference path="definitions/underscore/underscore.d.ts" />
/// <reference path="definitions/backbone/backbone.d.ts" />

declare var _, $;
declare var Store: any;

class Employee extends Backbone.Model
{
    reports: EmployeeCollection;

    localStorage = new Store('typescript-employees');

    constructor (options? )
    {
        super(options);
        this.reports = new EmployeeCollection();
    }

    clear() {
        this.destroy();
    }


}

class Book extends Backbone.Model {}

class EmployeeCollection extends Backbone.Collection
{
    url = "/employees";
    localStorage = new Store('typescript-employees');
    model = Book;

    findByName(key)
    {
        console.log( "Find by name : " + key );

        var self = this;
        var objs = this.localStorage.findAll();

        for (var i in objs) {
            var obj = objs[i];
            if ( (key.toLowerCase() == obj.lastName.toLowerCase()) || (key.toLowerCase() == obj.firstName.toLowerCase()) || (key.toLowerCase() == obj.email.toLowerCase()) ) {
                self.reset(obj);
            }
        }
    }
}
