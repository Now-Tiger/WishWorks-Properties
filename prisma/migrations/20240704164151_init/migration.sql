-- CreateTable
CREATE TABLE "Property" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "propertyName" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "localityId" INTEGER NOT NULL,
    "locality" TEXT NOT NULL,
    "city" TEXT,
    "postalCode" INTEGER,
    "published" BOOLEAN NOT NULL DEFAULT false
);
