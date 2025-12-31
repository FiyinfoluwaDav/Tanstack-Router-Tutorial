import { cn } from "@/lib/utils";
import { createLink } from "@tanstack/react-router";
import React from "react";

type BasicLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const BasicLinkComponent = React.forwardRef<HTMLAnchorElement, BasicLinkProps>(
  ({ className, ...props }, ref) => (
    <a ref={ref} {...props} className={cn("nav-link", className)} />
  )
);

const CreatedLinkComponent = createLink(BasicLinkComponent);

export const NavLink = (
  props: React.ComponentProps<typeof CreatedLinkComponent>
) => {
  return (
    <CreatedLinkComponent
      {...props}
      activeProps={{
        className: "active-nav-link",
      }}
    />
  );
};
