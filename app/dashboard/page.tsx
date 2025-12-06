import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DashboardContent from "@/components/DashboardContent";
import { CloudUpload } from "lucide-react";
import Navbar from "@/components/Navbar";

export default async function Dashboard() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    redirect("/sign-in");
  }

  // Serialize the user data to avoid passing the Clerk User object directly
  const serializedUser = user
    ? {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        imageUrl: user.imageUrl,
        username: user.username,
        emailAddress: user.emailAddresses?.[0]?.emailAddress,
      }
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <Navbar user={serializedUser} />

      <main className="flex-1 container mx-auto py-10 px-4 md:px-6">
        <DashboardContent
          userId={userId}
          userName={
            user?.firstName ||
            user?.fullName ||
            user?.emailAddresses?.[0]?.emailAddress ||
            ""
          }
        />
      </main>

      <footer className="border-t border-white/60 bg-white/80 py-6 backdrop-blur">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-slate-600">
          <div className="flex items-center gap-2 mb-3 md:mb-0 text-slate-900">
            <CloudUpload className="h-5 w-5 text-sky-600" />
            <h2 className="text-lg font-semibold">Droply</h2>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Droply. Built for calm, secure storage.
          </p>
        </div>
      </footer>
    </div>
  );
}
