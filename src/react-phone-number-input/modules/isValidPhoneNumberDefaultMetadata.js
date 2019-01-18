'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = isValidPhoneNumber;

var _custom = require('libphonenumber-js/custom');

var _metadataMin = require('libphonenumber-js/metadata.min.json');

var _metadataMin2 = _interopRequireDefault(_metadataMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Deprecated.
// This is a file used in legacy `/index.js` export entry.
// In some next major version this file will be removed
// and `/index.js` will be redirected to `/min/index.js`.

function isValidPhoneNumber() {
	var parameters = Array.prototype.slice.call(arguments);
	parameters.push(_metadataMin2.default);
	return _custom.isValidNumber.apply(this, parameters);
}
//# sourceMappingURL=isValidPhoneNumberDefaultMetadata.js.map