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
        </div>
    );
}

export default Blog;