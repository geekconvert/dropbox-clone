const nonImageMimeTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/zip",
];

export const acceptFileTypes = [
  "image/*",
  ...nonImageMimeTypes,
].join(",");

export const isAllowedMimeType = (type: string) =>
  type.startsWith("image/") || nonImageMimeTypes.includes(type);

export const allowedMimeTypes = {
  images: "image/*",
  nonImages: nonImageMimeTypes,
};
