import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/images/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";

export const Navbar = () => {
  return (
    <HStack px="10px" justifyContent="space-between">
      <Image src={logo} boxSize="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};
