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
  logo: "/brand-assets/BLURGVILLAGE_LOGO_f5b5e1be-b25f-4efc-bc4b-877bd09d2808.avif",
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
  phone: "+91 70124 42109",
  whatsapp: "+91 70124 42109",
  email: "support@blurgvillage.com",
  instagram: "https://instagram.com/blurgvillage",
  storeUrl: "https://blurgvillage.com",
  address: "Perinthalmanna, Malappuram, Kerala 679325, India",
  // Full postal address, one line per entry. The landmark is shown in brackets.
  addressLines: [
    "BLURGVILLAGE",
    "265/F MT Complex,",
    "Pattikkad Kamanam,",
    "Perinthalmanna, Malappuram,",
    "Kerala 679325, India",
  ],
  addressLandmark: "Nenmini – Kamanam Road, 1st floor",
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
        updated: "November 2026",
        intro: "Orders can only be modified, updated, or cancelled before they are dispatched.",
        steps: [
          "Cancellations are handled only through the Return & Exchange portal on our website (blurgvillage.com/apps/return_prime).",
          "If you need to change your shipping address or order details, contact us immediately.",
          "Once your order has been dispatched, no changes or cancellations can be made.",
        ],
      },
      {
        slug: "why-hasnt-my-order-shipped-yet",
        title: "Why hasn't my order shipped yet?",
        excerpt: "How order processing works on working days.",
        updated: "November 2026",
        intro: "Orders are processed only on working days.",
        steps: [
          "Orders placed on Sundays or public holidays are processed on the next working day.",
          "Once your order is dispatched, you'll receive tracking details.",
        ],
      },
      {
        slug: "how-do-i-track-my-order",
        title: "How do I track my order?",
        excerpt: "Where to find your tracking link and what to do if it stalls.",
        updated: "November 2026",
        intro: "Once your order is dispatched, you'll receive tracking details via Email or SMS.",
        steps: [
          "You can also use the \"Track your order\" link on our website to check your order status.",
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
        updated: "November 2026",
        intro: "Orders are delivered within 3–7 working days of placing the order.",
        steps: [
          "Sundays and public holidays are not counted as working days.",
          "Delays may occur during sales, holidays, or due to courier services.",
          "We deliver to most serviceable PIN codes across India.",
        ],
      },
      {
        slug: "is-shipping-free",
        title: "Is shipping really free?",
        excerpt: "Our shipping charges across India.",
        updated: "November 2026",
        intro: "Yes. We offer free shipping on every order, all over India.",
        note: "We never charge for shipping.",
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
    description: "Return windows, unboxing videos, handling charges, and wrong or damaged items.",
    icon: "refresh",
    articles: [
      {
        slug: "how-long-do-i-have-to-return",
        title: "How long do I have to return something?",
        excerpt: "Our return and exchange window.",
        updated: "November 2026",
        intro: "You can request a return or exchange within 7 days after your product is delivered.",
        steps: [
          "An unboxing video is mandatory for every return or exchange request.",
          "Items bought during sales or offers are final sale and can't be returned.",
        ],
      },
      {
        slug: "how-do-i-start-a-return",
        title: "How do I start a return or cancel an order?",
        excerpt: "Using our Return & Exchange portal.",
        updated: "November 2026",
        intro: "Returns, exchanges, and cancellations are handled only through the Return & Exchange portal on our website.",
        steps: [
          "Go to blurgvillage.com/apps/return_prime and submit your request.",
          "Orders can be cancelled only before they are dispatched.",
        ],
      },
      {
        slug: "do-i-need-an-unboxing-video",
        title: "Do I really need an unboxing video?",
        excerpt: "What the video must show, and why it's required.",
        updated: "November 2026",
        intro: "Yes. An unboxing video is mandatory for every return or exchange claim.",
        steps: [
          "The video must be continuous, from the sealed package through to the product's condition.",
          "Claims without an unboxing video may be rejected or charged a handling fee.",
        ],
      },
      {
        slug: "what-is-the-handling-charge",
        title: "What's the handling charge?",
        excerpt: "The processing fee on returns and exchanges.",
        updated: "November 2026",
        intro: "A processing fee of ₹200 applies to every return or exchange. It covers shipping costs and other charges.",
        note: "The handling charge does not apply to damaged or faded products.",
      },
      {
        slug: "damaged-defective-or-wrong-item",
        title: "What if I receive a damaged, defective, or wrong item?",
        excerpt: "How to submit a claim, and what proof we need.",
        updated: "November 2026",
        intro: "We're sorry if that happened — here's how to get it resolved.",
        steps: [
          "Make sure you have your unboxing video, recorded continuously from the sealed package to the product.",
          "Submit your request through our Return & Exchange portal at blurgvillage.com/apps/return_prime within 7 days of delivery.",
          "Or email us at support@blurgvillage.com with your order number, photos of the label, and the unboxing video.",
          "Products must be unused, unwashed, and returned with original tags and packaging.",
          "All requests are subject to inspection and our Return & Exchange Policy. We'll review your request and get back to you as soon as possible.",
        ],
        note: "Without the unboxing video, a request may be rejected. Every return or exchange incurs a ₹200 handling charge, except for damaged or faded products. Items bought during sales or offers are final sale.",
      },
      {
        slug: "received-product-with-another-brands-label",
        title: "Why did my order come with another brand's label?",
        excerpt: "Why some products don't carry Blurgvillage branding.",
        updated: "November 2026",
        intro:
          "Not every item we sell carries Blurgvillage branding. Some products, such as those in Blurg Selects, are sourced from other brands, and their original labels and tags stay on them.",
        steps: [
          "The brand details are shown in each product's images and description, so please check the product page for your item.",
          "If you think you received the wrong item, see \"What if I receive a damaged, defective, or wrong item?\" for how to raise a request.",
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
        updated: "November 2026",
        intro: "Check the size chart on each product page before placing your order.",
        steps: [
          "All measurements are provided in inches and taken by hand to verify the fit and keep them accurate, so slight variations may occur.",
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
        updated: "November 2026",
        intro: "Our products are released in limited quantities, and we do not restock items once they sell out.",
        note: "We frequently launch new arrivals and fresh collections, so follow our Instagram page or subscribe to our YouTube and Pinterest to stay updated on new drops and latest releases.",
      },
    ],
  },
  {
    slug: "general",
    title: "General",
    navLabel: "General",
    description: "Our collections, new drops, and how to reach us.",
    icon: "message",
    articles: [
      {
        slug: "what-is-blurg-originals",
        title: "What is Blurg Originals?",
        excerpt: "Our in-house, drop-based collection.",
        updated: "November 2026",
        intro:
          "Blurg Originals is the main Blurgvillage collection. It's released in drops: limited releases that arrive in waves rather than a permanent catalogue.",
        steps: [
          "Our collections feature relaxed, wearable streetwear in a muted, earthy palette, including denim, cropped tees, pleated trousers, and more.",
          "Drops are limited, and sold-out items are not restocked.",
          "Please check the measurements on each product page before ordering.",
        ],
      },
      {
        slug: "what-is-blurg-selects",
        title: "What is Blurg Selects?",
        excerpt: "Our curated collection of pieces from other labels.",
        updated: "November 2026",
        intro:
          "Blurg Selects is our curated collection: handpicked pieces from other labels that fit the Blurgvillage style.",
        steps: [
          "Selects items are sourced products, so many carry another brand's original label and tags rather than Blurgvillage branding.",
          "The brand details are shown in each product's images and description.",
          "The same shopping terms apply as for Blurg Originals: free shipping, the same delivery times, a 7-day return window, a mandatory unboxing video, and no returns on offer sale items.",
        ],
      },
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
        updated: "November 2026",
        intro: "Email us at support@blurgvillage.com or message us on WhatsApp at +91 70124 42109.",
        steps: [
          "Please include your Order ID for faster support.",
          "For returns, exchanges, or wrong/damaged items, attach your unboxing video (mandatory) and photos of the product and label.",
        ],
        note: "(Please avoid Instagram DMs and Facebook Messenger for support requests. Our team actively checks emails.)",
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

// Articles shown first in the home-page FAQ list, in this order.
const pinnedArticleSlugs = ["what-is-blurg-originals", "what-is-blurg-selects"];

const pinRank = (slug: string) => {
  const i = pinnedArticleSlugs.indexOf(slug);
  return i === -1 ? pinnedArticleSlugs.length : i;
};

export const allArticlesFlat = categories
  .flatMap((category) => category.articles.map((article) => ({ category, article })))
  .sort((a, b) => pinRank(a.article.slug) - pinRank(b.article.slug));
