import { DollarSign } from "lucide-react";

interface Props {
  bill: number;
  setBill: (val: number) => void;
}

export default function BillInput({ bill, setBill }: Props) {
  return (
    <div className="relative">
      <label className="block text-[#5e7a7d] mb-2">Bill</label>
      <div className="relative">
        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ebbbd]" size={18} />
        <input
          type="number"
          value={bill || ""}
          onChange={(e) => setBill(Number(e.target.value))}
          className="w-full text-right bg-[#f3f9fa] p-2 pl-10 rounded-lg border border-transparent focus:border-[#26c2ae] outline-none font-semibold text-[#00474b]"
          placeholder="0"
        />
      </div>
    </div>
  );
}