import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    '1': 'Swasthya Darpan',
                    '2': 'Analyse, Monitor and Care',
                    '3': "Swasthya Darpan is your personal health companion, merging cutting-edge technology with predictive analytics. Monitor your vital health metrics in real-time, receive intelligent predictions, and unlock personalized recommendations for a proactive approach to your well-being.",
                    "4": "Get Started",
                    "5": "How it works ?",
                    "6": "Step 1",
                    "7": "Find a physical node in your area.",
                    "8": "Step 2",
                    "9": "Enter your details",
                    "10": "Step 3",
                    "11": "Pay with coin or online",
                    "12": "Swasthya Darpan @ 2024. All rights reserved",
                    "13": "Made with 💖 by Geeks.js",
                    "14": "Deependra Parmar",
                    "15": "Ashutosh Soni",
                    "16": "Aarav Singh Chouhan",
                    "17": "Anushka Savner",
                    "18": "Our Team",
                    "19": "Home",
                    "20": "Contact",
                    "21": "Menu",
                    "22": "Login",
                    "23": "Your Health Report",
                    "24": "Name",
                    "25": "Age",
                    "26": "Heart Rate",
                    "27": "SpO2",
                    "28": "Glucose",
                    "29": "Temperature",
                    "30": "Choose Language",
                },
            },
            hi: {
                translation: {
                    '1': 'स्वास्थ्य दर्पण',
                    '2': 'विश्लेषण, मॉनिटर और देखभाल',
                    '3': 'स्वास्थ्य दर्पण आपका व्यक्तिगत स्वास्थ्य साथी है, जो पूर्वानुमानात्मक विश्लेषण के साथ नवीनतम तकनीक को मिलाकर आपकी महत्वपूर्ण स्वास्थ्य मापांकों का रीयल-टाइम में मॉनिटर करता है। बुद्धिमान पूर्वानुमान प्राप्त करें और अपने भले-बुरे स्वास्थ्य के लिए परिस्थितियों को सुलझाने के लिए व्यक्तिगत सुझावों को अनलॉक करें।',
                    '4': 'शुरू करें',
                    '5': 'यह कैसे काम करता है?',
                    '6': 'कदम 1',
                    '7': 'अपने क्षेत्र में एक भौतिक नोड खोजें।',
                    '8': 'कदम 2',
                    '9': 'अपना विवरण दर्ज करें',
                    '10': 'कदम 3',
                    '11': 'सिक्का या ऑनलाइन से भुगतान करें',
                    '12': 'स्वास्थ्य दर्पण @ 2024. सभी अधिकार सुरक्षित हैं',
                    '13': 'जीक्स डॉट जेएस द्वारा 💖 के साथ बनाया गया है',
                    '14': 'दीपेंद्र परमार',
                    '15': 'आशुतोष सोनी',
                    '16': 'आरव सिंह चौहान',
                    '17': 'अनुष्का सावनेर',
                    '18': 'हमारी टीम',
                    '19': 'होम',
                    '20': 'संपर्क',
                    '21': 'मेनू',
                    '22': 'लॉगिन',
                    '23': 'आपकी स्वास्थ्य रिपोर्ट',
                    '24': 'नाम',
                    '25': 'आयु',
                    '26': 'हृदय दर',
                    '27': 'एसपीओ2',
                    '28': 'ग्लूकोज',
                    '29': 'तापमान',
                    '30': 'भाषा चुनें',
                },

            },
        },
        fallbackLng: 'en', // Default language if translation is not available
        debug: true, // Enable debug mode
    });

export default i18n;
