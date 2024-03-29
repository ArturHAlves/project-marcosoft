import { Fragment } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const contactOptions = [
  {
    label: 'Endereço',
    value: 'Vila Ferreira Jorge - Campinas - SP',
    icon: GoLocation
  },
  {
    label: 'Telefone',
    value: ' (19) 3367-8784 / 3367-8789',
    icon: BsPhone
  },
  {
    label: 'E-mail',
    value: 'marcos@marcosoft.com.br',
    icon: HiOutlineMail
  }
];

const Contact = () => {
  return (
    <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
      <Stack spacing={10}>
        <Flex align="center" justifyContent="center" direction="column">
          <Heading fontSize="4xl" mb={2}>
            Entre em contato
          </Heading>
          <Text fontSize="md" textAlign="center">
          Entre em contato através do formulário abaixo
          </Text>
        </Flex>
        <Stack
          spacing={{ base: 6, md: 0 }}
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
        >
          {contactOptions.map((option, index) => (
            <Fragment key={index}>
              <Stack
                spacing={3}
                direction="column"
                justifyContent="center"
                alignItems="center"
                px={3}
              >
                <Icon as={option.icon} w={10} h={10} color="green.400" />
                <Text fontSize="lg" fontWeight="semibold">
                  {option.label}
                </Text>
                <Text fontSize="md" textAlign="center">
                  {option.value}
                </Text>
              </Stack>
              {contactOptions.length - 1 !== index && (
                <Flex display={{ base: 'none', md: 'flex' }}>
                  <Divider orientation="vertical" />
                </Flex>
              )}
            </Fragment>
          ))}
        </Stack>
        <VStack
          as="form"
          spacing={8}
          w="100%"
          bg={useColorModeValue('white', 'gray.700')}
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
        >
          <VStack spacing={4} w="100%">
            <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
              <FormControl id="name">
                <FormLabel>Nome</FormLabel>
                <Input type="text" placeholder="Digite o nome completo" rounded="md" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>E-mail</FormLabel>
                <Input type="email" placeholder="test@test.com" rounded="md" />
              </FormControl>
            </Stack>
            <FormControl id="subject">
              <FormLabel>Assunto</FormLabel>
              <Input type="text" placeholder="Informe qual o assunto" rounded="md" />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Mensagem</FormLabel>
              <Textarea size="lg" placeholder="Digite a sua mensagem" rounded="md" />
            </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
              bg="green.300"
              color="white"
              _hover={{
                bg: 'green.500'
              }}
              rounded="md"
              w={{ base: '100%', md: 'max-content' }}
            >
              Enviar mensagem
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Contact;