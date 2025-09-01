import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full flex flex-1">{children}</div>;
};

export default layout;
