
import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import axios from "axios";

export const Home = () => {
  const [datosAPI, setDatosAPI] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5010/producto", {
        headers: {
          "Accept-version": "1.0.0",
        },
      })
      .then((response) => {
        setDatosAPI(response.data);
      });
  }, []);

  return (
    <div>
      {datosAPI.map((datos) => {
        return (
          <Card maxW="sm">
            <CardBody>
              <Image
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};
