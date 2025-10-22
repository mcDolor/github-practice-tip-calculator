interface Props {
  tipAmount: number;
  total: number;
}

export default function ResultCard({ tipAmount, total }: Props) {
  return (
    <div className="text-white space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm">Tip Amount</p>
          <p className="text-xs text-gray-400">/ person</p>
        </div>
        <h2 className="text-3xl text-[#26c2ae] font-bold">${tipAmount.toFixed(2)}</h2>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm">Total</p>
          <p className="text-xs text-gray-400">/ person</p>
        </div>
        <h2 className="text-3xl text-[#26c2ae] font-bold">${total.toFixed(2)}</h2>
      </div>
    </div>
  );
}