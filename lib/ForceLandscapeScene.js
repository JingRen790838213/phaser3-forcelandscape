"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _phaser = require("phaser");

var _phaser2 = _interopRequireDefault(_phaser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Phaser$Scene) {
  _inherits(_class, _Phaser$Scene);

  function _class(props) {
    _classCallCheck(this, _class);

    // top container of this scene;
    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.SCENE_CONTAINER;
    return _this;
  }

  _createClass(_class, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var _scale$baseSize = this.scale.baseSize,
          width = _scale$baseSize.width,
          height = _scale$baseSize.height;

      this.SCENE_CONTAINER = new _phaser2.default.GameObjects.Container(this, 0, 0);
      this.add.displayList.add(this.SCENE_CONTAINER);
      this.add.displayList.addCallback = function (gameObj) {
        _this2.SCENE_CONTAINER.add(gameObj);
      };
      this.events.on("create", function () {
        if (window.orientation == 90 || window.orientation == -90) {
          return;
        }
        _this2.SCENE_CONTAINER.setAngle(90);
        _this2.SCENE_CONTAINER.setX(height);
        _this2.scale.setGameSize(height, width);
      });
      window.addEventListener("orientationchange", function () {
        var _scale$baseSize2 = _this2.scale.baseSize,
            width = _scale$baseSize2.width,
            height = _scale$baseSize2.height;

        if (window.orientation == 90 || window.orientation == -90) {
          _this2.SCENE_CONTAINER.setAngle(0);
          _this2.SCENE_CONTAINER.setX(0);
        } else {
          _this2.SCENE_CONTAINER.setAngle(90);
          _this2.SCENE_CONTAINER.setX(height);
        }
        _this2.scale.setGameSize(height, width);
      });
    }
  }]);

  return _class;
}(_phaser2.default.Scene);

exports.default = _class;