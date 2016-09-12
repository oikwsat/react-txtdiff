import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';

/**
 * jsdiff
 *
 * @see https://github.com/kpdecker/jsdiff
 */
var jsdiff = require('diff');

class App extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      beforeText: "origin value",
      afterText:  "changed value"
    };
  }

  onChangeBeforeText(e) {
    this.setState({beforeText: e.target.value});
  }
  onChangeAfterText(e) {
    this.setState({afterText: e.target.value});
  }
  onClick = () => {
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
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Text Diff</h2>
        </div>
        <p className="App-intro">
          Please input before/after texts and click diff button.
        </p>

        <table>
          <thead>
            <tr>
              <th>Before</th>
              <th>After</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><textarea id="before" ref="beforeText" value={this.state.beforeText} onChange={this.onChangeBeforeText}></textarea></td>
              <td><textarea id="after" ref="afterText" value={this.state.afterText} onChange={this.onChangeAfterText}></textarea></td>
            </tr>
          </tbody>
        </table>

        <button onClick={this.onClick}>diff</button>

        <table>
          <thead>
            <tr>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div id="result"></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
