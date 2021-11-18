import React from "react";
import { FontSize } from "@advanced-react/foundation/";
interface TextProps {
    size?: keyof typeof FontSize;
}
declare const Text: React.FC<TextProps>;
export default Text;
