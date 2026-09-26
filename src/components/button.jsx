import { Button } from "@/components/ui/button";
import { cn } from "cn";

export default function ButtonStyle({ text, style, icons, onClick }) {
  return (
    <Button
      onClick={onClick}
      className={cn("bg-caramel-gold text-espresso", style)}
    >
      <span>{text}</span>
      {icons}
    </Button>
  );
}
