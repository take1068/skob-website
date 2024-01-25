'use client'
import NextLink from 'next/link';
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import {
  Box,
  VStack,
  HStack,
  Flex,
  Spacer,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import SignUpDialog from "@/components/signUp";
import SignInDialog from './signIn';

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();
  return (
    <Flex
      h="45px"
      w="full"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="lg"
      position="fixed"
      top={0}
      left={0}
      zIndex={900}
      style={{ background: "var(--secondary-glow)" }}
    >
      <Box p={4}>
        <Text
          fontFamily="Ubuntu"
          color="gray.600"
          fontSize="lg"
          fontWeight="bold"
        >
          SKOB
        </Text>
      </Box>
      <Flex mr={4} alignItems="center">
        <Button colorScheme="teal" variant="ghost" mr={2} onClick={onOpen}>
          Sign Up
        </Button>
        <Button colorScheme="teal" size="sm" variant="outline" onClick={onLoginOpen}>
          Login
        </Button>
      </Flex>
      <SignUpDialog isOpen={isOpen} onClose={onClose} />
      <SignInDialog isOpen={isLoginOpen} onClose={onLoginClose} />
    </Flex>
  );
}
