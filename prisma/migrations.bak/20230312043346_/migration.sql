-- DropForeignKey
ALTER TABLE `Pinpoint` DROP FOREIGN KEY `Pinpoint_markerId_fkey`;

-- DropForeignKey
ALTER TABLE `_OccupationToPinpoint` DROP FOREIGN KEY `_OccupationToPinpoint_A_fkey`;

-- DropForeignKey
ALTER TABLE `_OccupationToPinpoint` DROP FOREIGN KEY `_OccupationToPinpoint_B_fkey`;

-- DropForeignKey
ALTER TABLE `_PinpointRelations` DROP FOREIGN KEY `_PinpointRelations_A_fkey`;

-- DropForeignKey
ALTER TABLE `_PinpointRelations` DROP FOREIGN KEY `_PinpointRelations_B_fkey`;

-- DropForeignKey
ALTER TABLE `_PinpointToSource` DROP FOREIGN KEY `_PinpointToSource_A_fkey`;

-- DropForeignKey
ALTER TABLE `_PinpointToSource` DROP FOREIGN KEY `_PinpointToSource_B_fkey`;

-- RenameIndex
ALTER TABLE `Pinpoint` RENAME INDEX `Pinpoint_markerId_fkey` TO `Pinpoint_markerId_idx`;
