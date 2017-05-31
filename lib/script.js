'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Es6Test = function () {
    function Es6Test() {
        _classCallCheck(this, Es6Test);
    }

    _createClass(Es6Test, [{
        key: 'dispName',
        value: function dispName() {
            console.log('my name is ranjit');
        }
    }, {
        key: 'dispCity',
        value: function dispCity() {
            console.log('my city is patna');
        }
    }]);

    return Es6Test;
}();

var et = new Es6Test();
et.dispName();
et.dispCity();