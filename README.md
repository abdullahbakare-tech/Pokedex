# React Props: Pokedex

A simple React application that demonstrates the use of **components**, **props**, and **defaultProps** by building a Pokémon Pokédex.

## 📖 Overview

This project displays a collection of Pokémon cards using reusable React components. Each card shows a Pokémon's name, image, type, and base experience.

The application is built using three components:

- **App** – The root component that renders the `Pokedex`.
- **Pokedex** – Receives an array of Pokémon objects through props and renders multiple `Pokecard` components.
- **Pokecard** – Displays information about a single Pokémon.

## 🚀 Features

- Reusable React components
- Passing data through props
- Using `defaultProps`
- Dynamic image generation
- Responsive card-based layout

## 🏗️ Component Structure

### App

The top-level component that renders a single `Pokedex` component.

```jsx
<App />
