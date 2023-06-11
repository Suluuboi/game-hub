import {
  FaApple,
  FaWindows,
  FaLinux,
  FaXbox,
  FaAndroid,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { IPlatform } from "../../hooks/useGames";

interface Props {
  platforms: IPlatform[];
}

export default function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    mac: FaApple,
    pc: FaWindows,
    linux: FaLinux,
    xbox: FaXbox,
    android: FaAndroid,
    playstation: FaPlaystation,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
}
