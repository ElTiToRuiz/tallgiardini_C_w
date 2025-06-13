# Tall Giardini Project

This project is the result of modifying a code package provided as part of a challenge. The main objective was to analyze the structure and style of the original project and implement improvements in specific sections, as well as explore the integration of new components.

## Original Project Link

[Project template](https://we.tl/t-s8CbzuLi4Z)

## Getting Started

To run this project locally, follow these steps:

1.  **Installation**: Open your terminal in the project directory and run the following command to install the project dependencies:
    ```bash
    pnpm i
    ```
    _(This command assumes you have pnpm installed. If not, you can install it globally with `npm install -g pnpm` or refer to the official pnpm documentation for installation instructions.)_

2.  **Astro Extension (Recommended)**: For the best development experience with Astro, it's recommended to install the official Astro extension for your code editor. This usually provides features like syntax highlighting, IntelliSense, and more. You can find the Astro extension in your editor's marketplace (e.g., VS Code Marketplace).

3.  **Development Server**: Once the dependencies are installed, start the development server by running:
    ```bash
    pnpm dev
    ```
    This command will usually start the project on a local development server (e.g., `http://localhost:4321`).

## Changes Made

The following modifications were implemented in the project:
* **`App` Component**:
    * The cursor pointer effect was removed.
    * A top-to-bottom gradient (`from-[#0A0A0A] to-[#121212]`) was added to the background.
* **`Header` Component**:
    * The hover effect of the main button in the header was modified to improve visual interaction.
* **`Global.css`**:
    * Highlighted words now use a background color of #2563eb.
    * The default cursor was replaced with a custom SVG (cursor.svg).
* **`BackgroundHero`**:
    * The grid color was adjusted to better align with the overall color palette.
* **`Hero` Component**:
    * The text styling was updated, including a darker gradient for the typography.
    * The button gradient was reversed (purple-to-blue) to contrast with the navbar button.
    * Removed background color from the text: "Revoluciona tu estrategia digital"
* **"Tráfico sin conversión" Section (Component `TunnelSection` renamed to `TrafficInsights`)**:
    * The original `TunnelSection` component was renamed to `TrafficInsights` for better modularity and semantic clarity.
    * A new design and content were integrated, inspired by the "Unlock Your Team's Potential" section from the following reference: [https://suprema.framer.website/](https://suprema.framer.website/)
* **"Nuestra Solución" Section (New Component `TailoredSolutions`)**:
    * A new component named `TailoredSolutions` was created to replace the original section.
    * The design and content of this section were based on the "Our method is simple and transparent at every step, from zero to live." section from the following reference: [https://deliver.framer.website/](https://deliver.framer.website/)
    * A pulse effect was added to the component's title for emphasis.
    * A spotlight points animation was implemented for an engaging visual effect.
    * Added a left border (border-l) and padding to the text section for improved visual hierarchy.
* **`Reviews` Component**:
    * The green background of the component was removed.
    * The color of the rating stars was changed to `#FEC84B` for better visual harmony with the rest of the design.
    * Reduced padding between cards and text for a more compact layout.
    * Card backgrounds were replaced with a gradient effect.
* **`ModelSection` Component**:
    * The background of the cards was modified to use a gradient, providing a more modern and dynamic look.
    * The same gradient effect was applied to the `handleMouseLeave` event to maintain visual consistency upon interaction.
    * The card glow effect’s color was updated to match the navbar button’s gradient.
    * The `font-medium` class was added to the card titles for greater visual emphasis.
* **`InfiniteMarquee` Component**:
    * The hover effect of the `<span>` containing the text "mejores herramientas" was modified.
* **`InfiniteMarqueeComponent` (in `App.tsx`)**:
    * The `InfiniteMarquee` component was wrapped within a `<div>` with `overflow: hidden` to enable the `TailoredSolutions` component to function correctly with a `sticky` scroll effect.

## External Templates and Fragments Used

* **"Tráfico sin conversión" Section (`TrafficInsights`):** Inspiration and design elements taken from the "Unlock Your Team's Potential" section at [https://suprema.framer.website/](https://suprema.framer.website/).
* **"Nuestra Solución" Section (`TailoredSolutions`):** Inspiration and design elements taken from the "Our method is simple and transparent at every step, from zero to live." section at [https://deliver.framer.website/](https://deliver.framer.website/).

## Next Steps (Optional)

* Explore more subtle animations for element interactions.
* Optimize responsiveness across different devices.
* Conduct usability testing to validate the implemented improvements.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```
## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |