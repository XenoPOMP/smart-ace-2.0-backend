-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "comment" TEXT,
    "rating" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "uuid" TEXT,
    "creationDate" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Comment" ("comment", "creationDate", "id", "name", "rating", "serviceId", "uuid") SELECT "comment", "creationDate", "id", "name", "rating", "serviceId", "uuid" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
