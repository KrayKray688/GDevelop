// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class gdExtensionProperties {
  getValue(extension: string, property: string): string;
  setValue(extension: string, property: string, newValue: string): void;
  hasProperty(extension: string, property: string): boolean;
  getAllExtensionProperties(extension: string, project: gdProject): gdMapStringPropertyDescriptor;
  serializeTo(element: gdSerializerElement): void;
  unserializeFrom(element: gdSerializerElement): void;
  delete(): void;
  ptr: number;
};