// import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import DashboardClient from "@/components/dashboard/DashboardClient";

export default async function DashboardPage() {
	const { getUser } = getKindeServerSession();
	const rawUser = await getUser();
	const user = rawUser
		? {
				email: rawUser.email ?? undefined,
		  }
		: null;

	return <DashboardClient user={user} />;
}