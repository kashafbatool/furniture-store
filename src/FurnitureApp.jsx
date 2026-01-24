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
  X,
} from 'lucide-react';

const FurnitureApp = () => {
  const [language, setLanguage] = useState('en');
  const [activeTab, setActiveTab] = useState('all');
  const [activeSection, setActiveSection] = useState('browse');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 150000,
    material: 'all',
    style: 'all',
    color: 'all',
    room: 'all',
    subcategory: 'all',
    inStockOnly: false,
  });

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
      featuredCollections: 'Featured Collections',
      seasonalSale: 'Seasonal Sale',
      shopSale: 'Shop the Sale',
      newArrivals: 'New Arrivals',
      recommendations: 'Recommended for You',
      lookbook: 'Inspiration Lookbook',
      shopTheLook: 'Shop the Look',
      filters: 'Filters',
      priceRange: 'Price Range',
      material: 'Material',
      style: 'Style',
      color: 'Color',
      inStockOnly: 'In stock only',
      categoriesMenu: 'Categories Menu',
      room: 'Room',
      subcategory: 'Subcategory',
      dimensions: 'Dimensions',
      viewDetails: 'View Details',
      addToCart: 'Add to Cart',
      scheduleVisit: 'Schedule Showroom Visit',
      nextSteps: 'Next Steps',
      cartTitle: 'Your Cart',
      cartEmpty: 'Your cart is empty',
      cartEmptyDesc: 'Add items to your cart to review them here.',
      remove: 'Remove',
      cartTotal: 'Cart Total',
      checkout: 'Proceed to Checkout',
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
      featuredCollections: 'نمایاں مجموعے',
      seasonalSale: 'موسمی سیل',
      shopSale: 'سیل دیکھیں',
      newArrivals: 'نئی آمد',
      recommendations: 'آپ کے لیے تجویز کردہ',
      lookbook: 'انسپائریشن لک بُک',
      shopTheLook: 'یہ انداز خریدیں',
      filters: 'فلٹرز',
      priceRange: 'قیمت کی حد',
      material: 'مواد',
      style: 'انداز',
      color: 'رنگ',
      inStockOnly: 'صرف دستیاب اشیاء',
      categoriesMenu: 'زمرہ جات',
      room: 'کمرہ',
      subcategory: 'ذیلی زمرہ',
      dimensions: 'سائز',
      viewDetails: 'تفصیلات دیکھیں',
      addToCart: 'کارٹ میں شامل کریں',
      scheduleVisit: 'شو روم وزٹ شیڈول کریں',
      nextSteps: 'اگلے مراحل',
      cartTitle: 'آپ کا کارٹ',
      cartEmpty: 'آپ کا کارٹ خالی ہے',
      cartEmptyDesc: 'آئٹمز کو کارٹ میں شامل کریں تاکہ یہاں دیکھ سکیں۔',
      remove: 'ہٹائیں',
      cartTotal: 'کارٹ ٹوٹل',
      checkout: 'چیک آؤٹ کریں',
    },
  };

  const t = translations[language];

  const [furnitureItems] = useState([
    {
      id: 1,
      name: 'Modern Velvet Sofa',
      nameUr: 'جدید مخملی صوفہ',
      category: 'sofa',
      subcategory: 'sectionals',
      room: 'living',
      type: 'auction',
      currentBid: 45000,
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop',
      vendor: '+92 300 1234567',
      endsIn: '2d 5h',
      description: 'Luxurious velvet upholstery with solid wood frame',
      dimensions: '90\" W x 38\" D x 34\" H',
      material: 'Velvet',
      style: 'Modern',
      color: 'Navy',
      inStock: true,
      isNew: true,
      deliveryOptions: { pickup: true, delivery: true, deliveryFee: 2000 },
    },
    {
      id: 2,
      name: 'Dining Table Set',
      nameUr: 'کھانے کی میز سیٹ',
      category: 'table',
      subcategory: 'dining',
      room: 'dining',
      type: 'fixed',
      price: 85000,
      image:
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&auto=format&fit=crop',
      vendor: '+92 321 9876543',
      description: '6-seater solid wood dining set with chairs',
      dimensions: '72\" W x 40\" D x 30\" H',
      material: 'Oak',
      style: 'Contemporary',
      color: 'Walnut',
      inStock: true,
      deliveryOptions: { pickup: true, delivery: true, deliveryFee: 0 },
    },
    {
      id: 3,
      name: 'Executive Office Chair',
      nameUr: 'ایگزیکٹو آفس چیئر',
      category: 'chair',
      subcategory: 'office',
      room: 'office',
      type: 'fixed',
      price: 22000,
      image:
        'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&auto=format&fit=crop',
      vendor: '+92 333 5551234',
      description: 'Ergonomic leather office chair with lumbar support',
      dimensions: '28\" W x 28\" D x 48\" H',
      material: 'Leather',
      style: 'Executive',
      color: 'Black',
      inStock: false,
      deliveryOptions: { pickup: true, delivery: true, deliveryFee: 500 },
    },
    {
      id: 4,
      name: 'King Size Bed',
      nameUr: 'کنگ سائز بستر',
      category: 'bed',
      subcategory: 'bed-frames',
      room: 'bedroom',
      type: 'auction',
      currentBid: 95000,
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop',
      vendor: '+92 345 7778888',
      endsIn: '1d 12h',
      description: 'Premium wooden bed frame with headboard',
      dimensions: '78\" W x 86\" D x 52\" H',
      material: 'Teak',
      style: 'Classic',
      color: 'Honey',
      inStock: true,
      deliveryOptions: { pickup: true, delivery: true, deliveryFee: 3000 },
    },
    {
      id: 5,
      name: 'Storage Cabinet',
      nameUr: 'اسٹوریج الماری',
      category: 'storage',
      subcategory: 'cabinets',
      room: 'living',
      type: 'fixed',
      price: 35000,
      image:
        'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&auto=format&fit=crop',
      vendor: '+92 300 4445566',
      description: 'Multi-purpose storage cabinet with shelves',
      dimensions: '60\" W x 18\" D x 72\" H',
      material: 'Engineered Wood',
      style: 'Minimal',
      color: 'White',
      inStock: true,
      deliveryOptions: { pickup: true, delivery: true, deliveryFee: 1500 },
    },
    {
      id: 6,
      name: 'Accent Chair',
      nameUr: 'ایکسنٹ چیئر',
      category: 'chair',
      subcategory: 'accent',
      room: 'living',
      type: 'auction',
      currentBid: 18000,
      image:
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop',
      vendor: '+92 311 2223334',
      endsIn: '3d 8h',
      description: 'Stylish accent chair perfect for living rooms',
      dimensions: '30\" W x 32\" D x 36\" H',
      material: 'Bouclé',
      style: 'Scandinavian',
      color: 'Cream',
      inStock: true,
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

  const categoryHierarchy = [
    {
      key: 'living',
      title: { en: 'Living Room', ur: 'لونگ روم' },
      groups: [
        { label: { en: 'Sofas', ur: 'صوفے' }, items: ['sectionals', 'loveseats'] },
        { label: { en: 'Chairs', ur: 'کرسیاں' }, items: ['accent', 'recliners'] },
        { label: { en: 'Storage', ur: 'ذخیرہ' }, items: ['cabinets', 'media units'] },
      ],
    },
    {
      key: 'dining',
      title: { en: 'Dining Room', ur: 'ڈائننگ روم' },
      groups: [
        { label: { en: 'Tables', ur: 'میزیں' }, items: ['dining', 'extendable'] },
        { label: { en: 'Seating', ur: 'بیٹھنے کی جگہ' }, items: ['side chairs'] },
      ],
    },
    {
      key: 'bedroom',
      title: { en: 'Bedroom', ur: 'بیڈ روم' },
      groups: [
        { label: { en: 'Beds', ur: 'بستر' }, items: ['bed-frames', 'storage beds'] },
        { label: { en: 'Dressers', ur: 'ڈریسرز' }, items: ['dressers', 'nightstands'] },
      ],
    },
    {
      key: 'office',
      title: { en: 'Home Office', ur: 'ہوم آفس' },
      groups: [
        { label: { en: 'Chairs', ur: 'کرسیاں' }, items: ['office', 'ergonomic'] },
        { label: { en: 'Desks', ur: 'ڈیسک' }, items: ['writing desks', 'standing desks'] },
      ],
    },
  ];

  const lookbookScenes = [
    {
      id: 'urban-lounge',
      title: { en: 'Urban Lounge', ur: 'اربن لاؤنج' },
      description: {
        en: 'Layer modern textures with deep colors for a cozy statement.',
        ur: 'گہرے رنگوں کے ساتھ جدید ساختیں ملا کر آرام دہ انداز بنائیں۔',
      },
      image:
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&auto=format&fit=crop',
      itemIds: [1, 6, 5],
    },
    {
      id: 'warm-dining',
      title: { en: 'Warm Dining', ur: 'گرم ڈائننگ' },
      description: {
        en: 'Natural wood and soft lighting for gatherings.',
        ur: 'قدرتی لکڑی اور نرم روشنی کے ساتھ اجتماع کے لیے بہترین۔',
      },
      image:
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&auto=format&fit=crop',
      itemIds: [2],
    },
  ];

  const roomOptions = categoryHierarchy.map((category) => ({
    value: category.key,
    label: language === 'en' ? category.title.en : category.title.ur,
  }));
  const subcategoryOptions = categoryHierarchy.flatMap((category) =>
    category.groups.flatMap((group) => group.items)
  );

  const filterOptions = {
    materials: [...new Set(furnitureItems.map((item) => item.material))],
    styles: [...new Set(furnitureItems.map((item) => item.style))],
    colors: [...new Set(furnitureItems.map((item) => item.color))],
  };

  const filteredItems = furnitureItems.filter((item) => {
    const price = item.type === 'auction' ? item.currentBid : item.price;
    const matchesTab = activeTab === 'all' || item.category === activeTab;
    const matchesSearch =
      searchQuery.trim().length === 0 ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = price >= filters.minPrice && price <= filters.maxPrice;
    const matchesMaterial = filters.material === 'all' || filters.material === item.material;
    const matchesStyle = filters.style === 'all' || filters.style === item.style;
    const matchesColor = filters.color === 'all' || filters.color === item.color;
    const matchesRoom = filters.room === 'all' || filters.room === item.room;
    const matchesSubcategory =
      filters.subcategory === 'all' || filters.subcategory === item.subcategory;
    const matchesStock = !filters.inStockOnly || item.inStock;

    return (
      matchesTab &&
      matchesSearch &&
      matchesPrice &&
      matchesMaterial &&
      matchesStyle &&
      matchesColor &&
      matchesRoom &&
      matchesSubcategory &&
      matchesStock
    );
  });
  const favoriteItems = furnitureItems.filter((item) => favorites.includes(item.id));
  const recentItems = furnitureItems.filter((item) => recentlyViewed.includes(item.id));
  const newArrivals = furnitureItems.filter((item) => item.isNew);
  const recommendedItems =
    recentlyViewed.length > 0
      ? furnitureItems.filter((item) =>
          recentlyViewed.some((id) => {
            const viewed = furnitureItems.find((viewedItem) => viewedItem.id === id);
            return viewed && viewed.category === item.category;
          })
        )
      : furnitureItems.slice(0, 3);

  const featuredCollections = [
    {
      id: 'living-collection',
      title: { en: 'Living Room Luxe', ur: 'لونگ روم لگژری' },
      description: { en: 'Layered seating and warm woods.', ur: 'ملٹی سیٹنگ اور گرم لکڑی۔' },
      image:
        'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1200&auto=format&fit=crop',
    },
    {
      id: 'sleep-collection',
      title: { en: 'Sleep Sanctuary', ur: 'پرسکون نیند' },
      description: { en: 'Soft textures for restful nights.', ur: 'پرسکون راتوں کے لیے نرم انداز۔' },
      image:
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&auto=format&fit=crop',
    },
    {
      id: 'work-collection',
      title: { en: 'Office Essentials', ur: 'آفس ضروریات' },
      description: { en: 'Ergonomic comfort for focus.', ur: 'توجہ کے لیے آرام دہ سپورٹ۔' },
      image:
        'https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1200&auto=format&fit=crop',
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (itemId) => {
    setCart((prev) => (prev.includes(itemId) ? prev : [...prev, itemId]));
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prev) => prev.filter((id) => id !== itemId));
  };

  const cartItems = cart
    .map((id) => furnitureItems.find((item) => item.id === id))
    .filter(Boolean);
  const cartTotal = cartItems.reduce((total, item) => {
    const price = item.type === 'auction' ? item.currentBid : item.price;
    return total + price;
  }, 0);

  const addToRecentlyViewed = (id) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((itemId) => itemId !== id);
      return [id, ...filtered].slice(0, 10);
    });
  };

  const FurnitureCard = ({ item }) => (
    <div
      onClick={() => {
        addToRecentlyViewed(item.id);
        setSelectedItem(item);
      }}
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
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative rounded-lg p-2 transition hover:bg-gray-100"
              >
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
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
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
          <div className="grid gap-6 lg:grid-cols-[1.3fr,0.7fr]">
            <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-8 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-200">{t.seasonalSale}</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                {language === 'en'
                  ? 'Refresh your home with curated auction finds.'
                  : 'اپنے گھر کو منتخب نیلامی اشیاء سے تازہ بنائیں۔'}
              </h2>
              <p className="mt-3 max-w-xl text-blue-100">
                {language === 'en'
                  ? 'Discover premium pieces, limited-time deals, and new arrivals tailored to your taste.'
                  : 'پریمیم اشیاء، محدود وقت کی ڈیلز، اور آپ کی پسند کے مطابق نئی آمد دیکھیں۔'}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow hover:bg-blue-50">
                  {t.shopSale}
                </button>
                <button className="flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white/90 hover:border-white hover:text-white">
                  <Plus className="h-4 w-4" />
                  {t.addListing}
                </button>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{t.newArrivals}</h3>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                  {newArrivals.length} {language === 'en' ? 'items' : 'اشیاء'}
                </span>
              </div>
              <div className="mt-4 space-y-4">
                {newArrivals.slice(0, 3).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      addToRecentlyViewed(item.id);
                      setSelectedItem(item);
                    }}
                    className="flex w-full items-center gap-4 rounded-xl border border-gray-100 p-3 text-left transition hover:border-blue-200 hover:bg-blue-50/40"
                  >
                    <img
                      src={item.image}
                      alt={language === 'en' ? item.name : item.nameUr}
                      className="h-16 w-20 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold">
                        {language === 'en' ? item.name : item.nameUr}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.type === 'auction'
                          ? `${t.currentBid} · PKR ${item.currentBid.toLocaleString()}`
                          : `${t.price} · PKR ${item.price.toLocaleString()}`}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
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
            <section className="mb-10">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">{t.featuredCollections}</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {featuredCollections.map((collection) => (
                  <div
                    key={collection.id}
                    className="group overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative">
                      <img
                        src={collection.image}
                        alt={language === 'en' ? collection.title.en : collection.title.ur}
                        className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold">
                        {language === 'en' ? collection.title.en : collection.title.ur}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {language === 'en'
                          ? collection.description.en
                          : collection.description.ur}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10 grid gap-6 lg:grid-cols-[1fr,320px]">
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold">{t.featured}</h2>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredItems.map((item) => (
                    <FurnitureCard key={item.id} item={item} />
                  ))}
                </div>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28">
                <div className="rounded-2xl bg-white p-6 shadow-lg">
                  <h3 className="text-lg font-semibold">{t.categoriesMenu}</h3>
                  <div className="mt-4 space-y-4 text-sm text-gray-600">
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {t.room}
                      <select
                        value={filters.room}
                        onChange={(event) =>
                          setFilters((prev) => ({ ...prev, room: event.target.value }))
                        }
                        className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
                      >
                        <option value="all">{language === 'en' ? 'All rooms' : 'تمام کمرے'}</option>
                        {roomOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {t.subcategory}
                      <select
                        value={filters.subcategory}
                        onChange={(event) =>
                          setFilters((prev) => ({ ...prev, subcategory: event.target.value }))
                        }
                        className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
                      >
                        <option value="all">
                          {language === 'en' ? 'All subcategories' : 'تمام ذیلی زمرہ'}
                        </option>
                        {subcategoryOptions.map((subcategory) => (
                          <option key={subcategory} value={subcategory}>
                            {subcategory}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-lg">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{t.filters}</h3>
                    <button
                      type="button"
                      onClick={() =>
                        setFilters({
                          minPrice: 0,
                          maxPrice: 150000,
                          material: 'all',
                          style: 'all',
                          color: 'all',
                          room: 'all',
                          subcategory: 'all',
                          inStockOnly: false,
                        })
                      }
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                    >
                      {language === 'en' ? 'Reset' : 'ری سیٹ'}
                    </button>
                  </div>
                  <div className="space-y-4 text-sm text-gray-600">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        {t.priceRange}
                      </p>
                      <div className="flex items-center gap-3">
                        <input
                          type="range"
                          min="0"
                          max="150000"
                          value={filters.minPrice}
                          onChange={(event) =>
                            setFilters((prev) => ({
                              ...prev,
                              minPrice: Number(event.target.value),
                            }))
                          }
                          className="w-full accent-blue-600"
                        />
                        <span className="text-xs font-semibold">PKR {filters.minPrice}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-3">
                        <input
                          type="range"
                          min="0"
                          max="150000"
                          value={filters.maxPrice}
                          onChange={(event) =>
                            setFilters((prev) => ({
                              ...prev,
                              maxPrice: Number(event.target.value),
                            }))
                          }
                          className="w-full accent-blue-600"
                        />
                        <span className="text-xs font-semibold">PKR {filters.maxPrice}</span>
                      </div>
                    </div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {t.material}
                      <select
                        value={filters.material}
                        onChange={(event) =>
                          setFilters((prev) => ({ ...prev, material: event.target.value }))
                        }
                        className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
                      >
                        <option value="all">{language === 'en' ? 'All materials' : 'تمام مواد'}</option>
                        {filterOptions.materials.map((material) => (
                          <option key={material} value={material}>
                            {material}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {t.style}
                      <select
                        value={filters.style}
                        onChange={(event) =>
                          setFilters((prev) => ({ ...prev, style: event.target.value }))
                        }
                        className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
                      >
                        <option value="all">{language === 'en' ? 'All styles' : 'تمام انداز'}</option>
                        {filterOptions.styles.map((style) => (
                          <option key={style} value={style}>
                            {style}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {t.color}
                      <select
                        value={filters.color}
                        onChange={(event) =>
                          setFilters((prev) => ({ ...prev, color: event.target.value }))
                        }
                        className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
                      >
                        <option value="all">{language === 'en' ? 'All colors' : 'تمام رنگ'}</option>
                        {filterOptions.colors.map((color) => (
                          <option key={color} value={color}>
                            {color}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <input
                        type="checkbox"
                        checked={filters.inStockOnly}
                        onChange={(event) =>
                          setFilters((prev) => ({
                            ...prev,
                            inStockOnly: event.target.checked,
                          }))
                        }
                        className="h-4 w-4 rounded border-gray-300 text-blue-600"
                      />
                      {t.inStockOnly}
                    </label>
                  </div>
                </div>
              </aside>
            </section>

            <section className="mt-10">
              <h2 className="mb-6 text-2xl font-bold">{t.recommendations}</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {recommendedItems.map((item) => (
                  <FurnitureCard key={item.id} item={item} />
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="mb-6 text-2xl font-bold">{t.newArrivals}</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {newArrivals.map((item) => (
                  <FurnitureCard key={item.id} item={item} />
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="mb-6 text-2xl font-bold">{t.lookbook}</h2>
              <div className="grid gap-6 lg:grid-cols-2">
                {lookbookScenes.map((scene) => (
                  <div key={scene.id} className="overflow-hidden rounded-2xl bg-white shadow-lg">
                    <img
                      src={scene.image}
                      alt={language === 'en' ? scene.title.en : scene.title.ur}
                      className="h-60 w-full object-cover"
                    />
                    <div className="space-y-3 p-5">
                      <h3 className="text-lg font-semibold">
                        {language === 'en' ? scene.title.en : scene.title.ur}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {language === 'en' ? scene.description.en : scene.description.ur}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {scene.itemIds.map((id) => {
                          const item = furnitureItems.find((piece) => piece.id === id);
                          if (!item) {
                            return null;
                          }
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => {
                                addToRecentlyViewed(item.id);
                                setSelectedItem(item);
                              }}
                              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 transition hover:bg-gray-200"
                            >
                              {language === 'en' ? item.name : item.nameUr}
                            </button>
                          );
                        })}
                      </div>
                      <button className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
                        {t.shopTheLook}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
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

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSelectedItem(null)}
            role="button"
            tabIndex={0}
          />
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="grid gap-6 p-6 lg:grid-cols-[1.1fr,0.9fr]">
              <div>
                <img
                  src={selectedItem.image}
                  alt={language === 'en' ? selectedItem.name : selectedItem.nameUr}
                  className="h-72 w-full rounded-xl object-cover"
                />
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold text-gray-700">{t.dimensions}:</span>{' '}
                    {selectedItem.dimensions}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">{t.material}:</span>{' '}
                    {selectedItem.material}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">{t.style}:</span>{' '}
                    {selectedItem.style}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">{t.color}:</span>{' '}
                    {selectedItem.color}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold">
                        {language === 'en' ? selectedItem.name : selectedItem.nameUr}
                      </h2>
                      <p className="mt-2 text-sm text-gray-600">{selectedItem.description}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedItem(null)}
                      className="rounded-full bg-gray-100 p-2 text-gray-500 transition hover:bg-gray-200"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 rounded-xl bg-gray-50 p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      {selectedItem.type === 'auction' ? t.currentBid : t.price}
                    </p>
                    <p className="mt-1 text-2xl font-bold text-gray-900">
                      PKR{' '}
                      {selectedItem.type === 'auction'
                        ? selectedItem.currentBid.toLocaleString()
                        : selectedItem.price.toLocaleString()}
                    </p>
                    {selectedItem.endsIn && (
                      <p className="mt-1 text-xs text-red-600">
                        {t.endsIn}: {selectedItem.endsIn}
                      </p>
                    )}
                    <p className="mt-2 text-xs text-gray-500">
                      {selectedItem.inStock
                        ? language === 'en'
                          ? 'Available for delivery'
                          : 'ترسیل دستیاب ہے'
                        : language === 'en'
                          ? 'Made to order'
                          : 'آرڈر پر دستیاب'}
                    </p>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{selectedItem.vendor}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {selectedItem.deliveryOptions?.pickup && (
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">
                          {t.inStorePickup}
                        </span>
                      )}
                      {selectedItem.deliveryOptions?.delivery && (
                        <span className="rounded-full bg-green-50 px-3 py-1 text-green-700">
                          {t.homeDelivery}{' '}
                          {selectedItem.deliveryOptions.deliveryFee === 0
                            ? `(${t.free})`
                            : `(PKR ${selectedItem.deliveryOptions.deliveryFee})`}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {t.nextSteps}
                    </p>
                    <div className="mt-3 grid gap-2 text-sm text-gray-700">
                      <button
                        type="button"
                        onClick={() => handleAddToCart(selectedItem.id)}
                        className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
                      >
                        {t.addToCart}
                      </button>
                      <button className="w-full rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50">
                        {selectedItem.type === 'auction' ? t.placeBid : t.buyNow}
                      </button>
                      <button className="w-full rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50">
                        {t.scheduleVisit}
                      </button>
                      <button className="w-full rounded-lg border border-gray-300 px-4 py-2 font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50">
                        {t.contact}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsCartOpen(false)}
            role="button"
            tabIndex={0}
          />
          <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{t.cartTitle}</h2>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="rounded-full bg-gray-100 p-2 text-gray-500 transition hover:bg-gray-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {cartItems.length === 0 ? (
              <EmptyState icon={ShoppingCart} title={t.cartEmpty} description={t.cartEmptyDesc} />
            ) : (
              <div className="mt-4 space-y-4">
                {cartItems.map((item) => {
                  const itemPrice = item.type === 'auction' ? item.currentBid : item.price;
                  return (
                    <div
                      key={item.id}
                      className="flex flex-col gap-4 rounded-xl border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={language === 'en' ? item.name : item.nameUr}
                          className="h-20 w-24 rounded-lg object-cover"
                        />
                        <div>
                          <p className="text-sm font-semibold">
                            {language === 'en' ? item.name : item.nameUr}
                          </p>
                          <p className="text-xs text-gray-500">
                            {item.type === 'auction' ? t.currentBid : t.price}
                          </p>
                          <p className="text-sm font-semibold text-gray-900">
                            PKR {itemPrice.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="text-xs font-semibold text-red-500 hover:text-red-600"
                      >
                        {t.remove}
                      </button>
                    </div>
                  );
                })}
                <div className="flex flex-col gap-4 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">{t.cartTotal}</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      PKR {cartTotal.toLocaleString()}
                    </p>
                  </div>
                  <button className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                    {t.checkout}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FurnitureApp;