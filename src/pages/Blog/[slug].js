// Trang bài viết
import { useParams } from "react-router-dom";
import { blogPosts } from "../../data/blogData";

export default function BlogDetail() {
    const { slug } = useParams();
    const post = blogPosts.find(post => post.slug === slug);

    if (!post) return <p>Bài viết không tồn tại.</p>;

    return (
        <div>
        <h1>{post.title}</h1>
        <img src={post.image} alt={post.title} />
        <p>{post.content}</p>
        </div>
    );
}
