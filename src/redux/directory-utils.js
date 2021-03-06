import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectDirectorySections],
    (collections) => collections[collectionUrlParam]
  );
