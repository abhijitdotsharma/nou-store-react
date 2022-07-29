import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1658943577/nou-store/landing-football_t3iuan.jpg",
    title: "Finale 21",
    author: "adidas",
    price: "500",
    originalPrice: "999",
    rating: 2.3,
    categoryName: "ball",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1651232684/nou-store/ball2_lahr9s.jpg",
    title: "Barca Sextuple",
    author: "nike",
    price: "4000",
    originalPrice: "5000",
    rating: 4.5,
    categoryName: "ball",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1659004660/nou-store/Balls/Football-3-Adidas_qeupry.jpg",
    title: "Starlancer Plus",
    author: "adidas",
    price: "200",
    originalPrice: "999",
    rating: 3.2,
    categoryName: "ball",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1659004660/nou-store/Balls/Football-4-adidas_qynkvg.jpg",
    title: "TIRO League TB",
    author: "adidas",
    price: "3000",
    originalPrice: "6000",
    rating: 2.2,
    categoryName: "ball",
  },
  //boots
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1658943437/nou-store/landing-boots_yfqkys.jpg",
    title: "X Speedportal 3",
    author: "grass",
    price: "3500",
    originalPrice: "3999",
    rating: 4.2,
    categoryName: "boots",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1659006263/nou-store/Boots/boot-2-adidas_z6gnme.jpg",
    title: "Predator EDGE - I",
    author: "grass X mud",
    price: "4000",
    originalPrice: "4999",
    rating: 1.8,
    categoryName: "boots",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1659006263/nou-store/Boots/boot-3-adidasl_c1fmta.jpg",
    title: "COPA sense 4-TF",
    author: "turf",
    price: "4000",
    originalPrice: "4999",
    rating: 1.8,
    categoryName: "boots",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1659006359/nou-store/Boots/boot-4-adidas_faxvzr.jpg",
    title: "Predator FREAK-III",
    author: "grass X mud",
    price: "4000",
    originalPrice: "4999",
    rating: 1.8,
    categoryName: "boots",
  },
//jersey or Shirt
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1659005804/nou-store/Jerseys/Jersey-1-Madrid_nhwfoz.jpg",
    title: "Madrid home 2021/22",
    author: "read madrid",
    price: "100",
    originalPrice: "110",
    rating: 1.2,
    categoryName: "shirt",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1659005804/nou-store/Jerseys/Jersey-2-Arsenal-Away_taerfy.jpg",
    title: "Arsenal away 2022/23",
    author: "arsenal",
    price: "150",
    originalPrice: "199",
    rating: 0.5,
    categoryName: "shirt",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1659005803/nou-store/Jerseys/Jersey-3-United_kojtsu.jpg",
    title: "United home 2022/23",
    author: "man united",
    price: "400",
    originalPrice: "300",
    rating: 0.3,
    categoryName: "shirt",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1659005804/nou-store/Jerseys/Jersey-4-Madrid-away_dmnocn.jpg",
    title: "Madrid away 2022/23",
    author: "real madrid",
    price: "400",
    originalPrice: "300",
    rating: 0.3,
    categoryName: "shirt",
  },
  //Jackets
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1659003720/nou-store/Jackets/Jacket-2-ManUnited_rgcrvr.jpg",
    title: "Woven Retro Jacket",
    author: "man united",
    price: "500",
    originalPrice: "999",
    rating: 2.3,
    categoryName: "jacket",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1659003719/nou-store/Jackets/jacket-landing_tm9qj3.jpg",
    title: "Modern Suave",
    author: "real madrid",
    price: "500",
    originalPrice: "999",
    rating: 2.3,
    categoryName: "jacket",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1659003719/nou-store/Jackets/Jacket-3-Juventus_i5ttcn.jpg",
    title: "Popping Blue Jacket",
    author: "juventus",
    price: "500",
    originalPrice: "999",
    rating: 2.3,
    categoryName: "jacket",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1659003719/nou-store/Jackets/Jacket-4-Arsenal_vmj5gm.jpg",
    title: "Classic Gunner Jacket",
    author: "arsenal",
    price: "500",
    originalPrice: "999",
    rating: 2.3,
    categoryName: "jacket",
  },
  
];
