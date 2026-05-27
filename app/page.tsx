export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* The flex-col allows the elements in the div to be stacked vertically. MIN-H-SCREEN allows the div to drown the whole page in itself */}
      <main className="flex-1"> {/* This will be the hero section */}
        <section className="container mx-auto px-4 py-32">
          <div>
            <h1 className="text-black">A better way to organize your applications.</h1>
            <p className="text-gray-500">Capture, organize and manage your job search in one place.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
