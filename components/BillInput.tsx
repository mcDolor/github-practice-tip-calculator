interface Props {
  bill: number;
  setBill: (val: number) => void;
}

export default function BillInput({ bill, setBill }: Props) {
  return (
    <div>
      <label className="block text-[#5e7a7d] mb-2">Bill</label>
      <input
        type="number"
        value={bill || ""}
        onChange={(e) => setBill(Number(e.target.value))}
        className="w-full text-right bg-[#f3f9fa] p-2 rounded-lg border border-transparent focus:border-[#26c2ae] outline-none"
        placeholder="0"
      />
    </div>
  );
}
