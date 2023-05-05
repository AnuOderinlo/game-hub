import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "orange" : "";
  return (
    <Badge colorScheme={color} borderRadius={2} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
