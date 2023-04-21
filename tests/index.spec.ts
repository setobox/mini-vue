import { describe, it, expect } from 'vitest'
import { add } from '../'

describe('index', () => {
  it('test', () => {
    expect(add(1, 2)).toBe(3)
  })
})
