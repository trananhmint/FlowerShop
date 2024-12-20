import React from "react";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);
const Wrapper = ({ children }) => {
  return <div className={cx("wrapper")}>{children}</div>;
};

export default Wrapper;
