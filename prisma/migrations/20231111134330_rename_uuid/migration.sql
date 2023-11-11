/*
  Warnings:

  - You are about to drop the column `userSessionId` on the `Comment` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "comment" TEXT,
    "rating" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "uuid" TEXT
);
INSERT INTO "new_Comment" ("comment", "id", "name", "rating", "serviceId") SELECT "comment", "id", "name", "rating", "serviceId" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
