import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - ResturantContainer
 *    - ResturantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisines, delivery time.
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "84147",
      name: "Saurashtra Chawana & Sweets",
      cloudinaryImageId: "x5oqbuzjvd7h1xr7fpmc",
      locality: "Satellite",
      areaName: "Sachin Tower, Prahladnagar",
      costForTwo: "₹200 for two",
      cuisines: ["Sweets", "Snacks"],
      avgRating: 4.5,
      parentId: "7645",
      avgRatingString: "4.5",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 7.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "7.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-27 21:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-16068ea0-80b2-4aa6-a5f6-9717305f4efb",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/saurashtra-chawana-and-sweets-satellite-sachin-tower-prahladnagar-ahmedabad-84147",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "150248",
      name: "Jay Julelal Dal-Pakwan",
      cloudinaryImageId: "gm9ubyhrsjgh4cnmtmmv",
      locality: "Satellite",
      areaName: "Satellite",
      costForTwo: "₹150 for two",
      cuisines: ["Snacks"],
      avgRating: 4.6,
      parentId: "7715",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 8.2,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "8.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-27 14:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "100+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-16068ea0-80b2-4aa6-a5f6-9717305f4efb",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/jay-julelal-dal-pakwan-satellite-ahmedabad-150248",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "76794",
      name: "Kovallam",
      cloudinaryImageId: "jmvnyryzhjs8lsqooxue",
      locality: "Navrangpura",
      areaName: "Navrangpura",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian", "Indian", "Snacks", "Thalis", "Desserts"],
      avgRating: 4.5,
      parentId: "21946",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-27 15:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-South%20Indian.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-16068ea0-80b2-4aa6-a5f6-9717305f4efb",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kovallam-navrangpura-ahmedabad-76794",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "65325",
      name: "Laxmi Ganthiya Rath",
      cloudinaryImageId: "lymaaagdquqjhj5tbbe6",
      locality: "Ambawadi",
      areaName: "Ambawadi",
      costForTwo: "₹100 for two",
      cuisines: ["Indian"],
      avgRating: 4.5,
      parentId: "6351",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-27 21:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-16068ea0-80b2-4aa6-a5f6-9717305f4efb",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/laxmi-ganthiya-rath-ambawadi-ahmedabad-65325",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "731438",
      name: "Gajanand Pauva House",
      cloudinaryImageId: "02dc35ca501fe62ef571bb8857f9e960",
      locality: "Maninagar",
      areaName: "Astodia",
      costForTwo: "₹300 for two",
      cuisines: ["Snacks", "Indian", "Beverages", "Juices"],
      avgRating: 4.1,
      veg: true,
      parentId: "7615",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-27 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-16068ea0-80b2-4aa6-a5f6-9717305f4efb",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/gajanand-pauva-house-maninagar-astodia-ahmedabad-731438",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "726653",
      name: "The Coffee House",
      cloudinaryImageId: "fe7ad984e091993f6c03e8e8495d1913",
      locality: "Bhut Ni Ambali Rd",
      areaName: "Maninagar",
      costForTwo: "₹300 for two",
      cuisines: ["Beverages", "Snacks"],
      avgRating: 4.1,
      veg: true,
      parentId: "207109",
      avgRatingString: "4.1",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-27 11:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-16068ea0-80b2-4aa6-a5f6-9717305f4efb",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-coffee-house-bhut-ni-ambali-rd-maninagar-ahmedabad-726653",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "808645",
      name: "Oshwal",
      cloudinaryImageId: "7d626599347c9398a91b1e61f672d81b",
      locality: "Navrangpura",
      areaName: "Ashram Road",
      costForTwo: "₹400 for two",
      cuisines: ["Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "152931",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-27 21:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-16068ea0-80b2-4aa6-a5f6-9717305f4efb",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/oshwal-navrangpura-ashram-road-ahmedabad-808645",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "114373",
      name: "Gita Samosa Centre",
      cloudinaryImageId: "iotn3wkvhwnyb2m8bugn",
      locality: "Navrangpura",
      areaName: "Navrangpura",
      costForTwo: "₹200 for two",
      cuisines: ["Fast Food", "Snacks"],
      avgRating: 4.6,
      parentId: "7616",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-27 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "100+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-16068ea0-80b2-4aa6-a5f6-9717305f4efb",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/gita-samosa-centre-navrangpura-ahmedabad-114373",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

// not using key (not accpetable) <<<< index as key <<<< unique id (best practice)

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((restaurant) => (
            <ResturantCard key={restaurant.info.id} resData={restaurant}/>
          ))
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
