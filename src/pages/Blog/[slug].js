// Trang bài viết
import { useParams } from "react-router-dom";
import { blogPosts } from "../../data/blogData";
import classNames from 'classnames/bind';
import styles from './slug.module.scss'

const cx = classNames.bind(styles)

export default function BlogDetail() {
    const { slug } = useParams();
    const post = blogPosts.find(post => post.slug === slug);

    if (!post) return <p>Bài viết không tồn tại.</p>;

    return (
        <div className={cx("blog-post")}>
            <div className={cx("blog-wrapper")}>
                <div className={cx("blog-type")}>
                    <div className={cx("blog-category")}>
                        <span>Category:</span>
                        <p>{post.category}</p>
                    </div>
                    <div className={cx("blog-category")}>
                        <span>Reading time:</span>
                        <p>{post.readingTime}</p>
                    </div>
                </div>
                <h1 className={cx("blog-header")}>{post.title}</h1>
                <div className={cx("blog-thumb-wrapper")}>
                    <img className={cx("blog-thumb")} src={post.image} alt={post.title} />
                </div>
                <p className={cx("blog-content")}>{post.content}</p>
            </div>
        </div>
    );
}
