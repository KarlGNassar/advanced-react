import React from 'react';
import { FontSize } from '@advanced-react/foundation/';

const Text = ({ size = FontSize.base, children }) => {
    const className = `des-text-${size}`;
    return React.createElement("p", { className: className }, children);
};

export { Text as default };
//# sourceMappingURL=Text.js.map
