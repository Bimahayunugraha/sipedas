import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, formatDistanceToNow, subDays } from "date-fns";
import { id } from "date-fns/locale/id";
import { formatInTimeZone, toZonedTime } from "date-fns-tz";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dateFormat = (date: Date | string, formatStr?: string) => {
  const jakartaTimezone = "Asia/Jakarta";

  return formatInTimeZone(
    new Date(date),
    jakartaTimezone,
    formatStr || "dd MMM yyyy",
    {
      locale: id,
    },
  );
};
