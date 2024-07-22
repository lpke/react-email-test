import { Button as ReButton } from "@react-email/components";
import Email from "../../components/Email";
import theme from "../../theme";

type ButtonProps = {
  children?: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <Email colors={theme}>
      <ReButton className="bg-purple text-white rounded-md w-[200px] text-center p-[10px] shadow-md">
        {children || "Call to action"}
      </ReButton>
    </Email>
  );
}
