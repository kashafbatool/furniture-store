import React, { useState } from 'react';
import {
  Search,
  Heart,
  ShoppingCart,
  Plus,
  Phone,
  MessageSquare,
  Gavel,
  Tag,
  Clock,
  Store,
  Truck,
} from 'lucide-react';

const FurnitureApp = () => {
  const [language, setLanguage] = useState('en');
  const [activeTab, setActiveTab] = useState('all');
  const [activeSection, setActiveSection] = useState('browse');
  const [cart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  const translations = {
    en: {
      appName: 'ALVI AUCTIONEERS',
      home: 'Browse',
      favorites: 'Favorites',
      recentlyViewed: 'Recently Viewed',
      addListing: 'Add Listing',
      search: 'Search furniture...',
      all: 'All Items',
      sofa: 'Sofas',
      chair: 'Chairs',
      table: 'Tables',
      bed: 'Beds',
      storage: 'Storage',
      featured: 'Featured Items',
      auction: 'Auction',
      fixedPrice: 'Fixed Price',
      currentBid: 'Current Bid',
      price: 'Price',
      placeBid: 'Place Bid',
      buyNow: 'Buy Now',
      vendor: 'Vendor',
      endsIn: 'Ends in',
      listingTitle: 'Add New Listing',
      itemName: 'Item Name',
      category: 'Category',
      description: 'Description',
      listingType: 'Listing Type',
      startingBid: 'Starting Bid',
      vendorNumber: 'Vendor Contact',
      uploadImages: 'Upload Images',
      submit: 'Submit Listing',
      cancel: 'Cancel',
      noFavorites: 'No favorites yet',
      noFavoritesDesc: 'Items you favorite will appear here',
      noRecentlyViewed: 'No recently viewed items',
      noRecentlyViewedDesc: 'Items you view will appear here',
      deliveryOptions: 'Delivery Options',
      inStorePickup: 'In-Store Pickup',
      homeDelivery: 'Home Delivery',
      free: 'Free',
      contact: 'Contact',
    },
    ur: {
      appName: 'الوی نیلامی',
      home: 'براؤز کریں',
      favorites: 'پسندیدہ',
      recentlyViewed: 'حال ہی میں دیکھا',
      addListing: 'فہرست شامل کریں',
      search: 'فرنیچر تلاش کریں...',
      all: 'تمام اشیاء',
      sofa: 'صوفہ',
      chair: 'کرسیاں',
      table: 'میزیں',
      bed: 'بستر',
      storage: 'ذخیرہ',
      featured: 'نمایاں اشیاء',
      auction: 'نیلامی',
      fixedPrice: 'مقررہ قیمت',
      currentBid: 'موجودہ بولی',
      price: 'قیمت',
      placeBid: 'بولی لگائیں',
      buyNow: 'ابھی خریدیں',
      vendor: 'فروخت کنندہ',
      endsIn: 'ختم ہوگا',
      listingTitle: 'نئی فہرست شامل کریں',
      itemName: 'شے کا نام',
      category: 'قسم',
      description: 'تفصیل',
      listingType: 'فہرست کی قسم',
      startingBid: 'شروعاتی بولی',
      vendorNumber: 'فروخت کنندہ رابطہ',
      uploadImages: 'تصاویر اپ لوڈ کریں',
      submit: 'جمع کروائیں',
      cancel: 'منسوخ کریں',
      noFavorites: 'ابھی تک کوئی پسندیدہ نہیں',
      noFavoritesDesc: 'آپ کی پسندیدہ اشیاء یہاں ظاہر ہوں گی',
      noRecentlyViewed: 'حال ہی میں کوئی شے نہیں دیکھی',
      noRecentlyViewedDesc: 'آپ کی دیکھی گئی اشیاء یہاں ظاہر ہوں گی',
      deliveryOptions: 'ترسیل کے اختیارات',
      inStorePickup: 'دکان سے وصول کریں',
      homeDelivery: 'گھر پر ترسیل',
      free: 'مفت',
      contact: 'رابطہ کریں',
    },
  };

  const t = translations[language];

  const [furnitureItems] = useState([
    {
      id: 1,
      name: 'Modern Velvet Sofa',
      nameUr: 'جدید مخملی صوفہ',
      category: 'sofa',
      type: 'auction',
      currentBid: 45000,
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop',
      vendor: '+92 300 1234567',
      endsIn: '2d 5h',
      description: 'Luxurious velvet upholstery with solid wood frame',
      deliveryOptions: { pickup: true, delivery: true, deliveryFee: 2000 },
    },
    {
      id: 2,
      name: 'Dining Table Set',
      nameUr: 'کھانے کی میز سیٹ',
      category: 'table',
      type: 'fixed',
      price: 85000,
      image:
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&auto=format&fit=crop',
      vendor: '+92 321 9876543',
      description: '6-seater solid wood dining set with chairs',
      deliveryOptions: { pickup: true, delivery: true, deliveryFee: 0 },
    },
    {
      id: 3,
      name: 'Executive Office Chair',
      nameUr: 'ایگزیکٹو آفس چیئر',
      category: 'chair',
      type: 'fixed',
      price: 22000,
      image:
        'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&auto=format&fit=crop',
      vendor: '+92 333 5551234',
      description: 'Ergonomic leather office chair with lumbar support',
      deliveryOptions: { pickup: true, delivery: true, deliveryFee: 500 },
    },
    {
      id: 4,
      name: 'King Size Bed',
      nameUr: 'کنگ سائز بستر',
      category: 'bed',
      type: 'auction',
      currentBid: 95000,
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop',
      vendor: '+92 345 7778888',
      endsIn: '1d 12h',
      description: 'Premium wooden bed frame with headboard',
      deliveryOptions: { pickup: true, delivery: true, deliveryFee: 3000 },
    },
    {
      id: 5,
      name: 'Storage Cabinet',
      nameUr: 'اسٹوریج الماری',
      category: 'storage',
      type: 'fixed',
      price: 35000,
      image:
        'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&auto=format&fit=crop',
      vendor: '+92 300 4445566',
      description: 'Multi-purpose storage cabinet with shelves',
      deliveryOptions: { pickup: true, delivery: true, deliveryFee: 1500 },
    },
    {
      id: 6,
      name: 'Accent Chair',
      nameUr: 'ایکسنٹ چیئر',
      category: 'chair',
      type: 'auction',
      currentBid: 18000,
      image:
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop',
      vendor: '+92 311 2223334',
      endsIn: '3d 8h',
      description: 'Stylish accent chair perfect for living rooms',
      deliveryOptions: { pickup: true, delivery: true, deliveryFee: 500 },
    },
  ]);

  const categories = [
    { key: 'all', icon: '🏠' },
    { key: 'sofa', icon: '🛋️' },
    { key: 'chair', icon: '🪑' },
    { key: 'table', icon: '🍽️' },
    { key: 'bed', icon: '🛏️' },
    { key: 'storage', icon: '🗄️' },
  ];

  const filteredItems =
    activeTab === 'all'
      ? furnitureItems
      : furnitureItems.filter((item) => item.category === activeTab);
  const favoriteItems = furnitureItems.filter((item) => favorites.includes(item.id));
  const recentItems = furnitureItems.filter((item) => recentlyViewed.includes(item.id));

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const addToRecentlyViewed = (id) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((itemId) => itemId !== id);
      return [id, ...filtered].slice(0, 10);
    });
  };

  const FurnitureCard = ({ item }) => (
    <div
      onClick={() => addToRecentlyViewed(item.id)}
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
            toggleFavorite(item.id);
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

  const EmptyState = ({ icon: Icon, title, description }) => (
    <div className="py-20 text-center">
      <Icon className="mx-auto mb-4 h-20 w-20 text-gray-300" />
      <h3 className="mb-2 text-xl font-semibold text-gray-600">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{
        fontFamily:
          language === 'ur'
            ? 'Noto Nastaliq Urdu, serif'
            : 'system-ui, -apple-system, sans-serif',
      }}
      dir={language === 'ur' ? 'rtl' : 'ltr'}
    >
      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold tracking-wider">{t.appName}</h1>
              <nav className="hidden gap-6 md:flex">
                <button
                  onClick={() => setActiveSection('browse')}
                  className={`transition ${
                    activeSection === 'browse'
                      ? 'font-semibold text-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {t.home}
                </button>
                <button
                  onClick={() => setActiveSection('favorites')}
                  className={`flex items-center gap-2 transition ${
                    activeSection === 'favorites'
                      ? 'font-semibold text-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  <Heart className="h-4 w-4" />
                  {t.favorites}
                  {favorites.length > 0 && (
                    <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">
                      {favorites.length}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setActiveSection('recentlyViewed')}
                  className={`flex items-center gap-2 transition ${
                    activeSection === 'recentlyViewed'
                      ? 'font-semibold text-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  <Clock className="h-4 w-4" />
                  {t.recentlyViewed}
                </button>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium transition hover:bg-gray-200"
              >
                {language === 'en' ? 'اردو' : 'English'}
              </button>
              <button className="relative rounded-lg p-2 transition hover:bg-gray-100">
                <ShoppingCart className="h-6 w-6" />
                {cart.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="relative mt-4">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <input
              type="text"
              placeholder={t.search}
              className="w-full rounded-lg bg-gray-50 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </header>

      <div className="border-t bg-white md:hidden">
        <div className="flex justify-around py-2">
          <button
            onClick={() => setActiveSection('browse')}
            className={`flex flex-col items-center gap-1 px-4 py-2 ${
              activeSection === 'browse' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <Search className="h-5 w-5" />
            <span className="text-xs">{t.home}</span>
          </button>
          <button
            onClick={() => setActiveSection('favorites')}
            className={`relative flex flex-col items-center gap-1 px-4 py-2 ${
              activeSection === 'favorites' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <Heart className="h-5 w-5" />
            <span className="text-xs">{t.favorites}</span>
            {favorites.length > 0 && (
              <span className="absolute right-2 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {favorites.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveSection('recentlyViewed')}
            className={`flex flex-col items-center gap-1 px-4 py-2 ${
              activeSection === 'recentlyViewed' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <Clock className="h-5 w-5" />
            <span className="text-xs">{t.recentlyViewed}</span>
          </button>
        </div>
      </div>

      {activeSection === 'browse' && (
        <div className="mx-auto max-w-7xl px-4 py-6">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-medium text-white shadow-lg transition hover:from-blue-700 hover:to-blue-800 md:w-auto">
            <Plus className="h-5 w-5" />
            {t.addListing}
          </button>
        </div>
      )}

      {activeSection === 'browse' && (
        <div className="mx-auto max-w-7xl px-4 pb-6">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-6 py-3 transition ${
                  activeTab === cat.key
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-white text-gray-700 shadow hover:bg-gray-100'
                }`}
              >
                <span className="text-xl">{cat.icon}</span>
                <span className="font-medium">{t[cat.key]}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 pb-12">
        {activeSection === 'browse' && (
          <>
            <h2 className="mb-6 text-2xl font-bold">{t.featured}</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <FurnitureCard key={item.id} item={item} />
              ))}
            </div>
          </>
        )}
        {activeSection === 'favorites' && (
          <>
            <h2 className="mb-6 text-2xl font-bold">{t.favorites}</h2>
            {favoriteItems.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {favoriteItems.map((item) => (
                  <FurnitureCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <EmptyState icon={Heart} title={t.noFavorites} description={t.noFavoritesDesc} />
            )}
          </>
        )}
        {activeSection === 'recentlyViewed' && (
          <>
            <h2 className="mb-6 text-2xl font-bold">{t.recentlyViewed}</h2>
            {recentItems.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {recentItems.map((item) => (
                  <FurnitureCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <EmptyState
                icon={Clock}
                title={t.noRecentlyViewed}
                description={t.noRecentlyViewedDesc}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FurnitureApp;
