import React, { Component } from "react";

import styles from "../styles/blurb.module.css";

export default class Blurb extends Component {
  render() {
    return (
      <a href={this.props.link} target="_blank" rel="noreferrer">
        <div className={styles.blurb}>
          <div className={styles.blurbHeader}>
            <div>{this.props.title}</div>
            <div>{this.props.date}</div>
          </div>
          <div className={styles.blurbCaption}>{this.props.caption}</div>
        </div>
      </a>
    );
  }
}