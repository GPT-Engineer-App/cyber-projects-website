import React from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="ghost" aria-label="Toggle dark mode" />;
};

export default DarkModeToggle;
