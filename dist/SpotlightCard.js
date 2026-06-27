import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useContext } from "react";
import { SpotlightGroupContext } from "./SpotlightGroup";
export const SpotlightCard = ({ children, className = "", style = {}, spotlightColor = "rgba(255, 255, 255, 0.15)", spotlightSize = 300, spotlightBorder = false, borderColor = "rgba(255, 255, 255, 0.4)", disabled = false, }) => {
    const cardRef = useRef(null);
    const [localPosition, setLocalPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const groupContext = useContext(SpotlightGroupContext);
    const hovered = groupContext ? groupContext.isHovered : isHovered;
    const handleMouseMove = (e) => {
        if (disabled)
            return;
        if (!cardRef.current)
            return;
        if (groupContext) {
            groupContext.onMouseMove(e.clientX, e.clientY);
        }
        else {
            const rect = cardRef.current.getBoundingClientRect();
            setLocalPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }
    };
    const getResolvedPosition = () => {
        if (!groupContext || !cardRef.current)
            return localPosition;
        const rect = cardRef.current.getBoundingClientRect();
        return {
            x: groupContext.position.x - rect.left,
            y: groupContext.position.y - rect.top,
        };
    };
    const resolvedPosition = getResolvedPosition();
    const borderValue = spotlightBorder && hovered
        ? "1px solid " + borderColor
        : "1px solid rgba(255,255,255,0.08)";
    return (_jsxs("div", { ref: cardRef, className: className, onMouseMove: handleMouseMove, onMouseEnter: () => { if (!groupContext)
            setIsHovered(true); }, onMouseLeave: () => { if (!groupContext)
            setIsHovered(false); }, style: Object.assign({ position: "relative", borderRadius: "12px", overflow: "hidden", background: "#1a1a2e", border: borderValue }, style), children: [!disabled && (_jsx("div", { style: {
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    borderRadius: "inherit",
                    opacity: hovered ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    background: "radial-gradient(" +
                        spotlightSize +
                        "px circle at " +
                        resolvedPosition.x +
                        "px " +
                        resolvedPosition.y +
                        "px, " +
                        spotlightColor +
                        ", transparent 70%)",
                } })), _jsx("div", { style: { position: "relative", zIndex: 1 }, children: children })] }));
};
export default SpotlightCard;
