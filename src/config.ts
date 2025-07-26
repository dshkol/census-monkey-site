export const SITE = {
  website: "https://censusmonkeytypewriter.netlify.app/",
  author: "Census Monkey Typewriter",
  profile: "https://censusmonkeytypewriter.netlify.app/",
  desc: "AI-generated demographic insights and data explorations of American society through Census Bureau data.",
  title: "Census Monkey Typewriter",
  ogImage: "census-monkey-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 8,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "View Source",
    url: "https://github.com/census-monkey-typewriter/analyses",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/New_York", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
