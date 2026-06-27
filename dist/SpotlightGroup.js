import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
export const SpotlightGroupContext = createContext(null);
export const SpotlightGroup = ({ children, className = "", style = {}, }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const onMouseMove = (x, y) => {
        setPosition({ x, y });
    };
    return (_jsx(SpotlightGroupContext.Provider, { value: { position, isHovered, onMouseMove }, children: _jsx("div", { className: className, style: style, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: children }) }));
};
export default SpotlightGroup;
