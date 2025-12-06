import { Button } from "@heroui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Card, CardBody } from "@heroui/card";
import {
  CloudUpload,
  Shield,
  Folder,
  Image as ImageIcon,
  ArrowRight,
  Sparkles,
  Lock,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-indigo-100/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.06),_transparent_45%)]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-6xl py-16 md:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-sm text-slate-700 shadow-sm">
                  <Sparkles className="h-4 w-4 text-sky-500" />
                  Built for modern teams that live in the cloud.
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl leading-tight font-semibold md:text-5xl lg:text-6xl text-slate-900">
                    Store, organize, and share with{" "}
                    <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                      ease
                    </span>
                    .
                  </h1>
                  <p className="max-w-xl text-lg text-slate-600">
                    A calm, Dropbox-inspired space for your images and files.
                    Upload fast, keep things tidy, and share securely—all in one
                    view.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <SignedOut>
                    <Link href="/sign-up">
                      <Button
                        size="lg"
                        className="h-12 rounded-full bg-slate-900 px-6 font-semibold text-white shadow-lg shadow-slate-300/60 transition hover:-translate-y-0.5 hover:bg-slate-800"
                        endContent={<ArrowRight className="h-4 w-4" />}
                      >
                        Get started free
                      </Button>
                    </Link>
                    <Link href="/sign-in">
                      <Button
                        size="lg"
                        variant="bordered"
                        className="h-12 rounded-full border-slate-200 bg-white px-6 text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
                      >
                        Sign in
                      </Button>
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <Link href="/dashboard">
                      <Button
                        size="lg"
                        className="h-12 rounded-full bg-slate-900 px-6 font-semibold text-white shadow-lg shadow-slate-300/60 transition hover:-translate-y-0.5 hover:bg-slate-800"
                        endContent={<ArrowRight className="h-4 w-4" />}
                      >
                        Go to dashboard
                      </Button>
                    </Link>
                  </SignedIn>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
                    <Lock className="h-4 w-4 text-slate-500" />
                    Private by default
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
                    <ImageIcon className="h-4 w-4 text-sky-500" />
                    Built for rich media
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-10 -left-6 h-28 w-28 rounded-3xl bg-sky-100/60 blur-2xl" />
                <div className="absolute -bottom-14 -right-6 h-32 w-32 rounded-full bg-indigo-100/60 blur-3xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur-md">
                  <div className="flex items-center justify-between pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                        <CloudUpload className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                          Upload queue
                        </p>
                        <p className="text-lg font-semibold text-slate-900">
                          New drop · June 2024
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                      Secure
                    </span>
                  </div>
                  <div className="space-y-3">
                    {["Client shots", "Campaign covers", "Raw backups"].map(
                      (label, idx) => (
                        <div
                          key={label}
                          className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-100"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-xl bg-slate-50" />
                              <div>
                                <p className="text-sm font-medium text-slate-900">
                                  {label}
                                </p>
                                <p className="text-xs text-slate-500">
                                  {idx === 0
                                    ? "12 items · 1.1 GB"
                                    : idx === 1
                                      ? "6 items · 420 MB"
                                      : "30 items · 4.8 GB"}
                                </p>
                              </div>
                            </div>
                            <div className="h-2 w-32 rounded-full bg-slate-100">
                              <div
                                className="h-2 rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400"
                                style={{
                                  width: `${idx === 0 ? 82 : idx === 1 ? 54 : 36}%`,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                  <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-slate-900">
                    <div>
                      <p className="text-sm text-slate-600">Smart folders</p>
                      <p className="text-base font-semibold">
                        Auto-sort by client, color, and format
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-6xl space-y-8 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-2xl shadow-slate-200/60 backdrop-blur-md">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                  Why Droply
                </p>
                <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                  Fast like Dropbox, calmer in feel
                </h2>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
                  <Lock className="h-4 w-4 text-slate-500" />
                  End-to-end security
                </div>
                <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm md:flex">
                  <Sparkles className="h-4 w-4 text-sky-500" />
                  Smart organization
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: CloudUpload,
                  title: "Instant uploads",
                  description:
                    "Drag, drop, and keep your files moving with smart retries.",
                },
                {
                  icon: Folder,
                  title: "Zero clutter",
                  description:
                    "Auto-tagging and tidy collections keep every album organized.",
                },
                {
                  icon: Shield,
                  title: "Share with confidence",
                  description:
                    "Private links, expiring passes, and watermark-ready previews.",
                },
              ].map(({ icon: Icon, title, description }) => (
                <Card
                  key={title}
                  className="h-full border border-slate-200 bg-white shadow-lg shadow-slate-100 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <CardBody className="space-y-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {title}
                    </h3>
                    <p className="text-slate-600">{description}</p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 md:px-6">
          <div className="container mx-auto max-w-6xl py-14 md:py-16">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                  Flow
                </p>
                <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                  Upload. Organize. Share. Repeat.
                </h2>
              </div>
              <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
                <ImageIcon className="h-4 w-4 text-sky-500" />
                Optimized for high-res media
              </div>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Drop files in",
                  description:
                    "Upload from desktop, mobile, or your favorite integrations.",
                  icon: ImageIcon,
                },
                {
                  title: "Auto-sort & tag",
                  description:
                    "AI-powered tagging and folders keep every shoot organized.",
                  icon: Folder,
                },
                {
                  title: "Share beautifully",
                  description:
                    "Send branded links that expire when you decide.",
                  icon: Shield,
                },
              ].map(({ title, description, icon: Icon }, index) => (
                <div
                  key={title}
                  className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-slate-600">{description}</p>
                  {index < 2 && (
                    <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-slate-200 to-transparent lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-14 md:px-6 md:pb-20">
          <div className="container mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/85 p-10 text-center shadow-2xl shadow-slate-200/60 backdrop-blur-md">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.12),_transparent_55%)]" />
              <div className="relative space-y-4 text-slate-900">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                  Ready when you are
                </p>
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Keep every file in one calm, secure place.
                </h2>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                  <SignedOut>
                    <Link href="/sign-up">
                      <Button
                        size="lg"
                        className="h-12 rounded-full bg-slate-900 px-6 font-semibold text-white shadow-lg shadow-slate-300/60 transition hover:-translate-y-0.5 hover:bg-slate-800"
                        endContent={<ArrowRight className="h-4 w-4" />}
                      >
                        Create your space
                      </Button>
                    </Link>
                    <Link href="/sign-in">
                      <Button
                        size="lg"
                        variant="bordered"
                        className="h-12 rounded-full border-slate-200 bg-white px-6 text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow"
                      >
                        I already have an account
                      </Button>
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <Link href="/dashboard">
                      <Button
                        size="lg"
                        className="h-12 rounded-full bg-slate-900 px-6 font-semibold text-white shadow-lg shadow-slate-300/60 transition hover:-translate-y-0.5 hover:bg-slate-800"
                        endContent={<ArrowRight className="h-4 w-4" />}
                      >
                        Open dashboard
                      </Button>
                    </Link>
                  </SignedIn>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/60 bg-white/80 py-6 backdrop-blur">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 md:flex-row md:px-6 text-slate-600">
          <div className="flex items-center gap-2 text-slate-900">
            <CloudUpload className="h-5 w-5 text-sky-600" />
            <h2 className="text-lg font-semibold">Droply</h2>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Droply. Designed for teams that
            live in the cloud.
          </p>
        </div>
      </footer>
    </div>
  );
}
