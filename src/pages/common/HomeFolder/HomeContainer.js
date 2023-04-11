import React from 'react';
import styles from "./HomeContainer.module.css";
import cx from "classnames"

const HomeContainer = (props) => {
  return (
    <div className={cx(styles.mainDiv, 'bg-white shadow-sm')}>
      {props.children}
    </div>
  )
}

export default HomeContainer