"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "../../types";

import MediaItem from "./MediaItem";

interface LibraryProps {
    songs: Song[];
}

const Library: React.FC<LibraryProps> = ({ songs }) => {
    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const { user } = useUser();

    const onClick = () => {
        if (!user) {
            return authModal.onOpen();
        }

        return uploadModal.onOpen();

        //TODO: check for subscription
    };

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist className="text-neutral-400" size={26} />
                    <p className="text-neutral-400 font-medium text-md">Your library</p>
                </div>
                <AiOutlinePlus
                    onClick={onClick}
                    size={20}
                    className="text-neutral-400 cursor-pointer hover:text-white transition"
                />
            </div>
            {user ? (
                <div className="flex flex-col gap-y-2 mt-4 px-3">
                    {songs.map((item) => (
                        <MediaItem onClick={() => {}} key={item.id} data={item} />
                    ))}
                </div>
            ) : (
                <div className="mt-8 px-6">
                    <p className="text-neutral-400 text-sm">Sign in to see your music library</p>
                </div>
            )}
        </div>
    );
};

export default Library;
