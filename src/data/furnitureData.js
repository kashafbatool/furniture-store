export const furnitureItems = [
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
    dimensions: '90" W x 38" D x 34" H',
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
    dimensions: '72" W x 40" D x 30" H',
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
    dimensions: '28" W x 28" D x 48" H',
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
    dimensions: '78" W x 86" D x 52" H',
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
    dimensions: '60" W x 18" D x 72" H',
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
    dimensions: '30" W x 32" D x 36" H',
    material: 'Bouclé',
    style: 'Scandinavian',
    color: 'Cream',
    inStock: true,
    deliveryOptions: { pickup: true, delivery: true, deliveryFee: 500 },
  },
];

export const categories = [
  { key: 'all', icon: '🏠' },
  { key: 'sofa', icon: '🛋️' },
  { key: 'chair', icon: '🪑' },
  { key: 'table', icon: '🍽️' },
  { key: 'bed', icon: '🛏️' },
  { key: 'storage', icon: '🗄️' },
];

export const categoryHierarchy = [
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

export const lookbookScenes = [
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

export const featuredCollections = [
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
