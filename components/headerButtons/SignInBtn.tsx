export default function SignInBtn({ provider, signIn }: any) {
  //TODO fix any

  console.log(provider, "provider");
  return (
    <>
      <button
        key={provider.name}
        onClick={() => signIn(provider.id)}
        className="bg-[#000000] text-[#ffffff] px-[10px] py-[7px] cursor-pointer rounded-lg"
      >
        Sign In
      </button>
    </>
  );
}
