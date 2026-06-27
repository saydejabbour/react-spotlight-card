import React from "react";
export interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    spotlightColor?: string;
    spotlightSize?: number;
    spotlightBorder?: boolean;
    borderColor?: string;
    disabled?: boolean;
}
export declare const SpotlightCard: React.FC<SpotlightCardProps>;
export default SpotlightCard;
