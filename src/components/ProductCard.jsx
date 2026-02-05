import React from 'react';
import { Heart, Gavel, Tag, Store, Truck, Phone, MessageSquare } from 'lucide-react';

const ProductCard = ({ item, language, t, favorites, onToggleFavorite, onViewDetails }) => (
  <div
    onClick={() => onViewDetails(item)}
    className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
  >
    <div className="relative overflow-hidden">
      <img
        src={item.image}
        alt={language === 'en' ? item.name : item.nameUr}
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <button
        onClick={(event) => {
          event.stopPropagation();
          onToggleFavorite(item.id);
        }}
        className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-lg transition hover:bg-gray-100"
      >
        <Heart
          className={`h-5 w-5 ${
            favorites.includes(item.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
          }`}
        />
      </button>
      {item.type === 'auction' && (
        <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white">
          <Gavel className="h-4 w-4" />
          {t.auction}
        </div>
      )}
      {item.type === 'fixed' && (
        <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-green-500 px-3 py-1 text-sm font-medium text-white">
          <Tag className="h-4 w-4" />
          {t.fixedPrice}
        </div>
      )}
    </div>
    <div className="p-5">
      <h3 className="mb-2 text-lg font-semibold">
        {language === 'en' ? item.name : item.nameUr}
      </h3>
      <p className="mb-4 line-clamp-2 text-sm text-gray-600">{item.description}</p>
      <div className="mb-4 flex items-center justify-between">
        <div>
          {item.type === 'auction' ? (
            <>
              <p className="text-xs text-gray-500">{t.currentBid}</p>
              <p className="text-2xl font-bold text-orange-600">
                PKR {item.currentBid.toLocaleString()}
              </p>
            </>
          ) : (
            <>
              <p className="text-xs text-gray-500">{t.price}</p>
              <p className="text-2xl font-bold text-green-600">
                PKR {item.price.toLocaleString()}
              </p>
            </>
          )}
        </div>
        {item.endsIn && (
          <div className="text-right">
            <p className="text-xs text-gray-500">{t.endsIn}</p>
            <p className="text-sm font-semibold text-red-600">{item.endsIn}</p>
          </div>
        )}
      </div>
      <div className="mb-4 flex gap-2 text-xs">
        {item.deliveryOptions?.pickup && (
          <div className="flex items-center gap-1 rounded bg-blue-50 px-2 py-1 text-blue-700">
            <Store className="h-3 w-3" />
            <span>{t.inStorePickup}</span>
          </div>
        )}
        {item.deliveryOptions?.delivery && (
          <div className="flex items-center gap-1 rounded bg-green-50 px-2 py-1 text-green-700">
            <Truck className="h-3 w-3" />
            <span>
              {t.homeDelivery}{' '}
              {item.deliveryOptions.deliveryFee === 0
                ? `(${t.free})`
                : `(PKR ${item.deliveryOptions.deliveryFee})`}
            </span>
          </div>
        )}
      </div>
      <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
        <Phone className="h-4 w-4" />
        <span>{item.vendor}</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {item.type === 'auction' ? (
          <button className="rounded-lg bg-orange-600 px-4 py-2 font-medium text-white transition hover:bg-orange-700">
            {t.placeBid}
          </button>
        ) : (
          <button className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white transition hover:bg-green-700">
            {t.buyNow}
          </button>
        )}
        <button className="flex items-center justify-center gap-1 rounded-lg border-2 border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50">
          <MessageSquare className="h-4 w-4" />
          <span className="hidden text-sm lg:inline">{t.contact}</span>
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;
