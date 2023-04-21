export function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const res = Reflect.get(target, key)

      // TODO: track
      return res
    },
    set(target, key, value) {
      const res = Reflect.set(target, key, value)

      // TODO: trigger
      return res
    }

  })
}
