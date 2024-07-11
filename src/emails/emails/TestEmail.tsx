import Template from "../../components/Email";
import { Button } from "@react-email/components";

export default function TestEmail() {
  return (
    <Template colors={{ purple: "#300431" }}>
      <Button className="bg-purple cursor-pointer py-4 px-6 text-white">
        Example Button
      </Button>
    </Template>
  );
}
