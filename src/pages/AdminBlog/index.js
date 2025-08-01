// Trang quản trị bài viết

import { useState } from "react";

export default function AdminBlog() {
  const [post, setPost] = useState({
    title: "", slug: "", image: "", content: "", category: "", readingTime: ""
  });

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const current = JSON.parse(localStorage.getItem("posts") || "[]");
    localStorage.setItem("posts", JSON.stringify([...current, post]));
    alert("Đăng bài thành công");
  };

  return (
    <div>
      <h2>Viết bài Blog</h2>
      <input name="title" placeholder="Tiêu đề" onChange={handleChange} />
      <input name="slug" placeholder="Slug (không dấu)" onChange={handleChange} />
      <input name="image" placeholder="Link ảnh" onChange={handleChange} />
      <input name="category" placeholder="Chủ đề" onChange={handleChange} />
      <input name="readingTime" placeholder="Thời gian đọc" onChange={handleChange} />
      <textarea name="content" placeholder="Nội dung" onChange={handleChange}></textarea>
      <button onClick={handleSubmit}>Đăng bài</button>
    </div>
  );
}