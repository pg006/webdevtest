export interface restaurants {
  restaurantDetails: restaurantItem[];
}
export interface restaurantItem {
  contactNumber: string;
  id: number;
  openingHours: string;
  restaurantDescription: string;
  restaurantImage: string;
  websiteUrl: string;
  restaurantName: string;
}

export interface menus {
  menu: menuItem[];
}
export interface menuItem {
  itemCategory: string;
  id: number;
  itemCost: string;
  itemName: string;
  itemPhoto: string;
  restaurantName: string;
}
export interface category {
  name: string;
  image: string;
}
