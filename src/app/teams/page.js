"use client";
import { Container, Box } from '@chakra-ui/react'



import { getUsers } from '../api/users';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Team() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const params = { results: 9 };
    const response = await getUsers(params);
    setUsers(response?.data?.results ?? []);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container  height={"600px"} maxW='2xl' bg='gray.300' centerContent>
    <Box padding='4' bg='white.400' color='black' maxW='md' >
      Teams
    </Box>
  </Container>
  )
}