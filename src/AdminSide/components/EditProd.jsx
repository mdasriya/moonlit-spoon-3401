import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    FormControl,
    FormLabel,
    Box,
    Flex,
  } from "@chakra-ui/react";
  import axios from "axios";
  // import { handleDelete, handleEdit } from '../Redux-Admin/action'
  import { useState } from "react";
  
  export default function EditProd({ item }) {
    const [prodData, setProdData] = useState({
      name: item.name,
      price: item.price,
      image: item.image,
      price_cut: item.price_cut,
      offer: item.offer  
    });
  
    const {
     name,
     price,
     image,
     price_cut,
     offer 
    } = prodData;
    //   console.log(prodData)
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    // const [categoryState, setCategoryState]= useState(category);
    // const [lamb, setLamb] = useState("");
  
    const handleEdit = async (e) => {
      e.preventDefault();
  
      try {
        let url = `https://powerful-blue-smock.cyclic.app/gym_products/${item.id}`;        
        let res = await axios.patch(url, prodData);
        let data= res.data 
        console.log(data);

        // console.log(url);
        // reload();
        // console.log(res.data);
        // console.log(prodData);
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleChange = (e) => {
      const { value, name } = e.target;
      if (name === "image") {
        setProdData({ ...prodData, [name]: [value] });
      } else {
        setProdData({ ...prodData, [name]: value });
      }
    };
    // console.log(prodData);
  
    //   console.log(prodData);
  
    return (
      <div>
        <Button onClick={onOpen} backgroundColor={"green"} color={"white"}>
          Edit
        </Button>
  
        <Modal
          closeOnOverlayClick={false}
          isOpen={isOpen}
          onClose={onClose}
          size="3xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit product</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form>
                <FormControl>
                  <FormLabel>Image URL</FormLabel>
                  <Input
                    type={"url"}
                    name="image"
                    isRequired
                    value={image}
                    onChange={handleChange}
                  />
                </FormControl>
  
                <FormControl>
                  <Flex justifyContent={"space-around"} gap="4">
                    <Box width={"full"}>
                      <FormLabel>Name</FormLabel>
                      <Input
                        value={name}
                        isRequired
                        name="name"
                        onChange={handleChange}
                      />
                    </Box>
                    <Box width={"full"}>
                      <FormLabel>Price</FormLabel>
                      <Input
                        value={price}
                        isRequired
                        name="price"
                        onChange={handleChange}
                      />
                    </Box>
                  </Flex>
                </FormControl>
  
                <FormControl>
                  <FormLabel>Price Cut</FormLabel>
                  <Input
                    value={price_cut}
                    name="price_cut"
                    isRequired
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl>
                  <Flex justifyContent={"space-around"} gap="4">
                    <Box width={"full"}>
                      <FormLabel>Offer</FormLabel>
                      <Input
                        name="offer"
                        type={"number"}
                        isRequired
                        value={offer}
                        onChange={handleChange}
                      />
                    </Box>
                  </Flex>
                </FormControl>
        
                <Button
                  type="submit"
                  colorScheme="blue"
                  mr={3}
                  // value={item.id}
                  onClick={(e) => {
                    handleEdit(e)
                    onClose();
                  }}
                  marginTop="2rem"
                  width="full"
                >
                  Edit
                </Button>
              </form>
            </ModalBody>
  
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    );
  }
  