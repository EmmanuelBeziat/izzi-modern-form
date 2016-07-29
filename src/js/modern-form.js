/*!
 * A simple handler for forms that add classes on your forms, so you can play with CSS.
 * Version : 1.0.0
 * Emmanuel B. (www.emmanuelbeziat.com)
 * https://github.com/EmmanuelBeziat/js-modern-form
 **/
(function() {

	this.ModernForm = function() {
		var defaults = {
			inputSelector: '.form-input',
			classHasFocus: 'form-group--has-focus',
			classHasContent: 'form-group--has-content',
			onFocus: null,
			onBlur: null
		};

		this.form = null;
		this.input = null;
		this.options = extendDefaults(defaults, arguments[0]);
	}

	/**
	 * Main functino called by the plugin
	 * @param  {DOM object} element [The form to be set with the plugin]
	 */
	ModernForm.prototype.init = function(element) {
		this.form = element;
		this.input = element.querySelectorAll(this.options.inputSelector);

		build.call(this);
	}

	/**
	 * Add classes on the input when user gets in it
	 * Allow callback onFocus
	 */
	function inputFocus() {
		this.element.parentNode.classList.add(this.plugin.options.classHasFocus, this.plugin.options.classHasContent);
		this.plugin.options.onFocus;
	}

	/**
	 * Remove classes on the input when user leave it
	 */
	function inputBlur() {
		if ('' === this.element.value) {
			this.element.parentNode.classList.remove(this.plugin.options.classHasContent);
		}
		this.element.parentNode.classList.remove(this.plugin.options.classHasFocus);
		this.plugin.options.onBlur;
	}

	/**
	 * Extend defaults properties with user options
	 */
	function extendDefaults(source, properties) {
		var property;

		for (property in properties) {
			if (properties.hasOwnProperty(property)) {
				source[property] = properties[property];
			}
		}

		return source;
	}

	/**
	 * Main build function
	 * 1. Add the content class when loading, if the input's value is already defined
	 * 2. Fire events when focus and blur happen
	 */
	function build() {
		var list = [].slice.call(this.input);
		var plugin = this;

		list.forEach(function(element) {
			if ('' !== element.value) {
				element.parentNode.classList.add(plugin.options.classHasContent); // [1]
			}

			if (element) {
				element.addEventListener('focus', inputFocus.bind({element: element, plugin: plugin})); // [2]
				element.addEventListener('blur', inputBlur.bind({element: element, plugin: plugin})); // [2]
			}
		});
	}

})();
