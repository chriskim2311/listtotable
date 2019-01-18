'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = formatPhoneNumber;
exports.formatPhoneNumberIntl = formatPhoneNumberIntl;

var _custom = require('libphonenumber-js/custom');

var _metadataMin = require('libphonenumber-js/metadata.min.json');

var _metadataMin2 = _interopRequireDefault(_metadataMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Deprecated.
// This is a file used in legacy `/index.js` export entry.
// In some next major version this file will be removed
// and `/index.js` will be redirected to `/min/index.js`.

function formatPhoneNumber(value) {
	var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'National';

	return (0, _custom.formatNumber)(value, format, _metadataMin2.default);
}

function formatPhoneNumberIntl(value) {
	return formatPhoneNumber(value, 'International');
}
//# sourceMappingURL=formatPhoneNumberDefaultMetadata.js.map