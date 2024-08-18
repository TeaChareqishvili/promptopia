import Image from "next/image";

export default function Profile({ session }: any) {
  return (
    <>
      {session?.user && (
        <Image
          src={session?.user.image}
          alt="user"
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
    </>
  );
}
