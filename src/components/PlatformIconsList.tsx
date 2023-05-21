import React from "react";
import { Platform } from "../hooks/useGames";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platform: Platform[];
}

const PlatformIconsList = ({ platform }: Props) => {
  const platformIcons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platform.map((platform) => (
        <Icon as={platformIcons[platform.slug]} key={platform.slug} color="gray.500"></Icon>
        // <Text key={platform.id}>{}</Text>
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
