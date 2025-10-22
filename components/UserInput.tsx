interface Props {
  user: number;
  setUser: (val: number) => void;
}

export default function UserInput({ user, setUser }: Props) {
  return (
    <div>
      <label className="block text-[#5e7a7d] mb-2">Number of People</label>
      <input
        type="number"
        value={user || ""}
        onChange={(e) => setUser(Number(e.target.value))}
        className={`w-full text-right bg-[#f3f9fa] p-2 rounded-lg ${
          user === 0 ? "border border-red-500" : "border-transparent"
        } focus:border-[#26c2ae] outline-none`}
        placeholder="0"
      />
      {user === 0 && (
        <p className="text-red-500 text-sm mt-1">Can&apos;t be zero</p>
      )}
    </div>
  );
}
