import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const rawUser = await getUser();
  const user = rawUser
    ? {
        given_name: rawUser.given_name ?? undefined,
        family_name: rawUser.family_name ?? undefined,
        picture: rawUser.picture ?? undefined,
        email: rawUser.email ?? undefined,
      }
    : null;

  return (
    <DashboardLayout user={user}>
      <h1 className="text-2xl font-semibold mb-4">Manage Projects</h1>
      <p className="text-gray-600 max-w-2xl mb-4">
        Projects are a way of organizing similar tasks, so that one can share parameters among tasks,
        or control what workers are allowed to work on certain classes of tasks. Contact Scale to set up a Project.
        <a href="#" className="text-blue-500 ml-1">Read More.</a>
      </p>
      <button className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-sm">Back</button>
    </DashboardLayout>
  );
}
