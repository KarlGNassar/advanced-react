import React from "react";
import { FontSize } from "@advanced-react/foundation/";

interface TextProps {
  size?: keyof typeof FontSize;
}

const Text: React.FC<TextProps> = ({ size = FontSize.base, children }) => {
  const className = `des-text-${size}`;
  return <p className={className}>{children}</p>;
};

export default Text;
