"use client"

import { SessionProvider } from "next-auth/react";
import DashboardPage from "./dashboard/page";

export default function Home() {
  return (
    <div>
      <SessionProvider>
        <DashboardPage />
      </SessionProvider>
    </div>
  );
}
