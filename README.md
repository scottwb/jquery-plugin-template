# jquery-plugin-template

#### A comprehensive template for creating a new jQuery plugin, with scaffold for:

* Constructor (init) that takes an options hash.
* Default options configuration, with the ability for the user to
  globally set the defaults, or override them individually per instance.
* Destructor (destroy)
* Public methods similar to those used by jQuery.ui, e.g.:

        $(selector).myPlugin('publicMethodName', param1, param2);

* Private methods.
* Member variables stored via the jQuery `data` method.
* Unbinding of namespaced events bound by the plugin.

