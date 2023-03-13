/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Occupation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[shortName]` on the table `Source` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Occupation_name_key` ON `Occupation`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Source_shortName_key` ON `Source`(`shortName`);
