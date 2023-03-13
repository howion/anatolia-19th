/*
  Warnings:

  - You are about to drop the column `pinpointId` on the `Source` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Source` DROP FOREIGN KEY `Source_pinpointId_fkey`;

-- AlterTable
ALTER TABLE `Source` DROP COLUMN `pinpointId`;

-- CreateTable
CREATE TABLE `_PinpointToSource` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PinpointToSource_AB_unique`(`A`, `B`),
    INDEX `_PinpointToSource_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_PinpointToSource` ADD CONSTRAINT `_PinpointToSource_A_fkey` FOREIGN KEY (`A`) REFERENCES `Pinpoint`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PinpointToSource` ADD CONSTRAINT `_PinpointToSource_B_fkey` FOREIGN KEY (`B`) REFERENCES `Source`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
