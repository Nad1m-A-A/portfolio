import { League_Spartan, Noto_Naskh_Arabic } from "next/font/google";

export const appFont = League_Spartan({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const logoFont = League_Spartan({
    subsets: ["latin"],
    weight: ["400"],
});

export const arabicFont = Noto_Naskh_Arabic({
    subsets: ["arabic"],
    weight: ["400", "500", "600", "700"],
});