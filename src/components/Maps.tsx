import { chakra, Container, Image, Flex } from "@chakra-ui/react";
import { BiWorld } from "react-icons/bi";

export default function Maps() {
  return (
    <Container maxW="5xl" p="6">
      <Flex align="center" justify="center" direction="row" mb={5}>
        <chakra.h2
          fontSize="5xl"
          color={"#228be6"}
          fontWeight="bold"
          textAlign="center"
          display="inline-flex"
        >
          Localização
          <BiWorld size="70px" />
        </chakra.h2>
      </Flex>
      <Image
        boxShadow="lg"
        w="100%"
        h="100%"
        minW={{ base: "auto", md: "30rem" }}
        maxH="20rem"
        objectFit="cover"
        src={'/images/maps.png'}
        rounded="md"
      />
    </Container>
  );
}
