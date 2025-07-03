// app/page.tsx

import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function HomePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        {/* If there is no user, show the login/register buttons */}
        {!user ? (
          <>
            <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
            <p className="text-lg text-gray-600 mb-8">
              Join us to continue.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
                <LoginLink>Sign in</LoginLink>
              </button>
              <button className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300">
                <RegisterLink>Sign up</RegisterLink>
              </button>
            </div>
          </>
        ) : (
          /* If there is a user, show their email and a logout button */
          <>
            <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-lg text-gray-600 mb-8">
              You are signed in as: <strong>{user.email}</strong>
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              <LogoutLink>Sign out</LogoutLink>
            </button>
          </>
        )}
      </div>
    </main>
  );
}