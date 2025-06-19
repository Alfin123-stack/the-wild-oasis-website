import SideNavigation from "./SideNavigation";

export const metadata = {
    title: {
      default: "User account",
      template: "%s | User account",
      description:
        "User account page for The Wild Oasis, a unique and immersive experience that transports you to a world of tranquility and natural beauty.",
    },
  };

function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-12 h-screen w-full">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}

export default Layout;
