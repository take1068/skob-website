'use client'
import Image from "next/image";
import styles from "./page.module.css";
import AdminLayout from "@/components/adminLayout";
import { Box } from "@chakra-ui/react";
import Calendar from "@/components/calendar";

export default function Home() {
  return (
    <AdminLayout>
      <Calendar />
      <Box>

      </Box>
    </AdminLayout>
  );
}
