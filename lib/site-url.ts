const configuredDomain = process.env.GITHUB_PAGES_DOMAIN?.trim();

export const siteUrl =
  process.env.GITHUB_PAGES === "true"
    ? configuredDomain
      ? "https://" + configuredDomain
      : "https://averoweb.github.io/Esteban"
    : configuredDomain
      ? "https://" + configuredDomain
      : "http://localhost:3000";