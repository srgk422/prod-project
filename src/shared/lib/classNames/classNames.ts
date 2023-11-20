type Mods = Record<string, boolean | string>

export function classNames(
  acl: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string {
  return [
    acl,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional.filter(Boolean),
  ].join(' ');
}
