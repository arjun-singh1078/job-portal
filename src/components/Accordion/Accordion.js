import React, { Fragment, useState } from "react";
import classes from "./Accordion.module.css";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);

  const activeHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <Fragment>
      <div className={classes.accordion}>
        <div className={classes["accordion-item"]}>
          <div
            className={`${classes["accordion-title"]} mb-4`}
            onClick={activeHandler}
          >
            <div className={classes.header}>{props.title}</div>
            <div className={classes.header}>
              {isActive ? <FaAngleDown /> : <FaAngleRight />}
            </div>
          </div>
          {isActive && (
            <div className={classes["accordion-content"]}>{props.children}</div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Accordion;
