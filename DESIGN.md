---
name: Lumina Core
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#44e2cd'
  on-secondary: '#003731'
  secondary-container: '#03c6b2'
  on-secondary-container: '#004d44'
  tertiary: '#ffb2b7'
  on-tertiary: '#67001b'
  tertiary-container: '#ff516a'
  on-tertiary-container: '#5b0017'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#62fae3'
  secondary-fixed-dim: '#3cddc7'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b7'
  on-tertiary-fixed: '#40000d'
  on-tertiary-fixed-variant: '#92002a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system is built on a foundation of **Modern Minimalism** fused with **Glassmorphism**. It is designed for high-growth technology platforms that require a balance between technical precision and creative expression. The aesthetic is "Ethereal Tech"—utilizing deep background canvases, vibrant accent colors, and translucent layers to create a sense of infinite digital space.

The target audience consists of forward-thinking professionals and developers who value efficiency and visual polish. The UI should feel responsive, lightweight, and deeply intentional. Every element is designed to feel like a precision instrument, using light and transparency to guide the user's focus without overwhelming the content.

## Colors

The palette is optimized for a **dark-mode-first** experience. The primary color is a vibrant Indigo, used for high-signal actions and primary brand touchpoints. A secondary Teal provides a refreshing contrast, ideal for success states and secondary features, while a Tertiary Rose is reserved for critical alerts and destructive actions.

The Neutral palette is derived from deep Slate tones, providing a more sophisticated and less abrasive experience than pure black. Surfaces are built using varying opacities of these neutrals to create a sense of hierarchy and material depth.

## Typography

This design system employs a tiered typographic strategy to balance personality with readability. 

- **Sora** is used for headlines to provide a geometric, tech-forward character. Its wide stance and unique letterforms make it highly recognizable at large scales.
- **Hanken Grotesk** serves as the primary body face. It is chosen for its exceptional legibility and modern, clean aesthetic that stays out of the way of the user's workflow.
- **JetBrains Mono** is utilized for labels, metadata, and technical data. This adds a "pro" utility feel to the interface, signaling precision and data-driven insights.

## Layout & Spacing

The system follows a strict **8px linear scale** to ensure mathematical harmony across all components and layouts. 

The layout model is a **fluid grid** system. On desktop, it utilizes a 12-column grid with 24px gutters and 32px outer margins. Components should be built using `flexbox` or `grid` logic, prioritizing dynamic stacking and percentage-based widths for internal elements. Vertical rhythm is maintained by ensuring all heights and vertical padding increments are divisible by 8.

## Elevation & Depth

Depth in this design system is communicated through **Glassmorphism and Tonal Layering** rather than traditional heavy shadows.

- **Level 1 (Base):** The primary background color.
- **Level 2 (Surface):** A slightly lighter neutral tone used for cards and containers.
- **Level 3 (Overlay):** Translucent layers (60-80% opacity) with a `20px` backdrop blur. These surfaces should have a `1px` inner border (stroke) with a low-opacity white to simulate a glass edge.
- **Shadows:** When used for modals or floating menus, shadows are extra-diffused (32px blur), low-opacity (15%), and tinted with the Primary color to maintain the "glow" aesthetic.

## Shapes

The shape language is **Rounded**, striking a balance between the friendliness of organic shapes and the structure of geometric design. 

A base radius of `0.5rem (8px)` is applied to standard buttons and inputs. Larger containers like cards use `1rem (16px)`, while oversized feature sections or "call to action" containers use `1.5rem (24px)`. Interactive states should maintain these radii, ensuring that focus rings and hover overlays perfectly nest within the parent geometry.

## Components

### Buttons
Primary buttons use a solid gradient of Primary to Secondary colors with white text. Secondary buttons utilize the "Glass" effect: a semi-transparent background with a 1px border. All buttons have a height of 40px (Medium) or 48px (Large) and use `Label-MD` for text.

### Cards
Cards are the primary content vessel. They feature a `1px` border of `rgba(255, 255, 255, 0.1)` and a subtle background tint. There is no shadow on idle; on hover, the card should lift using a Primary-tinted glow shadow and a slight scale increase (1.02x).

### Input Fields
Inputs are dark and recessed. They use a 1px border that glows (Primary color) only when focused. Placeholder text uses `Body-SM` in a muted neutral.

### Chips & Badges
Chips use `JetBrains Mono` and are pill-shaped (fully rounded). They should have a subtle background fill (10% opacity) of the color they represent (e.g., Green for "Success").

### Checkboxes & Radios
These components are purely geometric. Checkboxes use the Primary color for the checked state, while radio buttons use a concentric ring "target" visual.

### Navigation Rails
For complex apps, use a thin navigation rail (64px - 80px) on the left side, utilizing high-contrast icons and translucent hover states to keep the focus on the main workspace.