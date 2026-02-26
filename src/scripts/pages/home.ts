import hero from "../../assets/coffee.png";

const pageData = [
 {
  tag: "img",
  src: hero,
  width: "3840",
  height: "1600",
 },
 {
  tag: "header",
  content: [
   {
    tag: "h1",
    content: "JIT Coffee",
   },
   {
    tag: "p",
    content: [
     `Precision-brewed for the high-performance professional. We deliver specialty-grade caffeine exactly when your calendar demands it. No waiting, no friction—just `,
     { tag: "strong", content: "Just-In-Time" },
     ` fuel.`,
    ],
   },
  ],
 },
 {
  tag: "section",
  content: [
   { tag: "h2", content: "Why Busy Professionals Choose Us" },

   {
    tag: "ul",
    content: [
     {
      tag: "li",
      content: [
       { tag: "strong", content: "Sub-5 Minute Delivery:" },
       ` Our geofencing technology ensures your cup is poured the moment you walk through the door.`,
      ],
     },
     {
      tag: "li",
      content: [
       { tag: "strong", content: "Adaptive Brewing:" },
       ` We adjust our roast profiles weekly to match the seasonal acidity of our direct-trade beans.`,
      ],
     },
     {
      tag: "li",

      content: [
       { tag: "strong", content: `Zero-Friction Ordering:` },
       ` One-tap ordering integrated with your Slack or Calendar.`,
      ],
     },
    ],
   },
  ],
 },
 {
  tag: "section",
  content: [
   {
    tag: "h2",
    content: `Community Feedback`,
   },
   {
    tag: "article",
    content: [
     {
      tag: "p",
      content: `As a developer, I live in 'Deep Work' blocks. JIT Coffee is the only
      service that understands I don't have 15 minutes to stand in a line. It's
      the most efficient caffeine delivery system I've ever used.`,
     },
     {
      tag: "footer",
      content: `— Alex Rivera, Senior Software Engineer`,
     },
    ],
   },
   {
    tag: "article",
    content: [
     {
      tag: "p",
      content: `The beans are clearly high-end, but the convenience is the real game-changer. It’s like having a personal barista who knows my exact schedule.`,
     },
     {
      tag: "footer",
      content: `— Sarah Chen, Startup Founder`,
     },
    ],
   },
  ],
 },
];

export default pageData;
