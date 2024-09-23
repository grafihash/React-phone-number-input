'use strict'

var metadata = require('libphonenumber-js/min/metadata')
var createPhoneInput = require('../commonjs/react-hook-form/PhoneInput.js').createPhoneInput

var PhoneInput = createPhoneInput(metadata)

exports = module.exports = PhoneInput

exports['default'] = PhoneInput