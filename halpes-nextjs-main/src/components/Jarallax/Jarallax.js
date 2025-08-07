import React from "react";

const Jarallax = ({ className = "", imgPosition = "50% 50%", children }) => {
  let backgroundImageSrc = null;
  const contentChildren = [];

  React.Children.forEach(children, (child) => {
    if (child && child.type && child.type.displayName === "JarallaxImage") {
      backgroundImageSrc = child.props.src;
    } else if (child) {
      contentChildren.push(child);
    }
  });

  const style = {
    backgroundImage: backgroundImageSrc ? `url(${backgroundImageSrc})` : undefined,
    backgroundPosition: imgPosition,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    zIndex: 0,
    padding: "70px 0",
  };

  return (
    <div className={`${className} jarallax`} style={style}>
      {contentChildren}
    </div>
  );
};

export default Jarallax; 