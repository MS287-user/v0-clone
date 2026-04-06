import { onBoardUser } from "@/modules/auth/actions";
import Navbar from "@/modules/home/components/navbar";
import React from "react";

export const dynamic = "force-dynamic";

const Layout = async ({ children }) => {
  await onBoardUser();
  return (
    <>
      <main className="flex flex-col min-h-screen relative overflow-x-hidden bg-background dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] bg-[radial-gradient(#dadde2_1px,transparent_1px)] bg-size-[16px_16px]">
        <Navbar />
        <div className="flex-1 w-full mt-20">{children}</div>
      </main>
    </>
  );
};

export default Layout;
