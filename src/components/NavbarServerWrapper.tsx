import Navbar from "./NavbarClient";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function NavbarWrapper() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <Navbar
      user={
        user
          ? {
              email: user.email ?? undefined,
            }
          : null
      }
    />
  );
}
