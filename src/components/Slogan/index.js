import React, { Children } from "react";

export default function Slogan(props) {
  let { sloganContainerClass, slogan } = props;
  return (
    <div className={sloganContainerClass}>
       <p className="slogan">{slogan}</p>
    </div>
  );
}
