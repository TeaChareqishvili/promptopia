"use client";

import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import CreatePostBtn from "./CreatePostBtn";
import SignOutBtn from "./SignOutBtn";
import SignInBtn from "./SignInBtn";
import Profile from "../Profile";

export default function HeaderBtnLayout() {
  type Provider = {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
  };

  type Providers = {
    [key: string]: Provider;
  };
  const { data: session } = useSession();

  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const setProvidersAsync = async () => {
      const response: Providers | null = await getProviders();
      setProviders(response);
    };
    setProvidersAsync();
  }, []);

  return (
    <>
      {session?.user ? (
        <div className="flex items-center">
          <CreatePostBtn /> <SignOutBtn /> <Profile session={session} />
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <SignInBtn provider={provider} signIn={signIn} />
            ))}
        </>
      )}
    </>
  );
}
