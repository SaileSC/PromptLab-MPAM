import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TruncatedTooltipProps {
  children: React.ReactNode;
  maxLength?: number;
}

export const TruncatedTooltip = ({
  children,
  maxLength = 50,
  ...props
}: TruncatedTooltipProps & React.ComponentProps<"p">) => {
  if (!children) return null;
  const text = children as string;

  if (text.length <= maxLength) {
    return <p {...props}>{text}</p>;
  }

  return (
    <Tooltip>
      <TooltipTrigger>
        <p {...props}>{`${text.slice(0, maxLength)}...`}</p>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{children}</p>
      </TooltipContent>
    </Tooltip>
  );
};
