import type { ElementType, ReactNode } from "react";

export default function Container({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={`mx-auto w-full max-w-content px-6 md:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
