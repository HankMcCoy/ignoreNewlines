'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = ignoreNewlines;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

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

function ignoreNewlines(strings) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return _lodash2['default'].zip(strings, values).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var string = _ref2[0];
    var value = _ref2[1];

    var newlinesAndTabsRegExp = /[\n\t]+/g;

    return string.replace(newlinesAndTabsRegExp, ' ') + (value === undefined ? '' : value);
  }).join('');
}

module.exports = exports['default'];