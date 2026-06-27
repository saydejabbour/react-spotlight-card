"use client";

import { useState } from "react";
import { SpotlightCard, SpotlightGroup } from "@saydejabbour/react-spotlight-card";

const CodeBlock = ({ code }: { code: string }) => (
  <pre style={{
    background: "#0a0a14",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "10px",
    padding: "20px",
    fontSize: "0.78rem",
    color: "#a78bfa",
    overflowX: "auto",
    margin: 0,
    lineHeight: 1.7,
    flex: 1,
    minWidth: "260px",
  }}>
    <code>{code}</code>
  </pre>
);

const SectionTitle = ({ label }: { label: string }) => (
  <h2 style={{
    color: "#555",
    fontSize: "0.8rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "20px",
  }}>
    {label}
  </h2>
);

export default function Home() {
  const [color, setColor] = useState("rgba(120, 80, 255, 0.25)");
  const [size, setSize] = useState(300);

  return (
    <main style={{
      minHeight: "100vh",
      background: "#0f0f1a",
      fontFamily: "system-ui, sans-serif",
      color: "white",
      padding: "60px 20px",
    }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "3rem", margin: "0 0 12px", letterSpacing: "-1px" }}>
          ✨ react-spotlight-card
        </h1>
        <p style={{ color: "#888", fontSize: "1.1rem", margin: "0 0 24px" }}>
          Mouse-tracking spotlight glow for React & Next.js
        </p>
        <code style={{
          background: "#1a1a2e",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "0.9rem",
          color: "#a78bfa",
        }}>
          npm install @saydejabbour/react-spotlight-card
        </code>
      </div>

      {/* Section 1 - Basic Usage */}
      <section style={{ maxWidth: "960px", margin: "0 auto 80px" }}>
        <SectionTitle label="Basic Usage" />
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "stretch" }}>
          {/* Preview */}
          <div style={{ display: "flex", gap: "16px", flex: 1, minWidth: "260px", flexDirection: "column" }}>
            <SpotlightCard spotlightColor="rgba(120, 80, 255, 0.25)" style={{ padding: "28px", flex: 1 }}>
              <h3 style={{ margin: "0 0 10px" }}>🚀 Fast</h3>
              <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>Zero dependencies. Pure React hooks.</p>
            </SpotlightCard>
            <SpotlightCard spotlightColor="rgba(0, 200, 255, 0.25)" style={{ padding: "28px", flex: 1 }}>
              <h3 style={{ margin: "0 0 10px" }}>🎨 Customizable</h3>
              <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>Control color, size and styles via props.</p>
            </SpotlightCard>
          </div>

          {/* Code */}
          <CodeBlock code={`import { SpotlightCard } from
  "@saydejabbour/react-spotlight-card";

<SpotlightCard
  spotlightColor="rgba(120, 80, 255, 0.25)"
  spotlightSize={300}
  style={{ padding: "28px" }}
>
  <h3>🚀 Fast</h3>
  <p>Zero dependencies.</p>
</SpotlightCard>`} />
        </div>
      </section>

      {/* Section 2 - Spotlight Border */}
      <section style={{ maxWidth: "960px", margin: "0 auto 80px" }}>
        <SectionTitle label="Spotlight Border" />
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "stretch" }}>
          {/* Preview */}
          <div style={{ display: "flex", gap: "16px", flex: 1, minWidth: "260px", flexDirection: "column" }}>
            <SpotlightCard
              spotlightBorder
              borderColor="rgba(120, 80, 255, 0.8)"
              spotlightColor="rgba(120, 80, 255, 0.1)"
              style={{ padding: "28px", flex: 1 }}
            >
              <h3 style={{ margin: "0 0 10px" }}>Purple Border</h3>
              <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>The border glows where your cursor is.</p>
            </SpotlightCard>
            <SpotlightCard
              spotlightBorder
              borderColor="rgba(0, 200, 255, 0.8)"
              spotlightColor="rgba(0, 200, 255, 0.1)"
              style={{ padding: "28px", flex: 1 }}
            >
              <h3 style={{ margin: "0 0 10px" }}>Cyan Border</h3>
              <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>Combine border glow with fill glow.</p>
            </SpotlightCard>
          </div>

          {/* Code */}
          <CodeBlock code={`import { SpotlightCard } from
  "@saydejabbour/react-spotlight-card";

// Enable the border glow effect
<SpotlightCard
  spotlightBorder
  borderColor="rgba(120, 80, 255, 0.8)"
  spotlightColor="rgba(120, 80, 255, 0.1)"
  style={{ padding: "28px" }}
>
  <h3>Purple Border</h3>
  <p>The border glows on hover.</p>
</SpotlightCard>`} />
        </div>
      </section>

      {/* Section 3 - SpotlightGroup */}
      <section style={{ maxWidth: "960px", margin: "0 auto 80px" }}>
        <SectionTitle label="Spotlight Group" />
        <p style={{ color: "#555", marginBottom: "20px", fontSize: "0.95rem" }}>
          One shared spotlight across all cards.
        </p>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "stretch" }}>
          {/* Preview */}
          <SpotlightGroup style={{ display: "flex", gap: "16px", flex: 1, minWidth: "260px", flexWrap: "wrap" }}>
            <SpotlightCard spotlightColor="rgba(120, 80, 255, 0.2)" style={{ padding: "28px", flex: 1 }}>
              <h3 style={{ margin: "0 0 10px" }}>Card One</h3>
              <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>Shared spotlight source.</p>
            </SpotlightCard>
            <SpotlightCard spotlightColor="rgba(120, 80, 255, 0.2)" style={{ padding: "28px", flex: 1 }}>
              <h3 style={{ margin: "0 0 10px" }}>Card Two</h3>
              <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>Glow follows cursor across cards.</p>
            </SpotlightCard>
          </SpotlightGroup>

          {/* Code */}
          <CodeBlock code={`import { SpotlightGroup, SpotlightCard } from
  "@saydejabbour/react-spotlight-card";

// Wrap cards in SpotlightGroup
// to share one spotlight across all
<SpotlightGroup>
  <SpotlightCard
    spotlightColor="rgba(120, 80, 255, 0.2)"
  >
    <h3>Card One</h3>
  </SpotlightCard>

  <SpotlightCard
    spotlightColor="rgba(120, 80, 255, 0.2)"
  >
    <h3>Card Two</h3>
  </SpotlightCard>
</SpotlightGroup>`} />
        </div>
      </section>

      {/* Section 4 - Disabled */}
      <section style={{ maxWidth: "960px", margin: "0 auto 80px" }}>
        <SectionTitle label="Disabled State" />
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "stretch" }}>
          {/* Preview */}
          <div style={{ display: "flex", gap: "16px", flex: 1, minWidth: "260px" }}>
            <SpotlightCard
              disabled
              style={{ padding: "28px", flex: 1, opacity: 0.6 }}
            >
              <h3 style={{ margin: "0 0 10px" }}>⛔ Disabled</h3>
              <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>
                The spotlight effect is turned off.
              </p>
            </SpotlightCard>
          </div>

          {/* Code */}
          <CodeBlock code={`import { SpotlightCard } from
  "@saydejabbour/react-spotlight-card";

// Pass disabled to turn off the effect
<SpotlightCard
  disabled
  style={{ padding: "28px" }}
>
  <h3>Disabled</h3>
  <p>No spotlight effect here.</p>
</SpotlightCard>`} />
        </div>
      </section>

      {/* Section 5 - Live Playground */}
      <section style={{ maxWidth: "960px", margin: "0 auto 80px" }}>
        <SectionTitle label="Live Playground" />
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", alignItems: "center" }}>
          {/* Controls */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", minWidth: "200px" }}>
            <label style={{ color: "#aaa", fontSize: "0.9rem" }}>
              Spotlight Color
              <input
                type="color"
                defaultValue="#7850ff"
                onChange={(e) => {
                  const hex = e.target.value;
                  const r = parseInt(hex.slice(1, 3), 16);
                  const g = parseInt(hex.slice(3, 5), 16);
                  const b = parseInt(hex.slice(5, 7), 16);
                  setColor("rgba(" + r + ", " + g + ", " + b + ", 0.3)");
                }}
                style={{
                  display: "block",
                  marginTop: "8px",
                  width: "100%",
                  height: "40px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                }}
              />
            </label>
            <label style={{ color: "#aaa", fontSize: "0.9rem" }}>
              Spotlight Size: {size}px
              <input
                type="range"
                min={100}
                max={600}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                style={{ display: "block", marginTop: "8px", width: "100%" }}
              />
            </label>
          </div>

          {/* Preview */}
          <SpotlightCard
            spotlightColor={color}
            spotlightSize={size}
            style={{ padding: "40px", flex: 1, minWidth: "200px" }}
          >
            <h3 style={{ margin: "0 0 10px" }}>🎮 Interactive</h3>
            <p style={{ color: "#aaa", margin: 0, lineHeight: 1.6 }}>
              Customize the spotlight live using the controls.
            </p>
          </SpotlightCard>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <div style={{ textAlign: "center", color: "#333", fontSize: "0.85rem" }}>
        Made by saydejabbour · MIT License ·{" "}
        <a
          href="https://github.com/saydejabbour/react-spotlight-card"
          style={{ color: "#555", textDecoration: "none" }}
        >
          GitHub
        </a>
      </div>
    </main>
  );
}