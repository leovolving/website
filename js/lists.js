const link = [
  {
    title: "The Leo Yockey Show (podcast)",
    href: "https://leoyockey.buzzsprout.com/",
  },
  {
    title: "guest podcast interview - Allyship is a Verb",
    href: "https://www.allyshipisaverb.com/episodes/leo-yockey",
  },
  {
    title: "TikTok @leoyockey",
    href: "https://tiktok.com/@leoyockey",
  },
  {
    title: "Instagram @leoyockey",
    href: "https://instagram.com/leoyockey",
  },
  {
    title: "Twitter @leovolving",
    href: "https://twitter.com/leovolving",
  },
];

const blog = [
  {
    title: "5 Advantages of Telecommuting",
    href: "5-advantages-telecommuting",
    date: "2020-04-01T01:24:35.344Z",
    description:
      "More people are telecommuting than ever before. Increased productivity and inclustion are just a few of the benefits. Read here to find out more.",
    tags: ["career", "personal", "advice"],
    banner: null,
  },
  {
    title: "On Breaking Convention",
    href: "breaking-convention",
    date: "2020-10-17T01:10:14.508Z",
    description:
      "Excerpt from an essay reflecting on authenticity and assimilation",
    tags: ["personal", "essay", "mental-health"],
    banner: null,
  },
  {
    title: "How to Stop 'Doomscrolling,' For Real",
    href: "how-to-stop-doomscrolling",
    date: "2020-07-24T18:44:35.344Z",
    description:
      "You already know that doomscrolling is bad. Are you ready to stop?",
    tags: ["personal", "advice", "mental-health"],
    banner: null,
  },
  {
    title: "Transgender Employee - From Vulnerable to Exploited",
    href: "trans-tech-trauma",
    date: "2020-06-26T17:55:55.344Z",
    description:
      "I'm transgender. Sometimes this makes me more vulnerable than my Blackness does. At least it did at my first tech job.",
    tags: [
      "coding",
      "technical",
      "race",
      "gender",
      "personal",
      "black-in-tech",
    ],
    banner: null,
  },
  {
    title: "How to Get Interviews As a Self-Taught (or Bootcamp) Developer",
    href: "how-to-get-tech-interviews",
    date: "2020-07-16T20:45:55.344Z",
    description: "We have to do more than apply.",
    tags: ["coding", "technical", "career", "advice"],
    banner: null,
  },
  {
    title: "Black in Tech - Was My Salary Fair? No.",
    href: "black-in-tech-pay-disparity",
    date: "2020-06-19T20:24:35.344Z",
    description:
      "Technology was supposed to be the great equalizer. It hasn't happened.",
    tags: ["coding", "technical", "race", "personal", "black-in-tech"],
    banner: null,
  },
  {
    title: "The Ultimate Guide to Being Productive at Home",
    href: "ultimate-guide-productive-at-home",
    date: "2020-04-28T19:36:21.365Z",
    description:
      "Do you want to do more from home? The following 6 tips are for anyone who wants to be more productive, whether it be with work, school, chores, or hobbies.",
    tags: ["career", "personal", "advice"],
    banner: null,
  },
  {
    title: "Perhaps This is Why I Read",
    href: "why-i-read",
    date: "2020-11-05T17:40:00.699Z",
    description:
      "This morning, I finished my 40th book of 2020. I???ve officially doubled the goal I set for myself at the beginning of the year. But why?",
    tags: ["personal", "essay", "books"],
    banner: null,
  },
];

blog.sort((a, b) => a.date - b.date).reverse();

const lists = { blog, link };
