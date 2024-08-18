import SearchInput from "./SearchInput";

export default function MainPage() {
  return (
    <div className="w-full flex items-center flex-col justify-start h-full mt-[30px]">
      <h1 className="text-[60px] font-bold text-black mt-[20px] tracking-widest">
        Discover & Share
      </h1>
      <h2 className="text-[55px] font-bold tracking-widest orange_gradient">
        AI-Powered Prompts
      </h2>
      <p className="text-[18px] tracking-wide text-[#565757] text-center w-[800px] mt-[15px]">
        Promptopia is an open-source Al prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <SearchInput />
    </div>
  );
}
