'use client'
import Image from "next/image";
import styles from "./page.module.css";
import AdminLayout from "@/components/adminLayout";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CustomlistAlcohlCheckDataByCorpIdAndDate, ifAlcholCheckData } from "@/graphql/custom/queries/CustomlistAlcohlCheckDataByCorpIdAndDate";

export default function Home() {
  const [items, setItems] = useState<ifAlcholCheckData[]>();

  useEffect(() => {
    console.log("fetchData");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await CustomlistAlcohlCheckDataByCorpIdAndDate(1, '2024-01-01', '2024-01-31')

      setItems(data);
      console.log(data);
    } catch (err) {
      console.error('Error fetching data', err);
    }
  };

  return (
    <AdminLayout>
      <Flex>

      </Flex>
    </AdminLayout>
  );
}
