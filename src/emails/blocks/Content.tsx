import { Row, Text } from "@react-email/components";
import theme from "../../theme";
import Email from "../../components/Email";

export default function Content() {
  return (
    <Email colors={theme}>
      <Row>
        <Text className="text-textgrey text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas
          eget nulla sed rutrum.
        </Text>
        <Text className="text-textgrey text-left">
          Mauris rutrum, purus quis tincidunt sagittis, nisl metus euismod mi,
          id commodo elit augue non urna.
        </Text>
        <Text className="text-textgrey text-left">
          Fusce at nunc arcu. Sed lobortis felis ac enim bibendum imperdiet.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos.
        </Text>
      </Row>
    </Email>
  );
}
