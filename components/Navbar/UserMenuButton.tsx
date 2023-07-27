"use client";
import { Session } from "next-auth";
import Image from "next/image";
import placeholder from "../../public/images/placeholder.jpg";
import { useCallback, useState } from "react";
import { signIn, signOut } from "next-auth/react";

interface UserMenuButtonProps {
  session: Session | null;
}

export default function UserMenuButton({ session }: UserMenuButtonProps) {
  const user = session?.user;

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div>
      {user ? (
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs">{user?.name}</p>
          <Image
            src={user?.image || placeholder}
            height={20}
            width={20}
            alt={user?.name || "Profile pic"}
            className="rounded-full"
          />
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="text-xs text-rose-400 hover:underline"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          {!session && (
            <button className="text-xs text-blue-500" onClick={() => signIn()}>
              Sign in
            </button>
          )}
          <Image
            src="/images/placeholder.jpg"
            width={20}
            height={20}
            alt="User"
            className="rounded-full"
          />
        </div>
      )}
    </div>
  );
}
