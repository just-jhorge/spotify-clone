import { Figtree } from "next/font/google";

import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

import Player from "@/components/Player";
import Sidebar from "@/components/Sidebar";

import getSongsByUserId from "@/actions/getSongsByUserId";

import "../styles/globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
    title: "Spotify Clone | Your home of music",
    description: "Listening to music, not on spotify but on localhost:3000",
};

export const revalidate = 0;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const userSongs = await getSongsByUserId();

    return (
        <html lang="en">
            <body className={font.className}>
                <ToasterProvider />
                <SupabaseProvider>
                    <UserProvider>
                        <ModalProvider />
                        <Sidebar songs={userSongs}>{children}</Sidebar>
                        <Player />
                    </UserProvider>
                </SupabaseProvider>
            </body>
        </html>
    );
}
