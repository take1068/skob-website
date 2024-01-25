"use client";
import NextLink from 'next/link';
import {
  Flex,
  Box,
  Button,
  Divider,
  HStack,
  VStack,
  Text,
  Link,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { MdOutlineFileUpload, MdSettings, MdLogout } from "react-icons/md";
import { FiHome, FiList } from 'react-icons/fi';
import SideMenu from '@/components/sideMenu';
import Calendar from '@/components/calendar';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import config from '@/amplifyconfiguration.json';

Amplify.configure(config);

interface MenuItemProps {
  icon: React.ElementType;
  href: string;
  label: string;
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HStack
      maxW={"100%"}
      alignItems="center"
      justifyContent={"flex-start"}
      position="fixed"
      top={"50px"}
      left={0}
      zIndex={901}
    >
      <VStack
        minH={"100vh"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        borderRight={"1px"}
        borderColor={"gray.100"}
        boxShadow={"md"}
      >
        {/* <Box
          mt={6}
          ml={4}
          mr={10}
          mb={4}
          fontFamily={"Ubuntu"}
          fontWeight={"bold"}
          textAlign={"center"}
          textColor={"blue.900"}
        >
          <Text fontSize={"14px"} lineHeight={"0.3"}>
            Physical Checkup
          </Text>
          <Text fontSize={"60px"}>SKOB</Text>
          <Text fontSize={"14px"} lineHeight={"0.5"}>
            Appointment
          </Text>
        </Box>
        <Divider /> */}
        <SideMenu />
      </VStack>
      <VStack minW={"70%"} minH={"100vh"} alignItems={"flex-start"}>
        {children}
      </VStack>
    </HStack>
  );
}
