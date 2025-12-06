import SignInForm from "@/components/SignInForm";
import { CloudUpload } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <Navbar />

      <main className="flex-1 flex justify-center items-center px-4 py-10">
        <SignInForm />
      </main>

      <footer className="py-6 text-center text-slate-500">
        &copy; {new Date().getFullYear()} Droply
      </footer>
    </div>
  );
}
