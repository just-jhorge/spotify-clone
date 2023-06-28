import { Figtree } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "../styles/globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
    title: "Spotify Clone | Your home of music",
    description: "Listening to music, not on spotify but on localhost:3000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={font.className}>
                <Sidebar>{children}</Sidebar>
            </body>
        </html>
    );
}
