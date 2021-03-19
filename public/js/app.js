/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/@babel/runtime/regenerator/index.js'");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/axios/index.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Address/addressComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Address/addressComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_Nation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/Nation */ "./resources/js/providers/Nation.js");
/* harmony import */ var _providers_Address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/Address */ "./resources/js/providers/Address.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var nationResource = new _providers_Nation__WEBPACK_IMPORTED_MODULE_1__["default"]();
var AddressResource = new _providers_Address__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      type: Number,
      required: false
    }
  },
  data: function data() {
    return {
      newAddress: true,
      address: null,
      errors: [],
      successMessage: "",
      countries: [],
      states: [],
      cities: [],
      postalCode: null,
      street: null,
      street1: null,
      street2: null,
      references: null,
      suburb: null,
      interiorNumber: null,
      exteriorNumber: null,
      form: {
        country: null,
        state: null,
        city: null
      }
    };
  },
  created: function created() {},
  watch: {
    id: function id(val) {
      this.newAddress = this.id == null;
      this.getAddress();
    }
  },
  methods: {
    getAddress: function getAddress() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return AddressResource.getAddress(_this.id);

              case 2:
                response = _context.sent.data;

                if (response.success) {
                  _context.next = 6;
                  break;
                }

                _this.errors.push("Error al obtener dirección.");

                return _context.abrupt("return");

              case 6:
                _this.address = response.data;

                if (!(_this.address == "" || _this.address == null)) {
                  _context.next = 10;
                  break;
                }

                _this.errors.push("Dirección no existe.");

                return _context.abrupt("return");

              case 10:
                _this.street = _this.address.street;
                _this.street1 = _this.address.street_one;
                _this.street2 = _this.address.street_two;
                _this.references = _this.address.references;
                _this.suburb = _this.address.suburb;
                _this.postalCode = _this.address.postal_code;
                _this.interiorNumber = _this.address.interior_num;
                _this.exteriorNumber = _this.address.exterior_num;
                _this.form.country = _this.countries.filter(function (c) {
                  return c.id == _this.address.country_id;
                })[0];
                _context.next = 21;
                return _this.getStates();

              case 21:
                _this.form.state = _this.states.filter(function (s) {
                  return s.id == _this.address.state_id;
                })[0];
                _context.next = 24;
                return _this.getCitys();

              case 24:
                _this.form.city = _this.cities.filter(function (c) {
                  return c.id == _this.address.city_id;
                })[0];

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getCountries: function getCountries() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return nationResource.getCountries();

              case 3:
                _this2.countries = _context2.sent;
                _this2.countries = _this2.countries.data.data;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log("error paises", _context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    getStates: function getStates() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _this3.form.state = null;
                _this3.form.city = null;
                _context3.next = 5;
                return nationResource.getState(_this3.form.country.id);

              case 5:
                _this3.states = _context3.sent;
                _this3.states = _this3.states.data.data;
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                console.log("error estados", _context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }))();
    },
    getCitys: function getCitys() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _this4.form.city = null;
                _context4.next = 4;
                return nationResource.getCity(_this4.form.state.id);

              case 4:
                _this4.cities = _context4.sent;
                _this4.cities = _this4.cities.data.data;
                _context4.next = 11;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                console.log("error ciudades", _context4.t0);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }))();
    },
    getAddressForm: function getAddressForm() {
      return {
        street: this.street,
        street_one: this.street1,
        street_two: this.street2,
        references: this.references,
        suburb: this.suburb,
        postal_code: +this.postalCode,
        interior_num: +this.interiorNumber,
        exterior_num: +this.exteriorNumber,
        country_id: this.form.country.id,
        state_id: this.form.state.id,
        city_id: this.form.city.id
      };
    },
    saveAddress: function saveAddress() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var response, formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.errors = [];
                response = null;
                formData = _this5.getAddressForm();

                if (!_this5.newAddress) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 6;
                return _this5.saveNewAddress(formData);

              case 6:
                response = _context5.sent;
                _context5.next = 12;
                break;

              case 9:
                _context5.next = 11;
                return _this5.saveEditAddress(formData);

              case 11:
                response = _context5.sent;

              case 12:
                if (!response.success) {
                  _this5.errors.push("Error al guardar la dirección.");
                }

                _this5.successMessage = "Contacto guardado correctamente.";
                return _context5.abrupt("return", response);

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    saveNewAddress: function saveNewAddress(formData) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return AddressResource.createAddress(formData);

              case 2:
                response = _context6.sent.data;
                return _context6.abrupt("return", response);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    saveEditAddress: function saveEditAddress(formData) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return AddressResource.updateAddress(_this6.id, formData);

              case 2:
                response = _context7.sent.data;
                return _context7.abrupt("return", response);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    isValidAddressForm: function isValidAddressForm() {
      var errors = [];

      if (this.street == null || this.street == "") {
        errors.push("Calle no puede estar vacio.");
      }

      if (this.street1 == null || this.street1 == "") {
        errors.push("Calle 1 no puede estar vacio.");
      }

      if (this.street2 == null || this.street2 == "") {
        errors.push("Calle 2 no puede estar vacio.");
      }

      if (this.references == null || this.references == "") {
        errors.push("Referencias no puede estar vacio.");
      }

      if (this.suburb == null || this.suburb == "") {
        errors.push("Suburbio no puede estar vacio.");
      }

      if (this.postalCode == null || this.postalCode == "") {
        errors.push("Código Postal no puede estar vacio.");
      }

      if (this.interiorNumber == null || this.interiorNumber == "") {
        errors.push("Número interior no puede estar vacio.");
      }

      if (this.exteriorNumber == null || this.exteriorNumber == "") {
        errors.push("Número exterior no puede estar vacio.");
      }

      this.errors = errors;
      return errors;
    }
  },
  mounted: function mounted() {
    this.getCountries();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contacts/contactsComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Contacts/contactsComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_Contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/Contact */ "./resources/js/providers/Contact.js");
/* harmony import */ var _components_Address_addressComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Address/addressComponent.vue */ "./resources/js/components/Address/addressComponent.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var ContactResource = new _providers_Contact__WEBPACK_IMPORTED_MODULE_1__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      type: Number,
      required: false
    },
    typeContact: {
      type: Number,
      required: true
    }
  },
  components: {
    AddressComponent: _components_Address_addressComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      newContact: true,
      // typeContact: 0,
      contact: null,
      addressId: null,
      errors: [],
      successMessage: "",
      // Contacto
      rfcContact: null,
      typePerson: 0,
      emailsContact: [""],
      mobilesContact: [""],
      phonesContact: [""]
    };
  },
  created: function created() {},
  watch: {
    id: function id(val) {
      this.newContact = this.id == null;
      this.getContact();
    }
  },
  methods: {
    getContact: function getContact() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return ContactResource.getContact(_this.id);

              case 2:
                response = _context.sent.data;

                if (response.success) {
                  _context.next = 6;
                  break;
                }

                _this.errors.push("Error al obtener contacto.");

                return _context.abrupt("return");

              case 6:
                _this.contact = response.data;

                if (!(_this.contact == "")) {
                  _context.next = 10;
                  break;
                }

                _this.errors.push("Contacto no existe.");

                return _context.abrupt("return");

              case 10:
                _this.addressId = _this.contact.address_id;
                _this.typeContact = _this.contact.type;
                _this.rfcContact = _this.contact.rfc;
                _this.typePerson = _this.contact.type_person;
                _this.emailsContact = _this.contact.emails.split("|");
                _this.mobilesContact = _this.contact.moviles.split("|");
                _this.phonesContact = _this.contact.phones.split("|");

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getContactForm: function getContactForm() {
      return {
        type: this.typeContact,
        rfc: this.rfcContact,
        type_person: this.typePerson,
        emails: this.emailsContact.join("|"),
        moviles: this.mobilesContact.join("|"),
        phones: this.phonesContact.join("|"),
        address_id: this.addressId
      };
    },
    saveContact: function saveContact() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var saveAddressResponse, formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$refs.addressComponent.saveAddress();

              case 2:
                saveAddressResponse = _context2.sent;

                if (!saveAddressResponse.success) {
                  _context2.next = 7;
                  break;
                }

                _this2.addressId = saveAddressResponse.data.id;
                _context2.next = 8;
                break;

              case 7:
                return _context2.abrupt("return", saveAddressResponse);

              case 8:
                _this2.errors = [];
                formData = _this2.getContactForm();
                console.log(formData);
                response = null;

                if (!_this2.newContact) {
                  _context2.next = 18;
                  break;
                }

                _context2.next = 15;
                return _this2.saveNewContact(formData);

              case 15:
                response = _context2.sent;
                _context2.next = 21;
                break;

              case 18:
                _context2.next = 20;
                return _this2.saveEditContact(formData);

              case 20:
                response = _context2.sent;

              case 21:
                if (!response.success) {
                  _this2.errors.push("Error al guardar contacto.");
                }

                _this2.successMessage = "Dirección guardada correctamente.";
                return _context2.abrupt("return", response);

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    saveNewContact: function saveNewContact(formData) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return ContactResource.createContact(formData);

              case 2:
                response = _context3.sent.data;
                return _context3.abrupt("return", response);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    saveEditContact: function saveEditContact(formData) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return ContactResource.updateContact(_this3.id, formData);

              case 2:
                response = _context4.sent.data;
                return _context4.abrupt("return", response);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    isValidContactForm: function isValidContactForm() {
      var addressResponse = this.$refs.addressComponent.isValidAddressForm();
      var errors = [];

      if (this.typeContact == null || this.typeContact == "") {
        errors.push("Tipo de contacto no puede estar vacio.");
      }

      if (this.rfcContact == null || this.rfcContact == "") {
        errors.push("RFC no puede estar vacio.");
      }

      if (this.typePerson == null || this.typePerson == "") {
        errors.push("Tipo de persona no puede estar vacio.");
      }

      this.emailsContact.forEach(function (email, index) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(email)) {
          errors.push("Correo electrónico " + (index + 1) + " invalido.");
        }
      });
      this.mobilesContact.forEach(function (mobile, index) {
        if (mobile.length < 10) {
          errors.push("Teléfonos móvil " + (index + 1) + " invalido.");
        }
      });
      this.phonesContact.forEach(function (phone, index) {
        if (phone.length < 10) {
          errors.push("Teléfonos " + (index + 1) + " invalido.");
        }
      });
      this.errors = errors;
      return errors.concat(addressResponse);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/info/dataComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Customers/info/dataComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_Customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/Customer */ "./resources/js/providers/Customer.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var customerResource = new _providers_Customer__WEBPACK_IMPORTED_MODULE_1__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id_customer'],
  data: function data() {
    return {
      infoCustomer: []
    };
  },
  computed: {
    allName: function allName() {
      return "".concat(this.infoCustomer.name, " ").concat(this.infoCustomer.last_name);
    }
  },
  methods: {
    getCustomer: function getCustomer() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return customerResource.getCustomer(_this.id_customer);

              case 2:
                _this.infoCustomer = _context.sent;
                _this.infoCustomer = _this.infoCustomer.data.data;

                if (_this.infoCustomer.city) {
                  _this.infoCustomer.city = _this.infoCustomer.city.city;
                }

                console.log(_this.infoCustomer.city);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    this.getCustomer();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/info/infoComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Customers/info/infoComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_Note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/Note */ "./resources/js/providers/Note.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var NoteResourse = new _providers_Note__WEBPACK_IMPORTED_MODULE_1__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id_customer'],
  data: function data() {
    return {
      note: null,
      notes: []
    };
  },
  computed: {
    user: function user() {
      return this.$store.state.user;
    },
    computed: {
      user: function user() {
        return this.$store.state.user;
      }
    }
  },
  methods: {
    saveNote: function saveNote() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.note = $("#editor").val();

                if (!(_this.note === null || _this.note === '')) {
                  _context.next = 5;
                  break;
                }

                _this.$swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  text: 'El campo de notas esta vacio'
                });

                _context.next = 19;
                break;

              case 5:
                formData = {
                  note: _this.note,
                  user_profile_id: Number(_this.id_user),
                  user_id: _this.user.id,
                  customer_id: _this.id_customer,
                  entity: 'customers'
                };
                _context.prev = 6;
                _context.next = 9;
                return NoteResourse.saveNoteUser(formData);

              case 9:
                _this.getNote();

                $("#editor").val('');
                $('#editor').summernote('code', '');
                console.log('el valor es', $("#editor").val());
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](6);

                _this.$swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  text: 'Ocurrio un problema al guardar la nota'
                });

                console.log(_context.t0);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 15]]);
      }))();
    },
    getNote: function getNote() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return NoteResourse.getNotesUser(_this2.id_customer, 'customers');

              case 3:
                _this2.notes = _context2.sent;
                _this2.notes = _this2.notes.data.notes;
                console.log(_this2.notes);
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    }
  },
  mounted: function mounted() {
    this.getNote();
    $(function () {
      //SUMMERNOTE
      $('#editor').summernote(); //DATA-TABLE

      $("#example1").DataTable({
        "responsive": false,
        "lengthChange": false,
        "autoWidth": false,
        "buttons": ["copy", "csv", "excel", "pdf", "print"],
        language: {
          "decimal": "",
          "emptyTable": "No hay información",
          "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
          "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
          "infoFiltered": "(Filtrado de _MAX_ total entradas)",
          "infoPostFix": "",
          "thousands": ",",
          "lengthMenu": "Mostrar _MENU_ Entradas",
          "loadingRecords": "Cargando...",
          "processing": "Procesando...",
          "search": "Buscar:",
          "zeroRecords": "Sin resultados encontrados",
          "paginate": {
            "first": "Primero",
            "last": "Ultimo",
            "next": "Siguiente",
            "previous": "Anterior"
          }
        }
      }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/modalFormComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Customers/modalFormComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_Nation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/Nation */ "./resources/js/providers/Nation.js");
/* harmony import */ var _providers_Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/Customer */ "./resources/js/providers/Customer.js");
/* harmony import */ var vue_datetime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-datetime */ "./node_modules/vue-datetime/dist/vue-datetime.js");
/* harmony import */ var vue_datetime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_datetime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var nationResource = new _providers_Nation__WEBPACK_IMPORTED_MODULE_1__["default"]();
var customerResource = new _providers_Customer__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['OpenModalEdit'],
  components: {
    datetime: vue_datetime__WEBPACK_IMPORTED_MODULE_3__["Datetime"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_4__["ValidationObserver"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_4__["ValidationProvider"]
  },
  data: function data() {
    return {
      date: null,
      active_status: false,
      countries: [],
      states: [],
      citys: [],
      texto_boton: 'Guardar contacto',
      form: {
        id: 0,
        name: null,
        last_name: null,
        email: null,
        phone: null,
        birth_date: null,
        sex: 0,
        additional_information: null,
        country: null,
        state: null,
        city: null
      }
    };
  },
  watch: {
    OpenModalEdit: function OpenModalEdit() {
      this.openModal();
    }
  },
  methods: {
    getCountries: function getCountries() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return nationResource.getCountries();

              case 3:
                _this.countries = _context.sent;
                _this.countries = _this.countries.data.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log('error paises', _context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    getStates: function getStates() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _this2.form.state = null;
                _this2.form.city = null;
                _context2.next = 5;
                return nationResource.getState(_this2.form.country.id);

              case 5:
                _this2.states = _context2.sent;
                _this2.states = _this2.states.data.data;
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.log('error estados', _context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }))();
    },
    getCitys: function getCitys() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                console.log(_this3.form.state);
                _this3.form.city = null;
                _context3.next = 5;
                return nationResource.getCity(_this3.form.state.id);

              case 5:
                _this3.citys = _context3.sent;
                _this3.citys = _this3.citys.data.data;
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                console.log('error ciudades', _context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }))();
    },
    saveContact: function saveContact() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _this4.$refs.observer.validate();

              case 3:
                isValid = _context4.sent;

                if (!isValid) {
                  _context4.next = 13;
                  break;
                }

                _context4.next = 7;
                return customerResource.saveCustomer(_this4.form);

              case 7:
                _this4.$swal.fire({
                  icon: 'success',
                  title: 'Bien',
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  text: 'Contacto guardado de forma correcta'
                });

                _this4.clearData();

                _this4.$modal.hide('my-first-modal');

                _this4.$emit('onRefreshTable');

                _context4.next = 14;
                break;

              case 13:
                _this4.$swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  text: 'Verifique que el formulario fue llenado de forma correcta'
                });

              case 14:
                _context4.next = 19;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4["catch"](0);

                _this4.$swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  text: 'Disculpe tuvimos un error'
                });

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 16]]);
      }))();
    },
    updateContact: function updateContact() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _this5.$refs.observer.validate();

              case 3:
                isValid = _context5.sent;

                if (!isValid) {
                  _context5.next = 13;
                  break;
                }

                _context5.next = 7;
                return customerResource.updateCustomer(_this5.form);

              case 7:
                _this5.$swal.fire({
                  icon: 'success',
                  title: 'Bien',
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  text: 'Contacto modificado de forma correcta'
                });

                _this5.clearData();

                _this5.$modal.hide('my-first-modal');

                _this5.$emit('onRefreshTable');

                _context5.next = 14;
                break;

              case 13:
                _this5.$swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  text: 'Verifique que el formulario fue llenado de forma correcta'
                });

              case 14:
                _context5.next = 20;
                break;

              case 16:
                _context5.prev = 16;
                _context5.t0 = _context5["catch"](0);

                _this5.$swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  text: 'Disculpe tuvimos un error'
                });

                console.log(_context5.t0);

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 16]]);
      }))();
    },
    openModal: function openModal() {
      var _arguments = arguments,
          _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var id_contacto, infoCustomer;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                id_contacto = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;

                _this6.clearData();

                if (!(id_contacto != null)) {
                  _context6.next = 22;
                  break;
                }

                _context6.next = 5;
                return customerResource.getCustomer(id_contacto);

              case 5:
                infoCustomer = _context6.sent;
                infoCustomer = infoCustomer.data.data;
                console.log(infoCustomer);
                _this6.form.id = infoCustomer.id;
                _this6.form.name = infoCustomer.name;
                _this6.form.last_name = infoCustomer.last_name;
                _this6.form.email = infoCustomer.email;
                _this6.form.phone = infoCustomer.phone;
                _this6.form.birth_date = infoCustomer.birth_date;
                _this6.form.sex = infoCustomer.sex;
                _this6.form.additional_information = infoCustomer.additional_information;
                _this6.form.country = infoCustomer.country;
                _this6.form.state = infoCustomer.state;
                _this6.form.city = infoCustomer.city;
                _this6.texto_boton = 'Editar contacto';
                _context6.next = 23;
                break;

              case 22:
                _this6.texto_boton = 'Guardar contacto';

              case 23:
                console.log('Estamos aqui');

                if (_this6.$modal.show('my-first-modal')) {
                  console.log('Estamos aqui arribaaa');
                } else {
                  console.log('no esta abierto');
                } //this.$modal.show('my-first-modal');


              case 25:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    validarAbierto: function validarAbierto() {
      if (this.$modal.show('my-first-modal')) {
        console.log('Estamos aqui arribaaa EDIT');
      } else {
        console.log('Estamos no estyamos');
      }
    },
    clearData: function clearData() {
      this.form.name = null;
      this.form.last_name = null;
      this.form.email = null;
      this.form.phone = null;
      this.form.birth_date = null;
      this.form.sex = null;
      this.form.additional_information = null;
      this.form.country = null;
      this.form.state = null;
      this.form.city = null;
    }
  },
  mounted: function mounted() {
    this.getCountries();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/tableComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Customers/tableComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users/Profile/dataUserComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Users/Profile/dataUserComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/User */ "./resources/js/providers/User.js");
/* harmony import */ var _providers_UserPermission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/UserPermission */ "./resources/js/providers/UserPermission.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var UserResource = new _providers_User__WEBPACK_IMPORTED_MODULE_1__["default"]();
var userPermissionResource = new _providers_UserPermission__WEBPACK_IMPORTED_MODULE_2__["default"]();
var NameModule = "Usuarios";
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id_user: {
      // Revisar como convertirlo en número
      required: true
    }
  },
  data: function data() {
    return {
      userProfile: {
        profile: {
          name: null,
          last_name: null
        }
      },
      errors: [],
      permission: [],
      nameProfile: null
    };
  },
  computed: {
    user: function user() {
      return this.$store.state.user;
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getPermission();

            case 2:
              _context.next = 4;
              return _this.getUser();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getPermission: function getPermission() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return userPermissionResource.UserPermissionsByModule(_this2.user.id, NameModule);

              case 2:
                response = _context2.sent.data;

                if (!response.success) {
                  _this2.$router.push({
                    path: '/'
                  });
                }

                _this2.permission = response.data.permission;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getUser: function getUser() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return UserResource.getUser(_this3.id_user);

              case 2:
                response = _context3.sent.data;

                if (response.success) {
                  _context3.next = 6;
                  break;
                }

                _this3.errors.push("Error al obtener usuario.");

                return _context3.abrupt("return", false);

              case 6:
                if (!(response.data == "" || response.data == null)) {
                  _context3.next = 10;
                  break;
                }

                _this3.errors.push("Usuario no existe.");

                setTimeout(function () {
                  _this3.$router.push({
                    path: "/"
                  });
                }, 5000);
                return _context3.abrupt("return", false);

              case 10:
                _this3.userProfile = response.data; // this.nameProfile = ;

                return _context3.abrupt("return", true);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_Note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/Note */ "./resources/js/providers/Note.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var NoteResourse = new _providers_Note__WEBPACK_IMPORTED_MODULE_1__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id_user'],
  data: function data() {
    return {
      note: null,
      notes: []
    };
  },
  computed: {
    user: function user() {
      return this.$store.state.user;
    }
  },
  methods: {
    saveNote: function saveNote() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.note = $("#editor").val();

                if (!(_this.note === null || _this.note === '')) {
                  _context.next = 5;
                  break;
                }

                _this.$swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  text: 'El campo de notas esta vacio'
                });

                _context.next = 19;
                break;

              case 5:
                formData = {
                  note: _this.note,
                  user_profile_id: Number(_this.id_user),
                  user_id: _this.user.id,
                  entity: 'users'
                };
                _context.prev = 6;
                _context.next = 9;
                return NoteResourse.saveNoteUser(formData);

              case 9:
                _this.getNote();

                $("#editor").val('');
                $('#editor').summernote('code', '');
                console.log('el valor es', $("#editor").val());
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](6);

                _this.$swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  text: 'Ocurrio un problema al guardar la nota'
                });

                console.log(_context.t0);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 15]]);
      }))();
    },
    getNote: function getNote() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return NoteResourse.getNotesUser(_this2.id_user);

              case 3:
                _this2.notes = _context2.sent;
                _this2.notes = _this2.notes.data.notes;
                console.log(_this2.notes);
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    }
  },
  mounted: function mounted() {
    this.getNote();
    $(function () {
      //SUMMERNOTE
      $('#editor').summernote(); //DATA-TABLE

      $("#example1").DataTable({
        "responsive": false,
        "lengthChange": false,
        "autoWidth": false,
        "buttons": ["copy", "csv", "excel", "pdf", "print"],
        language: {
          "decimal": "",
          "emptyTable": "No hay información",
          "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
          "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
          "infoFiltered": "(Filtrado de _MAX_ total entradas)",
          "infoPostFix": "",
          "thousands": ",",
          "lengthMenu": "Mostrar _MENU_ Entradas",
          "loadingRecords": "Cargando...",
          "processing": "Procesando...",
          "search": "Buscar:",
          "zeroRecords": "Sin resultados encontrados",
          "paginate": {
            "first": "Primero",
            "last": "Ultimo",
            "next": "Siguiente",
            "previous": "Anterior"
          }
        }
      }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customers/TableView.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Customers/TableView.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_Customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/Customer */ "./resources/js/providers/Customer.js");
/* harmony import */ var _components_Customers_tableComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Customers/tableComponent */ "./resources/js/components/Customers/tableComponent.vue");
/* harmony import */ var _components_Customers_modalFormComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Customers/modalFormComponent */ "./resources/js/components/Customers/modalFormComponent.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var customerResource = new _providers_Customer__WEBPACK_IMPORTED_MODULE_1__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    tableComponent: _components_Customers_tableComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    modalFormComponent: _components_Customers_modalFormComponent__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      customers: [],
      modalEdit: false,
      destroyTable: false
    };
  },
  methods: {
    getCustomers: function getCustomers() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return customerResource.getListCustomer(1);

              case 3:
                _this.customers = _context.sent;
                _this.customers = _this.customers.data.contactos;

                if (_this.destroyTable) {
                  $("#example1").DataTable().destroy();

                  _this.createTable();
                }

                _this.destroyTable = true;
                console.log(_this.customers);
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

                _this.$swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  text: 'Disculpe tuvimos un error para cargar los contactos'
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }))();
    },
    deleteCustomer: function deleteCustomer($id_customer) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return customerResource.deleteCustomer($id_customer);

              case 3:
                _context2.next = 5;
                return _this2.getCustomers();

              case 5:
                _this2.$swal.fire({
                  icon: 'success',
                  title: 'Bien',
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  text: 'Contacto eliminado de forma correcta'
                });

                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);

                _this2.$swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  text: 'Disculpe tuvimos un error para eliminar al contactos'
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    },
    createTable: function createTable() {
      $(function () {
        //SUMMERNOTE
        $('#editor').summernote(); //DATA-TABLE

        $("#example1").DataTable({
          "responsive": false,
          "buttons": ["copy", "csv", "excel", "pdf", "print"],
          language: {
            "decimal": "",
            "emptyTable": "No hay información",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
            "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ Entradas",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "Sin resultados encontrados",
            "paginate": {
              "first": "Primero",
              "last": "Ultimo",
              "next": "Siguiente",
              "previous": "Anterior"
            }
          }
        }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.getCustomers();

            case 2:
              _this3.createTable();

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customers/profileView.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Customers/profileView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Customers_info_dataComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Customers/info/dataComponent */ "./resources/js/components/Customers/info/dataComponent.vue");
/* harmony import */ var _components_Customers_info_infoComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Customers/info/infoComponent */ "./resources/js/components/Customers/info/infoComponent.vue");
/* harmony import */ var _providers_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/Auth */ "./resources/js/providers/Auth.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var AuthResourse = new _providers_Auth__WEBPACK_IMPORTED_MODULE_3__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id'],
  name: "login-component",
  components: {
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0__["ValidationObserver"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0__["ValidationProvider"],
    dataCustomerComponent: _components_Customers_info_dataComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    infoCustomerComponent: _components_Customers_info_infoComponent__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      email: null,
      password: null,
      show_error: false,
      message: null,
      disabled: true
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/OverviewComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/OverviewComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/Auth */ "./resources/js/providers/Auth.js");
/* harmony import */ var _providers_UserPermission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/UserPermission */ "./resources/js/providers/UserPermission.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var AuthResourse = new _providers_Auth__WEBPACK_IMPORTED_MODULE_1__["default"]();
var userPermissionResource = new _providers_UserPermission__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      usuarioActual: null
    };
  },
  methods: {
    logout: function logout() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return AuthResourse.logout();

              case 3:
                _this.user = _context.sent;
                localStorage.removeItem('data_user');
                window.location.href = '/login';
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    },
    permisos: function permisos() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _this2.usuarioActual = JSON.parse(localStorage.getItem('data_user'));
                _context2.next = 4;
                return userPermissionResource.UserPermissions(_this2.usuarioActual.user.id);

              case 4:
                response = _context2.sent.data;
                localStorage.setItem('permits_user', JSON.stringify(response.data));
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }))();
    }
  },
  computed: {
    user: function user() {
      return this.$store.state.user;
    }
  },
  mounted: function mounted() {
    this.$store.dispatch('SET_CURRENT_USER');
    this.permisos();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login/LoginComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Login/LoginComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _providers_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/Auth */ "./resources/js/providers/Auth.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var AuthResourse = new _providers_Auth__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "login-component",
  components: {
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"]
  },
  data: function data() {
    return {
      email: null,
      password: null,
      show_error: false,
      message: null,
      disabled: true
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isValid, formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.show_error = false;
                _context.next = 3;
                return _this.$refs.observer.validate();

              case 3:
                isValid = _context.sent;

                if (!isValid) {
                  _this.message = "Verifique que el formulario fue llenado de forma correcta";
                  _this.show_error = true;
                } else {
                  formData = {
                    email: _this.email,
                    password: _this.password
                  };
                  AuthResourse.login(formData).then(function (response) {
                    _this.show_error = false;
                    localStorage.setItem('data_user', JSON.stringify(response.data));
                    window.location.href = '/overview';
                  })["catch"](function (err) {
                    var error = err.response;
                    _this.message = _this.statusCode(error.status);
                    _this.show_error = true;
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    statusCode: function statusCode(status) {
      switch (status) {
        case 401:
          return 'Usuario o contraseña incorrectos';

        case 422:
          return 'Favor de llenar todos los campos';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login/NewPassword.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Login/NewPassword.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _providers_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/User */ "./resources/js/providers/User.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Object(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["extend"])('password', {
  params: ['target'],
  validate: function validate(value, _ref) {
    var target = _ref.target;
    return value === target;
  },
  message: 'Las contraseñas no coinciden.'
});
var UserResourse = new _providers_User__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['token'],
  components: {
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"]
  },
  data: function data() {
    return {
      formData: {
        password: null
      },
      confirmation_password: null,
      exist_token: true,
      password_update: false,
      disabled_button: false
    };
  },
  methods: {
    getTokenPassword: function getTokenPassword() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var $info;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return UserResourse.validateTokenPassword(_this.token);

              case 3:
                $info = _context.sent;
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                _this.exist_token = false;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }))();
    },
    updatePassword: function updatePassword() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this2.$refs.observer.validate();

              case 3:
                isValid = _context2.sent;

                if (!isValid) {
                  _context2.next = 13;
                  break;
                }

                _this2.disabled_button = true;
                _context2.next = 8;
                return UserResourse.updatePassword(_this2.token, _this2.formData);

              case 8:
                _this2.password_update = true;
                _this2.exist_token = false;

                _this2.$swal.fire({
                  icon: 'success',
                  title: 'Bien',
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  text: 'Contraseña modificada'
                });

                _context2.next = 14;
                break;

              case 13:
                _this2.$swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  text: 'Verifique que el formulario fue llenado de forma correcta'
                });

              case 14:
                _context2.next = 20;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](0);
                _this2.disabled_button = false;

                _this2.$swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  toast: true,
                  position: 'top',
                  timer: 3000,
                  showConfirmButton: false,
                  timerProgressBar: true,
                  text: 'Disculpe tuvimos un error'
                });

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 16]]);
      }))();
    }
  },
  mounted: function mounted() {
    this.getTokenPassword();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login/RestorePassword.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Login/RestorePassword.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _providers_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/User */ "./resources/js/providers/User.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var UserResourse = new _providers_User__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      formData: {
        email: null
      },
      message_error: '',
      show_confirmation: false,
      disabled_button: false
    };
  },
  components: {
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"]
  },
  methods: {
    restorePassword: function restorePassword() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$refs.observer.validate();

              case 2:
                isValid = _context.sent;

                if (isValid) {
                  _this.disabled_button = true;
                  UserResourse.restorePassword(_this.formData).then(function (data) {
                    _this.show_confirmation = true;
                    console.log(data);

                    _this.$swal.fire({
                      icon: 'success',
                      title: 'Bien',
                      toast: true,
                      position: 'top',
                      timer: 3000,
                      showConfirmButton: false,
                      timerProgressBar: true,
                      text: 'Contraseña solicitada correctamente'
                    });

                    _this.disabled_button = false;
                  })["catch"](function (err) {
                    var error = err.response;
                    _this.message_error = _this.statusCode(error.status);

                    _this.$swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      toast: true,
                      position: 'top',
                      timer: 3000,
                      showConfirmButton: false,
                      timerProgressBar: true,
                      text: _this.message_error
                    });

                    _this.disabled_button = false;
                  });
                } else {
                  _this.$swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    toast: true,
                    position: 'top',
                    timer: 3000,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    text: 'El formulario no fue llenado correctamente'
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    statusCode: function statusCode(status) {
      switch (status) {
        case 422:
          return 'El email ingresado no tiene cuenta';

        case 500:
          return 'Error al enviar email';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/UserComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/UserComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/User */ "./resources/js/providers/User.js");
/* harmony import */ var _providers_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/Profile */ "./resources/js/providers/Profile.js");
/* harmony import */ var _components_Contacts_contactsComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Contacts/contactsComponent.vue */ "./resources/js/components/Contacts/contactsComponent.vue");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var UserResource = new _providers_User__WEBPACK_IMPORTED_MODULE_1__["default"]();
var ProfileResource = new _providers_Profile__WEBPACK_IMPORTED_MODULE_2__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "create-user-component",
  props: {
    id: {
      // Revisar como convertirlo en número
      required: false
    }
  },
  components: {
    ContactsComponent: _components_Contacts_contactsComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_4__["ValidationObserver"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_4__["ValidationProvider"]
  },
  data: function data() {
    return {
      profileErrors: [],
      userErrors: [],
      successProfileMessage: "",
      successUserMessage: "",
      newUser: false,
      user: null,
      profile: null,
      ContactId: null,
      ProfileId: null,
      // Usuario
      email: null,
      emailConfirm: null,
      password: null,
      statusUser: 1,
      // Perfil
      name: null,
      lastName: null,
      birthDate: null,
      sex: 0
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.id != undefined)) {
                _context.next = 10;
                break;
              }

              _context.next = 3;
              return _this.getUser();

            case 3:
              if (!_context.sent) {
                _context.next = 8;
                break;
              }

              _context.next = 6;
              return _this.getProfile();

            case 6:
              _context.next = 9;
              break;

            case 8:
              setTimeout(function () {
                _this.$router.push("/users");
              }, 3000);

            case 9:
              return _context.abrupt("return");

            case 10:
              _this.newUser = _this.id == undefined || _this.user == "" || _this.user == null;
              _this.status = 1;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    chechIdUser: function chechIdUser() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.id == undefined || _this2.user == null)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", false);

              case 2:
                return _context2.abrupt("return", true);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getUser: function getUser() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return UserResource.getUser(_this3.id);

              case 2:
                response = _context3.sent.data;

                if (response.success) {
                  _context3.next = 6;
                  break;
                }

                _this3.userErrors.push("Error al obtener usuario.");

                return _context3.abrupt("return", false);

              case 6:
                _this3.user = response.data;

                if (!(_this3.user == "" || _this3.user == null)) {
                  _context3.next = 10;
                  break;
                }

                _this3.userErrors.push("Usuario no existe.");

                return _context3.abrupt("return", false);

              case 10:
                _this3.email = _this3.user.email;
                _this3.emailConfirm = _this3.user.email;
                _this3.statusUser = _this3.user.status;
                _this3.ContactId = _this3.user.contact_id;
                _this3.ProfileId = _this3.user.profile_id;
                return _context3.abrupt("return", true);

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getProfile: function getProfile() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this4.newUser) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                _context4.next = 4;
                return ProfileResource.getProfile(_this4.user.profile_id);

              case 4:
                response = _context4.sent.data;

                if (response.success) {
                  _context4.next = 8;
                  break;
                }

                _this4.userErrors.push("Error al obtener perfil.");

                return _context4.abrupt("return");

              case 8:
                _this4.profile = response.data;

                if (!(_this4.profile == "")) {
                  _context4.next = 12;
                  break;
                }

                _this4.userErrors.push("Perfil no existe.");

                return _context4.abrupt("return");

              case 12:
                _this4.name = _this4.profile.name;
                _this4.lastName = _this4.profile.last_name;
                _this4.birthDate = _this4.profile.birth_date;
                _this4.sex = _this4.profile.sex;

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    getUserForm: function getUserForm() {
      return {
        email: this.email,
        password: this.password,
        status: +this.statusUser,
        level: 1,
        profile_id: this.ProfileId,
        contact_id: this.ContactId
      };
    },
    getProfileForm: function getProfileForm() {
      return {
        name: this.name,
        last_name: this.lastName,
        birth_date: this.birthDate,
        sex: +this.sex
      };
    },
    saveContent: function saveContent() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var contactResponse, profileErrors, userErrors, allErrors, saveContactResponse, saveProfileResponse, saveUserResponse;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                contactResponse = _this5.$refs.contactComponent.isValidContactForm();
                profileErrors = _this5.isValidProfileForm();
                userErrors = _this5.isValidUserForm();
                allErrors = contactResponse.concat(profileErrors).concat(userErrors);

                if (!(allErrors.length > 0)) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return");

              case 6:
                _context5.next = 8;
                return _this5.$refs.contactComponent.saveContact();

              case 8:
                saveContactResponse = _context5.sent;

                if (!saveContactResponse.success) {
                  _context5.next = 13;
                  break;
                }

                _this5.ContactId = saveContactResponse.data.id;
                _context5.next = 14;
                break;

              case 13:
                return _context5.abrupt("return");

              case 14:
                _context5.next = 16;
                return _this5.saveProfile();

              case 16:
                saveProfileResponse = _context5.sent;

                if (!saveProfileResponse.success) {
                  _context5.next = 22;
                  break;
                }

                _this5.ProfileId = saveProfileResponse.data.id;
                _this5.successProfileMessage = "Perfil guardado correctamente.";
                _context5.next = 23;
                break;

              case 22:
                return _context5.abrupt("return");

              case 23:
                _context5.next = 25;
                return _this5.saveUser();

              case 25:
                saveUserResponse = _context5.sent;

                if (saveUserResponse.success) {
                  _context5.next = 28;
                  break;
                }

                return _context5.abrupt("return");

              case 28:
                _this5.successUserMessage = "Usuario guardado correctamente.";

                if (_this5.newUser) {
                  setTimeout(function () {
                    _this5.$router.push({
                      name: "EditUser",
                      params: {
                        id: +saveUserResponse.data.id
                      }
                    });
                  }, 3000);
                }

              case 30:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    saveUser: function saveUser() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var response, formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.userErrors = [];
                response = null;
                formData = _this6.getUserForm();

                if (!_this6.newUser) {
                  _context6.next = 9;
                  break;
                }

                _context6.next = 6;
                return _this6.saveNewUser(formData);

              case 6:
                response = _context6.sent;
                _context6.next = 12;
                break;

              case 9:
                _context6.next = 11;
                return _this6.saveEditUser(formData);

              case 11:
                response = _context6.sent;

              case 12:
                if (!response.success) {
                  _this6.userErrors.push("Error al guardar el usuario.");
                }

                return _context6.abrupt("return", response);

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    saveProfile: function saveProfile() {
      var _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var response, formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this7.profileErrors = [];
                response = null;
                formData = _this7.getProfileForm();

                if (!_this7.newUser) {
                  _context7.next = 9;
                  break;
                }

                _context7.next = 6;
                return _this7.saveNewProfile(formData);

              case 6:
                response = _context7.sent;
                _context7.next = 12;
                break;

              case 9:
                _context7.next = 11;
                return _this7.saveEditProfile(formData);

              case 11:
                response = _context7.sent;

              case 12:
                if (!response.success) {
                  _this7.profileErrors.push("Error al guardar el perfil.");
                }

                return _context7.abrupt("return", response);

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    saveNewUser: function saveNewUser(formData) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return UserResource.createUser(formData);

              case 2:
                response = _context8.sent.data;
                return _context8.abrupt("return", response);

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    saveEditUser: function saveEditUser(formData) {
      var _this8 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return UserResource.updateUser(_this8.id, formData);

              case 2:
                response = _context9.sent.data;
                return _context9.abrupt("return", response);

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    saveNewProfile: function saveNewProfile(formData) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return ProfileResource.createProfile(formData);

              case 2:
                response = _context10.sent.data;
                return _context10.abrupt("return", response);

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    saveEditProfile: function saveEditProfile(formData) {
      var _this9 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return ProfileResource.updateProfile(_this9.id, formData);

              case 2:
                response = _context11.sent.data;
                return _context11.abrupt("return", response);

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    isValidUserForm: function isValidUserForm() {
      var errors = [];

      if (!this.newUser) {
        this.emailConfirm = this.email;
      }

      if (this.email != this.emailConfirm) {
        errors.push("Correos no coinciden.");
      }

      if (this.password == "") {
        errors.push("Contraseña no puede estar vacio.");
      }

      this.userErrors = errors;
      return errors;
    },
    isValidProfileForm: function isValidProfileForm() {
      var errors = [];

      if (this.name == null || this.name == "") {
        errors.push("Nombre no puede estar vacio.");
      }

      if (this.lastName == null || this.lastName == "") {
        errors.push("Apellido no puede estar vacio.");
      }

      if (this.birthDate == null || this.birthDate == "") {
        errors.push("Fecha de nacimiento no puede estar vacio.");
      }

      if (this.sex == null || this.sex == 0) {
        errors.push("Sexo no puede estar vacio.");
      }

      this.profileErrors = errors;
      return errors;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Users.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/Users.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/User */ "./resources/js/providers/User.js");
/* harmony import */ var _providers_UserPermission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/UserPermission */ "./resources/js/providers/UserPermission.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var userResource = new _providers_User__WEBPACK_IMPORTED_MODULE_1__["default"]();
var userPermissionResource = new _providers_UserPermission__WEBPACK_IMPORTED_MODULE_2__["default"]();
var UserNameModule = "Usuarios";
var PermissionNameModule = "Permisos";
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "users-get",
  props: {
    event: 0
  },
  data: function data() {
    return {
      users: "",
      message: null,
      showError: null,
      showSuccess: null,
      showWarning: null,
      userPermission: [],
      permissionPermission: []
    };
  },
  computed: {
    user: function user() {
      return this.$store.state.user;
    }
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.setPermissions();

            case 2:
              _this.obtenerUsuarios();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    setPermissions: function setPermissions() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.getPermission(UserNameModule);

              case 2:
                _this2.userPermission = _context2.sent;
                _context2.next = 5;
                return _this2.getPermission(PermissionNameModule);

              case 5:
                _this2.permissionPermission = _context2.sent;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getPermission: function getPermission(name) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return userPermissionResource.UserPermissionsByModule(_this3.user.id, name);

              case 2:
                response = _context3.sent.data;

                if (!response.success) {
                  _this3.$router.push({
                    name: 'notauthorized'
                  });
                }

                return _context3.abrupt("return", response.data.permission);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    obtenerUsuarios: function obtenerUsuarios() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return userResource.getUsers();

              case 3:
                response = _context4.sent.data;

                if (response.success) {
                  _this4.users = response.data;
                  $("#usersTable").DataTable().destroy();

                  _this4.tableusers();
                } else {
                  _this4.message = "Lista de usuarios vacia";
                  _this4.showWarning = true;
                }

                _context4.next = 11;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                _this4.message = "No se pudo obtener usuarios";
                _this4.showError = true;

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }))();
    },
    deleteUser: function deleteUser($id) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!confirm("¿Esta seguro que desea eliminarlo?")) {
                  _context5.next = 12;
                  break;
                }

                _context5.prev = 1;
                _context5.next = 4;
                return userResource.deleteUsers($id);

              case 4:
                response = _context5.sent.data;

                if (response.success) {
                  _this5.message = "El usuario se ha eliminado correctamente", _this5.showSuccess = true;

                  _this5.obtenerUsuarios();
                } else {
                  _this5.message = "No se pudo eliminar el usuario";
                  _this5.showError = true;
                }

                _context5.next = 12;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](1);
                _this5.message = "No se pudo eliminar el usuario";
                _this5.showError = true;

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 8]]);
      }))();
    },
    // habilitarbotones(){
    //   $("#delete").on("click", function(){
    //     console.log(this.delete);
    //    return this.permitsModuls[0]["delete"];
    //   //  if(this.delete==1) {
    //   //     $(this).prop('disabled', true);
    //   //  }else {
    //   //     $(this).prop('disabled', false);
    //   //  }
    //   });
    // },
    fechaFormato: function fechaFormato($fecha) {
      if ($fecha == null || $fecha == undefined) {
        return "-";
      }

      return moment__WEBPACK_IMPORTED_MODULE_3___default()($fecha).format("DD/MM/YYYY");
    },
    tableusers: function tableusers() {
      this.$nextTick(function () {
        $("#usersTable").DataTable({
          lengthChange: false,
          searching: true,
          ordering: true,
          info: true,
          autoWidth: true,
          responsive: true,
          buttons: [{
            extend: "copyHtml5",
            text: "<i class='fas fa-copy'></i> Copiar",
            titleAttr: "Copiar",
            ClassName: "btn btn-secundary"
          }, {
            extend: "excelHtml5",
            text: "<i class='fas fa-file-excel'></i> Excel",
            titleAttr: "Exportar a Excel",
            ClassName: "btn btn-success"
          }, {
            extend: "pdfHtml5",
            text: "<i class='fas fa-file-pdf'></i> PDF",
            titleAttr: "Exportar a PDF",
            ClassName: "btn btn-danger"
          }, {
            extend: "csvHtml5",
            text: "<i class='fas fa-file-csv'></i> CSV",
            titleAttr: "Exportar a CSV",
            ClassName: "btn btn-info"
          }, {
            extend: "print",
            text: "<i class='fas fa-print'></i> Imprimir",
            titleAttr: "Imprimir",
            ClassName: "btn btn-secondary"
          }, {
            extend: "colvis",
            text: "Columnas Visibles",
            titleAttr: "Columnas visibles",
            ClassName: "btn btn-info"
          }],
          oLanguage: {
            sSearch: "Busqueda",
            oPaginate: {
              sNext: "Siguiente",
              sFirst: "Primero",
              sLast: "Ultimo",
              sPrevious: "Anterior"
            },
            sEmptyTable: "No hay Registros",
            sInfo: "Mostrando _START_ a _END_ de _TOTAL_ entradas",
            sInfoEmpty: "No hay entradas que mostrar"
          }
        }).buttons().container().appendTo("#usersTable_wrapper .col-md-6:eq(0)");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/permissionUsers.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/permissionUsers.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_UserPermission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/UserPermission */ "./resources/js/providers/UserPermission.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var userPermissionResource = new _providers_UserPermission__WEBPACK_IMPORTED_MODULE_1__["default"]();
var NameModule = "Permisos";
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "users-permissions",
  props: ["id"],
  data: function data() {
    return {
      permissions: "",
      permissionPermission: [],
      errors: []
    };
  },
  computed: {
    user: function user() {
      return this.$store.state.user;
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getPermission();

            case 2:
              if (_context.sent) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              _this.obtenerPermisos();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getPermission: function getPermission() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return userPermissionResource.UserPermissionsByModule(_this2.user.id, NameModule);

              case 2:
                response = _context2.sent.data;

                if (response.success) {
                  _context2.next = 7;
                  break;
                }

                _this2.errors.push("Error al obtener información.");

                setTimeout(function () {
                  _this2.$router.push({
                    path: '/'
                  });
                }, 3000);
                return _context2.abrupt("return", false);

              case 7:
                _this2.permissionPermission = response.data.permission;
                return _context2.abrupt("return", true);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    obtenerPermisos: function obtenerPermisos() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return userPermissionResource.UserPermissions(_this3.id);

              case 3:
                response = _context3.sent.data;

                if (response.success) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return");

              case 6:
                _this3.permissions = response.data;
                $("#permissionsTable").DataTable().destroy();

                _this3.tablePermits();

                _context3.next = 15;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

                _this3.errors.push("No se pudo obtener permisos de usuarios.");

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }))();
    },
    check: function check(module_id, name, checked) {
      var _this4 = this;

      this.$nextTick(function () {
        if (!_this4.permissionPermission.update) {
          _this4.errors.push("No tienes permiso para hacer este cambio.");

          return;
        }

        var formData = {
          module_id: module_id,
          user_id: _this4.id,
          column: name,
          value: checked ? 1 : 0
        };

        try {
          _this4.modules = userPermissionResource.updatePermits(formData);
        } catch (error) {
          console.log(error);

          _this4.errors.push("No se pudo actualizar permisos del usuario.");
        }
      });
    },
    tablePermits: function tablePermits() {
      this.$nextTick(function () {
        $("#permissionsTable").DataTable({
          lengthChange: false,
          searching: true,
          ordering: false,
          info: false,
          autoWidth: true,
          responsive: true,
          buttons: [],
          oLanguage: {
            sSearch: "Busqueda",
            oPaginate: {
              sNext: "Siguiente",
              sFirst: "Primero",
              sLast: "Ultimo",
              sPrevious: "Anterior"
            },
            sEmptyTable: "No hay Registros",
            sInfo: "Mostrando _START_ a _END_ de _TOTAL_ entradas",
            sInfoEmpty: "No hay entradas que mostrar"
          }
        }).buttons().container().appendTo("#permissionsTable_wrapper .col-md-6:eq(0)");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/profileView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/profileView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Users_Profile_dataUserComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Users/Profile/dataUserComponent */ "./resources/js/components/Users/Profile/dataUserComponent.vue");
/* harmony import */ var _components_Users_Profile_infoUserComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Users/Profile/infoUserComponent */ "./resources/js/components/Users/Profile/infoUserComponent.vue");
/* harmony import */ var _providers_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/Auth */ "./resources/js/providers/Auth.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var AuthResourse = new _providers_Auth__WEBPACK_IMPORTED_MODULE_4__["default"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["id"],
  name: "login-component",
  components: {
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"],
    dataUserComponent: _components_Users_Profile_dataUserComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    infoUserComponent: _components_Users_Profile_infoUserComponent__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      email: null,
      password: null,
      show_error: false,
      message: null,
      disabled: true
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isValid, formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$refs.observer.validate();

              case 2:
                isValid = _context.sent;

                if (!isValid) {
                  alert("Verifique que el formulario fue llenado de forma correcta");
                } else {
                  formData = {
                    email: _this.email,
                    password: _this.password
                  };
                  AuthResourse.login(formData).then(function (response) {
                    //localStorage.setItem('user', JSON.stringify(miObjeto));
                    _this.show_error = false;
                    localStorage.setItem("data_user", JSON.stringify(response.data));
                    window.location.href = "/overview"; //this.$router.push({name: 'Overview'})
                  })["catch"](function (err) {
                    var error = err.response;
                    _this.message = _this.statusCode(error.status);
                    _this.show_error = true;
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    statusCode: function statusCode(status) {
      switch (status) {
        case 401:
          return "Usuario o contraseña incorrectos";

        case 422:
          return "Favor de llenar todos los campos";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/bootstrap/dist/js/bootstrap.js'");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-datetime/dist/vue-datetime.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-datetime/dist/vue-datetime.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/postcss-loader/src/index.js):\nError: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/vue-datetime/dist/vue-datetime.css'");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contacts/contactsComponent.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Contacts/contactsComponent.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.no-arrow {\n  -moz-appearance: textfield;\n}\n.no-arrow::-webkit-inner-spin-button {\n  display: none;\n}\n.no-arrow::-webkit-outer-spin-button,\n.no-arrow::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/info/infoComponent.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Customers/info/infoComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#settings div.dataTables_wrapper div.row div.col-sm-12.col-md-6 {\n\n    flex: 0 0 100%;\n    max-width: 100%;\n    margin-top: 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#settings div.dataTables_wrapper div.row div.col-sm-12.col-md-6 {\n\n    flex: 0 0 100%;\n    max-width: 100%;\n    margin-top: 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/index.vue?vue&type=style&index=1&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/index.vue?vue&type=style&index=1&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.logout {\n  color: #fff;\n  border: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/postcss-loader/src/index.js):\nError: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/vue-multiselect/dist/vue-multiselect.min.css'");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/css-loader/lib/css-base.js'");

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/jquery/dist/jquery.js'");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/lodash/lodash.js'");

/***/ }),

/***/ "./node_modules/luxon/build/cjs-browser/luxon.js":
/*!*******************************************************!*\
  !*** ./node_modules/luxon/build/cjs-browser/luxon.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/luxon/build/cjs-browser/luxon.js'");

/***/ }),

/***/ "./node_modules/moment-timezone/index.js":
/*!***********************************************!*\
  !*** ./node_modules/moment-timezone/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/moment-timezone/index.js'");

/***/ }),

/***/ "./node_modules/moment/moment.js":
/*!***************************************!*\
  !*** ./node_modules/moment/moment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/moment/moment.js'");

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/popper.js/dist/esm/popper.js'");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contacts/contactsComponent.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Contacts/contactsComponent.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./contactsComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contacts/contactsComponent.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/info/infoComponent.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Customers/info/infoComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./infoComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/info/infoComponent.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./infoUserComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/index.vue?vue&type=style&index=1&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/index.vue?vue&type=style&index=1&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/index.vue?vue&type=style&index=1&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!./vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/style-loader/lib/addStyles.js'");

/***/ }),

/***/ "./node_modules/v-select2-component/dist/Select2.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/v-select2-component/dist/Select2.esm.js ***!
  \**************************************************************/
/*! exports provided: default, install */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/v-select2-component/dist/Select2.esm.js'");

/***/ }),

/***/ "./node_modules/vee-validate/dist/locale/es.json":
/*!*******************************************************!*\
  !*** ./node_modules/vee-validate/dist/locale/es.json ***!
  \*******************************************************/
/*! exports provided: code, messages, default */
/***/ (function(module) {

!(function webpackMissingModule() { var e = new Error("Cannot find module 'vee-validate/dist/locale/es.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/***/ }),

/***/ "./node_modules/vee-validate/dist/vee-validate.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/vee-validate/dist/vee-validate.esm.js ***!
  \************************************************************/
/*! exports provided: ValidationObserver, ValidationProvider, configure, extend, localeChanged, localize, normalizeRules, setInteractionMode, validate, version, withValidation */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/vee-validate/dist/vee-validate.esm.js'");

/***/ }),

/***/ "./node_modules/vee-validate/dist/vee-validate.full.js":
/*!*************************************************************!*\
  !*** ./node_modules/vee-validate/dist/vee-validate.full.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/vee-validate/dist/vee-validate.full.js'");

/***/ }),

/***/ "./node_modules/vue-datetime/dist/vue-datetime.css":
/*!*********************************************************!*\
  !*** ./node_modules/vue-datetime/dist/vue-datetime.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./vue-datetime.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-datetime/dist/vue-datetime.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-datetime/dist/vue-datetime.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-datetime/dist/vue-datetime.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/vue-datetime/dist/vue-datetime.js'");

/***/ }),

/***/ "./node_modules/vue-js-modal/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vue-js-modal/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/vue-js-modal/dist/index.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Address/addressComponent.vue?vue&type=template&id=0d153d8f&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Address/addressComponent.vue?vue&type=template&id=0d153d8f& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card card-success" }, [
    _c("div", { staticClass: "card-header" }, [
      _vm.newAddress
        ? _c("h3", { staticClass: "card-title" }, [
            _vm._v("Agregar nueva dirección")
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.newAddress
        ? _c("h3", { staticClass: "card-title" }, [_vm._v("Editar dirección")])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("transition", { attrs: { name: "fade" } }, [
          _vm.errors.length > 0
            ? _c("div", { staticClass: "alert alert-danger" }, [
                _c(
                  "ul",
                  _vm._l(_vm.errors, function(e, index) {
                    return _c("li", { key: index }, [_vm._v(_vm._s(e))])
                  }),
                  0
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.successMessage.length > 0
            ? _c("div", { staticClass: "alert alert-success" }, [
                _vm._v("\n        " + _vm._s(_vm.successMessage) + "\n      ")
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "form-group col-12" }, [
            _c("label", { attrs: { for: "street" } }, [_vm._v("Calle")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.street,
                  expression: "street"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", name: "street", placeholder: "" },
              domProps: { value: _vm.street },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.street = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-6" }, [
            _c("label", { attrs: { for: "street1" } }, [_vm._v("Calle 1")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.street1,
                  expression: "street1"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", name: "street1", placeholder: "" },
              domProps: { value: _vm.street1 },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.street1 = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-6" }, [
            _c("label", { attrs: { for: "street2" } }, [_vm._v("Calle 2")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.street2,
                  expression: "street2"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", name: "street2", placeholder: "" },
              domProps: { value: _vm.street2 },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.street2 = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-4" }, [
            _c("label", { attrs: { for: "references" } }, [
              _vm._v("Referencias")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.references,
                  expression: "references"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", name: "references", placeholder: "" },
              domProps: { value: _vm.references },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.references = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-4" }, [
            _c("label", { attrs: { for: "suburb" } }, [
              _vm._v("Suburbio/Fraccionamiento/Region")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.suburb,
                  expression: "suburb"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", name: "suburb", placeholder: "" },
              domProps: { value: _vm.suburb },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.suburb = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-4" }, [
            _c("label", { attrs: { for: "postalCode" } }, [
              _vm._v("Código postal")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.number",
                  value: _vm.postalCode,
                  expression: "postalCode",
                  modifiers: { number: true }
                }
              ],
              staticClass: "form-control no-arrow",
              attrs: {
                type: "number",
                name: "postalCode",
                min: "0",
                placeholder: ""
              },
              domProps: { value: _vm.postalCode },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.postalCode = _vm._n($event.target.value)
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-6" }, [
            _c("label", { attrs: { for: "interiorNumber" } }, [
              _vm._v("Número Interior")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.number",
                  value: _vm.interiorNumber,
                  expression: "interiorNumber",
                  modifiers: { number: true }
                }
              ],
              staticClass: "form-control no-arrow",
              attrs: {
                type: "number",
                name: "interiorNumber",
                min: "0",
                placeholder: ""
              },
              domProps: { value: _vm.interiorNumber },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.interiorNumber = _vm._n($event.target.value)
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group col-6" }, [
            _c("label", { attrs: { for: "exteriorNumber" } }, [
              _vm._v("Número Exterior")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model.number",
                  value: _vm.exteriorNumber,
                  expression: "exteriorNumber",
                  modifiers: { number: true }
                }
              ],
              staticClass: "form-control no-arrow",
              attrs: {
                type: "number",
                name: "exteriorNumber",
                min: "0",
                placeholder: ""
              },
              domProps: { value: _vm.exteriorNumber },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.exteriorNumber = _vm._n($event.target.value)
                },
                blur: function($event) {
                  return _vm.$forceUpdate()
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group col-4" },
            [
              _c("label", { attrs: { for: "country" } }, [_vm._v("País")]),
              _vm._v(" "),
              _c("multiselect", {
                attrs: {
                  label: "country",
                  "track-by": "id",
                  options: _vm.countries,
                  searchable: true,
                  "show-labels": false,
                  placeholder: "Seleccionar un pais"
                },
                on: {
                  input: function($event) {
                    return _vm.getStates()
                  }
                },
                model: {
                  value: _vm.form.country,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "country", $$v)
                  },
                  expression: "form.country"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group col-4" },
            [
              _c("label", { attrs: { for: "state" } }, [_vm._v("Estado")]),
              _vm._v(" "),
              _c("multiselect", {
                attrs: {
                  label: "name",
                  "track-by": "id",
                  options: _vm.states,
                  searchable: true,
                  "show-labels": false,
                  placeholder: "Seleccionar un estado"
                },
                on: {
                  input: function($event) {
                    return _vm.getCitys()
                  }
                },
                model: {
                  value: _vm.form.state,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "state", $$v)
                  },
                  expression: "form.state"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group col-4" },
            [
              _c("label", { attrs: { for: "city" } }, [_vm._v("Ciudad")]),
              _vm._v(" "),
              _c("multiselect", {
                attrs: {
                  label: "city",
                  "track-by": "id",
                  options: _vm.cities,
                  searchable: true,
                  "show-labels": false,
                  placeholder: "Seleccionar una ciudad"
                },
                model: {
                  value: _vm.form.city,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "city", $$v)
                  },
                  expression: "form.city"
                }
              })
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contacts/contactsComponent.vue?vue&type=template&id=8346024e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Contacts/contactsComponent.vue?vue&type=template&id=8346024e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "card card-warning" }, [
        _c("div", { staticClass: "card-header" }, [
          _vm.newContact
            ? _c("h3", { staticClass: "card-title" }, [
                _vm._v("Agregar nuevo contacto")
              ])
            : _vm._e(),
          _vm._v(" "),
          !_vm.newContact
            ? _c("h3", { staticClass: "card-title" }, [
                _vm._v("Editar contacto")
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("transition", { attrs: { name: "fade" } }, [
              _vm.errors.length > 0
                ? _c("div", { staticClass: "alert alert-danger" }, [
                    _c(
                      "ul",
                      _vm._l(_vm.errors, function(e, index) {
                        return _c("li", { key: index }, [_vm._v(_vm._s(e))])
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.successMessage.length > 0
                ? _c("div", { staticClass: "alert alert-success" }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.successMessage) +
                        "\n          "
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: false,
                    expression: "false"
                  }
                ],
                staticClass: "form-group"
              },
              [
                _c("label", { attrs: { for: "typeContact" } }, [
                  _vm._v("Tipo de contacto")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model.number",
                        value: _vm.typeContact,
                        expression: "typeContact",
                        modifiers: { number: true }
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "typeContact" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return _vm._n(val)
                          })
                        _vm.typeContact = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("Usuario")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Proveedor")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [_vm._v("Cliente")])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "rfcContact" } }, [_vm._v("RFC")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.rfcContact,
                    expression: "rfcContact"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  name: "rfcContact",
                  placeholder: "CUPU800825569"
                },
                domProps: { value: _vm.rfcContact },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.rfcContact = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "typePerson" } }, [
                _vm._v("Tipo persona")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model.number",
                      value: _vm.typePerson,
                      expression: "typePerson",
                      modifiers: { number: true }
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { name: "typePerson" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return _vm._n(val)
                        })
                      _vm.typePerson = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "1" } }, [_vm._v("Física")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "2" } }, [_vm._v("Moral")])
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("label", { attrs: { for: "emailsContact" } }, [
                  _vm._v("Correos electrónicos")
                ]),
                _vm._v(" "),
                _vm._l(_vm.emailsContact, function(email, index) {
                  return _c(
                    "div",
                    { key: index + "email", staticClass: "input-group mb-3" },
                    [
                      _vm._m(0, true),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.emailsContact[index],
                            expression: "emailsContact[index]"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "email",
                          name: "emailsContact",
                          placeholder: "john.doe@mail.com"
                        },
                        domProps: { value: _vm.emailsContact[index] },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.emailsContact,
                              index,
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.emailsContact.length > 1
                        ? _c("div", { staticClass: "input-group-append" }, [
                            _c("input", {
                              staticClass: "btn btn-danger",
                              attrs: { type: "button", value: "-" },
                              on: {
                                click: function($event) {
                                  return _vm.emailsContact.splice(index, 1)
                                }
                              }
                            })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.emailsContact.length < 3
                        ? _c("div", { staticClass: "input-group-append" }, [
                            _c("input", {
                              staticClass: "btn btn-success",
                              attrs: { type: "button", value: "+" },
                              on: {
                                click: function($event) {
                                  return _vm.emailsContact.push("")
                                }
                              }
                            })
                          ])
                        : _vm._e()
                    ]
                  )
                })
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("label", { attrs: { for: "emailsContact" } }, [
                  _vm._v("Teléfonos móviles")
                ]),
                _vm._v(" "),
                _vm._l(_vm.mobilesContact, function(mobile, index) {
                  return _c(
                    "div",
                    { key: index + "mobile", staticClass: "input-group mb-3" },
                    [
                      _vm._m(1, true),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.mobilesContact[index],
                            expression: "mobilesContact[index]"
                          }
                        ],
                        staticClass: "form-control no-arrow",
                        attrs: {
                          type: "number",
                          name: "mobilesContact",
                          min: "0",
                          max: "999999999",
                          placeholder: "111 111 11 11"
                        },
                        domProps: { value: _vm.mobilesContact[index] },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.mobilesContact,
                              index,
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.mobilesContact.length > 1
                        ? _c("div", { staticClass: "input-group-append" }, [
                            _c("input", {
                              staticClass: "btn btn-danger",
                              attrs: { type: "button", value: "-" },
                              on: {
                                click: function($event) {
                                  return _vm.mobilesContact.splice(index, 1)
                                }
                              }
                            })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.mobilesContact.length < 3
                        ? _c("div", { staticClass: "input-group-append" }, [
                            _c("input", {
                              staticClass: "btn btn-success",
                              attrs: { type: "button", value: "+" },
                              on: {
                                click: function($event) {
                                  return _vm.mobilesContact.push("")
                                }
                              }
                            })
                          ])
                        : _vm._e()
                    ]
                  )
                })
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("label", { attrs: { for: "emailsContact" } }, [
                  _vm._v("Teléfonos")
                ]),
                _vm._v(" "),
                _vm._l(_vm.phonesContact, function(phone, index) {
                  return _c(
                    "div",
                    { key: index + "phone", staticClass: "input-group mb-3" },
                    [
                      _vm._m(2, true),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.phonesContact[index],
                            expression: "phonesContact[index]"
                          }
                        ],
                        staticClass: "form-control no-arrow",
                        attrs: {
                          type: "number",
                          name: "phonesContact",
                          min: "0",
                          max: "999999999",
                          placeholder: "222 222 22 22"
                        },
                        domProps: { value: _vm.phonesContact[index] },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.phonesContact,
                              index,
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.phonesContact.length > 1
                        ? _c("div", { staticClass: "input-group-append" }, [
                            _c("input", {
                              staticClass: "btn btn-danger",
                              attrs: { type: "button", value: "-" },
                              on: {
                                click: function($event) {
                                  return _vm.phonesContact.splice(index, 1)
                                }
                              }
                            })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.phonesContact.length < 3
                        ? _c("div", { staticClass: "input-group-append" }, [
                            _c("input", {
                              staticClass: "btn btn-success",
                              attrs: { type: "button", value: "+" },
                              on: {
                                click: function($event) {
                                  return _vm.phonesContact.push("")
                                }
                              }
                            })
                          ])
                        : _vm._e()
                    ]
                  )
                })
              ],
              2
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-6" },
      [
        _c("address-component", {
          ref: "addressComponent",
          attrs: { id: +this.addressId }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fas fa-at" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fas fa-phone" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "fas fa-phone" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/info/dataComponent.vue?vue&type=template&id=2f378e92&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Customers/info/dataComponent.vue?vue&type=template&id=2f378e92& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-3" }, [
    _c("div", { staticClass: "col-md-12 p-0 m-0" }, [
      _c("div", { staticClass: "card card-primary card-outline" }, [
        _c("div", { staticClass: "card-body box-profile" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("h3", { staticClass: "profile-username text-center" }, [
            _vm._v(_vm._s(_vm.allName))
          ]),
          _vm._v(" "),
          _c("ul", { staticClass: "list-group list-group-unbordered mb-3" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [
              _c("b", [_vm._v("Ciudad")]),
              _vm._v(" "),
              _c("a", { staticClass: "float-right" }, [
                _vm._v(_vm._s(this.infoCustomer.city))
              ])
            ]),
            _vm._v(" "),
            _vm._m(2)
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("img", {
        staticClass: "profile-user-img img-fluid img-circle",
        attrs: {
          src: "/dist/img/user4-128x128.jpg",
          alt: "User profile picture"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "list-group-item" }, [
      _c("b", [_vm._v("Reservaciones")]),
      _vm._v(" "),
      _c("a", { staticClass: "float-right" }, [_vm._v("543")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "list-group-item" }, [
      _c("b", [_vm._v("Edad")]),
      _vm._v(" "),
      _c("a", { staticClass: "float-right" }, [_vm._v("26 Años")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/info/infoComponent.vue?vue&type=template&id=603f0a33&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Customers/info/infoComponent.vue?vue&type=template&id=603f0a33& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-9 col-12" }, [
    _c("div", { staticClass: "col-md-12 p-0 m-0" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "tab-content" }, [
            _c(
              "div",
              { staticClass: "active tab-pane", attrs: { id: "activity" } },
              [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.note,
                        expression: "note"
                      }
                    ],
                    attrs: { id: "editor" },
                    domProps: { value: _vm.note },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.note = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-3" })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-primary btn-sm",
                      attrs: { type: "submit" },
                      on: {
                        click: function($event) {
                          return _vm.saveNote()
                        }
                      }
                    },
                    [_vm._v("Añadir nota")]
                  )
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "ticontenedor-notas" },
                  [
                    _c(
                      "transition-group",
                      { attrs: { name: "fade" } },
                      _vm._l(_vm.notes, function(note) {
                        return _c(
                          "div",
                          { key: note.id, staticClass: "post" },
                          [
                            _c("div", { staticClass: "post clearfix" }, [
                              _c("div", { staticClass: "user-block" }, [
                                _c("img", {
                                  staticClass: "img-circle img-bordered-sm",
                                  attrs: {
                                    src: "/dist/img/user7-128x128.jpg",
                                    alt: "User Image"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "username" }, [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v(_vm._s(note.user.name))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "float-right btn-tool",
                                      attrs: { href: "#" }
                                    },
                                    [_c("i", { staticClass: "fas fa-times" })]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "description" }, [
                                  _vm._v("Escribio la nota - 3 days ago")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("span", {
                                domProps: { innerHTML: _vm._s(note.note) }
                              })
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "tab-pane", attrs: { id: "settings" } }, [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-bordered table-striped table-responsive",
                    attrs: { id: "example1" }
                  },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("A-1000")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("08/01/2021")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("05 Negociacion")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("$5,000.00 mxn")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("10")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("compra")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._m(3),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-danger btn-sm",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteCustomer(_vm.customer.id)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-trash" })]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("A-1000")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("08/01/2021")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("05 Negociacion")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("$5,000.00 mxn")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("10")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("compra")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._m(4),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-danger btn-sm",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteCustomer(_vm.customer.id)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-trash" })]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("A-1000")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("08/01/2021")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("05 Negociacion")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("$5,000.00 mxn")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("10")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("compra")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._m(5),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-danger btn-sm",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteCustomer(_vm.customer.id)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-trash" })]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("A-1000")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("08/01/2021")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("05 Negociacion")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("$5,000.00 mxn")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("10")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("compra")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._m(6),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-danger btn-sm",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteCustomer(_vm.customer.id)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-trash" })]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("A-1000")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("08/01/2021")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("05 Negociacion")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("$5,000.00 mxn")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("10")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("compra")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._m(7),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-danger btn-sm",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteCustomer(_vm.customer.id)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-trash" })]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("A-1000")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("08/01/2021")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("05 Negociacion")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("$5,000.00 mxn")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("10")]),
                        _vm._v(" "),
                        _c("td", [_vm._v("compra")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._m(8),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-danger btn-sm",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteCustomer(_vm.customer.id)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-trash" })]
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(9)
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header p-2" }, [
      _c("ul", { staticClass: "nav nav-pills" }, [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: { href: "#activity", "data-toggle": "tab" }
            },
            [_vm._v("Notas")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "#settings", "data-toggle": "tab" }
            },
            [_vm._v("Reservaciones")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "#documents", "data-toggle": "tab" }
            },
            [_vm._v("Documentos")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tab-pane", attrs: { id: "timeline" } }, [
      _c("div", { staticClass: "timeline timeline-inverse" }, [
        _c("div", { staticClass: "time-label" }, [
          _c("span", { staticClass: "bg-danger" }, [
            _vm._v(
              "\n                            10 Feb. 2014\n                            "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "fas fa-envelope bg-primary" }),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-item" }, [
            _c("span", { staticClass: "time" }, [
              _c("i", { staticClass: "far fa-clock" }),
              _vm._v(" 12:05")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "timeline-header" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Support Team")]),
              _vm._v(" sent you an email")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-body" }, [
              _vm._v(
                "\n                                Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,\n                                weebly ning heekya handango imeem plugg dopplr jibjab, movity\n                                jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle\n                                quora plaxo ideeli hulu weebly balihoo...\n                            "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-footer" }, [
              _c(
                "a",
                { staticClass: "btn btn-primary btn-sm", attrs: { href: "#" } },
                [_vm._v("Read more")]
              ),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "btn btn-danger btn-sm", attrs: { href: "#" } },
                [_vm._v("Delete")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "fas fa-user bg-info" }),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-item" }, [
            _c("span", { staticClass: "time" }, [
              _c("i", { staticClass: "far fa-clock" }),
              _vm._v(" 5 mins ago")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "timeline-header border-0" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Sarah Young")]),
              _vm._v(
                " accepted your friend request\n                            "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "fas fa-comments bg-warning" }),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-item" }, [
            _c("span", { staticClass: "time" }, [
              _c("i", { staticClass: "far fa-clock" }),
              _vm._v(" 27 mins ago")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "timeline-header" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Jay White")]),
              _vm._v(" commented on your post")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-body" }, [
              _vm._v(
                "\n                                Take me to your leader!\n                                Switzerland is small and neutral!\n                                We are more like Germany, ambitious and misunderstood!\n                            "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-footer" }, [
              _c(
                "a",
                {
                  staticClass: "btn btn-warning btn-flat btn-sm",
                  attrs: { href: "#" }
                },
                [_vm._v("View comment")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "time-label" }, [
          _c("span", { staticClass: "bg-success" }, [
            _vm._v(
              "\n                            3 Jan. 2014\n                            "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "fas fa-camera bg-purple" }),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-item" }, [
            _c("span", { staticClass: "time" }, [
              _c("i", { staticClass: "far fa-clock" }),
              _vm._v(" 2 days ago")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "timeline-header" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Mina Lee")]),
              _vm._v(" uploaded new photos")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-body" }, [
              _c("img", {
                attrs: { src: "https://placehold.it/150x100", alt: "..." }
              }),
              _vm._v(" "),
              _c("img", {
                attrs: { src: "https://placehold.it/150x100", alt: "..." }
              }),
              _vm._v(" "),
              _c("img", {
                attrs: { src: "https://placehold.it/150x100", alt: "..." }
              }),
              _vm._v(" "),
              _c("img", {
                attrs: { src: "https://placehold.it/150x100", alt: "..." }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [_c("i", { staticClass: "far fa-clock bg-gray" })])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Codigo de reserva")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha de reserva")]),
        _vm._v(" "),
        _c("th", [_vm._v("Estado")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total")]),
        _vm._v(" "),
        _c("th", [_vm._v("Pax")]),
        _vm._v(" "),
        _c("th", [_vm._v("Etiquetas")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acciones")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "btn btn-primary btn-sm", attrs: { href: "#" } },
      [_c("i", { staticClass: "far fa-eye" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "btn btn-primary btn-sm", attrs: { href: "#" } },
      [_c("i", { staticClass: "far fa-eye" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "btn btn-primary btn-sm", attrs: { href: "#" } },
      [_c("i", { staticClass: "far fa-eye" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "btn btn-primary btn-sm", attrs: { href: "#" } },
      [_c("i", { staticClass: "far fa-eye" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "btn btn-primary btn-sm", attrs: { href: "#" } },
      [_c("i", { staticClass: "far fa-eye" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "btn btn-primary btn-sm", attrs: { href: "#" } },
      [_c("i", { staticClass: "far fa-eye" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tab-pane", attrs: { id: "documents" } }, [
      _c("div", { staticClass: "card-footer bg-white" }, [
        _c(
          "ul",
          {
            staticClass:
              "mailbox-attachments d-flex align-items-stretch clearfix"
          },
          [
            _c("li", [
              _c("span", { staticClass: "mailbox-attachment-icon" }, [
                _c("i", { staticClass: "far fa-file-pdf" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mailbox-attachment-info" }, [
                _c(
                  "a",
                  {
                    staticClass: "mailbox-attachment-name",
                    attrs: { href: "#" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-paperclip" }),
                    _vm._v(" Sep2014-report.pdf")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "mailbox-attachment-size clearfix mt-1" },
                  [
                    _c("span", [_vm._v("1,245 KB")]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-default btn-sm float-right",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "fas fa-cloud-download-alt" })]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("span", { staticClass: "mailbox-attachment-icon" }, [
                _c("i", { staticClass: "far fa-file-word" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mailbox-attachment-info" }, [
                _c(
                  "a",
                  {
                    staticClass: "mailbox-attachment-name",
                    attrs: { href: "#" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-paperclip" }),
                    _vm._v(" App Description.docx")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "mailbox-attachment-size clearfix mt-1" },
                  [
                    _c("span", [_vm._v("1,245 KB")]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-default btn-sm float-right",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "fas fa-cloud-download-alt" })]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("span", { staticClass: "mailbox-attachment-icon has-img" }, [
                _c("img", {
                  attrs: { src: "/dist/img/photo1.png", alt: "Attachment" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mailbox-attachment-info" }, [
                _c(
                  "a",
                  {
                    staticClass: "mailbox-attachment-name",
                    attrs: { href: "#" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-camera" }),
                    _vm._v(" photo1.png")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "mailbox-attachment-size clearfix mt-1" },
                  [
                    _c("span", [_vm._v("2.67 MB")]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-default btn-sm float-right",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "fas fa-cloud-download-alt" })]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("span", { staticClass: "mailbox-attachment-icon has-img" }, [
                _c("img", {
                  attrs: { src: "/dist/img/photo2.png", alt: "Attachment" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mailbox-attachment-info" }, [
                _c(
                  "a",
                  {
                    staticClass: "mailbox-attachment-name",
                    attrs: { href: "#" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-camera" }),
                    _vm._v(" photo2.png")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "mailbox-attachment-size clearfix mt-1" },
                  [
                    _c("span", [_vm._v("1.9 MB")]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-default btn-sm float-right",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "fas fa-cloud-download-alt" })]
                    )
                  ]
                )
              ])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/modalFormComponent.vue?vue&type=template&id=c7fa9c5e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Customers/modalFormComponent.vue?vue&type=template&id=c7fa9c5e& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "button",
        {
          staticClass: "btn btn-primary btn-flat",
          on: {
            click: function($event) {
              return _vm.openModal()
            }
          }
        },
        [
          _c("i", { staticClass: "fas fa-address-card" }),
          _vm._v("\n         Agregar contacto\n    ")
        ]
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          style: { padding: "100px 0px 30px" },
          attrs: {
            name: "my-first-modal",
            width: "60%",
            height: "auto",
            scrollable: true
          }
        },
        [
          _c("ValidationObserver", {
            ref: "observer",
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var invalid = ref.invalid
                  var validate = ref.validate
                  return [
                    _c("div", { staticClass: "modal-body row" }, [
                      _c(
                        "div",
                        { staticClass: "form-group col-6" },
                        [
                          _c("label", [
                            _vm._v("* Nombre " + _vm._s(_vm.OpenModalEdit))
                          ]),
                          _vm._v(" "),
                          _c("ValidationProvider", {
                            attrs: { rules: "required", name: "nombre" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var errors = ref.errors
                                    return [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.name,
                                            expression: "form.name"
                                          }
                                        ],
                                        staticClass: "form-control rounded-0",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Jhon"
                                        },
                                        domProps: { value: _vm.form.name },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "name",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          class: [
                                            "error",
                                            "invalid-feedback",
                                            errors[0] ? "ver" : ""
                                          ]
                                        },
                                        [_vm._v(_vm._s(errors[0]))]
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-6" }, [
                        _c("label", [_vm._v("* Apellidos")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.last_name,
                              expression: "form.last_name"
                            }
                          ],
                          staticClass: "form-control rounded-0",
                          attrs: { type: "text", placeholder: "Doe Smiths" },
                          domProps: { value: _vm.form.last_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "last_name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-6" },
                        [
                          _c("label", [_vm._v("* Email")]),
                          _vm._v(" "),
                          _c("ValidationProvider", {
                            attrs: { rules: "required|email", name: "email" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var errors = ref.errors
                                    return [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.email,
                                            expression: "form.email"
                                          }
                                        ],
                                        staticClass: "form-control rounded-0",
                                        attrs: {
                                          type: "text",
                                          placeholder: "email@example.com"
                                        },
                                        domProps: { value: _vm.form.email },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "email",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          class: [
                                            "error",
                                            "invalid-feedback",
                                            errors[0] ? "ver" : ""
                                          ]
                                        },
                                        [_vm._v(_vm._s(errors[0]))]
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-6" },
                        [
                          _c("label", [_vm._v("Teléfono de contacto")]),
                          _vm._v(" "),
                          _c("ValidationProvider", {
                            attrs: { rules: "numeric", name: "telefono" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var errors = ref.errors
                                    return [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.phone,
                                            expression: "form.phone"
                                          }
                                        ],
                                        staticClass: "form-control rounded-0",
                                        attrs: {
                                          type: "text",
                                          placeholder: "(998) 123 4567"
                                        },
                                        domProps: { value: _vm.form.phone },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "phone",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          class: [
                                            "error",
                                            "invalid-feedback",
                                            errors[0] ? "ver" : ""
                                          ]
                                        },
                                        [_vm._v(_vm._s(errors[0]))]
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-6" },
                        [
                          _c("label", [_vm._v("Fecha de nacimiento")]),
                          _vm._v(" "),
                          _c("datetime", {
                            attrs: { "value-zone": "local", zone: "local" },
                            model: {
                              value: _vm.form.birth_date,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "birth_date", $$v)
                              },
                              expression: "form.birth_date"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-6" },
                        [
                          _c("label", [_vm._v("Genero")]),
                          _vm._v(" "),
                          _c("ValidationProvider", {
                            attrs: { rules: "oneOf:1,2,3", name: "genero" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var errors = ref.errors
                                    return [
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.sex,
                                              expression: "form.sex"
                                            }
                                          ],
                                          staticClass:
                                            "custom-select rounded-0",
                                          on: {
                                            change: function($event) {
                                              var $$selectedVal = Array.prototype.filter
                                                .call(
                                                  $event.target.options,
                                                  function(o) {
                                                    return o.selected
                                                  }
                                                )
                                                .map(function(o) {
                                                  var val =
                                                    "_value" in o
                                                      ? o._value
                                                      : o.value
                                                  return val
                                                })
                                              _vm.$set(
                                                _vm.form,
                                                "sex",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("option", [
                                            _vm._v("Seleccionar genero")
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "1" } },
                                            [_vm._v("Masculino")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "2" } },
                                            [_vm._v("Femenino")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "3" } },
                                            [_vm._v("Otro")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          class: [
                                            "error",
                                            "invalid-feedback",
                                            errors[0] ? "ver" : ""
                                          ]
                                        },
                                        [_vm._v(_vm._s(errors[0]))]
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-4" },
                        [
                          _c("label", [_vm._v("Pais")]),
                          _vm._v(" "),
                          _c("multiselect", {
                            attrs: {
                              label: "country",
                              "track-by": "id",
                              options: _vm.countries,
                              searchable: true,
                              "show-labels": false,
                              placeholder: "Seleccionar un pais"
                            },
                            on: {
                              input: function($event) {
                                return _vm.getStates()
                              }
                            },
                            model: {
                              value: _vm.form.country,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "country", $$v)
                              },
                              expression: "form.country"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-4" },
                        [
                          _c("label", [_vm._v("Estado")]),
                          _vm._v(" "),
                          _c("multiselect", {
                            attrs: {
                              label: "name",
                              "track-by": "id",
                              options: _vm.states,
                              searchable: true,
                              "show-labels": false,
                              placeholder: "Seleccionar un estado"
                            },
                            on: {
                              input: function($event) {
                                return _vm.getCitys()
                              }
                            },
                            model: {
                              value: _vm.form.state,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "state", $$v)
                              },
                              expression: "form.state"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-4" },
                        [
                          _c("label", [_vm._v("Ciudad")]),
                          _vm._v(" "),
                          _c("multiselect", {
                            attrs: {
                              label: "city",
                              "track-by": "id",
                              options: _vm.citys,
                              searchable: true,
                              "show-labels": false,
                              placeholder: "Seleccionar una ciudad"
                            },
                            model: {
                              value: _vm.form.city,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "city", $$v)
                              },
                              expression: "form.city"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-8" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", [_vm._v("Comentarios adicionales")]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.additional_information,
                                expression: "form.additional_information"
                              }
                            ],
                            staticClass: "form-control rounded-0",
                            attrs: { rows: "5", placeholder: "Enter ..." },
                            domProps: {
                              value: _vm.form.additional_information
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "additional_information",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "modal-footer justify-content-between" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-default",
                            attrs: { type: "button", "data-dismiss": "modal" }
                          },
                          [_vm._v("Cerrar")]
                        ),
                        _vm._v(" "),
                        _vm.texto_boton == "Guardar contacto"
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                attrs: { disabled: invalid, type: "button" },
                                on: {
                                  click: function($event) {
                                    validate().then(_vm.saveContact)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.texto_boton))]
                            )
                          : _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                attrs: { disabled: invalid, type: "button" },
                                on: {
                                  click: function($event) {
                                    validate().then(
                                      _vm.updateContact(_vm.form.id)
                                    )
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.texto_boton))]
                            )
                      ]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/tableComponent.vue?vue&type=template&id=1bee9cb4&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Customers/tableComponent.vue?vue&type=template&id=1bee9cb4& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "card-body" }, [
        _c(
          "table",
          {
            staticClass: "table table-bordered table-striped table-responsive",
            attrs: { id: "example1" }
          },
          [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v("Nombre")]),
                _vm._v(" "),
                _c("th", [_vm._v("Fecha prevista")]),
                _vm._v(" "),
                _c("th", [_vm._v("Estado")]),
                _vm._v(" "),
                _c("th", [_vm._v("Contacto")]),
                _vm._v(" "),
                _c("th", [_vm._v("Exito %")]),
                _vm._v(" "),
                _c("th", [_vm._v("Tipo")]),
                _vm._v(" "),
                _c("th", [_vm._v("Etiquetas")])
              ])
            ]),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", [
                _c("td", [_vm._v("Oportunidad de venta")]),
                _vm._v(" "),
                _c("td", [_vm._v("08/01/2021")]),
                _vm._v(" "),
                _c("td", [_vm._v("05 Negociacion")]),
                _vm._v(" "),
                _c("td", [_vm._v("(998) 123-4569")]),
                _vm._v(" "),
                _c("td", [_vm._v("10")]),
                _vm._v(" "),
                _c("td", [_vm._v("Tours")]),
                _vm._v(" "),
                _c("td", [_vm._v("Alta Prioridad")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Oportunidad de venta")]),
                _vm._v(" "),
                _c("td", [_vm._v("08/01/2021")]),
                _vm._v(" "),
                _c("td", [_vm._v("05 Negociacion")]),
                _vm._v(" "),
                _c("td", [_vm._v("(998) 123-4569")]),
                _vm._v(" "),
                _c("td", [_vm._v("10")]),
                _vm._v(" "),
                _c("td", [_vm._v("Tours")]),
                _vm._v(" "),
                _c("td", [_vm._v("Alta Prioridad")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Oportunidad de venta")]),
                _vm._v(" "),
                _c("td", [_vm._v("08/01/2021")]),
                _vm._v(" "),
                _c("td", [_vm._v("05 Negociacion")]),
                _vm._v(" "),
                _c("td", [_vm._v("(998) 123-4569")]),
                _vm._v(" "),
                _c("td", [_vm._v("10")]),
                _vm._v(" "),
                _c("td", [_vm._v("Tours")]),
                _vm._v(" "),
                _c("td", [_vm._v("Alta Prioridad")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Oportunidad de venta")]),
                _vm._v(" "),
                _c("td", [_vm._v("08/01/2021")]),
                _vm._v(" "),
                _c("td", [_vm._v("05 Negociacion")]),
                _vm._v(" "),
                _c("td", [_vm._v("(998) 123-4569")]),
                _vm._v(" "),
                _c("td", [_vm._v("10")]),
                _vm._v(" "),
                _c("td", [_vm._v("Tours")]),
                _vm._v(" "),
                _c("td", [_vm._v("Alta Prioridad")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Oportunidad de venta")]),
                _vm._v(" "),
                _c("td", [_vm._v("08/01/2021")]),
                _vm._v(" "),
                _c("td", [_vm._v("05 Negociacion")]),
                _vm._v(" "),
                _c("td", [_vm._v("(998) 123-4569")]),
                _vm._v(" "),
                _c("td", [_vm._v("10")]),
                _vm._v(" "),
                _c("td", [_vm._v("Tours")]),
                _vm._v(" "),
                _c("td", [_vm._v("Alta Prioridad")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Oportunidad de venta")]),
                _vm._v(" "),
                _c("td", [_vm._v("08/01/2021")]),
                _vm._v(" "),
                _c("td", [_vm._v("05 Negociacion")]),
                _vm._v(" "),
                _c("td", [_vm._v("(998) 123-4569")]),
                _vm._v(" "),
                _c("td", [_vm._v("10")]),
                _vm._v(" "),
                _c("td", [_vm._v("Tours")]),
                _vm._v(" "),
                _c("td", [_vm._v("Alta Prioridad")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Oportunidad de venta")]),
                _vm._v(" "),
                _c("td", [_vm._v("08/01/2021")]),
                _vm._v(" "),
                _c("td", [_vm._v("05 Negociacion")]),
                _vm._v(" "),
                _c("td", [_vm._v("(998) 123-4569")]),
                _vm._v(" "),
                _c("td", [_vm._v("10")]),
                _vm._v(" "),
                _c("td", [_vm._v("Tours")]),
                _vm._v(" "),
                _c("td", [_vm._v("Alta Prioridad")])
              ])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Example Component")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm._v("\n          Soy un componente de VUE\n        ")
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users/Profile/dataUserComponent.vue?vue&type=template&id=46620280&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Users/Profile/dataUserComponent.vue?vue&type=template&id=46620280& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-3" }, [
    _c("div", { staticClass: "col-md-12 p-0 m-0" }, [
      _c("div", { staticClass: "card card-primary card-outline" }, [
        _c(
          "div",
          { staticClass: "card-body box-profile" },
          [
            _c("transition", { attrs: { name: "fade" } }, [
              _vm.errors.length > 0
                ? _c(
                    "div",
                    {
                      staticClass:
                        "alert alert-danger alert-dismissible text-center"
                    },
                    [
                      _c(
                        "ul",
                        _vm._l(_vm.errors, function(e, index) {
                          return _c("li", { key: index }, [
                            _vm._v(" " + _vm._s(e))
                          ])
                        }),
                        0
                      )
                    ]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("h3", { staticClass: "profile-username text-center" }, [
              _vm._v(
                _vm._s(this.userProfile.profile.name) +
                  " " +
                  _vm._s(this.userProfile.profile.last_name)
              )
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            this.id_user == this.user.id || this.permission.update
              ? _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary btn-block",
                    attrs: {
                      to: { name: "EditUser", params: { id: +this.id_user } }
                    }
                  },
                  [
                    _c("b", [
                      _c("i", { staticClass: "fas fa-pen" }),
                      _vm._v(" Editar")
                    ])
                  ]
                )
              : _vm._e()
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("img", {
        staticClass: "profile-user-img img-fluid img-circle",
        attrs: {
          src: "/dist/img/user4-128x128.jpg",
          alt: "User profile picture"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "list-group list-group-unbordered mb-3" }, [
      _c("li", { staticClass: "list-group-item" }, [
        _c("b", [_vm._v("Tours vendidos")]),
        _vm._v(" "),
        _c("a", { staticClass: "float-right" }, [_vm._v("543")])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("b", [_vm._v("Ciudad")]),
        _vm._v(" "),
        _c("a", { staticClass: "float-right" }, [_vm._v("Cancún")])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "list-group-item" }, [
        _c("b", [_vm._v("Sucursal")]),
        _vm._v(" "),
        _c("a", { staticClass: "float-right" }, [_vm._v("Cancún ADO")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=template&id=6d809408&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=template&id=6d809408& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-9 col-12" }, [
    _c("div", { staticClass: "col-md-12 p-0 m-0" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "tab-content" }, [
            _c(
              "div",
              { staticClass: "active tab-pane", attrs: { id: "activity" } },
              [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.note,
                        expression: "note"
                      }
                    ],
                    attrs: { id: "editor" },
                    domProps: { value: _vm.note },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.note = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-3" })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-outline-primary btn-sm",
                      attrs: { type: "submit" },
                      on: {
                        click: function($event) {
                          return _vm.saveNote()
                        }
                      }
                    },
                    [_vm._v("Añadir nota")]
                  )
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "ticontenedor-notas" },
                  [
                    _c(
                      "transition-group",
                      { attrs: { name: "fade" } },
                      _vm._l(_vm.notes, function(note) {
                        return _c(
                          "div",
                          { key: note.id, staticClass: "post" },
                          [
                            _c("div", { staticClass: "post clearfix" }, [
                              _c("div", { staticClass: "user-block" }, [
                                _c("img", {
                                  staticClass: "img-circle img-bordered-sm",
                                  attrs: {
                                    src: "/dist/img/user7-128x128.jpg",
                                    alt: "User Image"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "username" }, [
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v(_vm._s(note.user.name))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "float-right btn-tool",
                                      attrs: { href: "#" }
                                    },
                                    [_c("i", { staticClass: "fas fa-times" })]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "description" }, [
                                  _c("strong", [
                                    _vm._v(
                                      _vm._s(note.user_profile.name) +
                                        " " +
                                        _vm._s(note.user_profile.last_name)
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "description" }, [
                                  _vm._v(
                                    "Escribio la nota  - " +
                                      _vm._s(
                                        _vm._f("moment")(
                                          note.created_at,
                                          "LLLL"
                                        )
                                      )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("span", {
                                domProps: { innerHTML: _vm._s(note.note) }
                              })
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3)
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header p-2" }, [
      _c("ul", { staticClass: "nav nav-pills" }, [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: { href: "#activity", "data-toggle": "tab" }
            },
            [_vm._v("Notas")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "#settings", "data-toggle": "tab" }
            },
            [_vm._v("Oportunidades de venta")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "#timeline", "data-toggle": "tab" }
            },
            [_vm._v("Historial")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "#documents", "data-toggle": "tab" }
            },
            [_vm._v("Documentos")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tab-pane", attrs: { id: "timeline" } }, [
      _c("div", { staticClass: "timeline timeline-inverse" }, [
        _c("div", { staticClass: "time-label" }, [
          _c("span", { staticClass: "bg-danger" }, [
            _vm._v(
              "\n                            10 Feb. 2014\n                            "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "fas fa-envelope bg-primary" }),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-item" }, [
            _c("span", { staticClass: "time" }, [
              _c("i", { staticClass: "far fa-clock" }),
              _vm._v(" 12:05")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "timeline-header" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Support Team")]),
              _vm._v(" sent you an email")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-body" }, [
              _vm._v(
                "\n                                Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,\n                                weebly ning heekya handango imeem plugg dopplr jibjab, movity\n                                jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle\n                                quora plaxo ideeli hulu weebly balihoo...\n                            "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-footer" }, [
              _c(
                "a",
                { staticClass: "btn btn-primary btn-sm", attrs: { href: "#" } },
                [_vm._v("Read more")]
              ),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "btn btn-danger btn-sm", attrs: { href: "#" } },
                [_vm._v("Delete")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "fas fa-user bg-info" }),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-item" }, [
            _c("span", { staticClass: "time" }, [
              _c("i", { staticClass: "far fa-clock" }),
              _vm._v(" 5 mins ago")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "timeline-header border-0" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Sarah Young")]),
              _vm._v(
                " accepted your friend request\n                            "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "fas fa-comments bg-warning" }),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-item" }, [
            _c("span", { staticClass: "time" }, [
              _c("i", { staticClass: "far fa-clock" }),
              _vm._v(" 27 mins ago")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "timeline-header" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Jay White")]),
              _vm._v(" commented on your post")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-body" }, [
              _vm._v(
                "\n                                Take me to your leader!\n                                Switzerland is small and neutral!\n                                We are more like Germany, ambitious and misunderstood!\n                            "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-footer" }, [
              _c(
                "a",
                {
                  staticClass: "btn btn-warning btn-flat btn-sm",
                  attrs: { href: "#" }
                },
                [_vm._v("View comment")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "time-label" }, [
          _c("span", { staticClass: "bg-success" }, [
            _vm._v(
              "\n                            3 Jan. 2014\n                            "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "fas fa-camera bg-purple" }),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-item" }, [
            _c("span", { staticClass: "time" }, [
              _c("i", { staticClass: "far fa-clock" }),
              _vm._v(" 2 days ago")
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "timeline-header" }, [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Mina Lee")]),
              _vm._v(" uploaded new photos")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-body" }, [
              _c("img", {
                attrs: { src: "https://placehold.it/150x100", alt: "..." }
              }),
              _vm._v(" "),
              _c("img", {
                attrs: { src: "https://placehold.it/150x100", alt: "..." }
              }),
              _vm._v(" "),
              _c("img", {
                attrs: { src: "https://placehold.it/150x100", alt: "..." }
              }),
              _vm._v(" "),
              _c("img", {
                attrs: { src: "https://placehold.it/150x100", alt: "..." }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", [_c("i", { staticClass: "far fa-clock bg-gray" })])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tab-pane", attrs: { id: "settings" } }, [
      _c("div", { staticClass: "card-body" }, [
        _c(
          "table",
          {
            staticClass: "table table-bordered table-striped table-responsive",
            attrs: { id: "example1" }
          },
          [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v("Nombre")]),
                _vm._v(" "),
                _c("th", [_vm._v("Fecha prevista")]),
                _vm._v(" "),
                _c("th", [_vm._v("Estado")]),
                _vm._v(" "),
                _c("th", [_vm._v("Contacto")]),
                _vm._v(" "),
                _c("th", [_vm._v("Exito %")]),
                _vm._v(" "),
                _c("th", [_vm._v("Tipo")]),
                _vm._v(" "),
                _c("th", [_vm._v("Etiquetas")])
              ])
            ]),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", [
                _c("td", [_vm._v("Oportunidad de venta")]),
                _vm._v(" "),
                _c("td", [_vm._v("08/01/2021")]),
                _vm._v(" "),
                _c("td", [_vm._v("05 Negociacion")]),
                _vm._v(" "),
                _c("td", [_vm._v("(998) 123-4569")]),
                _vm._v(" "),
                _c("td", [_vm._v("10")]),
                _vm._v(" "),
                _c("td", [_vm._v("Tours")]),
                _vm._v(" "),
                _c("td", [_vm._v("Alta Prioridad")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Oportunidad de venta")]),
                _vm._v(" "),
                _c("td", [_vm._v("08/01/2021")]),
                _vm._v(" "),
                _c("td", [_vm._v("05 Negociacion")]),
                _vm._v(" "),
                _c("td", [_vm._v("(998) 123-4569")]),
                _vm._v(" "),
                _c("td", [_vm._v("10")]),
                _vm._v(" "),
                _c("td", [_vm._v("Tours")]),
                _vm._v(" "),
                _c("td", [_vm._v("Alta Prioridad")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Oportunidad de venta")]),
                _vm._v(" "),
                _c("td", [_vm._v("08/01/2021")]),
                _vm._v(" "),
                _c("td", [_vm._v("05 Negociacion")]),
                _vm._v(" "),
                _c("td", [_vm._v("(998) 123-4569")]),
                _vm._v(" "),
                _c("td", [_vm._v("10")]),
                _vm._v(" "),
                _c("td", [_vm._v("Tours")]),
                _vm._v(" "),
                _c("td", [_vm._v("Alta Prioridad")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Oportunidad de venta")]),
                _vm._v(" "),
                _c("td", [_vm._v("08/01/2021")]),
                _vm._v(" "),
                _c("td", [_vm._v("05 Negociacion")]),
                _vm._v(" "),
                _c("td", [_vm._v("(998) 123-4569")]),
                _vm._v(" "),
                _c("td", [_vm._v("10")]),
                _vm._v(" "),
                _c("td", [_vm._v("Tours")]),
                _vm._v(" "),
                _c("td", [_vm._v("Alta Prioridad")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Oportunidad de venta")]),
                _vm._v(" "),
                _c("td", [_vm._v("08/01/2021")]),
                _vm._v(" "),
                _c("td", [_vm._v("05 Negociacion")]),
                _vm._v(" "),
                _c("td", [_vm._v("(998) 123-4569")]),
                _vm._v(" "),
                _c("td", [_vm._v("10")]),
                _vm._v(" "),
                _c("td", [_vm._v("Tours")]),
                _vm._v(" "),
                _c("td", [_vm._v("Alta Prioridad")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Oportunidad de venta")]),
                _vm._v(" "),
                _c("td", [_vm._v("08/01/2021")]),
                _vm._v(" "),
                _c("td", [_vm._v("05 Negociacion")]),
                _vm._v(" "),
                _c("td", [_vm._v("(998) 123-4569")]),
                _vm._v(" "),
                _c("td", [_vm._v("10")]),
                _vm._v(" "),
                _c("td", [_vm._v("Tours")]),
                _vm._v(" "),
                _c("td", [_vm._v("Alta Prioridad")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Oportunidad de venta")]),
                _vm._v(" "),
                _c("td", [_vm._v("08/01/2021")]),
                _vm._v(" "),
                _c("td", [_vm._v("05 Negociacion")]),
                _vm._v(" "),
                _c("td", [_vm._v("(998) 123-4569")]),
                _vm._v(" "),
                _c("td", [_vm._v("10")]),
                _vm._v(" "),
                _c("td", [_vm._v("Tours")]),
                _vm._v(" "),
                _c("td", [_vm._v("Alta Prioridad")])
              ])
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tab-pane", attrs: { id: "documents" } }, [
      _c("div", { staticClass: "card-footer bg-white" }, [
        _c(
          "ul",
          {
            staticClass:
              "mailbox-attachments d-flex align-items-stretch clearfix"
          },
          [
            _c("li", [
              _c("span", { staticClass: "mailbox-attachment-icon" }, [
                _c("i", { staticClass: "far fa-file-pdf" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mailbox-attachment-info" }, [
                _c(
                  "a",
                  {
                    staticClass: "mailbox-attachment-name",
                    attrs: { href: "#" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-paperclip" }),
                    _vm._v(" Sep2014-report.pdf")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "mailbox-attachment-size clearfix mt-1" },
                  [
                    _c("span", [_vm._v("1,245 KB")]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-default btn-sm float-right",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "fas fa-cloud-download-alt" })]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("span", { staticClass: "mailbox-attachment-icon" }, [
                _c("i", { staticClass: "far fa-file-word" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mailbox-attachment-info" }, [
                _c(
                  "a",
                  {
                    staticClass: "mailbox-attachment-name",
                    attrs: { href: "#" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-paperclip" }),
                    _vm._v(" App Description.docx")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "mailbox-attachment-size clearfix mt-1" },
                  [
                    _c("span", [_vm._v("1,245 KB")]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-default btn-sm float-right",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "fas fa-cloud-download-alt" })]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("span", { staticClass: "mailbox-attachment-icon has-img" }, [
                _c("img", {
                  attrs: { src: "/dist/img/photo1.png", alt: "Attachment" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mailbox-attachment-info" }, [
                _c(
                  "a",
                  {
                    staticClass: "mailbox-attachment-name",
                    attrs: { href: "#" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-camera" }),
                    _vm._v(" photo1.png")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "mailbox-attachment-size clearfix mt-1" },
                  [
                    _c("span", [_vm._v("2.67 MB")]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-default btn-sm float-right",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "fas fa-cloud-download-alt" })]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("span", { staticClass: "mailbox-attachment-icon has-img" }, [
                _c("img", {
                  attrs: { src: "/dist/img/photo2.png", alt: "Attachment" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mailbox-attachment-info" }, [
                _c(
                  "a",
                  {
                    staticClass: "mailbox-attachment-name",
                    attrs: { href: "#" }
                  },
                  [
                    _c("i", { staticClass: "fas fa-camera" }),
                    _vm._v(" photo2.png")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "mailbox-attachment-size clearfix mt-1" },
                  [
                    _c("span", [_vm._v("1.9 MB")]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-default btn-sm float-right",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "fas fa-cloud-download-alt" })]
                    )
                  ]
                )
              ])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customers/TableView.vue?vue&type=template&id=5fb6406a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Customers/TableView.vue?vue&type=template&id=5fb6406a& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c(
            "div",
            { staticClass: "col-sm-6" },
            [
              _c("modal-form-component", {
                ref: "modalFormComponent",
                attrs: { OpenModalEdit: _vm.modalEdit },
                on: {
                  onRefreshTable: function($event) {
                    return _vm.getCustomers()
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c(
            "table",
            {
              staticClass:
                "table table-bordered table-striped table-responsive",
              staticStyle: { width: "100%" },
              attrs: { id: "example1" }
            },
            [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.customers, function(customer) {
                  return _c("tr", { key: customer.id }, [
                    _c("td", [_vm._v(_vm._s(customer.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(customer.last_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(customer.email))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(customer.phone))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(customer.birth_date))]),
                    _vm._v(" "),
                    customer.sex == 1
                      ? _c("td", [_vm._v("Masculino")])
                      : customer.sex == 2
                      ? _c("td", [_vm._v("Femenino")])
                      : _c("td", [_vm._v("Otro")]),
                    _vm._v(" "),
                    customer.country != null
                      ? _c("td", [_vm._v(_vm._s(customer.country.country))])
                      : _c("td", [_vm._v("  ")]),
                    _vm._v(" "),
                    customer.state != null
                      ? _c("td", [_vm._v(_vm._s(customer.state.name))])
                      : _c("td"),
                    _vm._v(" "),
                    customer.city != null
                      ? _c("td", [_vm._v(_vm._s(customer.city.city))])
                      : _c("td"),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "table-actions" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: {
                              to: {
                                name: "profileCustomer",
                                params: { id: customer.id }
                              }
                            }
                          },
                          [_c("i", { staticClass: "far fa-eye" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-info btn-sm",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                return _vm.$refs.modalFormComponent.openModal(
                                  customer.id
                                )
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-pencil-alt" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-danger btn-sm",
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                return _vm.deleteCustomer(customer.id)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-trash" })]
                        )
                      ],
                      1
                    )
                  ])
                }),
                0
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
        _c("li", { staticClass: "breadcrumb-item" }, [
          _c("a", { attrs: { href: "#" } }, [_vm._v("Home")])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "breadcrumb-item active" }, [
          _vm._v("Contactos")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [
        _c("i", { staticClass: "fas fa-address-card" }),
        _vm._v(" CONTACTOS")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", [_vm._v("Apellido(s)")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Telefono")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha Nacimiento")]),
        _vm._v(" "),
        _c("th", [_vm._v("Sexo")]),
        _vm._v(" "),
        _c("th", [_vm._v("País")]),
        _vm._v(" "),
        _c("th", [_vm._v("Estado")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ciudad")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customers/profileView.vue?vue&type=template&id=712fd7a5&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Customers/profileView.vue?vue&type=template&id=712fd7a5& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c(
          "div",
          { staticClass: "row" },
          [
            _c("data-customer-component", { attrs: { id_customer: _vm.id } }),
            _vm._v(" "),
            _c("info-customer-component", { attrs: { id_customer: _vm.id } })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", [_vm._v("Perfil")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Home")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Perfil de contacto")
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/OverviewComponent.vue?vue&type=template&id=1fc669da&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/OverviewComponent.vue?vue&type=template&id=1fc669da& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "content-header" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row mb-2" }, [
            _c("div", { staticClass: "col-sm-6" }, [
              _c("h1", { staticClass: "m-0" }, [_vm._v("Home")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6" }, [
              _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
                _c("li", { staticClass: "breadcrumb-item" }, [
                  _c("a", { attrs: { href: "/users" } }, [_vm._v("Home")])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-6" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header border-0" }, [
                  _c("div", { staticClass: "d-flex justify-content-between" }, [
                    _c("h3", { staticClass: "card-title" }, [
                      _vm._v("Online Store Visitors")
                    ]),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "javascript:void(0);" } }, [
                      _vm._v("View Report")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "d-flex" }, [
                    _c("p", { staticClass: "d-flex flex-column" }, [
                      _c("span", { staticClass: "text-bold text-lg" }, [
                        _vm._v("820")
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v("Visitors Over Time")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "ml-auto d-flex flex-column text-right" },
                      [
                        _c("span", { staticClass: "text-success" }, [
                          _c("i", { staticClass: "fas fa-arrow-up" }),
                          _vm._v(" 12.5%\n                        ")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-muted" }, [
                          _vm._v("Since last week")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "position-relative mb-4" }, [
                    _c("canvas", {
                      attrs: { id: "visitors-chart", height: "200" }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex flex-row justify-content-end" },
                    [
                      _c("span", { staticClass: "mr-2" }, [
                        _c("i", { staticClass: "fas fa-square text-primary" }),
                        _vm._v(" This Week\n                    ")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _c("i", { staticClass: "fas fa-square text-gray" }),
                        _vm._v(" Last Week\n                    ")
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header border-0" }, [
                  _c("h3", { staticClass: "card-title" }, [_vm._v("Products")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-tools" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-tool btn-sm",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "fas fa-download" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-tool btn-sm",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "fas fa-bars" })]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body table-responsive p-0" }, [
                  _c(
                    "table",
                    { staticClass: "table table-striped table-valign-middle" },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("Product")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Price")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Sales")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("More")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tbody", [
                        _c("tr", [
                          _c("td", [
                            _c("img", {
                              staticClass: "img-circle img-size-32 mr-2",
                              attrs: {
                                src: "dist/img/default-150x150.png",
                                alt: "Product 1"
                              }
                            }),
                            _vm._v(
                              "\n                        Some Product\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("$13 USD")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("small", { staticClass: "text-success mr-1" }, [
                              _c("i", { staticClass: "fas fa-arrow-up" }),
                              _vm._v(
                                "\n                            12%\n                        "
                              )
                            ]),
                            _vm._v(
                              "\n                        12,000 Sold\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                staticClass: "text-muted",
                                attrs: { href: "#" }
                              },
                              [_c("i", { staticClass: "fas fa-search" })]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [
                            _c("img", {
                              staticClass: "img-circle img-size-32 mr-2",
                              attrs: {
                                src: "dist/img/default-150x150.png",
                                alt: "Product 1"
                              }
                            }),
                            _vm._v(
                              "\n                        Another Product\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("$29 USD")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("small", { staticClass: "text-warning mr-1" }, [
                              _c("i", { staticClass: "fas fa-arrow-down" }),
                              _vm._v(
                                "\n                            0.5%\n                        "
                              )
                            ]),
                            _vm._v(
                              "\n                        123,234 Sold\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                staticClass: "text-muted",
                                attrs: { href: "#" }
                              },
                              [_c("i", { staticClass: "fas fa-search" })]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [
                            _c("img", {
                              staticClass: "img-circle img-size-32 mr-2",
                              attrs: {
                                src: "dist/img/default-150x150.png",
                                alt: "Product 1"
                              }
                            }),
                            _vm._v(
                              "\n                        Amazing Product\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("$1,230 USD")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("small", { staticClass: "text-danger mr-1" }, [
                              _c("i", { staticClass: "fas fa-arrow-down" }),
                              _vm._v(
                                "\n                            3%\n                        "
                              )
                            ]),
                            _vm._v(
                              "\n                        198 Sold\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                staticClass: "text-muted",
                                attrs: { href: "#" }
                              },
                              [_c("i", { staticClass: "fas fa-search" })]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [
                            _c("img", {
                              staticClass: "img-circle img-size-32 mr-2",
                              attrs: {
                                src: "dist/img/default-150x150.png",
                                alt: "Product 1"
                              }
                            }),
                            _vm._v(
                              "\n                        Perfect Item\n                        "
                            ),
                            _c("span", { staticClass: "badge bg-danger" }, [
                              _vm._v("NEW")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("$199 USD")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("small", { staticClass: "text-success mr-1" }, [
                              _c("i", { staticClass: "fas fa-arrow-up" }),
                              _vm._v(
                                "\n                            63%\n                        "
                              )
                            ]),
                            _vm._v(
                              "\n                        87 Sold\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                staticClass: "text-muted",
                                attrs: { href: "#" }
                              },
                              [_c("i", { staticClass: "fas fa-search" })]
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header border-0" }, [
                  _c("div", { staticClass: "d-flex justify-content-between" }, [
                    _c("h3", { staticClass: "card-title" }, [_vm._v("Sales")]),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "javascript:void(0);" } }, [
                      _vm._v("View Report")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "d-flex" }, [
                    _c("p", { staticClass: "d-flex flex-column" }, [
                      _c("span", { staticClass: "text-bold text-lg" }, [
                        _vm._v("$18,230.00")
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v("Sales Over Time")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "ml-auto d-flex flex-column text-right" },
                      [
                        _c("span", { staticClass: "text-success" }, [
                          _c("i", { staticClass: "fas fa-arrow-up" }),
                          _vm._v(" 33.1%\n                        ")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-muted" }, [
                          _vm._v("Since last month")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "position-relative mb-4" }, [
                    _c("canvas", {
                      attrs: { id: "sales-chart", height: "200" }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex flex-row justify-content-end" },
                    [
                      _c("span", { staticClass: "mr-2" }, [
                        _c("i", { staticClass: "fas fa-square text-primary" }),
                        _vm._v(" This year\n                    ")
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _c("i", { staticClass: "fas fa-square text-gray" }),
                        _vm._v(" Last year\n                    ")
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header border-0" }, [
                  _c("h3", { staticClass: "card-title" }, [
                    _vm._v("Online Store Overview")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-tools" }, [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-tool",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "fas fa-download" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-tool",
                        attrs: { href: "#" }
                      },
                      [_c("i", { staticClass: "fas fa-bars" })]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex justify-content-between align-items-center border-bottom mb-3"
                    },
                    [
                      _c("p", { staticClass: "text-success text-xl" }, [
                        _c("i", { staticClass: "ion ion-ios-refresh-empty" })
                      ]),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "d-flex flex-column text-right" },
                        [
                          _c("span", { staticClass: "font-weight-bold" }, [
                            _c("i", {
                              staticClass:
                                "ion ion-android-arrow-up text-success"
                            }),
                            _vm._v(" 12%\n                        ")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-muted" }, [
                            _vm._v("CONVERSION RATE")
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex justify-content-between align-items-center border-bottom mb-3"
                    },
                    [
                      _c("p", { staticClass: "text-warning text-xl" }, [
                        _c("i", { staticClass: "ion ion-ios-cart-outline" })
                      ]),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "d-flex flex-column text-right" },
                        [
                          _c("span", { staticClass: "font-weight-bold" }, [
                            _c("i", {
                              staticClass:
                                "ion ion-android-arrow-up text-warning"
                            }),
                            _vm._v(" 0.8%\n                        ")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-muted" }, [
                            _vm._v("SALES RATE")
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex justify-content-between align-items-center mb-0"
                    },
                    [
                      _c("p", { staticClass: "text-danger text-xl" }, [
                        _c("i", { staticClass: "ion ion-ios-people-outline" })
                      ]),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "d-flex flex-column text-right" },
                        [
                          _c("span", { staticClass: "font-weight-bold" }, [
                            _c("i", {
                              staticClass:
                                "ion ion-android-arrow-down text-danger"
                            }),
                            _vm._v(" 1%\n                        ")
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-muted" }, [
                            _vm._v("REGISTRATION RATE")
                          ])
                        ]
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/index.vue?vue&type=template&id=3196e148&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard/index.vue?vue&type=template&id=3196e148& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrapper" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "aside",
      { staticClass: "main-sidebar sidebar-dark-primary elevation-4" },
      [
        _c(
          "router-link",
          { staticClass: "brand-link", attrs: { to: { path: "/" } } },
          [
            _c("img", {
              staticClass: "brand-image img-circle elevation-3",
              staticStyle: { opacity: ".8" },
              attrs: { src: "/img/LogotipoCRM.png", alt: "AdminLTE Logo" }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "brand-text font-weight-light" }, [
              _vm._v("CRM TOURS")
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "sidebar" }, [
          _c("div", { staticClass: "user-panel mt-3 pb-3 mb-3 d-flex" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "info" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "d-block",
                    attrs: {
                      to: {
                        name: "perfilUsuario",
                        params: { id: +_vm.user.id }
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.user.full_name) +
                        "\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-outline-danger btn-block btn-sm logout mt-3",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.logout()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-sign-out-alt" }),
                    _vm._v(
                      " \n                      Cerrar sesión\n            "
                    )
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("nav", { staticClass: "mt-2" }, [
            _c(
              "ul",
              {
                staticClass: "nav nav-pills nav-sidebar flex-column",
                attrs: {
                  "data-widget": "treeview",
                  role: "menu",
                  "data-accordion": "false"
                }
              },
              [
                _vm._m(3),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: { to: { name: "getUsers" } }
                      },
                      [
                        _c("i", { staticClass: "fas fa-users" }),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                  Usuarios\n                "
                          )
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(4),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link",
                        attrs: { to: { name: "Contacts" } }
                      },
                      [
                        _c("i", { staticClass: "fas fa-address-card" }),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                  Contactos\n                "
                          )
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(5),
                _vm._v(" "),
                _vm._m(6)
              ]
            )
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "content-wrapper" },
      [
        _c(
          "transition",
          { attrs: { name: "fade", mode: "out-in" } },
          [_c("router-view")],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("aside", { staticClass: "control-sidebar control-sidebar-dark" }),
    _vm._v(" "),
    _c("footer", { staticClass: "main-footer" })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "nav",
      {
        staticClass:
          "main-header navbar navbar-expand navbar-white navbar-light"
      },
      [
        _c("ul", { staticClass: "navbar-nav" }, [
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: { "data-widget": "pushmenu", href: "#", role: "button" }
              },
              [_c("i", { staticClass: "fas fa-bars" })]
            )
          ])
        ]),
        _vm._v(" "),
        _c("ul", { staticClass: "navbar-nav ml-auto" }, [
          _c("li", { staticClass: "nav-item dropdown" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: { "data-toggle": "dropdown", href: "#" }
              },
              [
                _c("i", { staticClass: "far fa-comments" }),
                _vm._v(" "),
                _c("span", { staticClass: "badge badge-danger navbar-badge" }, [
                  _vm._v("3")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "dropdown-menu dropdown-menu-lg dropdown-menu-right"
              },
              [
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [
                    _c("div", { staticClass: "media" }, [
                      _c("img", {
                        staticClass: "img-size-50 mr-3 img-circle",
                        attrs: {
                          src: "/dist/img/user1-128x128.jpg",
                          alt: "User Avatar"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c("h3", { staticClass: "dropdown-item-title" }, [
                          _vm._v(
                            "\n                    Brad Diesel\n                    "
                          ),
                          _c(
                            "span",
                            { staticClass: "float-right text-sm text-danger" },
                            [_c("i", { staticClass: "fas fa-star" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-sm" }, [
                          _vm._v("Call me whenever you can...")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-sm text-muted" }, [
                          _c("i", { staticClass: "far fa-clock mr-1" }),
                          _vm._v(" 4 Hours Ago")
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown-divider" }),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [
                    _c("div", { staticClass: "media" }, [
                      _c("img", {
                        staticClass: "img-size-50 img-circle mr-3",
                        attrs: {
                          src: "/dist/img/user8-128x128.jpg",
                          alt: "User Avatar"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c("h3", { staticClass: "dropdown-item-title" }, [
                          _vm._v(
                            "\n                    John Pierce\n                    "
                          ),
                          _c(
                            "span",
                            { staticClass: "float-right text-sm text-muted" },
                            [_c("i", { staticClass: "fas fa-star" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-sm" }, [
                          _vm._v("I got your message bro")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-sm text-muted" }, [
                          _c("i", { staticClass: "far fa-clock mr-1" }),
                          _vm._v(" 4 Hours Ago")
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown-divider" }),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [
                    _c("div", { staticClass: "media" }, [
                      _c("img", {
                        staticClass: "img-size-50 img-circle mr-3",
                        attrs: {
                          src: "/dist/img/user3-128x128.jpg",
                          alt: "User Avatar"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "media-body" }, [
                        _c("h3", { staticClass: "dropdown-item-title" }, [
                          _vm._v(
                            "\n                    Nora Silvester\n                    "
                          ),
                          _c(
                            "span",
                            { staticClass: "float-right text-sm text-warning" },
                            [_c("i", { staticClass: "fas fa-star" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-sm" }, [
                          _vm._v("The subject goes here")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-sm text-muted" }, [
                          _c("i", { staticClass: "far fa-clock mr-1" }),
                          _vm._v(" 4 Hours Ago")
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown-divider" }),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item dropdown-footer",
                    attrs: { href: "#" }
                  },
                  [_vm._v("See All Messages")]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item dropdown" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: { "data-toggle": "dropdown", href: "#" }
              },
              [
                _c("i", { staticClass: "far fa-bell" }),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "badge badge-warning navbar-badge" },
                  [_vm._v("15")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "dropdown-menu dropdown-menu-lg dropdown-menu-right"
              },
              [
                _c("span", { staticClass: "dropdown-item dropdown-header" }, [
                  _vm._v("15 Notifications")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown-divider" }),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [
                    _c("i", { staticClass: "fas fa-envelope mr-2" }),
                    _vm._v(" 4 new messages\n              "),
                    _c(
                      "span",
                      { staticClass: "float-right text-muted text-sm" },
                      [_vm._v("3 mins")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown-divider" }),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [
                    _c("i", { staticClass: "fas fa-users mr-2" }),
                    _vm._v(" 8 friend requests\n              "),
                    _c(
                      "span",
                      { staticClass: "float-right text-muted text-sm" },
                      [_vm._v("12 hours")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown-divider" }),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "dropdown-item", attrs: { href: "#" } },
                  [
                    _c("i", { staticClass: "fas fa-file mr-2" }),
                    _vm._v(" 3 new reports\n              "),
                    _c(
                      "span",
                      { staticClass: "float-right text-muted text-sm" },
                      [_vm._v("2 days")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown-divider" }),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item dropdown-footer",
                    attrs: { href: "#" }
                  },
                  [_vm._v("See All Notifications")]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  "data-widget": "fullscreen",
                  href: "#",
                  role: "button"
                }
              },
              [_c("i", { staticClass: "fas fa-expand-arrows-alt" })]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  "data-widget": "control-sidebar",
                  "data-slide": "true",
                  href: "#",
                  role: "button"
                }
              },
              [_c("i", { staticClass: "fas fa-th-large" })]
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image" }, [
      _c("img", {
        staticClass: "img-circle elevation-2",
        attrs: { src: "/dist/img/user2-160x160.jpg", alt: "User Image" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-inline" }, [
      _c(
        "div",
        {
          staticClass: "input-group",
          attrs: { "data-widget": "sidebar-search" }
        },
        [
          _c("input", {
            staticClass: "form-control form-control-sidebar",
            attrs: {
              type: "search",
              placeholder: "Search",
              "aria-label": "Search"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "input-group-append" }, [
            _c("button", { staticClass: "btn btn-sidebar" }, [
              _c("i", { staticClass: "fas fa-search fa-fw" })
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        { staticClass: "nav-link", attrs: { href: "pages/calendar.html" } },
        [
          _c("i", { staticClass: "fas fa-hand-holding-usd" }),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n                  Oportunidades de venta\n                  "
            ),
            _c("span", { staticClass: "badge badge-danger right" }, [
              _vm._v("2")
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fas fa-shopping-cart" }),
        _vm._v(" "),
        _c("p", [
          _vm._v("\n                  Productos\n                  "),
          _c("i", { staticClass: "fas fa-angle-left right" })
        ])
      ]),
      _vm._v(" "),
      _c("ul", { staticClass: "nav nav-treeview" }, [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "pages/mailbox/mailbox.html" }
            },
            [
              _c("i", { staticClass: "far fa-circle nav-icon" }),
              _vm._v(" "),
              _c("p", [_vm._v("Tours")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "pages/mailbox/compose.html" }
            },
            [
              _c("i", { staticClass: "far fa-circle nav-icon" }),
              _vm._v(" "),
              _c("p", [_vm._v("Catamaranes")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "pages/mailbox/read-mail.html" }
            },
            [
              _c("i", { staticClass: "far fa-circle nav-icon" }),
              _vm._v(" "),
              _c("p", [_vm._v("Autos")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "pages/mailbox/read-mail.html" }
            },
            [
              _c("i", { staticClass: "far fa-circle nav-icon" }),
              _vm._v(" "),
              _c("p", [_vm._v("Vuelos")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "pages/mailbox/read-mail.html" }
            },
            [
              _c("i", { staticClass: "far fa-circle nav-icon" }),
              _vm._v(" "),
              _c("p", [_vm._v("Hoteles")])
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        { staticClass: "nav-link", attrs: { href: "pages/gallery.html" } },
        [
          _c("i", { staticClass: "fas fa-store" }),
          _vm._v(" "),
          _c("p", [_vm._v("\n                  Agencias\n                ")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        { staticClass: "nav-link", attrs: { href: "pages/gallery.html" } },
        [
          _c("i", { staticClass: "fas fa-file-alt" }),
          _vm._v(" "),
          _c("p", [_vm._v("\n                  Documentos\n                ")])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Error/Error.vue?vue&type=template&id=37590b5c&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Error/Error.vue?vue&type=template&id=37590b5c& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-view")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Error/InternalError.vue?vue&type=template&id=76ad73d6&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Error/InternalError.vue?vue&type=template&id=76ad73d6& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [
                  _c("router-link", { attrs: { to: { path: "/" } } }, [
                    _vm._v("\n                Home\n              ")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("500 Error Page")
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "error-page" }, [
        _c("h2", { staticClass: "headline text-danger" }, [_vm._v("500")]),
        _vm._v(" "),
        _c("div", { staticClass: "error-content" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "p",
            [
              _vm._v(
                "\n          We will work on fixing that right away.\n          Meanwhile, you may \n          "
              ),
              _c("router-link", { attrs: { to: { path: "/" } } }, [
                _vm._v("\n            return to home.\n          ")
              ])
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", [_vm._v("500 Error Page")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [
      _c("i", { staticClass: "fas fa-exclamation-triangle text-danger" }),
      _vm._v(" Oops! Something went wrong.")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Error/NotAuthorized.vue?vue&type=template&id=5da55418&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Error/NotAuthorized.vue?vue&type=template&id=5da55418& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [
                  _c("router-link", { attrs: { to: { path: "/" } } }, [
                    _vm._v("\n                Home\n              ")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("403 Not Authorized")
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "error-page" }, [
        _c("h2", { staticClass: "headline text-warning" }, [_vm._v(" 403")]),
        _vm._v(" "),
        _c("div", { staticClass: "error-content" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "p",
            [
              _vm._v(
                "\n          We could not give you access on the page you were looking for.\n          Meanwhile, you may \n          "
              ),
              _c("router-link", { attrs: { to: { path: "/" } } }, [
                _vm._v("\n            return to home.\n          ")
              ])
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", [_vm._v("403 Not Authorized")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [
      _c("i", { staticClass: "fas fa-exclamation-triangle text-warning" }),
      _vm._v(" Oops! You don't have permission.")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Error/NotFound.vue?vue&type=template&id=b7c286d6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Error/NotFound.vue?vue&type=template&id=b7c286d6& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [
                  _c("router-link", { attrs: { to: { path: "/" } } }, [
                    _vm._v("\n                Home\n              ")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("404 Error")
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "error-page" }, [
        _c("h2", { staticClass: "headline text-warning" }, [_vm._v(" 404")]),
        _vm._v(" "),
        _c("div", { staticClass: "error-content" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "p",
            [
              _vm._v(
                "\n          We could not find the page you were looking for.\n          Meanwhile, you may \n          "
              ),
              _c("router-link", { attrs: { to: { path: "/" } } }, [
                _vm._v("\n            return to home.\n          ")
              ])
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", [_vm._v("404 Error")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [
      _c("i", { staticClass: "fas fa-exclamation-triangle text-warning" }),
      _vm._v(" Oops! Page not found.")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login/LoginComponent.vue?vue&type=template&id=92e6308e&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Login/LoginComponent.vue?vue&type=template&id=92e6308e& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login-box" }, [
    _c("div", { staticClass: "card card-outline card-primary" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c("p", { staticClass: "login-box-msg" }, [
            _vm._v("Regístrese para iniciar su sesión")
          ]),
          _vm._v(" "),
          _c("transition", { attrs: { name: "fade" } }, [
            _vm.show_error
              ? _c("div", { staticClass: "alert alert-danger text-center" }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.message) +
                      "\n            "
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("ValidationObserver", {
            ref: "observer",
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var validate = ref.validate
                  return [
                    _c(
                      "form",
                      { attrs: { method: "post" } },
                      [
                        _c("ValidationProvider", {
                          attrs: { name: "email", rules: "required|email" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(ref) {
                                  var errors = ref.errors
                                  return [
                                    _c(
                                      "div",
                                      { staticClass: "input-group mb-3" },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.email,
                                              expression: "email"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "email",
                                            placeholder: "Email"
                                          },
                                          domProps: { value: _vm.email },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.email = $event.target.value
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "input-group-append" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "input-group-text"
                                              },
                                              [
                                                _c("span", {
                                                  staticClass: "fas fa-envelope"
                                                })
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            class: [
                                              "error",
                                              "invalid-feedback",
                                              errors[0] ? "ver" : ""
                                            ]
                                          },
                                          [_vm._v(_vm._s(errors[0]))]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          )
                        }),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          attrs: { name: "password", rules: "required" },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(ref) {
                                  var errors = ref.errors
                                  return [
                                    _c(
                                      "div",
                                      { staticClass: "input-group mb-3" },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.password,
                                              expression: "password"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: {
                                            type: "password",
                                            placeholder: "Password"
                                          },
                                          domProps: { value: _vm.password },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.password = $event.target.value
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "input-group-append" },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "input-group-text"
                                              },
                                              [
                                                _c("span", {
                                                  staticClass: "fas fa-lock"
                                                })
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          {
                                            class: [
                                              "error",
                                              "invalid-feedback",
                                              errors[0] ? "ver" : ""
                                            ]
                                          },
                                          [_vm._v(_vm._s(errors[0]))]
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ],
                            null,
                            true
                          )
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-8" }, [
                            _c("div", { staticClass: "icheck-primary" }, [
                              _c("input", {
                                attrs: { type: "checkbox", id: "remember" }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary btn-block",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    validate().then(_vm.login)
                                  }
                                }
                              },
                              [_vm._v("Ingresar")]
                            )
                          ])
                        ])
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "mb-1 text-center mt-2" },
            [
              _c(
                "router-link",
                { attrs: { to: { name: "RestablecerContrasena" } } },
                [_vm._v("\n                Recuperar contraseña\n            ")]
              )
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header text-center" }, [
      _c("img", {
        attrs: { src: "/img/Logotipo.png", alt: "Logo Caribbean Hollidays" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login/NewPassword.vue?vue&type=template&id=07bbc5f4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Login/NewPassword.vue?vue&type=template&id=07bbc5f4& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login-box" }, [
    _c("div", { staticClass: "card card-outline card-primary" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _vm.exist_token
          ? _c(
              "div",
              [
                _c("p", { staticClass: "login-box-msg" }, [
                  _vm._v(
                    "Está a solo un paso de su nueva contraseña, recupere su contraseña ahora."
                  )
                ]),
                _vm._v(" "),
                _c("ValidationObserver", {
                  ref: "observer",
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var validate = ref.validate
                          return [
                            _c(
                              "form",
                              {
                                attrs: { action: "login.html", method: "post" }
                              },
                              [
                                _c("ValidationProvider", {
                                  attrs: {
                                    rules: "required|password:@confirm",
                                    name: "password"
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var errors = ref.errors
                                          return [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "input-group mb-3"
                                              },
                                              [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        _vm.formData.password,
                                                      expression:
                                                        "formData.password"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    type: "password",
                                                    placeholder: "Contraseña"
                                                  },
                                                  domProps: {
                                                    value: _vm.formData.password
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        _vm.formData,
                                                        "password",
                                                        $event.target.value
                                                      )
                                                    }
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "input-group-append"
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "input-group-text"
                                                      },
                                                      [
                                                        _c("span", {
                                                          staticClass:
                                                            "fas fa-lock"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    class: [
                                                      "error",
                                                      "invalid-feedback",
                                                      errors[0] ? "ver" : ""
                                                    ]
                                                  },
                                                  [_vm._v(_vm._s(errors[0]))]
                                                )
                                              ]
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                }),
                                _vm._v(" "),
                                _c("ValidationProvider", {
                                  attrs: {
                                    name: "confirmar contraseña",
                                    vid: "confirm",
                                    rules: "required"
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var errors = ref.errors
                                          return [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "input-group mb-3"
                                              },
                                              [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        _vm.confirmation_password,
                                                      expression:
                                                        "confirmation_password"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    type: "password",
                                                    placeholder:
                                                      "Confirmar Contraseña"
                                                  },
                                                  domProps: {
                                                    value:
                                                      _vm.confirmation_password
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.confirmation_password =
                                                        $event.target.value
                                                    }
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "input-group-append"
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "input-group-text"
                                                      },
                                                      [
                                                        _c("span", {
                                                          staticClass:
                                                            "fas fa-lock"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    class: [
                                                      "error",
                                                      "invalid-feedback",
                                                      errors[0] ? "ver" : ""
                                                    ]
                                                  },
                                                  [_vm._v(_vm._s(errors[0]))]
                                                )
                                              ]
                                            )
                                          ]
                                        }
                                      }
                                    ],
                                    null,
                                    true
                                  )
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-12" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-primary btn-block",
                                        attrs: {
                                          disabled: _vm.disabled_button,
                                          type: "button"
                                        },
                                        on: {
                                          click: function($event) {
                                            validate().then(_vm.updatePassword)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                  Cambiar contraseña "
                                        ),
                                        _vm.disabled_button
                                          ? _c("i", {
                                              staticClass:
                                                "fas fa-sync-alt fa-spin"
                                            })
                                          : _vm._e()
                                      ]
                                    )
                                  ])
                                ])
                              ],
                              1
                            )
                          ]
                        }
                      }
                    ],
                    null,
                    false,
                    2517934440
                  )
                })
              ],
              1
            )
          : _vm.password_update
          ? _c("div", [
              _c("p", { staticClass: "login-box-msg" }, [
                _vm._v(
                  "\n          La contraseña fue modificada de forma correcta.\n        "
                )
              ]),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "mt-3 mb-1" },
                [
                  _c("router-link", { attrs: { to: { name: "Login" } } }, [
                    _vm._v("\n            Login\n          ")
                  ])
                ],
                1
              )
            ])
          : _c("div", [
              _c("p", { staticClass: "login-box-msg" }, [
                _vm._v(
                  "\n          Parece que hizo clic en un enlace de restablecimiento de contraseña\n          no válido. Inténtalo de nuevo.\n        "
                )
              ]),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "mt-3 mb-1" },
                [
                  _c(
                    "router-link",
                    { attrs: { to: { name: "RestablecerContrasena" } } },
                    [_vm._v("\n            Recuperar contraseña\n          ")]
                  )
                ],
                1
              )
            ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header text-center" }, [
      _c("img", {
        attrs: {
          width: "50%",
          src: "/img/Logotipo.png",
          alt: "Logo Caribbean Hollidays"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login/RestorePassword.vue?vue&type=template&id=4da96118&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Login/RestorePassword.vue?vue&type=template&id=4da96118& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login-box" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body login-card-body" }, [
        _vm.show_confirmation
          ? _c("div", [
              _c("p", { staticClass: "login-box-msg" }, [
                _vm._v(
                  "Revise su correo electrónico para encontrar un enlace para restablecer su contraseña. Si no aparece en unos minutos, revise su carpeta de spam."
                )
              ])
            ])
          : _c(
              "div",
              [
                _c("p", { staticClass: "login-box-msg" }, [
                  _vm._v(
                    "¿Olvidaste tu contraseña? Aquí puede recuperar fácilmente una nueva contraseña."
                  )
                ]),
                _vm._v(" "),
                _c("ValidationObserver", {
                  ref: "observer",
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(ref) {
                        var validate = ref.validate
                        return [
                          _c(
                            "form",
                            { attrs: { method: "post" } },
                            [
                              _c("ValidationProvider", {
                                attrs: {
                                  name: "email",
                                  rules: "required|email"
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var errors = ref.errors
                                        return [
                                          _c(
                                            "div",
                                            { staticClass: "input-group mb-3" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.formData.email,
                                                    expression: "formData.email"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                attrs: {
                                                  type: "email",
                                                  placeholder: "Email"
                                                },
                                                domProps: {
                                                  value: _vm.formData.email
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "email",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "input-group-append"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "input-group-text"
                                                    },
                                                    [
                                                      _c("span", {
                                                        staticClass:
                                                          "fas fa-envelope"
                                                      })
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  class: [
                                                    "error",
                                                    "invalid-feedback",
                                                    errors[0] ? "ver" : ""
                                                  ]
                                                },
                                                [_vm._v(_vm._s(errors[0]))]
                                              )
                                            ]
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                )
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-12" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary btn-block",
                                      attrs: {
                                        type: "button",
                                        disabled: _vm.disabled_button
                                      },
                                      on: {
                                        click: function($event) {
                                          validate().then(_vm.restorePassword())
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                            Solicitar nueva contraseña\n                            "
                                      ),
                                      _vm.disabled_button
                                        ? _c("i", {
                                            staticClass:
                                              "fas fa-sync-alt fa-spin"
                                          })
                                        : _vm._e()
                                    ]
                                  )
                                ])
                              ])
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ])
                })
              ],
              1
            ),
        _vm._v(" "),
        _c(
          "p",
          { staticClass: "mt-3 mb-1" },
          [
            _c("router-link", { attrs: { to: { name: "Login" } } }, [
              _vm._v("\n                Login\n            ")
            ])
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header text-center" }, [
      _c("img", {
        attrs: {
          width: "50%",
          src: "/img/Logotipo.png",
          alt: "Logo Caribbean Hollidays"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login/index.vue?vue&type=template&id=3723d45d&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Login/index.vue?vue&type=template&id=3723d45d& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "transition",
        { attrs: { name: "fade", mode: "out-in" } },
        [_c("router-view")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/UserComponent.vue?vue&type=template&id=3f3932bc&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/UserComponent.vue?vue&type=template&id=3f3932bc& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [
                  _c("router-link", { attrs: { to: { path: "/" } } }, [
                    _vm._v("\n              Home\n              ")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _vm.id == null
                ? _c(
                    "li",
                    { staticClass: "breadcrumb-item" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: { name: "getUsers" } } },
                        [_vm._v("\n              Usuarios\n              ")]
                      )
                    ],
                    1
                  )
                : _c(
                    "li",
                    { staticClass: "breadcrumb-item" },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "perfilUsuario",
                              params: { id: +_vm.id }
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n              Perfil de usuario\n              "
                          )
                        ]
                      )
                    ],
                    1
                  ),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Usuario")
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c("div", { staticClass: "card card-primary" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm.newUser
                ? _c("h3", { staticClass: "card-title" }, [
                    _vm._v("Agregar nuevo perfil")
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.newUser
                ? _c("h3", { staticClass: "card-title" }, [
                    _vm._v("Editar perfil")
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("transition", { attrs: { name: "fade" } }, [
                  _vm.profileErrors.length > 0
                    ? _c("div", { staticClass: "alert alert-danger" }, [
                        _c(
                          "ul",
                          _vm._l(_vm.profileErrors, function(e, index) {
                            return _c("li", { key: index }, [_vm._v(_vm._s(e))])
                          }),
                          0
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.successProfileMessage.length > 0
                    ? _c(
                        "div",
                        { staticClass: "alert alert-success text-center" },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.successProfileMessage) +
                              "\n              "
                          )
                        ]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Nombre")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.name,
                        expression: "name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "John Doe" },
                    domProps: { value: _vm.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.name = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "lastName" } }, [
                    _vm._v("Apellidos")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.lastName,
                        expression: "lastName"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "John Doe" },
                    domProps: { value: _vm.lastName },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.lastName = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "birthDate" } }, [
                    _vm._v("Fecha de nacimiento")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.birthDate,
                        expression: "birthDate"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "date", placeholder: "John Doe" },
                    domProps: { value: _vm.birthDate },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.birthDate = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "sex" } }, [_vm._v("Sexo")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.number",
                          value: _vm.sex,
                          expression: "sex",
                          modifiers: { number: true }
                        }
                      ],
                      staticClass: "form-control",
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return _vm._n(val)
                            })
                          _vm.sex = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "1" } }, [
                        _vm._v("Masculino")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "2" } }, [
                        _vm._v("Femenino")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "3" } }, [_vm._v("Otro")])
                    ]
                  )
                ])
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("div", { staticClass: "card card-primary" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm.newUser
                ? _c("h3", { staticClass: "card-title" }, [
                    _vm._v("Agregar nuevo usuario")
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.newUser
                ? _c("h3", { staticClass: "card-title" }, [
                    _vm._v("Editar usuario")
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "form",
              { attrs: { method: "POST", action: "/user/saveContent" } },
              [
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c("transition", { attrs: { name: "fade" } }, [
                      _vm.userErrors.length > 0
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "alert alert-danger alert-dismissible text-center"
                            },
                            [
                              _c(
                                "ul",
                                _vm._l(_vm.userErrors, function(e, index) {
                                  return _c("li", { key: index }, [
                                    _vm._v(_vm._s(e))
                                  ])
                                }),
                                0
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.successUserMessage.length > 0
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "alert alert-success alert-dismissible text-center"
                            },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(_vm.successUserMessage) +
                                  "\n                "
                              )
                            ]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "email" } }, [
                        _vm._v("Correo electrónico")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.email,
                            expression: "email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "email",
                          disabled: !_vm.newUser,
                          placeholder: "ejemplo.fulanito@ejemplo.com"
                        },
                        domProps: { value: _vm.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.email = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    this.user == null
                      ? _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "emailConfirm" } }, [
                            _vm._v("Confirmar correo electrónico")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.emailConfirm,
                                expression: "emailConfirm"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "email",
                              placeholder: "ejemplo.fulanito@ejemplo.com"
                            },
                            domProps: { value: _vm.emailConfirm },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.emailConfirm = $event.target.value
                              }
                            }
                          })
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: this.user == null,
                            expression: "this.user == null"
                          }
                        ],
                        staticClass: "form-group"
                      },
                      [
                        _c("label", { attrs: { for: "password" } }, [
                          _vm._v("Contraseña")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.password,
                              expression: "password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            placeholder: "Contraseña"
                          },
                          domProps: { value: _vm.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.password = $event.target.value
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Estatus del usuario")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model.number",
                              value: _vm.statusUser,
                              expression: "statusUser",
                              modifiers: { number: true }
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return _vm._n(val)
                                })
                              _vm.statusUser = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v("Inactivo")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Activo")
                          ])
                        ]
                      )
                    ])
                  ],
                  1
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-12" },
          [
            _c("contacts-component", {
              ref: "contactComponent",
              attrs: { id: +this.ContactId, typeContact: 1 }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-12" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.saveContent()
                }
              }
            },
            [_vm._v("\n          Guardar\n        ")]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", [_vm._v("Usuario")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Users.vue?vue&type=template&id=16441b5c&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/Users.vue?vue&type=template&id=16441b5c& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [
                  _c("router-link", { attrs: { to: { path: "/" } } }, [
                    _vm._v("\n                Home\n              ")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Usuarios")
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-header" },
              [
                _vm.userPermission.create
                  ? _c(
                      "router-link",
                      {
                        staticClass: "btn btn-warning",
                        staticStyle: { color: "#fff" },
                        attrs: { to: { name: "CreateUser" }, name: "created" }
                      },
                      [
                        _c("i", { staticClass: "fas fa-user" }),
                        _vm._v("\n              Nuevo Usuario\n            ")
                      ]
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("transition", { attrs: { name: "fade" } }, [
                  _vm.showError || _vm.showSuccess || _vm.showWarning
                    ? _c(
                        "div",
                        {
                          staticClass: "alert alert-dismissible text-center",
                          class: {
                            "alert-danger": _vm.showError,
                            "alert-warning": _vm.showWarning,
                            "alert-success": _vm.showSuccess
                          }
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.message) +
                              "\n              "
                          )
                        ]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "table",
                  {
                    staticClass: "table table-bordered table-striped",
                    staticStyle: { width: "100%" },
                    attrs: { id: "usersTable" }
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Nombre")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Apellido")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Correo")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Tipo de Usuario")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Fecha de Creacion")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Ver")]),
                        _vm._v(" "),
                        this.userPermission.delete
                          ? _c("th", [_vm._v("Eliminar")])
                          : _vm._e(),
                        _vm._v(" "),
                        this.permissionPermission.read
                          ? _c("th", [_vm._v("Acciones")])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.users, function(user) {
                        return _c("tr", { key: user.id }, [
                          _c("td", [_vm._v(_vm._s(user.profile.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(user.profile.last_name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(user.email))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(user.type))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm.fechaFormato(user.created_at)))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-primary btn-sm",
                                  attrs: {
                                    name: "read",
                                    to: {
                                      name: "perfilUsuario",
                                      params: { id: user.id }
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                      Ver\n                    "
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.userPermission.delete
                            ? _c("td", [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-danger btn-sm",
                                    attrs: { name: "delete" },
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteUser(user.id)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                      Eliminar\n                    "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.permissionPermission.read
                            ? _c(
                                "td",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "btn btn-secondary btn-sm",
                                      attrs: {
                                        to: {
                                          name: "permisos",
                                          params: { id: user.id }
                                        }
                                      }
                                    },
                                    [_vm._v("Permisos")]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ])
                      }),
                      0
                    )
                  ]
                )
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", [_vm._v("Usuarios")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Usuarios")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/permissionUsers.vue?vue&type=template&id=541ca6e3&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/permissionUsers.vue?vue&type=template&id=541ca6e3& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "row mb-2" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-6" }, [
          _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
            _c(
              "li",
              { staticClass: "breadcrumb-item" },
              [
                _c("router-link", { attrs: { to: { path: "/" } } }, [
                  _vm._v("\n                Home\n              ")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "breadcrumb-item" },
              [
                _c("router-link", { attrs: { to: { name: "getUsers" } } }, [
                  _vm._v("\n              Usuarios\n              ")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("li", { staticClass: "breadcrumb-item active" }, [
              _vm._v("Permisos Usuarios")
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("transition", { attrs: { name: "fade" } }, [
                  _vm.errors.length > 0
                    ? _c("div", { staticClass: "alert alert-danger" }, [
                        _c(
                          "ul",
                          _vm._l(_vm.errors, function(e, index) {
                            return _c("li", { key: index }, [
                              _vm._v(" " + _vm._s(e))
                            ])
                          }),
                          0
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "table",
                  {
                    staticClass: "table table-bordered table-striped",
                    staticStyle: { width: "100%" },
                    attrs: { id: "permissionsTable" }
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.permissions, function(permission) {
                        return _c("tr", { key: permission.id }, [
                          _c("td", [_vm._v(_vm._s(permission.name))]),
                          _vm._v(" "),
                          _c("td", { attrs: { align: "center" } }, [
                            _c("input", {
                              attrs: {
                                disabled: !_vm.permissionPermission.update,
                                type: "checkbox",
                                name: "read",
                                id: "CBoxReadT"
                              },
                              domProps: {
                                value: permission.permission.read,
                                checked: permission.permission.read
                              },
                              on: {
                                change: function($event) {
                                  return _vm.check(
                                    permission.id,
                                    $event.target.name,
                                    $event.target.checked
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", { attrs: { align: "center" } }, [
                            _c("input", {
                              attrs: {
                                disabled: !_vm.permissionPermission.update,
                                type: "checkbox",
                                name: "create",
                                id: "CBoxCreatedT"
                              },
                              domProps: {
                                value: permission.permission.create,
                                checked: permission.permission.create
                              },
                              on: {
                                click: function($event) {
                                  return _vm.check(
                                    permission.id,
                                    $event.target.name,
                                    $event.target.checked
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", { attrs: { align: "center" } }, [
                            _c("input", {
                              attrs: {
                                disabled: !_vm.permissionPermission.update,
                                type: "checkbox",
                                name: "update",
                                id: "CBoxUpdateT"
                              },
                              domProps: {
                                value: permission.permission.update,
                                checked: permission.permission.update
                              },
                              on: {
                                change: function($event) {
                                  return _vm.check(
                                    permission.id,
                                    $event.target.name,
                                    $event.target.checked
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", { attrs: { align: "center" } }, [
                            _c("input", {
                              attrs: {
                                disabled: !_vm.permissionPermission.update,
                                type: "checkbox",
                                name: "delete",
                                id: "CBoxDeleteT"
                              },
                              domProps: {
                                value: permission.permission.delete,
                                checked: permission.permission.delete
                              },
                              on: {
                                change: function($event) {
                                  return _vm.check(
                                    permission.id,
                                    $event.target.name,
                                    $event.target.checked
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      }),
                      0
                    )
                  ]
                )
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", [_vm._v("Permisos Usuarios")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Modulo")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Ver")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Agregar")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Editar")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Eliminar")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/profileView.vue?vue&type=template&id=9ede1050&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Users/profileView.vue?vue&type=template&id=9ede1050& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [
                  _c("router-link", { attrs: { to: { path: "/" } } }, [
                    _vm._v("\n              Home\n              ")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Perfil de usuario")
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c(
          "div",
          { staticClass: "row" },
          [
            _c("data-user-component", { attrs: { id_user: this.id } }),
            _vm._v(" "),
            _c("info-user-component", { attrs: { id_user: this.id } })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", [_vm._v("Perfil")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/vue-loader/lib/runtime/componentNormalizer.js'");

/***/ }),

/***/ "./node_modules/vue-moment/dist/vue-moment.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-moment/dist/vue-moment.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/vue-moment/dist/vue-moment.js'");

/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader!../../css-loader??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!./vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/vue-multiselect/dist/vue-multiselect.min.js'");

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/vue-router/dist/vue-router.esm.js'");

/***/ }),

/***/ "./node_modules/vue-sweetalert2/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-sweetalert2/dist/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/vue-sweetalert2/dist/index.js'");

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/vue/dist/vue.common.js'");

/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createLogger, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/pablo/CRM/CRM-Tours/node_modules/vuex/dist/vuex.esm.js'");

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./resources/js/routes.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/index */ "./resources/js/store/index.js");
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors */ "./resources/js/interceptors.js");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middlewares */ "./resources/js/middlewares.js");
/* harmony import */ var v_select2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! v-select2-component */ "./node_modules/v-select2-component/dist/Select2.esm.js");
/* harmony import */ var vue_sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-sweetalert2 */ "./node_modules/vue-sweetalert2/dist/index.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_locale_es_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vee-validate/dist/locale/es.json */ "./node_modules/vee-validate/dist/locale/es.json");
var vee_validate_dist_locale_es_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/es.json */ "./node_modules/vee-validate/dist/locale/es.json", 1);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vue_js_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-js-modal */ "./node_modules/vue-js-modal/dist/index.js");
/* harmony import */ var vue_js_modal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue_js_modal__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-datetime/dist/vue-datetime.css */ "./node_modules/vue-datetime/dist/vue-datetime.css");
/* harmony import */ var vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue_datetime_dist_vue_datetime_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var vue_moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-moment */ "./node_modules/vue-moment/dist/vue-moment.js");
/* harmony import */ var vue_moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vue_moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_13__);
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");











 // You need a specific loader for CSS files




moment_timezone__WEBPACK_IMPORTED_MODULE_13___default.a.tz.setDefault('America/Cancun');
moment_timezone__WEBPACK_IMPORTED_MODULE_13___default.a.locale('es'); // Install and Activate the Arabic locale.

Object(vee_validate__WEBPACK_IMPORTED_MODULE_6__["localize"])("es", vee_validate_dist_locale_es_json__WEBPACK_IMPORTED_MODULE_7__);
luxon__WEBPACK_IMPORTED_MODULE_8__["Settings"].defaultLocale = "es";
window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
Vue.use(v_select2_component__WEBPACK_IMPORTED_MODULE_4__["default"]);
Vue.use(vue_sweetalert2__WEBPACK_IMPORTED_MODULE_5__["default"]);
Vue.use(vue_moment__WEBPACK_IMPORTED_MODULE_12___default.a, {
  moment: moment_timezone__WEBPACK_IMPORTED_MODULE_13___default.a
});
Vue.use(vue_js_modal__WEBPACK_IMPORTED_MODULE_10___default.a, {
  dynamicDefault: {
    draggable: true,
    resizable: true
  }
});
Vue.component('multiselect', vue_multiselect__WEBPACK_IMPORTED_MODULE_9___default.a);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component("example-component", __webpack_require__(/*! ./components/ExampleComponent.vue */ "./resources/js/components/ExampleComponent.vue")["default"]);
Vue.component("login-component", __webpack_require__(/*! ./views/Login/index.vue */ "./resources/js/views/Login/index.vue")["default"]);
Vue.component("dashboard-component", __webpack_require__(/*! ./views/Dashboard/index.vue */ "./resources/js/views/Dashboard/index.vue")["default"]);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
  el: "#app",
  router: _routes__WEBPACK_IMPORTED_MODULE_0__["default"],
  store: _store_index__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/components/Address/addressComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Address/addressComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addressComponent_vue_vue_type_template_id_0d153d8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addressComponent.vue?vue&type=template&id=0d153d8f& */ "./resources/js/components/Address/addressComponent.vue?vue&type=template&id=0d153d8f&");
/* harmony import */ var _addressComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addressComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Address/addressComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addressComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addressComponent_vue_vue_type_template_id_0d153d8f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addressComponent_vue_vue_type_template_id_0d153d8f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Address/addressComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Address/addressComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Address/addressComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addressComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./addressComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Address/addressComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addressComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Address/addressComponent.vue?vue&type=template&id=0d153d8f&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Address/addressComponent.vue?vue&type=template&id=0d153d8f& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addressComponent_vue_vue_type_template_id_0d153d8f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./addressComponent.vue?vue&type=template&id=0d153d8f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Address/addressComponent.vue?vue&type=template&id=0d153d8f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addressComponent_vue_vue_type_template_id_0d153d8f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addressComponent_vue_vue_type_template_id_0d153d8f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Contacts/contactsComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Contacts/contactsComponent.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contactsComponent_vue_vue_type_template_id_8346024e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactsComponent.vue?vue&type=template&id=8346024e& */ "./resources/js/components/Contacts/contactsComponent.vue?vue&type=template&id=8346024e&");
/* harmony import */ var _contactsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Contacts/contactsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _contactsComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactsComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Contacts/contactsComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _contactsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _contactsComponent_vue_vue_type_template_id_8346024e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _contactsComponent_vue_vue_type_template_id_8346024e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Contacts/contactsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Contacts/contactsComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Contacts/contactsComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./contactsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contacts/contactsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Contacts/contactsComponent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Contacts/contactsComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contactsComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./contactsComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contacts/contactsComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contactsComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contactsComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contactsComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_contactsComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Contacts/contactsComponent.vue?vue&type=template&id=8346024e&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Contacts/contactsComponent.vue?vue&type=template&id=8346024e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contactsComponent_vue_vue_type_template_id_8346024e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./contactsComponent.vue?vue&type=template&id=8346024e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contacts/contactsComponent.vue?vue&type=template&id=8346024e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contactsComponent_vue_vue_type_template_id_8346024e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contactsComponent_vue_vue_type_template_id_8346024e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Customers/info/dataComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Customers/info/dataComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataComponent_vue_vue_type_template_id_2f378e92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataComponent.vue?vue&type=template&id=2f378e92& */ "./resources/js/components/Customers/info/dataComponent.vue?vue&type=template&id=2f378e92&");
/* harmony import */ var _dataComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Customers/info/dataComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dataComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dataComponent_vue_vue_type_template_id_2f378e92___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dataComponent_vue_vue_type_template_id_2f378e92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Customers/info/dataComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Customers/info/dataComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Customers/info/dataComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dataComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/info/dataComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Customers/info/dataComponent.vue?vue&type=template&id=2f378e92&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Customers/info/dataComponent.vue?vue&type=template&id=2f378e92& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dataComponent_vue_vue_type_template_id_2f378e92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dataComponent.vue?vue&type=template&id=2f378e92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/info/dataComponent.vue?vue&type=template&id=2f378e92&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dataComponent_vue_vue_type_template_id_2f378e92___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dataComponent_vue_vue_type_template_id_2f378e92___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Customers/info/infoComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Customers/info/infoComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _infoComponent_vue_vue_type_template_id_603f0a33___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infoComponent.vue?vue&type=template&id=603f0a33& */ "./resources/js/components/Customers/info/infoComponent.vue?vue&type=template&id=603f0a33&");
/* harmony import */ var _infoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Customers/info/infoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _infoComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infoComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Customers/info/infoComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _infoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _infoComponent_vue_vue_type_template_id_603f0a33___WEBPACK_IMPORTED_MODULE_0__["render"],
  _infoComponent_vue_vue_type_template_id_603f0a33___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Customers/info/infoComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Customers/info/infoComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Customers/info/infoComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_infoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./infoComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/info/infoComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_infoComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Customers/info/infoComponent.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/Customers/info/infoComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_infoComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./infoComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/info/infoComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_infoComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_infoComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_infoComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_infoComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Customers/info/infoComponent.vue?vue&type=template&id=603f0a33&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Customers/info/infoComponent.vue?vue&type=template&id=603f0a33& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_infoComponent_vue_vue_type_template_id_603f0a33___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./infoComponent.vue?vue&type=template&id=603f0a33& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/info/infoComponent.vue?vue&type=template&id=603f0a33&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_infoComponent_vue_vue_type_template_id_603f0a33___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_infoComponent_vue_vue_type_template_id_603f0a33___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Customers/modalFormComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Customers/modalFormComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalFormComponent_vue_vue_type_template_id_c7fa9c5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalFormComponent.vue?vue&type=template&id=c7fa9c5e& */ "./resources/js/components/Customers/modalFormComponent.vue?vue&type=template&id=c7fa9c5e&");
/* harmony import */ var _modalFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalFormComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Customers/modalFormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _modalFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalFormComponent_vue_vue_type_template_id_c7fa9c5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _modalFormComponent_vue_vue_type_template_id_c7fa9c5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Customers/modalFormComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Customers/modalFormComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Customers/modalFormComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./modalFormComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/modalFormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modalFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Customers/modalFormComponent.vue?vue&type=template&id=c7fa9c5e&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Customers/modalFormComponent.vue?vue&type=template&id=c7fa9c5e& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalFormComponent_vue_vue_type_template_id_c7fa9c5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./modalFormComponent.vue?vue&type=template&id=c7fa9c5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/modalFormComponent.vue?vue&type=template&id=c7fa9c5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalFormComponent_vue_vue_type_template_id_c7fa9c5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modalFormComponent_vue_vue_type_template_id_c7fa9c5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Customers/tableComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Customers/tableComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tableComponent_vue_vue_type_template_id_1bee9cb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableComponent.vue?vue&type=template&id=1bee9cb4& */ "./resources/js/components/Customers/tableComponent.vue?vue&type=template&id=1bee9cb4&");
/* harmony import */ var _tableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Customers/tableComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tableComponent_vue_vue_type_template_id_1bee9cb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tableComponent_vue_vue_type_template_id_1bee9cb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Customers/tableComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Customers/tableComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Customers/tableComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./tableComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/tableComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tableComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Customers/tableComponent.vue?vue&type=template&id=1bee9cb4&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Customers/tableComponent.vue?vue&type=template&id=1bee9cb4& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableComponent_vue_vue_type_template_id_1bee9cb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./tableComponent.vue?vue&type=template&id=1bee9cb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Customers/tableComponent.vue?vue&type=template&id=1bee9cb4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableComponent_vue_vue_type_template_id_1bee9cb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tableComponent_vue_vue_type_template_id_1bee9cb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony import */ var _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ExampleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Users/Profile/dataUserComponent.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Users/Profile/dataUserComponent.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataUserComponent_vue_vue_type_template_id_46620280___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataUserComponent.vue?vue&type=template&id=46620280& */ "./resources/js/components/Users/Profile/dataUserComponent.vue?vue&type=template&id=46620280&");
/* harmony import */ var _dataUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataUserComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Users/Profile/dataUserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dataUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dataUserComponent_vue_vue_type_template_id_46620280___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dataUserComponent_vue_vue_type_template_id_46620280___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Users/Profile/dataUserComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Users/Profile/dataUserComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Users/Profile/dataUserComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dataUserComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users/Profile/dataUserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Users/Profile/dataUserComponent.vue?vue&type=template&id=46620280&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Users/Profile/dataUserComponent.vue?vue&type=template&id=46620280& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dataUserComponent_vue_vue_type_template_id_46620280___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./dataUserComponent.vue?vue&type=template&id=46620280& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users/Profile/dataUserComponent.vue?vue&type=template&id=46620280&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dataUserComponent_vue_vue_type_template_id_46620280___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dataUserComponent_vue_vue_type_template_id_46620280___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Users/Profile/infoUserComponent.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Users/Profile/infoUserComponent.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _infoUserComponent_vue_vue_type_template_id_6d809408___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infoUserComponent.vue?vue&type=template&id=6d809408& */ "./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=template&id=6d809408&");
/* harmony import */ var _infoUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoUserComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _infoUserComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infoUserComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _infoUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _infoUserComponent_vue_vue_type_template_id_6d809408___WEBPACK_IMPORTED_MODULE_0__["render"],
  _infoUserComponent_vue_vue_type_template_id_6d809408___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Users/Profile/infoUserComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_infoUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./infoUserComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_infoUserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_infoUserComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./infoUserComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_infoUserComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_infoUserComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_infoUserComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_infoUserComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=template&id=6d809408&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=template&id=6d809408& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_infoUserComponent_vue_vue_type_template_id_6d809408___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./infoUserComponent.vue?vue&type=template&id=6d809408& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users/Profile/infoUserComponent.vue?vue&type=template&id=6d809408&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_infoUserComponent_vue_vue_type_template_id_6d809408___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_infoUserComponent_vue_vue_type_template_id_6d809408___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/interceptors.js":
/*!**************************************!*\
  !*** ./resources/js/interceptors.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.request.use(function (req) {
  // `req` is the Axios request config, so you can modify
  // the `headers`.
  var data_user = localStorage.getItem("data_user");
  data_user = JSON.parse(data_user);
  var token = "invalid";

  if (data_user) {
    token = data_user.token;
  }

  req.headers.Authorization = "Bearer ".concat(token);
  return req;
});

var responseStatuses = function responseStatuses(err) {
  if (err.response.status === 401 && err.response.config.url != "/api/v1/auth/login") {
    localStorage.removeItem("data_user");
    window.location.href = "/login";
  } else {
    return Promise.reject(err);
  }

  throw err;
};

axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.response.use(function (response) {
  return response;
}, function (err) {
  return responseStatuses(err);
});

/***/ }),

/***/ "./resources/js/middlewares.js":
/*!*************************************!*\
  !*** ./resources/js/middlewares.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./resources/js/store/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./resources/js/routes.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors */ "./resources/js/interceptors.js");
/* harmony import */ var _providers_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/Auth */ "./resources/js/providers/Auth.js");
/* harmony import */ var _providers_UserPermission__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/UserPermission */ "./resources/js/providers/UserPermission.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var AuthResourse = new _providers_Auth__WEBPACK_IMPORTED_MODULE_5__["default"]();
var userPermissionResource = new _providers_UserPermission__WEBPACK_IMPORTED_MODULE_6__["default"]();
var validate_jwt;

function getUser() {
  return _getUser.apply(this, arguments);
}

function _getUser() {
  _getUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", localStorage.getItem("data_user"));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getUser.apply(this, arguments);
}

function existToken() {
  return _existToken.apply(this, arguments);
}

function _existToken() {
  _existToken = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getUser();

          case 2:
            if (!_context3.sent) {
              _context3.next = 6;
              break;
            }

            validate_jwt = true;
            _context3.next = 7;
            break;

          case 6:
            validate_jwt = false;

          case 7:
            return _context3.abrupt("return", validate_jwt);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _existToken.apply(this, arguments);
}

_routes__WEBPACK_IMPORTED_MODULE_2__["default"].beforeEach( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(to, from, next) {
    var jwt, url;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return existToken();

          case 2:
            jwt = _context.sent;
            url = to.path.split("/");
            url = "/" + url[1];

            if (!(jwt === false && to.path !== "/login" && to.path !== "/restablecer-contrasena" && url !== "/nueva-contrasena")) {
              _context.next = 10;
              break;
            }

            localStorage.removeItem("data_user");
            window.location.href = "/login";
            _context.next = 21;
            break;

          case 10:
            if (!(jwt === true && to.path === "/login" && to.path === "/restablecer-contrasena" && url === "/nueva-contrasena")) {
              _context.next = 14;
              break;
            }

            _routes__WEBPACK_IMPORTED_MODULE_2__["default"].push({
              path: '/'
            });
            _context.next = 21;
            break;

          case 14:
            _context.next = 16;
            return hasAccess(to);

          case 16:
            if (!_context.sent) {
              _context.next = 20;
              break;
            }

            next();
            _context.next = 21;
            break;

          case 20:
            _routes__WEBPACK_IMPORTED_MODULE_2__["default"].push({
              name: 'notauthorized'
            });

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

function hasAccess(_x4) {
  return _hasAccess.apply(this, arguments);
}

function _hasAccess() {
  _hasAccess = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(to) {
    var permission;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.t0 = to.name;
            _context4.next = _context4.t0 === 'Overview' ? 3 : _context4.t0 === 'getUsers' ? 4 : _context4.t0 === 'CreateUser' ? 4 : _context4.t0 === 'EditUser' ? 4 : _context4.t0 === 'permisos' ? 26 : _context4.t0 === 'error' ? 33 : _context4.t0 === 'internalError' ? 33 : _context4.t0 === 'notfound' ? 33 : _context4.t0 === 'notauthorized' ? 33 : 34;
            break;

          case 3:
            return _context4.abrupt("return", true);

          case 4:
            _context4.next = 6;
            return getPermissionModule("Usuarios");

          case 6:
            permission = _context4.sent;

            if (permission.success) {
              _context4.next = 9;
              break;
            }

            return _context4.abrupt("return", false);

          case 9:
            permission = permission.data;
            _context4.t1 = to.name;
            _context4.next = _context4.t1 === 'getUsers' ? 13 : _context4.t1 === 'CreateUser' ? 14 : _context4.t1 === 'EditUser' ? 15 : 25;
            break;

          case 13:
            return _context4.abrupt("return", permission.permission.read);

          case 14:
            return _context4.abrupt("return", permission.permission.create);

          case 15:
            _context4.t2 = permission.permission.update;

            if (_context4.t2) {
              _context4.next = 24;
              break;
            }

            _context4.t3 = to.params.id;
            _context4.t4 = JSON;
            _context4.next = 21;
            return getUser();

          case 21:
            _context4.t5 = _context4.sent;
            _context4.t6 = _context4.t4.parse.call(_context4.t4, _context4.t5).user.id;
            _context4.t2 = _context4.t3 == _context4.t6;

          case 24:
            return _context4.abrupt("return", _context4.t2);

          case 25:
            return _context4.abrupt("break", 34);

          case 26:
            _context4.next = 28;
            return getPermissionModule("Permisos");

          case 28:
            permission = _context4.sent;

            if (permission.success) {
              _context4.next = 31;
              break;
            }

            return _context4.abrupt("return", false);

          case 31:
            permission = permission.data;
            return _context4.abrupt("return", permission.permission.read);

          case 33:
            return _context4.abrupt("return", true);

          case 34:
            return _context4.abrupt("return", true);

          case 35:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _hasAccess.apply(this, arguments);
}

function getPermissionModule(_x5) {
  return _getPermissionModule.apply(this, arguments);
}

function _getPermissionModule() {
  _getPermissionModule = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(name) {
    var user, permission;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.t0 = JSON;
            _context5.next = 3;
            return getUser();

          case 3:
            _context5.t1 = _context5.sent;
            user = _context5.t0.parse.call(_context5.t0, _context5.t1).user;
            _context5.next = 7;
            return userPermissionResource.UserPermissionsByModule(user.id, name);

          case 7:
            permission = _context5.sent.data;
            return _context5.abrupt("return", permission);

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getPermissionModule.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/providers/Address.js":
/*!*******************************************!*\
  !*** ./resources/js/providers/Address.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Address; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Address = /*#__PURE__*/function () {
  function Address() {
    _classCallCheck(this, Address);
  }

  _createClass(Address, [{
    key: "getAddress",
    value:
    /**
     * Function to get address of user
     * @return Promise
     */
    function getAddress(id) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/address/".concat(id));
    }
  }, {
    key: "createAddress",
    value: function createAddress(formData) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/address/create", formData);
    }
  }, {
    key: "updateAddress",
    value: function updateAddress(id, formData) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/address/update/".concat(id), formData);
    }
  }]);

  return Address;
}();



/***/ }),

/***/ "./resources/js/providers/Auth.js":
/*!****************************************!*\
  !*** ./resources/js/providers/Auth.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Auth; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Auth = /*#__PURE__*/function () {
  function Auth() {
    _classCallCheck(this, Auth);
  }

  _createClass(Auth, [{
    key: "logout",
    value:
    /**
     * Function to logout
     * @return Promise
     */
    function logout() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/auth/logout");
    }
  }, {
    key: "me",
    value: function me() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/me");
    }
  }, {
    key: "login",
    value: function login(formData) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/auth/login", formData);
    }
  }]);

  return Auth;
}();



/***/ }),

/***/ "./resources/js/providers/Contact.js":
/*!*******************************************!*\
  !*** ./resources/js/providers/Contact.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Contact = /*#__PURE__*/function () {
  function Contact() {
    _classCallCheck(this, Contact);
  }

  _createClass(Contact, [{
    key: "getContact",
    value:
    /**
     * Function to get Contact of user
     * @return Promise
     */
    function getContact(id) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/contact/".concat(id));
    }
  }, {
    key: "createContact",
    value: function createContact(formData) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/contact/create", formData);
    }
  }, {
    key: "updateContact",
    value: function updateContact(id, formData) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/contact/update/".concat(id), formData);
    }
  }]);

  return Contact;
}();



/***/ }),

/***/ "./resources/js/providers/Customer.js":
/*!********************************************!*\
  !*** ./resources/js/providers/Customer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Customer; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Customer = /*#__PURE__*/function () {
  function Customer() {
    _classCallCheck(this, Customer);
  }

  _createClass(Customer, [{
    key: "saveCustomer",
    value:
    /**
     * Function to SaveCustomers
     * @return Promise
     */
    function saveCustomer(formData) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/customer/create", formData);
    }
    /**
     * Function to SaveCustomers
     * @return Promise
     */

  }, {
    key: "updateCustomer",
    value: function updateCustomer(formData) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/customer/update/".concat(formData.id), formData);
    }
    /**
     * Function to Get Customers
     * @return Promise
     */

  }, {
    key: "getListCustomer",
    value: function getListCustomer(id_provider) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/customer/get/list/".concat(id_provider));
    }
  }, {
    key: "getCustomer",
    value: function getCustomer(id_customer) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/customer/get/".concat(id_customer));
    }
  }, {
    key: "deleteCustomer",
    value: function deleteCustomer(id_customer) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/v1/customer/delete/".concat(id_customer));
    }
  }]);

  return Customer;
}();



/***/ }),

/***/ "./resources/js/providers/Nation.js":
/*!******************************************!*\
  !*** ./resources/js/providers/Nation.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nation; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Nation = /*#__PURE__*/function () {
  function Nation() {
    _classCallCheck(this, Nation);
  }

  _createClass(Nation, [{
    key: "getCountries",
    value:
    /**
     * Function to Getcountries
     * @return Promise
     */
    function getCountries() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/countries/get");
    }
    /**
     * Function to GetState
     * @return Promise
     */

  }, {
    key: "getState",
    value: function getState(id_country) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/states/get/".concat(id_country));
    }
    /**
     * Function to GetCitys
     * @return Promise
     */

  }, {
    key: "getCity",
    value: function getCity(id_state) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/citys/get/".concat(id_state));
    }
  }]);

  return Nation;
}();



/***/ }),

/***/ "./resources/js/providers/Note.js":
/*!****************************************!*\
  !*** ./resources/js/providers/Note.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Note; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Note = /*#__PURE__*/function () {
  function Note() {
    _classCallCheck(this, Note);
  }

  _createClass(Note, [{
    key: "getNotesUser",
    value:
    /**
     * Function to get notes user
     * @return Promise
     */
    function getNotesUser(id_user) {
      var entity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'users';
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/notes/user/get/".concat(id_user, "/").concat(entity));
    }
  }, {
    key: "saveNoteUser",
    value: function saveNoteUser(formData) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/notes/user/save", formData);
    }
  }]);

  return Note;
}();



/***/ }),

/***/ "./resources/js/providers/Profile.js":
/*!*******************************************!*\
  !*** ./resources/js/providers/Profile.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Profile = /*#__PURE__*/function () {
  function Profile() {
    _classCallCheck(this, Profile);
  }

  _createClass(Profile, [{
    key: "getProfile",
    value:
    /**
     * Function to get profile of user
     * @return Promise
     */
    function getProfile(id) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/profile/".concat(id));
    }
  }, {
    key: "createProfile",
    value: function createProfile(formData) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/profile/create", formData);
    }
  }, {
    key: "updateProfile",
    value: function updateProfile(id, formData) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/profile/update/".concat(id), formData);
    }
  }]);

  return Profile;
}();



/***/ }),

/***/ "./resources/js/providers/User.js":
/*!****************************************!*\
  !*** ./resources/js/providers/User.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var User = /*#__PURE__*/function () {
  function User() {
    _classCallCheck(this, User);
  }

  _createClass(User, [{
    key: "getCurrentUser",
    value:
    /**
     * Function to Get current user
     * @return Promise
     */
    function getCurrentUser() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/users/current");
    }
  }, {
    key: "getUser",
    value: function getUser(id) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/users/get/".concat(id));
    }
  }, {
    key: "createUser",
    value: function createUser(formData) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/users/create", formData);
    }
  }, {
    key: "updateUser",
    value: function updateUser(id, formData) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/users/put/".concat(id), formData);
    }
  }, {
    key: "getUsers",
    value: function getUsers() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/users/get");
    }
  }, {
    key: "deleteUsers",
    value: function deleteUsers(id) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/users/delete/".concat(id));
    }
  }, {
    key: "showUsers",
    value: function showUsers() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/users/show");
    }
    /**
     * Function to Restore Password
     * @return Promise
     */

  }, {
    key: "restorePassword",
    value: function restorePassword($email) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/v1/users/restore-password", $email);
    }
    /**
     * Function to Get Token Password
     * @return Promise
     */

  }, {
    key: "validateTokenPassword",
    value: function validateTokenPassword($token) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/users/get-token-password/".concat($token));
    }
    /**
     * Function to Update Password
     * @return Promise
     */

  }, {
    key: "updatePassword",
    value: function updatePassword(token, formData) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/users/update-password/".concat(token), formData);
    }
  }]);

  return User;
}();



/***/ }),

/***/ "./resources/js/providers/UserPermission.js":
/*!**************************************************!*\
  !*** ./resources/js/providers/UserPermission.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserPermission; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var UserPermission = /*#__PURE__*/function () {
  function UserPermission() {
    _classCallCheck(this, UserPermission);
  }

  _createClass(UserPermission, [{
    key: "UserPermissions",
    value:
    /**
     * Function to Get current user
     * @return Promise
     */
    function UserPermissions(id) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/users/permission/".concat(id));
    }
  }, {
    key: "UserPermissionsByModule",
    value: function UserPermissionsByModule(id, nameModule) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/v1/users/permission/".concat(id, "/").concat(nameModule));
    }
  }, {
    key: "updatePermits",
    value: function updatePermits(formData) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/v1/users/permission/put", formData);
    }
  }]);

  return UserPermission;
}();



/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _views_Login_LoginComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Login/LoginComponent.vue */ "./resources/js/views/Login/LoginComponent.vue");
/* harmony import */ var _views_Login_RestorePassword_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/Login/RestorePassword.vue */ "./resources/js/views/Login/RestorePassword.vue");
/* harmony import */ var _views_Login_NewPassword_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/Login/NewPassword.vue */ "./resources/js/views/Login/NewPassword.vue");
/* harmony import */ var _views_Dashboard_OverviewComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/Dashboard/OverviewComponent.vue */ "./resources/js/views/Dashboard/OverviewComponent.vue");
/* harmony import */ var _views_Users_Users_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/Users/Users.vue */ "./resources/js/views/Users/Users.vue");
/* harmony import */ var _views_Users_UserComponent_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/Users/UserComponent.vue */ "./resources/js/views/Users/UserComponent.vue");
/* harmony import */ var _views_Users_profileView_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/Users/profileView.vue */ "./resources/js/views/Users/profileView.vue");
/* harmony import */ var _views_Users_permissionUsers_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/Users/permissionUsers.vue */ "./resources/js/views/Users/permissionUsers.vue");
/* harmony import */ var _views_Customers_TableView_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/Customers/TableView.vue */ "./resources/js/views/Customers/TableView.vue");
/* harmony import */ var _views_Customers_profileView_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/Customers/profileView.vue */ "./resources/js/views/Customers/profileView.vue");
/* harmony import */ var _views_Error_Error_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/Error/Error.vue */ "./resources/js/views/Error/Error.vue");
/* harmony import */ var _views_Error_InternalError_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/Error/InternalError.vue */ "./resources/js/views/Error/InternalError.vue");
/* harmony import */ var _views_Error_NotFound_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/Error/NotFound.vue */ "./resources/js/views/Error/NotFound.vue");
/* harmony import */ var _views_Error_NotAuthorized_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/Error/NotAuthorized.vue */ "./resources/js/views/Error/NotAuthorized.vue");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]); // Login section



 //Dashboard section

 //Users section




 //Customer section


 // Error section





/* harmony default export */ __webpack_exports__["default"] = (new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  linkExactActiveClass: "active",
  routes: [{
    path: "*",
    redirect: {
      name: "Overview"
    }
  }, {
    path: "/login",
    name: "Login",
    component: _views_Login_LoginComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    path: "/restablecer-contrasena",
    name: "RestablecerContrasena",
    component: _views_Login_RestorePassword_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    path: "/nueva-contrasena/:token?",
    name: "NuevaContrasena",
    component: _views_Login_NewPassword_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    props: true
  }, {
    path: "/users/",
    name: "getUsers",
    component: _views_Users_Users_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    children: []
  }, {
    path: "/users/create/",
    name: "CreateUser",
    component: _views_Users_UserComponent_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, {
    path: "/users/edit/:id",
    name: "EditUser",
    component: _views_Users_UserComponent_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    props: true
  }, {
    path: "/users/profile/:id",
    name: "perfilUsuario",
    component: _views_Users_profileView_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    props: true
  }, {
    path: "/users/permissions/:id",
    name: "permisos",
    component: _views_Users_permissionUsers_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    props: true
  }, {
    path: "/contacts",
    name: "Contacts",
    component: _views_Customers_TableView_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
    /*children: [
    <<<<<<< HEAD
      {
        path: 'profile/:id',
        name: 'profileCustomer',
        component: ProfileCustomer
      },
    ] */

  }, {
    path: '/contacts/profile/:id',
    name: 'profileCustomer',
    component: _views_Customers_profileView_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    props: true
  }, {
    path: "/error",
    name: "error",
    component: _views_Error_Error_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    children: [{
      path: "",
      name: "internalError",
      component: _views_Error_InternalError_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
    }, {
      path: "notfound",
      name: "notfound",
      component: _views_Error_NotFound_vue__WEBPACK_IMPORTED_MODULE_14__["default"]
    }, {
      path: "notauthorized",
      name: "notauthorized",
      component: _views_Error_NotAuthorized_vue__WEBPACK_IMPORTED_MODULE_15__["default"]
    }]
  }, {
    path: "/overview",
    name: "Overview",
    component: _views_Dashboard_OverviewComponent_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  }],
  mode: "history"
}));

/***/ }),

/***/ "./resources/js/store/actions.js":
/*!***************************************!*\
  !*** ./resources/js/store/actions.js ***!
  \***************************************/
/*! exports provided: SET_CURRENT_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_USER", function() { return SET_CURRENT_USER; });
/* harmony import */ var _providers_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../providers/User */ "./resources/js/providers/User.js");

var UserResource = new _providers_User__WEBPACK_IMPORTED_MODULE_0__["default"]();
var SET_CURRENT_USER = function SET_CURRENT_USER(_ref, jwt) {
  var commit = _ref.commit;
  return new Promise(function (resolve, reject) {
    UserResource.getCurrentUser().then(function (user) {
      var data_user = user.data;
      commit("SET_CURRENT_USER", {
        user: {
          id: data_user.id,
          full_name: data_user.profile.name + " " + data_user.profile.last_name,
          email: data_user.email,
          level: data_user.level,
          profile: data_user.profile
        }
      });
      return true;
    }).then(function () {
      resolve(true);
    })["catch"](function (err) {
      reject(err);
    });
  });
};

/***/ }),

/***/ "./resources/js/store/index.js":
/*!*************************************!*\
  !*** ./resources/js/store/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutations */ "./resources/js/store/mutations.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./resources/js/store/actions.js");




vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    user: ''
  },
  mutations: _mutations__WEBPACK_IMPORTED_MODULE_2__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,
  getters: {}
}));

/***/ }),

/***/ "./resources/js/store/mutations.js":
/*!*****************************************!*\
  !*** ./resources/js/store/mutations.js ***!
  \*****************************************/
/*! exports provided: SET_CURRENT_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_USER", function() { return SET_CURRENT_USER; });
var SET_CURRENT_USER = function SET_CURRENT_USER(state, _ref) {
  var user = _ref.user;
  state.user = user;
};

/***/ }),

/***/ "./resources/js/views/Customers/TableView.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Customers/TableView.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableView_vue_vue_type_template_id_5fb6406a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableView.vue?vue&type=template&id=5fb6406a& */ "./resources/js/views/Customers/TableView.vue?vue&type=template&id=5fb6406a&");
/* harmony import */ var _TableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableView.vue?vue&type=script&lang=js& */ "./resources/js/views/Customers/TableView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableView_vue_vue_type_template_id_5fb6406a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableView_vue_vue_type_template_id_5fb6406a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Customers/TableView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Customers/TableView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Customers/TableView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TableView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customers/TableView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Customers/TableView.vue?vue&type=template&id=5fb6406a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Customers/TableView.vue?vue&type=template&id=5fb6406a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_template_id_5fb6406a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TableView.vue?vue&type=template&id=5fb6406a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customers/TableView.vue?vue&type=template&id=5fb6406a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_template_id_5fb6406a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableView_vue_vue_type_template_id_5fb6406a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Customers/profileView.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/Customers/profileView.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profileView_vue_vue_type_template_id_712fd7a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profileView.vue?vue&type=template&id=712fd7a5& */ "./resources/js/views/Customers/profileView.vue?vue&type=template&id=712fd7a5&");
/* harmony import */ var _profileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profileView.vue?vue&type=script&lang=js& */ "./resources/js/views/Customers/profileView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _profileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profileView_vue_vue_type_template_id_712fd7a5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profileView_vue_vue_type_template_id_712fd7a5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Customers/profileView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Customers/profileView.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Customers/profileView.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./profileView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customers/profileView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Customers/profileView.vue?vue&type=template&id=712fd7a5&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Customers/profileView.vue?vue&type=template&id=712fd7a5& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileView_vue_vue_type_template_id_712fd7a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./profileView.vue?vue&type=template&id=712fd7a5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Customers/profileView.vue?vue&type=template&id=712fd7a5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileView_vue_vue_type_template_id_712fd7a5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileView_vue_vue_type_template_id_712fd7a5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Dashboard/OverviewComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/Dashboard/OverviewComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OverviewComponent_vue_vue_type_template_id_1fc669da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OverviewComponent.vue?vue&type=template&id=1fc669da& */ "./resources/js/views/Dashboard/OverviewComponent.vue?vue&type=template&id=1fc669da&");
/* harmony import */ var _OverviewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OverviewComponent.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard/OverviewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OverviewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OverviewComponent_vue_vue_type_template_id_1fc669da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OverviewComponent_vue_vue_type_template_id_1fc669da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard/OverviewComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard/OverviewComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Dashboard/OverviewComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OverviewComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/OverviewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard/OverviewComponent.vue?vue&type=template&id=1fc669da&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/Dashboard/OverviewComponent.vue?vue&type=template&id=1fc669da& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewComponent_vue_vue_type_template_id_1fc669da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OverviewComponent.vue?vue&type=template&id=1fc669da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/OverviewComponent.vue?vue&type=template&id=1fc669da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewComponent_vue_vue_type_template_id_1fc669da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewComponent_vue_vue_type_template_id_1fc669da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Dashboard/index.vue":
/*!************************************************!*\
  !*** ./resources/js/views/Dashboard/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3196e148___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3196e148& */ "./resources/js/views/Dashboard/index.vue?vue&type=template&id=3196e148&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&lang=css& */ "./resources/js/views/Dashboard/index.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3196e148___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3196e148___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Dashboard/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard/index.vue?vue&type=style&index=1&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Dashboard/index.vue?vue&type=style&index=1&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/index.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Dashboard/index.vue?vue&type=template&id=3196e148&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Dashboard/index.vue?vue&type=template&id=3196e148& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3196e148___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3196e148& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard/index.vue?vue&type=template&id=3196e148&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3196e148___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3196e148___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Error/Error.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Error/Error.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Error_vue_vue_type_template_id_37590b5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error.vue?vue&type=template&id=37590b5c& */ "./resources/js/views/Error/Error.vue?vue&type=template&id=37590b5c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Error_vue_vue_type_template_id_37590b5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Error_vue_vue_type_template_id_37590b5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Error/Error.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Error/Error.vue?vue&type=template&id=37590b5c&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Error/Error.vue?vue&type=template&id=37590b5c& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_37590b5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Error.vue?vue&type=template&id=37590b5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Error/Error.vue?vue&type=template&id=37590b5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_37590b5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Error_vue_vue_type_template_id_37590b5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Error/InternalError.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Error/InternalError.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InternalError_vue_vue_type_template_id_76ad73d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InternalError.vue?vue&type=template&id=76ad73d6& */ "./resources/js/views/Error/InternalError.vue?vue&type=template&id=76ad73d6&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _InternalError_vue_vue_type_template_id_76ad73d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InternalError_vue_vue_type_template_id_76ad73d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Error/InternalError.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Error/InternalError.vue?vue&type=template&id=76ad73d6&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Error/InternalError.vue?vue&type=template&id=76ad73d6& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InternalError_vue_vue_type_template_id_76ad73d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InternalError.vue?vue&type=template&id=76ad73d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Error/InternalError.vue?vue&type=template&id=76ad73d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InternalError_vue_vue_type_template_id_76ad73d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InternalError_vue_vue_type_template_id_76ad73d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Error/NotAuthorized.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Error/NotAuthorized.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotAuthorized_vue_vue_type_template_id_5da55418___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotAuthorized.vue?vue&type=template&id=5da55418& */ "./resources/js/views/Error/NotAuthorized.vue?vue&type=template&id=5da55418&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _NotAuthorized_vue_vue_type_template_id_5da55418___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotAuthorized_vue_vue_type_template_id_5da55418___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Error/NotAuthorized.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Error/NotAuthorized.vue?vue&type=template&id=5da55418&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Error/NotAuthorized.vue?vue&type=template&id=5da55418& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_template_id_5da55418___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotAuthorized.vue?vue&type=template&id=5da55418& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Error/NotAuthorized.vue?vue&type=template&id=5da55418&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_template_id_5da55418___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotAuthorized_vue_vue_type_template_id_5da55418___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Error/NotFound.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/Error/NotFound.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotFound_vue_vue_type_template_id_b7c286d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound.vue?vue&type=template&id=b7c286d6& */ "./resources/js/views/Error/NotFound.vue?vue&type=template&id=b7c286d6&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _NotFound_vue_vue_type_template_id_b7c286d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotFound_vue_vue_type_template_id_b7c286d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Error/NotFound.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Error/NotFound.vue?vue&type=template&id=b7c286d6&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Error/NotFound.vue?vue&type=template&id=b7c286d6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_b7c286d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotFound.vue?vue&type=template&id=b7c286d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Error/NotFound.vue?vue&type=template&id=b7c286d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_b7c286d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_b7c286d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Login/LoginComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/Login/LoginComponent.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginComponent_vue_vue_type_template_id_92e6308e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginComponent.vue?vue&type=template&id=92e6308e& */ "./resources/js/views/Login/LoginComponent.vue?vue&type=template&id=92e6308e&");
/* harmony import */ var _LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginComponent.vue?vue&type=script&lang=js& */ "./resources/js/views/Login/LoginComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginComponent_vue_vue_type_template_id_92e6308e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginComponent_vue_vue_type_template_id_92e6308e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Login/LoginComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Login/LoginComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Login/LoginComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login/LoginComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Login/LoginComponent.vue?vue&type=template&id=92e6308e&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Login/LoginComponent.vue?vue&type=template&id=92e6308e& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_92e6308e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginComponent.vue?vue&type=template&id=92e6308e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login/LoginComponent.vue?vue&type=template&id=92e6308e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_92e6308e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_92e6308e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Login/NewPassword.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Login/NewPassword.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewPassword_vue_vue_type_template_id_07bbc5f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewPassword.vue?vue&type=template&id=07bbc5f4& */ "./resources/js/views/Login/NewPassword.vue?vue&type=template&id=07bbc5f4&");
/* harmony import */ var _NewPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewPassword.vue?vue&type=script&lang=js& */ "./resources/js/views/Login/NewPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewPassword_vue_vue_type_template_id_07bbc5f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewPassword_vue_vue_type_template_id_07bbc5f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Login/NewPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Login/NewPassword.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Login/NewPassword.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login/NewPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Login/NewPassword.vue?vue&type=template&id=07bbc5f4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Login/NewPassword.vue?vue&type=template&id=07bbc5f4& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPassword_vue_vue_type_template_id_07bbc5f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewPassword.vue?vue&type=template&id=07bbc5f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login/NewPassword.vue?vue&type=template&id=07bbc5f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPassword_vue_vue_type_template_id_07bbc5f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPassword_vue_vue_type_template_id_07bbc5f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Login/RestorePassword.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/Login/RestorePassword.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RestorePassword_vue_vue_type_template_id_4da96118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RestorePassword.vue?vue&type=template&id=4da96118& */ "./resources/js/views/Login/RestorePassword.vue?vue&type=template&id=4da96118&");
/* harmony import */ var _RestorePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RestorePassword.vue?vue&type=script&lang=js& */ "./resources/js/views/Login/RestorePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RestorePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RestorePassword_vue_vue_type_template_id_4da96118___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RestorePassword_vue_vue_type_template_id_4da96118___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Login/RestorePassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Login/RestorePassword.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Login/RestorePassword.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RestorePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RestorePassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login/RestorePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RestorePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Login/RestorePassword.vue?vue&type=template&id=4da96118&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Login/RestorePassword.vue?vue&type=template&id=4da96118& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RestorePassword_vue_vue_type_template_id_4da96118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RestorePassword.vue?vue&type=template&id=4da96118& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login/RestorePassword.vue?vue&type=template&id=4da96118&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RestorePassword_vue_vue_type_template_id_4da96118___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RestorePassword_vue_vue_type_template_id_4da96118___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Login/index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Login/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3723d45d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3723d45d& */ "./resources/js/views/Login/index.vue?vue&type=template&id=3723d45d&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _index_vue_vue_type_template_id_3723d45d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3723d45d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Login/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Login/index.vue?vue&type=template&id=3723d45d&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Login/index.vue?vue&type=template&id=3723d45d& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3723d45d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3723d45d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Login/index.vue?vue&type=template&id=3723d45d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3723d45d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3723d45d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Users/UserComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Users/UserComponent.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserComponent_vue_vue_type_template_id_3f3932bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserComponent.vue?vue&type=template&id=3f3932bc& */ "./resources/js/views/Users/UserComponent.vue?vue&type=template&id=3f3932bc&");
/* harmony import */ var _UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserComponent.vue?vue&type=script&lang=js& */ "./resources/js/views/Users/UserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserComponent_vue_vue_type_template_id_3f3932bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserComponent_vue_vue_type_template_id_3f3932bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Users/UserComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Users/UserComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Users/UserComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/UserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Users/UserComponent.vue?vue&type=template&id=3f3932bc&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Users/UserComponent.vue?vue&type=template&id=3f3932bc& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_template_id_3f3932bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserComponent.vue?vue&type=template&id=3f3932bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/UserComponent.vue?vue&type=template&id=3f3932bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_template_id_3f3932bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_template_id_3f3932bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Users/Users.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Users/Users.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_16441b5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=16441b5c& */ "./resources/js/views/Users/Users.vue?vue&type=template&id=16441b5c&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/views/Users/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_16441b5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_16441b5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Users/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Users/Users.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Users/Users.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Users/Users.vue?vue&type=template&id=16441b5c&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Users/Users.vue?vue&type=template&id=16441b5c& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_16441b5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=16441b5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/Users.vue?vue&type=template&id=16441b5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_16441b5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_16441b5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Users/permissionUsers.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/Users/permissionUsers.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _permissionUsers_vue_vue_type_template_id_541ca6e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permissionUsers.vue?vue&type=template&id=541ca6e3& */ "./resources/js/views/Users/permissionUsers.vue?vue&type=template&id=541ca6e3&");
/* harmony import */ var _permissionUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissionUsers.vue?vue&type=script&lang=js& */ "./resources/js/views/Users/permissionUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _permissionUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _permissionUsers_vue_vue_type_template_id_541ca6e3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _permissionUsers_vue_vue_type_template_id_541ca6e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Users/permissionUsers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Users/permissionUsers.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Users/permissionUsers.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_permissionUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./permissionUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/permissionUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_permissionUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Users/permissionUsers.vue?vue&type=template&id=541ca6e3&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Users/permissionUsers.vue?vue&type=template&id=541ca6e3& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_permissionUsers_vue_vue_type_template_id_541ca6e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./permissionUsers.vue?vue&type=template&id=541ca6e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/permissionUsers.vue?vue&type=template&id=541ca6e3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_permissionUsers_vue_vue_type_template_id_541ca6e3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_permissionUsers_vue_vue_type_template_id_541ca6e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Users/profileView.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Users/profileView.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profileView_vue_vue_type_template_id_9ede1050___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profileView.vue?vue&type=template&id=9ede1050& */ "./resources/js/views/Users/profileView.vue?vue&type=template&id=9ede1050&");
/* harmony import */ var _profileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profileView.vue?vue&type=script&lang=js& */ "./resources/js/views/Users/profileView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _profileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profileView_vue_vue_type_template_id_9ede1050___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profileView_vue_vue_type_template_id_9ede1050___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Users/profileView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Users/profileView.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Users/profileView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./profileView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/profileView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Users/profileView.vue?vue&type=template&id=9ede1050&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Users/profileView.vue?vue&type=template&id=9ede1050& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileView_vue_vue_type_template_id_9ede1050___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./profileView.vue?vue&type=template&id=9ede1050& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Users/profileView.vue?vue&type=template&id=9ede1050&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileView_vue_vue_type_template_id_9ede1050___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileView_vue_vue_type_template_id_9ede1050___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n8 │ @import '~bootstrap/scss/bootstrap';\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  /home/pablo/CRM/CRM-Tours/resources/sass/app.scss 8:9  root stylesheet\n    at runLoaders (/home/pablo/CRM/CRM-Tours/node_modules/webpack/lib/NormalModule.js:316:20)\n    at /home/pablo/CRM/CRM-Tours/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /home/pablo/CRM/CRM-Tours/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at context.callback (/home/pablo/CRM/CRM-Tours/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at render (/home/pablo/CRM/CRM-Tours/node_modules/sass-loader/dist/index.js:73:7)\n    at Function.call$2 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:91729:16)\n    at _render_closure1.call$2 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:80373:12)\n    at _RootZone.runBinary$3$3 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:27269:18)\n    at _FutureListener.handleError$1 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:25797:19)\n    at _Future__propagateToListeners_handleError.call$0 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:26094:49)\n    at Object._Future__propagateToListeners (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:4543:77)\n    at _Future._completeError$2 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:25927:9)\n    at _AsyncAwaitCompleter.completeError$2 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:25270:12)\n    at Object._asyncRethrow (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:4292:17)\n    at /home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:13233:20\n    at _wrapJsFunctionForAsync_closure.$protected (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:4317:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:25291:12)\n    at _awaitOnObject_closure0.call$2 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:25283:25)\n    at _RootZone.runBinary$3$3 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:27269:18)\n    at _FutureListener.handleError$1 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:25797:19)\n    at _Future__propagateToListeners_handleError.call$0 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:26094:49)\n    at Object._Future__propagateToListeners (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:4543:77)\n    at _Future._completeError$2 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:25927:9)\n    at _AsyncAwaitCompleter.completeError$2 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:25270:12)\n    at Object._asyncRethrow (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:4292:17)\n    at /home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:18031:20\n    at _wrapJsFunctionForAsync_closure.$protected (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:4317:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:25291:12)\n    at _awaitOnObject_closure0.call$2 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:25283:25)\n    at _RootZone.runBinary$3$3 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:27269:18)\n    at _FutureListener.handleError$1 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:25797:19)\n    at _Future__propagateToListeners_handleError.call$0 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:26094:49)\n    at Object._Future__propagateToListeners (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:4543:77)\n    at _Future._completeError$2 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:25927:9)\n    at _AsyncAwaitCompleter.completeError$2 (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:25270:12)\n    at Object._asyncRethrow (/home/pablo/CRM/CRM-Tours/node_modules/sass/sass.dart.js:4292:17)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/pablo/CRM/CRM-Tours/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/pablo/CRM/CRM-Tours/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });