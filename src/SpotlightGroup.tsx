import React, { createContext, useContext, useRef, useState } from "react";

interface SpotlightGroupContextType {
  position: { x: number; y: number };
  isHovered: boolean;
  onMouseMove: (x: number, y: number) => void;
}

export const SpotlightGroupContext = createContext<SpotlightGroupContextType | null>(null);

export interface SpotlightGroupProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const SpotlightGroup: React.FC<SpotlightGroupProps> = ({
  children,
  className = "",
  style = {},
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const onMouseMove = (x: number, y: number) => {
    setPosition({ x, y });
  };

  return (
    <SpotlightGroupContext.Provider value={{ position, isHovered, onMouseMove }}>
      <div
        className={className}
        style={style}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
    </SpotlightGroupContext.Provider>
  );
};

export default SpotlightGroup;