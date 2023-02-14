type Mods = Record<string, boolean | string>

export function classNames(acl: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    acl,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional.filter(Boolean),
  ].join(' ');
}
