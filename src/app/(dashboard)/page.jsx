import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-2 ">
      <h1 className="text-5xl">Welcome to Dashboard</h1>
      <Button>
        <Link href="/login">Get Started</Link>
      </Button>
    </div>
  );
}
