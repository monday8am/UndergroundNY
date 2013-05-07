var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Presenter = (function () {
    function Presenter(options) {
    }
    Presenter.prototype.showView = function (view) {
        if(this.currentView) {
        }
        this.currentView = view;
        $('#view-container').html(this.currentView.render().$el);
    };
    Presenter.prototype.listFoos = function () {
        var view = new FooListView();
        this.showView(view);
    };
    Presenter.prototype.getFoo = function (id) {
        var single_foo = "test";
        var view = new FooView({
            model: single_foo
        });
        this.showView(view);
    };
    Presenter.prototype.showNotFound = function () {
        console.log("not found");
    };
    return Presenter;
})();
var FooRouter = (function (_super) {
    __extends(FooRouter, _super);
    function FooRouter(options) {
        this.routes = {
            "fonts": "fonts",
            "about": "about",
            "listFoos": "listFoos",
            "foos/:id": "getFoo",
            "actions": "notFound"
        };
        this.presenter = new Presenter(options);
        _super.call(this, options);
    }
    FooRouter.prototype.index = function () {
        console.log("index");
    };
    FooRouter.prototype.listFoos = function () {
        this.presenter.listFoos();
    };
    FooRouter.prototype.getFoo = function (id) {
        this.presenter.getFoo(id);
    };
    FooRouter.prototype.notFound = function () {
        this.presenter.showNotFound();
    };
    return FooRouter;
})(Backbone.Router);
var router = new FooRouter({
    model: ""
});
Backbone.history.start();
var AppRouter = (function (_super) {
    __extends(AppRouter, _super);
    function AppRouter(options) {
        _super.call(this, options);
        this.routes = {
            "": "home",
            "contact": "contact"
        };
        this.headerView = new HeaderView();
        $(".header").html(this.headerView.render().el.toString());
        $("body").click(function () {
            $(".dropdown").removeClass("open");
        });
    }
    AppRouter.prototype.home = function () {
        if(!this.homeView) {
            this.homeView = new HomeView();
            this.homeView.render();
        } else {
            this.homeView.delegateEvents();
        }
        $("#content").html(this.homeView.el.toString());
        this.headerView.select("home-menu");
    };
    AppRouter.prototype.contact = function () {
        if(!this.contactView) {
            this.contactView = new ContactView();
            this.contactView.render();
        }
        $('#content').html(this.contactView.el.toString());
        this.headerView.select('contact-menu');
    };
    return AppRouter;
})(Backbone.Router);
//@ sourceMappingURL=app.js.map
