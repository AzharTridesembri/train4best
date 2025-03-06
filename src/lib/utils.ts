type ClassValue = string | undefined | null | boolean;

export const cn = (...classes: ClassValue[]) => {
  return classes.filter(Boolean).join(' ');
};
