import { image } from "framer-motion/client";
import barkanImg2 from "../assets/barkan.jpg";
import barkanImg from "../assets/barkan2.jpg";
import roshahin from "../assets/roshahain.jpg";
import oranit from "../assets/oranit.png";
import beitel from "../assets/beitel.png";
import ariel from "../assets/arial.png";
import jerushalem from "../assets/jerushalem.png";
export const properties = [
    {
        id: 'barkan-500',
        title: 'ברקן – 8 מגרשים של 500 מ"ר',
        location: 'ברקן',
        type: 'מגורים',
        size: 500,
        units: 8,
        price: 1800000,
        status: 'כולל פיתוח',
        exclusive: true,
        image: barkanImg2

    },
    {
        id: 'barkan-330',
        title: 'ברקן – 60 מגרשים של 330 מ"ר',
        location: 'ברקן',
        type: 'מגורים',
        size: 330,
        units: 60,
        price: 1200000,
        status: 'כולל פיתוח',
        exclusive: true,
        image: barkanImg

    },
    {
        id: 'oranit',
        title: 'אורנית – 300 דונם מחולקים למגרשים של 330 מ"ר',
        location: 'אורנית',
        type: 'מגורים',
        size: 330,
        units: 909,
        price: 1800000,
        status: 'כולל פיתוח',
        exclusive: true,
        image: oranit
    },
    {
        id: 'beitel-60',
        title: 'בית אל – 60 דונם קרקע פרטית',
        location: 'בית אל',
        type: 'מסחרי',
        size: 60000,
        price: 1600000,
        status: 'מיקום מעולה',
        exclusive: true,
        image:beitel
    },
    {
        id: 'ariel-industrial',
        title: 'אריאל – 40 דונם לתעשייה/לוגיסטיקה',
        location: 'אריאל',
        type: 'מסחרי',
        size: 40000,
        price: 1600000,
        status: 'טאבו + תב"ע',
        exclusive: true, 
        image: ariel
    },
    {
        id: 'kotel-building',
        title: 'בניין 950 מ"ר בשלוש קומות ליד הכותל המערבי',
        location: 'ירושלים – הכותל',
        type: 'מסחרי',
        size: 950,
        price: "דבר איתנו לעוד פרטים",
        status: 'מיקום נדיר – ליד הכותל',
        exclusive: true,
        image: jerushalem
    },
    {
        id: 'rosh-haayin-industrial',
        title: 'ראש העין – 160 דונם לתעשייה',
        location: 'ראש העין',
        type: 'תעשייה',
        size: 160000,
        price: 1900000,
        status: 'קרקע פרטית מחולקת ל-2 חלקות: 62 + 100 דונם',
        exclusive: true,
        image: roshahin
    },
    {
        id: 'ariel-industrial-new',
        title: 'אריאל – 40 דונם קרקע פרטית לתעשייה/לוגיסטיקה',
        location: 'אריאל',
        type: 'תעשייה',
        size: 40000,
        price: 1900000,
        status: 'תב"ע לוגיסטיקה ותעשייה',
        exclusive: true,
        image:beitel
    }
    ];
