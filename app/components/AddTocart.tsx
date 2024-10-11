'use client';
import { Product } from "../model/product.model";
import { add, remove } from "../store/cart/slice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function AddTocart({ product }: { product: Product }) {
    const dispatch = useAppDispatch();
    const quantityIncart = useAppSelector(state => state.cart.items.find(item => item.id === product.id)?.quantity ?? 0);

    const addTocart = (product: Product) => {
        dispatch(add(product));
    };

    const removeFromcart = (product: Product) => {

        dispatch(remove(product.id));
    };

    if (quantityIncart === 0) {
        return <button className="bg-yellow-900 w-full text-white py-2"
            onClick={() => addTocart(product)}>Add to cart</button>
    }

    if (quantityIncart > 0) {
        return <div className="flex justify-between items-center">
            <button className="bg-yellow-900 w-full text-white py-2"
                onClick={() => removeFromcart(product)}>-</button>

            <span className="text-2xl text-black px-5">{quantityIncart}</span>
            
            <button className="bg-yellow-900 w-full text-white py-2"
                onClick={() => addTocart(product)}>+</button>
        </div>
    }
}