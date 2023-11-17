import { useEffect, useState } from "react";
import './Fetch.css'

export const Fetch = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadProducts() {
            try {
                const res = await fetch('https://dummyjson.com/posts?limit=20');
                const data = await res.json();
                setProducts(data.posts)
            } catch (error) {
                console.error('Error fetch', error)
            }
        }
        loadProducts()
    }, [])

    return (
        <section>
            <h3>Task fetch</h3>
            <ol>
                {products.map(data => <li key={data.id}>{data.title}</li>)}
            </ol>
        </section>
    )
}
