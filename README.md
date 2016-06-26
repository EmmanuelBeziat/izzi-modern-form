![version](https://img.shields.io/badge/version-4.0.0-orange.svg?style=flat-square)

# modern-form

A simple handler for forms that add classes on your form elements, so you can play with CSS.

---

#Installation

Si vous utilisez Bower, vous pouvez l'installer directement

```bash
$ bower install jquery-modern-form
```

Sinon, il vous suffit de récupérer manuellement les fichiers sur github.

# Utilisation

```javascript
var myForm = new ModernForm();
```

# Options
<table>
	<thead>
		<tr>
			<th>Option</th>
			<th>Valeur par défaut</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>inputSelector</th>
			<td>.form-input</td>
			<td>Choisi l'élément sur lequel les classes seront appliquées.</td>
		</tr>
		<tr>
			<th>classHasFocus</th>
			<td>form-group--has-focus</td>
			<td>Nom de la classe à ajouter pour le focus du champ.</td>
		</tr>
		<tr>
			<th>classHasContent</th>
			<td>form-group--has-content</td>
			<td>Nom de la classe à ajouter lorsque le champ est rempli.</td>
		</tr>
	</tbody>
</table>

# Évolutions envisagées
* ??
