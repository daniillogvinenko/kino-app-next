-- AlterTable
CREATE SEQUENCE movie_id_seq;
ALTER TABLE "Movie" ALTER COLUMN "id" SET DEFAULT nextval('movie_id_seq');
ALTER SEQUENCE movie_id_seq OWNED BY "Movie"."id";

-- AlterTable
CREATE SEQUENCE person_id_seq;
ALTER TABLE "Person" ALTER COLUMN "id" SET DEFAULT nextval('person_id_seq');
ALTER SEQUENCE person_id_seq OWNED BY "Person"."id";

-- AlterTable
CREATE SEQUENCE review_id_seq;
ALTER TABLE "Review" ALTER COLUMN "id" SET DEFAULT nextval('review_id_seq');
ALTER SEQUENCE review_id_seq OWNED BY "Review"."id";
