export const footerData = {
 tag: "footer",
 class: "site-footer",
 content: [
  {
   tag: "div",
   class: "footer-grid",
   content: [
    {
     tag: "div",
     content: [
      { tag: "h4", content: "JIT Coffee" },
      { tag: "p", content: "Precision caffeine for the modern stack." },
     ],
    },
    {
     tag: "div",
     content: [
      { tag: "h4", content: "Operating Hours" },
      { tag: "p", content: "Mon-Fri: 06:00 - 18:00" },
      { tag: "p", content: "Sat-Sun: 08:00 - 16:00" },
     ],
    },
    {
     tag: "div",
     content: [
      { tag: "h4", content: "Connect" },
      { tag: "p", content: "Slack: #jit-cafe" },
      { tag: "p", content: "GitHub: /jit-coffee" },
     ],
    },
   ],
  },
  {
   tag: "p",
   class: "copyright",
   content: `© ${new Date().getFullYear()} JIT Coffee. Built with Vanilla JS & SOLID Principles.`,
  },
 ],
};
