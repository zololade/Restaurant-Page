// src/scripts/pages/menu.js
import sandwichImg from "../../assets/sandwich.png";

export const menuData = [
 {
  tag: "header",
  class: "page-header",
  content: [
   { tag: "h1", content: "The Execution Log" },
   { tag: "p", content: "High-bandwidth fuel for deep work sessions." },
  ],
 },
 {
  tag: "section",
  class: "menu-category",
  content: [
   { tag: "h2", content: "Caffeine.sh" },
   {
    tag: "ul",
    class: "menu-list",
    content: [
     {
      tag: "li",
      content: [
       { tag: "strong", content: "Cold Brew [Overclocked]" },
       " — 18hr steep, zero bitterness. 4.50",
      ],
     },
     {
      tag: "li",
      content: [
       { tag: "strong", content: "Flat White" },
       " — Micro-foam precision. 4.00",
      ],
     },
    ],
   },
  ],
 },
 {
  tag: "section",
  class: "menu-category",
  content: [
   { tag: "h2", content: "Solid State Fuel" },
   {
    tag: "div",
    class: "featured-item",
    content: [
     {
      tag: "img",
      src: sandwichImg,
      alt: "The JIT Breakfast Sandwich",
      width: "300",
      height: "200",
     },
     {
      tag: "h3",
      content: "The JIT Sandwich",
     },
     {
      tag: "p",
      content:
       "Sourdough, avocado, poached egg, and red pepper flakes. Deployed in < 5 mins.",
     },
    ],
   },
  ],
 },
];
