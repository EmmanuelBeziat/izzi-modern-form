/*!
 * A simple handler for forms that add classes on your forms, so you can play with CSS.
 * Version : 3.0
 * Emmanuel B. (www.emmanuelbeziat.com)
 * https://github.com/EmmanuelBeziat/jquery-modern-form
 **/


;(function($, window, document, undefined) {
	'use strict';

	var pluginName = 'modernForm';

	/**
	 * Constructor
	 */
	function Plugin(element, options) {
		this.element = element;
		this._name = pluginName;
		this._defaults = $.fn[pluginName].defaults;
		this.options = $.extend( {}, this._defaults, options );

		this.init();
	}

	/**
	 * Methods
	 */
	$.extend(Plugin.prototype, {

		// Initialization logic
		init: function() {
			this.buildCache();
			this.bindEvents();
		},

		/**
		 * Remove plugin instance
		 * Example: $('selector').data('tabs').destroy();
		 */
		destroy: function() {
			this.unbindEvents();
			this.$element.removeData();
		},

		/**
		 * Create variables that can be accessed by other functions
		 * Useful for DOM performances
		 */
		buildCache: function() {
			this.$element = $(this.element);
		},

		/**
		 * Attach actions to events
		 */
		bindEvents: function() {
			var plugin = this,
				$input = $(plugin.$element).find(plugin.options.inputSelector);

			$input
				.on({
					'focus': function(event) {
						plugin.focusInput($(event.target));
					},

					'blur': function(event) {
						plugin.blurInput($(event.target));
					}
				})
				.each(function() {
					if ($(this).val() !== '') {
						$(this).parent().addClass(plugin.options.classLabel);
					}
				});
		},

		/**
		 * Remove actions from events
		 */
		unbindEvents: function() {
			this.$element.off('.' + this._name);
		},

		/**
		 * When an item get the focus
		 */
		focusInput: function($target) {
			$target.parent().addClass(this.options.classFocus + ' ' + this.options.classLabel);
		},

		/**
		 * When an item lose the focus
		 */
		blurInput: function($target) {
			var $parent = $target.parent();

			if ($target.val() === '') {
				$parent.removeClass(this.options.classLabel);
			}

			$parent.removeClass(this.options.classFocus);
		}

	});

	/**
	 * jQuery plugin wrapper
	 */
	$.fn[pluginName] = function(options) {
		this.each(function() {
			if (!$.data( this, "plugin_" + pluginName)) {
				$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
			}
		});
		return this;
	};

	/**
	 * Plugin options and their default values
	 */
	$.fn[pluginName].defaults = {
		inputSelector: '.form-input',
		classFocus: 'form-group--focus',
		classLabel: 'form-group--label'
	};

})( jQuery, window, document );