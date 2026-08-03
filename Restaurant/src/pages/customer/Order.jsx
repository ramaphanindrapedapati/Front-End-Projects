import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageTransition from "../../components/PageTransition";

import "./CustomerCss/Order.css";

function Order() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const email = localStorage.getItem("userEmail");

        const allOrders =
            JSON.parse(localStorage.getItem("orders")) || [];

        const customerOrders =
            allOrders.filter(order => order.email === email);

        setOrders(customerOrders);

    }, []);

    return (

        <PageTransition>

            <Navbar />

            <section className="orders-page">

                <div className="orders-container">

                    <h1 className="orders-title">

                        My Orders

                    </h1>

                    {

                        orders.length === 0 ?

                        (

                            <div className="empty-orders">

                                <h2>

                                    No Orders Yet 🍽️

                                </h2>

                                <p>

                                    Order your favourite food to see it here.

                                </p>

                            </div>

                        )

                        :

                        (

                            <div className="orders-list">

    {orders.map(order => (

        <div className="order-card" key={order.id}>

            <div className="order-header">

                <div>

                    <h2>Order #{order.id}</h2>

                    <p>{order.date}</p>

                </div>

                <span className="status">
                    {order.status}
                </span>

            </div>

            <div className="order-items">

                {order.items.map(item => (

                    <div className="order-item" key={item.id}>

                        <img
                            src={item.image}
                            alt={item.name}
                        />

                        <div className="item-info">

                            <h4>{item.name}</h4>

                            <p>Quantity : {item.quantity}</p>

                        </div>

                        <h4>
                            ₹{item.price * item.quantity}
                        </h4>

                    </div>

                ))}

            </div>

            <div className="order-footer">

                <h3>Total : ₹{order.total}</h3>

            </div>

        </div>

    ))}

</div>

                        )

                    }

                </div>

            </section>

            <Footer />

        </PageTransition>

    );

}

export default Order;