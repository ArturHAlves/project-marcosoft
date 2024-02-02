import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

interface NavLinkProps {
  href: string;
  label: string;
}

const Links = [
  { href: "/sobre", label: "Inicio" },
  { href: "#howItWorks", label: "Sobre nós" },
  { href: "#plan", label: "Holerite" },
  { href: "/contato", label: "Contato" },
];

const NavLink = (props: NavLinkProps) => {
  const { href, label } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "gray.300",
      }}
      href={href}
    >
      {label}
    </Box>
  );
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        boxShadow={"md"}
        bg={"rgba(255, 255, 255, 0.8)"}
        px={8}
        position="fixed"
        top={0}
        left={0}
        width="100%"
        zIndex={999}
      >
        <Flex h={32} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image
                src="https://www.marcosoft.com.br/img/logop.png"
                alt="Logo"
                width={0}
                height={0}
                sizes="120px"
                style={{ height: "120px", width: "120px" }}
              />
            </Box>
            <HStack
              as={"nav"}
              fontSize={"large"}
              px={72}
              color={"#6191C3"}
              spacing={9}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href} label={link.label} />
              ))}
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
