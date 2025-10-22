interface Props {
  tip: number;
  setTip: (val: number) => void;
}

export default function TipSelector({ tip, setTip }: Props) {
  const tips = [5, 10, 15, 25, 50];
  return (
    <div>
      <label className="block text-[#5e7a7d] mb-2">Select Tip %</label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {tips.map((t) => (
          <button
            key={t}
            onClick={() => setTip(t)}
            className={`py-2 rounded-lg font-bold transition-all ${
              tip === t
                ? "bg-[#26c2ae] text-[#00474b]"
                : "bg-[#00474b] text-white hover:bg-[#9fe8df] hover:text-[#00474b]"
            }`}
          >
            {t}%
          </button>
        ))}
        <input
          type="number"
          placeholder="Custom"
          onChange={(e) => setTip(Number(e.target.value))}
          className="text-center rounded-lg bg-[#f3f9fa] focus:border-[#26c2ae] border border-transparent outline-none"
        />
      </div>
    </div>
  );
}