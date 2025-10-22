"use client";

import { useState } from "react";

export default function Home() {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);

  const tipAmount = people ? (bill * tip) / 100 / people : 0;
  const total = people ? (bill / people) + tipAmount : 0;

  const resetAll = () => {
    setBill(0);
    setTip(0);
    setPeople(0);
  };

  return (
    <main className="bg-white w-[900px] rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-6">
      <div className="space-y-6">
      </div>

      <div className="bg-[#00474b] rounded-2xl p-8 flex flex-col justify-between">
      </div>
    </main>
  );
}
