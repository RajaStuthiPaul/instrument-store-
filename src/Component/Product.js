import store from "./store";
import "./product.css";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  IconButton,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { AddOutlined } from "@material-ui/icons";
function Product(props) {
  const instrument = props.instrument;

  const addToCart = (item) => {
    store.dispatch({ type: "ADD_TO_CART", payload: { item: item } });
    console.log("book id :" + item.id + " is added to cart");
  };

  const addToFav = (item) => {
    store.dispatch({ type: "ADD_TO_FAV", payload: { item: item } });
    console.log("book id :" + item.id + " is added to favorites");
  };

  return (
    <div>
      <Card sx={{ width: 200, height: 275 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={instrument.link}
        />
        <CardContent sx={{ height: 150 }}>
          <Typography gutterBottom variant="body2" component="div">
            {instrument.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {instrument.price}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "20px",
            marginLeft: "60px",
          }}
        >
          <Button size="small" onClick={() => addToFav(instrument)}>
            fav
          </Button>
          <Button size="small" onClick={() => addToCart(instrument)}>
            Add To Cart
          </Button>
        </Box>
      </Card>
    </div>
  );
}

export default Product;
