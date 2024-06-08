/*
  Warnings:

  - Made the column `mainImage` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `movieDescription` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fullNameEnglish` on table `Person` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "mainImage" SET NOT NULL,
ALTER COLUMN "movieDescription" SET NOT NULL;

-- AlterTable
ALTER TABLE "Person" ALTER COLUMN "fullNameEnglish" SET NOT NULL;
