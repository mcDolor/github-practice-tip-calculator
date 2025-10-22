interface Props {
  resetAll: () => void;
  disabled: boolean;
}

export default function ResetButton({ resetAll, disabled }: Props) {
  return (
    <button
      onClick={resetAll}
      disabled={disabled}
      className={`mt-8 w-full py-2 rounded-lg font-bold ${
        disabled
          ? "bg-[#0d686d] text-[#00474b] opacity-30"
          : "bg-[#26c2ae] hover:bg-[#9fe8df] text-[#00474b]"
      }`}
    >
      RESET
    </button>
  );
}