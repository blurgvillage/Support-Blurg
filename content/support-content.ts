// ---------------------------------------------------------------------------
// Single source of truth for all Blurgvillage Support content.
// Edit the text/data below and every page & component picks it up automatically.
// ---------------------------------------------------------------------------

export type IconName =
  | "package"
  | "truck"
  | "refresh"
  | "card"
  | "sparkles"
  | "message";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  updated: string;
  intro: string;
  steps?: string[];
  note?: string;
};

export type Category = {
  slug: string;
  title: string;
  navLabel: string;
  description: string;
  icon: IconName;
  articles: Article[];
};

export const siteInfo = {
  brandName: "Blurgvillage",
  supportName: "Blurgvillage Support",
  tagline: "We're here to help.",
  heroEyebrow: "BLURGVILLAGE · CUSTOMER SUPPORT",
  heroSubtitle:
    "Find answers, track orders, manage returns, and get in touch with our team.",
  searchPlaceholder: "Search (orders, refunds, shipping...)",
  introHeading: "Get the right help, right away.",
  introBody:
    "Our support centre covers everything from order tracking to product care. Browse by topic, search for answers, or connect directly with our team — we typically respond within a few hours.",
  responseTime: "Our team typically responds within a few hours.",
  phone: "+91 90610 64554",
  email: "support@blurgvillage.com",
  instagram: "https://instagram.com/blurgvillage",
  storeUrl: "https://blurgvillage.com",
  address: "Perinthalmanna, Malappuram, Kerala 679325, India",
};

export const quickLinks: { label: string; categorySlug: string; articleSlug?: string }[] = [
  { label: "Track my order", categorySlug: "orders", articleSlug: "how-do-i-track-my-order" },
  { label: "Modify or cancel", categorySlug: "orders", articleSlug: "how-can-i-modify-or-cancel-my-order" },
  { label: "Size guide", categorySlug: "product-care", articleSlug: "how-do-i-choose-the-right-size" },
  { label: "Damaged item?", categorySlug: "returns-refunds", articleSlug: "damaged-defective-or-wrong-item" },
  { label: "Payment methods", categorySlug: "payments", articleSlug: "what-payment-methods-do-you-accept" },
];

export const categories: Category[] = [
  {
    slug: "orders",
    title: "Orders",
    navLabel: "Orders",
    description: "Order changes, cancellations, and tracking.",
    icon: "package",
    articles: [
      {
        slug: "how-can-i-modify-or-cancel-my-order",
        title: "How can I modify or cancel my order?",
        excerpt: "What's possible before and after your order ships.",
        updated: "August 2026",
        intro: "Orders can only be modified, updated, or cancelled before they are processed for shipment.",
        steps: [
          "If you need to change your shipping address or order details, contact us immediately.",
          "Once your order has been dispatched, no changes or cancellations can be made.",
        ],
      },
      {
        slug: "how-do-i-track-my-order",
        title: "How do I track my order?",
        excerpt: "Where to find your tracking link and what to do if it stalls.",
        updated: "August 2026",
        intro: "Once your order is shipped, you'll receive a tracking link via Email or SMS.",
        steps: [
          "Tracking may take 24–48 hours to become active.",
          "If there's no update after 3 business days, or your order shows as delivered but you haven't received it, please contact our support team.",
        ],
      },
    ],
  },
  {
    slug: "shipping-delivery",
    title: "Shipping & Delivery",
    navLabel: "Shipping",
    description: "Delivery timelines, coverage, and tracking issues.",
    icon: "truck",
    articles: [
      {
        slug: "how-long-does-shipping-take",
        title: "How long does shipping take?",
        excerpt: "Typical delivery timelines and delivery coverage.",
        updated: "August 2026",
        intro: "Orders are processed on working days.",
        steps: [
          "Delivery usually takes up to 10 working days, depending on your location.",
          "Delays may occur during sales, holidays, or due to courier services.",
          "We deliver to most serviceable PIN codes across India.",
        ],
      },
      {
        slug: "where-do-you-ship-from",
        title: "Where do you ship from?",
        excerpt: "Our fulfilment centre location.",
        updated: "August 2026",
        intro:
          "All Blurgvillage orders are shipped from our fulfilment centre in Perinthalmanna, Malappuram, Kerala 679325, India.",
      },
      {
        slug: "package-shows-delivered-but-not-received",
        title: "My package shows \"delivered\" but I haven't received it",
        excerpt: "What to check before contacting support.",
        updated: "August 2026",
        intro: "Here's what to do if this happens.",
        steps: [
          "Please wait up to 24 hours, as courier systems occasionally update early.",
          "Check with family members, neighbours, or your building security.",
          "If you still can't locate your package, contact our support team at support@blurgvillage.com with your order ID and we'll investigate.",
        ],
      },
    ],
  },
  {
    slug: "returns-refunds",
    title: "Returns & Refunds",
    navLabel: "Returns",
    description: "What to do if your order arrives damaged, defective, or wrong.",
    icon: "refresh",
    articles: [
      {
        slug: "damaged-defective-or-wrong-item",
        title: "What if I receive a damaged, defective, or wrong item?",
        excerpt: "How to submit a claim, and what proof we need.",
        updated: "August 2026",
        intro: "We're sorry if that happened — here's how to get it resolved.",
        steps: [
          "Submit your request through our Return & Exchange portal at blurgvillage.com/apps/return_prime.",
          "An unboxing video is mandatory for all damage, defect, or wrong item claims — upload the required proof when submitting your request.",
          "Products must be unused, unwashed, and returned with original tags and packaging.",
          "All requests are subject to inspection and our Return & Exchange Policy.",
        ],
      },
    ],
  },
  {
    slug: "payments",
    title: "Payments",
    navLabel: "Payments",
    description: "Payment methods accepted.",
    icon: "card",
    articles: [
      {
        slug: "what-payment-methods-do-you-accept",
        title: "What payment methods do you accept?",
        excerpt: "Our current checkout payment options.",
        updated: "August 2026",
        intro: "We currently accept prepaid payments only.",
        note: "Cash on Delivery (COD) is not available.",
      },
    ],
  },
  {
    slug: "product-care",
    title: "Product Care",
    navLabel: "Product Care",
    description: "Sizing, product accuracy, and denim care.",
    icon: "sparkles",
    articles: [
      {
        slug: "how-do-i-choose-the-right-size",
        title: "How do I choose the right size?",
        excerpt: "How to use our size chart before you order.",
        updated: "August 2026",
        intro: "Check the size chart on each product page before placing your order.",
        steps: [
          "All measurements are provided in inches and taken manually, so slight variations may occur.",
          "We recommend using a measuring tape to compare your measurements before purchasing.",
        ],
        note: "We do not offer returns, refunds, or exchanges for incorrect size selection.",
      },
      {
        slug: "will-the-product-look-exactly-like-the-photos",
        title: "Will the product look exactly like the photos?",
        excerpt: "A note on colour accuracy in product photography.",
        updated: "August 2026",
        intro: "We strive to display every product as accurately as possible.",
        note: "Slight colour variations may occur due to lighting and screen settings.",
      },
      {
        slug: "how-should-i-wash-my-denims",
        title: "How should I wash my denims?",
        excerpt: "Care tips to keep your denim looking its best.",
        updated: "August 2026",
        intro: "A few care tips to keep your denim looking its best.",
        steps: [
          "Turn your denim inside-out before washing to help maintain the colour and finish.",
          "Wash with cold water using a mild detergent.",
          "Avoid using bleach or harsh chemicals as they may affect the fabric colour and quality.",
          "Air dry your denim naturally and avoid frequent machine drying to maintain the fit, texture, and longevity of the fabric.",
        ],
      },
      {
        slug: "when-will-sold-out-sizes-be-restocked",
        title: "When will sold-out sizes be restocked?",
        excerpt: "Our approach to limited quantities and restocks.",
        updated: "August 2026",
        intro: "Our products are available in limited quantities and we do not regularly restock sold-out items.",
        note: "We frequently launch new arrivals and fresh collections, so follow our Instagram page or subscribe to our YouTube and Pinterest to stay updated on new drops and latest releases.",
      },
    ],
  },
  {
    slug: "general",
    title: "General",
    navLabel: "General",
    description: "New collections, updates, and how to reach us.",
    icon: "message",
    articles: [
      {
        slug: "how-can-i-find-out-about-new-collections",
        title: "How can I find out about new collections?",
        excerpt: "Where we announce launches, restocks, and offers.",
        updated: "August 2026",
        intro: "Follow us on social media for the latest updates and collection launches.",
        steps: [
          "Follow @blurgvillage and @blurgunseen on Instagram for the latest updates, collections, and offers.",
          "Subscribe to our YouTube (youtube.com/@BLURGVILLAGE) and follow us on Pinterest (in.pinterest.com/blurgvillage) for exclusive launches, early access, and restock updates.",
        ],
      },
      {
        slug: "how-can-i-contact-blurgvillage",
        title: "How can I contact Blurgvillage?",
        excerpt: "The fastest way to reach our support team.",
        updated: "August 2026",
        intro: "For any assistance, contact us through our Contact page or email support@blurgvillage.com.",
        steps: ["Please include your Order ID for faster support."],
      },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getArticle(
  categorySlug: string,
  articleSlug: string
): { category: Category; article: Article } | undefined {
  const category = getCategory(categorySlug);
  const article = category?.articles.find((a) => a.slug === articleSlug);
  if (!category || !article) return undefined;
  return { category, article };
}

export const allArticlesFlat = categories.flatMap((category) =>
  category.articles.map((article) => ({ category, article }))
);
