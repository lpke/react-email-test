import Email from "../../components/Email";
import { Button } from "@react-email/components";

export default function TestBlock() {
  return (
    <Email>
      <Button className="bg-black cursor-pointer py-4 px-6 text-white">
        Example Button
      </Button>
    </Email>
  );
}
