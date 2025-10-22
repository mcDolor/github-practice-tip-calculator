import { User } from "lucide-react";

interface Props {
  user: number;
  setUser: (val: number) => void;
}

export default function UserInput({ user, setUser }: Props) {
  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-2">
        <label className="text-[#5e7a7d]">Number of People</label>
        {user === 0 && <p className="text-red-500 text-sm">Can&apos;t be zero</p>}
      </div>
      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ebbbd]" size={18} />
        <input
          type="number"
          value={user || ""}
          onChange={(e) => setUser(Number(e.target.value))}
          className={`w-full text-right bg-[#f3f9fa] p-2 pl-10 rounded-lg font-semibold text-[#00474b] ${
            user === 0 ? "border border-red-500" : "border-transparent"
          } focus:border-[#26c2ae] outline-none`}
          placeholder="0"
        />
      </div>
    </div>
  );
}
