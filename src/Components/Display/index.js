import { Button } from "@material-ui/core";
import { toast } from "react-toastify";
import "./styles.css";

const Display = ({ products, setProducts, cart, setCart }) => {
  const totalPrice = cart.reduce((acc, item) => {
    let output = acc + Number(item.price);
    return Math.round(output * 100) / 100;
  }, 0);

  const discount = cart.reduce((acc, item) => {
    let output = acc + Number(item.discount);
    return Math.round(output * 100) / 100;
  }, 0);

  const handleClick = (code) => {
    const removeItem = products.filter((prd) => code !== prd.code);
    setProducts(removeItem);
  };

  const addToCartClick = (code) => {
    const addProduct = products.find((prd) => code === prd.code);
    setCart([...cart, addProduct]);
    toast.success(`${addProduct.name} foi adicionado ao carrinho`);
  };

  return (
    <div className="displayContainer">
      <div>
        <h2>CARRINHO DE COMPRAS</h2>
        <h3>Preço total da compra: R${totalPrice}</h3>
        <h4>Desconto total obtido: R${discount}</h4>
      </div>

      <ul className="displayBox">
        {products.map((prd, index) => {
          return (
            <li key={index}>
              <h2>Código: {prd.code}</h2>
              <h2>{prd.name}</h2>
              <h2>{prd.description}</h2>
              <h2>Preço: R${prd.price}</h2>
              <h2>Desconto: R${prd.discount}</h2>
              <Button variant="contained" onClick={() => handleClick(prd.code)}>
                Remover
              </Button>
              <Button
                variant="outlined"
                onClick={() => addToCartClick(prd.code)}
              >
                Adicionar ao carrinho
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Display;
