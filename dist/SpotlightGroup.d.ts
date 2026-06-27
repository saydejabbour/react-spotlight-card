import React from "react";
interface SpotlightGroupContextType {
    position: {
        x: number;
        y: number;
    };
    isHovered: boolean;
    onMouseMove: (x: number, y: number) => void;
}
export declare const SpotlightGroupContext: React.Context<SpotlightGroupContextType | null>;
export interface SpotlightGroupProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export declare const SpotlightGroup: React.FC<SpotlightGroupProps>;
export default SpotlightGroup;
