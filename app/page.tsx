import CustomButton from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* The flex-col allows the elements in the div to be stacked vertically. MIN-H-SCREEN allows the div to drown the whole page in itself */}
      <main className="flex-1"> {/* This will be the hero section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-black mb-6 text-4xl font-bold">A better way to organize your applications.</h1>
            <p className="text-gray-500 text-xl">Capture, organize and manage your job search in one place.</p>
            <div className="flex flex-col items-center mb-10 text-xl">
              {/* <button className="bg-emerald-600 p-2 rounded-xl mb-2 mt-2"> Start for free </button> */}
              <Link href="/sign-up">
                <CustomButton className="flex items-center bg-black px-4 py-2 rounded-xl mb-2 mt-2 active:bg-gray-800 text-white" label="Start for free">
                  <ArrowRight size={18} />
                </CustomButton>
              </Link>
              <p className="text-gray-400">Free forever. No cost.</p>
            </div>
          </div>
        </section>
      </main>
    </div >
  );
}
