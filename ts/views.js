var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TemplateManager;
(function (TemplateManager) {
    var partials = [
        {
            name: 'fooForm',
            template: 'foo-form'
        }
    ];
    var templates = [];
    function get(id, callback) {
        if(this.templates[id]) {
            callback(this.templates[id]);
        } else {
            var url = '/templates/' + id + '.html';
            var promise = $.ajax(url);
            promise.done = function (remoteTemplate) {
                var tmp = Handlebars.compile(remoteTemplate);
                templates[id] = tmp;
                callback(tmp);
            };
        }
    }
    TemplateManager.get = get;
    function registerPartials(callback) {
    }
    TemplateManager.registerPartials = registerPartials;
})(TemplateManager || (TemplateManager = {}));
var FooView = (function (_super) {
    __extends(FooView, _super);
    function FooView(options) {
        _super.call(this, options);
        this.template = "foo-list-item";
        this.tagName = "li";
        this.className = "foo";
        this.events = {
            'click .fooButton': 'fooClicked'
        };
    }
    FooView.prototype.initialize = function (options) {
        this.model = options.model;
        this.model.on("change", this.render);
        _.bindAll(this);
    };
    FooView.prototype.render = function () {
        var _this = this;
        TemplateManager.get(this.template, function (tmp) {
            var html = tmp(_this.model.toJSON());
            _this.$el.html(html);
        });
        return this;
    };
    FooView.prototype.fooClicked = function (e) {
        alert("ouch!!");
        return false;
    };
    return FooView;
})(Backbone.View);
var FooListView = (function (_super) {
    __extends(FooListView, _super);
    function FooListView(options) {
        _super.call(this, options);
    }
    return FooListView;
})(Backbone.View);
var HeaderView = (function (_super) {
    __extends(HeaderView, _super);
    function HeaderView(options) {
        _super.call(this, options);
        this.template = _.template(".navbar");
        this.events = {
            "keyup .search-query": "search",
            "keypress .search-query": "onkeypress"
        };
        console.log("Initializing HeaderView");
    }
    HeaderView.prototype.render = function () {
        this.$el.html(this.template());
        return this;
    };
    HeaderView.prototype.onkeypress = function (event) {
        if(event.keyCode == 13) {
            event.preventDefault();
        }
    };
    HeaderView.prototype.select = function (menuItem) {
        $('.nav li').removeClass('active');
        $('.' + menuItem).addClass('active');
    };
    return HeaderView;
})(Backbone.View);
var HomeView = (function (_super) {
    __extends(HomeView, _super);
    function HomeView(options) {
        _super.call(this, options);
        this.events = {
            "click #showMeBtn": "showMeBtnClick"
        };
        console.log("Initializing Home View");
    }
    HomeView.prototype.render = function () {
        this.$el.html(this.template());
        return this;
    };
    return HomeView;
})(Backbone.View);
var ContactView = (function (_super) {
    __extends(ContactView, _super);
    function ContactView(options) {
        _super.call(this, options);
        console.log("Initializing ContactView");
    }
    ContactView.prototype.render = function () {
        $(this.el).html(this.template());
    };
    return ContactView;
})(Backbone.View);
//@ sourceMappingURL=views.js.map
