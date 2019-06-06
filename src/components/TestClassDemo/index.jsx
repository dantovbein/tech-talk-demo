/* Auto-generated file created by Dan Tovbein 06/06/2019 at 13:32:37hs */

import * as React from "react";
import * as PropTypes from "prop-types";
import {} from "./helpers";
import { trimClassNames } from "../../utils/_helpers";
import * as CSSVariables from "../../sass/_variables";
import styles from "./styles.css";

class TestClassDemo extends React.Component {

  static defaultProps = {};

  static propTypes = {};

  static getDerivedStateFromProps() {
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      __name: "TestClassDemo"
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  //componentWillMount() {
  //}

  //componentWillReceiveProps(nextProps) {
  //}

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  //componentWillUpdate(nextProps, nextState) {
  //}

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className={trimClassNames(["test-class-demo",
                                      styles.testClassDemo])}>
        {/* Default content */}
        <div ref={node => this.defaultComponentContent = node}
             className={styles.defaultComponentContent}
             style={{backgroundColor: "#9cc51c", borderRadius: "3px", marginBottom: ".5rem", padding: "1rem"}}>
          <h1 style={{textAlign: "center", fontSize: "1.25rem"}}>TestClassDemo <span
            style={{fontWeight: "bold", textDecoration: "underline"}}>as a class component</span></h1>
          <p style={{fontSize: "1rem", textAlign: "center"}}>This is a default content for
            'test-class-demo'.</p>
          <p style={{color: "red", fontSize: ".85rem", textAlign: "center"}}>** Please remove it and it's
            reference on css file! **</p>
        </div>
        {/* End default content */}

      </div>
    );
  }
}

export default TestClassDemo;

