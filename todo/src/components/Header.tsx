import { CardHeader, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <CardHeader bg="green">
      <Text as="h1" fontSize="2xl" fontWeight="bold">
        TODO List
      </Text>
    </CardHeader>
  );
};

export default Header;
