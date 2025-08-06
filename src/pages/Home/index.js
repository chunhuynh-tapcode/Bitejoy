import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from 'react';
import { useCart } from "../../context/CartContext";
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

const categories = ["BURGERS", "SIDES", "DESSERTS"];

function Home() {
    // MENU
    const [activeCategory, setActiveCategory] = useState("BURGERS");
    
    const menuList = [
        { 
            id: 1,
            name: "Lamb Burger", 
            image: "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8818/678b0c0393efc5b8320e890a_classic-hamburger-filled-p-500.png",
            price: "9.90",
            category: "BURGERS"
        },
        { 
            id: 2,
            name: "Beef Burger", 
            image: "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8818/678b0c0393efc5b8320e890c_hamburger-with-tomato-lettuce-leaf-beef-patties-burger-buns-p-500.png",
            price: "8.90",
            category: "BURGERS"
        },
        { 
            id: 3,
            name: "Bacon Burger", 
            image: "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8818/678b0c0393efc5b8320e890d_appetizing-hamburger-blue-background-p-500.png",
            price: "7.90",
            category: "BURGERS"
        },
        { 
            id: 4,
            name: "Vegan Burger", 
            image: "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8818/678b0c0393efc5b8320e88db_high-angle-delicious-burger-fries-p-500.png",
            price: "9.50",
            category: "BURGERS"
        },
        { 
            id: 5,
            name: "Classic Burger", 
            image: "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8818/678b0c0393efc5b8320e88d9_classic-beef-burger-ready-be-served-p-500.png",
            price: "8.50",
            category: "BURGERS"
        },
        { 
            id: 6,
            name: "Chicken Burger", 
            image: "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8818/678b0c0393efc5b8320e88d9_classic-beef-burger-ready-be-served-p-500.png",
            price: "9.90",
            category: "BURGERS"
        },

        { 
            id: 7,
            name: "Nuggets & Fries", 
            image: "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8818/678b0c0393efc5b8320e8900_chicken-nuggets-french-fries-red-p-500.png",
            price: "7.50",
            category: "SIDES"
        },
        { 
            id: 8,
            name: "Fries Cone", 
            image: "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8818/678b0c0393efc5b8320e88fe_fries-cone-yellow-background-p-500.png",
            price: "6.50",
            category: "SIDES"
        },
        { 
            id: 9,
            name: "Onion Rings", 
            image: "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8818/678b0c0393efc5b8320e88ef_onion-rings-blue-box-p-500.png",
            price: "5.00",
            category: "SIDES"
        },
        { 
            id: 10,
            name: "Ice Cream", 
            image: "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8818/678b0c0393efc5b8320e8907_zach-camp-3D0HUHFcRrk-unsplash-p-500.png",
            price: "2.50",
            category: "DESSERTS"
        },
        { 
            id: 11,
            name: "Chocolate Donuts", 
            image: "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8818/678b0c0393efc5b8320e8905_top-view-arrangement-with-doughnuts-blue-background-p-500.png",
            price: "4.50",
            category: "DESSERTS"
        },
        { 
            id: 12,
            name: "Strawberry Cake", 
            image: "https://cdn.prod.website-files.com/678b0c0393efc5b8320e8818/678b0c0393efc5b8320e8904_pink-strawberry-cake-portion-pink-background-p-500.png",
            price: "3.90",
            category: "DESSERTS"
        }
    ];
    const filteredMenu = menuList.filter(item => item.category === activeCategory);
    
    // ADDTOCART
    const { addToCart } = useCart();

    // REVIEWS
    const reviews = [
        {
            name: "Sarah Martinez",
            title: "College Student",
            review: "Bitejoy has completely transformed my burger experience! The flavors are out of this world, and the quality is unmatched. Every bite is a delight!",
            image: 'https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/6790ef785946478c33510cf2_client-01-p-500.webp',
        },
        {
            name: 'Jason Williams',
            title: 'Software Engineer',
            review: 'Best burger I have had in Vietnam period.  My wife (picky eater) loved her fish burger and I threw down the double cheese burger. The fries were top notch as well. We will be back..',
            image: 'https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/6790ef7870efdff65372f735_client-03-p-500.webp',
        },
        {
            name: 'Rachel Kim',
            title: 'Yoga Instructor',
            review: "Experience delicious food at the highest level in Vietnam. Only rumored and not visited places on this occasion. Fresh as a burger bar. Delicious, Patti and direct production. The pork and beef ratio is perfect. Delicious food. Oh, the nuggets are smaller than the ordinary nuggets, and the wings are cousins. Vietnamese spices come in, and the scent is not very good, and the liver is strong.",
            image: 'https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/6790ef78daae8918c14dab12_client-02-p-500.webp',
        },
        {
            name: 'Emily Carter',
            title: 'Photographer',
            review:"I had a blue cheese burger. It was a bit salty, but the bread was good and delicious. I don't like burgers, but I was satisfied.My child ate the chicken wings and it was delicious. It tasted like Kyochon, but it was less salty and more delicious than the honey combo. Above all, there was something to eat.",
            image: 'https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/6790ef78954b3d8638ce983b_client-04-p-500.webp',
        },
    ];
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={cx("Home")}>
            <div className={cx("hero")}>
                <h1 className={cx("header")}>
                    <span className={cx("title")}>SAVOR EVERY</span>
                    <div className={cx("title-wrapper")}>
                        <span className={cx("title")}>DELICIOUS</span>
                        <span className={cx("title-bite")}>Bite</span>
                    </div>
                </h1>

                <div className={cx("marquee-wrapper")}>
                    <div className={cx("marquee-list")}>
                        <img src={cx("https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e8848_Frame%201.webp")} alt={"Burger"} className={cx("marquee-image")}/>
                        <img src={cx("https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e8843_Frame%2010.webp")} alt={"Burger"} className={cx("marquee-image")}/>
                        <img src={cx("https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e8844_Frame%203.webp")} alt={"Burger"} className={cx("marquee-image")}/>
                        <img src={cx("https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e884a_Frame%206.webp")} alt={"Burger"} className={cx("marquee-image")}/>
                        <img src={cx("https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e884d_Frame%208.webp")} alt={"Burger"} className={cx("marquee-image")}/>
                        <img src={cx("https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e884b_Frame%2011.webp")} alt={"Burger"} className={cx("marquee-image")}/>
                        <img src={cx("https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e8846_Frame%205.webp")} alt={"Burger"} className={cx("marquee-image")}/>
                        <img src={cx("https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e884c_Frame%207.webp")} alt={"Burger"} className={cx("marquee-image")}/>
                        <img src={cx("https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678b0c0393efc5b8320e8845_Frame%202.webp")} alt={"Burger"} className={cx("marquee-image")}/>
                    </div>
                </div>
            </div>

            <div className={cx("menu")}>
                <div className={cx("menu-wrapper")}>
                    <h2 className={cx("menu-header")}>
                        <span className={cx("menu-title")}>OUR TASTY</span>
                        <span className={cx("menu-title-highlight")}>Menu</span>
                    </h2>

                    <div className={cx("menu-items")}>
                        {categories.map((cat, index) => (
                            <div 
                                key={index} 
                                className={cx("menu-item", { active: activeCategory === cat})} 
                                onClick={() => setActiveCategory(cat)}
                            >
                                <p>{cat}</p>
                            </div>
                        ))}
                    </div>

                    <div className={cx("food-items")}>
                        {filteredMenu.map((item, index) => (
                            <div key={index} className={cx("food-item")}>
                                <div className={cx("food-item-img-wrapper")}>
                                    <img src={item.image} alt={item.name} className={cx("food-item-image")} />
                                    <div className={cx("price")}>${item.price}</div>
                                    <div 
                                        title='Add to your cart' 
                                        className={cx("add-to-cart")} 
                                        onClick={() => {
                                            addToCart(item);
                                                toast.success("Your order has added to cart!", {
                                                position: "top-right",
                                                autoClose: 2000,
                                                closeOnClick: true,
                                                pauseOnHover: false,
                                                draggable: false,
                                                style: {
                                                    background: "#fff",
                                                    color: "#000",
                                                    fontSize: "1.2rem",
                                                    border: "4px solid #000",
                                                    padding: "24px", 
                                                    fontFamily: "Outfit"
                                                }
                                            });
                                        }}
                                        >
                                        <FontAwesomeIcon className={cx('icon')} icon={faCartShopping} />
                                    </div>
                                </div>
                                <div className={cx("food-item-name")}>{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={cx("reviews")}>
                <div className={cx("reviews-wrapper")}>
                    <h2 className={cx("reviews-header")}>
                        <span className={cx("reviews-title")}>TASTY REVIEWS</span>
                        <div className={cx("title-wrapper")}>
                            <span className={cx("reviews-title")}>FROM</span>
                            <span className={cx("reviews-title-highlight")}>Fans</span>
                        </div>
                    </h2>

                     <div>
                        {/* Review content */}
                        <div className={cx('author-review-item')}>
                            {reviews.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx('author-review', {
                                    active: index === activeIndex,
                                    hidden: index !== activeIndex,
                                    })}
                                >
                                    <div className={cx('star-wrapper')}>
                                        {[...Array(5)].map((_, i) => (
                                            <FontAwesomeIcon key={i} className={cx('icon')} icon={faStar} />
                                        ))}
                                    </div>

                                    <div className={cx('review')}>
                                        <p className={cx('review-text')}>"{item.review}"</p>
                                    </div>

                                    <div className={cx('author-info')}>
                                        <p>{item.name}</p>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Avatar list */}
                        <div className={cx('author-avatar-lists')}>
                            {reviews.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx('author-avatar', {
                                    active: index === activeIndex,
                                    })}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <img
                                    src={item.image}
                                    alt={`Author${index + 1}`}
                                    className={cx('author-image')}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx("core-values")}>
                <div className={cx("core-values-wrapper")}>
                    <img src={cx("https://cdn.prod.website-files.com/678b0c0393efc5b8320e8808/678d0e09d862a1b5bb213ea9_Frame%2023.webp")} alt={"Core Values"} className={cx("core-values-image")} />
                    <div className={cx("core-values-content")}>
                        <h2 className={cx("core-values-header")}>
                            <div className={cx("core-values-title")}><span>MADE WITH</span></div>
                            <div className={cx("title-wrapper")}>
                                <span className={cx("core-values-title")}>LOVE</span>
                                <span className={cx("core-values-title-highlight")}>Daily</span>
                            </div>
                        </h2>

                        <div className={cx("core-values-description")}>
                            <p>We believe that great food brings people together. Since day one, our mission has been to serve up delicious, fresh, and satisfying meals that put a smile on your face.</p>
                            <p>We’re proud to be a fast food destination where convenience meets taste, perfect for those who crave something quick without compromising on quality.</p>
                            <div className={cx("abt-us-btn")}>
                                <a href="/about" className={cx("btn-link")}>
                                    ABOUT US
                                    <div className={cx("btn-arrow")}>
                                        <FontAwesomeIcon className={cx('icon-arrow')} icon={faArrowRight} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Home;