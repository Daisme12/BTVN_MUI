import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    if (!product) return <p>Đang tải...</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width="200" />
            <p><b>Giá:</b> ${product.price}</p>
            <p><b>Mô tả:</b> {product.description}</p>
            <p><b>Danh mục:</b> {product.category}</p>
            <Link
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 20px",
                    backgroundColor: "#000000",
                    outline: "none"
                }}
                to={`/home`}>Về trang chủ</Link>
        </div>
    );
}