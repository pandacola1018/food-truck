import React from "react";

function MainLayout({ children }) {
  return (
    <div>
      <h1>This is mainlayout</h1>
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
