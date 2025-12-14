import Link from "next/link";
import Gray CupLogo from "@/components/Gray CupLogo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center ">
      {/* <div className="hidden lg:block lg:w-1/2 h-full bg-black">
            rahhh
            </div> */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center px-2 md:px-0">
        {/* <span className="absolute flex items-center gap-0.5 top-5 left-5">
          <Link
            href="https://Gray Cup.com/"
            target="_blank"
            rel="dofollow noopener noreferrer"
            className="flex flex-row items-center gap-3 px-1.5 py-0.5"
          >
            <Gray CupLogo className="w-10 h-10 mx-auto" />
            <span className="font-bold text-neutral-900 text-lg">Gray Cup</span>
          </Link>
        </span> */}
        {children}
      </div>
    </div>
  );
}
