import React, { useEffect, useState } from "react";
import UpdateUserForm from "../Forms/UpdateUserForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import ProfileView from "../Profile/ProfileView";

function UserProfile() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status == "unauthenticated") {
      router.push("/login");
    }
    if (session.status == "authenticated") {
      setUser({ ...session.data.user.user, role: session.data.user.role });
    }
  }, [session.status]);

  useEffect(() => {
    if (session.status != "loading" || !!user) {
      setLoading(false);
    }
  }, [session.status, user]);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      <ProfileView user={user} />
    </>
  );
}

export default UserProfile;
