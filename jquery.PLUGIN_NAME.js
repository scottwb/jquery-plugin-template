/**
 * jQuery Plugin Template
 * https://github.com/scottwb/jquery-plugin-template
 *
 * Scott W. Bradley:
 *   google.com/profiles/scottwb
 *   twitter.com/scottwb69
 *   github.com/scottwb
 *
 * This template was inspired by:
 *   http://docs.jquery/com/Plugins/Authoring
 *
 * Everything below is a template for a jQuery plugin. Search for all
 * the TODO comments in this file, follow their lead, and start building
 * your new pluign. You probably also want to rename this file.
 */

// TODO: Delete the above banner comment and fill out this real banner
//       comment below describing this plugin.
/**  
 * jQuery myPlugin Plugin
 * Version: x.x.x
 * URL: URL
 * Descripton: DESCRIPTION
 * Requires: JQUERY_VERSION, OTHER_PLUGIN(S), ETC.
 * Author: AUTHOR (AUTHOR_URL)
 * Copyright: Copyright (c) 2010 YOUR_NAME
 * License: LICENSE_INFO
 *
 * Usage:
 *
 *   // Init element with myPlugin, using the default options.
 *   $(selector).myPlugin();
 *
 *   // Init element with myPlugin, overriding some default options.
 *   $(selector).myPlugin({option1:true, option2:'foo'});
 *
 *   // Un-init a previous init of myPlugin on an element.
 *   $(selector).myPlugin('destroy');
 *
 *   // Call a public method on an init'd myPlugin element.
 *   $(selector).myPlugin('publicMethod2', 'foo', 'bar');
 *
 * For documentation on the supported options, see the bottom of this file.
 */
(function($) {

    ////////////////////////////////////////////////////////////
    // Constants
    ////////////////////////////////////////////////////////////
    PLUGIN_NAME = 'myPlugin';  // TODO: Rename this plugin!


    ////////////////////////////////////////////////////////////
    // Private Methods
    ////////////////////////////////////////////////////////////
    function myPrivateMethod1($this) {
        // TODO: Write real private methods.
    }

    function myPrivateMethod2($this) {
        // TODO: Write real private methods.
    }


    ////////////////////////////////////////////////////////////
    // Public Methods
    ////////////////////////////////////////////////////////////
    var publicMethods = {
        init: function(options) {return this.each(function() {
            var opts  = $.extend({}, $.fn[PLUGIN_NAME].defaults, options);
            var $this = $(this);

            // TODO: Perform any setup this plugin needs when first
            //       initialized on an element, e.g.: adding stuff to
            //       the DOM, etc.

            // TODO: Initialize your members variables here, to
            //       be stored as data with this jQuery object.
            //       You may wish to store your options here too.
            var data  = $this.data(PLUGIN_NAME);
            if (!data) {
                $this.data(PLUGIN_NAME, {
                    opts       : opts,
                    memberVar1 : true,
                    memberVar2 : 'foo'
                });
            }
        })},

        destroy: function() {return this.each(function() {
            var $this = $(this);
            var data  = $this.data(PLUGIN_NAME);

            // TODO: If the plugin binds any events, it should bind them using
            //       the plugin's name as a namespace. E.g.: 'resize.myPlugin'.
            //       Uncomment this line to then unbind all events in
            //       this namespace.
            //$(window).unbind('.' + PLUGIN_NAME);

            // TODO: Cleanup anything in data that needs to be cleaned up.
            //       E.g.: removing DOM elements that were added in init.

            $this.removeData(PLUGIN_NAME);
        })},

        // This would be called by the user via:
        //
        //   $(selector).myPlugin('publicMethod1');
        //
        publicMethod1: function() {return this.each(function() {
            // TODO: Implement real public methods.
            var $this = $(this);
            var data  = $this.data(PLUGIN_NAME);

            // Example use of a member variable and a private method.
            if (data.memberVar1) {
                myPrivateMethod1($this);
            }

            // Example use of options.
            if (data.opts.option1) {
                myPrivateMethod2($this);
            }
        })},

        publicMethod2: function(param1, param2) {return this.each(function() {
            // TODO: Implement real public methods.
            var $this = $(this);
        })},

    };


    ////////////////////////////////////////////////////////////
    // Plugin Initialization
    ////////////////////////////////////////////////////////////
    $.fn[PLUGIN_NAME] = function(method) {
        if (publicMethods[method]) {
            return publicMethods[method].apply(
                this,
                Array.prototype.slice.call(arguments, 1)
            );
        }
        else if (typeof method == 'object' || !method) {
            return publicMethods.init.apply(this, arguments);
        }
        else {
            $.error('Method ' + method + ' does not exist on jQuery.' + PLUGIN_NAME);
        }
    };


    ////////////////////////////////////////////////////////////
    // Options
    ////////////////////////////////////////////////////////////
    // TODO: Implement real options with default values
    //       that will be overridden by 'options' passed to init(),
    //       and comment their meanings here.
    $.fn[PLUGIN_NAME].defaults = {
        option1 : true,
        option2 : 'foo'
    };
})(jQuery);
