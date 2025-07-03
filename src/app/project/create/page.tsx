// app/(dashboard)/create/page.tsx
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import CreateProjectClient from "@/components/project/CreateProjectClient";

export default async function CreateProjectPage() {
  const { getUser } = getKindeServerSession();
  const rawUser = await getUser();

  const user = rawUser ? { email: rawUser.email ?? undefined } : null;

  return <CreateProjectClient user={user} />;
}
