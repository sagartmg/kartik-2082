import React, { useEffect, useState } from "react";
import api from "../api/axios";
import cartApi, { getCartItems } from "../api/cart.api";

interface CartItem {
  id: number;
  quantity: number;
  product: {
    title: string;
    price: number;
    stock: number;
  };
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const fetchCartIems = () => {
    cartApi
      .get()
      .then((res) => {
        // res.data.data;
        setCartItems(res.data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    // way 1
    // api
    //   .get("/carts")
    //   .then((res) => {})
    //   .catch((err) => {});
    // way 2
    // getCartItems.then()
    // way 3
    fetchCartIems();
  }, []);

  const updateCartItemCount = (id: number, quantity: number) => {
    console.log(id);
    console.log(quantity);
    cartApi.update(id, quantity).then((res) => {
      fetchCartIems();
    });
  };

  const deleteCartIem = (id: number) => {
      cartApi.delete(id).then((res) => {
      fetchCartIems();
    });
  };

  return (
    <div className="container">
      <div>user spseicf cart itsm..</div>
      <br />
      <br />
      <br />
      <br />
      <ul className="flex flex-col gap-5">
        {cartItems.map((el) => {
          return (
            <li className="flex gap-4 border border-gray-200 p-4 shadow">
              <div className="flex grow justify-between">
                <div>
                  <p> titel: {el.product.title}</p>
                  <p>stock: {el.product.stock}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      updateCartItemCount(el.id, --el.quantity);
                    }}
                    className="border p-3"
                  >
                    -
                  </button>
                  <span>{el.quantity}</span>
                  <button
                    onClick={() => {
                      updateCartItemCount(el.id, ++el.quantity);
                    }}
                    className="border p-3"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => {
                  deleteCartIem(el.id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>

      <button>Proceed to checkout </button>
    </div>
  );
}
