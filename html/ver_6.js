/************** 
 * Ver_6 Test *
 **************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'ver_6';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeRoutineBegin());
flowScheduler.add(WelcomeRoutineEachFrame());
flowScheduler.add(WelcomeRoutineEnd());
flowScheduler.add(Informed_Consent_1RoutineBegin());
flowScheduler.add(Informed_Consent_1RoutineEachFrame());
flowScheduler.add(Informed_Consent_1RoutineEnd());
flowScheduler.add(Informed_Consent_2RoutineBegin());
flowScheduler.add(Informed_Consent_2RoutineEachFrame());
flowScheduler.add(Informed_Consent_2RoutineEnd());
flowScheduler.add(Informed_Consent_3RoutineBegin());
flowScheduler.add(Informed_Consent_3RoutineEachFrame());
flowScheduler.add(Informed_Consent_3RoutineEnd());
flowScheduler.add(Informed_consent_4RoutineBegin());
flowScheduler.add(Informed_consent_4RoutineEachFrame());
flowScheduler.add(Informed_consent_4RoutineEnd());
flowScheduler.add(Informed_Consent_5RoutineBegin());
flowScheduler.add(Informed_Consent_5RoutineEachFrame());
flowScheduler.add(Informed_Consent_5RoutineEnd());
flowScheduler.add(Informed_Consent_6RoutineBegin());
flowScheduler.add(Informed_Consent_6RoutineEachFrame());
flowScheduler.add(Informed_Consent_6RoutineEnd());
flowScheduler.add(Informed_Consent_7RoutineBegin());
flowScheduler.add(Informed_Consent_7RoutineEachFrame());
flowScheduler.add(Informed_Consent_7RoutineEnd());
flowScheduler.add(Informed_consent_8RoutineBegin());
flowScheduler.add(Informed_consent_8RoutineEachFrame());
flowScheduler.add(Informed_consent_8RoutineEnd());
flowScheduler.add(Informed_Question_1RoutineBegin());
flowScheduler.add(Informed_Question_1RoutineEachFrame());
flowScheduler.add(Informed_Question_1RoutineEnd());
flowScheduler.add(Informed_Question_2RoutineBegin());
flowScheduler.add(Informed_Question_2RoutineEachFrame());
flowScheduler.add(Informed_Question_2RoutineEnd());
flowScheduler.add(Informed_Question_3RoutineBegin());
flowScheduler.add(Informed_Question_3RoutineEachFrame());
flowScheduler.add(Informed_Question_3RoutineEnd());
const Comp_recall_branchLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Comp_recall_branchLoopBegin(Comp_recall_branchLoopScheduler));
flowScheduler.add(Comp_recall_branchLoopScheduler);
flowScheduler.add(Comp_recall_branchLoopEnd);
const Comp_Do_BranchLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Comp_Do_BranchLoopBegin(Comp_Do_BranchLoopScheduler));
flowScheduler.add(Comp_Do_BranchLoopScheduler);
flowScheduler.add(Comp_Do_BranchLoopEnd);
const repeatLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(repeatLoopBegin(repeatLoopScheduler));
flowScheduler.add(repeatLoopScheduler);
flowScheduler.add(repeatLoopEnd);
const repeat2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(repeat2LoopBegin(repeat2LoopScheduler));
flowScheduler.add(repeat2LoopScheduler);
flowScheduler.add(repeat2LoopEnd);
flowScheduler.add(Questionnaire_phase_introductionRoutineBegin());
flowScheduler.add(Questionnaire_phase_introductionRoutineEachFrame());
flowScheduler.add(Questionnaire_phase_introductionRoutineEnd());
flowScheduler.add(Q1RoutineBegin());
flowScheduler.add(Q1RoutineEachFrame());
flowScheduler.add(Q1RoutineEnd());
flowScheduler.add(Q2RoutineBegin());
flowScheduler.add(Q2RoutineEachFrame());
flowScheduler.add(Q2RoutineEnd());
flowScheduler.add(Q3RoutineBegin());
flowScheduler.add(Q3RoutineEachFrame());
flowScheduler.add(Q3RoutineEnd());
flowScheduler.add(Q4RoutineBegin());
flowScheduler.add(Q4RoutineEachFrame());
flowScheduler.add(Q4RoutineEnd());
flowScheduler.add(Q5RoutineBegin());
flowScheduler.add(Q5RoutineEachFrame());
flowScheduler.add(Q5RoutineEnd());
flowScheduler.add(Q6RoutineBegin());
flowScheduler.add(Q6RoutineEachFrame());
flowScheduler.add(Q6RoutineEnd());
flowScheduler.add(Q7RoutineBegin());
flowScheduler.add(Q7RoutineEachFrame());
flowScheduler.add(Q7RoutineEnd());
flowScheduler.add(Q8RoutineBegin());
flowScheduler.add(Q8RoutineEachFrame());
flowScheduler.add(Q8RoutineEnd());
flowScheduler.add(Q9RoutineBegin());
flowScheduler.add(Q9RoutineEachFrame());
flowScheduler.add(Q9RoutineEnd());
flowScheduler.add(Q10RoutineBegin());
flowScheduler.add(Q10RoutineEachFrame());
flowScheduler.add(Q10RoutineEnd());
flowScheduler.add(Q11RoutineBegin());
flowScheduler.add(Q11RoutineEachFrame());
flowScheduler.add(Q11RoutineEnd());
flowScheduler.add(Q12RoutineBegin());
flowScheduler.add(Q12RoutineEachFrame());
flowScheduler.add(Q12RoutineEnd());
flowScheduler.add(Q13RoutineBegin());
flowScheduler.add(Q13RoutineEachFrame());
flowScheduler.add(Q13RoutineEnd());
flowScheduler.add(Q14RoutineBegin());
flowScheduler.add(Q14RoutineEachFrame());
flowScheduler.add(Q14RoutineEnd());
flowScheduler.add(Q15RoutineBegin());
flowScheduler.add(Q15RoutineEachFrame());
flowScheduler.add(Q15RoutineEnd());
flowScheduler.add(Q16RoutineBegin());
flowScheduler.add(Q16RoutineEachFrame());
flowScheduler.add(Q16RoutineEnd());
flowScheduler.add(Demo_introRoutineBegin());
flowScheduler.add(Demo_introRoutineEachFrame());
flowScheduler.add(Demo_introRoutineEnd());
flowScheduler.add(Demo_Q1RoutineBegin());
flowScheduler.add(Demo_Q1RoutineEachFrame());
flowScheduler.add(Demo_Q1RoutineEnd());
flowScheduler.add(Demo_Q2RoutineBegin());
flowScheduler.add(Demo_Q2RoutineEachFrame());
flowScheduler.add(Demo_Q2RoutineEnd());
flowScheduler.add(Demo_Q3RoutineBegin());
flowScheduler.add(Demo_Q3RoutineEachFrame());
flowScheduler.add(Demo_Q3RoutineEnd());
flowScheduler.add(Demo_Q4RoutineBegin());
flowScheduler.add(Demo_Q4RoutineEachFrame());
flowScheduler.add(Demo_Q4RoutineEnd());
flowScheduler.add(Demo_Q5RoutineBegin());
flowScheduler.add(Demo_Q5RoutineEachFrame());
flowScheduler.add(Demo_Q5RoutineEnd());
flowScheduler.add(Demo_Q6RoutineBegin());
flowScheduler.add(Demo_Q6RoutineEachFrame());
flowScheduler.add(Demo_Q6RoutineEnd());
flowScheduler.add(Demo_Q7RoutineBegin());
flowScheduler.add(Demo_Q7RoutineEachFrame());
flowScheduler.add(Demo_Q7RoutineEnd());
flowScheduler.add(Demo_Q8RoutineBegin());
flowScheduler.add(Demo_Q8RoutineEachFrame());
flowScheduler.add(Demo_Q8RoutineEnd());
flowScheduler.add(Demo_Q10RoutineBegin());
flowScheduler.add(Demo_Q10RoutineEachFrame());
flowScheduler.add(Demo_Q10RoutineEnd());
flowScheduler.add(Demo_Q11RoutineBegin());
flowScheduler.add(Demo_Q11RoutineEachFrame());
flowScheduler.add(Demo_Q11RoutineEnd());
flowScheduler.add(Demo_Q12RoutineBegin());
flowScheduler.add(Demo_Q12RoutineEachFrame());
flowScheduler.add(Demo_Q12RoutineEnd());
flowScheduler.add(FeedbackRoutineBegin());
flowScheduler.add(FeedbackRoutineEachFrame());
flowScheduler.add(FeedbackRoutineEnd());
// flowScheduler.add(ThanksRoutineBegin());
// flowScheduler.add(ThanksRoutineEachFrame());
// flowScheduler.add(ThanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    { name: 'Business_code_img_croped.png', path: 'resources/Business_code_img_croped.png' }
]
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var RTR = 0; 
var RTD = 0; 

if(Math.floor(Math.random() * 10) % 2 == 0){
	RTR = 1; 
}
else{
	RTD = 1;
}

var API_rep = 1;
var comment1 = "Please type here";
var comment2 = "Please type here";
var timer;

var WelcomeClock;
var key_resp_31;
var text_50;
var Informed_Consent_1Clock;
var Informed_box_1;
var key_resp_41;
var Informed_Consent_2Clock;
var Informed_box_2;
var key_resp_42;
var Informed_Consent_3Clock;
var Informed_box_3;
var key_resp_43;
var Informed_consent_4Clock;
var Informed_box_4;
var key_resp_44;
var Informed_Consent_5Clock;
var Informed_box_5;
var key_resp_45;
var Informed_Consent_6Clock;
var Informed_box_6;
var key_resp_46;
var Informed_Consent_7Clock;
var Informed_box_7;
var key_resp_47;
var Informed_consent_8Clock;
var Informed_box_8;
var key_resp_48;
var Informed_Question_1Clock;
var Informed_Q1;
var Informed_key1;
var Informed_Question_2Clock;
var Informed_Q2;
var Informed_key2;
var Informed_Question_3Clock;
var Informed_Q3;
var Informed_Key3;
var Comprehension_RecallClock;
var myClock;
var key_resp_50;
var textbox_14;
var Comprehension_DoClock;
var key_resp_51;
var textbox_15;
var Book_RecallClock;
var mouse_6;
var img6;
var next_phase_12;
var Clock_6;
var info_6;
var C_1;
var recall_box;
var Book_DoClock;
var mouse;
var Images;
var image;
var next_phase_0;
var Clock_1;
var Info1;
var C_2;
var do_box;
var Questionnaire_phase_introductionClock;
var text_2;
var key_resp_49;
var Q1Clock;
var text;
var key_resp;
var Q2Clock;
var text_3;
var key_resp_2;
var Q3Clock;
var text_4;
var key_resp_3;
var Q4Clock;
var text_6;
var key_resp_4;
var Q5Clock;
var text_7;
var key_resp_5;
var Q6Clock;
var text_8;
var key_resp_6;
var Q7Clock;
var text_10;
var key_resp_7;
var Q8Clock;
var text_11;
var key_resp_8;
var Q9Clock;
var text_12;
var key_resp_9;
var Q10Clock;
var text_13;
var key_resp_10;
var Q11Clock;
var text_14;
var key_resp_11;
var Q12Clock;
var text_15;
var key_resp_12;
var Q13Clock;
var text_16;
var key_resp_13;
var Q14Clock;
var text_17;
var key_resp_14;
var Q15Clock;
var text_18;
var key_resp_15;
var Q16Clock;
var text_19;
var key_resp_16;
var Demo_introClock;
var Demo_Introduction;
var key_resp_52;
var Demo_Q1Clock;
var text_45;
var textbox_2;
var button_6;
var Demo_Q2Clock;
var text_46;
var textbox_3;
var button_7;
var Demo_Q3Clock;
var text_47;
var textbox_4;
var button_8;
var Demo_Q4Clock;
var text_48;
var textbox_5;
var button_9;
var Demo_Q5Clock;
var text_49;
var textbox_6;
var button_10;
var Demo_Q6Clock;
var text_5;
var textbox_7;
var button_12;
var Demo_Q7Clock;
var text_51;
var textbox_8;
var button_13;
var Demo_Q8Clock;
var text_52;
var textbox_9;
var button_14;
var Demo_Q10Clock;
var text_54;
var textbox_11;
var button_16;
var Demo_Q11Clock;
var text_55;
var textbox_12;
var button_17;
var Demo_Q12Clock;
var text_44;
var textbox;
var button_5;
var FeedbackClock;
var text_57;
var textbox_13;
var button_11;
var ThanksClock;
var text_9;
var Exit_button;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Welcome"
  WelcomeClock = new util.Clock();
  key_resp_31 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_50 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_50',
    text: 'Welcome! \n\nBefore the experiment begins, we will inform you what we will\nbe doing in this experiment. If you agree and understand our\npurpose, we appreciate it. \n\nPlease stay in FULL-SCREEN during the full experiment setting.\n(if you are not in full screen, please toggle it manually)\n\n If you do not wish to finish the experiment, you can quit\n at anytime by pressing the ESC key and close the tab. \n\nPress Spacebar to Continue.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Informed_Consent_1"
  Informed_Consent_1Clock = new util.Clock();
  Informed_box_1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Informed_box_1',
    text: '1. What is this experiment about?\n\nYou are invited to take part in a study concerning the \nunderstanding of concurrent programming. You will be asked\nto read and describe some key features about some \nconcurrent Java code first, and then answer some questions\nconcerning some features in this code\n(without the presence of the code). \n\nPress Spacebar to Continue.\n    \n',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [1, 0.7],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_41 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Informed_Consent_2"
  Informed_Consent_2Clock = new util.Clock();
  Informed_box_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Informed_box_2',
    text: '2. Who is doing it?\n\nThe study is being conducted by Zhangliang Ma, MCs \nCandidate, under the supervision of Eric Aubanel, Professor in\nthe Faculty of Computer Science, at the University of New \nBrunswick.\n\nPress Spacebar to Continue.\n    \n',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [1, 0.7],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_42 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Informed_Consent_3"
  Informed_Consent_3Clock = new util.Clock();
  Informed_box_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Informed_box_3',
    text: '3. What will I have to do?\n\nIf you choose to participate, you will read a piece of\nconcurrent code consisting of multiple Java classes. \nDuring the reading, we expect you to make some comments. \n\nAfter reading the code, we will provide you a questionnaire \nconcerning the features of the code. \n\nAt last, you will answer some questions about your age,\neducation level, self-assessment, and years of experience in\nJava concurrent programming. \n\nThe duration of this study is 30 min or less. It is required that \nyou finish the experiment in one sitting. \n\nPress Spacebar to Continue.\n    ',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [1, 0.7],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_43 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Informed_consent_4"
  Informed_consent_4Clock = new util.Clock();
  Informed_box_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Informed_box_4',
    text: '4. What will I get for participating?\n\nAt the end of this experiment, you will be offered a choice to receive \na $10 CAD gift card.which will require you to enter your \nemail address and country where you wish to use the card. \n\nThe availability of this benefit depends on the service region of the gift card providers. \n\nIn addition, we will not disclose your email address/country of use, or use \nit for any other purposes. \n\nPress Spacebar to Continue.\n    ',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [1, 0.7],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_44 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Informed_Consent_5"
  Informed_Consent_5Clock = new util.Clock();
  Informed_box_5 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Informed_box_5',
    text: '5. Why should I participate?\n\nBy participating in this experiment, you can give us \nimportant information that will help us understand the \nmental models of concurrent programming.\n\nPress Spacebar to Continue.\n    ',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [1, 0.7],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_45 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Informed_Consent_6"
  Informed_Consent_6Clock = new util.Clock();
  Informed_box_6 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Informed_box_6',
    text: '6. How is this safe for me to do? How do you keep my \nanswers private and confidential?\n\nThe demographic questions, experiment, and the data \nare stored on pavlovia.org, which is a secured domain \nprotected by the HTTPs protocol. This means only the \ndesigner who owns this experiment can have access to \nthe data. \n\nThe data will be summarized and processed in reports, \nwithout the disclosure of the original data. You can always \nstay anonymous during the whole sitting of the experiment. \n\nPress Spacebar to Continue.',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [1, 0.7],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_46 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Informed_Consent_7"
  Informed_Consent_7Clock = new util.Clock();
  Informed_box_7 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Informed_box_7',
    text: '7. What are my rights as a participant in this survey?\n\nParticipation in this study is completely voluntary. If at \nany moment you feel you do not want to continue for \nany reason, you are free to leave without penalty. \n\nThe result of the concurrent programming questions \nwill not be scored. \n\nPress Spacebar to Continue.\n',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [1, 0.7],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_47 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Informed_consent_8"
  Informed_consent_8Clock = new util.Clock();
  Informed_box_8 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Informed_box_8',
    text: '8. Why might I not want to do it?\n\nWe do not expect that you will feel negative during \nthe study. If you are worried about this during the experiment,\nfeel free to leave by pressing the ESC key. \n\nThis project is on file with the Research Ethics Board #2022-067, \nUniversity of New Brunswick. If you have any questions or \nconcern about your rights or treatment regarding this\nexperiment, you may contact this email address:\nzma7@unb.ca\n\nPress Spacebar to Continue.\n    ',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [1, 0.7],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_48 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Informed_Question_1"
  Informed_Question_1Clock = new util.Clock();
  Informed_Q1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Informed_Q1',
    text: 'I confirm that I am over 19 years old. \n\n(Press Y if you agree, ESC to quit the experiment)',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [1, 0.5],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  Informed_key1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Informed_Question_2"
  Informed_Question_2Clock = new util.Clock();
  Informed_Q2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Informed_Q2',
    text: 'I have read and understood the information and \nconsent to participate in this experiment. \n\n(Press Y if you agree, ESC to quit the experiment)',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [1, 0.5],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  Informed_key2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Informed_Question_3"
  Informed_Question_3Clock = new util.Clock();
  Informed_Q3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'Informed_Q3',
    text: 'I consent to the use of my email address and country of use to obtain a gift card, if I so choose\n\n(Press Y if you agree, ESC to quit the experiment)',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [1, 0.5],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  Informed_Key3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Comprehension_Recall"
  Comprehension_RecallClock = new util.Clock();
  myClock = new util.Clock();
  key_resp_50 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  textbox_14 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_14',
    text: 'In this section, we welcome you to look at a piece of\ncode with concurrency written in Java. This code piece is\ndesigned for teaching Java concurrency. \n\n============================================\n\nThe time for this task is 15 min, and the remaining time will \nbe displayed at the upper left corner. After this task, we will\nask some questions about the code features.\n\nDuring this phase, you can scroll the code pieces to see\nthe rest of the code. \n\nA textbox is provided and your task is to describe the purpose of \nthis program runs with your own language. \n\nIf you finish the task before the limited time, feel free to click \nthe "next phase" button to end\nearly. \n\nPress SpaceBar to begin.   \n',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [1, 0.95],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgrey', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  // Initialize components for Routine "Comprehension_Do"
  Comprehension_DoClock = new util.Clock();
  key_resp_51 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  textbox_15 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_15',
    text: 'In this section, we welcome you to look at a piece of\ncode with concurrency written in Java. This code piece is\ndesigned for teaching Java concurrency. \n\n============================================\n\nThe time for this task is 15 mins and the remaining time will \nbe displayed at the upper left corner. After this task, we will\nask some questions about the code features.\n\n\nDuring this phase, you can scroll the code pieces to see\nthe rest of the code. \n\nYour task is to describe if there exist any concurrent bug in \nthe code in the given textbox. Type N/A if there is no such bug. \n\nIf you finish the task before the limited time, feel free to click \nthe "next phase" button to end\nearly. \n\nPress SpaceBar to begin.   \n',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [1, 0.95],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  // Initialize components for Routine "Book_Recall"
  Book_RecallClock = new util.Clock();
  mouse_6 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_6.mouseClock = new util.Clock();
  /* Syntax Error: Fix Python code */
  img6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img6', units : undefined, 
    image : 'Business_code_img_croped.png', mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.85)], size : [1.0, 2.536],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  next_phase_12 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next_phase_12',
    text: 'Next Phase',
    pos: [(- 0.7), 0.25], letterHeight: 0.03,
    size: [0.3, 0.1]
  });
  next_phase_12.clock = new util.Clock();
  
  Clock_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Clock_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.7), 0.35], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  info_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'info_6',
    text: 'Remaining Time:',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.7), 0.4], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  C_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'C_1',
    text: 'Describe the purpose of program below:\n(use scroll to see the whole program)',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.55), 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  recall_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'recall_box',
    text: comment1,
    font: 'Open Sans',
    pos: [(- 0.55), (- 0.22)], letterHeight: 0.03,
    size: [0.6, 0.5],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: 1.0,
    padding: undefined,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -7.0 
  });
  
  // Initialize components for Routine "Book_Do"
  Book_DoClock = new util.Clock();
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  Images = [];
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'Business_code_img_croped.png', mask : undefined,
    ori : 0.0, pos : [0.3, (- 0.85)], size : [1.0, 2.536],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  next_phase_0 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'next_phase_0',
    text: 'Next Phase',
    pos: [(- 0.7), 0.25], letterHeight: 0.03,
    size: [0.3, 0.1]
  });
  next_phase_0.clock = new util.Clock();
  
  Clock_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Clock_1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.7), 0.35], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  Info1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Info1',
    text: 'Remaining Time:',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.7), 0.4], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  C_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'C_2',
    text: 'Please describe concurrency bugs below \n(N/A if none) \n(hint: use scroll to see the full program)',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.55), 0.1], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  do_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'do_box',
    text: comment2,
    font: 'Open Sans',
    pos: [(- 0.55), (- 0.22)], letterHeight: 0.03,
    size: [0.6, 0.5],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -7.0 
  });
  
  // Initialize components for Routine "Questionnaire_phase_introduction"
  Questionnaire_phase_introductionClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'In this section, you will be asked to answer some Yes/No questions \nconcerning the code you read just now by pressing "Y" and "N" \nkeys on the keyboard. The questions will not forward until the keys\nare pressed. \n\nPress Spacebar to Continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_49 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Q1"
  Q1Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Does the program define the “Account” class?\n\n(Y/N)\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Q2"
  Q2Clock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Does the program define the “Money” class? \n\n(Y/N)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Q3"
  Q3Clock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Does the program define the “Employer” class?\n\n(Y/N)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Q4"
  Q4Clock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Does the program define the “Employee” class?\n\n(Y/N)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Q5"
  Q5Clock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'Is the field “amount” represented by a floating point number?\n\n(Y/N)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Q6"
  Q6Clock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'Does Account::takeMoney() check if the field “amount” is below 0?\n\n(Y/N)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Q7"
  Q7Clock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Will Account::addMoney() notify someone if it has successfully\nreceived the amount? \n\n(Y/N)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Q8"
  Q8Clock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'Is the method “takeMoney()” part of the “Employee” class?\n\n(Y/N)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Q9"
  Q9Clock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'Is the field “amount” shared to either “Employer” or “Employee”? \n\n(Y/N)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Q10"
  Q10Clock = new util.Clock();
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'Will the field “amount” always stay above 0?\n\n(Y/N)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Q11"
  Q11Clock = new util.Clock();
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: 'Does the Employee add his/her money taken from the Employer’s \naccount into another account not accessible to the Employer?\n\n(Y/N)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Q12"
  Q12Clock = new util.Clock();
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: 'Are both methods of the “Account” class thread safe?\n\n(Y/N)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Q13"
  Q13Clock = new util.Clock();
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: 'When two threads launched with the “Employee” taking away the \nmoney at the same time, will both of the actions be registered, \nresulting a total withdraw value of 20?\n\n(Y/N)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Q14"
  Q14Clock = new util.Clock();
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: 'Does the Employee have to wait for the Employer to add money at any moment? \n\n(Y/N)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_14 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Q15"
  Q15Clock = new util.Clock();
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: 'Can the Employer add money into the account if the Employee has \nnot finished taking away money? \n\n(Y/N)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_15 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Q16"
  Q16Clock = new util.Clock();
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: 'Is “80” the amount remaining after all the threads have finished \ntheir tasks? \n\n(Y/N)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_16 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Demo_intro"
  Demo_introClock = new util.Clock();
  Demo_Introduction = new visual.TextStim({
    win: psychoJS.window,
    name: 'Demo_Introduction',
    text: 'Thanks for your participation! We will collect some information about\nyourself and the possible ways to give you the gift card!\n\nPress SpaceBar to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_52 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Demo_Q1"
  Demo_Q1Clock = new util.Clock();
  text_45 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_45',
    text: 'Age (in number of years):',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_2',
    text: 'Please type here: ',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [1, 0.15],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  button_6 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_6',
    text: 'Next',
    pos: [0.7, 0.0], letterHeight: 0.03,
    size: [0.3, 0.1]
  });
  button_6.clock = new util.Clock();
  
  // Initialize components for Routine "Demo_Q2"
  Demo_Q2Clock = new util.Clock();
  text_46 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_46',
    text: 'Are you currently a student (Yes or No)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_3',
    text: 'Please type here: ',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [1, 0.15],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  button_7 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_7',
    text: 'Next',
    pos: [0.7, 0], letterHeight: 0.03,
    size: [0.3, 0.1]
  });
  button_7.clock = new util.Clock();
  
  // Initialize components for Routine "Demo_Q3"
  Demo_Q3Clock = new util.Clock();
  text_47 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_47',
    text: 'Number of programming courses finished: ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_4',
    text: 'Please type here: ',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [1, 0.15],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  button_8 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_8',
    text: 'Next',
    pos: [0.7, 0], letterHeight: 0.03,
    size: [0.3, 0.1]
  });
  button_8.clock = new util.Clock();
  
  // Initialize components for Routine "Demo_Q4"
  Demo_Q4Clock = new util.Clock();
  text_48 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_48',
    text: 'Number of CONCURRENT programming courses finished: ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_5 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_5',
    text: 'Please type here: ',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [1, 0.15],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  button_9 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_9',
    text: 'Next',
    pos: [0.7, 0], letterHeight: 0.03,
    size: [0.3, 0.1]
  });
  button_9.clock = new util.Clock();
  
  // Initialize components for Routine "Demo_Q5"
  Demo_Q5Clock = new util.Clock();
  text_49 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_49',
    text: 'Highest level of education achieved: ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_6 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_6',
    text: 'Please type here: ',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [1, 0.15],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  button_10 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_10',
    text: 'Next',
    pos: [0.7, 0], letterHeight: 0.03,
    size: [0.3, 0.1]
  });
  button_10.clock = new util.Clock();
  
  // Initialize components for Routine "Demo_Q6"
  Demo_Q6Clock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'During which year did you first learn to program in Java?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_7 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_7',
    text: 'Please type here:',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [1, 0.15],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  button_12 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_12',
    text: 'Next',
    pos: [0.7, 0], letterHeight: 0.03,
    size: [0.3, 0.1]
  });
  button_12.clock = new util.Clock();
  
  // Initialize components for Routine "Demo_Q7"
  Demo_Q7Clock = new util.Clock();
  text_51 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_51',
    text: 'Number of years of programming experience in Java:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_8 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_8',
    text: 'Please type here:',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [1, 0.15],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  button_13 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_13',
    text: 'Next',
    pos: [0.7, 0], letterHeight: 0.03,
    size: [0.3, 0.1]
  });
  button_13.clock = new util.Clock();
  
  // Initialize components for Routine "Demo_Q8"
  Demo_Q8Clock = new util.Clock();
  text_52 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_52',
    text: 'Number of years of experience in concurrent programming:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_9 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_9',
    text: 'Please type here:',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [1, 0.15],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  button_14 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_14',
    text: 'Next',
    pos: [0.7, 0], letterHeight: 0.03,
    size: [0.3, 0.1]
  });
  button_14.clock = new util.Clock();
  
  // Initialize components for Routine "Demo_Q10"
  Demo_Q10Clock = new util.Clock();
  text_54 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_54',
    text: 'Rate your level of expertise in Java concurrency, between 0 and 100\n(0 = total lack of knowledge; 100 = total expert)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_11 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_11',
    text: 'Please type here:',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [1, 0.15],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  button_16 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_16',
    text: 'Next',
    pos: [0.7, 0], letterHeight: 0.03,
    size: [0.3, 0.1]
  });
  button_16.clock = new util.Clock();
  
  // Initialize components for Routine "Demo_Q11"
  Demo_Q11Clock = new util.Clock();
  text_55 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_55',
    text: 'Rate your level of expertise in Java concurrency AMONG PEERS, \nbetween 0 and 100\n(0 = total lack of knowledge; 100 = total expert)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_12 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_12',
    text: 'Please type here:',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [1, 0.15],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  button_17 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_17',
    text: 'Next',
    pos: [0.7, 0], letterHeight: 0.03,
    size: [0.3, 0.1]
  });
  button_17.clock = new util.Clock();
  
  // Initialize components for Routine "Demo_Q12"
  Demo_Q12Clock = new util.Clock();
  text_44 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_44',
    text: 'Email address, and country intended to use, for the gift card (optional): ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.05,
    size: [1, 0.15],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgray', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  button_5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_5',
    text: 'Next',
    pos: [0.7, 0], letterHeight: 0.03,
    size: [0.3, 0.1]
  });
  button_5.clock = new util.Clock();
  
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  text_57 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_57',
    text: 'This type of mental model study on concurrent programming\nhas never been done before.Your feedback really helps! \nPlease help us, and write your feedback in the textbox below:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox_13 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_13',
    text: 'Please type here',
    font: 'Open Sans',
    pos: [0, 0], letterHeight: 0.03,
    size: [0.8, 0.3],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: 'darkgrey', borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  button_11 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_11',
    text: 'Next',
    pos: [0.7, 0], letterHeight: 0.03,
    size: [0.3, 0.1]
  });
  button_11.clock = new util.Clock();
  
  // Initialize components for Routine "Thanks"
  ThanksClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'Thank you for your participation!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Exit_button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Exit_button',
    text: 'The End',
    pos: [0, (- 0.3)], letterHeight: 0.03,
    size: [0.25, 0.1]
  });
  Exit_button.clock = new util.Clock();
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_31_allKeys;
var WelcomeComponents;
function WelcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Welcome'-------
    t = 0;
    WelcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_31.keys = undefined;
    key_resp_31.rt = undefined;
    _key_resp_31_allKeys = [];
    // keep track of which components have finished
    WelcomeComponents = [];
    WelcomeComponents.push(key_resp_31);
    WelcomeComponents.push(text_50);
    
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WelcomeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Welcome'-------
    // get current time
    t = WelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_31* updates
    if (t >= 0.0 && key_resp_31.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_31.tStart = t;  // (not accounting for frame time here)
      key_resp_31.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_31.clock.reset();
      key_resp_31.start();
      key_resp_31.clearEvents();
    }

    if (key_resp_31.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_31.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_31_allKeys = _key_resp_31_allKeys.concat(theseKeys);
      if (_key_resp_31_allKeys.length > 0) {
        key_resp_31.keys = _key_resp_31_allKeys[_key_resp_31_allKeys.length - 1].name;  // just the last key pressed
        key_resp_31.rt = _key_resp_31_allKeys[_key_resp_31_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_50* updates
    if (t >= 0.0 && text_50.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_50.tStart = t;  // (not accounting for frame time here)
      text_50.frameNStart = frameN;  // exact frame index
      
      text_50.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeRoutineEnd() {
  return async function () {
    //------Ending Routine 'Welcome'-------
    for (const thisComponent of WelcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_31.stop();
    // the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_41_allKeys;
var Informed_Consent_1Components;
function Informed_Consent_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Informed_Consent_1'-------
    t = 0;
    Informed_Consent_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_41.keys = undefined;
    key_resp_41.rt = undefined;
    _key_resp_41_allKeys = [];
    // keep track of which components have finished
    Informed_Consent_1Components = [];
    Informed_Consent_1Components.push(Informed_box_1);
    Informed_Consent_1Components.push(key_resp_41);
    
    for (const thisComponent of Informed_Consent_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Informed_Consent_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Informed_Consent_1'-------
    // get current time
    t = Informed_Consent_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Informed_box_1* updates
    if (t >= 0.0 && Informed_box_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Informed_box_1.tStart = t;  // (not accounting for frame time here)
      Informed_box_1.frameNStart = frameN;  // exact frame index
      
      Informed_box_1.setAutoDraw(true);
    }

    
    // *key_resp_41* updates
    if (t >= 0.0 && key_resp_41.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_41.tStart = t;  // (not accounting for frame time here)
      key_resp_41.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_41.clock.reset();
      key_resp_41.start();
      key_resp_41.clearEvents();
    }

    if (key_resp_41.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_41.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_41_allKeys = _key_resp_41_allKeys.concat(theseKeys);
      if (_key_resp_41_allKeys.length > 0) {
        key_resp_41.keys = _key_resp_41_allKeys[_key_resp_41_allKeys.length - 1].name;  // just the last key pressed
        key_resp_41.rt = _key_resp_41_allKeys[_key_resp_41_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Informed_Consent_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Informed_Consent_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Informed_Consent_1'-------
    for (const thisComponent of Informed_Consent_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_41.stop();
    // the Routine "Informed_Consent_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_42_allKeys;
var Informed_Consent_2Components;
function Informed_Consent_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Informed_Consent_2'-------
    t = 0;
    Informed_Consent_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_42.keys = undefined;
    key_resp_42.rt = undefined;
    _key_resp_42_allKeys = [];
    // keep track of which components have finished
    Informed_Consent_2Components = [];
    Informed_Consent_2Components.push(Informed_box_2);
    Informed_Consent_2Components.push(key_resp_42);
    
    for (const thisComponent of Informed_Consent_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Informed_Consent_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Informed_Consent_2'-------
    // get current time
    t = Informed_Consent_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Informed_box_2* updates
    if (t >= 0.0 && Informed_box_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Informed_box_2.tStart = t;  // (not accounting for frame time here)
      Informed_box_2.frameNStart = frameN;  // exact frame index
      
      Informed_box_2.setAutoDraw(true);
    }

    
    // *key_resp_42* updates
    if (t >= 0.0 && key_resp_42.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_42.tStart = t;  // (not accounting for frame time here)
      key_resp_42.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_42.clock.reset();
      key_resp_42.start();
      key_resp_42.clearEvents();
    }

    if (key_resp_42.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_42.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_42_allKeys = _key_resp_42_allKeys.concat(theseKeys);
      if (_key_resp_42_allKeys.length > 0) {
        key_resp_42.keys = _key_resp_42_allKeys[_key_resp_42_allKeys.length - 1].name;  // just the last key pressed
        key_resp_42.rt = _key_resp_42_allKeys[_key_resp_42_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Informed_Consent_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Informed_Consent_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Informed_Consent_2'-------
    for (const thisComponent of Informed_Consent_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_42.stop();
    // the Routine "Informed_Consent_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_43_allKeys;
var Informed_Consent_3Components;
function Informed_Consent_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Informed_Consent_3'-------
    t = 0;
    Informed_Consent_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_43.keys = undefined;
    key_resp_43.rt = undefined;
    _key_resp_43_allKeys = [];
    // keep track of which components have finished
    Informed_Consent_3Components = [];
    Informed_Consent_3Components.push(Informed_box_3);
    Informed_Consent_3Components.push(key_resp_43);
    
    for (const thisComponent of Informed_Consent_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Informed_Consent_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Informed_Consent_3'-------
    // get current time
    t = Informed_Consent_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Informed_box_3* updates
    if (t >= 0.0 && Informed_box_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Informed_box_3.tStart = t;  // (not accounting for frame time here)
      Informed_box_3.frameNStart = frameN;  // exact frame index
      
      Informed_box_3.setAutoDraw(true);
    }

    
    // *key_resp_43* updates
    if (t >= 0.0 && key_resp_43.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_43.tStart = t;  // (not accounting for frame time here)
      key_resp_43.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_43.clock.reset();
      key_resp_43.start();
      key_resp_43.clearEvents();
    }

    if (key_resp_43.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_43.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_43_allKeys = _key_resp_43_allKeys.concat(theseKeys);
      if (_key_resp_43_allKeys.length > 0) {
        key_resp_43.keys = _key_resp_43_allKeys[_key_resp_43_allKeys.length - 1].name;  // just the last key pressed
        key_resp_43.rt = _key_resp_43_allKeys[_key_resp_43_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Informed_Consent_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Informed_Consent_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'Informed_Consent_3'-------
    for (const thisComponent of Informed_Consent_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_43.stop();
    // the Routine "Informed_Consent_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_44_allKeys;
var Informed_consent_4Components;
function Informed_consent_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Informed_consent_4'-------
    t = 0;
    Informed_consent_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_44.keys = undefined;
    key_resp_44.rt = undefined;
    _key_resp_44_allKeys = [];
    // keep track of which components have finished
    Informed_consent_4Components = [];
    Informed_consent_4Components.push(Informed_box_4);
    Informed_consent_4Components.push(key_resp_44);
    
    for (const thisComponent of Informed_consent_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Informed_consent_4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Informed_consent_4'-------
    // get current time
    t = Informed_consent_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Informed_box_4* updates
    if (t >= 0.0 && Informed_box_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Informed_box_4.tStart = t;  // (not accounting for frame time here)
      Informed_box_4.frameNStart = frameN;  // exact frame index
      
      Informed_box_4.setAutoDraw(true);
    }

    
    // *key_resp_44* updates
    if (t >= 0.0 && key_resp_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_44.tStart = t;  // (not accounting for frame time here)
      key_resp_44.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_44.clock.reset();
      key_resp_44.start();
      key_resp_44.clearEvents();
    }

    if (key_resp_44.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_44.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_44_allKeys = _key_resp_44_allKeys.concat(theseKeys);
      if (_key_resp_44_allKeys.length > 0) {
        key_resp_44.keys = _key_resp_44_allKeys[_key_resp_44_allKeys.length - 1].name;  // just the last key pressed
        key_resp_44.rt = _key_resp_44_allKeys[_key_resp_44_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Informed_consent_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Informed_consent_4RoutineEnd() {
  return async function () {
    //------Ending Routine 'Informed_consent_4'-------
    for (const thisComponent of Informed_consent_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_44.stop();
    // the Routine "Informed_consent_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_45_allKeys;
var Informed_Consent_5Components;
function Informed_Consent_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Informed_Consent_5'-------
    t = 0;
    Informed_Consent_5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_45.keys = undefined;
    key_resp_45.rt = undefined;
    _key_resp_45_allKeys = [];
    // keep track of which components have finished
    Informed_Consent_5Components = [];
    Informed_Consent_5Components.push(Informed_box_5);
    Informed_Consent_5Components.push(key_resp_45);
    
    for (const thisComponent of Informed_Consent_5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Informed_Consent_5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Informed_Consent_5'-------
    // get current time
    t = Informed_Consent_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Informed_box_5* updates
    if (t >= 0.0 && Informed_box_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Informed_box_5.tStart = t;  // (not accounting for frame time here)
      Informed_box_5.frameNStart = frameN;  // exact frame index
      
      Informed_box_5.setAutoDraw(true);
    }

    
    // *key_resp_45* updates
    if (t >= 0.0 && key_resp_45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_45.tStart = t;  // (not accounting for frame time here)
      key_resp_45.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_45.clock.reset();
      key_resp_45.start();
      key_resp_45.clearEvents();
    }

    if (key_resp_45.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_45.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_45_allKeys = _key_resp_45_allKeys.concat(theseKeys);
      if (_key_resp_45_allKeys.length > 0) {
        key_resp_45.keys = _key_resp_45_allKeys[_key_resp_45_allKeys.length - 1].name;  // just the last key pressed
        key_resp_45.rt = _key_resp_45_allKeys[_key_resp_45_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Informed_Consent_5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Informed_Consent_5RoutineEnd() {
  return async function () {
    //------Ending Routine 'Informed_Consent_5'-------
    for (const thisComponent of Informed_Consent_5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_45.stop();
    // the Routine "Informed_Consent_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_46_allKeys;
var Informed_Consent_6Components;
function Informed_Consent_6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Informed_Consent_6'-------
    t = 0;
    Informed_Consent_6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_46.keys = undefined;
    key_resp_46.rt = undefined;
    _key_resp_46_allKeys = [];
    // keep track of which components have finished
    Informed_Consent_6Components = [];
    Informed_Consent_6Components.push(Informed_box_6);
    Informed_Consent_6Components.push(key_resp_46);
    
    for (const thisComponent of Informed_Consent_6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Informed_Consent_6RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Informed_Consent_6'-------
    // get current time
    t = Informed_Consent_6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Informed_box_6* updates
    if (t >= 0.0 && Informed_box_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Informed_box_6.tStart = t;  // (not accounting for frame time here)
      Informed_box_6.frameNStart = frameN;  // exact frame index
      
      Informed_box_6.setAutoDraw(true);
    }

    
    // *key_resp_46* updates
    if (t >= 0.0 && key_resp_46.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_46.tStart = t;  // (not accounting for frame time here)
      key_resp_46.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_46.clock.reset();
      key_resp_46.start();
      key_resp_46.clearEvents();
    }

    if (key_resp_46.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_46.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_46_allKeys = _key_resp_46_allKeys.concat(theseKeys);
      if (_key_resp_46_allKeys.length > 0) {
        key_resp_46.keys = _key_resp_46_allKeys[_key_resp_46_allKeys.length - 1].name;  // just the last key pressed
        key_resp_46.rt = _key_resp_46_allKeys[_key_resp_46_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Informed_Consent_6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Informed_Consent_6RoutineEnd() {
  return async function () {
    //------Ending Routine 'Informed_Consent_6'-------
    for (const thisComponent of Informed_Consent_6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_46.stop();
    // the Routine "Informed_Consent_6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_47_allKeys;
var Informed_Consent_7Components;
function Informed_Consent_7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Informed_Consent_7'-------
    t = 0;
    Informed_Consent_7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_47.keys = undefined;
    key_resp_47.rt = undefined;
    _key_resp_47_allKeys = [];
    // keep track of which components have finished
    Informed_Consent_7Components = [];
    Informed_Consent_7Components.push(Informed_box_7);
    Informed_Consent_7Components.push(key_resp_47);
    
    for (const thisComponent of Informed_Consent_7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Informed_Consent_7RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Informed_Consent_7'-------
    // get current time
    t = Informed_Consent_7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Informed_box_7* updates
    if (t >= 0 && Informed_box_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Informed_box_7.tStart = t;  // (not accounting for frame time here)
      Informed_box_7.frameNStart = frameN;  // exact frame index
      
      Informed_box_7.setAutoDraw(true);
    }

    
    // *key_resp_47* updates
    if (t >= 0.0 && key_resp_47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_47.tStart = t;  // (not accounting for frame time here)
      key_resp_47.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_47.clock.reset();
      key_resp_47.start();
      key_resp_47.clearEvents();
    }

    if (key_resp_47.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_47.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_47_allKeys = _key_resp_47_allKeys.concat(theseKeys);
      if (_key_resp_47_allKeys.length > 0) {
        key_resp_47.keys = _key_resp_47_allKeys[_key_resp_47_allKeys.length - 1].name;  // just the last key pressed
        key_resp_47.rt = _key_resp_47_allKeys[_key_resp_47_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Informed_Consent_7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Informed_Consent_7RoutineEnd() {
  return async function () {
    //------Ending Routine 'Informed_Consent_7'-------
    for (const thisComponent of Informed_Consent_7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_47.stop();
    // the Routine "Informed_Consent_7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_48_allKeys;
var Informed_consent_8Components;
function Informed_consent_8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Informed_consent_8'-------
    t = 0;
    Informed_consent_8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_48.keys = undefined;
    key_resp_48.rt = undefined;
    _key_resp_48_allKeys = [];
    // keep track of which components have finished
    Informed_consent_8Components = [];
    Informed_consent_8Components.push(Informed_box_8);
    Informed_consent_8Components.push(key_resp_48);
    
    for (const thisComponent of Informed_consent_8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Informed_consent_8RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Informed_consent_8'-------
    // get current time
    t = Informed_consent_8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Informed_box_8* updates
    if (t >= 0 && Informed_box_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Informed_box_8.tStart = t;  // (not accounting for frame time here)
      Informed_box_8.frameNStart = frameN;  // exact frame index
      
      Informed_box_8.setAutoDraw(true);
    }

    
    // *key_resp_48* updates
    if (t >= 0.0 && key_resp_48.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_48.tStart = t;  // (not accounting for frame time here)
      key_resp_48.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_48.clock.reset();
      key_resp_48.start();
      key_resp_48.clearEvents();
    }

    if (key_resp_48.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_48.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_48_allKeys = _key_resp_48_allKeys.concat(theseKeys);
      if (_key_resp_48_allKeys.length > 0) {
        key_resp_48.keys = _key_resp_48_allKeys[_key_resp_48_allKeys.length - 1].name;  // just the last key pressed
        key_resp_48.rt = _key_resp_48_allKeys[_key_resp_48_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Informed_consent_8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Informed_consent_8RoutineEnd() {
  return async function () {
    //------Ending Routine 'Informed_consent_8'-------
    for (const thisComponent of Informed_consent_8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_48.stop();
    // the Routine "Informed_consent_8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Informed_key1_allKeys;
var Informed_Question_1Components;
function Informed_Question_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Informed_Question_1'-------
    t = 0;
    Informed_Question_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Informed_key1.keys = undefined;
    Informed_key1.rt = undefined;
    _Informed_key1_allKeys = [];
    // keep track of which components have finished
    Informed_Question_1Components = [];
    Informed_Question_1Components.push(Informed_Q1);
    Informed_Question_1Components.push(Informed_key1);
    
    for (const thisComponent of Informed_Question_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Informed_Question_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Informed_Question_1'-------
    // get current time
    t = Informed_Question_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Informed_Q1* updates
    if (t >= 0.0 && Informed_Q1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Informed_Q1.tStart = t;  // (not accounting for frame time here)
      Informed_Q1.frameNStart = frameN;  // exact frame index
      
      Informed_Q1.setAutoDraw(true);
    }

    
    // *Informed_key1* updates
    if (t >= 0.0 && Informed_key1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Informed_key1.tStart = t;  // (not accounting for frame time here)
      Informed_key1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      Informed_key1.clock.reset();
      Informed_key1.start();
      Informed_key1.clearEvents();
    }

    if (Informed_key1.status === PsychoJS.Status.STARTED) {
      let theseKeys = Informed_key1.getKeys({keyList: ['y'], waitRelease: false});
      _Informed_key1_allKeys = _Informed_key1_allKeys.concat(theseKeys);
      if (_Informed_key1_allKeys.length > 0) {
        Informed_key1.keys = _Informed_key1_allKeys[_Informed_key1_allKeys.length - 1].name;  // just the last key pressed
        Informed_key1.rt = _Informed_key1_allKeys[_Informed_key1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Informed_Question_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Informed_Question_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Informed_Question_1'-------
    for (const thisComponent of Informed_Question_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Informed_key1.stop();
    // the Routine "Informed_Question_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Informed_key2_allKeys;
var Informed_Question_2Components;
function Informed_Question_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Informed_Question_2'-------
    t = 0;
    Informed_Question_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Informed_key2.keys = undefined;
    Informed_key2.rt = undefined;
    _Informed_key2_allKeys = [];
    // keep track of which components have finished
    Informed_Question_2Components = [];
    Informed_Question_2Components.push(Informed_Q2);
    Informed_Question_2Components.push(Informed_key2);
    
    for (const thisComponent of Informed_Question_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Informed_Question_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Informed_Question_2'-------
    // get current time
    t = Informed_Question_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Informed_Q2* updates
    if (t >= 0.0 && Informed_Q2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Informed_Q2.tStart = t;  // (not accounting for frame time here)
      Informed_Q2.frameNStart = frameN;  // exact frame index
      
      Informed_Q2.setAutoDraw(true);
    }

    
    // *Informed_key2* updates
    if (t >= 0.0 && Informed_key2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Informed_key2.tStart = t;  // (not accounting for frame time here)
      Informed_key2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      Informed_key2.clock.reset();
      Informed_key2.start();
      Informed_key2.clearEvents();
    }

    if (Informed_key2.status === PsychoJS.Status.STARTED) {
      let theseKeys = Informed_key2.getKeys({keyList: ['y'], waitRelease: false});
      _Informed_key2_allKeys = _Informed_key2_allKeys.concat(theseKeys);
      if (_Informed_key2_allKeys.length > 0) {
        Informed_key2.keys = _Informed_key2_allKeys[_Informed_key2_allKeys.length - 1].name;  // just the last key pressed
        Informed_key2.rt = _Informed_key2_allKeys[_Informed_key2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Informed_Question_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Informed_Question_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Informed_Question_2'-------
    for (const thisComponent of Informed_Question_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Informed_key2.stop();
    // the Routine "Informed_Question_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Informed_Key3_allKeys;
var Informed_Question_3Components;
function Informed_Question_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Informed_Question_3'-------
    t = 0;
    Informed_Question_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Informed_Key3.keys = undefined;
    Informed_Key3.rt = undefined;
    _Informed_Key3_allKeys = [];
    // keep track of which components have finished
    Informed_Question_3Components = [];
    Informed_Question_3Components.push(Informed_Q3);
    Informed_Question_3Components.push(Informed_Key3);
    
    for (const thisComponent of Informed_Question_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Informed_Question_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Informed_Question_3'-------
    // get current time
    t = Informed_Question_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Informed_Q3* updates
    if (t >= 0.0 && Informed_Q3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Informed_Q3.tStart = t;  // (not accounting for frame time here)
      Informed_Q3.frameNStart = frameN;  // exact frame index
      
      Informed_Q3.setAutoDraw(true);
    }

    
    // *Informed_Key3* updates
    if (t >= 0.0 && Informed_Key3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Informed_Key3.tStart = t;  // (not accounting for frame time here)
      Informed_Key3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      Informed_Key3.clock.reset();
      Informed_Key3.start();
      Informed_Key3.clearEvents();
    }

    if (Informed_Key3.status === PsychoJS.Status.STARTED) {
      let theseKeys = Informed_Key3.getKeys({keyList: ['y'], waitRelease: false});
      _Informed_Key3_allKeys = _Informed_Key3_allKeys.concat(theseKeys);
      if (_Informed_Key3_allKeys.length > 0) {
        Informed_Key3.keys = _Informed_Key3_allKeys[_Informed_Key3_allKeys.length - 1].name;  // just the last key pressed
        Informed_Key3.rt = _Informed_Key3_allKeys[_Informed_Key3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Informed_Question_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Informed_Question_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'Informed_Question_3'-------
    for (const thisComponent of Informed_Question_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Informed_Key3.stop();
    // the Routine "Informed_Question_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Comp_recall_branch;
var currentLoop;
function Comp_recall_branchLoopBegin(Comp_recall_branchLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Comp_recall_branch = new TrialHandler({
      psychoJS: psychoJS,
      nReps: RTR, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Comp_recall_branch'
    });
    psychoJS.experiment.addLoop(Comp_recall_branch); // add the loop to the experiment
    currentLoop = Comp_recall_branch;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisComp_recall_branch of Comp_recall_branch) {
      const snapshot = Comp_recall_branch.getSnapshot();
      Comp_recall_branchLoopScheduler.add(importConditions(snapshot));
      Comp_recall_branchLoopScheduler.add(Comprehension_RecallRoutineBegin(snapshot));
      Comp_recall_branchLoopScheduler.add(Comprehension_RecallRoutineEachFrame());
      Comp_recall_branchLoopScheduler.add(Comprehension_RecallRoutineEnd());
      Comp_recall_branchLoopScheduler.add(endLoopIteration(Comp_recall_branchLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Comp_recall_branchLoopEnd() {
  psychoJS.experiment.removeLoop(Comp_recall_branch);

  return Scheduler.Event.NEXT;
}


var Comp_Do_Branch;
function Comp_Do_BranchLoopBegin(Comp_Do_BranchLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Comp_Do_Branch = new TrialHandler({
      psychoJS: psychoJS,
      nReps: RTD, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Comp_Do_Branch'
    });
    psychoJS.experiment.addLoop(Comp_Do_Branch); // add the loop to the experiment
    currentLoop = Comp_Do_Branch;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisComp_Do_Branch of Comp_Do_Branch) {
      const snapshot = Comp_Do_Branch.getSnapshot();
      Comp_Do_BranchLoopScheduler.add(importConditions(snapshot));
      Comp_Do_BranchLoopScheduler.add(Comprehension_DoRoutineBegin(snapshot));
      Comp_Do_BranchLoopScheduler.add(Comprehension_DoRoutineEachFrame());
      Comp_Do_BranchLoopScheduler.add(Comprehension_DoRoutineEnd());
      Comp_Do_BranchLoopScheduler.add(endLoopIteration(Comp_Do_BranchLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function Comp_Do_BranchLoopEnd() {
  psychoJS.experiment.removeLoop(Comp_Do_Branch);

  return Scheduler.Event.NEXT;
}


var repeat;
function repeatLoopBegin(repeatLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    repeat = new TrialHandler({
      psychoJS: psychoJS,
      nReps: RTR, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'repeat'
    });
    psychoJS.experiment.addLoop(repeat); // add the loop to the experiment
    currentLoop = repeat;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRepeat of repeat) {
      const snapshot = repeat.getSnapshot();
      repeatLoopScheduler.add(importConditions(snapshot));
      repeatLoopScheduler.add(Book_RecallRoutineBegin(snapshot));
      repeatLoopScheduler.add(Book_RecallRoutineEachFrame());
      repeatLoopScheduler.add(Book_RecallRoutineEnd());
      repeatLoopScheduler.add(endLoopIteration(repeatLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function repeatLoopEnd() {
  psychoJS.experiment.removeLoop(repeat);

  return Scheduler.Event.NEXT;
}


var repeat2;
function repeat2LoopBegin(repeat2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    repeat2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: RTD, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'repeat2'
    });
    psychoJS.experiment.addLoop(repeat2); // add the loop to the experiment
    currentLoop = repeat2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRepeat2 of repeat2) {
      const snapshot = repeat2.getSnapshot();
      repeat2LoopScheduler.add(importConditions(snapshot));
      repeat2LoopScheduler.add(Book_DoRoutineBegin(snapshot));
      repeat2LoopScheduler.add(Book_DoRoutineEachFrame());
      repeat2LoopScheduler.add(Book_DoRoutineEnd());
      repeat2LoopScheduler.add(endLoopIteration(repeat2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function repeat2LoopEnd() {
  psychoJS.experiment.removeLoop(repeat2);

  return Scheduler.Event.NEXT;
}


var _key_resp_50_allKeys;
var Comprehension_RecallComponents;
function Comprehension_RecallRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Comprehension_Recall'-------
    t = 0;
    Comprehension_RecallClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_50.keys = undefined;
    key_resp_50.rt = undefined;
    _key_resp_50_allKeys = [];
    // keep track of which components have finished
    Comprehension_RecallComponents = [];
    Comprehension_RecallComponents.push(key_resp_50);
    Comprehension_RecallComponents.push(textbox_14);
    
    for (const thisComponent of Comprehension_RecallComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Comprehension_RecallRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Comprehension_Recall'-------
    // get current time
    t = Comprehension_RecallClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_50* updates
    if (t >= 0.0 && key_resp_50.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_50.tStart = t;  // (not accounting for frame time here)
      key_resp_50.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_50.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_50.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_50.clearEvents(); });
    }

    if (key_resp_50.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_50.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_50_allKeys = _key_resp_50_allKeys.concat(theseKeys);
      if (_key_resp_50_allKeys.length > 0) {
        key_resp_50.keys = _key_resp_50_allKeys[_key_resp_50_allKeys.length - 1].name;  // just the last key pressed
        key_resp_50.rt = _key_resp_50_allKeys[_key_resp_50_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *textbox_14* updates
    if (t >= 0.0 && textbox_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_14.tStart = t;  // (not accounting for frame time here)
      textbox_14.frameNStart = frameN;  // exact frame index
      
      textbox_14.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Comprehension_RecallComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Comprehension_RecallRoutineEnd() {
  return async function () {
    //------Ending Routine 'Comprehension_Recall'-------
    for (const thisComponent of Comprehension_RecallComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    myClock = new util.Clock();
    
    psychoJS.experiment.addData('key_resp_50.keys', key_resp_50.keys);
    if (typeof key_resp_50.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_50.rt', key_resp_50.rt);
        routineTimer.reset();
        }
    
    key_resp_50.stop();
    // the Routine "Comprehension_Recall" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    timer = new util.CountdownTimer(900);
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_51_allKeys;
var Comprehension_DoComponents;
function Comprehension_DoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Comprehension_Do'-------
    t = 0;
    Comprehension_DoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_51.keys = undefined;
    key_resp_51.rt = undefined;
    _key_resp_51_allKeys = [];
    // keep track of which components have finished
    Comprehension_DoComponents = [];
    Comprehension_DoComponents.push(key_resp_51);
    Comprehension_DoComponents.push(textbox_15);
    
    for (const thisComponent of Comprehension_DoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Comprehension_DoRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Comprehension_Do'-------
    // get current time
    t = Comprehension_DoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_51* updates
    if (t >= 0.0 && key_resp_51.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_51.tStart = t;  // (not accounting for frame time here)
      key_resp_51.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_51.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_51.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_51.clearEvents(); });
    }

    if (key_resp_51.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_51.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_51_allKeys = _key_resp_51_allKeys.concat(theseKeys);
      if (_key_resp_51_allKeys.length > 0) {
        key_resp_51.keys = _key_resp_51_allKeys[_key_resp_51_allKeys.length - 1].name;  // just the last key pressed
        key_resp_51.rt = _key_resp_51_allKeys[_key_resp_51_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *textbox_15* updates
    if (t >= 0.0 && textbox_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_15.tStart = t;  // (not accounting for frame time here)
      textbox_15.frameNStart = frameN;  // exact frame index
      
      textbox_15.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Comprehension_DoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Comprehension_DoRoutineEnd() {
  return async function () {
    //------Ending Routine 'Comprehension_Do'-------
    for (const thisComponent of Comprehension_DoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_51.keys', key_resp_51.keys);
    if (typeof key_resp_51.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_51.rt', key_resp_51.rt);
        routineTimer.reset();
        }
    
    key_resp_51.stop();
    // the Routine "Comprehension_Do" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    timer = new util.CountdownTimer(900);
    return Scheduler.Event.NEXT;
  };
}


var gotValidClick;
var Book_RecallComponents;
function Book_RecallRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Book_Recall'-------
    t = 0;
    Book_RecallClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_6
    gotValidClick = false; // until a click is received
    recall_box.refresh();
    recall_box.setText(comment1);
    // keep track of which components have finished
    Book_RecallComponents = [];
    Book_RecallComponents.push(mouse_6);
    Book_RecallComponents.push(img6);
    Book_RecallComponents.push(next_phase_12);
    Book_RecallComponents.push(Clock_6);
    Book_RecallComponents.push(info_6);
    Book_RecallComponents.push(C_1);
    Book_RecallComponents.push(recall_box);
    
    for (const thisComponent of Book_RecallComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var ContinueRoutine;
var API_rep;
function Book_RecallRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Book_Recall'-------
    // get current time
    t = Book_RecallClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var deltaY = (mouse.getWheelRel()[1] / -5);
    var oldY = img6.pos[1]; 
    var newY = oldY - deltaY;
    img6.pos = [0.3, newY];
    
    // *img6* updates
    if (t >= 0.0 && img6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img6.tStart = t;  // (not accounting for frame time here)
      img6.frameNStart = frameN;  // exact frame index
      
      img6.setAutoDraw(true);
    }

    
    // *next_phase_12* updates
    if (t >= 0 && next_phase_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_phase_12.tStart = t;  // (not accounting for frame time here)
      next_phase_12.frameNStart = frameN;  // exact frame index
      
      next_phase_12.setAutoDraw(true);
    }

    if (next_phase_12.status === PsychoJS.Status.STARTED) {
      // check whether next_phase_12 has been pressed
      if (next_phase_12.isClicked) {
        if (!next_phase_12.wasClicked) {
          // store time of first click
          next_phase_12.timesOn.push(next_phase_12.clock.getTime());
          // store time clicked until
          next_phase_12.timesOff.push(next_phase_12.clock.getTime());
        } else {
          // update time clicked until;
          next_phase_12.timesOff[next_phase_12.timesOff.length - 1] = next_phase_12.clock.getTime();
        }
        if (!next_phase_12.wasClicked) {
          // end routine when next_phase_12 is clicked
          continueRoutine = false;
          ContinueRoutine = false;
          API_rep = 0;
        }
        // if next_phase_12 is still clicked next frame, it is not a new click
        next_phase_12.wasClicked = true;
      } else {
        // if next_phase_12 is clicked next frame, it is a new click
        next_phase_12.wasClicked = false
      }
    } else {
      // keep clock at 0 if next_phase_12 hasn't started / has finished
      next_phase_12.clock.reset();
      // if next_phase_12 is clicked next frame, it is a new click
      next_phase_12.wasClicked = false;
    }
    
    // *Clock_6* updates
    if (t >= 0.0 && Clock_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Clock_6.tStart = t;  // (not accounting for frame time here)
      Clock_6.frameNStart = frameN;  // exact frame index
      
      Clock_6.setAutoDraw(true);
    }

    
    if (Clock_6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      var remaining_time = Math.floor(timer.getTime());
      var minutes = Math.floor(remaining_time / 60);
      var seconds = remaining_time - minutes * 60;
      Clock_6.setText(minutes.toString() + " : " + seconds, false);
    }
    
    // *info_6* updates
    if (t >= 0.0 && info_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      info_6.tStart = t;  // (not accounting for frame time here)
      info_6.frameNStart = frameN;  // exact frame index
      
      info_6.setAutoDraw(true);
    }

    
    // *C_1* updates
    if (t >= 0.0 && C_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      C_1.tStart = t;  // (not accounting for frame time here)
      C_1.frameNStart = frameN;  // exact frame index
      
      C_1.setAutoDraw(true);
    }

    
    // *recall_box* updates
    if (t >= 0.0 && recall_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recall_box.tStart = t;  // (not accounting for frame time here)
      recall_box.frameNStart = frameN;  // exact frame index
      
      recall_box.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Book_RecallComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Book_RecallRoutineEnd() {
  return async function () {
    //------Ending Routine 'Book_Recall'-------
    for (const thisComponent of Book_RecallComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('recall_box.text',recall_box.text)
    // the Routine "Book_Recall" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    comment1 = recall_box.getText();
    
    return Scheduler.Event.NEXT;
  };
}


var Book_DoComponents;
function Book_DoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Book_Do'-------
    t = 0;
    Book_DoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    gotValidClick = false; // until a click is received
    do_box.refresh();
    do_box.setText(comment2);
    // keep track of which components have finished
    Book_DoComponents = [];
    Book_DoComponents.push(mouse);
    Book_DoComponents.push(image);
    Book_DoComponents.push(next_phase_0);
    Book_DoComponents.push(Clock_1);
    Book_DoComponents.push(Info1);
    Book_DoComponents.push(C_2);
    Book_DoComponents.push(do_box);
    
    for (const thisComponent of Book_DoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var newY;
function Book_DoRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Book_Do'-------
    // get current time
    t = Book_DoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var deltaY = (mouse.getWheelRel()[1] / -5);
    var oldY = image.pos[1]; 
    var newY = oldY - deltaY;
    image.pos = [0.3, newY];
    
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    
    // *next_phase_0* updates
    if (t >= 0 && next_phase_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_phase_0.tStart = t;  // (not accounting for frame time here)
      next_phase_0.frameNStart = frameN;  // exact frame index
      
      next_phase_0.setAutoDraw(true);
    }

    if (next_phase_0.status === PsychoJS.Status.STARTED) {
      // check whether next_phase_0 has been pressed
      if (next_phase_0.isClicked) {
        if (!next_phase_0.wasClicked) {
          // store time of first click
          next_phase_0.timesOn.push(next_phase_0.clock.getTime());
          // store time clicked until
          next_phase_0.timesOff.push(next_phase_0.clock.getTime());
        } else {
          // update time clicked until;
          next_phase_0.timesOff[next_phase_0.timesOff.length - 1] = next_phase_0.clock.getTime();
        }
        if (!next_phase_0.wasClicked) {
          // end routine when next_phase_0 is clicked
          continueRoutine = false;
          ContinueRoutine = false;
          API_rep = 0;
        }
        // if next_phase_0 is still clicked next frame, it is not a new click
        next_phase_0.wasClicked = true;
      } else {
        // if next_phase_0 is clicked next frame, it is a new click
        next_phase_0.wasClicked = false
      }
    } else {
      // keep clock at 0 if next_phase_0 hasn't started / has finished
      next_phase_0.clock.reset();
      // if next_phase_0 is clicked next frame, it is a new click
      next_phase_0.wasClicked = false;
    }
    
    // *Clock_1* updates
    if (t >= 0.0 && Clock_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Clock_1.tStart = t;  // (not accounting for frame time here)
      Clock_1.frameNStart = frameN;  // exact frame index
      
      Clock_1.setAutoDraw(true);
    }

    
    if (Clock_1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      var remaining_time = Math.floor(timer.getTime());
      var minutes = Math.floor(remaining_time / 60);
      var seconds = remaining_time - minutes * 60;
      Clock_1.setText(minutes.toString() + " : " + seconds, false);
    }
    
    // *Info1* updates
    if (t >= 0.0 && Info1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Info1.tStart = t;  // (not accounting for frame time here)
      Info1.frameNStart = frameN;  // exact frame index
      
      Info1.setAutoDraw(true);
    }

    
    // *C_2* updates
    if (t >= 0.0 && C_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      C_2.tStart = t;  // (not accounting for frame time here)
      C_2.frameNStart = frameN;  // exact frame index
      
      C_2.setAutoDraw(true);
    }

    
    // *do_box* updates
    if (t >= 0.0 && do_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      do_box.tStart = t;  // (not accounting for frame time here)
      do_box.frameNStart = frameN;  // exact frame index
      
      do_box.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Book_DoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Book_DoRoutineEnd() {
  return async function () {
    //------Ending Routine 'Book_Do'-------
    for (const thisComponent of Book_DoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('do_box.text',do_box.text)
    // the Routine "Book_Do" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    comment2 = do_box.getText();
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_49_allKeys;
var Questionnaire_phase_introductionComponents;
function Questionnaire_phase_introductionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Questionnaire_phase_introduction'-------
    t = 0;
    Questionnaire_phase_introductionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_49.keys = undefined;
    key_resp_49.rt = undefined;
    _key_resp_49_allKeys = [];
    // keep track of which components have finished
    Questionnaire_phase_introductionComponents = [];
    Questionnaire_phase_introductionComponents.push(text_2);
    Questionnaire_phase_introductionComponents.push(key_resp_49);
    
    for (const thisComponent of Questionnaire_phase_introductionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Questionnaire_phase_introductionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Questionnaire_phase_introduction'-------
    // get current time
    t = Questionnaire_phase_introductionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp_49* updates
    if (t >= 0.0 && key_resp_49.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_49.tStart = t;  // (not accounting for frame time here)
      key_resp_49.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_49.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_49.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_49.clearEvents(); });
    }

    if (key_resp_49.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_49.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_49_allKeys = _key_resp_49_allKeys.concat(theseKeys);
      if (_key_resp_49_allKeys.length > 0) {
        key_resp_49.keys = _key_resp_49_allKeys[_key_resp_49_allKeys.length - 1].name;  // just the last key pressed
        key_resp_49.rt = _key_resp_49_allKeys[_key_resp_49_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Questionnaire_phase_introductionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Questionnaire_phase_introductionRoutineEnd() {
  return async function () {
    //------Ending Routine 'Questionnaire_phase_introduction'-------
    for (const thisComponent of Questionnaire_phase_introductionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_49.keys', key_resp_49.keys);
    if (typeof key_resp_49.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_49.rt', key_resp_49.rt);
        routineTimer.reset();
        }
    
    key_resp_49.stop();
    // the Routine "Questionnaire_phase_introduction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var Q1Components;
function Q1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Q1'-------
    t = 0;
    Q1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    Q1Components = [];
    Q1Components.push(text);
    Q1Components.push(key_resp);
    
    for (const thisComponent of Q1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Q1'-------
    // get current time
    t = Q1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp.clock.reset();
      key_resp.start();
      key_resp.clearEvents();
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == 'y') {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Q1'-------
    for (const thisComponent of Q1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes('y')) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Q1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var Q2Components;
function Q2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Q2'-------
    t = 0;
    Q2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    Q2Components = [];
    Q2Components.push(text_3);
    Q2Components.push(key_resp_2);
    
    for (const thisComponent of Q2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Q2'-------
    // get current time
    t = Q2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_2.clock.reset();
      key_resp_2.start();
      key_resp_2.clearEvents();
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_2.keys == 'n') {
            key_resp_2.corr = 1;
        } else {
            key_resp_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Q2'-------
    for (const thisComponent of Q2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_2.keys === undefined) {
      if (['None','none',undefined].includes('n')) {
         key_resp_2.corr = 1;  // correct non-response
      } else {
         key_resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    psychoJS.experiment.addData('key_resp_2.corr', key_resp_2.corr);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Q2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var Q3Components;
function Q3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Q3'-------
    t = 0;
    Q3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    Q3Components = [];
    Q3Components.push(text_4);
    Q3Components.push(key_resp_3);
    
    for (const thisComponent of Q3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Q3'-------
    // get current time
    t = Q3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_3.clock.reset();
      key_resp_3.start();
      key_resp_3.clearEvents();
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_3.keys == 'y') {
            key_resp_3.corr = 1;
        } else {
            key_resp_3.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q3RoutineEnd() {
  return async function () {
    //------Ending Routine 'Q3'-------
    for (const thisComponent of Q3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_3.keys === undefined) {
      if (['None','none',undefined].includes('y')) {
         key_resp_3.corr = 1;  // correct non-response
      } else {
         key_resp_3.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    psychoJS.experiment.addData('key_resp_3.corr', key_resp_3.corr);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "Q3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var Q4Components;
function Q4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Q4'-------
    t = 0;
    Q4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    Q4Components = [];
    Q4Components.push(text_6);
    Q4Components.push(key_resp_4);
    
    for (const thisComponent of Q4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Q4'-------
    // get current time
    t = Q4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_4.clock.reset();
      key_resp_4.start();
      key_resp_4.clearEvents();
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_4.keys == 'y') {
            key_resp_4.corr = 1;
        } else {
            key_resp_4.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q4RoutineEnd() {
  return async function () {
    //------Ending Routine 'Q4'-------
    for (const thisComponent of Q4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_4.keys === undefined) {
      if (['None','none',undefined].includes('y')) {
         key_resp_4.corr = 1;  // correct non-response
      } else {
         key_resp_4.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    psychoJS.experiment.addData('key_resp_4.corr', key_resp_4.corr);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "Q4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var Q5Components;
function Q5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Q5'-------
    t = 0;
    Q5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    Q5Components = [];
    Q5Components.push(text_7);
    Q5Components.push(key_resp_5);
    
    for (const thisComponent of Q5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Q5'-------
    // get current time
    t = Q5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_5.clock.reset();
      key_resp_5.start();
      key_resp_5.clearEvents();
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_5.keys == 'n') {
            key_resp_5.corr = 1;
        } else {
            key_resp_5.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q5RoutineEnd() {
  return async function () {
    //------Ending Routine 'Q5'-------
    for (const thisComponent of Q5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_5.keys === undefined) {
      if (['None','none',undefined].includes('n')) {
         key_resp_5.corr = 1;  // correct non-response
      } else {
         key_resp_5.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    psychoJS.experiment.addData('key_resp_5.corr', key_resp_5.corr);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "Q5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var Q6Components;
function Q6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Q6'-------
    t = 0;
    Q6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    Q6Components = [];
    Q6Components.push(text_8);
    Q6Components.push(key_resp_6);
    
    for (const thisComponent of Q6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q6RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Q6'-------
    // get current time
    t = Q6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_6.clock.reset();
      key_resp_6.start();
      key_resp_6.clearEvents();
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_6.keys == 'y') {
            key_resp_6.corr = 1;
        } else {
            key_resp_6.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q6RoutineEnd() {
  return async function () {
    //------Ending Routine 'Q6'-------
    for (const thisComponent of Q6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_6.keys === undefined) {
      if (['None','none',undefined].includes('y')) {
         key_resp_6.corr = 1;  // correct non-response
      } else {
         key_resp_6.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    psychoJS.experiment.addData('key_resp_6.corr', key_resp_6.corr);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "Q6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_7_allKeys;
var Q7Components;
function Q7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Q7'-------
    t = 0;
    Q7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    Q7Components = [];
    Q7Components.push(text_10);
    Q7Components.push(key_resp_7);
    
    for (const thisComponent of Q7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q7RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Q7'-------
    // get current time
    t = Q7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_7.clock.reset();
      key_resp_7.start();
      key_resp_7.clearEvents();
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_7.keys == 'y') {
            key_resp_7.corr = 1;
        } else {
            key_resp_7.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q7RoutineEnd() {
  return async function () {
    //------Ending Routine 'Q7'-------
    for (const thisComponent of Q7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_7.keys === undefined) {
      if (['None','none',undefined].includes('y')) {
         key_resp_7.corr = 1;  // correct non-response
      } else {
         key_resp_7.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    psychoJS.experiment.addData('key_resp_7.corr', key_resp_7.corr);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "Q7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_8_allKeys;
var Q8Components;
function Q8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Q8'-------
    t = 0;
    Q8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    Q8Components = [];
    Q8Components.push(text_11);
    Q8Components.push(key_resp_8);
    
    for (const thisComponent of Q8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q8RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Q8'-------
    // get current time
    t = Q8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }

    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_8.clock.reset();
      key_resp_8.start();
      key_resp_8.clearEvents();
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_8.keys == 'n') {
            key_resp_8.corr = 1;
        } else {
            key_resp_8.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q8RoutineEnd() {
  return async function () {
    //------Ending Routine 'Q8'-------
    for (const thisComponent of Q8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_8.keys === undefined) {
      if (['None','none',undefined].includes('n')) {
         key_resp_8.corr = 1;  // correct non-response
      } else {
         key_resp_8.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    psychoJS.experiment.addData('key_resp_8.corr', key_resp_8.corr);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "Q8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_9_allKeys;
var Q9Components;
function Q9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Q9'-------
    t = 0;
    Q9Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    Q9Components = [];
    Q9Components.push(text_12);
    Q9Components.push(key_resp_9);
    
    for (const thisComponent of Q9Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q9RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Q9'-------
    // get current time
    t = Q9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }

    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_9.clock.reset();
      key_resp_9.start();
      key_resp_9.clearEvents();
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_9.keys == 'n') {
            key_resp_9.corr = 1;
        } else {
            key_resp_9.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q9Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q9RoutineEnd() {
  return async function () {
    //------Ending Routine 'Q9'-------
    for (const thisComponent of Q9Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_9.keys === undefined) {
      if (['None','none',undefined].includes('n')) {
         key_resp_9.corr = 1;  // correct non-response
      } else {
         key_resp_9.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    psychoJS.experiment.addData('key_resp_9.corr', key_resp_9.corr);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "Q9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_10_allKeys;
var Q10Components;
function Q10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Q10'-------
    t = 0;
    Q10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    Q10Components = [];
    Q10Components.push(text_13);
    Q10Components.push(key_resp_10);
    
    for (const thisComponent of Q10Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q10RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Q10'-------
    // get current time
    t = Q10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }

    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_10.clock.reset();
      key_resp_10.start();
      key_resp_10.clearEvents();
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_10.keys == 'y') {
            key_resp_10.corr = 1;
        } else {
            key_resp_10.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q10Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q10RoutineEnd() {
  return async function () {
    //------Ending Routine 'Q10'-------
    for (const thisComponent of Q10Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_10.keys === undefined) {
      if (['None','none',undefined].includes('y')) {
         key_resp_10.corr = 1;  // correct non-response
      } else {
         key_resp_10.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    psychoJS.experiment.addData('key_resp_10.corr', key_resp_10.corr);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "Q10" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_11_allKeys;
var Q11Components;
function Q11RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Q11'-------
    t = 0;
    Q11Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    // keep track of which components have finished
    Q11Components = [];
    Q11Components.push(text_14);
    Q11Components.push(key_resp_11);
    
    for (const thisComponent of Q11Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q11RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Q11'-------
    // get current time
    t = Q11Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }

    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_11.clock.reset();
      key_resp_11.start();
      key_resp_11.clearEvents();
    }

    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_11.keys == 'y') {
            key_resp_11.corr = 1;
        } else {
            key_resp_11.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q11Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q11RoutineEnd() {
  return async function () {
    //------Ending Routine 'Q11'-------
    for (const thisComponent of Q11Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_11.keys === undefined) {
      if (['None','none',undefined].includes('y')) {
         key_resp_11.corr = 1;  // correct non-response
      } else {
         key_resp_11.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    psychoJS.experiment.addData('key_resp_11.corr', key_resp_11.corr);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    // the Routine "Q11" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_12_allKeys;
var Q12Components;
function Q12RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Q12'-------
    t = 0;
    Q12Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    // keep track of which components have finished
    Q12Components = [];
    Q12Components.push(text_15);
    Q12Components.push(key_resp_12);
    
    for (const thisComponent of Q12Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q12RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Q12'-------
    // get current time
    t = Q12Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_15* updates
    if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }

    
    // *key_resp_12* updates
    if (t >= 0.0 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_12.clock.reset();
      key_resp_12.start();
      key_resp_12.clearEvents();
    }

    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_12.keys == 'y') {
            key_resp_12.corr = 1;
        } else {
            key_resp_12.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q12Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q12RoutineEnd() {
  return async function () {
    //------Ending Routine 'Q12'-------
    for (const thisComponent of Q12Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_12.keys === undefined) {
      if (['None','none',undefined].includes('y')) {
         key_resp_12.corr = 1;  // correct non-response
      } else {
         key_resp_12.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
    psychoJS.experiment.addData('key_resp_12.corr', key_resp_12.corr);
    if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
        routineTimer.reset();
        }
    
    key_resp_12.stop();
    // the Routine "Q12" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_13_allKeys;
var Q13Components;
function Q13RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Q13'-------
    t = 0;
    Q13Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    // keep track of which components have finished
    Q13Components = [];
    Q13Components.push(text_16);
    Q13Components.push(key_resp_13);
    
    for (const thisComponent of Q13Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q13RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Q13'-------
    // get current time
    t = Q13Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_16* updates
    if (t >= 0.0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
    }

    
    // *key_resp_13* updates
    if (t >= 0.0 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_13.tStart = t;  // (not accounting for frame time here)
      key_resp_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_13.clock.reset();
      key_resp_13.start();
      key_resp_13.clearEvents();
    }

    if (key_resp_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_13.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
      if (_key_resp_13_allKeys.length > 0) {
        key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
        key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_13.keys == 'y') {
            key_resp_13.corr = 1;
        } else {
            key_resp_13.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q13Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q13RoutineEnd() {
  return async function () {
    //------Ending Routine 'Q13'-------
    for (const thisComponent of Q13Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_13.keys === undefined) {
      if (['None','none',undefined].includes('y')) {
         key_resp_13.corr = 1;  // correct non-response
      } else {
         key_resp_13.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_13.keys', key_resp_13.keys);
    psychoJS.experiment.addData('key_resp_13.corr', key_resp_13.corr);
    if (typeof key_resp_13.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_13.rt', key_resp_13.rt);
        routineTimer.reset();
        }
    
    key_resp_13.stop();
    // the Routine "Q13" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_14_allKeys;
var Q14Components;
function Q14RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Q14'-------
    t = 0;
    Q14Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_14.keys = undefined;
    key_resp_14.rt = undefined;
    _key_resp_14_allKeys = [];
    // keep track of which components have finished
    Q14Components = [];
    Q14Components.push(text_17);
    Q14Components.push(key_resp_14);
    
    for (const thisComponent of Q14Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q14RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Q14'-------
    // get current time
    t = Q14Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_17* updates
    if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }

    
    // *key_resp_14* updates
    if (t >= 0.0 && key_resp_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_14.tStart = t;  // (not accounting for frame time here)
      key_resp_14.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_14.clock.reset();
      key_resp_14.start();
      key_resp_14.clearEvents();
    }

    if (key_resp_14.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_14.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_14_allKeys = _key_resp_14_allKeys.concat(theseKeys);
      if (_key_resp_14_allKeys.length > 0) {
        key_resp_14.keys = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].name;  // just the last key pressed
        key_resp_14.rt = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_14.keys == 'n') {
            key_resp_14.corr = 1;
        } else {
            key_resp_14.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q14Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q14RoutineEnd() {
  return async function () {
    //------Ending Routine 'Q14'-------
    for (const thisComponent of Q14Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_14.keys === undefined) {
      if (['None','none',undefined].includes('n')) {
         key_resp_14.corr = 1;  // correct non-response
      } else {
         key_resp_14.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_14.keys', key_resp_14.keys);
    psychoJS.experiment.addData('key_resp_14.corr', key_resp_14.corr);
    if (typeof key_resp_14.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_14.rt', key_resp_14.rt);
        routineTimer.reset();
        }
    
    key_resp_14.stop();
    // the Routine "Q14" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_15_allKeys;
var Q15Components;
function Q15RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Q15'-------
    t = 0;
    Q15Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_15.keys = undefined;
    key_resp_15.rt = undefined;
    _key_resp_15_allKeys = [];
    // keep track of which components have finished
    Q15Components = [];
    Q15Components.push(text_18);
    Q15Components.push(key_resp_15);
    
    for (const thisComponent of Q15Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q15RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Q15'-------
    // get current time
    t = Q15Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_18* updates
    if (t >= 0.0 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index
      
      text_18.setAutoDraw(true);
    }

    
    // *key_resp_15* updates
    if (t >= 0.0 && key_resp_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_15.tStart = t;  // (not accounting for frame time here)
      key_resp_15.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_15.clock.reset();
      key_resp_15.start();
      key_resp_15.clearEvents();
    }

    if (key_resp_15.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_15.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_15_allKeys = _key_resp_15_allKeys.concat(theseKeys);
      if (_key_resp_15_allKeys.length > 0) {
        key_resp_15.keys = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].name;  // just the last key pressed
        key_resp_15.rt = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_15.keys == 'n') {
            key_resp_15.corr = 1;
        } else {
            key_resp_15.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q15Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q15RoutineEnd() {
  return async function () {
    //------Ending Routine 'Q15'-------
    for (const thisComponent of Q15Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_15.keys === undefined) {
      if (['None','none',undefined].includes('n')) {
         key_resp_15.corr = 1;  // correct non-response
      } else {
         key_resp_15.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_15.keys', key_resp_15.keys);
    psychoJS.experiment.addData('key_resp_15.corr', key_resp_15.corr);
    if (typeof key_resp_15.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_15.rt', key_resp_15.rt);
        routineTimer.reset();
        }
    
    key_resp_15.stop();
    // the Routine "Q15" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_16_allKeys;
var Q16Components;
function Q16RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Q16'-------
    t = 0;
    Q16Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_16.keys = undefined;
    key_resp_16.rt = undefined;
    _key_resp_16_allKeys = [];
    // keep track of which components have finished
    Q16Components = [];
    Q16Components.push(text_19);
    Q16Components.push(key_resp_16);
    
    for (const thisComponent of Q16Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Q16RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Q16'-------
    // get current time
    t = Q16Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_19* updates
    if (t >= 0.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_19.tStart = t;  // (not accounting for frame time here)
      text_19.frameNStart = frameN;  // exact frame index
      
      text_19.setAutoDraw(true);
    }

    
    // *key_resp_16* updates
    if (t >= 0.0 && key_resp_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_16.tStart = t;  // (not accounting for frame time here)
      key_resp_16.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_16.clock.reset();
      key_resp_16.start();
      key_resp_16.clearEvents();
    }

    if (key_resp_16.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_16.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_16_allKeys = _key_resp_16_allKeys.concat(theseKeys);
      if (_key_resp_16_allKeys.length > 0) {
        key_resp_16.keys = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].name;  // just the last key pressed
        key_resp_16.rt = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_16.keys == 'n') {
            key_resp_16.corr = 1;
        } else {
            key_resp_16.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Q16Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Q16RoutineEnd() {
  return async function () {
    //------Ending Routine 'Q16'-------
    for (const thisComponent of Q16Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp_16.keys === undefined) {
      if (['None','none',undefined].includes('n')) {
         key_resp_16.corr = 1;  // correct non-response
      } else {
         key_resp_16.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_16.keys', key_resp_16.keys);
    psychoJS.experiment.addData('key_resp_16.corr', key_resp_16.corr);
    if (typeof key_resp_16.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_16.rt', key_resp_16.rt);
        routineTimer.reset();
        }
    
    key_resp_16.stop();
    // the Routine "Q16" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_52_allKeys;
var Demo_introComponents;
function Demo_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Demo_intro'-------
    t = 0;
    Demo_introClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_52.keys = undefined;
    key_resp_52.rt = undefined;
    _key_resp_52_allKeys = [];
    // keep track of which components have finished
    Demo_introComponents = [];
    Demo_introComponents.push(Demo_Introduction);
    Demo_introComponents.push(key_resp_52);
    
    for (const thisComponent of Demo_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Demo_introRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Demo_intro'-------
    // get current time
    t = Demo_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Demo_Introduction* updates
    if (t >= 0.0 && Demo_Introduction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Demo_Introduction.tStart = t;  // (not accounting for frame time here)
      Demo_Introduction.frameNStart = frameN;  // exact frame index
      
      Demo_Introduction.setAutoDraw(true);
    }

    
    // *key_resp_52* updates
    if (t >= 0.0 && key_resp_52.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_52.tStart = t;  // (not accounting for frame time here)
      key_resp_52.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_52.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_52.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_52.clearEvents(); });
    }

    if (key_resp_52.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_52.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_52_allKeys = _key_resp_52_allKeys.concat(theseKeys);
      if (_key_resp_52_allKeys.length > 0) {
        key_resp_52.keys = _key_resp_52_allKeys[_key_resp_52_allKeys.length - 1].name;  // just the last key pressed
        key_resp_52.rt = _key_resp_52_allKeys[_key_resp_52_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Demo_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Demo_introRoutineEnd() {
  return async function () {
    //------Ending Routine 'Demo_intro'-------
    for (const thisComponent of Demo_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_52.keys', key_resp_52.keys);
    if (typeof key_resp_52.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_52.rt', key_resp_52.rt);
        routineTimer.reset();
        }
    
    key_resp_52.stop();
    // the Routine "Demo_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Demo_Q1Components;
function Demo_Q1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Demo_Q1'-------
    t = 0;
    Demo_Q1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox_2.setText('Please type here: ');
    // keep track of which components have finished
    Demo_Q1Components = [];
    Demo_Q1Components.push(text_45);
    Demo_Q1Components.push(textbox_2);
    Demo_Q1Components.push(button_6);
    
    for (const thisComponent of Demo_Q1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Demo_Q1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Demo_Q1'-------
    // get current time
    t = Demo_Q1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_45* updates
    if (t >= 0.0 && text_45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_45.tStart = t;  // (not accounting for frame time here)
      text_45.frameNStart = frameN;  // exact frame index
      
      text_45.setAutoDraw(true);
    }

    
    // *textbox_2* updates
    if (t >= 0.0 && textbox_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_2.tStart = t;  // (not accounting for frame time here)
      textbox_2.frameNStart = frameN;  // exact frame index
      
      textbox_2.setAutoDraw(true);
    }

    
    // *button_6* updates
    if (t >= 0.5 && button_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_6.tStart = t;  // (not accounting for frame time here)
      button_6.frameNStart = frameN;  // exact frame index
      
      button_6.setAutoDraw(true);
    }

    if (button_6.status === PsychoJS.Status.STARTED) {
      // check whether button_6 has been pressed
      if (button_6.isClicked) {
        if (!button_6.wasClicked) {
          // store time of first click
          button_6.timesOn.push(button_6.clock.getTime());
          // store time clicked until
          button_6.timesOff.push(button_6.clock.getTime());
        } else {
          // update time clicked until;
          button_6.timesOff[button_6.timesOff.length - 1] = button_6.clock.getTime();
        }
        if (!button_6.wasClicked) {
          // end routine when button_6 is clicked
          continueRoutine = false;
          null;
        }
        // if button_6 is still clicked next frame, it is not a new click
        button_6.wasClicked = true;
      } else {
        // if button_6 is clicked next frame, it is a new click
        button_6.wasClicked = false
      }
    } else {
      // keep clock at 0 if button_6 hasn't started / has finished
      button_6.clock.reset();
      // if button_6 is clicked next frame, it is a new click
      button_6.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Demo_Q1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Demo_Q1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Demo_Q1'-------
    for (const thisComponent of Demo_Q1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('textbox_2.text',textbox_2.text)
    // the Routine "Demo_Q1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Demo_Q2Components;
function Demo_Q2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Demo_Q2'-------
    t = 0;
    Demo_Q2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox_3.setText('Please type here: ');
    // keep track of which components have finished
    Demo_Q2Components = [];
    Demo_Q2Components.push(text_46);
    Demo_Q2Components.push(textbox_3);
    Demo_Q2Components.push(button_7);
    
    for (const thisComponent of Demo_Q2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Demo_Q2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Demo_Q2'-------
    // get current time
    t = Demo_Q2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_46* updates
    if (t >= 0.0 && text_46.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_46.tStart = t;  // (not accounting for frame time here)
      text_46.frameNStart = frameN;  // exact frame index
      
      text_46.setAutoDraw(true);
    }

    
    // *textbox_3* updates
    if (t >= 0.0 && textbox_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_3.tStart = t;  // (not accounting for frame time here)
      textbox_3.frameNStart = frameN;  // exact frame index
      
      textbox_3.setAutoDraw(true);
    }

    
    // *button_7* updates
    if (t >= 0.5 && button_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_7.tStart = t;  // (not accounting for frame time here)
      button_7.frameNStart = frameN;  // exact frame index
      
      button_7.setAutoDraw(true);
    }

    if (button_7.status === PsychoJS.Status.STARTED) {
      // check whether button_7 has been pressed
      if (button_7.isClicked) {
        if (!button_7.wasClicked) {
          // store time of first click
          button_7.timesOn.push(button_7.clock.getTime());
          // store time clicked until
          button_7.timesOff.push(button_7.clock.getTime());
        } else {
          // update time clicked until;
          button_7.timesOff[button_7.timesOff.length - 1] = button_7.clock.getTime();
        }
        if (!button_7.wasClicked) {
          // end routine when button_7 is clicked
          continueRoutine = false;
          null;
        }
        // if button_7 is still clicked next frame, it is not a new click
        button_7.wasClicked = true;
      } else {
        // if button_7 is clicked next frame, it is a new click
        button_7.wasClicked = false
      }
    } else {
      // keep clock at 0 if button_7 hasn't started / has finished
      button_7.clock.reset();
      // if button_7 is clicked next frame, it is a new click
      button_7.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Demo_Q2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Demo_Q2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Demo_Q2'-------
    for (const thisComponent of Demo_Q2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('textbox_3.text',textbox_3.text)
    // the Routine "Demo_Q2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Demo_Q3Components;
function Demo_Q3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Demo_Q3'-------
    t = 0;
    Demo_Q3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox_4.setText('Please type here: ');
    // keep track of which components have finished
    Demo_Q3Components = [];
    Demo_Q3Components.push(text_47);
    Demo_Q3Components.push(textbox_4);
    Demo_Q3Components.push(button_8);
    
    for (const thisComponent of Demo_Q3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Demo_Q3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Demo_Q3'-------
    // get current time
    t = Demo_Q3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_47* updates
    if (t >= 0.0 && text_47.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_47.tStart = t;  // (not accounting for frame time here)
      text_47.frameNStart = frameN;  // exact frame index
      
      text_47.setAutoDraw(true);
    }

    
    // *textbox_4* updates
    if (t >= 0.0 && textbox_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_4.tStart = t;  // (not accounting for frame time here)
      textbox_4.frameNStart = frameN;  // exact frame index
      
      textbox_4.setAutoDraw(true);
    }

    
    // *button_8* updates
    if (t >= 0.5 && button_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_8.tStart = t;  // (not accounting for frame time here)
      button_8.frameNStart = frameN;  // exact frame index
      
      button_8.setAutoDraw(true);
    }

    if (button_8.status === PsychoJS.Status.STARTED) {
      // check whether button_8 has been pressed
      if (button_8.isClicked) {
        if (!button_8.wasClicked) {
          // store time of first click
          button_8.timesOn.push(button_8.clock.getTime());
          // store time clicked until
          button_8.timesOff.push(button_8.clock.getTime());
        } else {
          // update time clicked until;
          button_8.timesOff[button_8.timesOff.length - 1] = button_8.clock.getTime();
        }
        if (!button_8.wasClicked) {
          // end routine when button_8 is clicked
          continueRoutine = false;
          null;
        }
        // if button_8 is still clicked next frame, it is not a new click
        button_8.wasClicked = true;
      } else {
        // if button_8 is clicked next frame, it is a new click
        button_8.wasClicked = false
      }
    } else {
      // keep clock at 0 if button_8 hasn't started / has finished
      button_8.clock.reset();
      // if button_8 is clicked next frame, it is a new click
      button_8.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Demo_Q3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Demo_Q3RoutineEnd() {
  return async function () {
    //------Ending Routine 'Demo_Q3'-------
    for (const thisComponent of Demo_Q3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('textbox_4.text',textbox_4.text)
    // the Routine "Demo_Q3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Demo_Q4Components;
function Demo_Q4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Demo_Q4'-------
    t = 0;
    Demo_Q4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox_5.setText('Please type here: ');
    // keep track of which components have finished
    Demo_Q4Components = [];
    Demo_Q4Components.push(text_48);
    Demo_Q4Components.push(textbox_5);
    Demo_Q4Components.push(button_9);
    
    for (const thisComponent of Demo_Q4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Demo_Q4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Demo_Q4'-------
    // get current time
    t = Demo_Q4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_48* updates
    if (t >= 0.0 && text_48.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_48.tStart = t;  // (not accounting for frame time here)
      text_48.frameNStart = frameN;  // exact frame index
      
      text_48.setAutoDraw(true);
    }

    
    // *textbox_5* updates
    if (t >= 0.0 && textbox_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_5.tStart = t;  // (not accounting for frame time here)
      textbox_5.frameNStart = frameN;  // exact frame index
      
      textbox_5.setAutoDraw(true);
    }

    
    // *button_9* updates
    if (t >= 0.5 && button_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_9.tStart = t;  // (not accounting for frame time here)
      button_9.frameNStart = frameN;  // exact frame index
      
      button_9.setAutoDraw(true);
    }

    if (button_9.status === PsychoJS.Status.STARTED) {
      // check whether button_9 has been pressed
      if (button_9.isClicked) {
        if (!button_9.wasClicked) {
          // store time of first click
          button_9.timesOn.push(button_9.clock.getTime());
          // store time clicked until
          button_9.timesOff.push(button_9.clock.getTime());
        } else {
          // update time clicked until;
          button_9.timesOff[button_9.timesOff.length - 1] = button_9.clock.getTime();
        }
        if (!button_9.wasClicked) {
          // end routine when button_9 is clicked
          continueRoutine = false;
          null;
        }
        // if button_9 is still clicked next frame, it is not a new click
        button_9.wasClicked = true;
      } else {
        // if button_9 is clicked next frame, it is a new click
        button_9.wasClicked = false
      }
    } else {
      // keep clock at 0 if button_9 hasn't started / has finished
      button_9.clock.reset();
      // if button_9 is clicked next frame, it is a new click
      button_9.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Demo_Q4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Demo_Q4RoutineEnd() {
  return async function () {
    //------Ending Routine 'Demo_Q4'-------
    for (const thisComponent of Demo_Q4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('textbox_5.text',textbox_5.text)
    // the Routine "Demo_Q4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Demo_Q5Components;
function Demo_Q5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Demo_Q5'-------
    t = 0;
    Demo_Q5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox_6.setText('Please type here: ');
    // keep track of which components have finished
    Demo_Q5Components = [];
    Demo_Q5Components.push(text_49);
    Demo_Q5Components.push(textbox_6);
    Demo_Q5Components.push(button_10);
    
    for (const thisComponent of Demo_Q5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Demo_Q5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Demo_Q5'-------
    // get current time
    t = Demo_Q5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_49* updates
    if (t >= 0.0 && text_49.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_49.tStart = t;  // (not accounting for frame time here)
      text_49.frameNStart = frameN;  // exact frame index
      
      text_49.setAutoDraw(true);
    }

    
    // *textbox_6* updates
    if (t >= 0.0 && textbox_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_6.tStart = t;  // (not accounting for frame time here)
      textbox_6.frameNStart = frameN;  // exact frame index
      
      textbox_6.setAutoDraw(true);
    }

    
    // *button_10* updates
    if (t >= 0.5 && button_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_10.tStart = t;  // (not accounting for frame time here)
      button_10.frameNStart = frameN;  // exact frame index
      
      button_10.setAutoDraw(true);
    }

    if (button_10.status === PsychoJS.Status.STARTED) {
      // check whether button_10 has been pressed
      if (button_10.isClicked) {
        if (!button_10.wasClicked) {
          // store time of first click
          button_10.timesOn.push(button_10.clock.getTime());
          // store time clicked until
          button_10.timesOff.push(button_10.clock.getTime());
        } else {
          // update time clicked until;
          button_10.timesOff[button_10.timesOff.length - 1] = button_10.clock.getTime();
        }
        if (!button_10.wasClicked) {
          // end routine when button_10 is clicked
          continueRoutine = false;
          null;
        }
        // if button_10 is still clicked next frame, it is not a new click
        button_10.wasClicked = true;
      } else {
        // if button_10 is clicked next frame, it is a new click
        button_10.wasClicked = false
      }
    } else {
      // keep clock at 0 if button_10 hasn't started / has finished
      button_10.clock.reset();
      // if button_10 is clicked next frame, it is a new click
      button_10.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Demo_Q5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Demo_Q5RoutineEnd() {
  return async function () {
    //------Ending Routine 'Demo_Q5'-------
    for (const thisComponent of Demo_Q5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('textbox_6.text',textbox_6.text)
    // the Routine "Demo_Q5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Demo_Q6Components;
function Demo_Q6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Demo_Q6'-------
    t = 0;
    Demo_Q6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox_7.setText('Please type here:');
    // keep track of which components have finished
    Demo_Q6Components = [];
    Demo_Q6Components.push(text_5);
    Demo_Q6Components.push(textbox_7);
    Demo_Q6Components.push(button_12);
    
    for (const thisComponent of Demo_Q6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Demo_Q6RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Demo_Q6'-------
    // get current time
    t = Demo_Q6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *textbox_7* updates
    if (t >= 0.0 && textbox_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_7.tStart = t;  // (not accounting for frame time here)
      textbox_7.frameNStart = frameN;  // exact frame index
      
      textbox_7.setAutoDraw(true);
    }

    
    // *button_12* updates
    if (t >= 0.5 && button_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_12.tStart = t;  // (not accounting for frame time here)
      button_12.frameNStart = frameN;  // exact frame index
      
      button_12.setAutoDraw(true);
    }

    if (button_12.status === PsychoJS.Status.STARTED) {
      // check whether button_12 has been pressed
      if (button_12.isClicked) {
        if (!button_12.wasClicked) {
          // store time of first click
          button_12.timesOn.push(button_12.clock.getTime());
          // store time clicked until
          button_12.timesOff.push(button_12.clock.getTime());
        } else {
          // update time clicked until;
          button_12.timesOff[button_12.timesOff.length - 1] = button_12.clock.getTime();
        }
        if (!button_12.wasClicked) {
          // end routine when button_12 is clicked
          continueRoutine = false;
          null;
        }
        // if button_12 is still clicked next frame, it is not a new click
        button_12.wasClicked = true;
      } else {
        // if button_12 is clicked next frame, it is a new click
        button_12.wasClicked = false
      }
    } else {
      // keep clock at 0 if button_12 hasn't started / has finished
      button_12.clock.reset();
      // if button_12 is clicked next frame, it is a new click
      button_12.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Demo_Q6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Demo_Q6RoutineEnd() {
  return async function () {
    //------Ending Routine 'Demo_Q6'-------
    for (const thisComponent of Demo_Q6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('textbox_7.text',textbox_7.text)
    // the Routine "Demo_Q6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Demo_Q7Components;
function Demo_Q7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Demo_Q7'-------
    t = 0;
    Demo_Q7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox_8.setText('Please type here:');
    // keep track of which components have finished
    Demo_Q7Components = [];
    Demo_Q7Components.push(text_51);
    Demo_Q7Components.push(textbox_8);
    Demo_Q7Components.push(button_13);
    
    for (const thisComponent of Demo_Q7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Demo_Q7RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Demo_Q7'-------
    // get current time
    t = Demo_Q7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_51* updates
    if (t >= 0.0 && text_51.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_51.tStart = t;  // (not accounting for frame time here)
      text_51.frameNStart = frameN;  // exact frame index
      
      text_51.setAutoDraw(true);
    }

    
    // *textbox_8* updates
    if (t >= 0.0 && textbox_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_8.tStart = t;  // (not accounting for frame time here)
      textbox_8.frameNStart = frameN;  // exact frame index
      
      textbox_8.setAutoDraw(true);
    }

    
    // *button_13* updates
    if (t >= 0.5 && button_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_13.tStart = t;  // (not accounting for frame time here)
      button_13.frameNStart = frameN;  // exact frame index
      
      button_13.setAutoDraw(true);
    }

    if (button_13.status === PsychoJS.Status.STARTED) {
      // check whether button_13 has been pressed
      if (button_13.isClicked) {
        if (!button_13.wasClicked) {
          // store time of first click
          button_13.timesOn.push(button_13.clock.getTime());
          // store time clicked until
          button_13.timesOff.push(button_13.clock.getTime());
        } else {
          // update time clicked until;
          button_13.timesOff[button_13.timesOff.length - 1] = button_13.clock.getTime();
        }
        if (!button_13.wasClicked) {
          // end routine when button_13 is clicked
          continueRoutine = false;
          null;
        }
        // if button_13 is still clicked next frame, it is not a new click
        button_13.wasClicked = true;
      } else {
        // if button_13 is clicked next frame, it is a new click
        button_13.wasClicked = false
      }
    } else {
      // keep clock at 0 if button_13 hasn't started / has finished
      button_13.clock.reset();
      // if button_13 is clicked next frame, it is a new click
      button_13.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Demo_Q7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Demo_Q7RoutineEnd() {
  return async function () {
    //------Ending Routine 'Demo_Q7'-------
    for (const thisComponent of Demo_Q7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('textbox_8.text',textbox_8.text)
    // the Routine "Demo_Q7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Demo_Q8Components;
function Demo_Q8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Demo_Q8'-------
    t = 0;
    Demo_Q8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox_9.setText('Please type here:');
    // keep track of which components have finished
    Demo_Q8Components = [];
    Demo_Q8Components.push(text_52);
    Demo_Q8Components.push(textbox_9);
    Demo_Q8Components.push(button_14);
    
    for (const thisComponent of Demo_Q8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Demo_Q8RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Demo_Q8'-------
    // get current time
    t = Demo_Q8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_52* updates
    if (t >= 0.0 && text_52.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_52.tStart = t;  // (not accounting for frame time here)
      text_52.frameNStart = frameN;  // exact frame index
      
      text_52.setAutoDraw(true);
    }

    
    // *textbox_9* updates
    if (t >= 0.0 && textbox_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_9.tStart = t;  // (not accounting for frame time here)
      textbox_9.frameNStart = frameN;  // exact frame index
      
      textbox_9.setAutoDraw(true);
    }

    
    // *button_14* updates
    if (t >= 0.5 && button_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_14.tStart = t;  // (not accounting for frame time here)
      button_14.frameNStart = frameN;  // exact frame index
      
      button_14.setAutoDraw(true);
    }

    if (button_14.status === PsychoJS.Status.STARTED) {
      // check whether button_14 has been pressed
      if (button_14.isClicked) {
        if (!button_14.wasClicked) {
          // store time of first click
          button_14.timesOn.push(button_14.clock.getTime());
          // store time clicked until
          button_14.timesOff.push(button_14.clock.getTime());
        } else {
          // update time clicked until;
          button_14.timesOff[button_14.timesOff.length - 1] = button_14.clock.getTime();
        }
        if (!button_14.wasClicked) {
          // end routine when button_14 is clicked
          continueRoutine = false;
          null;
        }
        // if button_14 is still clicked next frame, it is not a new click
        button_14.wasClicked = true;
      } else {
        // if button_14 is clicked next frame, it is a new click
        button_14.wasClicked = false
      }
    } else {
      // keep clock at 0 if button_14 hasn't started / has finished
      button_14.clock.reset();
      // if button_14 is clicked next frame, it is a new click
      button_14.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Demo_Q8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Demo_Q8RoutineEnd() {
  return async function () {
    //------Ending Routine 'Demo_Q8'-------
    for (const thisComponent of Demo_Q8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('textbox_9.text',textbox_9.text)
    // the Routine "Demo_Q8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Demo_Q10Components;
function Demo_Q10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Demo_Q10'-------
    t = 0;
    Demo_Q10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox_11.setText('Please type here:');
    // keep track of which components have finished
    Demo_Q10Components = [];
    Demo_Q10Components.push(text_54);
    Demo_Q10Components.push(textbox_11);
    Demo_Q10Components.push(button_16);
    
    for (const thisComponent of Demo_Q10Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Demo_Q10RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Demo_Q10'-------
    // get current time
    t = Demo_Q10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_54* updates
    if (t >= 0.0 && text_54.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_54.tStart = t;  // (not accounting for frame time here)
      text_54.frameNStart = frameN;  // exact frame index
      
      text_54.setAutoDraw(true);
    }

    
    // *textbox_11* updates
    if (t >= 0.0 && textbox_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_11.tStart = t;  // (not accounting for frame time here)
      textbox_11.frameNStart = frameN;  // exact frame index
      
      textbox_11.setAutoDraw(true);
    }

    
    // *button_16* updates
    if (t >= 0.5 && button_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_16.tStart = t;  // (not accounting for frame time here)
      button_16.frameNStart = frameN;  // exact frame index
      
      button_16.setAutoDraw(true);
    }

    if (button_16.status === PsychoJS.Status.STARTED) {
      // check whether button_16 has been pressed
      if (button_16.isClicked) {
        if (!button_16.wasClicked) {
          // store time of first click
          button_16.timesOn.push(button_16.clock.getTime());
          // store time clicked until
          button_16.timesOff.push(button_16.clock.getTime());
        } else {
          // update time clicked until;
          button_16.timesOff[button_16.timesOff.length - 1] = button_16.clock.getTime();
        }
        if (!button_16.wasClicked) {
          // end routine when button_16 is clicked
          continueRoutine = false;
          null;
        }
        // if button_16 is still clicked next frame, it is not a new click
        button_16.wasClicked = true;
      } else {
        // if button_16 is clicked next frame, it is a new click
        button_16.wasClicked = false
      }
    } else {
      // keep clock at 0 if button_16 hasn't started / has finished
      button_16.clock.reset();
      // if button_16 is clicked next frame, it is a new click
      button_16.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Demo_Q10Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Demo_Q10RoutineEnd() {
  return async function () {
    //------Ending Routine 'Demo_Q10'-------
    for (const thisComponent of Demo_Q10Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('textbox_11.text',textbox_11.text)
    // the Routine "Demo_Q10" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Demo_Q11Components;
function Demo_Q11RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Demo_Q11'-------
    t = 0;
    Demo_Q11Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox_12.setText('Please type here:');
    // keep track of which components have finished
    Demo_Q11Components = [];
    Demo_Q11Components.push(text_55);
    Demo_Q11Components.push(textbox_12);
    Demo_Q11Components.push(button_17);
    
    for (const thisComponent of Demo_Q11Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Demo_Q11RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Demo_Q11'-------
    // get current time
    t = Demo_Q11Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_55* updates
    if (t >= 0.0 && text_55.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_55.tStart = t;  // (not accounting for frame time here)
      text_55.frameNStart = frameN;  // exact frame index
      
      text_55.setAutoDraw(true);
    }

    
    // *textbox_12* updates
    if (t >= 0.0 && textbox_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_12.tStart = t;  // (not accounting for frame time here)
      textbox_12.frameNStart = frameN;  // exact frame index
      
      textbox_12.setAutoDraw(true);
    }

    
    // *button_17* updates
    if (t >= 0.5 && button_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_17.tStart = t;  // (not accounting for frame time here)
      button_17.frameNStart = frameN;  // exact frame index
      
      button_17.setAutoDraw(true);
    }

    if (button_17.status === PsychoJS.Status.STARTED) {
      // check whether button_17 has been pressed
      if (button_17.isClicked) {
        if (!button_17.wasClicked) {
          // store time of first click
          button_17.timesOn.push(button_17.clock.getTime());
          // store time clicked until
          button_17.timesOff.push(button_17.clock.getTime());
        } else {
          // update time clicked until;
          button_17.timesOff[button_17.timesOff.length - 1] = button_17.clock.getTime();
        }
        if (!button_17.wasClicked) {
          // end routine when button_17 is clicked
          continueRoutine = false;
          null;
        }
        // if button_17 is still clicked next frame, it is not a new click
        button_17.wasClicked = true;
      } else {
        // if button_17 is clicked next frame, it is a new click
        button_17.wasClicked = false
      }
    } else {
      // keep clock at 0 if button_17 hasn't started / has finished
      button_17.clock.reset();
      // if button_17 is clicked next frame, it is a new click
      button_17.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Demo_Q11Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Demo_Q11RoutineEnd() {
  return async function () {
    //------Ending Routine 'Demo_Q11'-------
    for (const thisComponent of Demo_Q11Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('textbox_12.text',textbox_12.text)
    // the Routine "Demo_Q11" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Demo_Q12Components;
function Demo_Q12RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Demo_Q12'-------
    t = 0;
    Demo_Q12Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox.setText('');
    // keep track of which components have finished
    Demo_Q12Components = [];
    Demo_Q12Components.push(text_44);
    Demo_Q12Components.push(textbox);
    Demo_Q12Components.push(button_5);
    
    for (const thisComponent of Demo_Q12Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Demo_Q12RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Demo_Q12'-------
    // get current time
    t = Demo_Q12Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_44* updates
    if (t >= 0.0 && text_44.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_44.tStart = t;  // (not accounting for frame time here)
      text_44.frameNStart = frameN;  // exact frame index
      
      text_44.setAutoDraw(true);
    }

    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }

    
    // *button_5* updates
    if (t >= 0.5 && button_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_5.tStart = t;  // (not accounting for frame time here)
      button_5.frameNStart = frameN;  // exact frame index
      
      button_5.setAutoDraw(true);
    }

    if (button_5.status === PsychoJS.Status.STARTED) {
      // check whether button_5 has been pressed
      if (button_5.isClicked) {
        if (!button_5.wasClicked) {
          // store time of first click
          button_5.timesOn.push(button_5.clock.getTime());
          // store time clicked until
          button_5.timesOff.push(button_5.clock.getTime());
        } else {
          // update time clicked until;
          button_5.timesOff[button_5.timesOff.length - 1] = button_5.clock.getTime();
        }
        if (!button_5.wasClicked) {
          // end routine when button_5 is clicked
          continueRoutine = false;
          null;
        }
        // if button_5 is still clicked next frame, it is not a new click
        button_5.wasClicked = true;
      } else {
        // if button_5 is clicked next frame, it is a new click
        button_5.wasClicked = false
      }
    } else {
      // keep clock at 0 if button_5 hasn't started / has finished
      button_5.clock.reset();
      // if button_5 is clicked next frame, it is a new click
      button_5.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Demo_Q12Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Demo_Q12RoutineEnd() {
  return async function () {
    //------Ending Routine 'Demo_Q12'-------
    for (const thisComponent of Demo_Q12Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('textbox.text',textbox.text)
    // the Routine "Demo_Q12" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var FeedbackComponents;
function FeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Feedback'-------
    t = 0;
    FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox_13.setText('Please type here');
    // keep track of which components have finished
    FeedbackComponents = [];
    FeedbackComponents.push(text_57);
    FeedbackComponents.push(textbox_13);
    FeedbackComponents.push(button_11);
    
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FeedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Feedback'-------
    // get current time
    t = FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_57* updates
    if (t >= 0.0 && text_57.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_57.tStart = t;  // (not accounting for frame time here)
      text_57.frameNStart = frameN;  // exact frame index
      
      text_57.setAutoDraw(true);
    }

    
    // *textbox_13* updates
    if (t >= 0.0 && textbox_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_13.tStart = t;  // (not accounting for frame time here)
      textbox_13.frameNStart = frameN;  // exact frame index
      
      textbox_13.setAutoDraw(true);
    }

    
    // *button_11* updates
    if (t >= 0.5 && button_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_11.tStart = t;  // (not accounting for frame time here)
      button_11.frameNStart = frameN;  // exact frame index
      
      button_11.setAutoDraw(true);
    }

    if (button_11.status === PsychoJS.Status.STARTED) {
      // check whether button_11 has been pressed
      if (button_11.isClicked) {
        if (!button_11.wasClicked) {
          // store time of first click
          button_11.timesOn.push(button_11.clock.getTime());
          // store time clicked until
          button_11.timesOff.push(button_11.clock.getTime());
        } else {
          // update time clicked until;
          button_11.timesOff[button_11.timesOff.length - 1] = button_11.clock.getTime();
        }
        if (!button_11.wasClicked) {
          // end routine when button_11 is clicked
          continueRoutine = false;
          null;
        }
        // if button_11 is still clicked next frame, it is not a new click
        button_11.wasClicked = true;
      } else {
        // if button_11 is clicked next frame, it is a new click
        button_11.wasClicked = false
      }
    } else {
      // keep clock at 0 if button_11 hasn't started / has finished
      button_11.clock.reset();
      // if button_11 is clicked next frame, it is a new click
      button_11.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FeedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'Feedback'-------
    for (const thisComponent of FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('textbox_13.text',textbox_13.text)
    // the Routine "Feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ThanksComponents;
function ThanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Thanks'-------
    t = 0;
    ThanksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    ThanksComponents = [];
    ThanksComponents.push(text_9);
    ThanksComponents.push(Exit_button);
    
    for (const thisComponent of ThanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ThanksRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Thanks'-------
    // get current time
    t = ThanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }

    
    // *Exit_button* updates
    if (t >= 0 && Exit_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Exit_button.tStart = t;  // (not accounting for frame time here)
      Exit_button.frameNStart = frameN;  // exact frame index
      
      Exit_button.setAutoDraw(true);
    }

    if (Exit_button.status === PsychoJS.Status.STARTED) {
      // check whether Exit_button has been pressed
      if (Exit_button.isClicked) {
        if (!Exit_button.wasClicked) {
          // store time of first click
          Exit_button.timesOn.push(Exit_button.clock.getTime());
          // store time clicked until
          Exit_button.timesOff.push(Exit_button.clock.getTime());
        } else {
          // update time clicked until;
          Exit_button.timesOff[Exit_button.timesOff.length - 1] = Exit_button.clock.getTime();
        }
        if (!Exit_button.wasClicked) {
          // end routine when Exit_button is clicked
          continueRoutine = false;
          null;
        }
        // if Exit_button is still clicked next frame, it is not a new click
        Exit_button.wasClicked = true;
      } else {
        // if Exit_button is clicked next frame, it is a new click
        Exit_button.wasClicked = false
      }
    } else {
      // keep clock at 0 if Exit_button hasn't started / has finished
      Exit_button.clock.reset();
      // if Exit_button is clicked next frame, it is a new click
      Exit_button.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ThanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ThanksRoutineEnd() {
  return async function () {
    //------Ending Routine 'Thanks'-------
    for (const thisComponent of ThanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Thanks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
