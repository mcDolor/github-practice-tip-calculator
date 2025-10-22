"use client";

import { useState } from "react";
import BillInput from "@/components/BillInput";
import TipSelector from "@/components/TipSelector";
import UserInput from "@/components/UserInput";
import ResultCard from "@/components/ResultCard";
import ResetButton from "@/components/ResetButton";

export default function Home() {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [user, setUser] = useState<number>(0);

  const tipAmount = user ? (bill * (tip / 100)) / user : 0;
  const total = user ? (bill + bill * (tip / 100)) / user : 0;

  const resetAll = () => {
    setBill(0);
    setTip(0);
    setUser(0);
  };

  return (
    <main className="flex flex-col items-center w-full min-h-screen py-8 px-4">
      <h1 className="text-grey-500 text-1xl font-semibold tracking-[0.3em] mb-8 text-center">
        SPLI <br /> TTER
      </h1>

      <section className="bg-white rounded-2xl shadow-lg w-full max-w-[900px] p-6 md:p-10 grid gap-6 md:grid-cols-2">
        {/* LEFT */}
        <div className="space-y-6">
          <BillInput bill={bill} setBill={setBill} />
          <TipSelector tip={tip} setTip={setTip} />
          <UserInput user={user} setUser={setUser} />
        </div>

        {/* RIGHT */}
        <div className="bg-[#00474b] rounded-2xl p-6 md:p-10 flex flex-col justify-between">
          <ResultCard tipAmount={tipAmount} total={total} />
          <ResetButton resetAll={resetAll} disabled={!bill && !tip && !user} />
        </div>
      </section>
    </main>
  );
}
