import React from 'react';
import './App.css';

/**
 * jsdiff
 *
 * @see https://github.com/kpdecker/jsdiff
 */
var jsdiff = require('diff');

export default class Diff extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    var diff = jsdiff.diffChars(this.props.beforeText, this.props.afterText);
    var diffNodes = diff.map(function (part) {
      var color = part.added ? 'green' : part.removed ? 'red' : 'grey';
      return (
        <span className={color}>{part.value}</span>
      );
    });

    return (
      <pre>
        {diffNodes}
      </pre>
    );
  }
}
