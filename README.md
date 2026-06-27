# react-spotlight-card

A lightweight React component that adds a mouse-tracking spotlight glow effect to cards. Zero dependencies.

## Installation

```bash
npm install @saydejabbour/react-spotlight-card
```

## Quick Start

```jsx
import { SpotlightCard } from "@saydejabbour/react-spotlight-card";

function App() {
  return (
    <SpotlightCard
      spotlightColor="rgba(120, 80, 255, 0.25)"
      style={{ padding: "28px" }}
    >
      <h3>Hello</h3>
      <p>Hover to see the spotlight effect.</p>
    </SpotlightCard>
  );
}
```

## Features

- **Mouse-tracking spotlight** - A radial glow follows the cursor across the card
- **Spotlight border** - Optional glowing border that responds to cursor position
- **Grouped cards** - Share a single spotlight across multiple cards with `SpotlightGroup`
- **Fully customizable** - Control colors, size, and styles via props
- **Zero dependencies** - Pure React, no external libraries
- **TypeScript support** - Full type definitions included

## Components

### `SpotlightCard`

The main component that renders a card with a cursor-tracking spotlight effect.

```jsx
<SpotlightCard
  spotlightColor="rgba(120, 80, 255, 0.25)"
  spotlightSize={300}
  spotlightBorder
  borderColor="rgba(120, 80, 255, 0.8)"
  style={{ padding: "28px" }}
>
  <p>Card content</p>
</SpotlightCard>
```

#### Props

| Prop              | Type            | Default                       | Description                                     |
| ----------------- | --------------- | ----------------------------- | ----------------------------------------------- |
| `children`        | `ReactNode`     | —                             | Card content                                    |
| `className`       | `string`        | `""`                          | CSS class for the card container                |
| `style`           | `CSSProperties` | `{}`                          | Inline styles for the card container            |
| `spotlightColor`  | `string`        | `"rgba(255, 255, 255, 0.15)"` | Color of the spotlight glow                     |
| `spotlightSize`   | `number`        | `300`                         | Radius of the spotlight in pixels               |
| `spotlightBorder` | `boolean`       | `false`                       | Enable a glowing border that follows the cursor |
| `borderColor`     | `string`        | `"rgba(255, 255, 255, 0.4)"`  | Color of the spotlight border                   |
| `disabled`        | `boolean`       | `false`                       | Disable the spotlight effect                    |

### `SpotlightGroup`

Wraps multiple `SpotlightCard` components so they share a single spotlight that follows the cursor across all cards in the group.

```jsx
import {
  SpotlightGroup,
  SpotlightCard,
} from "@saydejabbour/react-spotlight-card";

<SpotlightGroup style={{ display: "flex", gap: "16px" }}>
  <SpotlightCard
    spotlightColor="rgba(120, 80, 255, 0.2)"
    style={{ padding: "28px" }}
  >
    <h3>Card One</h3>
  </SpotlightCard>
  <SpotlightCard
    spotlightColor="rgba(120, 80, 255, 0.2)"
    style={{ padding: "28px" }}
  >
    <h3>Card Two</h3>
  </SpotlightCard>
</SpotlightGroup>;
```

#### Props

| Prop        | Type            | Default | Description                           |
| ----------- | --------------- | ------- | ------------------------------------- |
| `children`  | `ReactNode`     | —       | `SpotlightCard` components to group   |
| `className` | `string`        | `""`    | CSS class for the group container     |
| `style`     | `CSSProperties` | `{}`    | Inline styles for the group container |

## Examples

### Spotlight Border

Add a glowing border that follows the cursor:

```jsx
<SpotlightCard
  spotlightBorder
  borderColor="rgba(0, 200, 255, 0.8)"
  spotlightColor="rgba(0, 200, 255, 0.1)"
  style={{ padding: "28px" }}
>
  <h3>Glowing Border</h3>
  <p>The border glows where your cursor is.</p>
</SpotlightCard>
```

### Disabled State

Turn off the spotlight effect:

```jsx
<SpotlightCard disabled style={{ padding: "28px", opacity: 0.6 }}>
  <h3>Disabled</h3>
  <p>No spotlight effect here.</p>
</SpotlightCard>
```

## Requirements

- React 17 or later

## License

MIT
