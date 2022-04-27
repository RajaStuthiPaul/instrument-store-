import axios from "axios";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

const Status = ({ username }) => {
  const [orders, setOrders] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://morning-reaches-59384.herokuapp.com/search/users?username=${username}`
        )
        .then((res) => {
          setOrders(res.data.orders);
          console.log("Your orders retrieved successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [username]);

 
 

  const returnBooks = (item) => {
    const order = {
      date: item.date,
      username: username,
      return: true,
      bookId: item.bookId,
    };
    axios
      .patch(`https://morning-reaches-59384.herokuapp.com/users/${item._id}`, order)
      .then((res) => {
        setOrders(orders.filter((i) => i._id !== item._id));
        console.log("Book " + item.bookId + " returned successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <NavBar />
      {orders.map((order, i) => (
        <div key={i}>
          <h4>Book</h4>
          <p>
            {order.instrument.name} {order.book.author}
          </p>
          <p>
            {order.book.ISBN} {order.book.publication}
          </p>
          <button onClick={() => returnBooks(order)}>Return Book</button>
        
          
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.loginReducer.user.username,
  };
};

export default connect(mapStateToProps)(Status);
