-- CreateTable
CREATE TABLE `Pinpoint` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `yearStart` INTEGER NOT NULL,
    `yearEnd` INTEGER NULL,
    `address` VARCHAR(191) NULL,
    `lat` DOUBLE NOT NULL,
    `lon` DOUBLE NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `author` VARCHAR(191) NULL,
    `occupations` VARCHAR(191) NOT NULL,
    `markerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Marker` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `color` VARCHAR(191) NULL,
    `icon` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Source` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `shortName` VARCHAR(191) NOT NULL,
    `source` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NULL,
    `pinpointId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PinpointRelations` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PinpointRelations_AB_unique`(`A`, `B`),
    INDEX `_PinpointRelations_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pinpoint` ADD CONSTRAINT `Pinpoint_markerId_fkey` FOREIGN KEY (`markerId`) REFERENCES `Marker`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Source` ADD CONSTRAINT `Source_pinpointId_fkey` FOREIGN KEY (`pinpointId`) REFERENCES `Pinpoint`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PinpointRelations` ADD CONSTRAINT `_PinpointRelations_A_fkey` FOREIGN KEY (`A`) REFERENCES `Pinpoint`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PinpointRelations` ADD CONSTRAINT `_PinpointRelations_B_fkey` FOREIGN KEY (`B`) REFERENCES `Pinpoint`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
