"use client";

import { AnimatePresence, motion } from "framer-motion";

import GrayCupLogo from "@/components/ColdranLogo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";
import { Building } from "lucide-react";

import { Icons } from "@/components/icons";

export default function AuthCard() {


  const [showOtherOptions, setShowOtherOptions] = useState(false);


  return (
    <div className="flex flex-col items-center justify-center ">
      <Card className="max-w-sm w-full rounded-xl overflow-hidden">
        <CardHeader className="text-center space-y-2 pb-6">
          <GrayCupLogo className="hidden md:block w-12 h-12 mx-auto" />
          <CardTitle className="text-3xl font-bold text-gray-900">
            Our Medusa Store is Work in Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6">
          <div className="grid gap-4">
            <p className="text-xs text-neutral-500 font-medium">
              We're going to take some time as we don't believe in Shopify. <a href="https://graycup.org" className="text-blue-600 hover:underline">Visit graycup.org</a>
            </p>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <Link href="https://instagram.com/thegraycup" target="_blank">
                <Button
                  variant="outline"
                  size="social"
                  className="w-full font-semibold bg-white justify-center"
                >
                  <Icons.Instagram className="mr-2 h-4 w-4" />
                  Follow on Instagram
                </Button>
              </Link>

              <Link href="https://x.com/thegraycup" target="_blank">
              <Button
                variant="outline"
                size="social"
                className="w-full font-semibold bg-white justify-center"
              >
                  <Icons.Twitter className="mr-2 h-4 w-4" />
                Follow on Twitter
              </Button>
              </Link>
            </div>

            {/* Show other options */}
            <AnimatePresence initial={false} mode="wait">
              {!showOtherOptions ? (
                <motion.div
                  key="show-button"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                  className="text-center overflow-hidden"
                >
                  <Button
                    variant="ghost"
                    size="social"
                    className="text-md hover:bg-neutral-200/30 text-neutral-500 hover:text-foreground"
                    onClick={() => setShowOtherOptions(true)}
                  >
                    Show other options
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="other-options"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                  className=" "
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-2">
                      <div className="flex-1">
                      <Link href="https://discord.gg/gpRxmW63JW" target="_blank">
                        <Button
                          variant="outline"
                          size="social"
                          className="w-full font-semibold bg-white justify-center"
                        >
                            <Icons.Discord height={20} width={20} className="mr-1.5" />
                          Discord
                        </Button>
                        </Link>
                      </div>

                      <div className="flex-1 relative group">
                        <Button
                          variant="outline"
                          size="social"
                          className="w-full font-semibold bg-white justify-center opacity-60 cursor-not-allowed"
                          disabled
                        >
                          <Building className="mr-2 h-4 w-4" />
                          B2B Store
                        </Button>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-neutral-900 text-neutral-50 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                          Work in Progress
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row gap-2 justify-between">
                    <Link href="mailto:arjunaditya@icloud.com" target="_blank">
                      <Button
                        variant="outline"
                        size="social"
                        className="justify-center bg-white"
                      >
                          <Icons.Gmail className="mr-2 h-4 w-4" />
                        Email Us
                      </Button>
                      </Link>
                      <Link href="https://cal.com/arjunaditya/30min" target="_blank">
                      <Button
                        variant="outline"
                        size="social"
                        className="justify-center bg-white"
                      >
                          <Icons.Zoom className="mr-0.5 h-3.5 w-3.5" />
                        Schedule Call
                      </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
