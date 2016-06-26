/*!
 * A simple handler for forms that add classes on your forms, so you can play with CSS.
 * Version : 4.0
 * Emmanuel B. (www.emmanuelbeziat.com)
 * https://github.com/EmmanuelBeziat/js-modern-form
 **/
(function() {

	this.ModernForm = function() {
		'use strict';

		this.form = null;
		this.input = null;
		this.inputContainer = null;

		var defaults = {
			inputSelector: '.form-input',
			classHasFocus: 'form-group--has-focus',
			classHasContent: 'form-group--has-content'
		};

		if (arguments[0] && typeof arguments[0] === 'object') {
			this.options = extendDefaults(defaults, arguments[0]);
		}

		init.call(this);
	}

	ModernForm.prototype.inputFocus = function() {
		this.parentNode.classList.add('form-group--has-focus', 'form-group--has-content');
	}

	ModernForm.prototype.inputBlur = function() {
		if ('' === this.value) {
			this.parentNode.classList.remove('form-group--has-content');
		}

		this.parentNode.classList.remove('form-group--has-focus');
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

	function init() {
		var list = [].slice.call(document.querySelectorAll('.form-input'));
		var plugin = this;

		list.forEach(function(element) {
			if ('' !== element.value) {
				element.parentNode.classList.add('form-group--has-content');
			}

			if (element) {
				element.addEventListener('focus', plugin.inputFocus.bind(element));
				element.addEventListener('blur', plugin.inputBlur.bind(element));
			}
		});
	}

})();