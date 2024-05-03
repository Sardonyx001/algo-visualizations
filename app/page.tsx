import ControlTab from "@/components/ControlTab";
import ViewTab from "@/components/ViewTab";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex border-slate-50 border-2">
        <p>Top bar</p>
      </div>
      <div className="flex flex-row w-full h-full items-center justify-between gap-8">
        <div className="">
          <ControlTab />
        </div>
        <div className=" aspect-sqaure">
          <ViewTab />
        </div>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex border-slate-50 border-2">
        <p>Bottom bar</p>
      </div>
    </main>
  );
}
