interface MagicButton {
  text: string;
}

const MagicButton = ({ text }: MagicButton) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full px-8 items-center justify-center rounded-xl bg-white dark:bg-black px-3 py-1 text-sm font-medium text-black dark:text-white backdrop-blur-3xl">
        {text}
      </span>
    </button>
  );
};

export default MagicButton;
