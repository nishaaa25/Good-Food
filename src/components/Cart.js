import React from "react";
import EmptyLogo from "../assets/empty.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  clearItem,
  removeItem,
  deductItemPrice,
  sumItemPrice,
  increaseQuantity,
  decreaseQuantity,
} from "../utils/cartSlice";
import PaymentLogo from "../assets/payment.png";
import Card from "./Card";

const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items);
  const CartSum = useSelector((store) => store.cart.sum);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  const handleDltItem = (name, price) => {
    dispatch(removeItem(name));
    dispatch(deductItemPrice(price));
  };
  const increaseCount = (name, price) => {
    dispatch(increaseQuantity(name));
    dispatch(sumItemPrice(price));
  };
  const decreaseCount = (name, price) => {
    const item = CartItems.find((item) => item.name === name);

    if (item && item.quantity > 1) {
      dispatch(decreaseQuantity(name));
      dispatch(deductItemPrice(price));
    }
    // }
  };
  if (CartItems.length === 0)
    return (
      <Card
        imgUrl={EmptyLogo}
        text1="Your cart is empty"
        text2="You can go to home page to view more restaurants"
        label="SEE RESTAURANTS NEAR YOU"
      />
    );
  return (
    <div className="w-11/12 lg:w-9/12 m-auto my-10">
      <p className="text-sm mb-4 font-semibold text-gray-800">
        Home/<span>Cart</span>
      </p>
      <div className="flex flex-col lg:flex-row place-items-center lg:place-items-start gap-10 ">
        <div className="w-[100%] lg:w-[60%] p-2 pt-4 ">
          <div className="flex justify-between items-center font-bold text-2xl mb-2">
            <p>Your Cart</p>
            <p>{CartItems.length + "items"}</p>
          </div>
          <div>
            {CartItems &&
              CartItems.map((item) => {
                const { name, imageId, defaultPrice, price, quantity } = item;
                // const quantity = quantities[name] || 1;
                return (
                  <div className="flex " key={item.name}>
                    <div className="flex place-items-start gap-4 flex-1 my-1 p-2 relative">
                      <div>
                        <img
                          src={
                            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/" +
                            imageId
                          }
                          alt="food"
                          className="rounded-lg w-[136px] object-cover h-[110px]"
                        />
                      </div>

                      <div className="flex-1">
                        <p className="text-md font-semibold mt-1 text-gray-800 mb-1 w-11/12">
                          {name}
                        </p>
                        <p className="font-bold text-green-800">
                          ₹ {defaultPrice / 100 || price / 100}
                        </p>
                        <div class="counter flex place-items-center mt-6 w-[120px] cursor-pointer">
                          <span
                            class="down px-[10px] py-1 text-white bg-orange-400"
                            onClick={() => {
                              decreaseCount(
                                name,
                                defaultPrice / 100 || price / 100
                              );
                            }}
                          >
                            -
                          </span>
                          <input
                            type="text"
                            value={quantity}
                            readOnly
                            className="text-center py-1 w-[50px] bg-light-gray"
                          />
                          <span
                            class="up py-1 text-white px-[10px] bg-orange-400"
                            onClick={() => {
                              increaseCount(
                                name,
                                defaultPrice / 100 || price / 100
                              );
                            }}
                          >
                            +
                          </span>
                        </div>
                        <button
                          onClick={() =>
                            handleDltItem(
                              item.name,
                              (item.defaultPrice / 100) * quantity ||
                                (item.price / 100) * quantity
                            )
                          }
                          className="text-2xl absolute right-2 top-2 "
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="flex justify-between mt-4">
            <button
              className="bg-orange-400 text-white py-2 hover:bg-black px-4 rounded-sm"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <button className="bg-orange-400 hover:bg-black text-white py-2 px-4 rounded-sm">
              <Link to="/">Explore More Items</Link>
            </button>
          </div>
        </div>
        <div className="w-[80%] md:w-[60%] lg:w-[40%] border-2 px-8 border-black rounded-lg p-4">
          <h1 className="font-bold text-2xl mb-8">Order Summary</h1>
          <div>
            <div className="flex justify-between items-center pb-4">
              <p className="font-semibold">Sub-total</p>
              <p className="font-bold">₹ {CartSum.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center pb-4">
              <p className="font-semibold">Promo Code</p>
              <button className="px-2 py-1 bg-black text-white">FIR200</button>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-light-gray">
              <p className="font-semibold">Shipping</p>
              <p className="font-bold">₹ 49.00</p>
            </div>
            <div className="flex justify-between items-center pb-5 pt-4">
              <p className="font-bold text-lg">Total: </p>
              <p className="font-bold text-xl text-yellow">
                ₹ {(CartSum + 49.0).toFixed(2)}
              </p>
            </div>
            <Link to="/order">
              <button
                className="w-full bg-orange-400 text-white font-bold py-2 mb-10 rounded-sm hover:bg-black"
                onClick={handleClearCart}
              >
                PLACE ORDER
              </button>
            </Link>

            <p className="font-semibold text-sm">WE ACCEPT:</p>
            <img src={PaymentLogo} alt="payment" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
