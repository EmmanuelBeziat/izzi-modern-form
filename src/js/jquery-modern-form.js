/*!
 * A simple handler for forms that add classes on your forms, so you can play with CSS.
 * Version : 2.0
 * Emmanuel B. (www.emmanuelbeziat.com)
 * https://github.com/EmmanuelBeziat/jquery-modern-form
 **/

;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Default values
	 */
	var pluginName = 'modernForm',
		defaults = {
			inputSelector: '.form-input',
			classFocus: 'form-group--focus',
			classLabel: 'form-group--label'
		};

	/**
	 * Constructor
	 */
	var Plugin = function(element, options) {
		this.element = element;

		this.settings = $.extend({}, defaults, options);

		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	};

	/**
	 * Methods
	 */
	$.extend(Plugin.prototype, {

		init: function() {
			var plugin = this,
				settings = plugin.settings,
				$input = $(plugin.element).find(settings.inputSelector);

			$input
				.on({
					'focus': function() {
						plugin.focusInput();
					},

					'blur': function() {
						plugin.blurInput();
					}
				})
				.each(function() {
					if ($(this).val() !== '') {
						$(this).parent().addClass(settings.classLabel);
					}
				});
		},

		/**
		 * When an item get the focus
		 */
		focusInput: function() {
			$(event.target).parent().addClass(this.settings.classFocus + ' ' + this.settings.classLabel);
		},

		/**
		 * When an item lose the focus
		 */
		blurInput: function() {
			var $parent = $(event.target).parent();

			if ($(event.target).val() === '') {
				$parent.removeClass(this.settings.classLabel);
			}

			$parent.removeClass(this.settings.classFocus);
		}
	});

	/**
	 * jQuery plugin wrapper
	 */
	$.fn[pluginName] = function(options) {

		return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
		});

	};
})(jQuery, window, document);