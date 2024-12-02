export function BackgroundShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] right-[10%] w-[300px] h-[300px] bg-[#F4D03F] rounded-full" />
      <div className="absolute top-[5%] right-[-5%] w-[200px] h-[200px] bg-[#FF69B4] rounded-[30%_70%_70%_30%/30%_30%_70%_70%]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#4A90E2] rounded-[60%_40%_30%_70%/60%_30%_70%_40%]" />
      <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] bg-[#E74C3C] rounded-[40%_60%_70%_30%/40%_50%_60%_50%]" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[250px] h-[250px] bg-[#F4D03F] rounded-[50%_50%_30%_70%/30%_50%_50%_70%]" />
    </div>
  );
}