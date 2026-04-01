/**
 * Location definitions for location landing pages and schema.
 * Used by location pages, locations index, footer, and [location]/[service] routes.
 */
export const locations = [
  {
    slug: "troon",
    name: "Troon",
    title: "Garden Services Troon | Professional Tree Surgery & Lawn Care in Ayrshire",
    description: "Local garden services in Troon, Ayrshire. Tree surgery, lawn care, hedge cutting, and landscaping. Coastal gardening expertise for Troon's unique conditions.",
    heroTitle: "Professional Garden Services in Troon, Ayrshire",
    heroDescription: "Your local tree surgeon and qualified gardener serving Troon and surrounding areas.",
    whyChooseTitle: "Why Choose Maple Tree & Gardens in Troon?",
    challengesTitle: "Troon Garden Challenges & Solutions",
    challenges: [
      {
        title: "Coastal Soil Conditions",
        description: "Troon's coastal location means gardens often have sandy, well-draining soil that can be challenging for certain plants. We understand these conditions and can recommend appropriate plants and care techniques.",
        bullets: ["Sandy, well-draining soil", "Salt-tolerant plant selection", "Specialized soil treatments", "Drainage solutions"],
      },
      {
        title: "Salt Spray & Wind Damage",
        description: "Coastal winds and salt spray can damage plants and hedges. We provide protective measures and choose wind-resistant plants that thrive in Troon's coastal environment.",
        bullets: ["Wind-resistant plant selection", "Protective hedging solutions", "Salt spray protection", "Storm damage repair"],
      },
      {
        title: "Troon Weather Considerations",
        description: "Troon's maritime climate brings mild winters and cool summers, but also variable weather patterns. We adapt our garden care to these conditions for optimal results.",
        bullets: ["Maritime climate adaptation", "Seasonal care adjustments", "Weather-resistant solutions", "Year-round maintenance"],
      },
    ],
    servicesSectionTitle: "Our Services in Troon",
    services: [
      { title: "Tree Surgery in Troon", description: "Professional tree surgery services including tree removal, pruning, and emergency storm damage cleanup. We understand Troon's tree species and coastal challenges.", bullets: ["Tree removal and felling", "Tree pruning and crown reduction", "Emergency tree removal", "Stump grinding and removal"] },
      { title: "Lawn Care in Troon", description: "Regular lawn mowing, grass cutting, and turf maintenance services. We understand Troon's coastal soil conditions and provide appropriate lawn care treatments.", bullets: ["Regular lawn mowing", "Grass cutting and edging", "Lawn fertilization", "Seasonal lawn treatments"] },
      { title: "Hedge Cutting in Troon", description: "Professional hedge cutting and trimming services. We understand how coastal winds and salt spray affect hedges and provide appropriate care and protection.", bullets: ["Hedge cutting and trimming", "Hedge shaping and maintenance", "Wind damage repair", "Salt spray protection"] },
      { title: "Garden Landscaping in Troon", description: "Garden landscaping and design services tailored to Troon's coastal environment. We create beautiful, weather-resistant gardens that thrive in local conditions.", bullets: ["Coastal garden design", "Wind-resistant landscaping", "Patio and pathway installation", "Plant selection and planting"] },
    ],
    neighborhoodsTitle: "Troon Neighborhoods We Serve",
    neighborhoods: [
      { name: "Troon Town Centre", description: "Central Troon including the main shopping area and residential streets" },
      { name: "Barassie", description: "Barassie area including the beach and surrounding residential properties" },
      { name: "Fullarton", description: "Fullarton area with its mix of residential and commercial properties" },
      { name: "Loans", description: "Loans area including properties near the golf course and coastal areas" },
    ],
    localRefsTitle: "Local Troon References",
    localRefs: [
      { title: "Troon Golf Course Area", description: "We provide garden services for properties near Troon Golf Course, understanding the unique landscaping needs of golf course-adjacent properties and maintaining appropriate boundaries and aesthetics." },
      { title: "Royal Troon Golf Club", description: "Our services extend to properties near Royal Troon Golf Club, where we understand the importance of maintaining high-quality landscaping that complements the prestigious golf course environment." },
      { title: "Troon Harbour", description: "We serve properties around Troon Harbour, where coastal conditions require specialized garden care and wind-resistant plant selection for optimal results." },
      { title: "Coastal Path Gardens", description: "Properties along Troon's coastal path benefit from our expertise in coastal gardening, including salt spray protection and wind-resistant landscaping solutions." },
    ],
    ctaTitle: "Contact Maple Tree & Gardens in Troon",
    ctaDescription: "Ready to get professional garden services in Troon? Contact us today for a free quote. We understand Troon's unique coastal conditions and provide expert garden care.",
    ctaServing: "Serving Troon, Barassie, Fullarton, Loans, and surrounding areas",
    areaServed: [{ "@type": "City" as const, "name": "Troon" }, { "@type": "City" as const, "name": "Barassie" }, { "@type": "City" as const, "name": "Fullarton" }],
    geo: { latitude: 55.5404, longitude: -4.6597 },
  },
  {
    slug: "prestwick",
    name: "Prestwick",
    title: "Garden Services Prestwick | Tree Surgery & Lawn Care Ayrshire",
    description: "Professional garden and tree services in Prestwick, Ayrshire. Tree surgery, lawn mowing, hedge cutting. Local expertise for Prestwick and surrounding areas. Free quotes.",
    heroTitle: "Professional Garden Services in Prestwick, Ayrshire",
    heroDescription: "Your local tree surgeon and gardener serving Prestwick and the South Ayrshire coast. Expert tree surgery, lawn care, hedge cutting, and garden maintenance.",
    whyChooseTitle: "Why Choose Maple Tree & Gardens in Prestwick?",
    challengesTitle: "Prestwick Garden Challenges & Solutions",
    challenges: [
      {
        title: "Coastal & Airport Area Conditions",
        description: "Prestwick's coastal position and proximity to the airport can affect soil and exposure. We tailor garden care and plant selection to local conditions.",
        bullets: ["Exposed coastal sites", "Soil and drainage assessment", "Wind-resistant planting", "Year-round maintenance"],
      },
      {
        title: "Wind & Salt Exposure",
        description: "Coastal winds and salt can stress hedges and lawns. We offer hedge trimming, lawn care, and planting that copes with Prestwick's conditions.",
        bullets: ["Hedge cutting and shaping", "Lawn care and repair", "Salt-tolerant planting", "Storm damage repair"],
      },
      {
        title: "Seasonal Garden Care",
        description: "We adapt our services to Prestwick's maritime climate so your garden looks its best through the seasons.",
        bullets: ["Seasonal pruning", "Lawn treatments", "Border and bed maintenance", "Clearance and tidying"],
      },
    ],
    servicesSectionTitle: "Our Services in Prestwick",
    services: [
      { title: "Tree Surgery in Prestwick", description: "Professional tree surgery, removal, and pruning in Prestwick. We handle storm damage and emergency call-outs.", bullets: ["Tree removal and felling", "Pruning and crown work", "Emergency tree work", "Stump grinding"] },
      { title: "Lawn Care in Prestwick", description: "Regular lawn mowing and turf care across Prestwick. We keep lawns healthy in coastal conditions.", bullets: ["Regular mowing", "Edging and strimming", "Seasonal treatments", "Lawn repair"] },
      { title: "Hedge Cutting in Prestwick", description: "Hedge cutting and trimming for boundaries and screening in Prestwick.", bullets: ["Hedge cutting", "Shaping and height reduction", "Boundary maintenance", "Debris removal"] },
      { title: "Garden Maintenance in Prestwick", description: "General garden maintenance, strimming, and landscaping support in Prestwick.", bullets: ["Garden strimming", "Weeding and borders", "Clearance", "Ongoing maintenance"] },
    ],
    neighborhoodsTitle: "Prestwick Areas We Serve",
    neighborhoods: [
      { name: "Prestwick Town Centre", description: "Central Prestwick and main residential areas" },
      { name: "Prestwick North", description: "Areas north of the town toward Ayr" },
      { name: "Links & Coastal", description: "Properties near the coast and golf links" },
      { name: "Monkton", description: "Monkton and surrounding neighbourhoods" },
    ],
    localRefsTitle: "Prestwick & Local Links",
    localRefs: [
      { title: "Prestwick Coastal Gardens", description: "We serve gardens along the Prestwick coast, with care suited to exposure and salt spray." },
      { title: "Golf Course & Links", description: "Properties near Prestwick's golf links get tailored lawn and boundary care." },
      { title: "Airport Area", description: "Gardens in the airport area benefit from our reliable, all-year maintenance and tree work." },
      { title: "South Ayrshire Coverage", description: "We cover Prestwick and the wider South Ayrshire coast for tree and garden services." },
    ],
    ctaTitle: "Contact Maple Tree & Gardens in Prestwick",
    ctaDescription: "Ready for professional garden or tree services in Prestwick? Get a free quote. We serve Prestwick and the South Ayrshire coast.",
    ctaServing: "Serving Prestwick, Monkton, and surrounding South Ayrshire",
    areaServed: [{ "@type": "City" as const, "name": "Prestwick" }, { "@type": "City" as const, "name": "Monkton" }, { "@type": "AdministrativeArea" as const, "name": "South Ayrshire" }],
    geo: { latitude: 55.5017, longitude: -4.6145 },
  },
  {
    slug: "ayr",
    name: "Ayr",
    title: "Garden Services Ayr | Tree Surgery & Lawn Care Ayrshire",
    description: "Professional garden and tree services in Ayr, Ayrshire. Tree surgery, lawn mowing, hedge cutting. Local gardener and arborist. Free quotes.",
    heroTitle: "Professional Garden Services in Ayr, Ayrshire",
    heroDescription: "Your local tree surgeon and gardener serving Ayr and the wider Ayrshire area. Expert tree surgery, lawn care, hedge cutting, and garden maintenance.",
    whyChooseTitle: "Why Choose Maple Tree & Gardens in Ayr?",
    challengesTitle: "Ayr Garden Challenges & Solutions",
    challenges: [
      {
        title: "Town & Coastal Mix",
        description: "Ayr's mix of town and coastal gardens means varied soil and exposure. We provide tailored care for each site.",
        bullets: ["Soil and site assessment", "Suitable plant selection", "Drainage solutions", "Ongoing care"],
      },
      {
        title: "Wind & Weather",
        description: "Coastal and exposed gardens in Ayr need wind-resistant planting and reliable maintenance. We specialise in robust, low-maintenance solutions.",
        bullets: ["Wind-resistant hedging", "Lawn and border care", "Storm damage repair", "Seasonal maintenance"],
      },
      {
        title: "Year-Round Maintenance",
        description: "We offer regular maintenance plans so your Ayr garden stays tidy and healthy all year.",
        bullets: ["Lawn mowing", "Hedge trimming", "Weeding and edging", "Clearance and tidying"],
      },
    ],
    servicesSectionTitle: "Our Services in Ayr",
    services: [
      { title: "Tree Surgery in Ayr", description: "Professional tree surgery, removal, and pruning in Ayr. Emergency and planned work.", bullets: ["Tree removal", "Pruning and crown reduction", "Emergency call-outs", "Stump grinding"] },
      { title: "Lawn Care in Ayr", description: "Lawn mowing and turf care across Ayr. Regular visits and one-off treatments.", bullets: ["Lawn mowing", "Edging and strimming", "Fertilising and repair", "Seasonal care"] },
      { title: "Hedge Cutting in Ayr", description: "Hedge cutting and trimming for boundaries and screening in Ayr.", bullets: ["Hedge cutting", "Shaping", "Height reduction", "Boundary maintenance"] },
      { title: "Garden Maintenance in Ayr", description: "General garden maintenance and landscaping support in Ayr.", bullets: ["Strimming and edging", "Weeding and borders", "Clearance", "Full garden care"] },
    ],
    neighborhoodsTitle: "Ayr Areas We Serve",
    neighborhoods: [
      { name: "Ayr Town Centre", description: "Central Ayr and town residential areas" },
      { name: "Ayr South", description: "South Ayr and coastal neighbourhoods" },
      { name: "Alloway", description: "Alloway and surrounding areas" },
      { name: "Heads of Ayr", description: "Heads of Ayr and coastal properties" },
    ],
    localRefsTitle: "Ayr & Local Links",
    localRefs: [
      { title: "Ayr Seafront & Coastal", description: "We care for gardens along Ayr's seafront and coastal strip, with solutions for exposure and salt." },
      { title: "Alloway & Burns Country", description: "Properties in Alloway and Burns country get the same high standard of tree and garden care." },
      { title: "Heads of Ayr", description: "We cover Heads of Ayr and nearby coastal and rural gardens." },
      { title: "Wider Ayrshire", description: "From Ayr we serve the wider Ayrshire area for tree surgery and garden maintenance." },
    ],
    ctaTitle: "Contact Maple Tree & Gardens in Ayr",
    ctaDescription: "Ready for professional garden or tree services in Ayr? Get a free quote. We serve Ayr and the wider Ayrshire area.",
    ctaServing: "Serving Ayr, Alloway, Heads of Ayr, and surrounding Ayrshire",
    areaServed: [{ "@type": "City" as const, "name": "Ayr" }, { "@type": "City" as const, "name": "Alloway" }, { "@type": "AdministrativeArea" as const, "name": "Ayrshire" }],
    geo: { latitude: 55.4581, longitude: -4.6292 },
  },
] as const;

export type LocationSlug = (typeof locations)[number]["slug"];

export function getLocationBySlug(slug: string) {
  return locations.find((loc) => loc.slug === slug);
}
