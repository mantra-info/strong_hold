"use client";

import React from "react";

type OpenContactButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function OpenContactButton({
  onClick,
  type,
  ...props
}: OpenContactButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    window.location.hash = 'contact-us';
    window.dispatchEvent(new CustomEvent("open-contact-modal"));
  };

  return <button {...props} type={type ?? "button"} onClick={handleClick} />;
}
