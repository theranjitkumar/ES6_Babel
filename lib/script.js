"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import User from 'user'

var Es6Test = function () {
  function Es6Test() {
    _classCallCheck(this, Es6Test);

    this.name = "ranjit";
  }

  _createClass(Es6Test, [{
    key: "dispName",
    value: function dispName() {
      console.log("my name is " + this.name);
    }
  }, {
    key: "dispCity",
    value: function dispCity() {
      console.log('my city is patna');
    }
  }]);

  return Es6Test;
}();

var et = new Es6Test();
et.dispName();
et.dispCity();

var User = function (_Es6Test) {
  _inherits(User, _Es6Test);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  _createClass(User, [{
    key: "dispContry",
    value: function dispContry() {
      console.log("contry is india");
    }
  }]);

  return User;
}(Es6Test);

var u = new User();
u.dispCity();
u.dispContry();