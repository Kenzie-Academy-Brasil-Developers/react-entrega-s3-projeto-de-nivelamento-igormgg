import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import "./styles.css";

const Form = ({ products, setProducts }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setProducts([...products, data]);
  };

  return (
    <form className="formBox" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("code")}
        placeholder="código"
        type="number"
        size="small"
      />
      <TextField {...register("name")} placeholder="nome" size="small" />
      <TextField
        {...register("description")}
        placeholder="descrição"
        size="small"
      />
      <TextField
        {...register("price")}
        placeholder="preço"
        type="number"
        size="small"
      />
      <TextField
        {...register("discount")}
        placeholder="desconto"
        type="number"
        size="small"
      />
      <Button variant="contained" type="submit">
        Cadastrar produto
      </Button>
    </form>
  );
};

export default Form;
