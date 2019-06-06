/* Auto-generated file created by Dan Tovbein 06/06/2019 at 13:30:16hs */

import * as React from "react";
import * as PropTypes from "prop-types";
import {} from "./helpers";
import { trimClassNames } from "../../utils/_helpers";
import * as CSSVariables from "../../sass/_variables";
import styles from "./styles.css";

const TesFuncDemo = (props) => {
  return (
    <div className={trimClassNames(["tes-func-demo",
      styles.tesFuncDemo])}>

      {/* Default content */}
      <div className={`${styles.defaultComponentContent}`} style={{ backgroundColor:"#16c7a5", border:"solid 1px #bcbcbc", marginBottom:".5rem", padding:"1rem" }}>
        <h1 style={{ textAlign:"center", fontSize:"1.25rem"}}>TesFuncDemo <span style={{ fontWeight:"bold", textDecoration:"underline"}}>as a functional component</span></h1>
        <p style={{ fontSize:"1rem", textAlign:"center" }}>This is a default content for 'tes-func-demo'.</p>
        <p style={{ color:"red", fontSize:".85rem", textAlign:"center", textDecoration:"underline" }}>** Please remove it and it's reference on css file! **</p>
      </div>
      {/* End default content */}

    </div>
  )
};

TesFuncDemo.defaultProps = {};

TesFuncDemo.propTypes = {};

export default TesFuncDemo;
