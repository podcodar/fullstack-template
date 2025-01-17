import { Link as DefaulLink, type LinkProps } from "react-router";

type Props = Omit<LinkProps, "to"> & {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export default function Link({
  children,
  className,
  target,
  href = "",
  ...props
}: Props) {
  if (target) {
    return (
      <DefaulLink
        target={target}
        to={href.toString()}
        className={className}
        {...props}
      >
        {children} {externalLinkIcon}
      </DefaulLink>
    );
  }

  return (
    <DefaulLink to={href.toString()} className={className} {...props}>
      {children}
    </DefaulLink>
  );
}

const externalLinkIcon = (
  <svg
    role="img"
    aria-label="external link icon"
    className="ml-1 inline h-4 w-4 rotate-[-37deg]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 14l6-6m0 0l-6-6m6 6H4"
    />
  </svg>
);
