import React from "react";

export function ImgComponent(props) {
  let { imgContainerClass, imgClass, src, alt } = props;
  return (
    <div className={imgContainerClass}>
      <img className={imgClass} src={src} alt={alt} />
    </div>
  );
}