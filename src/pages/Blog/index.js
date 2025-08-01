// Trang hiển thị tất cả bài viết

import { blogPosts } from "../../data/blogData";
import { Link } from "react-router-dom";
import styles from "./Blog.module.scss";


function Blog() {
    return ( 
         <div className={styles.blogPage}>
            <h1>Our Blog</h1>
            <div className={styles.blogGrid}>
                {blogPosts.map(post => (
                <Link key={post.id} to={`/blog/${post.slug}`} className={styles.card}>
                    <img src={post.image} alt={post.title} />
                    <div>
                        <span>{post.category}</span>
                        <h3>{post.title}</h3>
                        <p>Reading Time: {post.readingTime}</p>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    );
}

export default Blog;