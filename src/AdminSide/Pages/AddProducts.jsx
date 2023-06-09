import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import NavAdmin from "../components/NavAdmin";
import {addProductFromAdmin} from "../Redux-Admin/action";



const initial = {
  image: "",
  title: "",
  price: 0,
  price_cut:0,
  offer:0 
};
const AddProducts = () => {
  const [formState, setFormState] = useState(initial);
  const dispatch = useDispatch();
  const toast = useToast();
  const positions = ["bottom-right"];
  
  console.log(formState);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProductFromAdmin(formState));
    setFormState(initial);
    toast({
      title: `Product Added Successfully`,
      position: positions,
      isClosable: true,
    });
  };
  return (
    <>
      <NavAdmin/>
      <Container
        maxW="container.md"
        border="1px"
        borderColor="gray.400"
        p={"20px"}
        mt={"70px"}
      >
        <Heading mb={"10px"}>Add Product Form</Heading>
        <FormControl>
          <FormLabel m={"10px"}>Image URL</FormLabel>
          <Input
            border="1px solid gray"
            type="text"
            value={formState.image}
            placeholder="image"
            size="md"
            name="image"
            onChange={handleChange}
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Title</FormLabel>
          <Input
            border="1px solid gray"
            type="text"
            value={formState.title}
            placeholder="title"
            size="md"
            name="title"
            onChange={handleChange}
            mb={"10px"}
          />
          <FormLabel m={"10px"}>Price</FormLabel>
          <Input
            border="1px solid gray"
            type="number"
            value={formState.price}
            placeholder="price"
            size="md"
            name="price"
            onChange={handleChange}
            mb={"10px"}
          />
           <FormLabel m={"10px"}>Price Cut</FormLabel>
          <Input
            border="1px solid gray"
            type="number"
            value={formState.price_cut}
            placeholder="price"
            size="md"
            name="price_cut"
            onChange={handleChange}
            mb={"10px"}
          />
           <FormLabel m={"10px"}>Offer</FormLabel>
          <Input
            border="1px solid gray"
            type="number"
            value={formState.offer}
            placeholder="price"
            size="md"
            name="offer"
            onChange={handleChange}
            mb={"10px"}
          />
          
          <Button
            onClick={handleSubmit}
            colorScheme="teal"
            variant="outline"
            size="md"
            mt={"20px"}
          >
            Add Product
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default AddProducts; 



