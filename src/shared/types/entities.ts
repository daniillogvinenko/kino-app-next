import { Movie, Person, Review, User } from "@prisma/client";

export type PersonExpanded = Person & { actedInMovies: Movie[]; directedMovies: Movie[] };
export type MovieExpanded = Movie & { director: Person; mainActors: Person[] };
export type ReviewExpanded = Review & { user: User; movie: Movie };
