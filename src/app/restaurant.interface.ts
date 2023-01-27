

export interface restaurants {
    restaurantDetails:restaurantItem[]
}
export interface restaurantItem  {
    contactNumber: String,
    id: Number,
    openingHours:String,
    restaurantDescription: String,
    restaurantImage:String,
    websiteUrl: String,
    restaurantName:String,
}


export interface menus {
    menu:menuItem[]
}
export interface menuItem  {
    itemCategory: String,
    id: Number,
    itemCost:String,
    itemName: String,
    itemPhoto:String,
    restaurantName:String,
}