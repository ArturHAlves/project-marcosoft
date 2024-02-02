import {
  chakra,
  VStack,
  Text,
  Container,
  Box,
  Button,
  Divider,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

const plansList = [
  {
    title: "GED Online",
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'
  },
  {
    title: " RH Online",
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque'
  },
];

const Holirite = () => {
  return (
    <Container maxW="5xl" p="6">
      <chakra.h2
        fontSize="5xl"
        color={"#228be6"}
        fontWeight="bold"
        textAlign="center"
        mb={5}
      >
        Holerite Online
      </chakra.h2>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} mt={4}>
        {plansList.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

interface PricingCardProps {
  title: string;
  description: string;
}

const PricingCard = ({
  title,
  description,
}: PricingCardProps) => {
  return (
    <Box
      minW={{ base: "xs", sm: "sm" }}
      border="1px solid"
      borderColor={useColorModeValue("gray.400", "gray.600")}
      rounded="md"
      marginInline="auto"
      my={3}
      _hover={{
        boxShadow: useColorModeValue(
          "0 4px 6px rgba(160, 174, 192, 0.6)",
          "0 4px 6px rgba(9, 17, 28, 0.4)"
        ),
      }}
    >
      <Box p={6}>
        <chakra.h2 fontSize="2xl" fontWeight="400">
          {title}
        </chakra.h2>
    
        <Button
          colorScheme="blue"
          variant="solid"
          size="md"
          rounded="md"
          w="100%"
          mt={4}
        >
          Acessar
        </Button>
      </Box>
      <Divider />
      <VStack p={6} spacing={4} alignItems="flex-start">
        <Text fontSize="lg" fontWeight="semibold">
          Descrição:
        </Text>
        <Text fontSize="sm" fontWeight="semibold">
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

export default Holirite;
