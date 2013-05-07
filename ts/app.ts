/// <reference path="definitions/jquery/jquery.d.ts" />
/// <reference path="definitions/backbone/backbone.d.ts" />
/// <reference path="definitions/bootstrap/bootstrap.d.ts" />
/// <reference path="views.ts" />

declare var $: any, Backbone: any;

class Presenter
{
    private currentView : Backbone.View;

    private foos : Backbone.Collection;

    constructor( options?)
    {

    }

    showView( view : Backbone.View )
    {
        if( this.currentView )
        {
            //this.currentView.c
            // remove view
        }

        this.currentView = view;

        $('#view-container').html( this.currentView.render().$el );
    }

    listFoos()
    {
        var view : Backbone.View = new FooListView();
        this.showView( view );
    }


    getFoo( id : string )
    {
        //var single_foo  = this.foos.get( id);
        var single_foo = "test";
        var view : Backbone.View = new FooView( { model : single_foo });
        this.showView( view );
    }

    showNotFound()
    {
        console.log("not found");
    }
}


class FooRouter extends Backbone.Router
{

    private presenter : Presenter;

    constructor( options?)
    {
        this.routes =
        {
            "fonts"         : "fonts",
            "about"         : "about",
            "listFoos"      : "listFoos",
            "foos/:id"      : "getFoo",
            "actions"       : "notFound"
        };

        this.presenter = new Presenter( options);
        super( options);
    }

    index()
    {
       console.log("index");
    }


    listFoos()
    {
        this.presenter.listFoos();
    }

    getFoo( id )
    {
        this.presenter.getFoo(id);
    }

    notFound()
    {
        this.presenter.showNotFound();
    }

}


var router : FooRouter = new FooRouter( {model : "" });
Backbone.history.start();


class AppRouter extends Backbone.Router
{

    headerView: HeaderView;
    homeView: HomeView;
    contactView: ContactView;

    routes =
    {
        ""          : "home",
        "contact"   : "contact"
    };

    constructor (options? )
    {


        super(options);

        this.headerView = new HeaderView();

        $(".header").html( this.headerView.render().el.toString() );

        $("body").click(() => {
            $(".dropdown").removeClass("open");
        });
   }


    home()
    {
        if ( !this.homeView )
        {
            this.homeView = new HomeView();
            this.homeView.render();
        }
        else
        {
            this.homeView.delegateEvents();
        }

        $("#content").html( this.homeView.el.toString());
        this.headerView.select("home-menu");
    }

    contact()
    {
        if (!this.contactView )
        {
            this.contactView = new ContactView();
            this.contactView.render();
        }

        $('#content').html( this.contactView.el.toString() );
        this.headerView.select( 'contact-menu' );
    }
}
