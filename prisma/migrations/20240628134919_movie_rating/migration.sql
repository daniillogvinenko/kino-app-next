/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Review` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "rating" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Review_id_key" ON "Review"("id");
