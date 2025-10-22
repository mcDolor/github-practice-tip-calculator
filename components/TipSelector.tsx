interface Props {
  tip: number;
  setTip: (val: number) => void;
}

export default function TipSelector({ tip, setTip }: Props) {
  const tips = [5, 10, 15, 25, 50];
  return (
    <div>
      <label className="block text-sm text-grey-500 mb-2">Select Tip %</label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {tips.map((t) => (
          <button
            key={t}
            onClick={() => setTip(t)}
            className={`py-2 rounded-lg font-bold transition-all ${
              tip === t
                ? "bg-green-400 text-green-900"
                : "bg-green-900 text-white hover:bg-[#9fe8df] hover:text-green-900"
            }`}
          >
            {t}%
          </button>
        ))}
        <input
          type="number"
          placeholder="Custom"
          onChange={(e) => setTip(Number(e.target.value))}
          className="text-center rounded-lg bg-[#f3f9fa] focus:border-[#26c2ae] border-2 border-transparent outline-none"
        />
      </div>
    </div>
  );
}