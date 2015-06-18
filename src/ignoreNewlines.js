import _ from 'lodash'

/**
 * An ES6 template string tag function for ignoring newlines and indentation
 *
 * Example:
 *
 *   var foo = ignoreIndentation `These lines
 *     will ignore
 *       all indentation and new lines`
 *
 * results in
 *
 *   foo === 'These lines will ignore all indentation and new lines'
 */
export default function ignoreNewlines(strings, ...values) {
	return _.zip(strings, values)
		.map(([string, value]) => {
			var newlinesAndTabsRegExp = /[\n\t]+/g

			return string.replace(newlinesAndTabsRegExp, ' ') + (value === undefined ? '' : value)
		})
		.join('')
}

