-- CreateEnum
CREATE TYPE "Profession" AS ENUM ('Producer', 'Director', 'Actor', 'Screenwriter', 'Editor', 'Operator', 'Composer');

-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('drama', 'crime', 'fantastic', 'comedy', 'adventures', 'horror', 'actionMovie', 'Western', 'military', 'detective', 'melodrama', 'documentary', 'thriller');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "favorites" TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "professions" "Profession"[],
    "height" INTEGER NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "placeOfBirth" TEXT NOT NULL,
    "genres" "Genre"[],
    "mainImg" TEXT NOT NULL,
    "otherImages" TEXT[],

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "mainImg" TEXT NOT NULL,
    "otherImages" TEXT[],
    "genres" "Genre"[],
    "year" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "ageLimit" TEXT NOT NULL,
    "directorId" INTEGER NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "Text" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_actorsOfMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_actorsOfMovie_AB_unique" ON "_actorsOfMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_actorsOfMovie_B_index" ON "_actorsOfMovie"("B");

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_directorId_fkey" FOREIGN KEY ("directorId") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_actorsOfMovie" ADD CONSTRAINT "_actorsOfMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_actorsOfMovie" ADD CONSTRAINT "_actorsOfMovie_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;
