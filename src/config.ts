export const SITE = {
  website: "https://censusmonkeytypewriter.netlify.app/",
  author: "Dmitry Shkolnik",
  profile: "https://censusmonkeytypewriter.netlify.app/",
  desc: "Continuous feed of LLM-generated hypothesis-driven data explorations of American society using Census Bureau data.",
  title: "Census Monkey Typewriter",
  ogImage: "census-monkey-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 8,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "View Source",
    url: "https://github.com/dshkol/census-monkey-typewriter",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Los_Angeles", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
