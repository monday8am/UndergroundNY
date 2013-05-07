/// <reference path="definitions/jquery/jquery.d.ts" />
/// <reference path="definitions/underscore/underscore.d.ts" />

              /*
declare var _:any, $:any;

class TemplateManager
{
    // Here, we're keeping an object literal around to act as a hash table, and we'll
    // be using it to cache each template that gets loaded from the server.
    templates = {};

    get( id : number, callback : any )
    {
        var result : string;

        // Can we find this template in the cache?
        if ( this.templates[id] )
        {
            // Yes? OK, lets call our callback function and return.
            return callback( this.templates[ id] );
        }

        // Otherwise, lets load it up. We'll build our URL based on the ID passed in.
        var url = '/templates/' + id + '.html',

        // And use a handy jQuery library called Traffic Cop to handle marshalling
        // requests to the server. This will prevent multiple concurrent requests
        // for the same resource.
            promise = $.trafficCop(url),
            that = this;

        // Wire up a handler for this request via jQuery's promise API
        promise.done( function (template) {

            // `template` is a string of HTML loaded via `$.ajax`. So here, we
            // can take the opportunity to pre-compile it for performance. When we
            // pre-compile a template, it returns a function that we can store in our
            // cache for future use.
            var tmp = Handlebars.compile(template);
            that.templates[id] = tmp;
            callback(tmp);
        })
    }
}


var TemplateManager = {

    // Here, we're keeping an object literal around to act as a hash table, and we'll
    // be using it to cache each template that gets loaded from the server.
    templates: {},
    get: function (id, callback) {

        // Can we find this template in the cache?
        if (this.templates[id]) {

            // Yes? OK, lets call our callback function and return.
            return callback(templates[id]);
        }

        // Otherwise, lets load it up. We'll build our URL based on the ID passed in.
        var url = '/templates/' + id + '.html',

        // And use a handy jQuery library called Traffic Cop to handle marshalling
        // requests to the server. This will prevent multiple concurrent requests
        // for the same resource.
            promise = $.trafficCop(url),
            that = this;

        // Wire up a handler for this request via jQuery's promise API
        promise.done(function (template) {

            // `template` is a string of HTML loaded via `$.ajax`. So here, we
            // can take the opportunity to pre-compile it for performance. When we
            // pre-compile a template, it returns a function that we can store in our
            // cache for future use.
            var tmp = Handlebars.compile(template);
            that.templates[id] = tmp;
            callback(tmp);
        });
    }
};

class TemplateLoader
{

    load( views,callback)
    {
        var deferreds = [];

        $.each( views, (index,view) =>
        {
            if (window[view])
            {
                deferreds.push( $.get("templates/" + view + ".html", (data) => {
                    window[view].prototype.template = _.template(data);
                }));
            }
            else
            {
                alert(view + " not found");
            }
        });

        $.when(deferreds).done(callback);
    }
}

                  */