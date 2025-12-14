"use client";

import AuthCard from "@/components/auth-card";
import { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

const metadata: Metadata = {
  title: `${siteConfig.name} - Login`,
  description:
    "Login to Gray Cup Store - Access your account and start using our features.",
};

export default function AuthPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <AuthCard />
    </div>
  );
}
