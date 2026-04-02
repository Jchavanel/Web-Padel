export function resolveMembershipScope(isPremium = false, isBasic = false) {
  if (isPremium) return "premium" as const;
  if (isBasic) return "basic" as const;
  return "none" as const;
}
