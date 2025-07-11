import SignInButton from "@/app/_components/SignInButton";

const metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl font-semibold">
        Sign in to access your guest area
      </h2>
      <SignInButton />
    </div>
  );
}
