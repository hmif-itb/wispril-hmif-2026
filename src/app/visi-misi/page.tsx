import { HydrateClient } from "~/trpc/server";

export default function VisiMisiPage() {
    return (
        <HydrateClient>
            <div>
                ini visi misi
            </div>
        </HydrateClient>
    );
}