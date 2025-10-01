import { Badge } from "@/components/ui/badge";

export const StatusBadge = ({ isActive }: { isActive: boolean }) => {
  const variant = isActive ? "default" : "secondary";
  const text = isActive ? "Ativo" : "Inativo";
  const className = isActive
    ? "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700"
    : "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700";

  return (
    <Badge variant={variant} className={`capitalize ${className}`}>
      {text}
    </Badge>
  );
};
