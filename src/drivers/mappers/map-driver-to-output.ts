import {BlogEntity} from "../types/driver";

export const mapDriverToOutput = (entity: BlogEntity): BlogEntity => ({
    ...entity
});