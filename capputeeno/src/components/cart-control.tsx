import  styled  from "styled-components";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0 5px;
    font-size: 10px;

    background-color: var(--delete-color);
    color: white;

    margin-left: -10px;
`

const Container = styled.div`
    position: relative;
`

export function CartControl() {
    const { value } = useLocalStorage('cart-items', []);

    const cartItemCount = value && value.length ? value.length : 0;

    return (
        <Container>
            <CartIcon />
            {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
        </Container>
    );
}