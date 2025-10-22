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

  const tipAmount = user ? (bill * tip) / 100 / user : 0;
  const total = user ? (bill / user) + tipAmount : 0;

  const resetAll = () => {
    setBill(0);
    setTip(0);
    setUser(0);
  };

  return (
    <main className="bg-white w-[900px] rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-6">
      <div className="space-y-6">
        <BillInput bill={bill} setBill={setBill} />
        <TipSelector tip={tip} setTip={setTip} />
        <UserInput user={user} setUser={setUser} />
      </div>

      <div className="bg-[#00474b] rounded-2xl p-8 flex flex-col justify-between">
        <ResultCard tipAmount={tipAmount} total={total} />
        <ResetButton resetAll={resetAll} disabled={!bill && !tip && !user} />
      </div>
    </main>
  );
}
