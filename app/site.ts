import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl =
    "https://www.bakkerpfi.co.nz";

  return [

    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      priority: 0.95,
    },

    {
      url: `${baseUrl}/codexus`,
      lastModified: new Date(),
      priority: 0.95,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/learning`,
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: `${baseUrl}/learning/what-is-passive-fire`,
      lastModified: new Date(),
      priority: 0.95,
    },

    {
      url: `${baseUrl}/learning/fire-compartmentation`,
      lastModified: new Date(),
      priority: 0.95,
    },

    {
      url: `${baseUrl}/learning/service-penetrations`,
      lastModified: new Date(),
      priority: 0.95,
    },

    {
      url: `${baseUrl}/learning/fire-doors`,
      lastModified: new Date(),
      priority: 0.95,
    },

    {
      url: `${baseUrl}/learning/common-defects`,
      lastModified: new Date(),
      priority: 0.95,
    },

    {
      url: `${baseUrl}/learning/inspections-compliance`,
      lastModified: new Date(),
      priority: 0.95,
    },

    {
      url: `${baseUrl}/learning/inspection-gallery`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/learning/quiz`,
      lastModified: new Date(),
      priority: 0.85,
    },

    {
      url: `${baseUrl}/learning/certificate`,
      lastModified: new Date(),
      priority: 0.7,
    },

  ];
}