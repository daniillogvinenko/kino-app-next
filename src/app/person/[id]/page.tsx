import { Header } from "@/components/Header";
import axios from "axios";
import Link from "next/link";

interface PersonPageProps {
    params: {
        id: string;
    };
}

export default async function PersonPage(props: PersonPageProps) {
    const { params } = props;

    const person = await axios.get(`http://localhost:3000/api/persons/${params.id}`).then((response) => response.data);

    return (
        <>
            <Header />
            <div className="container">
                <div>{person.fullName}</div>
                <br />
                <p>Актер</p>
                <ul>
                    {person.actedInMovies.map((m) => (
                        <Link href={`/movies/${m.id}`}>
                            <li>{m.title}</li>
                        </Link>
                    ))}
                </ul>
                <br />
                <p>Режисер</p>
                <ul>
                    {person.directedMovies.map((m) => (
                        <Link href={`/movies/${m.id}`}>
                            <li>{m.title}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
}
