/* Auto-generated file created by Dan Tovbein 04/06/2019 at 19:03:45hs */

import * as React from "react";
import * as PropTypes from "prop-types";
import {} from "./helpers";
import { trimClassNames } from "../../utils/_helpers";
import * as CSSVariables from "../../sass/_variables";
import styles from "./styles.css";

class TestClass1 extends React.Component {

  static defaultProps = {};

  static propTypes = {};

  static getDerivedStateFromProps() {
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      __name: "TestClass1"
    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillMount() {
    this.setState({}, () => {});
  }

  componentWillReceiveProps(nextProps) {
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className={trimClassNames(["test-class1",
                                      styles.testClass1])}>
        

      </div>
    );
  }
}

export default TestClass1;

