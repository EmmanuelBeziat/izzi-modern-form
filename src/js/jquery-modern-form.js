/*!
 * A simple handler for forms that add classes on your forms, so you can play with CSS.
 * Version : 1.0
 * Par Emmanuel "Manumanu" B. (www.emmanuelbeziat.com)
 * https://github.com/EmmanuelBeziat/jquery-modern-form
 **/

;(function($, undefined) {
	"use strict";

	$.fn.modernForm = function(params) {

		// Valeurs par défauts des options
		params = $.extend({
			inputSelector: '.form-input',
			classFocus: 'form-group--focus',
			classLabel: 'form-group--label'
		}, params);

		// Actions du plugin
		this.each(function() {

			// Variables
			var $form = $(this),
				$input = $(this).find(params.inputSelector);

			$input
				.on('focus', function() {
					$(this).parent().addClass(params.classeFocus + ' ' + params.classeLabel);
				})
				.on('blur', function() {
					var $parent = $(this).parent();

					if ($(this).val() === '') {
						$parent.removeClass(params.classeLabel);
					}

					$parent.removeClass(params.classeFocus);
				});

			$input.each(function() {
				if ($(this).val() !== '') {
					$(this).parent().addClass(classeLabel);
				}
			});
		});

		// Chainage jQuery
		return this;
	};
})(jQuery);