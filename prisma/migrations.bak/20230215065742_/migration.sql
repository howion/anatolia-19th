/*
  Warnings:

  - You are about to drop the column `address` on the `Pinpoint` table. All the data in the column will be lost.
  - You are about to drop the column `author` on the `Pinpoint` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Marker` MODIFY `color` VARCHAR(255) NULL,
    MODIFY `icon` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `Occupation` MODIFY `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `Pinpoint` DROP COLUMN `address`,
    DROP COLUMN `author`;

-- AlterTable
ALTER TABLE `Source` MODIFY `source` VARCHAR(255) NOT NULL,
    MODIFY `url` VARCHAR(255) NULL;
