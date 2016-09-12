import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';

/**
 * jsdiff
 *
 * @see https://github.com/kpdecker/jsdiff
 */
var jsdiff = require('diff');

var App = React.createClass({
  getInitialState() {
    return {
      beforeText: "origin value",
      afterText:  "changed value"
    };
  },

  onChangeBeforeText: function(e) {
    this.setState({beforeText: e.target.value});
  },
  onChangeAfterText: function(e) {
    this.setState({afterText: e.target.value});
  },
  onClick: function(e) {
    //this.setState({beforeText: this.refs.beforeText.getDOMNode().value});
    //this.setState({afterText: this.refs.afterText.getDOMNode().value});
    //this.setState({result: this.refs.result.getDOMNode().value});

      var diff = jsdiff.diffChars(this.state.beforeText, this.state.afterText);
      var diffNodes = diff.map(function (part) {
        var color = part.added ? 'green' : part.removed ? 'red' : 'grey';
        return (
          <span style={{color:color}}>{part.value}</span>
        );
      });

      ReactDOM.render(
        <pre>
          {diffNodes}
        </pre>,
        document.getElementById('result')
      );
  },

  render: function() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Text Diff</h2>
        </div>
        <p className="App-intro">
          Please input before/after texts and click diff button.
        </p>

        <table>
          <tr>
            <th>Before</th>
            <th>After</th>
          </tr>
          <tr>
            <td><textarea id="before" ref="beforeText" value={this.state.beforeText} onChange={this.onChangeBeforeText}></textarea></td>
            <td><textarea id="after" ref="afterText" value={this.state.afterText} onChange={this.onChangeAfterText}></textarea></td>
          </tr>
        </table>

        <button onClick={this.onClick}>diff</button>

        <table>
          <tr>
            <th>Result</th>
          </tr>
          <tr>
            <td><div id="result"></div></td>
          </tr>
        </table>
      </div>
    );
  }
});

export default App;
