import { Header } from "@/components/Header";

export default function Loading() {
    return (
        <>
            <Header user={undefined} />
            <div className="container">Loading...</div>
        </>
    );
}
