/* Auto-generated file created by Dan Tovbein 06/06/2019 at 13:34:15hs */

import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PropTypes from "prop-types";
import {} from "./helpers";
import { trimClassNames } from "../../utils/_helpers";
import { setNameToComponent } from "./actions";
import * as CSSVariables from "../../sass/_variables.js";
import styles from "./styles.css";

class TestContDemo extends React.Component {

  static defaultProps = {};

  static propTypes = {
    testContDemoReducer: PropTypes.shape({
      name: PropTypes.string
    }),
    setNameToComponent: PropTypes.func
  };

  static getDerivedStateFromProps() {
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      __name: "TestContDemo"
    };
  }

  componentDidMount() {
    this._isMounted = true;
    const { setNameToComponent } = this.props;
    const { __name } = this.state;

    const promises = [
      setNameToComponent(__name)
    ];

    Promise.all(promises)
      .then((payload) => {})
      .catch((error) => console.log(error));
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
      <div className={trimClassNames(["test-cont-demo",
                                           styles.testContDemo])}>

        {/* Default content */}
        <div ref={node => this.defaultComponentContent = node}
             className={styles.defaultComponentContent} 
             style={{ backgroundColor:"#3585b1", border:"solid 1px #bcbcbc", marginBottom:".5rem", padding:"1rem" }}>
          <h1 style={{ textAlign:"center", fontSize:"1.25rem"}}>TestContDemo <span style={{ fontWeight:"bold", textDecoration:"underline"}}>as a container</span></h1>
          <p style={{ fontSize:"1rem", textAlign:"center" }}>This is a default content for 'test-cont-demo'.</p>
          <p style={{ color:"black", fontSize:".95rem", textAlign:"center" }}>
            Default value from reducer: <span style={{ textDecoration:"underline" }}>{ this.props.testContDemoReducer.name }</span>
          </p>
          <p style={{ color:"red", fontSize:".85rem", textAlign:"center" }}>** Please remove it and it's reference on css file! **</p>
        </div>
        {/* End default content */}

      </div>
    );
  }
}

export default connect(
  store => ({
    testContDemoReducer: store.testContDemoReducer
  }),
  dispatch => bindActionCreators({
    setNameToComponent
  }, dispatch),
  null,
  { withRef: true })(TestContDemo);
