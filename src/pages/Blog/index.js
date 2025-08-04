// Trang hiển thị tất cả bài viết

import { blogPosts } from "../../data/blogData";
import { Link } from "react-router-dom";
import styles from "./Blog.module.scss";
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function Blog() {
    return ( 
         <div className={cx("blogPage")}>
            <div className={cx("blog-wrapper")}>
                <h1 className={cx("blog-header")}>
                    <span className={cx("blog-title")}>OUR</span>
                    <span className={cx("blog-title-highlight")}>Blog</span>
                </h1>
                <div className={cx("blog-container")}>
                    <div className={cx("blog-grid")}>
                        {blogPosts.map(post => (
                            <Link key={post.id} to={`/blog/${post.slug}`} className={cx("card")}>
                                <div className={cx("blog-img-wrapper")}>
                                    <img className={cx("blog-img")} src={post.image} alt={post.title} />
                                </div>
                                <span className={cx("blog-category")}>
                                    <p>{post.category}</p>
                                </span>
                                <div className={cx("blog-name-wrapper")}>
                                    <h3>{post.title}</h3>
                                    <p>Reading Time: {post.readingTime}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className={cx("subscribe-wrapper")}>
                <h2 className={cx("subscribe-header")}>
                    <span className={cx("subscribe-title")}>SUBSCRIBE TO OUR</span>
                    <span className={cx("subscribe-title-highlight")}>Newsletter</span>
                </h2>

                <div className={cx("subscribe-form")}>
                    <input type="text" placeholder="Name" className={cx("input")} />
                    <input type="email" placeholder="Email Address" className={cx("input")} />
                    <div className={cx("send-btn")}>
                        <button id={cx("send")} className={cx("send")}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;