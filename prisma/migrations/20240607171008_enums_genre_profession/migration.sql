-- CreateEnum
CREATE TYPE "Profession" AS ENUM ('Producer', 'Director', 'Actor', 'Screenwriter', 'Editor', 'Operator', 'Composer');

-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('drama', 'crime', 'fantastic', 'comedy', 'adventures', 'horror', 'actionMovie', 'Western', 'military', 'detective', 'melodrama', 'documentary', 'thriller');

-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "movieGenres" "Genre"[];

-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "personGenres" "Genre"[];
