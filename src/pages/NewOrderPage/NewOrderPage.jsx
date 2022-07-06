import "./NewOrderPage.css"
import "../../Components/CategoryList/CategoryList"
import Categories from '../../Components/CategoryList/CategoryList'
import { useState } from "react";

export default function NewOrderPage() {
    const [category, setCategory] = useState(Categories);

    function filterFood(item) {
        const result = Categories.filter((value) => {
            return value.category === item;
        })
        setCategory(result)
    }

    function handleClick({category}) {
        alert('Added To Order')
    }
  return (
        <>
            <main className="menu-container">
                <h1 className="menu-title">NEW ORDER</h1>
                <div className="order-category-button-container">
                    <button className="order-category-button" onClick={() => filterFood("Appetizers")}>APPETIZERS</button>
                    <button className="order-category-button" onClick={() => filterFood("Salads")}>SALADS</button>
                    <button className="order-category-button" onClick={() => filterFood("Burgers")}>BURGERS</button>
                    <button className="order-category-button" onClick={() => filterFood("Kids")}>KIDS</button>
                    <button className="order-category-button" onClick={() => filterFood("Desserts")}>DESSERTS</button>
                    <button className="order-category-button" onClick={() => filterFood("Drinks")}>DRINKS</button>
                </div>
                {/* className="menu-appetizers-container" */}
                <section>
                {/* className="menu-category-images-appetizer" */}
                    <div className="menu-body-container">
                        {category.map((keys) => {
                            const {id, name, price, image} = keys
                            return (
                                <>
                                    <div id="order-body" className="menu-body" key={id}>
                                        <h3 className="order-body-titles">{name}</h3>
                                        <div className="add-order-container">
                                            <p>${price}.00</p>
                                            <button className="order-add-button" onClick={handleClick}>ADD</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        
                    </div>
                </section>
            </main>
        </>
    );
}
