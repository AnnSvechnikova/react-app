import {Card} from "react-bootstrap";
import React, {useCallback, useEffect} from "react";
import './ChosenCard.css';
import {useDispatch, useSelector} from "react-redux";
import {deleteOrderAction} from "../../store/actions/orders";
import {getBooksAction} from "../../store/actions/books";
import {Link} from "react-router-dom";

const ChosenCard = ({order_id, book_id}) => {
    const {books, getBooksStatus}=useSelector((store)=>store.booksReducer)
    const {orders, deleteOrderStatus}= useSelector((store)=>store.ordersReducer)
    const dispatch =useDispatch();
    const OrderById = orders.find((ord)=>ord.order_id===Number(order_id))
    const BookCard = books.find((b)=>b.book_id===Number(book_id));
    const deleteCard =useCallback(()=>{
        console.log(order_id);
        dispatch(deleteOrderAction(order_id));
    },[deleteOrderStatus,dispatch])
    console.log(OrderById);
    if(BookCard){
    return <Card className="card">
        <Card.Body className="cardBody">
            <Card.Img className="cardImage" src={BookCard['picture']}/>
            <div className="book">
                <Link to={`/books/${book_id}/`} className= "link">{BookCard['title']}</Link>
            </div>
            <div  className="book">
                <Card.Text className="book">
                    {BookCard['price']} руб.
                    <button className="cardButton"  onClick={deleteCard}>-</button>
                </Card.Text>
            </div>
        </Card.Body>
    </Card>

    }
}

export default ChosenCard;