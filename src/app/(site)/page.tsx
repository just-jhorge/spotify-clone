import PageContent from "@/app/(site)/components/PageContent";
import ListItem from "@/components/ListItem";
import Header from "@/components/Header";
import getSongs from "@/actions/getSongs";

export const revalidate = 0;

export default async function Home() {
    const songs = await getSongs();

    return (
        <div className="bg-neutral-900 md:rounded-lg h-full w-full overflow-hidden overflow-y-auto">
            <Header>
                <div className="mb-2">
                    <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-5">
                        <ListItem image="/images/liked.png" name="Liked Songs" href="liked" />
                    </div>
                </div>
            </Header>
            <div className="mt-2 mb-7 px-6">
                <div className="flex justify-between items-center mb-3">
                    <h1 className="text-white text-2xl font-bold">Newest songs</h1>
                </div>
                <div>
                    {/* {songs.map((song) => (
                        <div className="capitalize" key={song.id}>
                            {song.title}
                        </div>
                    ))} */}
                    <PageContent songs={songs} />
                </div>
            </div>
        </div>
    );
}
