import { DollarSign } from "lucide-react";

interface Props {
  bill: number;
  setBill: (val: number) => void;
}

export default function BillInput({ bill, setBill }: Props) {
  return (
    <div className="relative">
      <label className="block text-sm text-grey-500 mb-2">Bill</label>
      <div className="relative">
        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-grey-400" size={18} />
        <input
          type="number"
          value={bill || ""}
          onChange={(e) => setBill(Number(e.target.value))}
          className="w-full text-xl text-right bg-grey-50 p-2 pl-10 rounded-lg border-2 border-transparent focus:border-green-400 outline-none font-semibold text-green-900"
          placeholder="0"
        />
      </div>
    </div>
  );
}