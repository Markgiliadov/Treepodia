(function (player) {
    player.onDataLoaded({
        "poster" : function(parameters){
            return  parameters.templateUrl + "thumbnail.jpg";
        },
        "audio" : {
            "src" : "https://trpd-repository.s3.amazonaws.com/itemplates/persovid/persovidHRKaliGroup/audio/music/silence.mp3",
            "volume" : 0.0,
            "loop" : true
        },
        "dependencies" : {
            "styles" : [
                "https://static.treepodia.com/dynamicplayer/css/dynamic.video.player.css",
                "https://fonts.googleapis.com/css?family=Rubik:Bold"
            ],
            "libs" : [
                "https://static.treepodia.com/dynamicplayer/js/lottie_svg.5.6.8.min.js",
                "https://static.treepodia.com/dynamicplayer/js/lottie.canvas.fix.js",
                "https://static.treepodia.com/dynamicplayer/js/canvas-text-wrapper.js",
                "https://static.treepodia.com/dynamicplayer/js/howler.v2.1.1.min.js",
                "https://static.treepodia.com/dynamicplayer/js/snap.svg-min.js"
            ],
            "fonts" : [
                {
                    "name" : "Rubik",
                    "lang" : "en",
                    "sample" : "abcABC"
                },
                {
                    "name" : "Rubik",
                    "lang" : "he",
                    "sample" : "כעמנה"
                }
            ]
        },
        "sku" : {
            "value" : "{sku}"
        },
        "resolution" : {
            "width" : 1920,
            "height" : 1080
        },
        "eventsHandlers" : [
            function(type, data){

            }
        ],
        "sections" : [
            {
                "init" : function(parameters){
                    parameters['gender'] = parameters['gender'] || 'p';
                    if (parameters['gender'] === 'זכר'
                        || parameters['gender'] === 'm'
                        || parameters['gender'] === 'male'
                        || parameters['gender'] === 'Male'
                    ) {
                        parameters['genderCode'] = 'm';
                    }else if (parameters['gender'] === 'נקבה'
                        || parameters['gender'] === 'f'
                        || parameters['gender'] === 'female'
                        || parameters['gender'] === 'Female'
                    ) {
                        parameters['genderCode'] = 'f';
                    }
                    else {
                        parameters['genderCode'] = 'p';
                    }
                },
                "audio" : {
                    "volume" : 0.2
                },
                "condition" : true,
                "timeline" :	[

                    {
                        "condition" : function(parameters) {
                            return true;
                        },
                        "video" : {
                            "src" : function(parameters){
                                return parameters.templateUrl + 'video/update04102021/bg/BG_'+ parameters['genderCode'].toUpperCase()+'.mp4';


                            }
                        },
                        "start" : 0,
                        "end" : 66070
                    },
                    {
                        "condition" : function(parameters) {
                            return true;
                        },
                        "svg" : {
                            "src" : function(parameters) {
                                return parameters.templateUrl + 'svgs/update20102021/edit/data.json';
                            },
                            "animationData" : function(parameters, animationSVG){
                                let textQuality = 1.0;

                                animationSVG = parameters.setSvgImage(animationSVG, 'image_0', parameters.getImageParameter('companyLogo', 'contain', 748, 238));

                                animationSVG = parameters.setSvgImage(animationSVG, 'image_1', parameters.getTextImageParameter('name', {
                                    width:1379 * textQuality, height:298 * textQuality,
                                    textWidth:1379 * textQuality, textHeight:298 * textQuality,
                                    offsetX:0, offsetY:0, font: "200px Rubik", maxFontSize: 200,
                                    direction: "rtl", textColor: '#00A7AA'
                                }));
                                parameters['managerText'] = parameters['managerName'] + ' ' + parameters['managerPositon']

                                animationSVG = parameters.setSvgImage(animationSVG, 'image_2', parameters.getTextImageParameter('managerText', {
                                    width:134 * textQuality, height:67 * textQuality,
                                    textWidth:134 * textQuality, textHeight:67 * textQuality,
                                    offsetX:0, offsetY:0, font: "200px Rubik", maxFontSize: 200,
                                    direction: "rtl", textColor: '#000000'
                                }));
                                animationSVG = parameters.setSvgImage(animationSVG, 'image_3', parameters.getTextImageParameter('name', {
                                    width:1379 * textQuality, height:298 * textQuality,
                                    textWidth:1379 * textQuality, textHeight:298 * textQuality,
                                    offsetX:0, offsetY:0, font: "200px Rubik", maxFontSize: 200,
                                    direction: "rtl", textColor: '#000000'
                                }));

                                animationSVG = parameters.setSvgImage(animationSVG, 'image_4', parameters.getTextImageParameter('name', {
                                    width:214 * textQuality, height:56 * textQuality,
                                    textWidth:214 * textQuality, textHeight:56 * textQuality,
                                    offsetX:0, offsetY:0, font: "200px Rubik", maxFontSize: 200,
                                    direction: "rtl", textColor: '#FFFFFF'
                                }));

                                animationSVG = parameters.setSvgImage(animationSVG, 'image_5', parameters.getTextImageParameter('name', {
                                    width:722 * textQuality, height:103 * textQuality,
                                    textWidth:722 * textQuality, textHeight:103 * textQuality,
                                    offsetX:0, offsetY:0, font: "200px Rubik", maxFontSize: 200,
                                    direction: "rtl", textColor: '#FD0E1A'
                                }));

                                return animationSVG;
                            },
                            "renderer" : {
                                "type" : "svg",
                                "width" : 1920,
                                "height" : 1080
                            },
                            "css" : {
                                "z-index" : 1
                            }
                        },
                        "start" : 15,
                        "end" : 66070
                    },
                    {
                        "condition" : function(parameters) {
                            return true;
                        },
                        "audio" : {
                            "src" : function(parameters){
                                let audio = [];
                                audio[audio.length] = parameters.templateUrl + 'audio/soundEffects/opening.mp3';

                                return audio;
                            }
                        },
                        "start" : 0,
                        "end" : 50000
                    },
                    {
                        "condition" : function(parameters) {
                            return true;
                        },
                        "audio" : {
                            "src" : function(parameters){
                                let audio = [];
                                audio[audio.length] = parameters.templateUrl + 'audio/main/update04102021/importantEvent.mp3';

                                if (parameters['genderCode'] === 'p'){
                                    audio[audio.length] = parameters.templateUrl + 'audio/voiceover/names/name_m.wav';

                                }else if((parameters['name'] && parameters.names[ 'ל' + parameters['name'].toLowerCase()])){
                                    audio[audio.length] = parameters.templateUrl + 'audio/voiceover/names/' + parameters.names[ 'ל' + parameters['name'].toLowerCase()];
                                }else if (parameters['genderCode'] === 'm') {
                                    // audio[audio.length] = parameters.templateUrl + 'audio/voiceover/names/' + parameters.names['למישהו מיוחד'];
                                    audio[audio.length] = parameters.templateUrl + 'audio/voiceover/names/name_m.wav';

                                }else {
                                    // audio[audio.length] = parameters.templateUrl + 'audio/voiceover/names/' + parameters.names['למישהי מיוחדת'];
                                    audio[audio.length] = parameters.templateUrl + 'audio/voiceover/names/name_f.wav';

                                }


                                audio[audio.length] = parameters.templateUrl + 'audio/main/update04102021/birthdayCelebrate.mp3';
                                // audio[audio.length] = parameters.templateUrl + 'audio/main/update04102021/baloon.mp3';

                                console.log(audio)
                                return audio;
                            }
                        },
                        "start" : 3100,
                        "end" : 15000
                    },
                    {
                        "condition" : function(parameters) {
                            return true;
                        },
                        "audio" : {
                            "src" : function(parameters){
                                let audio = [];

                                audio[audio.length] = parameters.templateUrl + 'audio/main/update04102021/baloon.mp3';


                                return audio;
                            }
                        },
                        "start" : 15240,
                        "end" : 21000
                    },
                    {
                        "condition" : function(parameters) {
                            return true;
                        },
                        "audio" : {
                            "src" : function(parameters){
                                let audio = [];
                                audio[audio.length] = parameters.templateUrl + 'audio/main/update04102021/kindergarden.mp3';
                                audio[audio.length] = parameters.templateUrl + 'audio/main/update04102021/drawing.mp3';


                                return audio;
                            }
                        },
                        "start" : 18230,
                        "end" : 29000
                    },
                    {
                        "condition" : function(parameters) {
                            return true;
                        },
                        "audio" : {
                            "src" : function(parameters){
                                let audio = [];
                                audio[audio.length] = parameters.templateUrl + 'audio/main/update04102021/goOut.mp3';
                                audio[audio.length] = parameters.templateUrl + 'audio/soundEffects/door.mp3';
                                return audio;
                            }
                        },
                        "start" : 25000,
                        "end" : 29000
                    },
                    {
                        "condition" : function(parameters) {
                            return true;
                        },
                        "audio" : {
                            "src" : function(parameters){
                                let audio = [];
                                audio[audio.length] = parameters.templateUrl + 'audio/main/update04102021/somethingExciting.mp3';
                                return audio;
                            }
                        },
                        "start" : 29000,
                        "end" : 32000
                    },

                    {
                        "condition" : function(parameters) {
                            return true;
                        },
                        "audio" : {
                            "src" : function(parameters){
                                let audio = [];
                                audio[audio.length] = parameters.templateUrl + 'audio/main/update04102021/thailandVacation.mp3';
                                audio[audio.length] = parameters.templateUrl + 'audio/soundEffects/door.mp3';
                                return audio;
                            }
                        },
                        "start" : 32120,
                        "end" : 39000
                    },
                    {
                        "condition" : function(parameters) {
                            return true;
                        },
                        "audio" : {
                            "src" : function(parameters){
                                let audio = [];
                                audio[audio.length] = parameters.templateUrl + 'audio/main/update04102021/ideas.mp3';
                                return audio;
                            }
                        },
                        "start" : 39240,
                        "end" : 42000
                    },
                    {
                        "condition" : function(parameters) {
                            return true;
                        },
                        "audio" : {
                            "src" : function(parameters){
                                let audio = [];
                                audio[audio.length] = parameters.templateUrl + 'audio/main/update04102021/videoIdea.mp3';
                                audio[audio.length] = parameters.templateUrl + 'audio/main/update04102021/video.mp3';


                                return audio;
                            }
                        },
                        "start" : 42000,
                        "end" : 48000
                    },
                    {
                        "condition" : function(parameters) {
                            return true;
                        },
                        "audio" : {
                            "src" : function(parameters){
                                let audio = [];
                                audio[audio.length] = parameters.templateUrl + 'audio/main/update04102021/personalVideo.mp3';
                                audio[audio.length] = parameters.templateUrl + 'audio/main/update04102021/innovation.mp3';
                                audio[audio.length] = parameters.templateUrl + 'audio/main/update04102021/mazalTov_'+ parameters['genderCode'] + '1.mp3';
                                console.log(audio)

                                return audio;
                            }
                        },
                        "start" : 48010,
                        "end" : 66000
                    },
                    {
                        "condition" : function(parameters) {
                            return true;
                        },
                        "audio" : {
                            "src" : function(parameters){
                                let audio = [];
                                audio[audio.length] = parameters.templateUrl + 'audio/soundEffects/end.mp3';

                                return audio;
                            }
                        },
                        "start" : 53240,
                        "end" : 67000
                    }
                ]
            }

        ],
        "parameters" : {
            "templateUrl" : "https://repository.treepodia.com/persovid/persovidHRCartoonBday/",
            "videoParameters" : "{videoParameters}",
            "names" :
                {
                    "default":"default.mp3",
                    "map.json":"map.json",
                    "לאבי": "לאבי.wav",
                    "לאביאל": "לאביאל.wav",
                    "לאביב": "לאביב.wav",
                    "לאביבה": "לאביבה.wav",
                    "לאביבית": "לאביבית.wav",
                    "לאביגדור": "לאביגדור.wav",
                    "לאביגיל": "לאביגיל.wav",
                    "לאביה": "לאביה.wav",
                    "לאביהו": "לאביהו.wav",
                    "לאביחי": "לאביחי.wav",
                    "לאביטל": "לאביטל.wav",
                    "לאבינועם": "לאבינועם.wav",
                    "לאבינעם": "לאבינעם.wav",
                    "לאביעד": "לאביעד.wav",
                    "לאבירם": "לאבירם.wav",
                    "לאבישג": "לאבישג.wav",
                    "לאבישי": "לאבישי.wav",
                    "לאביתר": "לאביתר.wav",
                    "לאבלין": "לאבלין.wav",
                    "לאבנר": "לאבנר.wav",
                    "לאברהם": "לאברהם.wav",
                    "לאברם": "לאברם.wav",
                    "לאבשלום": "לאבשלום.wav",
                    "לאגם": "לאגם.wav",
                    "לאדה": "לאדה.wav",
                    "לאדוארד": "לאדוארד.wav",
                    "לאדוה": "לאדוה.wav",
                    "לאדווה": "לאדווה.wav",
                    "לאדי": "לאדי.wav",
                    "לאדיר": "לאדיר.wav",
                    "לאדית": "לאדית.wav",
                    "לאדל": "לאדל.wav",
                    "לאדלה": "לאדלה.wav",
                    "לאדם": "לאדם.wav",
                    "לאדר": "לאדר.wav",
                    "לאדריאן": "לאדריאן.wav",
                    "לאדריאנה": "לאדריאנה.wav",
                    "לאהד": "לאהד.wav",
                    "לאהובה": "לאהובה.wav",
                    "לאהוד": "לאהוד.wav",
                    "לאהרון": "לאהרון.wav",
                    "לאהרן": "לאהרן.wav",
                    "לאודט": "לאודט.wav",
                    "לאודי": "לאודי.wav",
                    "לאודיה": "לאודיה.wav",
                    "לאודל": "לאודל.wav",
                    "לאודליה": "לאודליה.wav",
                    "לאוה": "לאוה.wav",
                    "לאוהד": "לאוהד.wav",
                    "לאווה": "לאווה.wav",
                    "לאולג": "לאולג.wav",
                    "לאולגה": "לאולגה.wav",
                    "לאוליביה": "לאוליביה.wav",
                    "לאולסיה": "לאולסיה.wav",
                    "לאוסנת": "לאוסנת.wav",
                    "לאופיר": "לאופיר.wav",
                    "לאופירה": "לאופירה.wav",
                    "לאופק": "לאופק.wav",
                    "לאוקסנה": "לאוקסנה.wav",
                    "לאור": "לאור.wav",
                    "לאוראל": "לאוראל.wav",
                    "לאורה": "לאורה.wav",
                    "לאורטל": "לאורטל.wav",
                    "לאורי": "לאורי.wav",
                    "לאוריאל": "לאוריאל.wav",
                    "לאוריאן": "לאוריאן.wav",
                    "לאוריה": "לאוריה.wav",
                    "לאוריין": "לאוריין.wav",
                    "לאורית": "לאורית.wav",
                    "לאורלי": "לאורלי.wav",
                    "לאורן": "לאורן.wav",
                    "לאורנה": "לאורנה.wav",
                    "לאורנית": "לאורנית.wav",
                    "לאושר": "לאושר.wav",
                    "לאושרה": "לאושרה.wav",
                    "לאושרי": "לאושרי.wav",
                    "לאושרית": "לאושרית.wav",
                    "לאושרת": "לאושרת.wav",
                    "לאחינועם": "לאחינועם.wav",
                    "לאחיקם": "לאחיקם.wav",
                    "לאחמד": "לאחמד.wav",
                    "לאיאד": "לאיאד.wav",
                    "לאיגור": "לאיגור.wav",
                    "לאידה": "לאידה.wav",
                    "לאידית": "לאידית.wav",
                    "לאיה": "לאיה.wav",
                    "לאיהאב": "לאיהאב.wav",
                    "לאיזבלה": "לאיזבלה.wav",
                    "לאיטה": "לאיטה.wav",
                    "לאייל": "לאייל.wav",
                    "לאיילה": "לאיילה.wav",
                    "לאיילת": "לאיילת.wav",
                    "לאיל": "לאיל.wav",
                    "לאילה": "לאילה.wav",
                    "לאילון": "לאילון.wav",
                    "לאיליה": "לאיליה.wav",
                    "לאילן": "לאילן.wav",
                    "לאילנה": "לאילנה.wav",
                    "לאילנית": "לאילנית.wav",
                    "לאילת": "לאילת.wav",
                    "לאימאן": "לאימאן.wav",
                    "לאימן": "לאימן.wav",
                    "לאינגה": "לאינגה.wav",
                    "לאינה": "לאינה.wav",
                    "לאינס": "לאינס.wav",
                    "לאיציק": "לאיציק.wav",
                    "לאירה": "לאירה.wav",
                    "לאירינה": "לאירינה.wav",
                    "לאיריס": "לאיריס.wav",
                    "לאירית": "לאירית.wav",
                    "לאירנה": "לאירנה.wav",
                    "לאיתי": "לאיתי.wav",
                    "לאיתמר": "לאיתמר.wav",
                    "לאיתן": "לאיתן.wav",
                    "לאלבינה": "לאלבינה.wav",
                    "לאלברט": "לאלברט.wav",
                    "לאלדד": "לאלדד.wav",
                    "לאלה": "לאלה.wav",
                    "לאלון": "לאלון.wav",
                    "לאלונה": "לאלונה.wav",
                    "לאלחנן": "לאלחנן.wav",
                    "לאלי": "לאלי.wav",
                    "לאליאב": "לאליאב.wav",
                    "לאליאור": "לאליאור.wav",
                    "לאליאן": "לאליאן.wav",
                    "לאליאנה": "לאליאנה.wav",
                    "לאליאס": "לאליאס.wav",
                    "לאליה": "לאליה.wav",
                    "לאליהו": "לאליהו.wav",
                    "לאליזבט": "לאליזבט.wav",
                    "לאליזבטה": "לאליזבטה.wav",
                    "לאלימלך": "לאלימלך.wav",
                    "לאלין": "לאלין.wav",
                    "לאלינה": "לאלינה.wav",
                    "לאלינור": "לאלינור.wav",
                    "לאליס": "לאליס.wav",
                    "לאליסה": "לאליסה.wav",
                    "לאליעד": "לאליעד.wav",
                    "לאליעזר": "לאליעזר.wav",
                    "לאלירן": "לאלירן.wav",
                    "לאלישבע": "לאלישבע.wav",
                    "לאלישע": "לאלישע.wav",
                    "לאלכס": "לאלכס.wav",
                    "לאלכסה": "לאלכסה.wav",
                    "לאלכסי": "לאלכסי.wav",
                    "לאלכסיי": "לאלכסיי.wav",
                    "לאלכסנדר": "לאלכסנדר.wav",
                    "לאלכסנדרה": "לאלכסנדרה.wav",
                    "לאלמוג": "לאלמוג.wav",
                    "לאלן": "לאלן.wav",
                    "לאלנה": "לאלנה.wav",
                    "לאלעד": "לאלעד.wav",
                    "לאלעזר": "לאלעזר.wav",
                    "לאלפרד": "לאלפרד.wav",
                    "לאלרואי": "לאלרואי.wav",
                    "לאמאל": "לאמאל.wav",
                    "לאמה": "לאמה.wav",
                    "לאמיל": "לאמיל.wav",
                    "לאמילי": "לאמילי.wav",
                    "לאמיליה": "לאמיליה.wav",
                    "לאמיר": "לאמיר.wav",
                    "לאמירה": "לאמירה.wav",
                    "לאמיתי": "לאמיתי.wav",
                    "לאמל": "לאמל.wav",
                    "לאמנון": "לאמנון.wav",
                    "לאנג'לה": "לאנג_לה.wav",
                    "לאנג'ליקה": "לאנג_ליקה.wav",
                    "לאנדרי": "לאנדרי.wav",
                    "לאנדריי": "לאנדריי.wav",
                    "לאנה": "לאנה.wav",
                    "לאנט": "לאנט.wav",
                    "לאנטולי": "לאנטולי.wav",
                    "לאנטון": "לאנטון.wav",
                    "לאניה": "לאניה.wav",
                    "לאניטה": "לאניטה.wav",
                    "לאנסטסיה": "לאנסטסיה.wav",
                    "לאסי": "לאסי.wav",
                    "לאסיה": "לאסיה.wav",
                    "לאסנת": "לאסנת.wav",
                    "לאסף": "לאסף.wav",
                    "לאסתי": "לאסתי.wav",
                    "לאסתר": "לאסתר.wav",
                    "לאפי": "לאפי.wav",
                    "לאפרים": "לאפרים.wav",
                    "לאפרת": "לאפרת.wav",
                    "לאראל": "לאראל.wav",
                    "לאראלה": "לאראלה.wav",
                    "לארז": "לארז.wav",
                    "לארי": "לארי.wav",
                    "לאריאל": "לאריאל.wav",
                    "לאריאלה": "לאריאלה.wav",
                    "לאריה": "לאריה.wav",
                    "לאריק": "לאריק.wav",
                    "לאריקה": "לאריקה.wav",
                    "לארנון": "לארנון.wav",
                    "לארקדי": "לארקדי.wav",
                    "לארתור": "לארתור.wav",
                    "לאשר": "לאשר.wav",
                    "לאשרף": "לאשרף.wav",
                    "לאשרת": "לאשרת.wav",
                    "לאתי": "לאתי.wav",
                    "לבועז": "לבועז.wav",
                    "לבוריס": "לבוריס.wav",
                    "לבטי": "לבטי.wav",
                    "לביאטריס": "לביאטריס.wav",
                    "לביאנקה": "לביאנקה.wav",
                    "לבינה": "לבינה.wav",
                    "לבלה": "לבלה.wav",
                    "לבלהה": "לבלהה.wav",
                    "לבן": "לבן.wav",
                    "לבן ציון": "לבן ציון.wav",
                    "לבןציון": "לבןציון.wav",
                    "לבני": "לבני.wav",
                    "לבניה": "לבניה.wav",
                    "לבנימין": "לבנימין.wav",
                    "לבעז": "לבעז.wav",
                    "לבצלאל": "לבצלאל.wav",
                    "לבר": "לבר.wav",
                    "לברברה": "לברברה.wav",
                    "לברוך": "לברוך.wav",
                    "לברוריה": "לברוריה.wav",
                    "לברטה": "לברטה.wav",
                    "לברכה": "לברכה.wav",
                    "לברק": "לברק.wav",
                    "לבשמת": "לבשמת.wav",
                    "לבת": "לבת.wav",
                    "לבת-אל": "לבת-אל.wav",
                    "לבת-חן": "לבת-חן.wav",
                    "לבת-שבע": "לבת-שבע.wav",
                    "לבת אל": "לבת אל.wav",
                    "לבת חן": "לבת חן.wav",
                    "לבת שבע": "לבת שבע.wav",
                    "לבתאל": "לבתאל.wav",
                    "לבתיה": "לבתיה.wav",
                    "לבתשבע": "לבתשבע.wav",
                    "לג'וזף": "לג_וזף.wav",
                    "לג'ולי": "לג_ולי.wav",
                    "לג'וליה": "לג_וליה.wav",
                    "לג'ייסון": "לג_ייסון.wav",
                    "לג'ייקוב": "לג_ייקוב.wav",
                    "לג'נט": "לג_נט.wav",
                    "לג'ני": "לג_ני.wav",
                    "לג'ניפר": "לג_ניפר.wav",
                    "לג'סיקה": "לג_סיקה.wav",
                    "לג'יימס": "לג_יימס.wav",
                    "לג'ייקוב": "לג_ייקוב.wav",
                    "לג'ון": "לג_ון.wav",
                    "לג'סטין": "לג_סטין.wav",
                    "לגאולה": "לגאולה.wav",
                    "לגאיה": "לגאיה.wav",
                    "לגבי": "לגבי.wav",
                    "לגבריאל": "לגבריאל.wav",
                    "לגבריאלה": "לגבריאלה.wav",
                    "לגד": "לגד.wav",
                    "לגדי": "לגדי.wav",
                    "לגדעון": "לגדעון.wav",
                    "לגוליה": "לגוליה.wav",
                    "לגולן": "לגולן.wav",
                    "לגיא": "לגיא.wav",
                    "לגיורא": "לגיורא.wav",
                    "לגיטה": "לגיטה.wav",
                    "לגיל": "לגיל.wav",
                    "לגילה": "לגילה.wav",
                    "לגילי": "לגילי.wav",
                    "לגילעד": "לגילעד.wav",
                    "לגילת": "לגילת.wav",
                    "לגיתית": "לגיתית.wav",
                    "לגל": "לגל.wav",
                    "לגלי": "לגלי.wav",
                    "לגליה": "לגליה.wav",
                    "לגלינה": "לגלינה.wav",
                    "לגלית": "לגלית.wav",
                    "לגלעד": "לגלעד.wav",
                    "לגנאדי": "לגנאדי.wav",
                    "לגני": "לגני.wav",
                    "לגרגורי": "לגרגורי.wav",
                    "לגריגורי": "לגריגורי.wav",
                    "לגרשון": "לגרשון.wav",
                    "לדב": "לדב.wav",
                    "לדבורה": "לדבורה.wav",
                    "לדבי": "לדבי.wav",
                    "לדביר": "לדביר.wav",
                    "לדגנית": "לדגנית.wav",
                    "לדוב": "לדוב.wav",
                    "לדוד": "לדוד.wav",
                    "לדודו": "לדודו.wav",
                    "לדודי": "לדודי.wav",
                    "לדויד": "לדויד.wav",
                    "לדור": "לדור.wav",
                    "לדורה": "לדורה.wav",
                    "לדורון": "לדורון.wav",
                    "לדורי": "לדורי.wav",
                    "לדורין": "לדורין.wav",
                    "לדוריס": "לדוריס.wav",
                    "לדורית": "לדורית.wav",
                    "לדותן": "לדותן.wav",
                    "לדיאנה": "לדיאנה.wav",
                    "לדידי": "לדידי.wav",
                    "לדיוויד": "לדיוויד.wav",
                    "לדייב": "לדייב.wav",
                    "לדין": "לדין.wav",
                    "לדינה": "לדינה.wav",
                    "לדיקלה": "לדיקלה.wav",
                    "לדליה": "לדליה.wav",
                    "לדלית": "לדלית.wav",
                    "לדמיטרי": "לדמיטרי.wav",
                    "לדן": "לדן.wav",
                    "לדנה": "לדנה.wav",
                    "לדני": "לדני.wav",
                    "לדניאל": "לדניאל.wav",
                    "לדניאלה": "לדניאלה.wav",
                    "לדניס": "לדניס.wav",
                    "לדנית": "לדנית.wav",
                    "לדפנה": "לדפנה.wav",
                    "לדקל": "לדקל.wav",
                    "לדקלה": "לדקלה.wav",
                    "לדרור": "לדרור.wav",
                    "לדרורה": "לדרורה.wav",
                    "לדרורית": "לדרורית.wav",
                    "לדריה": "לדריה.wav",
                    "להגר": "להגר.wav",
                    "להדס": "להדס.wav",
                    "להדסה": "להדסה.wav",
                    "להדר": "להדר.wav",
                    "להודיה": "להודיה.wav",
                    "להילה": "להילה.wav",
                    "להילי": "להילי.wav",
                    "להלל": "להלל.wav",
                    "להלן": "להלן.wav",
                    "להלנה": "להלנה.wav",
                    "להניה": "להניה.wav",
                    "להראל": "להראל.wav",
                    "להרצל": "להרצל.wav",
                    "לודים": "לודים.wav",
                    "לויאצ'סלב": "לויאצ_סלב.wav",
                    "לויויאן": "לויויאן.wav",
                    "לויטלי": "לויטלי.wav",
                    "לויקטור": "לויקטור.wav",
                    "לויקטוריה": "לויקטוריה.wav",
                    "לויקי": "לויקי.wav",
                    "לולדימיר": "לולדימיר.wav",
                    "לולדיסלב": "לולדיסלב.wav",
                    "לוליד": "לוליד.wav",
                    "לולנטינה": "לולנטינה.wav",
                    "לולרי": "לולרי.wav",
                    "לולריה": "לולריה.wav",
                    "לורד": "לורד.wav",
                    "לורדה": "לורדה.wav",
                    "לורדית": "לורדית.wav",
                    "לורה": "לורה.wav",
                    "לורוניקה": "לורוניקה.wav",
                    "לז'אנה": "לז_אנה.wav",
                    "לז'קלין": "לז_קלין.wav",
                    "לזאב": "לזאב.wav",
                    "לזהבה": "לזהבה.wav",
                    "לזהבית": "לזהבית.wav",
                    "לזהר": "לזהר.wav",
                    "לזוהר": "לזוהר.wav",
                    "לזוהרה": "לזוהרה.wav",
                    "לזיו": "לזיו.wav",
                    "לזיוה": "לזיוה.wav",
                    "לזינה": "לזינה.wav",
                    "לזמירה": "לזמירה.wav",
                    "לזקלין": "לזקלין.wav",
                    "לחאלד": "לחאלד.wav",
                    "לחביב": "לחביב.wav",
                    "לחביבה": "לחביבה.wav",
                    "לחבצלת": "לחבצלת.wav",
                    "לחגי": "לחגי.wav",
                    "לחגית": "לחגית.wav",
                    "לחדוה": "לחדוה.wav",
                    "לחדווה": "לחדווה.wav",
                    "לחוה": "לחוה.wav",
                    "לחוסאם": "לחוסאם.wav",
                    "לחופית": "לחופית.wav",
                    "לחזי": "לחזי.wav",
                    "לחי": "לחי.wav",
                    "לחיה": "לחיה.wav",
                    "לחיים": "לחיים.wav",
                    "לחלי": "לחלי.wav",
                    "לחמדה": "לחמדה.wav",
                    "לחמוטל": "לחמוטל.wav",
                    "לחן": "לחן.wav",
                    "לחנאן": "לחנאן.wav",
                    "לחנה": "לחנה.wav",
                    "לחנוך": "לחנוך.wav",
                    "לחני": "לחני.wav",
                    "לחנין": "לחנין.wav",
                    "לחנית": "לחנית.wav",
                    "לחניתה": "לחניתה.wav",
                    "לחנן": "לחנן.wav",
                    "לחסן": "לחסן.wav",
                    "לטובה": "לטובה.wav",
                    "לטובי": "לטובי.wav",
                    "לטוהר": "לטוהר.wav",
                    "לטוני": "לטוני.wav",
                    "לטטיאנה": "לטטיאנה.wav",
                    "לטל": "לטל.wav",
                    "לטלי": "לטלי.wav",
                    "לטליה": "לטליה.wav",
                    "לטניה": "לטניה.wav",
                    "ליאיר": "ליאיר.wav",
                    "ליאן": "ליאן.wav",
                    "ליאנה": "ליאנה.wav",
                    "ליבגני": "ליבגני.wav",
                    "ליבגניה": "ליבגניה.wav",
                    "ליגאל": "ליגאל.wav",
                    "ליהודה": "ליהודה.wav",
                    "ליהודית": "ליהודית.wav",
                    "ליהונתן": "ליהונתן.wav",
                    "ליהושוע": "ליהושוע.wav",
                    "ליהושע": "ליהושע.wav",
                    "ליהלי": "ליהלי.wav",
                    "ליואב": "ליואב.wav",
                    "ליואל": "ליואל.wav",
                    "ליובל": "ליובל.wav",
                    "ליוגב": "ליוגב.wav",
                    "ליוחאי": "ליוחאי.wav",
                    "ליוחנן": "ליוחנן.wav",
                    "ליוכבד": "ליוכבד.wav",
                    "ליוכי": "ליוכי.wav",
                    "ליולי": "ליולי.wav",
                    "ליוליאנה": "ליוליאנה.wav",
                    "ליוליה": "ליוליה.wav",
                    "ליונה": "ליונה.wav",
                    "ליוני": "ליוני.wav",
                    "ליונית": "ליונית.wav",
                    "ליונתן": "ליונתן.wav",
                    "ליוסי": "ליוסי.wav",
                    "ליוסף": "ליוסף.wav",
                    "ליוספה": "ליוספה.wav",
                    "ליורי": "ליורי.wav",
                    "ליורם": "ליורם.wav",
                    "ליותם": "ליותם.wav",
                    "ליחזקאל": "ליחזקאל.wav",
                    "ליחיאל": "ליחיאל.wav",
                    "לילנה": "לילנה.wav",
                    "לימימה": "לימימה.wav",
                    "לימית": "לימית.wav",
                    "לינון": "לינון.wav",
                    "ליניב": "ליניב.wav",
                    "ליניר": "ליניר.wav",
                    "ליסמין": "ליסמין.wav",
                    "ליעל": "ליעל.wav",
                    "ליעקב": "ליעקב.wav",
                    "ליעקוב": "ליעקוב.wav",
                    "ליערה": "ליערה.wav",
                    "ליערית": "ליערית.wav",
                    "ליפה": "ליפה.wav",
                    "ליפים": "ליפים.wav",
                    "ליפית": "ליפית.wav",
                    "ליפעת": "ליפעת.wav",
                    "ליפתח": "ליפתח.wav",
                    "ליצחק": "ליצחק.wav",
                    "ליקטרינה": "ליקטרינה.wav",
                    "ליקיר": "ליקיר.wav",
                    "לירדן": "לירדן.wav",
                    "לירדנה": "לירדנה.wav",
                    "לירון": "לירון.wav",
                    "ליריב": "ליריב.wav",
                    "לירין": "לירין.wav",
                    "לישי": "לישי.wav",
                    "לישעיהו": "לישעיהו.wav",
                    "לישראל": "לישראל.wav",
                    "לישראלה": "לישראלה.wav",
                    "ליששכר": "ליששכר.wav",
                    "לכהן": "לכהן.wav",
                    "לכוכבה": "לכוכבה.wav",
                    "לכוכי": "לכוכי.wav",
                    "לכלנית": "לכלנית.wav",
                    "לכנרת": "לכנרת.wav",
                    "לכפיר": "לכפיר.wav",
                    "לכריסטופר": "לכריסטופר.wav",
                    "לכריסטינה": "לכריסטינה.wav",
                    "לכרמית": "לכרמית.wav",
                    "לכרמל": "לכרמל.wav",
                    "לכרמלה": "לכרמלה.wav",
                    "ללאה": "ללאה.wav",
                    "ללאון": "ללאון.wav",
                    "ללאוניד": "ללאוניד.wav",
                    "ללאורה": "ללאורה.wav",
                    "ללב": "ללב.wav",
                    "ללביא": "ללביא.wav",
                    "ללבנה": "ללבנה.wav",
                    "ללבנת": "ללבנת.wav",
                    "ללואיזה": "ללואיזה.wav",
                    "ללואיס": "ללואיס.wav",
                    "ללובה": "ללובה.wav",
                    "ללודמילה": "ללודמילה.wav",
                    "ללוי": "ללוי.wav",
                    "ללוסי": "ללוסי.wav",
                    "ללורה": "ללורה.wav",
                    "ללורן": "ללורן.wav",
                    "ללי": "ללי.wav",
                    "ללי-אור": "ללי-אור.wav",
                    "ללי-מור": "ללי-מור.wav",
                    "לליאב": "לליאב.wav",
                    "לליאון": "לליאון.wav",
                    "לליאוניד": "לליאוניד.wav",
                    "לליאור": "לליאור.wav",
                    "לליאורה": "לליאורה.wav",
                    "לליאל": "לליאל.wav",
                    "לליאם": "לליאם.wav",
                    "לליאן": "לליאן.wav",
                    "לליאנה": "לליאנה.wav",
                    "לליאת": "לליאת.wav",
                    "לליבי": "לליבי.wav",
                    "לליבנת": "לליבנת.wav",
                    "ללידור": "ללידור.wav",
                    "ללידיה": "ללידיה.wav",
                    "לליה": "לליה.wav",
                    "לליהי": "לליהי.wav",
                    "לליהיא": "לליהיא.wav",
                    "לליודמילה": "לליודמילה.wav",
                    "לליז": "לליז.wav",
                    "לליזה": "לליזה.wav",
                    "לליזי": "לליזי.wav",
                    "לליטל": "לליטל.wav",
                    "ללילי": "ללילי.wav",
                    "לליליאן": "לליליאן.wav",
                    "לליליאנה": "לליליאנה.wav",
                    "לליליה": "לליליה.wav",
                    "ללילך": "ללילך.wav",
                    "ללימור": "ללימור.wav",
                    "ללין": "ללין.wav",
                    "ללינדה": "ללינדה.wav",
                    "ללינה": "ללינה.wav",
                    "ללינוי": "ללינוי.wav",
                    "ללינור": "ללינור.wav",
                    "לליעד": "לליעד.wav",
                    "ללירון": "ללירון.wav",
                    "ללירז": "ללירז.wav",
                    "ללירן": "ללירן.wav",
                    "ללנה": "ללנה.wav",
                    "ללריסה": "ללריסה.wav",
                    "למאור": "למאור.wav",
                    "למאי": "למאי.wav",
                    "למאיה": "למאיה.wav",
                    "למאיר": "למאיר.wav",
                    "למאירה": "למאירה.wav",
                    "למארק": "למארק.wav",
                    "למאשה": "למאשה.wav",
                    "למגי": "למגי.wav",
                    "למוחמד": "למוחמד.wav",
                    "למוטי": "למוטי.wav",
                    "למונא": "למונא.wav",
                    "למונה": "למונה.wav",
                    "למוניק": "למוניק.wav",
                    "למוניקה": "למוניקה.wav",
                    "למוסטפא": "למוסטפא.wav",
                    "למור": "למור.wav",
                    "למוריאל": "למוריאל.wav",
                    "למוריה": "למוריה.wav",
                    "למוריס": "למוריס.wav",
                    "למורן": "למורן.wav",
                    "למזי": "למזי.wav",
                    "למזל": "למזל.wav",
                    "למחמוד": "למחמוד.wav",
                    "למטילדה": "למטילדה.wav",
                    "למיה": "למיה.wav",
                    "למיטל": "למיטל.wav",
                    "למייק": "למייק.wav",
                    "למייקל": "למייקל.wav",
                    "למיכאל": "למיכאל.wav",
                    "למיכאלה": "למיכאלה.wav",
                    "למיכה": "למיכה.wav",
                    "למיכל": "למיכל.wav",
                    "למילה": "למילה.wav",
                    "למילי": "למילי.wav",
                    "למינה": "למינה.wav",
                    "למיקה": "למיקה.wav",
                    "למיקי": "למיקי.wav",
                    "למירב": "למירב.wav",
                    "למירה": "למירה.wav",
                    "למירון": "למירון.wav",
                    "למירי": "למירי.wav",
                    "למירית": "למירית.wav",
                    "למישל": "למישל.wav",
                    "למלודי": "למלודי.wav",
                    "למלי": "למלי.wav",
                    "למלכה": "למלכה.wav",
                    "למנחם": "למנחם.wav",
                    "למני": "למני.wav",
                    "למנשה": "למנשה.wav",
                    "למעיין": "למעיין.wav",
                    "למעין": "למעין.wav",
                    "למקס": "למקס.wav",
                    "למקסים": "למקסים.wav",
                    "למרב": "למרב.wav",
                    "למרגלית": "למרגלית.wav",
                    "למרגריטה": "למרגריטה.wav",
                    "למרדכי": "למרדכי.wav",
                    "למרטין": "למרטין.wav",
                    "למרי": "למרי.wav",
                    "למריאנה": "למריאנה.wav",
                    "למריה": "למריה.wav",
                    "למרים": "למרים.wav",
                    "למרינה": "למרינה.wav",
                    "למרסל": "למרסל.wav",
                    "למרק": "למרק.wav",
                    "למשה": "למשה.wav",
                    "למתי": "למתי.wav",
                    "למתן": "למתן.wav",
                    "לנאדיה": "לנאדיה.wav",
                    "לנאוה": "לנאוה.wav",
                    "לנאור": "לנאור.wav",
                    "לנגה": "לנגה.wav",
                    "לנדב": "לנדב.wav",
                    "לנדיה": "לנדיה.wav",
                    "לנדין": "לנדין.wav",
                    "לנוגה": "לנוגה.wav",
                    "לנווה": "לנווה.wav",
                    "לנוי": "לנוי.wav",
                    "לנויה": "לנויה.wav",
                    "לנועה": "לנועה.wav",
                    "לנועם": "לנועם.wav",
                    "לנופית": "לנופית.wav",
                    "לנופר": "לנופר.wav",
                    "לנור": "לנור.wav",
                    "לנורה": "לנורה.wav",
                    "לנורית": "לנורית.wav",
                    "לנח": "לנח.wav",
                    "לנחום": "לנחום.wav",
                    "לנחמה": "לנחמה.wav",
                    "לנטלי": "לנטלי.wav",
                    "לנטליה": "לנטליה.wav",
                    "לנטע": "לנטע.wav",
                    "לנטע לי": "לנטע לי.wav",
                    "לניב": "לניב.wav",
                    "לנילי": "לנילי.wav",
                    "לנינה": "לנינה.wav",
                    "לניסים": "לניסים.wav",
                    "לניסן": "לניסן.wav",
                    "לניצה": "לניצה.wav",
                    "לניצן": "לניצן.wav",
                    "לניקול": "לניקול.wav",
                    "לניקולאי": "לניקולאי.wav",
                    "לניר": "לניר.wav",
                    "לנירה": "לנירה.wav",
                    "לנירית": "לנירית.wav",
                    "לנלי": "לנלי.wav",
                    "לנמרוד": "לנמרוד.wav",
                    "לננסי": "לננסי.wav",
                    "לנסים": "לנסים.wav",
                    "לנסרין": "לנסרין.wav",
                    "לנעה": "לנעה.wav",
                    "לנעם": "לנעם.wav",
                    "לנעמה": "לנעמה.wav",
                    "לנעמי": "לנעמי.wav",
                    "לנפתלי": "לנפתלי.wav",
                    "לנריה": "לנריה.wav",
                    "לנרקיס": "לנרקיס.wav",
                    "לנתי": "לנתי.wav",
                    "לנתן": "לנתן.wav",
                    "לנתנאל": "לנתנאל.wav",
                    "לסאלח": "לסאלח.wav",
                    "לסאלי": "לסאלי.wav",
                    "לסאמי": "לסאמי.wav",
                    "לסבטלנה": "לסבטלנה.wav",
                    "לסבינה": "לסבינה.wav",
                    "לסברינה": "לסברינה.wav",
                    "לסגלית": "לסגלית.wav",
                    "לסהר": "לסהר.wav",
                    "לסוהא": "לסוהא.wav",
                    "לסוזי": "לסוזי.wav",
                    "לסוזן": "לסוזן.wav",
                    "לסוזנה": "לסוזנה.wav",
                    "לסוניה": "לסוניה.wav",
                    "לסופי": "לסופי.wav",
                    "לסופיה": "לסופיה.wav",
                    "לסטיב": "לסטיב.wav",
                    "לסטלה": "לסטלה.wav",
                    "לסטניסלב": "לסטניסלב.wav",
                    "לסטפני": "לסטפני.wav",
                    "לסיגל": "לסיגל.wav",
                    "לסיגלית": "לסיגלית.wav",
                    "לסיוון": "לסיוון.wav",
                    "לסיון": "לסיון.wav",
                    "לסילבי": "לסילבי.wav",
                    "לסילביה": "לסילביה.wav",
                    "לסימה": "לסימה.wav",
                    "לסימון": "לסימון.wav",
                    "לסימונה": "לסימונה.wav",
                    "לסימי": "לסימי.wav",
                    "לסלים": "לסלים.wav",
                    "לסמדר": "לסמדר.wav",
                    "לסמי": "לסמי.wav",
                    "לסמיון": "לסמיון.wav",
                    "לסמיר": "לסמיר.wav",
                    "לסנדרה": "לסנדרה.wav",
                    "לסעיד": "לסעיד.wav",
                    "לסער": "לסער.wav",
                    "לספיר": "לספיר.wav",
                    "לסרגיי": "לסרגיי.wav",
                    "לסתיו": "לסתיו.wav",
                    "לעבדאללה": "לעבדאללה.wav",
                    "לעדה": "לעדה.wav",
                    "לעדו": "לעדו.wav",
                    "לעדי": "לעדי.wav",
                    "לעדינה": "לעדינה.wav",
                    "לעדית": "לעדית.wav",
                    "לעדן": "לעדן.wav",
                    "לעדנה": "לעדנה.wav",
                    "לעובדיה": "לעובדיה.wav",
                    "לעודד": "לעודד.wav",
                    "לעוז": "לעוז.wav",
                    "לעוזי": "לעוזי.wav",
                    "לעומר": "לעומר.wav",
                    "לעומרי": "לעומרי.wav",
                    "לעופר": "לעופר.wav",
                    "לעופרה": "לעופרה.wav",
                    "לעזרא": "לעזרא.wav",
                    "לעטרה": "לעטרה.wav",
                    "לעידו": "לעידו.wav",
                    "לעידית": "לעידית.wav",
                    "לעידן": "לעידן.wav",
                    "לעילאי": "לעילאי.wav",
                    "לעיליי": "לעיליי.wav",
                    "לעינב": "לעינב.wav",
                    "לעינבל": "לעינבל.wav",
                    "לעינבר": "לעינבר.wav",
                    "לעינת": "לעינת.wav",
                    "לעירית": "לעירית.wav",
                    "לעלי": "לעלי.wav",
                    "לעליזה": "לעליזה.wav",
                    "לעמוס": "לעמוס.wav",
                    "לעמי": "לעמי.wav",
                    "לעמיחי": "לעמיחי.wav",
                    "לעמיקם": "לעמיקם.wav",
                    "לעמיר": "לעמיר.wav",
                    "לעמירם": "לעמירם.wav",
                    "לעמית": "לעמית.wav",
                    "לעמיתי": "לעמיתי.wav",
                    "לעמליה": "לעמליה.wav",
                    "לעמנואל": "לעמנואל.wav",
                    "לעמרי": "לעמרי.wav",
                    "לעמרם": "לעמרם.wav",
                    "לענבל": "לענבל.wav",
                    "לענבר": "לענבר.wav",
                    "לענת": "לענת.wav",
                    "לעפר": "לעפר.wav",
                    "לעפרה": "לעפרה.wav",
                    "לעקיבא": "לעקיבא.wav",
                    "לערן": "לערן.wav",
                    "לעתליה": "לעתליה.wav",
                    "לפאבל": "לפאבל.wav",
                    "לפאדי": "לפאדי.wav",
                    "לפאולה": "לפאולה.wav",
                    "לפאולינה": "לפאולינה.wav",
                    "לפאטמה": "לפאטמה.wav",
                    "לפאינה": "לפאינה.wav",
                    "לפאני": "לפאני.wav",
                    "לפאר": "לפאר.wav",
                    "לפבל": "לפבל.wav",
                    "לפואד": "לפואד.wav",
                    "לפולינה": "לפולינה.wav",
                    "לפורטונה": "לפורטונה.wav",
                    "לפז": "לפז.wav",
                    "לפזית": "לפזית.wav",
                    "לפיליפ": "לפיליפ.wav",
                    "לפיני": "לפיני.wav",
                    "לפלג": "לפלג.wav",
                    "לפלורה": "לפלורה.wav",
                    "לפליקס": "לפליקס.wav",
                    "לפנחס": "לפנחס.wav",
                    "לפני": "לפני.wav",
                    "לפנינה": "לפנינה.wav",
                    "לפרח": "לפרח.wav",
                    "לפרידה": "לפרידה.wav",
                    "לפרלה": "לפרלה.wav",
                    "לצבי": "לצבי.wav",
                    "לצביה": "לצביה.wav",
                    "לצביקה": "לצביקה.wav",
                    "לצדוק": "לצדוק.wav",
                    "לצופיה": "לצופיה.wav",
                    "לצופית": "לצופית.wav",
                    "לצח": "לצח.wav",
                    "לצחי": "לצחי.wav",
                    "לציון": "לציון.wav",
                    "לציונה": "לציונה.wav",
                    "לצילה": "לצילה.wav",
                    "לצילי": "לצילי.wav",
                    "לציפורה": "לציפורה.wav",
                    "לציפי": "לציפי.wav",
                    "לצליל": "לצליל.wav",
                    "לצפורה": "לצפורה.wav",
                    "לצפריר": "לצפריר.wav",
                    "לקארין": "לקארין.wav",
                    "לקארן": "לקארן.wav",
                    "לקובי": "לקובי.wav",
                    "לקונסטנטין": "לקונסטנטין.wav",
                    "לקורין": "לקורין.wav",
                    "לקורל": "לקורל.wav",
                    "לקטי": "לקטי.wav",
                    "לקטיה": "לקטיה.wav",
                    "לקטרינה": "לקטרינה.wav",
                    "לקלאודיה": "לקלאודיה.wav",
                    "לקלודין": "לקלודין.wav",
                    "לקלרה": "לקלרה.wav",
                    "לקסניה": "לקסניה.wav",
                    "לקרול": "לקרול.wav",
                    "לקרולין": "לקרולין.wav",
                    "לקרולינה": "לקרולינה.wav",
                    "לקרין": "לקרין.wav",
                    "לקרינה": "לקרינה.wav",
                    "לקריסטינה": "לקריסטינה.wav",
                    "לקרן": "לקרן.wav",
                    "לראובן": "לראובן.wav",
                    "לראיסה": "לראיסה.wav",
                    "לראמי": "לראמי.wav",
                    "לרביב": "לרביב.wav",
                    "לרביד": "לרביד.wav",
                    "לרביטל": "לרביטל.wav",
                    "לרבקה": "לרבקה.wav",
                    "לרגינה": "לרגינה.wav",
                    "לרואי": "לרואי.wav",
                    "לרוברט": "לרוברט.wav",
                    "לרווית": "לרווית.wav",
                    "לרוזה": "לרוזה.wav",
                    "לרוזי": "לרוזי.wav",
                    "לרוחמה": "לרוחמה.wav",
                    "לרויטל": "לרויטל.wav",
                    "לרוית": "לרוית.wav",
                    "לרומי": "לרומי.wav",
                    "לרומן": "לרומן.wav",
                    "לרון": "לרון.wav",
                    "לרונה": "לרונה.wav",
                    "לרוני": "לרוני.wav",
                    "לרונית": "לרונית.wav",
                    "לרונן": "לרונן.wav",
                    "לרוסלן": "לרוסלן.wav",
                    "לרועי": "לרועי.wav",
                    "לרות": "לרות.wav",
                    "לרותי": "לרותי.wav",
                    "לרותם": "לרותם.wav",
                    "לרז": "לרז.wav",
                    "לרחל": "לרחל.wav",
                    "לרחלי": "לרחלי.wav",
                    "לרחמים": "לרחמים.wav",
                    "לריבה": "לריבה.wav",
                    "לריטה": "לריטה.wav",
                    "לרים": "לרים.wav",
                    "לרימה": "לרימה.wav",
                    "לרינה": "לרינה.wav",
                    "לרינת": "לרינת.wav",
                    "לריקי": "לריקי.wav",
                    "לרלי": "לרלי.wav",
                    "לרם": "לרם.wav",
                    "לרמי": "לרמי.wav",
                    "לרן": "לרן.wav",
                    "לרנא": "לרנא.wav",
                    "לרנה": "לרנה.wav",
                    "לרני": "לרני.wav",
                    "לרנין": "לרנין.wav",
                    "לרננה": "לרננה.wav",
                    "לרעות": "לרעות.wav",
                    "לרעיה": "לרעיה.wav",
                    "לרענן": "לרענן.wav",
                    "לרפאל": "לרפאל.wav",
                    "לרפי": "לרפי.wav",
                    "לרקפת": "לרקפת.wav",
                    "לשאדי": "לשאדי.wav",
                    "לשאול": "לשאול.wav",
                    "לשבתאי": "לשבתאי.wav",
                    "לשגב": "לשגב.wav",
                    "לשגיא": "לשגיא.wav",
                    "לשגיב": "לשגיב.wav",
                    "לשגית": "לשגית.wav",
                    "לשולה": "לשולה.wav",
                    "לשולי": "לשולי.wav",
                    "לשולמית": "לשולמית.wav",
                    "לשוקי": "לשוקי.wav",
                    "לשוש": "לשוש.wav",
                    "לשושי": "לשושי.wav",
                    "לשושנה": "לשושנה.wav",
                    "לשחור": "לשחור.wav",
                    "לשחף": "לשחף.wav",
                    "לשחר": "לשחר.wav",
                    "לשי": "לשי.wav",
                    "לשילה": "לשילה.wav",
                    "לשימרית": "לשימרית.wav",
                    "לשיר": "לשיר.wav",
                    "לשיראל": "לשיראל.wav",
                    "לשירה": "לשירה.wav",
                    "לשירז": "לשירז.wav",
                    "לשירי": "לשירי.wav",
                    "לשירין": "לשירין.wav",
                    "לשירית": "לשירית.wav",
                    "לשירל": "לשירל.wav",
                    "לשירלי": "לשירלי.wav",
                    "לשירן": "לשירן.wav",
                    "לשלו": "לשלו.wav",
                    "לשלום": "לשלום.wav",
                    "לשלומי": "לשלומי.wav",
                    "לשלומית": "לשלומית.wav",
                    "לשלי": "לשלי.wav",
                    "לשלמה": "לשלמה.wav",
                    "לשמאי": "לשמאי.wav",
                    "לשמואל": "לשמואל.wav",
                    "לשמוליק": "לשמוליק.wav",
                    "לשמחה": "לשמחה.wav",
                    "לשמעון": "לשמעון.wav",
                    "לשמרית": "לשמרית.wav",
                    "לשמשון": "לשמשון.wav",
                    "לשני": "לשני.wav",
                    "לשניר": "לשניר.wav",
                    "לשפרה": "לשפרה.wav",
                    "לשקד": "לשקד.wav",
                    "לשרגא": "לשרגא.wav",
                    "לשרה": "לשרה.wav",
                    "לשרון": "לשרון.wav",
                    "לשרונה": "לשרונה.wav",
                    "לשרי": "לשרי.wav",
                    "לשרית": "לשרית.wav",
                    "לששון": "לששון.wav",
                    "לתאיר": "לתאיר.wav",
                    "לתהילה": "לתהילה.wav",
                    "לתהל": "לתהל.wav",
                    "לתום": "לתום.wav",
                    "לתומר": "לתומר.wav",
                    "לתחיה": "לתחיה.wav",
                    "לתלמה": "לתלמה.wav",
                    "לתמי": "לתמי.wav",
                    "לתמיר": "לתמיר.wav",
                    "לתמר": "לתמר.wav",
                    "לתמרה": "לתמרה.wav",
                    "לתקוה": "לתקוה.wav",
                    "לתרצה": "לתרצה.wav"
                },
            "companies":{
                "1800flowers":"1800flowers.wav",
                "2eat":"2eat.wav","888":"888.wav","abbott":"abbott.wav","activetrail":"ActiveTrail.wav","actiview-2":"Actiview-2.wav","actiview":"Actiview.wav","adcore":"adcore.wav","adecco israel":"Adecco Israel.wav","adidas":"adidas.wav","aig":"Aig.wav",
                "alljobs":"alljobs.wav","american outlets":"american outlets.wav","azrieli.com":"AZRIELI.COM.wav","bdo":"bdo.wav","be2see":"be2see.wav","blik":"blik.wav","blink digital marketing":"Blink Digital Marketing.wav","blue-monkeys":"blue-monkeys.wav","buyme":"BUYME.wav","carmelon digital marketing":"Carmelon Digital Marketing.wav",
                "como":"Como.wav","cooladata":"CoolaData.wav","datapro":"datapro.wav","diboor":"diboor.wav","fontbit":"fontbit.wav","gravity":"gravity.wav","groo":"GROO.wav","igloo creative house":"Igloo creative house.wav","igroup":"iGroup.wav","inwise digital marketing":"inwise Digital Marketing.wav",
                "israel-judaica":"israel-judaica.wav","jwt":"jwt.wav","k logic":"K Logic.wav","kenes group":"Kenes Group.wav","keter":"keter.wav","kimberly-clark":"Kimberly-Clark.wav","leaders":"Leaders.wav","lemonade":"Lemonade.wav","leo burnett":"Leo Burnett.wav","manpower":"manpower.wav",
                "map.json":"map.json","markedo":"markedo.wav","max":"MAX.wav","microsoft":"Microsoft.wav","minute media":"Minute Media.wav","monday":"monday.wav","myheritage":"MyHeritage.wav","mysupermarket":"mySupermarket.wav","onehourtranslation":"onehourtranslation.wav","optimove":"Optimove.wav",
                "oracle":"Oracle.wav","outbrain":"Outbrain.wav","paloaltonetworks":"paloaltonetworks.wav","pepper":"pepper.wav","playbuzz":"Playbuzz.wav","playtech":"Playtech.wav","playtika":"Playtika.wav","pmi":"pmi.wav","procter gamble":"Procter _ Gamble.wav","profit":"profit.wav",
                "pwc israel":"PwC Israel.wav","reebok":"Reebok.wav","similarweb":"SimilarWeb.wav","simplyclub":"simplyclub.wav","sodastream":"SodaStream.wav","sodexo":"Sodexo.wav","s w media group":"S_W Media Group.wav","taboola":"Taboola.wav","total media":"total media.wav","toysrus":"Toysrus.wav",
                "travelist":"Travelist.wav","twisted":"twisted.wav","unilever":"Unilever.wav","universal mccann digital":"Universal Mccann Digital.wav","vatbox":"vatbox.wav","videobiz":"VIDEOBIZ.wav","videohead":"videohead.wav","visual-trigger":"visual-trigger.wav","we shoes":"We Shoes.wav","wix":"Wix.wav",
                "woobi":"Woobi.wav","yad2":"Yad2.wav","yes":"yes.wav","yoram":"yoram.wav","yotpo":"Yotpo.wav","ytbwa":"ytbwa.wav","אדלר חומסקי":"אדלר חומסקי.wav","אוסם":"אוסם.wav","אופטיקה הלפרין":"אופטיקה הלפרין.wav","אורדע-2":"אורדע-2.wav",
                "אורדע":"אורדע.wav","אטומי":"אטומי.wav","איידיגיטל":"איידיגיטל.wav","איילון חברה לביטוח":"איילון חברה לביטוח.wav","אינטרנט רימון":"אינטרנט רימון.wav","איסתא":"איסתא.wav","איקאה":"איקאה.wav","אלבר":"אלבר.wav","אלדן":"אלדן.wav","אלטשולר שחם":"אלטשולר שחם.wav",
                "אלעל":"אלעל.wav","אלקטרה":"אלקטרה.wav","אמדוקס":"אמדוקס.wav","אנגורה":"אנגורה.wav","ארגון המורים":"ארגון המורים.wav","ארטימדיה":"ארטימדיה.wav","ארקיע":"ארקיע.wav","אשת טורס":"אשת טורס.wav","באומן בר ריבנאי":"באומן בר ריבנאי.wav","בזק":"בזק.wav",
                "ביטוח ישיר":"ביטוח ישיר.wav","בינת מערכות":"בינת מערכות.wav","בנק דיסקונט":"בנק דיסקונט.wav","בנק הפועלים":"בנק הפועלים.wav","בנק ירושלים":"בנק ירושלים.wav","בנק לאומי":"בנק לאומי.wav","בנק מזרחי טפחות":"בנק מזרחי טפחות.wav","ג יימס ריצ רדסון":"ג_יימס ריצ_רדסון.wav","גוגל":"גוגל.wav","גוליבר תיירות":"גוליבר תיירות.wav",
                "גט":"גט.wav","גינדי החזקות":"גינדי החזקות.wav","גינדי תל אביב":"גינדי תל אביב.wav","גינדי":"גינדי.wav","גיתם":"גיתם.wav","גלובוס מקס":"גלובוס מקס.wav","גליקמן שמיר סמסונוב":"גליקמן שמיר סמסונוב.wav","גרייט דיגיטל":"גרייט דיגיטל.wav","גרין":"גרין.wav","דואר ישראל":"דואר ישראל.wav",
                "דולצ ה ויטה":"דולצ_ה ויטה.wav","דומינוס פיצה":"דומינוס פיצה.wav","דור חדש בשוברים":"דור חדש בשוברים.wav","דיזינגוף סנטר":"דיזינגוף סנטר.wav","דנאל":"דנאל.wav","דקה ה90":"דקה ה90.wav","הבינתחומי הרצליה":"הבינתחומי הרצליה.wav","הדיה":"הדיה.wav","הוט":"הוט.wav","הולמס פלייס":"הולמס פלייס.wav",
                "הומלס":"הומלס.wav","הופ":"הופ.wav","הכשרה חברה לביטוח":"הכשרה חברה לביטוח.wav","המכון הטכנולוגי חולון":"המכון הטכנולוגי חולון.wav","המרכז הרפואי איכילוב":"המרכז הרפואי איכילוב.wav","המרכז הרפואי וולפסון":"המרכז הרפואי וולפסון.wav","הפניקס חברה לביטוח":"הפניקס חברה לביטוח.wav","הקריה האקדמית אונו":"הקריה האקדמית אונו.wav","הראל חברה לביטוח":"הראל חברה לביטוח.wav","השטיח המעופף":"השטיח המעופף.wav",
                "התאחדות הכדורגל":"התאחדות הכדורגל.wav","התאחדות המלונות":"התאחדות המלונות.wav","וואלה":"וואלה.wav","חבר":"חבר.wav","חברת החשמל":"חברת החשמל.wav","חלי ממן":"חלי ממן.wav","טלכלל":"טלכלל.wav","טמפו":"טמפו.wav","טריפודיה":"טריפודיה.wav","ידיעות אחרונות":"ידיעות אחרונות.wav",
                "יש עתיד":"יש עתיד.wav","ישראייר":"ישראייר.wav","ישראכרט":"ישראכרט.wav","ישרוטל":"ישרוטל.wav","כאל":"כאל.wav","כלל ביטוח":"כלל ביטוח.wav","כנסת ישראל":"כנסת ישראל.wav","לאומי למשכנתאות":"לאומי למשכנתאות.wav","לאומית שירותי בריאות":"לאומית שירותי בריאות.wav","לאומית":"לאומית.wav",
                "לשכת הפרסום הממשלתית":"לשכת הפרסום הממשלתית.wav","לתת":"לתת.wav","מגדל חברה לביטוח":"מגדל חברה לביטוח.wav","מדלן":"מדלן.wav","מוטורלה":"מוטורלה.wav","מולה הפקות":"מולה הפקות.wav","מועדון הכדורגל מכבי חיפה":"מועדון הכדורגל מכבי חיפה.wav","מועדון הכדורגל מכבי תל אביב":"מועדון הכדורגל מכבי תל אביב.wav","מועדון הכדורסל הפועל ירושלים":"מועדון הכדורסל הפועל ירושלים.wav","מועדון הנוסע המתמיד":"מועדון הנוסע המתמיד.wav",
                "מידע כנסים":"מידע כנסים.wav","מיטב דש":"מיטב דש.wav","מימון ישיר":"מימון ישיר.wav","מכבי שירותי בריאות":"מכבי שירותי בריאות.wav","מכללת בית ברל":"מכללת בית ברל.wav","מלונות תמרס":"מלונות תמרס.wav","מנורה מבטחים":"מנורה מבטחים.wav","מסטרקארד":"מסטרקארד.wav","מפה":"מפה.wav","מפעל הפיס":"מפעל הפיס.wav",
                "מקאן":"מקאן.wav","מרכז הטניס":"מרכז הטניס.wav","משאבים הקבוצה לצמיחה כלכלית":"משאבים הקבוצה לצמיחה כלכלית.wav","משרד החינוך":"משרד החינוך.wav","משרוקית":"משרוקית.wav","נביעות":"נביעות.wav","נירלט":"נירלט.wav","נסטלה":"נסטלה.wav","סופר פארם":"סופר פארם.wav","סטודיו סי":"סטודיו סי.wav",
                "סטוניס":"סטוניס.wav","סלקום":"סלקום.wav","סנייפר":"סנייפר.wav","ספא פלוס":"ספא פלוס.wav","עדיקא":"עדיקא.wav","עזר מציון":"עזר מציון.wav","עיריית ראשון לציון":"עיריית ראשון לציון.wav","עיריית רעננה":"עיריית רעננה.wav","עיריית תל אביב":"עיריית תל אביב.wav","פורטל דרושים":"פורטל דרושים.wav",
                "פלאפון":"פלאפון.wav","פרטנר":"פרטנר.wav","פרימייר ים המלח":"פרימייר ים המלח.wav","צבירן":"צבירן.wav","קבוצת אלדר":"קבוצת אלדר.wav","קבוצת זאפ":"קבוצת זאפ.wav","קבוצת ח.י":"קבוצת ח.י.wav","קבוצת יפעת":"קבוצת יפעת.wav","קבוצת עזריאלי":"קבוצת עזריאלי.wav","קווי חופשה":"קווי חופשה.wav",
                "קופת חולים כללית":"קופת חולים כללית.wav","קוקה קולה":"קוקה קולה.wav","קסטרו":"קסטרו.wav","קק ל":"קק_ל.wav","קרייזי ליין":"קרייזי ליין.wav","קשת":"קשת.wav","ראובני פרידן":"ראובני פרידן.wav","ריידמן":"ריידמן.wav","רימקס":"רימקס.wav","רשת מלונות פתאל":"רשת מלונות פתאל.wav",
                "רשת":"רשת.wav","שופרסל":"שופרסל.wav","שטראוס מים":"שטראוס מים.wav","שטראוס":"שטראוס.wav","שיווק ברשת":"שיווק ברשת.wav","שיכון בינוי":"שיכון בינוי.wav","שילב":"שילב.wav","שילוב":"שילוב.wav","שלמה סיקסט":"שלמה סיקסט.wav","תגבור":"תגבור.wav",
                "תנובה":"תנובה.wav"
            },
            "getImageParameter": function (paramName, fit, width, height) {
                let parameters = this;
                if(parameters[paramName]){
                    if(parameters[paramName].startsWith('http://') || parameters[paramName].startsWith('https://')){
                        return 'https://api.treepodia.com/media/services/GetImageByUrl?u=' + encodeURIComponent(parameters[paramName]) + '&fit='+fit+'&w='+width+'&h='+height+'&format=png';
                    } else {
                        return 'https://api.treepodia.com/media/services/GetImage?f=' + encodeURIComponent(parameters[paramName]) + '&fit='+fit+'&w='+width+'&h='+height+'&format=png';
                    }
                }
            },
            "getVideoParameter": function (paramName, fit, width, height, duration, audio, normalizeAudio) {
                let parameters = this;
                if(parameters[paramName]){
                    if(parameters[paramName].startsWith('http://') || parameters[paramName].startsWith('https://')){
                        return 'https://api.treepodia.com/media/services/GetVideoByUrl?fit='+fit
                            +'&format=mp4&w='+width
                            +'&h='+height
                            +'&d='+(duration || '')
                            +'&audio='+(audio||'')
                            +'&normalizeAudio='+(normalizeAudio||'')
                            +'&u=' + encodeURIComponent(parameters[paramName]);
                    } else {
                        return 'https://api.treepodia.com/media/services/GetVideo?fit='+fit
                            +'&format=mp4&w='+width
                            +'&h='+height
                            +'&d='+(duration || '')
                            +'&audio='+(audio||'')
                            +'&normalizeAudio='+(normalizeAudio||'')
                            +'&f=' + encodeURIComponent(parameters[paramName]);
                    }
                }
            },
            "getVideoScreenshotParameter": function (paramName, fit, width, height) {
                let parameters = this;
                if(parameters[paramName]){
                    if(parameters[paramName].startsWith('http://') || parameters[paramName].startsWith('https://')){
                        return 'https://api.treepodia.com/media/services/GetVideoByUrl?fit='+fit+'&format=png&w='+width+'&h='+height+'&u=' + encodeURIComponent(parameters[paramName]);
                    } else {
                        return 'https://api.treepodia.com/media/services/GetVideo?fit='+fit+'&format=png&w='+width+'&h='+height+'&f=' + encodeURIComponent(parameters[paramName]);
                    }
                }
            },
            "setSVGImagesPath" : function (animationSVG, path) {
                if(animationSVG.assets){
                    for(let i=0; i<animationSVG.assets.length; i++){
                        let asset = animationSVG.assets[i];
                        if(asset.u && asset.p){
                            asset.u = path;
                        }
                    }
                }
                return animationSVG;
            },
            "setSvgImage" : function (animationSVG, id, url) {
                if(animationSVG.assets){
                    for(let i=0; i<animationSVG.assets.length; i++){
                        let asset = animationSVG.assets[i];
                        if(asset.u && asset.p && asset.id === id){
                            asset.p = url;
                            asset.u = '';
                        }
                    }
                }
                return animationSVG;
            },
            "replaceSvgText" : function(animationSVG, placeHolder, text){
                let textValue = text;
                let fontSize = 85;//93;
                animationSVG = JSON.parse(JSON.stringify(animationSVG).replace(placeHolder, text));
                return animationSVG;
            },
            "getTextImageParameter" : function (
                paramName,
                config) {
                let parameters = this;
                let text = parameters[paramName] || '';
                /*
                config = {
                    width:, height:, textWidth:, textHeight:, offsetX, offsetY, font:, direction:, textColor:, maxFontSize:, alpha: 0.2
                }
                */
                let buttonCanvas = document.createElement('canvas');
                buttonCanvas.width = config.textWidth || config.width;
                buttonCanvas.height = config.textHeight || config.height;
                let buttonContext = buttonCanvas.getContext('2d');
                if(config.textColor){
                    buttonContext.fillStyle = config.textColor;
                }

                if(config && config.direction){
                    buttonContext.direction = config.direction;
                }

                if(config.alpha){
                    buttonContext.globalAlpha = config.alpha;
                }

                CanvasTextWrapper(buttonCanvas, text, {
                    font: config.font,
                    allowNewLine: false,
                    sizeToFill : true,
                    renderHDPI:false,
                    textAlign: "center",
                    verticalAlign: "middle",
                    // lineHeight: 1.1,
                    maxFontSizeToFill: config.maxFontSize || 80,
                    paddingX: 0,
                    paddingY: 0
                });

                let placeholderCanvas = document.createElement('canvas');
                placeholderCanvas.width = config.width;
                placeholderCanvas.height = config.height;

                if(config.backgroundColor){
                    let mainContext =  placeholderCanvas.getContext('2d');
                    mainContext.beginPath();
                    mainContext.rect(0, 0, config.width, config.height);
                    mainContext.fillStyle = config.backgroundColor;
                    mainContext.fill();
                }

                placeholderCanvas.getContext('2d').drawImage(buttonCanvas, config.offsetX || 0, config.offsetY || 0);
                return placeholderCanvas.toDataURL();
                // return buttonCanvas.toDataURL();
            }
        }
    });
})(window.__treepodia_dynamic_players[0]);
