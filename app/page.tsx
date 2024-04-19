import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 bg-slate-200">
      <div className="bg-cover bg-center">
      <div className="max-w-4x1 mx-auto text-left mt-16">
        <h1 className="text-4xl font-bold  mb-4"> welcome to my cms project </h1>
        <div className="pt-4 mt-8">
          <a href="/posts/" className="text-blue-500 hover:text-blue-700 mt-10"> Blog posts </a>
          <br />
          <a href="/category/1" className="text-blue-500 hover:text-blue-700 mt-4">Category 1</a>
          <br />
          <a href="/category/2" className="text-blue-500 hover:text-blue-700">Category 2</a>
          <br />
          <a href="/category/3" className="text-blue-500 hover:text-blue-700">Category 3</a>
          <br />
        </div>
      </div>
      </div>
    </main>
  );
}
