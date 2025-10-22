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
          ? "bg-grey-500 text-green-900 opacity-30"
          : "bg-green-400 hover:bg-[#9fe8df] text-green-900"
      }`}
    >
      RESET
    </button>
  );
}