/*
  Warnings:

  - You are about to drop the column `occupations` on the `Pinpoint` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Pinpoint` DROP COLUMN `occupations`;

-- CreateTable
CREATE TABLE `Occupation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `pinpointId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Occupation` ADD CONSTRAINT `Occupation_pinpointId_fkey` FOREIGN KEY (`pinpointId`) REFERENCES `Pinpoint`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
