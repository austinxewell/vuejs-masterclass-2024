import type { Collabs } from '@/utils/supaQueries'
import type { ParserError } from './Error'

export type GroupedCollabs = {
  [key: string]: Collabs
}

export type LocalGroupedCollabs = {
  [key: string]: (Collabs | ParserError<Collabs>)[]
}
