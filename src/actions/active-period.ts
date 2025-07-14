import {
  isAfter,
  isBefore,
  isEqual,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

// Fungsi untuk menentukan apakah surat masih aktif
export const isActiveLetter = (tglBerakhir?: Date): boolean => {
  const today = new Date();
  return isAfter(tglBerakhir!, today) || isEqual(tglBerakhir!, today);
};

export const getLabelActivePeriod = (
  tglMulai: Date,
  tglAkhir: Date,
): string => {
  const tahun = differenceInYears(tglAkhir, tglMulai);
  if (tahun >= 1) return `${tahun} Tahun`;

  const bulan = differenceInMonths(tglAkhir, tglMulai);
  if (bulan >= 1) return `${bulan} Bulan`;

  const hari = differenceInDays(tglAkhir, tglMulai);
  return `${hari} Hari`;
};
