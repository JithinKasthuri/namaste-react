import React from "react";
import ReactDOM from "react-dom/client";

/* Header
    - Logo
    - Nav Items
   Body
    - Search
    - RestaurantContainer
        - RestaurantCard
    Footer
     - Copyright
     - Links
     - Address
     - Contact
  */

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "41100",
          name: "Nagarjuna - Since 1984",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/3/3/9a2fadcb-1c9d-4fb2-b651-1af9521d9ced_6e8d69fa-962d-42f6-a715-98dd100d27f9.png",
          locality: "Residency Road",
          areaName: "Ashok Nagar",
          costForTwo: "₹600 for two",
          cuisines: [
            "Andhra",
            "South Indian",
            "Biryani",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4.6,
          parentId: "509973",
          avgRatingString: "4.6",
          totalRatingsString: "46K+",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 2.5,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "2.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-05 15:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId:
                        "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
              rating: "4.2",
              ratingCount: "21K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=41100&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1050",
          name: "Nagarjuna Chimney",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/3/3/9a2fadcb-1c9d-4fb2-b651-1af9521d9ced_6e8d69fa-962d-42f6-a715-98dd100d27f9.png",
          locality: "Jayanagar",
          areaName: "Jayanagar",
          costForTwo: "₹800 for two",
          cuisines: [
            "Seafood",
            "Andhra",
            "Biryani",
            "South Indian",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.5,
          parentId: "143166",
          avgRatingString: "4.5",
          totalRatingsString: "32K+",
          promoted: true,
          adTrackingId:
            "cid=27190981~p=10~adgrpid=27190981#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1050~eid=6436265c-4d89-4103-a15a-bcaace430595~srvts=1743838588038~collid=83639",
          sla: {
            deliveryTime: 56,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "55-60 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-05 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
              rating: "3.8",
              ratingCount: "11K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "27190981",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1050&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "396750",
          name: "The Biryani Life",
          cloudinaryImageId: "wvjsuvqrd6ahqqyhmnrt",
          locality: "Residency Road",
          areaName: "Central Bangalore",
          costForTwo: "₹250 for two",
          cuisines: [
            "Biryani",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "Desserts",
            "Beverages",
          ],
          avgRating: 3.8,
          parentId: "8496",
          avgRatingString: "3.8",
          totalRatingsString: "446",
          sla: {
            deliveryTime: 37,
            lastMileTravel: 2.7,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "2.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-05 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹159",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=396750&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "52336",
          name: "Hotel Ocea",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/26/8a9dcb5a-c0b1-4039-b4a0-b09f21359ae3_7e89add9-1787-49bc-9c64-32cc3eac608f.jpg",
          locality: "Markham Road",
          areaName: "Central Bangalore",
          costForTwo: "₹300 for two",
          cuisines: [
            "North Indian",
            "Arabian",
            "Seafood",
            "Biryani",
            "Chinese",
            "Kebabs",
            "Coastal",
          ],
          avgRating: 4.5,
          parentId: "100843",
          avgRatingString: "4.5",
          totalRatingsString: "2.6K+",
          promoted: true,
          adTrackingId:
            "cid=27282421~p=11~adgrpid=27282421#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=52336~eid=8c0c2704-7fa9-4038-b612-bb0ee3c8bc5c~srvts=1743838588038~collid=83639",
          sla: {
            deliveryTime: 49,
            lastMileTravel: 2.5,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "2.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-05 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
          campaignId: "27282421",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=52336&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "2914",
          name: "Bheema's",
          cloudinaryImageId: "3bc375cdf9d6f43b7f9ba146b7d5a483",
          locality: "Church Street",
          areaName: "Central Bangalore",
          costForTwo: "₹550 for two",
          cuisines: ["Andhra"],
          avgRating: 4.6,
          parentId: "1841",
          avgRatingString: "4.6",
          totalRatingsString: "15K+",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 1.7,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-05 15:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
              ratingCount: "6.7K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=2914&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "91629",
          name: "Sheeshkebab",
          cloudinaryImageId: "fdu49lv6xelcl4xd4367",
          locality: "Frazer Town",
          areaName: "Central Bangalore",
          costForTwo: "₹600 for two",
          cuisines: [
            "Persian",
            "Arabian",
            "Kebabs",
            "Middle Eastern",
            "Biryani",
            "Indian",
          ],
          avgRating: 4.3,
          parentId: "21632",
          avgRatingString: "4.3",
          totalRatingsString: "4.8K+",
          promoted: true,
          adTrackingId:
            "cid=27329521~p=13~adgrpid=27329521#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=91629~eid=4c5f7365-0d9b-4ac5-a7af-515918e0e219~srvts=1743838588038~collid=83639",
          sla: {
            deliveryTime: 61,
            lastMileTravel: 6.7,
            serviceability: "SERVICEABLE",
            slaString: "60-65 mins",
            lastMileTravelString: "6.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-06 00:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
              ratingCount: "3.8K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "27329521",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=91629&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "50571",
          name: "Taj Hotel",
          cloudinaryImageId: "gut31gdqhhgrshuhssqi",
          locality: "Shivaji Nagar",
          areaName: "Shivaji Nagar",
          costForTwo: "₹500 for two",
          cuisines: ["Chinese", "Mughlai"],
          avgRating: 4.3,
          parentId: "21656",
          avgRatingString: "4.3",
          totalRatingsString: "5.9K+",
          sla: {
            deliveryTime: 47,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-12 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
              rating: "3.7",
              ratingCount: "11K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=50571&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "574263",
          name: "Rahhams",
          cloudinaryImageId: "ac83xdrhlmdwebnppg3l",
          locality: "Pulikeshi Nagar",
          areaName: "Central Bangalore",
          costForTwo: "₹700 for two",
          cuisines: [
            "Biryani",
            "Mughlai",
            "North Indian",
            "Kebabs",
            "Chinese",
            "Seafood",
            "Beverages",
          ],
          avgRating: 4.4,
          parentId: "2534",
          avgRatingString: "4.4",
          totalRatingsString: "4.1K+",
          promoted: true,
          adTrackingId:
            "cid=27302449~p=14~adgrpid=27302449#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=574263~eid=f8f1b61c-39cc-4406-b007-e33619c91333~srvts=1743838588038~collid=83639",
          sla: {
            deliveryTime: 49,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-06 01:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
          campaignId: "27302449",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=574263&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "439141",
          name: "Biryani Blues",
          cloudinaryImageId: "97377e54937c079fe269d744aa66274a",
          locality: "Church Street",
          areaName: "Church Street",
          costForTwo: "₹400 for two",
          cuisines: ["Biryani", "Kebabs", "Lucknowi", "Hyderabadi"],
          avgRating: 4.4,
          parentId: "13813",
          avgRatingString: "4.4",
          totalRatingsString: "2.1K+",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-06 03:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹449",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
              rating: "4.2",
              ratingCount: "336",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=439141&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "30034",
          name: "Mani's Dum Biryani",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/27/bc960282-e31e-4e77-97e9-6c6ec9cec813_c46e6499-a9ca-43e8-91d5-85aa6f0afa15.jpg",
          locality: "Haudin Road",
          areaName: "Ulsoor",
          costForTwo: "₹499 for two",
          cuisines: ["Andhra", "Biryani", "North Indian"],
          avgRating: 4.5,
          parentId: "623",
          avgRatingString: "4.5",
          totalRatingsString: "23K+",
          promoted: true,
          adTrackingId:
            "cid=27284374~p=16~adgrpid=27284374#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=30034~eid=b9afe291-45cf-42b0-a394-19afe48a253e~srvts=1743838588038~collid=83639",
          sla: {
            deliveryTime: 49,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-05 23:30:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      description: "",
                      shortDescription: "options available",
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                    },
                  },
                ],
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
              rating: "4.2",
              ratingCount: "1.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "27284374",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=30034&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "396742",
          name: "Behrouz Biryani",
          cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
          locality: "Residency Road",
          areaName: "Central Bangalore",
          costForTwo: "₹500 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.4,
          parentId: "1803",
          avgRatingString: "4.4",
          totalRatingsString: "1.2K+",
          sla: {
            deliveryTime: 47,
            lastMileTravel: 2.7,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "2.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-05 23:59:00",
            opened: true,
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {
                badgeObject: [
                  {
                    attributes: {
                      fontColor: "#7E808C",
                      iconId: "guiltfree/GF_Logo_android_3x",
                      description: "",
                      shortDescription: "options available",
                    },
                  },
                ],
              },
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            footerText: "20 DEALS LEFT",
            secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=396742&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "29070",
          name: "Eden Park",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/5/d32e145a-34a7-476e-804e-b4ba6e62b078_3614114d-74de-4f95-874e-1c2a90b204b9.jpeg",
          locality: "Cunningham Road",
          areaName: "Cunningham Road",
          costForTwo: "₹1000 for two",
          cuisines: [
            "Andhra",
            "North Indian",
            "Seafood",
            "Mughlai",
            "Biryani",
            "Desserts",
            "Jain",
            "Chinese",
            "South Indian",
            "Coastal",
          ],
          avgRating: 4.5,
          parentId: "19992",
          avgRatingString: "4.5",
          totalRatingsString: "2.5K+",
          promoted: true,
          adTrackingId:
            "cid=27284372~p=17~adgrpid=27284372#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=29070~eid=98adc200-77fe-456d-a810-2bf7c30d909b~srvts=1743838588038~collid=83639",
          sla: {
            deliveryTime: 45,
            lastMileTravel: 2.2,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-05 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
              ratingCount: "7.9K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "27284372",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=29070&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "252412",
          name: "Anjappar",
          cloudinaryImageId: "e4wujbtpzue93pz3fnrm",
          locality: "Brigade Road",
          areaName: "Brigade Road",
          costForTwo: "₹400 for two",
          cuisines: [
            "Chettinad",
            "Thalis",
            "Biryani",
            "Chinese",
            "Tandoor",
            "South Indian",
          ],
          avgRating: 4.2,
          parentId: "61",
          avgRatingString: "4.2",
          totalRatingsString: "4.4K+",
          sla: {
            deliveryTime: 42,
            lastMileTravel: 2.2,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-04-05 23:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            discountCalloutInfo: {
              message: "Free Delivery",
              logoCtx: {
                logo: "v1655895371/free_delivery_logo_hqipbo.png",
              },
            },
            footerText: "20 DEALS LEFT",
            secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
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
              rating: "3.8",
              ratingCount: "994",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=252412&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/burger-icon-logo-design-vector-template_474888-3613.jpg?t=st=1743791256~exp=1743794856~hmac=dcbc8c582901143108bbb8a9cdd263b67d8319cb90cd3c7a16a3d09af5e8b75a&w=826"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About Us </li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resObj } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resObj?.card?.card?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            resObj={restaurant}
            key={restaurant.card.card.info.id}
          />
        ))}
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
