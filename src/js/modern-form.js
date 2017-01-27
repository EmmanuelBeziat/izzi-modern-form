/*!
 * A simple handler for forms that add classes on your forms, so you can play with CSS.
 * Version : 2.0.5
 * Emmanuel B. (www.emmanuelbeziat.com)
 * https://github.com/EmmanuelBeziat/js-modern-form
 **/

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.ModernForm = factory();
	}
}(this, function () {
	var ModernForm = function (el, options){
		'use strict';

		var self = Object.create(ModernForm.prototype);

		/**
		 * Default settings
		 */
		self.options = {
			inputSelector: '.form__input',
            classHasFocus: 'form__group--has-focus',
            classHasContent: 'form__group--has-content',
            onFocus: null,
            onBlur: null
		};

		/**
		 * User defined options
		 */
		if (options) {
			Object.keys(options).forEach(function (key){
				self.options[key] = options[key];
			});
		}

		/**
		 * By default, search for an item with 'js-modern-form' class
		 */
		if (!el) {
			self.form = document.querySelector('.js-modern-form');
		}

		if (el && 'string' === typeof el) {
			self.form = document.querySelector(el);
		}
		else if (el && 'object' === typeof el) {
			self.form = el;
		}
		else {
			throw new Error('[ModernForm] Unable to get a valid form');
		}

		self.input = self.form.querySelectorAll(self.options.inputSelector);

		var init = function () {
			build.call(this);
		};

		/**
		 * Add classes on the input when user gets in it
		 * Allow callback onFocus
		 */
		function inputFocus() {
			this.element.parentNode.classList.add(self.options.classHasFocus);
			this.element.parentNode.classList.add(self.options.classHasContent);

			self.options.onFocus();
		}

		/**
		 * Remove classes on the input when user leave it
		 */
		function inputBlur() {
			if ('' === this.element.value) {
				this.element.parentNode.classList.remove(self.options.classHasContent);
			}
			this.element.parentNode.classList.remove(self.options.classHasFocus);
			self.options.onBlur();
		}

		/**
		 * Main build function
		 * 1. Add the content class when loading, if the input's value is already defined
		 * 2. Fire events when focus and blur happen
		 */
		function build() {
			var list = [].slice.call(self.input);

			list.forEach(function (element) {
				if ('' !== element.value) {
					element.parentNode.classList.add(self.options.classHasContent); // [1]
				}

				if (element) {
					element.addEventListener('focus', inputFocus.bind({ element: element })); // [2]
					element.addEventListener('blur', inputBlur.bind({ element: element })); // [2]
				}
			});
		}


		init();
		return self;
	};
	return ModernForm;
}));