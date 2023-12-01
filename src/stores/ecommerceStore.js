import { defineStore } from "pinia";
import product1 from "../assets/18 1.png"
import product2 from "../assets/1 902.png"
import product3 from "../assets/3 389454.png"
import product4 from "../assets/5 7.png"
import product5 from "../assets/7 1.png"
import product6 from "../assets/8 1.png"
import product7 from "../assets/9 1.png"
import product8 from "../assets/11 1.png"
import product9 from "../assets/12 1.png"
import product10 from "../assets/16 1.png"
import img1 from '../assets/cat-13 1.png'
import img2 from '../assets/cat-11 1.png'
import img3 from '../assets/cat-12 1.png'
import img4 from '../assets/cat-9 1.png'
import img5 from '../assets/cat-3 1.png'
import img6 from '../assets/cat-4 1.png'
import img7 from '../assets/cat-1 4.png'
import img8 from '../assets/cat-15 1.png'
import img9 from '../assets/cat-14 1.png'
import img10 from '../assets/cat-7 1.png'
import img11 from '../assets/Cms-04 1.png'
import img12 from '../assets/Cat-01 1.png'
import img13 from '../assets/Cms-03 1.png'
import { ArrowLongRightIcon,UserIcon, ShoppingCartIcon, HeartIcon, ArrowPathIcon, FireIcon, ChevronDownIcon } from '@heroicons/vue/20/solid';




export const useEStore = defineStore("products",{
    state: () => ({
        promotions : [
            {
              name: 'Everyday Fresh & Clean with Our Products',
              imageUrl: img11,
              description: '3 items',
              bg: "bg-[#F0E8D5]",
              button: "Shop Now",
              bgButton :"bg-[#3BB77E]",
              icon: ArrowLongRightIcon, // Include the icon component
            },
            {
              name: 'Make your Breakfast Healthy and Easy',
              imageUrl: img12,
              description: '4 items',
              bg: "bg-[#F3E8E8]",
              button: "Shop Now",
              bgButton :"bg-[#3BB77E]",
              icon: ArrowLongRightIcon, // Include the icon component
            },
            {
              name: 'The best Organic Products Online',
              imageUrl: img13,
              description: '4 items',
              bg: "bg-[#E7EAF3]",
              button: "Shop Now",
              bgButton :"bg-[#FDC040]",
              icon: ArrowLongRightIcon, // Include the icon component
            },
          ],
            categories : [
                {
                  id: 1,
                  name: 'Cake & Milk',
                  imageUrl: img1,
                  description: '3 items',
                  bg: "bg-[#F2FCE4]",
                },
                {
                  id: 2,
                  name: 'Peach',
                  imageUrl: img2,
                  description: '4 items',
                  bg: "bg-[#FFFCEB]"
                },
                {
                  id: 3,
                  name: 'Oganic Kiwi',
                  imageUrl: img3,
                  description: '4 items',
                  bg: "bg-[#ECFFEC]"
                },
                {
                  id: 4,
                  name: 'Red Apple',
                  imageUrl: img4,
                  description: '4 items',
                  bg: "bg-[#FEEFEA]"
                },
                {
                  id: 5,
                  name: 'Snack',
                  imageUrl: img5,
                  description: '4 items',
                  bg: "bg-[#FFF3EB]"
                },
                {
                  id: 6,
                  name: 'Black Plum',
                  imageUrl: img6,
                  description: '4 items',
                  bg: "bg-[#FFF3FF]"
                },
                {
                  id: 7,
                  name: 'Vegetables',
                  imageUrl: img7,
                  description: '4 items',
                  bg: "bg-[#F2FCE4]"
                },
                {
                  id: 8,
                  name: 'Headphone',
                  imageUrl: img8,
                  description: '4 items',
                  bg: "bg-[#FFFCEB]"
                },
                {
                  id: 9,
                  name: 'Cake & Milk',
                  imageUrl: img9,
                  description: '4 items',
                  bg: "bg-[#F2FCE4]"
                },
                {
                  id: 10,
                  name: 'Orange',
                  imageUrl: img10,
                  description: '4 items',
                  bg: "bg-[#FFF3FF]"
                },
              ],
                products: [
                    {
                    id: 1,
                    tag: "-17%",
                    image: product1,
                    category: 3,
                    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                    rate: 4,
                    description: "500 gram",
                    sellPrice: "2.51",
                    discountPercentage: 17,
                    discountPrice: 2.80,
                    quantity: 0,
                    },
                    {
                        id: 2,
                        tag: "Hot",
                        image: product2,
                        category: 3,
                        name: "All Natural Italian-Style Chicken Meatballs",
                        rate: 4,
                        description: "500 gram",
                        sellPrice: "2.51",
                        discountPercentage: 17,
                        discountPrice: 2.80,
                        quantity: 0,
                        },
                        {
                            id: 3,
                            tag: "Sale",
                            image: product3,
                            category: 3,
                            name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
                            rate: 4,
                            description: "500 gram",
                            sellPrice: "2.51",
                            discountPercentage: 17,
                            discountPrice: 2.80,
                            quantity: 0,
                            },
                            {
                                id: 4,
                                tag: null,
                                image: product1,
                                category: 4,
                                name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
                                rate: 4,
                                description: "500 gram",
                                sellPrice: "2.51",
                                discountPercentage: 17,
                                discountPrice: 2.80,
                                quantity: 0,
                                },
                                {
                                    id: 5,
                                    tag: null,
                                    image: product5,
                                    category: 3,
                                    name: "Blue Diamond Almonds Lightly Salted Vegetables",
                                    rate: 4,
                                    description: "500 gram",
                                    sellPrice: "2.51",
                                    discountPercentage: 17,
                                    discountPrice: 2.80,
                                    quantity: 0,
                                    },
                                    {
                                        id: 6,
                                        tag: null,
                                        image: product6,
                                        category: 3,
                                        name: "Chobani Complete Vanilla Greek Yogurt",
                                        rate: 4,
                                        description: "500 gram",
                                        sellPrice: "2.51",
                                        discountPercentage: 17,
                                        discountPrice: 2.80,
                                        quantity: 0,
                                        },
                                        {
                                            id: 7,
                                            tag: "Sale",
                                            image: product7,
                                            category: 3,
                                            name: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
                                            rate: 4,
                                            description: "500 gram",
                                            sellPrice: "2.51",
                                            discountPercentage: 17,
                                            discountPrice: 2.80,
                                            quantity: 0,
                                            },
                                            {
                                                id: 8,
                                                tag: null,
                                                image: product8,
                                                category: 3,
                                                name: "Encore Seafoods Stuffed Alaskan Salmon",
                                                rate: 4,
                                                description: "500 gram",
                                                sellPrice: "2.51",
                                                discountPercentage: 17,
                                                discountPrice: 2.80,
                                                quantity: 0,
                                                },
                                                {
                                                    id: 9,
                                                    tag: null,
                                                    image: product9,
                                                    category: 3,
                                                    name: "Gorton’s Beer Battered Fish Fillets with soft paper",
                                                    rate: 4,
                                                    description: "500 gram",
                                                    sellPrice: "2.51",
                                                    discountPercentage: 17,
                                                    discountPrice: 2.80,
                                                    quantity: 0,
                                                    },
                                                    {
                                                        id: 10,
                                                        tag: "Hot",
                                                        image: product10,
                                                        category: 3,
                                                        name: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
                                                        rate: 4,
                                                        description: "500 gram",
                                                        sellPrice: "2.51",
                                                        discountPercentage: 17,
                                                        discountPrice: 2.80,
                                                        quantity: 0,
                                                        }
                    ],
                    groups: [
                        "Milks & Diaries", "Coffees & Teas", "Pet Foods", "Meats", "Vegetables", "Fruits"
                    ],
                    menuItems: [
                      {id:1, name: "Account",icon:UserIcon,isRight:false,color:"text-slate-500"},
                      {id:2, name: "Compare",icon:ArrowPathIcon,isRight:false,color:"text-slate-500"},
                      {id:3, name: "WishList",icon:HeartIcon,isRight:false,color:"text-slate-500"},
                      {id:4, name: "Cart",icon:ShoppingCartIcon,isRight:false,color:"text-slate-500"},
                    ],
                    menuCategoryItems: [
                      {id:1, name: "Hot Deals",icon:FireIcon,isRight:false,color:"text-primary"},
                      {id:2, name: "Home",icon:"",isRight:false,color:"text-slate-500"},
                      {id:3, name: "Food",icon:ChevronDownIcon,isRight:true,color:"text-slate-500"},
                      {id:4, name: "Vegetables",icon:ChevronDownIcon,isRight:true,color:"text-slate-500"},
                      {id:5, name: "Drink",icon:"",isRight:false,color:"text-slate-500"},
                      {id:6, name: "Cookies",icon:"",isRight:false,color:"text-slate-500"},
                      {id:7, name: "Meat & Seafood",icon:ChevronDownIcon,isRight:true,color:"text-slate-500"},
                      {id:8, name: "Bakery",icon:"",isRight:false,color:"text-slate-500"},
                    ]
    })
})