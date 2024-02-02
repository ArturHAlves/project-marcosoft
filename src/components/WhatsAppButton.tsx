import { VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
// import { useRouter } from 'next/router';
import { SocialIcon } from 'react-social-icons';

export default function WhatsAppButton() {
//   const router = useRouter();

  return (
    <VStack
      zIndex="99999"
      position="fixed"
      bottom="2rem"
      right="1rem"
      h="50px"
      w="50px"
      spacing={0}
      alignItems="center"
      justifyContent="center"
      _hover={{ cursor: 'pointer' }}
    //   onClick={() =>
    //     router.push('https://web.whatsapp.com/send?phone=5561995524877')
    //   }
    >
      <motion.div
        animate={{
          scale: [0.9, 1, 0.9],
          boxShadow: [
            '0 0 0 0px 	rgba(27, 215, 65, 0.5)',
            '0 0 0 10px 	rgba(27, 215, 65, 0)',
            '0 0 0 0 	rgba(27, 215, 65, 0)',
          ],
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 3,
          delay: 2,
        }}
        style={{
          backgroundColor: '#1BD741',
          height: '50px',
          width: '50px',
          position: 'absolute',
          borderRadius: '50%',
        }}
      />

      <SocialIcon network="whatsapp" fgColor="white" color="white" href="#" />
    </VStack>
  );
}