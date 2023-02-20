import React, { useEffect, useRef, useState } from "react";
import { Badge, Button, Modal, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "../axios";
import Loading from "./Loading";
import Pagination from "./Pagination";
import html2canvas from "html2canvas";

function OrdersAdminPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const products = useSelector((state) => state.products);
    const [orderToShow, setOrderToShow] = useState([]);
    const [show, setShow] = useState(false);
    const ep = useRef(null)

    const handleClose = () => setShow(false);

    const exportAsImage = async (element, imageFileName) => {
        const canvas = await html2canvas(element);
        const image = canvas.toDataURL("image/png", 1.0);
        // download the image
        downloadImage(image, imageFileName);
    };


    const downloadImage = (blob, fileName) => {
        const fakeLink = window.document.createElement("a");
        fakeLink.style = "display:none;";
        fakeLink.download = fileName;

        fakeLink.href = blob;

        document.body.appendChild(fakeLink);
        fakeLink.click();
        document.body.removeChild(fakeLink);

        fakeLink.remove();
    };

    function markShipped(orderId, ownerId) {
        axios
            .patch(`/orders/${orderId}/mark-shipped`, { ownerId })
            .then(({ data }) => setOrders(data))
            .catch((e) => console.log(e));
    }

    function showOrder(order) {
        const productsObj = order.products
        console.log("kjksfjsk", order);
        let productsToShow = products.filter((product) => productsObj[product._id]);
        productsToShow = productsToShow.map((product) => {
            const productCopy = { ...product };
            productCopy.count = productsObj[product._id];
            delete productCopy.description;
            return productCopy;
        });
        console.log({productsToShow});
        setShow(true);
        setOrderToShow({order: order, products: productsToShow});
    }

    useEffect(() => {
        setLoading(true);
        axios
            .get("/orders")
            .then(({ data }) => {
                setLoading(false);
                setOrders(data);
            })
            .catch((e) => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (orders.length === 0) {
        return <h1 className="text-center pt-4">No orders yet</h1>;
    }

    function TableRow({ _id, count, owner, total, status, products, address }) {
        return (
            <tr>
                <td>{_id}</td>
                <td>{owner?.name}</td>
                <td>{count}</td>
                <td>{total}</td>
                <td>{address}</td>
                <td>
                    {status === "processing" ? (
                        <Button size="sm" onClick={() => markShipped(_id, owner?._id)}>
                            Mark as shipped
                        </Button>
                    ) : (
                        <Badge bg="success">Shipped</Badge>
                    )}
                </td>
                <td>
                    <span style={{ cursor: "pointer" }} onClick={() => showOrder({userName: owner?.name, address, products})}>
                        View order <i className="fa fa-eye"></i>
                    </span>
                </td>
            </tr>
        );
    }



    return (
        <>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Client Name</th>
                        <th>Items</th>
                        <th>Order Total</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <Pagination data={orders} RenderComponent={TableRow} pageLimit={1} dataLimit={10} tablePagination={true} />
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Order details</Modal.Title>
                </Modal.Header>
                <div ref={ep}>
                    {orderToShow?.products?.map((order) => (
                        <div className="order-details__container d-flex justify-content-around py-2">
                            <img src={order.pictures[0].url} style={{ maxWidth: 100, height: 100, objectFit: "cover" }} />
                            <p>
                                <span>{order.count} x </span> {order.name}
                            </p>
                            <p>Price: ${Number(order.price) * order.count}</p>
                        </div>
                    ))}
                    <p className="order-details__container d-flex justify-content-around py-2">Address: {orderToShow?.order?.address}</p>
                    <p className="order-details__container d-flex justify-content-around py-2">Client name: {orderToShow?.order?.userName}</p>
                </div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={() => exportAsImage(ep.current, "test")}>
                        Export
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default OrdersAdminPage;