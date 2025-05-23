import { useGetPropertyQuery } from '@/app/state/api';
import { MapPin, Star } from 'lucide-react';
import React from 'react';

const PropertyOverview = ({propertyId}: PropertyOverviewProps) => {
  const {
    data: property,
    isError,
    isLoading
  } = useGetPropertyQuery(propertyId);

  if (isLoading) return <>Loading...</>
  if (isError || !property) {
    return <>Property not Found</>;
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-1">
          {property.location?.country} / {property.location?.state} /{" "}
          <span className="font-semibold text-gray-600">
            {property.location?.city}
          </span>
        </div>
        <h1 className="text-3xl font-bold my-5">{property.name}</h1>
        <div className="flex justify-between items-center">
          <span className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-1 text-gray-700" />
            {property.location?.city}, {property.location?.state},{" "}
            {property.location?.country}
          </span>
          <div className="flex justify-between items-center gap-3">
            <span className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 mr-1 fill-current" />
              {property.averageRating.toFixed(1)} ({property.numberOfReviews}{" "}
              Reviews)
            </span>
            <span className="text-green-600">Verified Listing</span>
          </div>
        </div>
      </div>
      {/* Details */}
      <div className="border border-primary-200 rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center gap-4 px-5">
          <div>
            <div className="text-sm text-gray-500">Monthly Rent</div>
            <div className="font-semibold">
              ${property.pricePerMonth.toLocaleString()}
            </div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Bedrooms</div>
            <div className="font-semibold">{property.beds} bd</div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Bathrooms</div>
            <div className="font-semibold">{property.baths} ba</div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Square Feet</div>
            <div className="font-semibold">
              {property.squareFeet.toLocaleString()} sq ft
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="my-16">
        <h2 className="text-xl font-semibold mb-5">About {property.name}</h2>
        <p className="text-gray-500 leading-7">
          {property.description}
          Welcome to Seacrest Homes — a contemporary coastal retreat that perfectly blends the energy of city life with the serenity of the sea. Our brand-new, thoughtfully designed two- and three-bedroom residences feature upscale details including quartz countertops, premium Whirlpool stainless steel appliances, an in-unit washer and dryer, and a dedicated office nook for your work-from-home needs.
          Step outside your door and into a private resort experience. Enjoy relaxing afternoons at our luxurious swimming pools and spas, complete with stylish poolside cabanas. Stroll through beautifully landscaped courtyards and unwind in inviting indoor/outdoor lounge spaces ideal for entertaining or quiet reflection.
          Take in panoramic views from the Palos Verdes Peninsula to Downtown LA from our BBQ and dining areas, or admire the vibrant South Bay skyline after sunset. Wellness is at your fingertips with our state-of-the-art fitness center and serene yoga studio. When work calls, skip the commute and utilize our professional conference room and high-speed internet café.
          Located just minutes from scenic beaches and with seamless access to the 110, 405, and 91 freeways, Seacrest Homes is also near top-tier healthcare facilities and premier shopping at Del Amo Fashion Center — the largest mall in the Western U.S.
          Schedule your private tour today and experience luxury, comfort, and convenience in one of Los Angeles County’s most desirable communities. Seacrest Homes — where modern living meets coastal charm.
        </p>
      </div>         
    </div>
  );
};

export default PropertyOverview
