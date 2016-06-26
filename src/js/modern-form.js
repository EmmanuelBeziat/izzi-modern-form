/*!
 * A simple handler for forms that add classes on your forms, so you can play with CSS.
 * Version : 4.0
 * Emmanuel B. (www.emmanuelbeziat.com)
 * https://github.com/EmmanuelBeziat/js-modern-form
 **/
(function() {

	this.ModernForm = function() {
		'use strict';

		var defaults = {
			inputSelector: '.form-input',
			classHasFocus: 'form-group--has-focus',
			classHasContent: 'form-group--has-content'
		};

		this.form = null;
		this.input = null;
		this.options = extendDefaults(defaults, arguments[0]);
	}

	ModernForm.prototype.init = function(element) {
		this.form = element;
		this.input = element.querySelectorAll(this.options.inputSelector);

		build.call(this);
	}

	ModernForm.prototype.inputFocus = function() {
		this.element.parentNode.classList.add(this.plugin.options.classHasFocus, this.plugin.options.classHasContent);
	}

	ModernForm.prototype.inputBlur = function() {
		if ('' === this.element.value) {
			this.element.parentNode.classList.remove(this.plugin.options.classHasContent);
		}

		this.element.parentNode.classList.remove(this.plugin.options.classHasFocus);
	}

	function extendDefaults(source, properties) {
		var property;

		for (property in properties) {
			if (properties.hasOwnProperty(property)) {
				source[property] = properties[property];
			}
		}

		return source;
	}

	function build() {
		var list = [].slice.call(this.input);
		var plugin = this;

		list.forEach(function(element) {
			if ('' !== element.value) {
				element.parentNode.classList.add(plugin.options.classHasContent);
			}

			if (element) {
				element.addEventListener('focus', plugin.inputFocus.bind({element: element, plugin: plugin}));
				element.addEventListener('blur', plugin.inputBlur.bind({element: element, plugin: plugin}));
			}
		});
	}

})();