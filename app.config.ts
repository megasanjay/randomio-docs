export default defineAppConfig({
  docus: {
    title: "RandomIO",
    description: "The best place to start your documentation.",
    image:
      "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {
      twitter: "megasanjay",
      github: "megasanjay/api.randomio",
    },
    github: {
      dir: ".starters/default/content",
      branch: "main",
      repo: "docs.randomio",
      owner: "megasanjay",
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
    footer: {
      credits: {
        icon: "IconDocus",
        text: "Powered by Docus",
        href: "https://docus.dev",
      },
      textLinks: [
        {
          text: "Made with ❤️",
          href: "https://sanjaysoundarajan.dev",
        },
      ],
      iconLinks: [
        {
          href: "https://nuxt.com",
          icon: "simple-icons:nuxtdotjs",
        },
      ],
    },
  },
});
