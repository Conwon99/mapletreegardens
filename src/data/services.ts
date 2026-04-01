/**
 * Central list of services for the services index page and navigation.
 * Keep in sync with ServicesGrid.tsx content and individual service pages.
 */
export const services = [
  {
    slug: "lawn-mowing",
    title: "Lawn Mowing & Grass Cutting",
    shortDescription: "Professional lawn care and garden maintenance in Troon & Ayrshire",
    description: "Expert lawn mowing, grass cutting, and turf maintenance services across Troon, Prestwick, and Ayrshire. Regular lawn care schedules available.",
    features: [
      "Regular lawn mowing service",
      "Garden edge trimming",
      "Grass collection & disposal",
      "Seasonal lawn treatments",
    ],
    image: "/uploads/lawnmower.jpg",
    fallbackImage: "/uploads/lawnmower.jpg",
    color: "grass-green",
  },
  {
    slug: "tree-surgery",
    title: "Tree Surgery & Removal",
    shortDescription: "Safe tree cutting, pruning and removal services across Ayrshire",
    description: "Expert tree surgery, tree removal, and tree pruning services across Troon, Prestwick, and Ayrshire. Fully qualified arborist with 20+ years experience.",
    features: [
      "Professional tree removal",
      "Storm damage tree work",
      "Stump grinding service",
      "Complete site cleanup",
    ],
    image: "/uploads/treecutting.webp",
    fallbackImage: "/uploads/treecutting.jpg",
    color: "sky-blue",
  },
  {
    slug: "hedge-cutting",
    title: "Hedge Cutting & Trimming",
    shortDescription: "Expert hedge maintenance and garden boundary work",
    description: "Professional hedge cutting and trimming across Troon, Prestwick, and Ayrshire. Hedge shaping, height reduction, and tidy garden boundaries.",
    features: [
      "Professional hedge cutting",
      "Hedge shaping & maintenance",
      "Height reduction service",
      "Garden debris removal",
    ],
    image: "/uploads/hedge2.webp",
    fallbackImage: "/uploads/hedge2.jpg",
    color: "donut-pink",
  },
  {
    slug: "garden-strimming",
    title: "Garden Strimming & Edging",
    shortDescription: "Detailed garden maintenance and precision edge work",
    description: "Pathway and border edging, work around obstacles, and professional finishing for gardens across Troon and Ayrshire.",
    features: [
      "Pathway & border edging",
      "Around garden obstacles",
      "Hard-to-reach areas",
      "Professional finishing",
    ],
    image: "/uploads/garden1.webp",
    fallbackImage: "/uploads/garden1.jpg",
    color: "sunshine-yellow",
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];
