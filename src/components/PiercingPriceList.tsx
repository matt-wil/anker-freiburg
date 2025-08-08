"use client"

import { useMessages } from "next-intl";

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
  note?: string; 
}

type PiercingPriceListMessages = {
  piercingPriceList: PiercingPriceListContent;
};


const PiercingPriceList = () => {
  const allMessages = useMessages() as PiercingPriceListMessages;
  const priceList = allMessages.piercingPriceList;

  if (!priceList || !priceList.categories) {
    return <div className="text-center text-xl text-gray-500 py-10">Loading price list...</div>
  }

  return (
    <section className="container mx-auto px-4 py-8">
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
      {priceList.note && (
        <p className="text-center text-lg mt-12 px-4 py-3 bg-opacity-50 rounded-lg max-w-2xl mx-auto">
          {priceList.note}
        </p>
      )}
    </section>
  )
}

export default PiercingPriceList;