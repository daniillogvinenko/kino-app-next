import { Header } from "@/components/Header";
import axios from "axios";

interface PersonPageProps {
    params: {
        id: string
    }
}

export default async function PersonPage(props: PersonPageProps) {
    const {params} = props

    const person = await axios.get(`http://localhost:3000/api/persons/${params.id}`).then((response) => response.data);

    return (
        <>
            <Header />
            <div className="container">
                <div>{person.fullName}</div>
                <br />
                <p>Актер</p>
                <ul>
                    {person.actedInMovies.map((m) => <li>{m.title}</li>)}
                </ul>
                <br />
                <p>Режисер</p>
                <ul>
                    {person.directedMovies.map((m) => <li>{m.title}</li>)}
                </ul>
            </div>
        </>
    );
}
