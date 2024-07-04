import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const model = new PrismaClient().property;

export const getProperties = async (_req: Request, res: Response) => {
  try {
    const properties = await model.findMany({
      select: {
        id: true,
        propertyName: true,
        ownerName: true,
        city: true,
      },
    });
    if (!properties) {
      res.status(404).json({ error: "Empty database" });
    }
    res.status(200).json({ message: "Listed Properties", data: properties });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const getPublishedProperties = async (_req: Request, res: Response) => {
  // FIX: NOT WORKING ELSE CONDITION
  try {
    const properties = await model.findMany({
      where: {
        published: true,
      },
    });
    if (!properties)
      return res.status(404).json({
        message: "No published properties",
        see: { link: "./api/v1/properties" },
      });
    res.status(200).json({ message: "Listed Properties", data: properties });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const propertiesByLocality = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req?.params?.localityId);
    const properties = await model.findMany({
      where: {
        localityId: id,
      },
    });
    if (!properties)
      return res.status(404).json({
        message: "No properties found",
        see: { link: "./api/v1/properties" },
      });
    res.status(200).json({ message: "Listed Properties", data: properties });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const deleteProperty = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req?.params?.propertyId);
    const deletedProperty = await model.delete({
      where: {
        id: id,
      },
    });
    if (!deletedProperty)
      return res.status(404).json({
        message: "Property not found",
        see: {
          link: "./api/v1/properties",
        },
      });
    res.status(200).json({
      message: "Property removed from the database successfully",
      deletedProperty: deletedProperty,
    });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
};
