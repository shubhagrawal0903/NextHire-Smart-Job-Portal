import { SignUp } from "@clerk/nextjs";
import { Avatar, Heading } from "@radix-ui/themes";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      {/* Header with branding */}
      <div className="absolute top-6 left-6">
        <Link href="/" className="flex items-center gap-3 group">
          <Avatar
            size="2"
            fallback="N"
            radius="full"
            src="https://static.vecteezy.com/system/resources/thumbnails/013/061/846/small/job-logo-design-job-search-icon-with-magnifying-glass-choose-people-for-hire-symbol-job-or-employee-logo-free-vector.jpg"
          />
          <Heading className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-xl font-bold">
            Next Hire
          </Heading>
        </Link>
      </div>

      {/* Sign Up Component */}
      <div className="w-full max-w-md">
        <SignUp />
      </div>
    </div>
  );
}