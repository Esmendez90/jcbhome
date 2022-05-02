import React from "react";

export function ImgComponent(props) {
  let { imgContainerClass, imgClass, src, alt } = props;
  return (
    <div className={imgContainerClass}>
      <img className={imgClass} src={src} alt={alt} />
    </div>
  );
}

export function HeadingsComponent(props) {
  let { headingsContainer, h1Text, text,text2,text3 } = props;
  return (
    <div className={headingsContainer}>
      <h1>{h1Text}</h1>
      <p>{text}<span>{text2}</span></p>
      <p>{text3}</p>
    </div>
  );
}
