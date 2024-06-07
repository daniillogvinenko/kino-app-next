/*
  Warnings:

  - You are about to drop the column `ageLimit` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `genres` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `mainImg` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `otherImages` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `dateOfBirth` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `genres` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `otherImages` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `placeOfBirth` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `professions` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_movieId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_username_fkey";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "ageLimit",
DROP COLUMN "country",
DROP COLUMN "description",
DROP COLUMN "duration",
DROP COLUMN "genres",
DROP COLUMN "mainImg",
DROP COLUMN "otherImages",
DROP COLUMN "year",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Movie_id_seq";

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "dateOfBirth",
DROP COLUMN "genres",
DROP COLUMN "height",
DROP COLUMN "otherImages",
DROP COLUMN "placeOfBirth",
DROP COLUMN "professions",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Person_id_seq";

-- DropTable
DROP TABLE "Review";

-- DropEnum
DROP TYPE "Genre";

-- DropEnum
DROP TYPE "Profession";
