import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "The Wild Oasis",
    template: "%s | The Wild Oasis",
    description:
      "The Wild Oasis is a unique and immersive experience that transports you to a world of tranquility and natural beauty.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className=" max-w-7xl mx-auto">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
