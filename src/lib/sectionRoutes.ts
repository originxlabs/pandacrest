export const routeToSection: Record<string, string> = {
  "/": "home",
  "/about": "about",
  "/admissions": "admissions",
  "/admissions/process": "admissions-process",
  "/admissions/fee-structure": "admissions-fee",
  "/admissions/apply-online": "admissions-apply",
  "/curriculum": "curriculum",
  "/curriculum/activities": "activities",
  "/why-pandacrest": "why-pandacrest",
  "/news": "news",
  "/contact": "contact",
};

export const sectionToRoute: Record<string, string> = Object.fromEntries(
  Object.entries(routeToSection).map(([route, section]) => [section, route]),
);

export const knownRoutes = Object.keys(routeToSection);
