"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("devtools/client/shared/vendor/react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("devtools/client/shared/vendor/react-prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require("devtools/client/shared/vendor/lodash");

var _frames = require("../../utils/pause/frames/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at <http://mozilla.org/MPL/2.0/>. */

class PreviewFunction extends _react.Component {
  renderFunctionName(func) {
    const { l10n } = this.context;
    const name = (0, _frames.formatDisplayName)(func, undefined, l10n);
    return _react2.default.createElement(
      "span",
      { className: "function-name" },
      name
    );
  }

  renderParams(func) {
    const { parameterNames = [] } = func;
    const params = parameterNames.filter(i => i).map(param => _react2.default.createElement(
      "span",
      { className: "param", key: param },
      param
    ));

    const commas = (0, _lodash.times)(params.length - 1).map((_, i) => _react2.default.createElement(
      "span",
      { className: "delimiter", key: i },
      ", "
    ));

    // $FlowIgnore
    return (0, _lodash.flatten)((0, _lodash.zip)(params, commas));
  }

  render() {
    return _react2.default.createElement(
      "span",
      { className: "function-signature" },
      this.renderFunctionName(this.props.func),
      _react2.default.createElement(
        "span",
        { className: "paren" },
        "("
      ),
      this.renderParams(this.props.func),
      _react2.default.createElement(
        "span",
        { className: "paren" },
        ")"
      )
    );
  }
}

exports.default = PreviewFunction;
PreviewFunction.contextTypes = { l10n: _propTypes2.default.object };