import {
  __commonJS,
  require_prop_types,
  require_react,
  require_react_router_dom
} from "../../chunk.ZZGDDAYD.js";

// node_modules/react-router-hash-link/lib/index.js
var require_lib = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  exports.genericHashLink = genericHashLink;
  exports.HashLink = HashLink;
  exports.NavHashLink = NavHashLink;
  var _react = require_react();
  var _react2 = _interopRequireDefault(_react);
  var _propTypes = require_prop_types();
  var _propTypes2 = _interopRequireDefault(_propTypes);
  var _reactRouterDom = require_react_router_dom();
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function _objectWithoutProperties(obj, keys) {
    var target = {};
    for (var i in obj) {
      if (keys.indexOf(i) >= 0)
        continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i))
        continue;
      target[i] = obj[i];
    }
    return target;
  }
  var hashFragment = "";
  var observer = null;
  var asyncTimerId = null;
  var scrollFunction = null;
  function reset() {
    hashFragment = "";
    if (observer !== null)
      observer.disconnect();
    if (asyncTimerId !== null) {
      window.clearTimeout(asyncTimerId);
      asyncTimerId = null;
    }
  }
  function getElAndScroll() {
    var element = document.getElementById(hashFragment);
    if (element !== null) {
      scrollFunction(element);
      reset();
      return true;
    }
    return false;
  }
  function hashLinkScroll() {
    window.setTimeout(function() {
      if (getElAndScroll() === false) {
        if (observer === null) {
          observer = new MutationObserver(getElAndScroll);
        }
        observer.observe(document, {
          attributes: true,
          childList: true,
          subtree: true
        });
        asyncTimerId = window.setTimeout(function() {
          reset();
        }, 1e4);
      }
    }, 0);
  }
  function genericHashLink(props, As) {
    function handleClick(e) {
      reset();
      if (props.onClick)
        props.onClick(e);
      if (typeof props.to === "string") {
        hashFragment = props.to.split("#").slice(1).join("#");
      } else if (_typeof(props.to) === "object" && typeof props.to.hash === "string") {
        hashFragment = props.to.hash.replace("#", "");
      }
      if (hashFragment !== "") {
        scrollFunction = props.scroll || function(el) {
          return props.smooth ? el.scrollIntoView({behavior: "smooth"}) : el.scrollIntoView();
        };
        hashLinkScroll();
      }
    }
    var scroll = props.scroll, smooth = props.smooth, filteredProps = _objectWithoutProperties(props, ["scroll", "smooth"]);
    return _react2.default.createElement(As, _extends({}, filteredProps, {onClick: handleClick}), props.children);
  }
  function HashLink(props) {
    return genericHashLink(props, _reactRouterDom.Link);
  }
  function NavHashLink(props) {
    return genericHashLink(props, _reactRouterDom.NavLink);
  }
  var propTypes = {
    onClick: _propTypes2.default.func,
    children: _propTypes2.default.node,
    scroll: _propTypes2.default.func,
    to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
  };
  HashLink.propTypes = propTypes;
  NavHashLink.propTypes = propTypes;
});
export default require_lib();
