"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type ListingStatus = "active" | "sold";

interface Listing {
  address: string;
  neighborhood: string;
  price: string;
  beds: number;
  baths: string;
  sqft: string;
  status: ListingStatus;
  image: string;
}

const listings: Listing[] = [
  {
    address: "174 W 76th Street, Apt 8H",
    neighborhood: "Upper West Side, Manhattan",
    price: "$2,495,000",
    beds: 3,
    baths: "2",
    sqft: "1,450",
    status: "active",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
  },
  {
    address: "3 Sheridan Square, Apt 3FE",
    neighborhood: "West Village, Manhattan",
    price: "$3,750,000",
    beds: 4,
    baths: "3",
    sqft: "2,100",
    status: "active",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
  },
  {
    address: "67 Riverside Drive, Apt 9B",
    neighborhood: "Upper West Side, Manhattan",
    price: "$1,895,000",
    beds: 2,
    baths: "2",
    sqft: "1,200",
    status: "active",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
  },
  {
    address: "490 W End Avenue, Apt 1C",
    neighborhood: "Upper West Side, Manhattan",
    price: "$4,200,000",
    beds: 4,
    baths: "3.5",
    sqft: "2,800",
    status: "sold",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
  },
  {
    address: "499 9th Avenue, Apt 10BN",
    neighborhood: "Hell's Kitchen, Manhattan",
    price: "$1,350,000",
    beds: 2,
    baths: "2",
    sqft: "1,050",
    status: "sold",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
  },
  {
    address: "145 Hudson Street, PH-A",
    neighborhood: "Tribeca, Manhattan",
    price: "$5,100,000",
    beds: 3,
    baths: "3",
    sqft: "2,500",
    status: "sold",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  },
];

const filters: { label: string; value: "all" | ListingStatus }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Recently Sold", value: "sold" },
];

export default function Listings() {
  const [filter, setFilter] = useState<"all" | ListingStatus>("all");

  const filtered =
    filter === "all" ? listings : listings.filter((l) => l.status === filter);

  return (
    <section id="listings" className="py-20 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4 text-center">
          Featured Properties
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-8 text-center">
          Curated Manhattan Homes
        </h2>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-2.5 border text-xs font-medium tracking-[0.1em] uppercase transition-all duration-300 ${
                filter === f.value
                  ? "bg-navy border-navy text-white"
                  : "border-gray-300 text-gray-500 hover:border-navy hover:text-navy"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((listing) => (
              <motion.div
                key={listing.address}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer bg-white hover:shadow-xl transition-shadow duration-400"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src={listing.image}
                    alt={listing.address}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                  <span
                    className={`absolute top-4 left-4 px-4 py-1.5 text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-white ${
                      listing.status === "active" ? "bg-gold" : "bg-navy"
                    }`}
                  >
                    {listing.status === "active" ? "Active" : "Sold"}
                  </span>
                </div>
                <div className="p-6">
                  <p className="font-serif text-xl font-semibold text-navy mb-1">
                    {listing.price}
                  </p>
                  <h3 className="text-[0.9rem] font-medium text-gray-800 mb-1">
                    {listing.address}
                  </h3>
                  <p className="text-xs text-gray-400 tracking-wider mb-4">
                    {listing.neighborhood}
                  </p>
                  <div className="flex gap-6 pt-4 border-t border-warm-gray">
                    <span className="text-xs font-medium text-gray-500">
                      {listing.beds} Bed
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                      {listing.baths} Bath
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                      {listing.sqft} SF
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.corcoran.com/real-estate-agents/detail/agent/alexandra-carter/22639"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-navy text-navy text-xs font-semibold tracking-[0.15em] uppercase hover:bg-navy hover:text-white transition-all duration-400"
          >
            View All Properties on Corcoran
          </a>
        </div>
      </div>
    </section>
  );
}
