import React from "react";
import { Box, Button, Container, Heading, Table, Thead, Tbody, Tr, Th, Td, Text, VStack, IconButton, useColorMode, useColorModeValue, Flex, Spacer } from "@chakra-ui/react";
import { FaSun, FaMoon, FaTrashAlt, FaEdit } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={4}>
        <Flex w="full">
          <Heading as="h1" size="xl">
            청소 매니저 대시보드
          </Heading>
          <Spacer />
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound={true} size="lg" alignSelf="flex-end" onClick={toggleColorMode} />
        </Flex>
        <Box bg={bgColor} w="full" p={4} borderRadius="lg">
          <Heading as="h2" size="lg" mb={4}>
            오늘의 일정
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>시간</Th>
                <Th>고객명</Th>
                <Th>위치</Th>
                <Th>상태</Th>
                <Th>액션</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>09:00 AM</Td>
                <Td>김철수</Td>
                <Td>서울시 강남구</Td>
                <Td>예정</Td>
                <Td>
                  <IconButton icon={<FaEdit />} isRound={true} />
                  <IconButton icon={<FaTrashAlt />} isRound={true} ml={2} />
                </Td>
              </Tr>
              {/* 추가 일정을 여기에 반복 */}
            </Tbody>
          </Table>
        </Box>
        <Button colorScheme="blue" leftIcon={<FaEdit />}>
          일정 추가
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
