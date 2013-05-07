/// <reference path="definitions/jquery/jquery.d.ts" />
/// <reference path="definitions/underscore/underscore.d.ts" />
/// <reference path="definitions/backbone/backbone.d.ts" />
/// <reference path="definitions/bootstrap/bootstrap.d.ts" />
/// <reference path="definitions/modernizr/modernizr.d.ts" />
/// <reference path="definitions/handlebars/handlebars.d.ts" />


declare var _:any, $:any, Backbone:any, app:any;


module TemplateManager
{
    var partials = [{ name: 'fooForm', template: 'foo-form' }];

    var templates = [];

    export function get( id : string, callback: Function )
    {
        if( this.templates[id])
        {
            callback( this.templates[id] );
        }
        else
        {
            var url = '/templates/' + id + '.html';
            var promise = $.ajax(url);   // use trafficCop

            promise.done = ( remoteTemplate ) => {
                var tmp = Handlebars.compile( remoteTemplate );
                templates[id] = tmp;
                callback(tmp);
            }
        }
    }

    export function registerPartials( callback :Function )
    {
        /*
        _.each( this.partials, ( partial, index) =>
        {
            this.get( partial.template, )

            if ( index + 1 === this.partials.length) {
                callback();
            }
        });
        */
    }
}


class FooView extends Backbone.View
{
    //template = '<strong><%= name %></strong><a href="#" class="fooButton">Click me</a>';
    template : string;

    className : string;

    initialize( options : any )
    {
        this.model = options.model;
        this.model.on( "change", this.render );
        _.bindAll( this );
    }

    render()
    {
        TemplateManager.get( this.template, ( tmp : any ) =>
        {
            var html = tmp( this.model.toJSON());
            this.$el.html( html);
        });

        return this;
    }

    fooClicked(e)
    {
        alert("ouch!!")
        return false;
    }


    constructor( options?)
    {
        super( options);

        this.template = "foo-list-item";
        this.tagName = "li";
        this.className = "foo";

        this.events = {
            'click .fooButton': 'fooClicked'
        };
    }

}


class FooListView extends Backbone.View
{

    constructor( options?)
    {
        super( options);
    }

}


class HeaderView extends Backbone.View
{
    constructor (options? )
    {
        super(options);

        this.events = {
            "keyup .search-query": "search",
            "keypress .search-query": "onkeypress"
        };

        console.log("Initializing HeaderView");
    }

    template =  _.template(".navbar");

    render()
    {
        this.$el.html(this.template());
        return this;
    }


    onkeypress(event)
    {
        if (event.keyCode == 13)
        {
            event.preventDefault();
        }
    }

    select(menuItem)
    {
        $('.nav li').removeClass('active');
        $('.' + menuItem).addClass('active');
    }
}


class HomeView extends Backbone.View
{

    template: any;

    constructor (options? )
    {
        super(options);

        this.events = {
            "click #showMeBtn": "showMeBtnClick"
        };

        console.log("Initializing Home View");

        // init app
    }

    
    render () {
        this.$el.html(this.template());
        return this;
    }
}


class ContactView extends Backbone.View
{
    template: any;

    constructor (options? )
    {
        super(options);

        console.log("Initializing ContactView");
    }

    render ()
    {
        $(this.el).html(this.template());
    }
}


