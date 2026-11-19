// Loose typing: the connected database schema is not available to generate exact types.
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Database = any

export type Tables<_T extends string = string, _U = never> = any
export type TablesInsert<_T extends string = string, _U = never> = any
export type TablesUpdate<_T extends string = string, _U = never> = any
export type Enums<_T extends string = string, _U = never> = any
export type CompositeTypes<_T extends string = string, _U = never> = any
export const Constants = { public: { Enums: {} } } as const
