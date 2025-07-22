"use client"

import { useTranslations, useMessages } from "next-intl"; // Import useMessages

// Define a type for your piercingPriceList structure for better type safety
// This is important because useMessages returns 'any' by default.
interface PiercingPriceListItem {
  name: string;
  price: string;
}

interface PiercingPriceListCategory {
  name: string;
  items: PiercingPriceListItem[];
}

interface PiercingPriceListContent {
  title: string;
  categories: PiercingPriceListCategory[];
  note?: string; // 'note' is optional based on your JSON (though not fully shown for note)
}

// Define an interface for the overall messages object structure
// This confirms 'piercingPriceList' is a top-level key in your JSON
interface AppMessages {
  piercingPriceList: PiercingPriceListContent;
  // Include other top-level keys from your messages.json if you plan to access them
  // directly via useMessages() elsewhere, though typically useTranslations is for strings.
  hero: any; // You can define a proper type for hero too if needed
  scrollPage: any;
  about: any;
  nav: any;
  contact: any;
  faq: any;
  impressum: any;
  datenschutz: any;
}


const PiercingPriceList = () => {
  // useTranslations() can still be used for other parts of the site
  // or if you ever needed to fetch a single string from a namespace
  const t = useTranslations();

  // Use useMessages to get the entire messages object loaded by NextIntlClientProvider
  const allMessages = useMessages() as AppMessages; // Cast to your defined type for safety

  // Directly access the 'piercingPriceList' object from the raw messages
  const priceList = allMessages.piercingPriceList;


  // Initial check for priceList and its categories
  // This helps prevent errors if the messages haven't loaded yet or are malformed,
  // especially during initial rendering or if data is missing.
  if (!priceList || !priceList.categories) {
    return <div className="text-center text-xl text-gray-500 py-10">Loading price list...</div>
  }


  return (
    <section className="container mx-auto px-4 py-8">
      {/* Access the title directly from the priceList object */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center font-bold mb-10">
          {priceList.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {priceList.categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="backdrop-blur-sm rounded-lg shadow-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex justify-between items-baseline text-lg">
                  <span className="flex-grow pr-4 font-medium">{item.name}</span>
                  <span className="flex-shrink-0 text-xl font-bold">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Check if priceList.note exists before rendering the paragraph */}
      {priceList.note && (
        <p className="text-center text-lg mt-12 px-4 py-3 bg-opacity-50 rounded-lg max-w-2xl mx-auto">
          {priceList.note}
        </p>
      )}
    </section>
  )
}

export default PiercingPriceList;