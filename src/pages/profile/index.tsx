import React, { useEffect } from "react";
import { useSession } from "next-auth/client";

const ProfilePage = () => {
  const [session, loading] = useSession();

  useEffect(() => {
    if (!loading) {
      console.log(session);
    }
  }, [loading]);

  return <div>Profile Page</div>;
};

export default ProfilePage;
