import ImageWithTabs from "@/components/client/ImageWithTabs";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Briefcase, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* The flex-col allows the elements in the div to be stacked vertically. MIN-H-SCREEN allows the div to drown the whole page in itself */}
      <main className="flex-1"> {/* This will be the hero section */}
        <section className="container mx-auto px-4 py-8 max-h-64 mb-8">
          <div className="mx-auto max-w-xl text-center mt-4">
            <h1 className="text-black mb-6 text-4xl font-bold">A better way to organize your applications.</h1>
            <p className="text-gray-500 text-xl">Capture, organize and manage your job search in one place.</p>
            <div className="flex flex-col items-center mb-10 text-xl">
              {/* <button className="bg-emerald-600 p-2 rounded-xl mb-2 mt-2"> Start for free </button> */}
              <Link href="/sign-up">
                <Button className="flex items-center mb-4 px-4 py-2 mt-4 bg-black text-white">
                  Start for free<ArrowRight size={18} />
                </Button>
              </Link>
              <p className="text-gray-400 text-sm mb-64">Free forever. No cost.</p>
            </div>
          </div>
        </section>

        {/* Hero section with images */}
        <ImageWithTabs />


        {/* Features section */}

        <section className="border-t bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Organize Applications
                </h3>
                <p className="text-gray-700">
                  Create custom boards and columns to track your job
                  applications at every stage of the process.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Track Progress
                </h3>
                <p className="text-gray-700">
                  Monitor your application status from applied to interview to
                  offer with visual Kanban boards.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Stay Organized
                </h3>
                <p className="text-gray-700">
                  Never lose track of an application. Keep all your job search
                  information in one centralized place.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div >
  );
}
