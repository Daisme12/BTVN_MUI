import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "./Header";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
    <Header />
    <div
      style={{ margin:" 0px 150px"}}
    >
      <Box sx={{ width: "100%", p: 2 }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((p) => (
          <Grid item xs={6} sm={4} md={3} key={p.id}>
            <Item>
              <img
                src={p.image}
                alt={p.title}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />
              <p
                style={{
                  width: "100px",
                  whiteSpace: "nowrap",   
                  overflow: "hidden",     
                }}>{p.title}
              </p>
              <Link to={`/product/${p.id}`}>Xem chi tiết</Link>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
    </div>
  );
}
