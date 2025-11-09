declare global {
  namespace LIBRARY_GRAPHQL_KIT {
    // Extension hooks for SDDM node types - augment these to add custom properties
    namespace SchemaMapNodeExtensions {
      export interface OutputObject {}
      export interface OutputField {}
      export interface InputObject {}
      export interface Enum {}
      export interface ArgumentOrInputField {}
    }
  }
}
