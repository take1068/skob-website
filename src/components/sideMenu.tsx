"use client"
import React from 'react';
import { Box, Stack, Link, Heading, Flex, Text, Icon } from '@chakra-ui/react';
import { FiHome, FiList } from 'react-icons/fi';
import NextLink from 'next/link';

interface MenuItemProps {
  icon: React.ElementType;
  href: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, href, label }) => {
  return (
    <NextLink href={href} passHref>
        <Flex align="center">
          <Icon as={icon} mr="3" />
          <Text>{label}</Text>
        </Flex>
    </NextLink>
  );
};

const SideMenu: React.FC = () => {
  return (
    <Box w="250px" p="5">
      <Stack spacing="3">
        <MenuItem icon={FiHome} href="/dashbord" label="ダッシュボード" />
        <MenuItem icon={FiList} href="/history" label="一覧" />
      </Stack>
    </Box>
  );
};

export default SideMenu;
