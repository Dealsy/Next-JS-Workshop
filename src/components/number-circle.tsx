export const NumberCircle = ({ number }: { number: number }) => {
  return (
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
      <span className="text-xl font-bold text-primary">{number}</span>
    </div>
  );
};
