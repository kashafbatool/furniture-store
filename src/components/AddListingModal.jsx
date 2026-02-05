import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';

const AddListingModal = ({ isOpen, language, t, onClose }) => {
  const [formData, setFormData] = useState({
    itemName: '',
    category: 'sofa',
    description: '',
    listingType: 'fixed',
    price: '',
    vendor: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    alert(
      language === 'en'
        ? `Listing submitted successfully! Item: ${formData.itemName}`
        : `فہرست کامیابی سے جمع کرائی گئی! شے: ${formData.itemName}`
    );
    onClose();
    // Reset form
    setFormData({
      itemName: '',
      category: 'sofa',
      description: '',
      listingType: 'fixed',
      price: '',
      vendor: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        role="button"
        tabIndex={0}
      />
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-6">
          <h2 className="text-2xl font-semibold">{t.listingTitle}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-gray-100 p-2 text-gray-500 transition hover:bg-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-5">
            {/* Item Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                {t.itemName} *
              </label>
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={
                  language === 'en' ? 'e.g., Modern Velvet Sofa' : 'مثال: جدید مخملی صوفہ'
                }
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                {t.category} *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="sofa">{t.sofa}</option>
                <option value="chair">{t.chair}</option>
                <option value="table">{t.table}</option>
                <option value="bed">{t.bed}</option>
                <option value="storage">{t.storage}</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                {t.description} *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={
                  language === 'en'
                    ? 'Describe your item in detail...'
                    : 'اپنی شے کی تفصیل سے وضاحت کریں...'
                }
              />
            </div>

            {/* Listing Type */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                {t.listingType} *
              </label>
              <div className="flex gap-4">
                <label className="flex flex-1 cursor-pointer items-center gap-3 rounded-lg border-2 border-gray-300 p-4 transition hover:border-blue-500">
                  <input
                    type="radio"
                    name="listingType"
                    value="fixed"
                    checked={formData.listingType === 'fixed'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{t.fixedPrice}</p>
                    <p className="text-xs text-gray-500">
                      {language === 'en' ? 'Set a fixed price' : 'ایک مقررہ قیمت مقرر کریں'}
                    </p>
                  </div>
                </label>
                <label className="flex flex-1 cursor-pointer items-center gap-3 rounded-lg border-2 border-gray-300 p-4 transition hover:border-orange-500">
                  <input
                    type="radio"
                    name="listingType"
                    value="auction"
                    checked={formData.listingType === 'auction'}
                    onChange={handleChange}
                    className="h-4 w-4 text-orange-600"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{t.auction}</p>
                    <p className="text-xs text-gray-500">
                      {language === 'en' ? 'Start an auction' : 'نیلامی شروع کریں'}
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Price / Starting Bid */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                {formData.listingType === 'auction' ? t.startingBid : t.price} (PKR) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={language === 'en' ? 'e.g., 45000' : 'مثال: 45000'}
              />
            </div>

            {/* Vendor Contact */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                {t.vendorNumber} *
              </label>
              <input
                type="tel"
                name="vendor"
                value={formData.vendor}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+92 300 1234567"
              />
            </div>

            {/* Upload Images */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                {t.uploadImages}
              </label>
              <div className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 transition hover:border-blue-500 hover:bg-blue-50">
                <div className="text-center">
                  <Upload className="mx-auto h-10 w-10 text-gray-400" />
                  <p className="mt-2 text-sm font-medium text-gray-700">
                    {language === 'en' ? 'Click to upload images' : 'تصاویر اپ لوڈ کرنے کے لیے کلک کریں'}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {language === 'en' ? 'PNG, JPG up to 10MB' : 'PNG, JPG 10MB تک'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              {t.cancel}
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              {t.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListingModal;
