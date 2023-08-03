import React from "react";

export default function TemplateCreate({ className, children }) {
  return (
    <div className={`${className} bg-white w-full rounded-md p-4`}>
      {children}
    </div>
  );
}
