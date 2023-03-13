/*
  Warnings:

  - You are about to drop the column `pinpointId` on the `Occupation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Occupation` DROP FOREIGN KEY `Occupation_pinpointId_fkey`;

-- AlterTable
ALTER TABLE `Occupation` DROP COLUMN `pinpointId`;

-- CreateTable
CREATE TABLE `_OccupationToPinpoint` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_OccupationToPinpoint_AB_unique`(`A`, `B`),
    INDEX `_OccupationToPinpoint_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_OccupationToPinpoint` ADD CONSTRAINT `_OccupationToPinpoint_A_fkey` FOREIGN KEY (`A`) REFERENCES `Occupation`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_OccupationToPinpoint` ADD CONSTRAINT `_OccupationToPinpoint_B_fkey` FOREIGN KEY (`B`) REFERENCES `Pinpoint`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
