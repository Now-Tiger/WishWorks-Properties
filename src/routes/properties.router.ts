import Router from "express";
import {
  getProperties,
  getPublishedProperties,
  propertiesByLocality,
} from "../controllers/properties.controller";

export const propertiesRouter = Router();

propertiesRouter.get("/properties", getProperties);
propertiesRouter.get("/properties/published", getPublishedProperties);
propertiesRouter.get("/properties/:localityId", propertiesByLocality);
