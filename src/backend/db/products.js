import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1651232683/nou-store/ball1_oyexb5.jpg",
    title: "Football 1",
    author: "barca",
    price: "500",
    originalPrice: "999",
    rating: 2.3,
    categoryName: "ball",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1651232684/nou-store/ball2_lahr9s.jpg",
    title: "Football 2",
    author: "barca",
    price: "4000",
    originalPrice: "5000",
    rating: 4.5,
    categoryName: "ball",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1651232686/nou-store/ball3_bbzbps.jpg",
    title: "Football 3",
    author: "barca",
    price: "200",
    originalPrice: "999",
    rating: 3.2,
    categoryName: "ball",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1651232686/nou-store/ball4_luxvvb.jpg",
    title: "Football 4",
    author: "barca",
    price: "3000",
    originalPrice: "6000",
    rating: 2.2,
    categoryName: "ball",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1651233188/nou-store/boot1_fuhata.webp",
    title: "boot 1",
    author: "nike",
    price: "3500",
    originalPrice: "3999",
    rating: 4.2,
    categoryName: "boots",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1651233188/nou-store/boot2_yycwyc.webp",
    title: "boot 2",
    author: "nike",
    price: "4000",
    originalPrice: "4999",
    rating: 1.8,
    categoryName: "boots",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1651233284/nou-store/jersey-1-arsenal_dbhgb0.webp",
    title: "jersey 1",
    author: "nike",
    price: "100",
    originalPrice: "110",
    rating: 1.2,
    categoryName: "shirt",
  },
  {
    _id: uuid(),
    photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1651233284/nou-store/jerey-2-liverpool_zu0gi4.webp",
    title: "jersey 2",
    author: "nike",
    price: "150",
    originalPrice: "199",
    rating: 0.5,
    categoryName: "shirt",
  },
  
];
