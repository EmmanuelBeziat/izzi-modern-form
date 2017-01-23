![version](https://img.shields.io/badge/version-2.0.1-orange.svg?style=flat-square)

# Modern Form

A simple handler for forms that add classes on your form elements, so you can play with CSS. No jQuery required.

---

#Install

Using `npm` command, it’s as simple as this :
```bash
npm i js-modern-form
```

If you use bower, you can just do

```bash
$ bower i modern-form
```

Or you could just download the files on GitHub.

# How to use

```javascript
var modernForm = new ModernForm('.js-modern-form');
```

Check the demo files for an example.

# Options

You can also pass options to the plugin to change it’s default settings, like this:

```javascript
var modernForm = new ModernForm('.js-modern-form', {
	inputSelector: '.input',
	classHasFocus: '.has-focus'
});
```

<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Default value</th>
			<th>Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>inputSelector</th>
			<td>.form__input</td>
			<td>string</td>
			<td>Define the selector to match the inputs in the form</td>
		</tr>
		<tr>
			<th>classHasFocus</th>
			<td>form__group--has-focus</td>
			<td>string</td>
			<td>The class name to be applied when focus happen on an input</td>
		</tr>
		<tr>
			<th>classHasContent</th>
			<td>form__group--has-content</td>
			<td>string</td>
			<td>The class name to be applied when an input has some content</td>
		</tr>
		<tr>
			<th>onFocus</th>
			<td>null</td>
			<td>function</td>
			<td>A callback function to be called when focus (entering a field) happen</td>
		</tr>
		<tr>
			<th>onBlur</th>
			<td>null</td>
			<td>function</td>
			<td>A callback function to be called when blur (leaving a field) happen</td>
		</tr>
	</tbody>
</table>

