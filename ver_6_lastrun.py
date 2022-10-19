#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on 七月 01, 2022, at 15:19
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'mouseWheel'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='E:\\Graduate\\Grad School\\THESIS\\Experiments\\Ver_6\\ver_6_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=(1024, 768), fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Welcome"
WelcomeClock = core.Clock()
RTD = 0
RTR = 0

if len(expInfo['participant']) % 2 == 0:
    # read-to-recall
    RTR = 1
else:
    # read-to-do
    RTD = 1
    
API_rep = 1
    
comment1 = "Please type here"
comment2 = "Please type here"
comment3 = "Please type here"
comment4 = "Please type here"
comment5 = "Please type here"
key_resp_31 = keyboard.Keyboard()
text_50 = visual.TextStim(win=win, name='text_50',
    text='Welcome! \n\nBefore the experiment begins, we will inform you what we will\nbe doing in this experiment. If you agree and understand our\npurpose, appreciated. \n\nPlease stay in FULL-SCREEN during the full experiment setting.\n(if you are not in full screen, press F11)\n\nPress Spacebar to Continue.\n',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "Informed_Consent_1"
Informed_Consent_1Clock = core.Clock()
Informed_box_1 = visual.TextBox2(
     win, text='1. What is this experiment about?\n\nYou are invited to take part in a study concerning the \nunderstanding of concurrent programming. You will be asked\nto read and comment some concurrent Java code first, and \nthen answer some questions concerning some features in this\ncode. You will not be asked questions that identify who you\nare.\n\nPress Spacebar to Continue.\n    \n', font='Open Sans',
     pos=(0, 0),     letterHeight=0.03,
     size=(1, 0.7), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=False,
     name='Informed_box_1',
     autoLog=False,
)
key_resp_41 = keyboard.Keyboard()

# Initialize components for Routine "Informed_Consent_2"
Informed_Consent_2Clock = core.Clock()
Informed_box_2 = visual.TextBox2(
     win, text='2. Who is doing it?\n\nThe study is being conducted by Zhangliang Ma, MCS \nCandidate, under the supervision of Eric Aubanel, Professor in\nthe Faculty of Computer Science, at the University of New \nBrunswick.\n\nPress Spacebar to Continue.\n    \n', font='Open Sans',
     pos=(0, 0),     letterHeight=0.03,
     size=(1, 0.7), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=False,
     name='Informed_box_2',
     autoLog=False,
)
key_resp_42 = keyboard.Keyboard()

# Initialize components for Routine "Informed_Consent_3"
Informed_Consent_3Clock = core.Clock()
Informed_box_3 = visual.TextBox2(
     win, text='3. What will I have to do?\n\nIf you choose to participate, you will read a piece of\nconcurrent code consisting of multiple Java classes. \nDuring the reading, we expect you to make some comments. \n\nAfter reading the code, we will provide you a questionnaire \nconcerning the features of the code. \n\nAt the end, you will answer some questions about your age,\neducation level, self-assessment, and years of experience in\njava concurrent programming. \n\nThe duration of this study is 30 min or less. It is required that \nyou finish the experiment in one sitting. \n\nPress Spacebar to Continue.\n    ', font='Open Sans',
     pos=(0, 0),     letterHeight=0.03,
     size=(1, 0.7), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=False,
     name='Informed_box_3',
     autoLog=False,
)
key_resp_43 = keyboard.Keyboard()

# Initialize components for Routine "Informed_consent_4"
Informed_consent_4Clock = core.Clock()
Informed_box_4 = visual.TextBox2(
     win, text='4. What will I get for participating?\n\nIn this experiment, we offer you a choice that you can enter\nyour email address so we can gift you a 10 CAD e-gift card. \nHowever, the availability of the gift cards is dependent on \nthe different regions of the world. \n\nIn addition, we will not disclose your email address, or use \nit for any other purposes. \n\nPress Spacebar to Continue.\n    ', font='Open Sans',
     pos=(0, 0),     letterHeight=0.03,
     size=(1, 0.7), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=False,
     name='Informed_box_4',
     autoLog=False,
)
key_resp_44 = keyboard.Keyboard()

# Initialize components for Routine "Informed_Consent_5"
Informed_Consent_5Clock = core.Clock()
Informed_box_5 = visual.TextBox2(
     win, text='5. Why should I participate?\n\nBy participating in this experiment, you can give us \nimportant information that will help us understand the \nmental models of concurrent programming.\n\nPress Spacebar to Continue.\n    ', font='Open Sans',
     pos=(0, 0),     letterHeight=0.03,
     size=(1, 0.7), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=False,
     name='Informed_box_5',
     autoLog=False,
)
key_resp_45 = keyboard.Keyboard()

# Initialize components for Routine "Informed_Consent_6"
Informed_Consent_6Clock = core.Clock()
Informed_box_6 = visual.TextBox2(
     win, text='6. How is this safe for me to do? How do you keep my \nanswers private and confidential?\n\nThe demographic questions, experiment, and the data \nare stored on pavlovia.org, which is a secured domain \nprotected by the HTTPs protocol. This means only the \ndesigner who owns this experiment can have access to \nthe data. \n\nThe data will be summarized and processed in reports, \nwithout the disclosure of the original data. You can always \nstay anonymous during the whole sitting of the experiment. \n\nPress Spacebar to Continue.', font='Open Sans',
     pos=(0, 0),     letterHeight=0.03,
     size=(1, 0.7), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=False,
     name='Informed_box_6',
     autoLog=False,
)
key_resp_46 = keyboard.Keyboard()

# Initialize components for Routine "Informed_Consent_7"
Informed_Consent_7Clock = core.Clock()
Informed_box_7 = visual.TextBox2(
     win, text='7. What are my rights as a participant in this survey?\n\nParticipation in this study is completely voluntary. If at \nany moment you feel you do not want to continue for \nany reason, you are free to leave without penalty. \n\nThe researchers can only use your data after you click \nfinish at the end of the survey. The result of the concurrent \nprogramming questions will not be scored. \n\nPress Spacebar to Continue.\n', font='Open Sans',
     pos=(0, 0),     letterHeight=0.03,
     size=(1, 0.7), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=False,
     name='Informed_box_7',
     autoLog=False,
)
key_resp_47 = keyboard.Keyboard()

# Initialize components for Routine "Informed_consent_8"
Informed_consent_8Clock = core.Clock()
Informed_box_8 = visual.TextBox2(
     win, text='8. Why might I not want to do it?\n\nSome of the questions may make you feel disappointed if \nyou are not comfortable with concurrent programming. \nWe do not expect that you will feel negative during \nthe study. If you are worried about this during the experiment,\nfeel free to leave by pressing the ESC. \n\nThis project is on file with the Research Ethics Board, \nUniversity of New Brunswick. If you have any questions or \nconcern about your rights or treatment regarding this\nexperiment, you may contact this email address:\nzma7@unb.ca\n\nPress Spacebar to Continue.\n    ', font='Open Sans',
     pos=(0, 0),     letterHeight=0.03,
     size=(1, 0.7), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=False,
     name='Informed_box_8',
     autoLog=False,
)
key_resp_48 = keyboard.Keyboard()

# Initialize components for Routine "Informed_Question_1"
Informed_Question_1Clock = core.Clock()
Informed_Q1 = visual.TextBox2(
     win, text='I confirm that I am over 19 years old. \n\n(Press Y if you agree, ESC to quit the experiment)', font='Open Sans',
     pos=(0, 0),     letterHeight=0.03,
     size=(1, 0.5), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=False,
     name='Informed_Q1',
     autoLog=False,
)
Informed_key1 = keyboard.Keyboard()

# Initialize components for Routine "Informed_Question_2"
Informed_Question_2Clock = core.Clock()
Informed_Q2 = visual.TextBox2(
     win, text='I have read and understood the information and \nconsent to participate in this experiment. \n\n(Press Y if you agree, ESC to quit the experiment)', font='Open Sans',
     pos=(0, 0),     letterHeight=0.03,
     size=(1, 0.5), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=False,
     name='Informed_Q2',
     autoLog=False,
)
Informed_key2 = keyboard.Keyboard()

# Initialize components for Routine "Informed_Question_3"
Informed_Question_3Clock = core.Clock()
Informed_Q3 = visual.TextBox2(
     win, text='I consent to the use of my email address to obtain a gift card, \nif I so choose\n\n(Press Y if you agree, ESC to quit the experiment)', font='Open Sans',
     pos=(0, 0),     letterHeight=0.03,
     size=(1, 0.5), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=False,
     name='Informed_Q3',
     autoLog=False,
)
Informed_Key3 = keyboard.Keyboard()

# Initialize components for Routine "Comprehension_Recall"
Comprehension_RecallClock = core.Clock()
key_resp_50 = keyboard.Keyboard()
textbox_14 = visual.TextBox2(
     win, text='In this section, we welcome you to look at a piece of\ncode with concurrency written in java. This code piece is\ndesigned for teaching java concurrency. \n\n============================================\n\nThe time for this task is 15 min, and the remaining time will \nbe displayed at the upper left corner. After this task, we will\nask some questions about the code features.\n\nDuring this phase, you can scroll the code pieces to see\nthe rest of the code. \n\nA textbox is provided and your task is to describe how this \nprogram runs with your own language. \n\nIf you finish the task before the\nlimited time, feel free to click the "next phase" button to end\nearly. \n\nPress SpaceBar to begin.   \n', font='Open Sans',
     pos=(0, 0),     letterHeight=0.03,
     size=(1, 0.95), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgrey', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=False,
     name='textbox_14',
     autoLog=True,
)

# Initialize components for Routine "Comprehension_Do"
Comprehension_DoClock = core.Clock()
key_resp_51 = keyboard.Keyboard()
textbox_15 = visual.TextBox2(
     win, text='In this section, we welcome you to look at a piece of\ncode with concurrency written in java. This code piece is\ndesigned for teaching java concurrency. \n\n============================================\n\nThe time for this task is 15 mins and the remaining time will \nbe displayed at the upper left corner. After this task, we will\nask some questions about the code features.\n\n\nDuring this phase, you can scroll the code pieces to see\nthe rest of the code. \n\nYour task is to describe if there exist any concurrent bug in \nthe code in the given textbox. Type N/A if there is no such bug. \n\nIf you finish the task before the\nlimited time, feel free to click the "next phase" button to end\nearly. \n\nPress SpaceBar to begin.   \n', font='Open Sans',
     pos=(0, 0),     letterHeight=0.03,
     size=(1, 0.95), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=False,
     name='textbox_15',
     autoLog=True,
)

# Initialize components for Routine "Book_Recall"
Book_RecallClock = core.Clock()
mouse_6 = event.Mouse(win=win)
x, y = [None, None]
mouse_6.mouseClock = core.Clock()
img6 = visual.ImageStim(
    win=win,
    name='img6', 
    image='Business_code_img_croped.png', mask=None,
    ori=0.0, pos=(0.3, -0.8), size=(1.0, 2.536),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
next_phase_12 = visual.ButtonStim(win, 
    text='Next Phase', font='Arvo',
    pos=(-0.7, 0.25),
    letterHeight=0.03,
    size=(0.3, 0.1), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='next_phase_12'
)
next_phase_12.buttonClock = core.Clock()
Clock_6 = visual.TextStim(win=win, name='Clock_6',
    text='',
    font='Open Sans',
    pos=(-0.7, 0.35), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
info_6 = visual.TextStim(win=win, name='info_6',
    text='Remaining Time:',
    font='Open Sans',
    pos=(-0.7, 0.4), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
C_1 = visual.TextStim(win=win, name='C_1',
    text='Describe the program below:\n(with your own language)',
    font='Open Sans',
    pos=(-0.65, 0.1), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
recall_box = visual.TextBox2(
     win, text='', font='Open Sans',
     pos=(-0.55, -0.22),     letterHeight=0.03,
     size=(0.6, 0.5), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=1.0,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=None,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=True,
     name='recall_box',
     autoLog=True,
)

# Initialize components for Routine "Book_Do"
Book_DoClock = core.Clock()
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()
image = visual.ImageStim(
    win=win,
    name='image', 
    image='Business_code_img_croped.png', mask=None,
    ori=0.0, pos=(0.3, -0.8), size=(1.0, 2.536),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
next_phase_0 = visual.ButtonStim(win, 
    text='Next Phase', font='Arvo',
    pos=(-0.7, 0.25),
    letterHeight=0.03,
    size=(0.3, 0.1), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='next_phase_0'
)
next_phase_0.buttonClock = core.Clock()
Clock_1 = visual.TextStim(win=win, name='Clock_1',
    text='',
    font='Open Sans',
    pos=(-0.7, 0.35), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
Info1 = visual.TextStim(win=win, name='Info1',
    text='Remaining Time:',
    font='Open Sans',
    pos=(-0.7, 0.4), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
C_2 = visual.TextStim(win=win, name='C_2',
    text='Please describe \nconcurrency bugs \nbelow (N/A if none):',
    font='Open Sans',
    pos=(-0.7, 0.1), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-6.0);
do_box = visual.TextBox2(
     win, text=comment2, font='Open Sans',
     pos=(-0.55, -0.22),     letterHeight=0.03,
     size=(0.6,0.5), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=True,
     name='do_box',
     autoLog=True,
)

# Initialize components for Routine "Questionnaire_phase_introduction"
Questionnaire_phase_introductionClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='In this section, you will be asked to answer some Yes/No questions \nconcerning the code you read just now by pressing "Y" and "N" \nkeys on the keyboard. The questions will not forward until the keys\nare pressed. \n\nPress Spacebar to Continue.',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_49 = keyboard.Keyboard()

# Initialize components for Routine "Q1"
Q1Clock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='Does the program define the “Account” class?\n\n(Y/N)\n',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp = keyboard.Keyboard()

# Initialize components for Routine "Q2"
Q2Clock = core.Clock()
text_3 = visual.TextStim(win=win, name='text_3',
    text='Does the program define the “Money” class? \n\n(Y/N)',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "Q3"
Q3Clock = core.Clock()
text_4 = visual.TextStim(win=win, name='text_4',
    text='Does the program define the “Employer” class?\n\n(Y/N)',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_3 = keyboard.Keyboard()

# Initialize components for Routine "Q4"
Q4Clock = core.Clock()
text_6 = visual.TextStim(win=win, name='text_6',
    text='Does the program define the “Employee” class?\n\n(Y/N)',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_4 = keyboard.Keyboard()

# Initialize components for Routine "Q5"
Q5Clock = core.Clock()
text_7 = visual.TextStim(win=win, name='text_7',
    text='Is the field “amount” represented by a floating point number?\n\n(Y/N)',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_5 = keyboard.Keyboard()

# Initialize components for Routine "Q6"
Q6Clock = core.Clock()
text_8 = visual.TextStim(win=win, name='text_8',
    text='Does Account::takeMoney() check if the field “amount” is below 0?\n\n(Y/N)',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_6 = keyboard.Keyboard()

# Initialize components for Routine "Q7"
Q7Clock = core.Clock()
text_10 = visual.TextStim(win=win, name='text_10',
    text='Will Account::addMoney() notify someone if it has successfully\nreceived the amount? \n\n(Y/N)',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_7 = keyboard.Keyboard()

# Initialize components for Routine "Q8"
Q8Clock = core.Clock()
text_11 = visual.TextStim(win=win, name='text_11',
    text='Is the method “takeMoney()” part of the “Employee” class?\n\n(Y/N)',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_8 = keyboard.Keyboard()

# Initialize components for Routine "Q9"
Q9Clock = core.Clock()
text_12 = visual.TextStim(win=win, name='text_12',
    text='Is the field “amount” shared to either “Employer” or “Employee”? \n\n(Y/N)',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_9 = keyboard.Keyboard()

# Initialize components for Routine "Q10"
Q10Clock = core.Clock()
text_13 = visual.TextStim(win=win, name='text_13',
    text='Will the field “amount” always stay above 0?\n\n(Y/N)',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_10 = keyboard.Keyboard()

# Initialize components for Routine "Q11"
Q11Clock = core.Clock()
text_14 = visual.TextStim(win=win, name='text_14',
    text='Does the Employee add his/her money taken from the Employer’s \naccount into another account not accessible to the Employer?\n\n(Y/N)',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_11 = keyboard.Keyboard()

# Initialize components for Routine "Q12"
Q12Clock = core.Clock()
text_15 = visual.TextStim(win=win, name='text_15',
    text='Are both methods of the “Account” class thread safe?\n\n(Y/N)',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_12 = keyboard.Keyboard()

# Initialize components for Routine "Q13"
Q13Clock = core.Clock()
text_16 = visual.TextStim(win=win, name='text_16',
    text='When two threads launched with the “Employee” taking away the \nmoney at the same time, will both of the actions be registered, \nresulting a total withdraw value of 20?\n\n(Y/N)',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_13 = keyboard.Keyboard()

# Initialize components for Routine "Q14"
Q14Clock = core.Clock()
text_17 = visual.TextStim(win=win, name='text_17',
    text='Does the Employee have to wait for the Employer to add money at any moment? \n\n(Y/N)',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_14 = keyboard.Keyboard()

# Initialize components for Routine "Q15"
Q15Clock = core.Clock()
text_18 = visual.TextStim(win=win, name='text_18',
    text='Can the Employer add money into the account if the Employee has \nnot finished taking away money? \n\n(Y/N)',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_15 = keyboard.Keyboard()

# Initialize components for Routine "Q16"
Q16Clock = core.Clock()
text_19 = visual.TextStim(win=win, name='text_19',
    text='Is “80” the amount remaining after all the threads have finished \ntheir tasks? \n\n(Y/N)',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_16 = keyboard.Keyboard()

# Initialize components for Routine "Demo_intro"
Demo_introClock = core.Clock()
Demo_Introduction = visual.TextStim(win=win, name='Demo_Introduction',
    text='Thanks for your participation! We will collect some information about\nyourself and the possible ways to give you the gift card!\n\nPress SpaceBar to continue',
    font='Open Sans',
    pos=(0, 0), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_resp_52 = keyboard.Keyboard()

# Initialize components for Routine "Demo_Q1"
Demo_Q1Clock = core.Clock()
text_45 = visual.TextStim(win=win, name='text_45',
    text='Age (in number of years):',
    font='Open Sans',
    pos=(0, 0.15), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
textbox_2 = visual.TextBox2(
     win, text='Please type here: ', font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(1, 0.15), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=True,
     name='textbox_2',
     autoLog=True,
)
button_6 = visual.ButtonStim(win, 
    text='Next', font='Arvo',
    pos=(0.7, 0.0),
    letterHeight=0.03,
    size=(0.3, 0.1), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='button_6'
)
button_6.buttonClock = core.Clock()

# Initialize components for Routine "Demo_Q2"
Demo_Q2Clock = core.Clock()
text_46 = visual.TextStim(win=win, name='text_46',
    text='Are you currently a student (Yes or No)',
    font='Open Sans',
    pos=(0, 0.15), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
textbox_3 = visual.TextBox2(
     win, text='Please type here: ', font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(1, 0.15), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=True,
     name='textbox_3',
     autoLog=True,
)
button_7 = visual.ButtonStim(win, 
    text='Next', font='Arvo',
    pos=(0.7, 0),
    letterHeight=0.03,
    size=(0.3, 0.1), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='button_7'
)
button_7.buttonClock = core.Clock()

# Initialize components for Routine "Demo_Q3"
Demo_Q3Clock = core.Clock()
text_47 = visual.TextStim(win=win, name='text_47',
    text='Number of programming courses finished: ',
    font='Open Sans',
    pos=(0, 0.15), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
textbox_4 = visual.TextBox2(
     win, text='Please type here: ', font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(1, 0.15), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=True,
     name='textbox_4',
     autoLog=True,
)
button_8 = visual.ButtonStim(win, 
    text='Next', font='Arvo',
    pos=(0.7, 0),
    letterHeight=0.03,
    size=(0.3, 0.1), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='button_8'
)
button_8.buttonClock = core.Clock()

# Initialize components for Routine "Demo_Q4"
Demo_Q4Clock = core.Clock()
text_48 = visual.TextStim(win=win, name='text_48',
    text='Number of CONCURRENT programming courses finished: ',
    font='Open Sans',
    pos=(0, 0.15), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
textbox_5 = visual.TextBox2(
     win, text='Please type here: ', font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(1, 0.15), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=True,
     name='textbox_5',
     autoLog=True,
)
button_9 = visual.ButtonStim(win, 
    text='Next', font='Arvo',
    pos=(0.7, 0),
    letterHeight=0.03,
    size=(0.3, 0.1), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='button_9'
)
button_9.buttonClock = core.Clock()

# Initialize components for Routine "Demo_Q5"
Demo_Q5Clock = core.Clock()
text_49 = visual.TextStim(win=win, name='text_49',
    text='Highest level of education achieved: ',
    font='Open Sans',
    pos=(0, 0.15), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
textbox_6 = visual.TextBox2(
     win, text='Please type here: ', font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(1, 0.15), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=True,
     name='textbox_6',
     autoLog=True,
)
button_10 = visual.ButtonStim(win, 
    text='Next', font='Arvo',
    pos=(0.7, 0),
    letterHeight=0.03,
    size=(0.3, 0.1), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='button_10'
)
button_10.buttonClock = core.Clock()

# Initialize components for Routine "Demo_Q6"
Demo_Q6Clock = core.Clock()
text_5 = visual.TextStim(win=win, name='text_5',
    text='Number of years since you first come to know Java:',
    font='Open Sans',
    pos=(0, 0.15), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
textbox_7 = visual.TextBox2(
     win, text='Please type here:', font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(1, 0.15), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=True,
     name='textbox_7',
     autoLog=True,
)
button_12 = visual.ButtonStim(win, 
    text='Next', font='Arvo',
    pos=(0.7, 0),
    letterHeight=0.03,
    size=(0.3, 0.1), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='button_12'
)
button_12.buttonClock = core.Clock()

# Initialize components for Routine "Demo_Q7"
Demo_Q7Clock = core.Clock()
text_51 = visual.TextStim(win=win, name='text_51',
    text='Number of years of programming experience in Java:',
    font='Open Sans',
    pos=(0, 0.15), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
textbox_8 = visual.TextBox2(
     win, text='Please type here:', font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(1, 0.15), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=True,
     name='textbox_8',
     autoLog=True,
)
button_13 = visual.ButtonStim(win, 
    text='Next', font='Arvo',
    pos=(0.7, 0),
    letterHeight=0.03,
    size=(0.3, 0.1), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='button_13'
)
button_13.buttonClock = core.Clock()

# Initialize components for Routine "Demo_Q8"
Demo_Q8Clock = core.Clock()
text_52 = visual.TextStim(win=win, name='text_52',
    text='Number of years of experience in concurrent programming:',
    font='Open Sans',
    pos=(0, 0.15), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
textbox_9 = visual.TextBox2(
     win, text='Please type here:', font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(1, 0.15), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=True,
     name='textbox_9',
     autoLog=True,
)
button_14 = visual.ButtonStim(win, 
    text='Next', font='Arvo',
    pos=(0.7, 0),
    letterHeight=0.03,
    size=(0.3, 0.1), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='button_14'
)
button_14.buttonClock = core.Clock()

# Initialize components for Routine "Demo_Q10"
Demo_Q10Clock = core.Clock()
text_54 = visual.TextStim(win=win, name='text_54',
    text='Rate your level of expertise in Java concurrency, between 0 and 100\n(0 = total lack of knowledge; 100 = total expert)',
    font='Open Sans',
    pos=(0, 0.15), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
textbox_11 = visual.TextBox2(
     win, text='Please type here:', font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(1, 0.15), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=True,
     name='textbox_11',
     autoLog=True,
)
button_16 = visual.ButtonStim(win, 
    text='Next', font='Arvo',
    pos=(0.7, 0),
    letterHeight=0.03,
    size=(0.3, 0.1), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='button_16'
)
button_16.buttonClock = core.Clock()

# Initialize components for Routine "Demo_Q11"
Demo_Q11Clock = core.Clock()
text_55 = visual.TextStim(win=win, name='text_55',
    text='Rate your level of expertise in Java concurrency AMONG PEERS, \nbetween 0 and 100\n(0 = total lack of knowledge; 100 = total expert)',
    font='Open Sans',
    pos=(0, 0.15), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
textbox_12 = visual.TextBox2(
     win, text='Please type here:', font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(1, 0.15), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=True,
     name='textbox_12',
     autoLog=True,
)
button_17 = visual.ButtonStim(win, 
    text='Next', font='Arvo',
    pos=(0.7, 0),
    letterHeight=0.03,
    size=(0.3, 0.1), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='button_17'
)
button_17.buttonClock = core.Clock()

# Initialize components for Routine "Demo_Q12"
Demo_Q12Clock = core.Clock()
text_44 = visual.TextStim(win=win, name='text_44',
    text='Email address for the gift card (optional): ',
    font='Open Sans',
    pos=(0, 0.15), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
textbox = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(1, 0.15), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgray', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=True,
     name='textbox',
     autoLog=True,
)
button_5 = visual.ButtonStim(win, 
    text='Next', font='Arvo',
    pos=(0.7, 0),
    letterHeight=0.03,
    size=(0.3, 0.1), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='button_5'
)
button_5.buttonClock = core.Clock()

# Initialize components for Routine "Feedback"
FeedbackClock = core.Clock()
text_57 = visual.TextStim(win=win, name='text_57',
    text='This study is in its pilot phase and your feedback really helps! \nPlease help us, and write your feedback in the textbox below:',
    font='Open Sans',
    pos=(0, 0.2), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
textbox_13 = visual.TextBox2(
     win, text='Please type here', font='Open Sans',
     pos=(0, 0),     letterHeight=0.03,
     size=(0.8, 0.3), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='darkgrey', borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=True,
     name='textbox_13',
     autoLog=True,
)
button_11 = visual.ButtonStim(win, 
    text='Next', font='Arvo',
    pos=(0.7, 0),
    letterHeight=0.03,
    size=(0.3, 0.1), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='button_11'
)
button_11.buttonClock = core.Clock()

# Initialize components for Routine "Thanks"
ThanksClock = core.Clock()
text_9 = visual.TextStim(win=win, name='text_9',
    text='Thank you for your participation!',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
Exit_button = visual.ButtonStim(win, 
    text='The End', font='Arvo',
    pos=(0, -0.3),
    letterHeight=0.03,
    size=(0.25, 0.1), borderWidth=0.0,
    fillColor='darkgrey', borderColor=None,
    color='white', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='Exit_button'
)
Exit_button.buttonClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Welcome"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_31.keys = []
key_resp_31.rt = []
_key_resp_31_allKeys = []
# keep track of which components have finished
WelcomeComponents = [key_resp_31, text_50]
for thisComponent in WelcomeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
WelcomeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Welcome"-------
while continueRoutine:
    # get current time
    t = WelcomeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=WelcomeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *key_resp_31* updates
    if key_resp_31.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_31.frameNStart = frameN  # exact frame index
        key_resp_31.tStart = t  # local t and not account for scr refresh
        key_resp_31.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_31, 'tStartRefresh')  # time at next scr refresh
        key_resp_31.status = STARTED
        # keyboard checking is just starting
        key_resp_31.clock.reset()  # now t=0
        key_resp_31.clearEvents(eventType='keyboard')
    if key_resp_31.status == STARTED:
        theseKeys = key_resp_31.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_31_allKeys.extend(theseKeys)
        if len(_key_resp_31_allKeys):
            key_resp_31.keys = _key_resp_31_allKeys[-1].name  # just the last key pressed
            key_resp_31.rt = _key_resp_31_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text_50* updates
    if text_50.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_50.frameNStart = frameN  # exact frame index
        text_50.tStart = t  # local t and not account for scr refresh
        text_50.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_50, 'tStartRefresh')  # time at next scr refresh
        text_50.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in WelcomeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Welcome"-------
for thisComponent in WelcomeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_50.started', text_50.tStartRefresh)
thisExp.addData('text_50.stopped', text_50.tStopRefresh)
# the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Informed_Consent_1"-------
continueRoutine = True
# update component parameters for each repeat
Informed_box_1.reset()
key_resp_41.keys = []
key_resp_41.rt = []
_key_resp_41_allKeys = []
# keep track of which components have finished
Informed_Consent_1Components = [Informed_box_1, key_resp_41]
for thisComponent in Informed_Consent_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Informed_Consent_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Informed_Consent_1"-------
while continueRoutine:
    # get current time
    t = Informed_Consent_1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Informed_Consent_1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Informed_box_1* updates
    if Informed_box_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Informed_box_1.frameNStart = frameN  # exact frame index
        Informed_box_1.tStart = t  # local t and not account for scr refresh
        Informed_box_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Informed_box_1, 'tStartRefresh')  # time at next scr refresh
        Informed_box_1.setAutoDraw(True)
    
    # *key_resp_41* updates
    if key_resp_41.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_41.frameNStart = frameN  # exact frame index
        key_resp_41.tStart = t  # local t and not account for scr refresh
        key_resp_41.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_41, 'tStartRefresh')  # time at next scr refresh
        key_resp_41.status = STARTED
        # keyboard checking is just starting
        key_resp_41.clock.reset()  # now t=0
        key_resp_41.clearEvents(eventType='keyboard')
    if key_resp_41.status == STARTED:
        theseKeys = key_resp_41.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_41_allKeys.extend(theseKeys)
        if len(_key_resp_41_allKeys):
            key_resp_41.keys = _key_resp_41_allKeys[-1].name  # just the last key pressed
            key_resp_41.rt = _key_resp_41_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Informed_Consent_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Informed_Consent_1"-------
for thisComponent in Informed_Consent_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Informed_Consent_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Informed_Consent_2"-------
continueRoutine = True
# update component parameters for each repeat
Informed_box_2.reset()
key_resp_42.keys = []
key_resp_42.rt = []
_key_resp_42_allKeys = []
# keep track of which components have finished
Informed_Consent_2Components = [Informed_box_2, key_resp_42]
for thisComponent in Informed_Consent_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Informed_Consent_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Informed_Consent_2"-------
while continueRoutine:
    # get current time
    t = Informed_Consent_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Informed_Consent_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Informed_box_2* updates
    if Informed_box_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Informed_box_2.frameNStart = frameN  # exact frame index
        Informed_box_2.tStart = t  # local t and not account for scr refresh
        Informed_box_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Informed_box_2, 'tStartRefresh')  # time at next scr refresh
        Informed_box_2.setAutoDraw(True)
    
    # *key_resp_42* updates
    if key_resp_42.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_42.frameNStart = frameN  # exact frame index
        key_resp_42.tStart = t  # local t and not account for scr refresh
        key_resp_42.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_42, 'tStartRefresh')  # time at next scr refresh
        key_resp_42.status = STARTED
        # keyboard checking is just starting
        key_resp_42.clock.reset()  # now t=0
        key_resp_42.clearEvents(eventType='keyboard')
    if key_resp_42.status == STARTED:
        theseKeys = key_resp_42.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_42_allKeys.extend(theseKeys)
        if len(_key_resp_42_allKeys):
            key_resp_42.keys = _key_resp_42_allKeys[-1].name  # just the last key pressed
            key_resp_42.rt = _key_resp_42_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Informed_Consent_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Informed_Consent_2"-------
for thisComponent in Informed_Consent_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Informed_Consent_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Informed_Consent_3"-------
continueRoutine = True
# update component parameters for each repeat
Informed_box_3.reset()
key_resp_43.keys = []
key_resp_43.rt = []
_key_resp_43_allKeys = []
# keep track of which components have finished
Informed_Consent_3Components = [Informed_box_3, key_resp_43]
for thisComponent in Informed_Consent_3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Informed_Consent_3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Informed_Consent_3"-------
while continueRoutine:
    # get current time
    t = Informed_Consent_3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Informed_Consent_3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Informed_box_3* updates
    if Informed_box_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Informed_box_3.frameNStart = frameN  # exact frame index
        Informed_box_3.tStart = t  # local t and not account for scr refresh
        Informed_box_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Informed_box_3, 'tStartRefresh')  # time at next scr refresh
        Informed_box_3.setAutoDraw(True)
    
    # *key_resp_43* updates
    if key_resp_43.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_43.frameNStart = frameN  # exact frame index
        key_resp_43.tStart = t  # local t and not account for scr refresh
        key_resp_43.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_43, 'tStartRefresh')  # time at next scr refresh
        key_resp_43.status = STARTED
        # keyboard checking is just starting
        key_resp_43.clock.reset()  # now t=0
        key_resp_43.clearEvents(eventType='keyboard')
    if key_resp_43.status == STARTED:
        theseKeys = key_resp_43.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_43_allKeys.extend(theseKeys)
        if len(_key_resp_43_allKeys):
            key_resp_43.keys = _key_resp_43_allKeys[-1].name  # just the last key pressed
            key_resp_43.rt = _key_resp_43_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Informed_Consent_3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Informed_Consent_3"-------
for thisComponent in Informed_Consent_3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Informed_Consent_3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Informed_consent_4"-------
continueRoutine = True
# update component parameters for each repeat
Informed_box_4.reset()
key_resp_44.keys = []
key_resp_44.rt = []
_key_resp_44_allKeys = []
# keep track of which components have finished
Informed_consent_4Components = [Informed_box_4, key_resp_44]
for thisComponent in Informed_consent_4Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Informed_consent_4Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Informed_consent_4"-------
while continueRoutine:
    # get current time
    t = Informed_consent_4Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Informed_consent_4Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Informed_box_4* updates
    if Informed_box_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Informed_box_4.frameNStart = frameN  # exact frame index
        Informed_box_4.tStart = t  # local t and not account for scr refresh
        Informed_box_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Informed_box_4, 'tStartRefresh')  # time at next scr refresh
        Informed_box_4.setAutoDraw(True)
    
    # *key_resp_44* updates
    if key_resp_44.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_44.frameNStart = frameN  # exact frame index
        key_resp_44.tStart = t  # local t and not account for scr refresh
        key_resp_44.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_44, 'tStartRefresh')  # time at next scr refresh
        key_resp_44.status = STARTED
        # keyboard checking is just starting
        key_resp_44.clock.reset()  # now t=0
        key_resp_44.clearEvents(eventType='keyboard')
    if key_resp_44.status == STARTED:
        theseKeys = key_resp_44.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_44_allKeys.extend(theseKeys)
        if len(_key_resp_44_allKeys):
            key_resp_44.keys = _key_resp_44_allKeys[-1].name  # just the last key pressed
            key_resp_44.rt = _key_resp_44_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Informed_consent_4Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Informed_consent_4"-------
for thisComponent in Informed_consent_4Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Informed_consent_4" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Informed_Consent_5"-------
continueRoutine = True
# update component parameters for each repeat
Informed_box_5.reset()
key_resp_45.keys = []
key_resp_45.rt = []
_key_resp_45_allKeys = []
# keep track of which components have finished
Informed_Consent_5Components = [Informed_box_5, key_resp_45]
for thisComponent in Informed_Consent_5Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Informed_Consent_5Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Informed_Consent_5"-------
while continueRoutine:
    # get current time
    t = Informed_Consent_5Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Informed_Consent_5Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Informed_box_5* updates
    if Informed_box_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Informed_box_5.frameNStart = frameN  # exact frame index
        Informed_box_5.tStart = t  # local t and not account for scr refresh
        Informed_box_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Informed_box_5, 'tStartRefresh')  # time at next scr refresh
        Informed_box_5.setAutoDraw(True)
    
    # *key_resp_45* updates
    if key_resp_45.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_45.frameNStart = frameN  # exact frame index
        key_resp_45.tStart = t  # local t and not account for scr refresh
        key_resp_45.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_45, 'tStartRefresh')  # time at next scr refresh
        key_resp_45.status = STARTED
        # keyboard checking is just starting
        key_resp_45.clock.reset()  # now t=0
        key_resp_45.clearEvents(eventType='keyboard')
    if key_resp_45.status == STARTED:
        theseKeys = key_resp_45.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_45_allKeys.extend(theseKeys)
        if len(_key_resp_45_allKeys):
            key_resp_45.keys = _key_resp_45_allKeys[-1].name  # just the last key pressed
            key_resp_45.rt = _key_resp_45_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Informed_Consent_5Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Informed_Consent_5"-------
for thisComponent in Informed_Consent_5Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Informed_Consent_5" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Informed_Consent_6"-------
continueRoutine = True
# update component parameters for each repeat
Informed_box_6.reset()
key_resp_46.keys = []
key_resp_46.rt = []
_key_resp_46_allKeys = []
# keep track of which components have finished
Informed_Consent_6Components = [Informed_box_6, key_resp_46]
for thisComponent in Informed_Consent_6Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Informed_Consent_6Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Informed_Consent_6"-------
while continueRoutine:
    # get current time
    t = Informed_Consent_6Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Informed_Consent_6Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Informed_box_6* updates
    if Informed_box_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Informed_box_6.frameNStart = frameN  # exact frame index
        Informed_box_6.tStart = t  # local t and not account for scr refresh
        Informed_box_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Informed_box_6, 'tStartRefresh')  # time at next scr refresh
        Informed_box_6.setAutoDraw(True)
    
    # *key_resp_46* updates
    if key_resp_46.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_46.frameNStart = frameN  # exact frame index
        key_resp_46.tStart = t  # local t and not account for scr refresh
        key_resp_46.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_46, 'tStartRefresh')  # time at next scr refresh
        key_resp_46.status = STARTED
        # keyboard checking is just starting
        key_resp_46.clock.reset()  # now t=0
        key_resp_46.clearEvents(eventType='keyboard')
    if key_resp_46.status == STARTED:
        theseKeys = key_resp_46.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_46_allKeys.extend(theseKeys)
        if len(_key_resp_46_allKeys):
            key_resp_46.keys = _key_resp_46_allKeys[-1].name  # just the last key pressed
            key_resp_46.rt = _key_resp_46_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Informed_Consent_6Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Informed_Consent_6"-------
for thisComponent in Informed_Consent_6Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Informed_Consent_6" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Informed_Consent_7"-------
continueRoutine = True
# update component parameters for each repeat
Informed_box_7.reset()
key_resp_47.keys = []
key_resp_47.rt = []
_key_resp_47_allKeys = []
# keep track of which components have finished
Informed_Consent_7Components = [Informed_box_7, key_resp_47]
for thisComponent in Informed_Consent_7Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Informed_Consent_7Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Informed_Consent_7"-------
while continueRoutine:
    # get current time
    t = Informed_Consent_7Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Informed_Consent_7Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Informed_box_7* updates
    if Informed_box_7.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        Informed_box_7.frameNStart = frameN  # exact frame index
        Informed_box_7.tStart = t  # local t and not account for scr refresh
        Informed_box_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Informed_box_7, 'tStartRefresh')  # time at next scr refresh
        Informed_box_7.setAutoDraw(True)
    
    # *key_resp_47* updates
    if key_resp_47.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_47.frameNStart = frameN  # exact frame index
        key_resp_47.tStart = t  # local t and not account for scr refresh
        key_resp_47.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_47, 'tStartRefresh')  # time at next scr refresh
        key_resp_47.status = STARTED
        # keyboard checking is just starting
        key_resp_47.clock.reset()  # now t=0
        key_resp_47.clearEvents(eventType='keyboard')
    if key_resp_47.status == STARTED:
        theseKeys = key_resp_47.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_47_allKeys.extend(theseKeys)
        if len(_key_resp_47_allKeys):
            key_resp_47.keys = _key_resp_47_allKeys[-1].name  # just the last key pressed
            key_resp_47.rt = _key_resp_47_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Informed_Consent_7Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Informed_Consent_7"-------
for thisComponent in Informed_Consent_7Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Informed_Consent_7" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Informed_consent_8"-------
continueRoutine = True
# update component parameters for each repeat
Informed_box_8.reset()
key_resp_48.keys = []
key_resp_48.rt = []
_key_resp_48_allKeys = []
# keep track of which components have finished
Informed_consent_8Components = [Informed_box_8, key_resp_48]
for thisComponent in Informed_consent_8Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Informed_consent_8Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Informed_consent_8"-------
while continueRoutine:
    # get current time
    t = Informed_consent_8Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Informed_consent_8Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Informed_box_8* updates
    if Informed_box_8.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        Informed_box_8.frameNStart = frameN  # exact frame index
        Informed_box_8.tStart = t  # local t and not account for scr refresh
        Informed_box_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Informed_box_8, 'tStartRefresh')  # time at next scr refresh
        Informed_box_8.setAutoDraw(True)
    
    # *key_resp_48* updates
    if key_resp_48.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_48.frameNStart = frameN  # exact frame index
        key_resp_48.tStart = t  # local t and not account for scr refresh
        key_resp_48.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_48, 'tStartRefresh')  # time at next scr refresh
        key_resp_48.status = STARTED
        # keyboard checking is just starting
        key_resp_48.clock.reset()  # now t=0
        key_resp_48.clearEvents(eventType='keyboard')
    if key_resp_48.status == STARTED:
        theseKeys = key_resp_48.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_48_allKeys.extend(theseKeys)
        if len(_key_resp_48_allKeys):
            key_resp_48.keys = _key_resp_48_allKeys[-1].name  # just the last key pressed
            key_resp_48.rt = _key_resp_48_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Informed_consent_8Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Informed_consent_8"-------
for thisComponent in Informed_consent_8Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Informed_consent_8" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Informed_Question_1"-------
continueRoutine = True
# update component parameters for each repeat
Informed_Q1.reset()
Informed_key1.keys = []
Informed_key1.rt = []
_Informed_key1_allKeys = []
# keep track of which components have finished
Informed_Question_1Components = [Informed_Q1, Informed_key1]
for thisComponent in Informed_Question_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Informed_Question_1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Informed_Question_1"-------
while continueRoutine:
    # get current time
    t = Informed_Question_1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Informed_Question_1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Informed_Q1* updates
    if Informed_Q1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Informed_Q1.frameNStart = frameN  # exact frame index
        Informed_Q1.tStart = t  # local t and not account for scr refresh
        Informed_Q1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Informed_Q1, 'tStartRefresh')  # time at next scr refresh
        Informed_Q1.setAutoDraw(True)
    
    # *Informed_key1* updates
    if Informed_key1.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Informed_key1.frameNStart = frameN  # exact frame index
        Informed_key1.tStart = t  # local t and not account for scr refresh
        Informed_key1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Informed_key1, 'tStartRefresh')  # time at next scr refresh
        Informed_key1.status = STARTED
        # keyboard checking is just starting
        Informed_key1.clock.reset()  # now t=0
        Informed_key1.clearEvents(eventType='keyboard')
    if Informed_key1.status == STARTED:
        theseKeys = Informed_key1.getKeys(keyList=['y'], waitRelease=False)
        _Informed_key1_allKeys.extend(theseKeys)
        if len(_Informed_key1_allKeys):
            Informed_key1.keys = _Informed_key1_allKeys[-1].name  # just the last key pressed
            Informed_key1.rt = _Informed_key1_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Informed_Question_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Informed_Question_1"-------
for thisComponent in Informed_Question_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Informed_Question_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Informed_Question_2"-------
continueRoutine = True
# update component parameters for each repeat
Informed_Q2.reset()
Informed_key2.keys = []
Informed_key2.rt = []
_Informed_key2_allKeys = []
# keep track of which components have finished
Informed_Question_2Components = [Informed_Q2, Informed_key2]
for thisComponent in Informed_Question_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Informed_Question_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Informed_Question_2"-------
while continueRoutine:
    # get current time
    t = Informed_Question_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Informed_Question_2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Informed_Q2* updates
    if Informed_Q2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Informed_Q2.frameNStart = frameN  # exact frame index
        Informed_Q2.tStart = t  # local t and not account for scr refresh
        Informed_Q2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Informed_Q2, 'tStartRefresh')  # time at next scr refresh
        Informed_Q2.setAutoDraw(True)
    
    # *Informed_key2* updates
    if Informed_key2.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Informed_key2.frameNStart = frameN  # exact frame index
        Informed_key2.tStart = t  # local t and not account for scr refresh
        Informed_key2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Informed_key2, 'tStartRefresh')  # time at next scr refresh
        Informed_key2.status = STARTED
        # keyboard checking is just starting
        Informed_key2.clock.reset()  # now t=0
        Informed_key2.clearEvents(eventType='keyboard')
    if Informed_key2.status == STARTED:
        theseKeys = Informed_key2.getKeys(keyList=['y'], waitRelease=False)
        _Informed_key2_allKeys.extend(theseKeys)
        if len(_Informed_key2_allKeys):
            Informed_key2.keys = _Informed_key2_allKeys[-1].name  # just the last key pressed
            Informed_key2.rt = _Informed_key2_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Informed_Question_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Informed_Question_2"-------
for thisComponent in Informed_Question_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Informed_Question_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Informed_Question_3"-------
continueRoutine = True
# update component parameters for each repeat
Informed_Q3.reset()
Informed_Key3.keys = []
Informed_Key3.rt = []
_Informed_Key3_allKeys = []
# keep track of which components have finished
Informed_Question_3Components = [Informed_Q3, Informed_Key3]
for thisComponent in Informed_Question_3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Informed_Question_3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Informed_Question_3"-------
while continueRoutine:
    # get current time
    t = Informed_Question_3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Informed_Question_3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Informed_Q3* updates
    if Informed_Q3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Informed_Q3.frameNStart = frameN  # exact frame index
        Informed_Q3.tStart = t  # local t and not account for scr refresh
        Informed_Q3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Informed_Q3, 'tStartRefresh')  # time at next scr refresh
        Informed_Q3.setAutoDraw(True)
    
    # *Informed_Key3* updates
    if Informed_Key3.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Informed_Key3.frameNStart = frameN  # exact frame index
        Informed_Key3.tStart = t  # local t and not account for scr refresh
        Informed_Key3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Informed_Key3, 'tStartRefresh')  # time at next scr refresh
        Informed_Key3.status = STARTED
        # keyboard checking is just starting
        Informed_Key3.clock.reset()  # now t=0
        Informed_Key3.clearEvents(eventType='keyboard')
    if Informed_Key3.status == STARTED:
        theseKeys = Informed_Key3.getKeys(keyList=['y'], waitRelease=False)
        _Informed_Key3_allKeys.extend(theseKeys)
        if len(_Informed_Key3_allKeys):
            Informed_Key3.keys = _Informed_Key3_allKeys[-1].name  # just the last key pressed
            Informed_Key3.rt = _Informed_Key3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Informed_Question_3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Informed_Question_3"-------
for thisComponent in Informed_Question_3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Informed_Question_3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
Comp_recall_branch = data.TrialHandler(nReps=RTR, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='Comp_recall_branch')
thisExp.addLoop(Comp_recall_branch)  # add the loop to the experiment
thisComp_recall_branch = Comp_recall_branch.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisComp_recall_branch.rgb)
if thisComp_recall_branch != None:
    for paramName in thisComp_recall_branch:
        exec('{} = thisComp_recall_branch[paramName]'.format(paramName))

for thisComp_recall_branch in Comp_recall_branch:
    currentLoop = Comp_recall_branch
    # abbreviate parameter names if possible (e.g. rgb = thisComp_recall_branch.rgb)
    if thisComp_recall_branch != None:
        for paramName in thisComp_recall_branch:
            exec('{} = thisComp_recall_branch[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Comprehension_Recall"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_50.keys = []
    key_resp_50.rt = []
    _key_resp_50_allKeys = []
    textbox_14.reset()
    # keep track of which components have finished
    Comprehension_RecallComponents = [key_resp_50, textbox_14]
    for thisComponent in Comprehension_RecallComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Comprehension_RecallClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Comprehension_Recall"-------
    while continueRoutine:
        # get current time
        t = Comprehension_RecallClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Comprehension_RecallClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_50* updates
        waitOnFlip = False
        if key_resp_50.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_50.frameNStart = frameN  # exact frame index
            key_resp_50.tStart = t  # local t and not account for scr refresh
            key_resp_50.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_50, 'tStartRefresh')  # time at next scr refresh
            key_resp_50.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_50.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_50.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_50.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_50.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_50_allKeys.extend(theseKeys)
            if len(_key_resp_50_allKeys):
                key_resp_50.keys = _key_resp_50_allKeys[-1].name  # just the last key pressed
                key_resp_50.rt = _key_resp_50_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *textbox_14* updates
        if textbox_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            textbox_14.frameNStart = frameN  # exact frame index
            textbox_14.tStart = t  # local t and not account for scr refresh
            textbox_14.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(textbox_14, 'tStartRefresh')  # time at next scr refresh
            textbox_14.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Comprehension_RecallComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Comprehension_Recall"-------
    for thisComponent in Comprehension_RecallComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    timer = core.CountdownTimer(30)
    
    # check responses
    if key_resp_50.keys in ['', [], None]:  # No response was made
        key_resp_50.keys = None
    Comp_recall_branch.addData('key_resp_50.keys',key_resp_50.keys)
    if key_resp_50.keys != None:  # we had a response
        Comp_recall_branch.addData('key_resp_50.rt', key_resp_50.rt)
    Comp_recall_branch.addData('key_resp_50.started', key_resp_50.tStartRefresh)
    Comp_recall_branch.addData('key_resp_50.stopped', key_resp_50.tStopRefresh)
    Comp_recall_branch.addData('textbox_14.started', textbox_14.tStartRefresh)
    Comp_recall_branch.addData('textbox_14.stopped', textbox_14.tStopRefresh)
    # the Routine "Comprehension_Recall" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed RTR repeats of 'Comp_recall_branch'


# set up handler to look after randomisation of conditions etc
Comp_Do_Branch = data.TrialHandler(nReps=RTD, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='Comp_Do_Branch')
thisExp.addLoop(Comp_Do_Branch)  # add the loop to the experiment
thisComp_Do_Branch = Comp_Do_Branch.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisComp_Do_Branch.rgb)
if thisComp_Do_Branch != None:
    for paramName in thisComp_Do_Branch:
        exec('{} = thisComp_Do_Branch[paramName]'.format(paramName))

for thisComp_Do_Branch in Comp_Do_Branch:
    currentLoop = Comp_Do_Branch
    # abbreviate parameter names if possible (e.g. rgb = thisComp_Do_Branch.rgb)
    if thisComp_Do_Branch != None:
        for paramName in thisComp_Do_Branch:
            exec('{} = thisComp_Do_Branch[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Comprehension_Do"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_resp_51.keys = []
    key_resp_51.rt = []
    _key_resp_51_allKeys = []
    textbox_15.reset()
    # keep track of which components have finished
    Comprehension_DoComponents = [key_resp_51, textbox_15]
    for thisComponent in Comprehension_DoComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Comprehension_DoClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Comprehension_Do"-------
    while continueRoutine:
        # get current time
        t = Comprehension_DoClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Comprehension_DoClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *key_resp_51* updates
        waitOnFlip = False
        if key_resp_51.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_51.frameNStart = frameN  # exact frame index
            key_resp_51.tStart = t  # local t and not account for scr refresh
            key_resp_51.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_51, 'tStartRefresh')  # time at next scr refresh
            key_resp_51.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_51.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_51.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_51.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_51.getKeys(keyList=['space'], waitRelease=False)
            _key_resp_51_allKeys.extend(theseKeys)
            if len(_key_resp_51_allKeys):
                key_resp_51.keys = _key_resp_51_allKeys[-1].name  # just the last key pressed
                key_resp_51.rt = _key_resp_51_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # *textbox_15* updates
        if textbox_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            textbox_15.frameNStart = frameN  # exact frame index
            textbox_15.tStart = t  # local t and not account for scr refresh
            textbox_15.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(textbox_15, 'tStartRefresh')  # time at next scr refresh
            textbox_15.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Comprehension_DoComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Comprehension_Do"-------
    for thisComponent in Comprehension_DoComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    timer = core.CountdownTimer(30)
    # check responses
    if key_resp_51.keys in ['', [], None]:  # No response was made
        key_resp_51.keys = None
    Comp_Do_Branch.addData('key_resp_51.keys',key_resp_51.keys)
    if key_resp_51.keys != None:  # we had a response
        Comp_Do_Branch.addData('key_resp_51.rt', key_resp_51.rt)
    Comp_Do_Branch.addData('key_resp_51.started', key_resp_51.tStartRefresh)
    Comp_Do_Branch.addData('key_resp_51.stopped', key_resp_51.tStopRefresh)
    Comp_Do_Branch.addData('textbox_15.started', textbox_15.tStartRefresh)
    Comp_Do_Branch.addData('textbox_15.stopped', textbox_15.tStopRefresh)
    # the Routine "Comprehension_Do" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed RTD repeats of 'Comp_Do_Branch'


# set up handler to look after randomisation of conditions etc
repeat = data.TrialHandler(nReps=RTR, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='repeat')
thisExp.addLoop(repeat)  # add the loop to the experiment
thisRepeat = repeat.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisRepeat.rgb)
if thisRepeat != None:
    for paramName in thisRepeat:
        exec('{} = thisRepeat[paramName]'.format(paramName))

for thisRepeat in repeat:
    currentLoop = repeat
    # abbreviate parameter names if possible (e.g. rgb = thisRepeat.rgb)
    if thisRepeat != None:
        for paramName in thisRepeat:
            exec('{} = thisRepeat[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Book_Recall"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse_6
    gotValidClick = False  # until a click is received
    recall_box.text = comment1
    recall_box.reset()
    recall_box.setText(comment1)
    # keep track of which components have finished
    Book_RecallComponents = [mouse_6, img6, next_phase_12, Clock_6, info_6, C_1, recall_box]
    for thisComponent in Book_RecallComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Book_RecallClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Book_Recall"-------
    while continueRoutine:
        # get current time
        t = Book_RecallClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Book_RecallClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        newY = mouse_6.getWheelRel()[1] / 40
        img6.pos -= (0, newY)
        
        Clock_6.setText("%d" % timer.getTime(), log=False)
        
        if timer.getTime() <= 0:
            repeat.finished = True
            Comp_Recall.finished = True
            continueRoutine = False
            
        
        # *img6* updates
        if img6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            img6.frameNStart = frameN  # exact frame index
            img6.tStart = t  # local t and not account for scr refresh
            img6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(img6, 'tStartRefresh')  # time at next scr refresh
            img6.setAutoDraw(True)
        
        # *next_phase_12* updates
        if next_phase_12.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            next_phase_12.frameNStart = frameN  # exact frame index
            next_phase_12.tStart = t  # local t and not account for scr refresh
            next_phase_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(next_phase_12, 'tStartRefresh')  # time at next scr refresh
            next_phase_12.setAutoDraw(True)
        if next_phase_12.status == STARTED:
            # check whether next_phase_12 has been pressed
            if next_phase_12.isClicked:
                if not next_phase_12.wasClicked:
                    next_phase_12.timesOn.append(next_phase_12.buttonClock.getTime()) # store time of first click
                    next_phase_12.timesOff.append(next_phase_12.buttonClock.getTime()) # store time clicked until
                else:
                    next_phase_12.timesOff[-1] = next_phase_12.buttonClock.getTime() # update time clicked until
                if not next_phase_12.wasClicked:
                    continueRoutine = False  # end routine when next_phase_12 is clicked
                    ContinueRoutine = False
                    API_rep = 0
                next_phase_12.wasClicked = True  # if next_phase_12 is still clicked next frame, it is not a new click
            else:
                next_phase_12.wasClicked = False  # if next_phase_12 is clicked next frame, it is a new click
        else:
            next_phase_12.wasClicked = False  # if next_phase_12 is clicked next frame, it is a new click
        
        # *Clock_6* updates
        if Clock_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Clock_6.frameNStart = frameN  # exact frame index
            Clock_6.tStart = t  # local t and not account for scr refresh
            Clock_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Clock_6, 'tStartRefresh')  # time at next scr refresh
            Clock_6.setAutoDraw(True)
        if Clock_6.status == STARTED:  # only update if drawing
            Clock_6.setText("%d" % timer.getTime(), log=False)
        
        # *info_6* updates
        if info_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            info_6.frameNStart = frameN  # exact frame index
            info_6.tStart = t  # local t and not account for scr refresh
            info_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(info_6, 'tStartRefresh')  # time at next scr refresh
            info_6.setAutoDraw(True)
        
        # *C_1* updates
        if C_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            C_1.frameNStart = frameN  # exact frame index
            C_1.tStart = t  # local t and not account for scr refresh
            C_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(C_1, 'tStartRefresh')  # time at next scr refresh
            C_1.setAutoDraw(True)
        
        # *recall_box* updates
        if recall_box.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            recall_box.frameNStart = frameN  # exact frame index
            recall_box.tStart = t  # local t and not account for scr refresh
            recall_box.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(recall_box, 'tStartRefresh')  # time at next scr refresh
            recall_box.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Book_RecallComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Book_Recall"-------
    for thisComponent in Book_RecallComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for repeat (TrialHandler)
    comment1 = recall_box.getText()
    repeat.addData('img6.started', img6.tStartRefresh)
    repeat.addData('img6.stopped', img6.tStopRefresh)
    repeat.addData('next_phase_12.started', next_phase_12.tStartRefresh)
    repeat.addData('next_phase_12.stopped', next_phase_12.tStopRefresh)
    repeat.addData('next_phase_12.numClicks', next_phase_12.numClicks)
    if next_phase_12.numClicks:
       repeat.addData('next_phase_12.timesOn', next_phase_12.timesOn)
       repeat.addData('next_phase_12.timesOff', next_phase_12.timesOff)
    else:
       repeat.addData('next_phase_12.timesOn', "")
       repeat.addData('next_phase_12.timesOff', "")
    repeat.addData('Clock_6.started', Clock_6.tStartRefresh)
    repeat.addData('Clock_6.stopped', Clock_6.tStopRefresh)
    repeat.addData('info_6.started', info_6.tStartRefresh)
    repeat.addData('info_6.stopped', info_6.tStopRefresh)
    repeat.addData('C_1.started', C_1.tStartRefresh)
    repeat.addData('C_1.stopped', C_1.tStopRefresh)
    repeat.addData('recall_box.text',recall_box.text)
    repeat.addData('recall_box.started', recall_box.tStartRefresh)
    repeat.addData('recall_box.stopped', recall_box.tStopRefresh)
    # the Routine "Book_Recall" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed RTR repeats of 'repeat'


# set up handler to look after randomisation of conditions etc
repeat2 = data.TrialHandler(nReps=RTD, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='repeat2')
thisExp.addLoop(repeat2)  # add the loop to the experiment
thisRepeat2 = repeat2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisRepeat2.rgb)
if thisRepeat2 != None:
    for paramName in thisRepeat2:
        exec('{} = thisRepeat2[paramName]'.format(paramName))

for thisRepeat2 in repeat2:
    currentLoop = repeat2
    # abbreviate parameter names if possible (e.g. rgb = thisRepeat2.rgb)
    if thisRepeat2 != None:
        for paramName in thisRepeat2:
            exec('{} = thisRepeat2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Book_Do"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse
    gotValidClick = False  # until a click is received
    do_box.text = comment2
    do_box.reset()
    # keep track of which components have finished
    Book_DoComponents = [mouse, image, next_phase_0, Clock_1, Info1, C_2, do_box]
    for thisComponent in Book_DoComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Book_DoClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Book_Do"-------
    while continueRoutine:
        # get current time
        t = Book_DoClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Book_DoClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        newY = mouse.getWheelRel()[1] / 40
        image.pos -= (0, newY)
        
        Clock_1.setText("%d" % timer.getTime(), log=False)
        
        if timer.getTime() <= 0:
            repeat2.finished = True
            Comp_Do.finished = True
            continueRoutine = False
            
        
        
        # *image* updates
        if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image.frameNStart = frameN  # exact frame index
            image.tStart = t  # local t and not account for scr refresh
            image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
            image.setAutoDraw(True)
        
        # *next_phase_0* updates
        if next_phase_0.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            next_phase_0.frameNStart = frameN  # exact frame index
            next_phase_0.tStart = t  # local t and not account for scr refresh
            next_phase_0.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(next_phase_0, 'tStartRefresh')  # time at next scr refresh
            next_phase_0.setAutoDraw(True)
        if next_phase_0.status == STARTED:
            # check whether next_phase_0 has been pressed
            if next_phase_0.isClicked:
                if not next_phase_0.wasClicked:
                    next_phase_0.timesOn.append(next_phase_0.buttonClock.getTime()) # store time of first click
                    next_phase_0.timesOff.append(next_phase_0.buttonClock.getTime()) # store time clicked until
                else:
                    next_phase_0.timesOff[-1] = next_phase_0.buttonClock.getTime() # update time clicked until
                if not next_phase_0.wasClicked:
                    continueRoutine = False  # end routine when next_phase_0 is clicked
                    ContinueRoutine = False
                    API_rep = 0
                next_phase_0.wasClicked = True  # if next_phase_0 is still clicked next frame, it is not a new click
            else:
                next_phase_0.wasClicked = False  # if next_phase_0 is clicked next frame, it is a new click
        else:
            next_phase_0.wasClicked = False  # if next_phase_0 is clicked next frame, it is a new click
        
        # *Clock_1* updates
        if Clock_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Clock_1.frameNStart = frameN  # exact frame index
            Clock_1.tStart = t  # local t and not account for scr refresh
            Clock_1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Clock_1, 'tStartRefresh')  # time at next scr refresh
            Clock_1.setAutoDraw(True)
        if Clock_1.status == STARTED:  # only update if drawing
            Clock_1.setText("%d" % timer.getTime(), log=False)
        
        # *Info1* updates
        if Info1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Info1.frameNStart = frameN  # exact frame index
            Info1.tStart = t  # local t and not account for scr refresh
            Info1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Info1, 'tStartRefresh')  # time at next scr refresh
            Info1.setAutoDraw(True)
        
        # *C_2* updates
        if C_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            C_2.frameNStart = frameN  # exact frame index
            C_2.tStart = t  # local t and not account for scr refresh
            C_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(C_2, 'tStartRefresh')  # time at next scr refresh
            C_2.setAutoDraw(True)
        
        # *do_box* updates
        if do_box.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            do_box.frameNStart = frameN  # exact frame index
            do_box.tStart = t  # local t and not account for scr refresh
            do_box.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(do_box, 'tStartRefresh')  # time at next scr refresh
            do_box.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Book_DoComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Book_Do"-------
    for thisComponent in Book_DoComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for repeat2 (TrialHandler)
    comment2 = do_box.getText()
    repeat2.addData('image.started', image.tStartRefresh)
    repeat2.addData('image.stopped', image.tStopRefresh)
    repeat2.addData('next_phase_0.started', next_phase_0.tStartRefresh)
    repeat2.addData('next_phase_0.stopped', next_phase_0.tStopRefresh)
    repeat2.addData('next_phase_0.numClicks', next_phase_0.numClicks)
    if next_phase_0.numClicks:
       repeat2.addData('next_phase_0.timesOn', next_phase_0.timesOn)
       repeat2.addData('next_phase_0.timesOff', next_phase_0.timesOff)
    else:
       repeat2.addData('next_phase_0.timesOn', "")
       repeat2.addData('next_phase_0.timesOff', "")
    repeat2.addData('Clock_1.started', Clock_1.tStartRefresh)
    repeat2.addData('Clock_1.stopped', Clock_1.tStopRefresh)
    repeat2.addData('Info1.started', Info1.tStartRefresh)
    repeat2.addData('Info1.stopped', Info1.tStopRefresh)
    repeat2.addData('C_2.started', C_2.tStartRefresh)
    repeat2.addData('C_2.stopped', C_2.tStopRefresh)
    repeat2.addData('do_box.text',do_box.text)
    repeat2.addData('do_box.started', do_box.tStartRefresh)
    repeat2.addData('do_box.stopped', do_box.tStopRefresh)
    # the Routine "Book_Do" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed RTD repeats of 'repeat2'


# ------Prepare to start Routine "Questionnaire_phase_introduction"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_49.keys = []
key_resp_49.rt = []
_key_resp_49_allKeys = []
# keep track of which components have finished
Questionnaire_phase_introductionComponents = [text_2, key_resp_49]
for thisComponent in Questionnaire_phase_introductionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Questionnaire_phase_introductionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Questionnaire_phase_introduction"-------
while continueRoutine:
    # get current time
    t = Questionnaire_phase_introductionClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Questionnaire_phase_introductionClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    
    # *key_resp_49* updates
    waitOnFlip = False
    if key_resp_49.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_49.frameNStart = frameN  # exact frame index
        key_resp_49.tStart = t  # local t and not account for scr refresh
        key_resp_49.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_49, 'tStartRefresh')  # time at next scr refresh
        key_resp_49.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_49.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_49.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_49.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_49.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_49_allKeys.extend(theseKeys)
        if len(_key_resp_49_allKeys):
            key_resp_49.keys = _key_resp_49_allKeys[-1].name  # just the last key pressed
            key_resp_49.rt = _key_resp_49_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Questionnaire_phase_introductionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Questionnaire_phase_introduction"-------
for thisComponent in Questionnaire_phase_introductionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_2.started', text_2.tStartRefresh)
thisExp.addData('text_2.stopped', text_2.tStopRefresh)
# check responses
if key_resp_49.keys in ['', [], None]:  # No response was made
    key_resp_49.keys = None
thisExp.addData('key_resp_49.keys',key_resp_49.keys)
if key_resp_49.keys != None:  # we had a response
    thisExp.addData('key_resp_49.rt', key_resp_49.rt)
thisExp.addData('key_resp_49.started', key_resp_49.tStartRefresh)
thisExp.addData('key_resp_49.stopped', key_resp_49.tStopRefresh)
thisExp.nextEntry()
# the Routine "Questionnaire_phase_introduction" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Q1"-------
continueRoutine = True
# update component parameters for each repeat
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
Q1Components = [text, key_resp]
for thisComponent in Q1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Q1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Q1"-------
while continueRoutine:
    # get current time
    t = Q1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Q1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *key_resp* updates
    if key_resp.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp.frameNStart = frameN  # exact frame index
        key_resp.tStart = t  # local t and not account for scr refresh
        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
        key_resp.status = STARTED
        # keyboard checking is just starting
        key_resp.clock.reset()  # now t=0
        key_resp.clearEvents(eventType='keyboard')
    if key_resp.status == STARTED:
        theseKeys = key_resp.getKeys(keyList=['y', 'n'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
            # was this correct?
            if (key_resp.keys == str('y')) or (key_resp.keys == 'y'):
                key_resp.corr = 1
            else:
                key_resp.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Q1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Q1"-------
for thisComponent in Q1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
# check responses
if key_resp.keys in ['', [], None]:  # No response was made
    key_resp.keys = None
    # was no response the correct answer?!
    if str('y').lower() == 'none':
       key_resp.corr = 1;  # correct non-response
    else:
       key_resp.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('key_resp.keys',key_resp.keys)
thisExp.addData('key_resp.corr', key_resp.corr)
if key_resp.keys != None:  # we had a response
    thisExp.addData('key_resp.rt', key_resp.rt)
thisExp.nextEntry()
# the Routine "Q1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Q2"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_2.keys = []
key_resp_2.rt = []
_key_resp_2_allKeys = []
# keep track of which components have finished
Q2Components = [text_3, key_resp_2]
for thisComponent in Q2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Q2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Q2"-------
while continueRoutine:
    # get current time
    t = Q2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Q2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_3* updates
    if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_3.frameNStart = frameN  # exact frame index
        text_3.tStart = t  # local t and not account for scr refresh
        text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
        text_3.setAutoDraw(True)
    
    # *key_resp_2* updates
    if key_resp_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_2.frameNStart = frameN  # exact frame index
        key_resp_2.tStart = t  # local t and not account for scr refresh
        key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
        key_resp_2.status = STARTED
        # keyboard checking is just starting
        key_resp_2.clock.reset()  # now t=0
        key_resp_2.clearEvents(eventType='keyboard')
    if key_resp_2.status == STARTED:
        theseKeys = key_resp_2.getKeys(keyList=['y', 'n'], waitRelease=False)
        _key_resp_2_allKeys.extend(theseKeys)
        if len(_key_resp_2_allKeys):
            key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
            key_resp_2.rt = _key_resp_2_allKeys[-1].rt
            # was this correct?
            if (key_resp_2.keys == str('n')) or (key_resp_2.keys == 'n'):
                key_resp_2.corr = 1
            else:
                key_resp_2.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Q2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Q2"-------
for thisComponent in Q2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_3.started', text_3.tStartRefresh)
thisExp.addData('text_3.stopped', text_3.tStopRefresh)
# check responses
if key_resp_2.keys in ['', [], None]:  # No response was made
    key_resp_2.keys = None
    # was no response the correct answer?!
    if str('n').lower() == 'none':
       key_resp_2.corr = 1;  # correct non-response
    else:
       key_resp_2.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('key_resp_2.keys',key_resp_2.keys)
thisExp.addData('key_resp_2.corr', key_resp_2.corr)
if key_resp_2.keys != None:  # we had a response
    thisExp.addData('key_resp_2.rt', key_resp_2.rt)
thisExp.nextEntry()
# the Routine "Q2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Q3"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
Q3Components = [text_4, key_resp_3]
for thisComponent in Q3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Q3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Q3"-------
while continueRoutine:
    # get current time
    t = Q3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Q3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_4* updates
    if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_4.frameNStart = frameN  # exact frame index
        text_4.tStart = t  # local t and not account for scr refresh
        text_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
        text_4.setAutoDraw(True)
    
    # *key_resp_3* updates
    if key_resp_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        key_resp_3.clock.reset()  # now t=0
        key_resp_3.clearEvents(eventType='keyboard')
    if key_resp_3.status == STARTED:
        theseKeys = key_resp_3.getKeys(keyList=['y', 'n'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # was this correct?
            if (key_resp_3.keys == str('y')) or (key_resp_3.keys == 'y'):
                key_resp_3.corr = 1
            else:
                key_resp_3.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Q3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Q3"-------
for thisComponent in Q3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_4.started', text_4.tStartRefresh)
thisExp.addData('text_4.stopped', text_4.tStopRefresh)
# check responses
if key_resp_3.keys in ['', [], None]:  # No response was made
    key_resp_3.keys = None
    # was no response the correct answer?!
    if str('y').lower() == 'none':
       key_resp_3.corr = 1;  # correct non-response
    else:
       key_resp_3.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('key_resp_3.keys',key_resp_3.keys)
thisExp.addData('key_resp_3.corr', key_resp_3.corr)
if key_resp_3.keys != None:  # we had a response
    thisExp.addData('key_resp_3.rt', key_resp_3.rt)
thisExp.nextEntry()
# the Routine "Q3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Q4"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_4.keys = []
key_resp_4.rt = []
_key_resp_4_allKeys = []
# keep track of which components have finished
Q4Components = [text_6, key_resp_4]
for thisComponent in Q4Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Q4Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Q4"-------
while continueRoutine:
    # get current time
    t = Q4Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Q4Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_6* updates
    if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_6.frameNStart = frameN  # exact frame index
        text_6.tStart = t  # local t and not account for scr refresh
        text_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
        text_6.setAutoDraw(True)
    
    # *key_resp_4* updates
    if key_resp_4.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_4.frameNStart = frameN  # exact frame index
        key_resp_4.tStart = t  # local t and not account for scr refresh
        key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
        key_resp_4.status = STARTED
        # keyboard checking is just starting
        key_resp_4.clock.reset()  # now t=0
        key_resp_4.clearEvents(eventType='keyboard')
    if key_resp_4.status == STARTED:
        theseKeys = key_resp_4.getKeys(keyList=['y', 'n'], waitRelease=False)
        _key_resp_4_allKeys.extend(theseKeys)
        if len(_key_resp_4_allKeys):
            key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
            key_resp_4.rt = _key_resp_4_allKeys[-1].rt
            # was this correct?
            if (key_resp_4.keys == str('y')) or (key_resp_4.keys == 'y'):
                key_resp_4.corr = 1
            else:
                key_resp_4.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Q4Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Q4"-------
for thisComponent in Q4Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_6.started', text_6.tStartRefresh)
thisExp.addData('text_6.stopped', text_6.tStopRefresh)
# check responses
if key_resp_4.keys in ['', [], None]:  # No response was made
    key_resp_4.keys = None
    # was no response the correct answer?!
    if str('y').lower() == 'none':
       key_resp_4.corr = 1;  # correct non-response
    else:
       key_resp_4.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('key_resp_4.keys',key_resp_4.keys)
thisExp.addData('key_resp_4.corr', key_resp_4.corr)
if key_resp_4.keys != None:  # we had a response
    thisExp.addData('key_resp_4.rt', key_resp_4.rt)
thisExp.nextEntry()
# the Routine "Q4" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Q5"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_5.keys = []
key_resp_5.rt = []
_key_resp_5_allKeys = []
# keep track of which components have finished
Q5Components = [text_7, key_resp_5]
for thisComponent in Q5Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Q5Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Q5"-------
while continueRoutine:
    # get current time
    t = Q5Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Q5Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_7* updates
    if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_7.frameNStart = frameN  # exact frame index
        text_7.tStart = t  # local t and not account for scr refresh
        text_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
        text_7.setAutoDraw(True)
    
    # *key_resp_5* updates
    if key_resp_5.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_5.frameNStart = frameN  # exact frame index
        key_resp_5.tStart = t  # local t and not account for scr refresh
        key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
        key_resp_5.status = STARTED
        # keyboard checking is just starting
        key_resp_5.clock.reset()  # now t=0
        key_resp_5.clearEvents(eventType='keyboard')
    if key_resp_5.status == STARTED:
        theseKeys = key_resp_5.getKeys(keyList=['y', 'n'], waitRelease=False)
        _key_resp_5_allKeys.extend(theseKeys)
        if len(_key_resp_5_allKeys):
            key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
            key_resp_5.rt = _key_resp_5_allKeys[-1].rt
            # was this correct?
            if (key_resp_5.keys == str('n')) or (key_resp_5.keys == 'n'):
                key_resp_5.corr = 1
            else:
                key_resp_5.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Q5Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Q5"-------
for thisComponent in Q5Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_7.started', text_7.tStartRefresh)
thisExp.addData('text_7.stopped', text_7.tStopRefresh)
# check responses
if key_resp_5.keys in ['', [], None]:  # No response was made
    key_resp_5.keys = None
    # was no response the correct answer?!
    if str('n').lower() == 'none':
       key_resp_5.corr = 1;  # correct non-response
    else:
       key_resp_5.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('key_resp_5.keys',key_resp_5.keys)
thisExp.addData('key_resp_5.corr', key_resp_5.corr)
if key_resp_5.keys != None:  # we had a response
    thisExp.addData('key_resp_5.rt', key_resp_5.rt)
thisExp.nextEntry()
# the Routine "Q5" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Q6"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_6.keys = []
key_resp_6.rt = []
_key_resp_6_allKeys = []
# keep track of which components have finished
Q6Components = [text_8, key_resp_6]
for thisComponent in Q6Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Q6Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Q6"-------
while continueRoutine:
    # get current time
    t = Q6Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Q6Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_8* updates
    if text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_8.frameNStart = frameN  # exact frame index
        text_8.tStart = t  # local t and not account for scr refresh
        text_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
        text_8.setAutoDraw(True)
    
    # *key_resp_6* updates
    if key_resp_6.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_6.frameNStart = frameN  # exact frame index
        key_resp_6.tStart = t  # local t and not account for scr refresh
        key_resp_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_6, 'tStartRefresh')  # time at next scr refresh
        key_resp_6.status = STARTED
        # keyboard checking is just starting
        key_resp_6.clock.reset()  # now t=0
        key_resp_6.clearEvents(eventType='keyboard')
    if key_resp_6.status == STARTED:
        theseKeys = key_resp_6.getKeys(keyList=['y', 'n'], waitRelease=False)
        _key_resp_6_allKeys.extend(theseKeys)
        if len(_key_resp_6_allKeys):
            key_resp_6.keys = _key_resp_6_allKeys[-1].name  # just the last key pressed
            key_resp_6.rt = _key_resp_6_allKeys[-1].rt
            # was this correct?
            if (key_resp_6.keys == str('y')) or (key_resp_6.keys == 'y'):
                key_resp_6.corr = 1
            else:
                key_resp_6.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Q6Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Q6"-------
for thisComponent in Q6Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_8.started', text_8.tStartRefresh)
thisExp.addData('text_8.stopped', text_8.tStopRefresh)
# check responses
if key_resp_6.keys in ['', [], None]:  # No response was made
    key_resp_6.keys = None
    # was no response the correct answer?!
    if str('y').lower() == 'none':
       key_resp_6.corr = 1;  # correct non-response
    else:
       key_resp_6.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('key_resp_6.keys',key_resp_6.keys)
thisExp.addData('key_resp_6.corr', key_resp_6.corr)
if key_resp_6.keys != None:  # we had a response
    thisExp.addData('key_resp_6.rt', key_resp_6.rt)
thisExp.nextEntry()
# the Routine "Q6" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Q7"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_7.keys = []
key_resp_7.rt = []
_key_resp_7_allKeys = []
# keep track of which components have finished
Q7Components = [text_10, key_resp_7]
for thisComponent in Q7Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Q7Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Q7"-------
while continueRoutine:
    # get current time
    t = Q7Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Q7Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_10* updates
    if text_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_10.frameNStart = frameN  # exact frame index
        text_10.tStart = t  # local t and not account for scr refresh
        text_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_10, 'tStartRefresh')  # time at next scr refresh
        text_10.setAutoDraw(True)
    
    # *key_resp_7* updates
    if key_resp_7.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_7.frameNStart = frameN  # exact frame index
        key_resp_7.tStart = t  # local t and not account for scr refresh
        key_resp_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_7, 'tStartRefresh')  # time at next scr refresh
        key_resp_7.status = STARTED
        # keyboard checking is just starting
        key_resp_7.clock.reset()  # now t=0
        key_resp_7.clearEvents(eventType='keyboard')
    if key_resp_7.status == STARTED:
        theseKeys = key_resp_7.getKeys(keyList=['y', 'n'], waitRelease=False)
        _key_resp_7_allKeys.extend(theseKeys)
        if len(_key_resp_7_allKeys):
            key_resp_7.keys = _key_resp_7_allKeys[-1].name  # just the last key pressed
            key_resp_7.rt = _key_resp_7_allKeys[-1].rt
            # was this correct?
            if (key_resp_7.keys == str('y')) or (key_resp_7.keys == 'y'):
                key_resp_7.corr = 1
            else:
                key_resp_7.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Q7Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Q7"-------
for thisComponent in Q7Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_10.started', text_10.tStartRefresh)
thisExp.addData('text_10.stopped', text_10.tStopRefresh)
# check responses
if key_resp_7.keys in ['', [], None]:  # No response was made
    key_resp_7.keys = None
    # was no response the correct answer?!
    if str('y').lower() == 'none':
       key_resp_7.corr = 1;  # correct non-response
    else:
       key_resp_7.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('key_resp_7.keys',key_resp_7.keys)
thisExp.addData('key_resp_7.corr', key_resp_7.corr)
if key_resp_7.keys != None:  # we had a response
    thisExp.addData('key_resp_7.rt', key_resp_7.rt)
thisExp.nextEntry()
# the Routine "Q7" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Q8"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_8.keys = []
key_resp_8.rt = []
_key_resp_8_allKeys = []
# keep track of which components have finished
Q8Components = [text_11, key_resp_8]
for thisComponent in Q8Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Q8Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Q8"-------
while continueRoutine:
    # get current time
    t = Q8Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Q8Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_11* updates
    if text_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_11.frameNStart = frameN  # exact frame index
        text_11.tStart = t  # local t and not account for scr refresh
        text_11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_11, 'tStartRefresh')  # time at next scr refresh
        text_11.setAutoDraw(True)
    
    # *key_resp_8* updates
    if key_resp_8.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_8.frameNStart = frameN  # exact frame index
        key_resp_8.tStart = t  # local t and not account for scr refresh
        key_resp_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_8, 'tStartRefresh')  # time at next scr refresh
        key_resp_8.status = STARTED
        # keyboard checking is just starting
        key_resp_8.clock.reset()  # now t=0
        key_resp_8.clearEvents(eventType='keyboard')
    if key_resp_8.status == STARTED:
        theseKeys = key_resp_8.getKeys(keyList=['y', 'n'], waitRelease=False)
        _key_resp_8_allKeys.extend(theseKeys)
        if len(_key_resp_8_allKeys):
            key_resp_8.keys = _key_resp_8_allKeys[-1].name  # just the last key pressed
            key_resp_8.rt = _key_resp_8_allKeys[-1].rt
            # was this correct?
            if (key_resp_8.keys == str('n')) or (key_resp_8.keys == 'n'):
                key_resp_8.corr = 1
            else:
                key_resp_8.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Q8Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Q8"-------
for thisComponent in Q8Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_11.started', text_11.tStartRefresh)
thisExp.addData('text_11.stopped', text_11.tStopRefresh)
# check responses
if key_resp_8.keys in ['', [], None]:  # No response was made
    key_resp_8.keys = None
    # was no response the correct answer?!
    if str('n').lower() == 'none':
       key_resp_8.corr = 1;  # correct non-response
    else:
       key_resp_8.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('key_resp_8.keys',key_resp_8.keys)
thisExp.addData('key_resp_8.corr', key_resp_8.corr)
if key_resp_8.keys != None:  # we had a response
    thisExp.addData('key_resp_8.rt', key_resp_8.rt)
thisExp.nextEntry()
# the Routine "Q8" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Q9"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_9.keys = []
key_resp_9.rt = []
_key_resp_9_allKeys = []
# keep track of which components have finished
Q9Components = [text_12, key_resp_9]
for thisComponent in Q9Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Q9Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Q9"-------
while continueRoutine:
    # get current time
    t = Q9Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Q9Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_12* updates
    if text_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_12.frameNStart = frameN  # exact frame index
        text_12.tStart = t  # local t and not account for scr refresh
        text_12.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_12, 'tStartRefresh')  # time at next scr refresh
        text_12.setAutoDraw(True)
    
    # *key_resp_9* updates
    if key_resp_9.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_9.frameNStart = frameN  # exact frame index
        key_resp_9.tStart = t  # local t and not account for scr refresh
        key_resp_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_9, 'tStartRefresh')  # time at next scr refresh
        key_resp_9.status = STARTED
        # keyboard checking is just starting
        key_resp_9.clock.reset()  # now t=0
        key_resp_9.clearEvents(eventType='keyboard')
    if key_resp_9.status == STARTED:
        theseKeys = key_resp_9.getKeys(keyList=['y', 'n'], waitRelease=False)
        _key_resp_9_allKeys.extend(theseKeys)
        if len(_key_resp_9_allKeys):
            key_resp_9.keys = _key_resp_9_allKeys[-1].name  # just the last key pressed
            key_resp_9.rt = _key_resp_9_allKeys[-1].rt
            # was this correct?
            if (key_resp_9.keys == str('n')) or (key_resp_9.keys == 'n'):
                key_resp_9.corr = 1
            else:
                key_resp_9.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Q9Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Q9"-------
for thisComponent in Q9Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_12.started', text_12.tStartRefresh)
thisExp.addData('text_12.stopped', text_12.tStopRefresh)
# check responses
if key_resp_9.keys in ['', [], None]:  # No response was made
    key_resp_9.keys = None
    # was no response the correct answer?!
    if str('n').lower() == 'none':
       key_resp_9.corr = 1;  # correct non-response
    else:
       key_resp_9.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('key_resp_9.keys',key_resp_9.keys)
thisExp.addData('key_resp_9.corr', key_resp_9.corr)
if key_resp_9.keys != None:  # we had a response
    thisExp.addData('key_resp_9.rt', key_resp_9.rt)
thisExp.nextEntry()
# the Routine "Q9" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Q10"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_10.keys = []
key_resp_10.rt = []
_key_resp_10_allKeys = []
# keep track of which components have finished
Q10Components = [text_13, key_resp_10]
for thisComponent in Q10Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Q10Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Q10"-------
while continueRoutine:
    # get current time
    t = Q10Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Q10Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_13* updates
    if text_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_13.frameNStart = frameN  # exact frame index
        text_13.tStart = t  # local t and not account for scr refresh
        text_13.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_13, 'tStartRefresh')  # time at next scr refresh
        text_13.setAutoDraw(True)
    
    # *key_resp_10* updates
    if key_resp_10.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_10.frameNStart = frameN  # exact frame index
        key_resp_10.tStart = t  # local t and not account for scr refresh
        key_resp_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_10, 'tStartRefresh')  # time at next scr refresh
        key_resp_10.status = STARTED
        # keyboard checking is just starting
        key_resp_10.clock.reset()  # now t=0
        key_resp_10.clearEvents(eventType='keyboard')
    if key_resp_10.status == STARTED:
        theseKeys = key_resp_10.getKeys(keyList=['y', 'n'], waitRelease=False)
        _key_resp_10_allKeys.extend(theseKeys)
        if len(_key_resp_10_allKeys):
            key_resp_10.keys = _key_resp_10_allKeys[-1].name  # just the last key pressed
            key_resp_10.rt = _key_resp_10_allKeys[-1].rt
            # was this correct?
            if (key_resp_10.keys == str('y')) or (key_resp_10.keys == 'y'):
                key_resp_10.corr = 1
            else:
                key_resp_10.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Q10Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Q10"-------
for thisComponent in Q10Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_13.started', text_13.tStartRefresh)
thisExp.addData('text_13.stopped', text_13.tStopRefresh)
# check responses
if key_resp_10.keys in ['', [], None]:  # No response was made
    key_resp_10.keys = None
    # was no response the correct answer?!
    if str('y').lower() == 'none':
       key_resp_10.corr = 1;  # correct non-response
    else:
       key_resp_10.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('key_resp_10.keys',key_resp_10.keys)
thisExp.addData('key_resp_10.corr', key_resp_10.corr)
if key_resp_10.keys != None:  # we had a response
    thisExp.addData('key_resp_10.rt', key_resp_10.rt)
thisExp.nextEntry()
# the Routine "Q10" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Q11"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_11.keys = []
key_resp_11.rt = []
_key_resp_11_allKeys = []
# keep track of which components have finished
Q11Components = [text_14, key_resp_11]
for thisComponent in Q11Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Q11Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Q11"-------
while continueRoutine:
    # get current time
    t = Q11Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Q11Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_14* updates
    if text_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_14.frameNStart = frameN  # exact frame index
        text_14.tStart = t  # local t and not account for scr refresh
        text_14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_14, 'tStartRefresh')  # time at next scr refresh
        text_14.setAutoDraw(True)
    
    # *key_resp_11* updates
    if key_resp_11.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_11.frameNStart = frameN  # exact frame index
        key_resp_11.tStart = t  # local t and not account for scr refresh
        key_resp_11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_11, 'tStartRefresh')  # time at next scr refresh
        key_resp_11.status = STARTED
        # keyboard checking is just starting
        key_resp_11.clock.reset()  # now t=0
        key_resp_11.clearEvents(eventType='keyboard')
    if key_resp_11.status == STARTED:
        theseKeys = key_resp_11.getKeys(keyList=['y', 'n'], waitRelease=False)
        _key_resp_11_allKeys.extend(theseKeys)
        if len(_key_resp_11_allKeys):
            key_resp_11.keys = _key_resp_11_allKeys[-1].name  # just the last key pressed
            key_resp_11.rt = _key_resp_11_allKeys[-1].rt
            # was this correct?
            if (key_resp_11.keys == str('y')) or (key_resp_11.keys == 'y'):
                key_resp_11.corr = 1
            else:
                key_resp_11.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Q11Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Q11"-------
for thisComponent in Q11Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_14.started', text_14.tStartRefresh)
thisExp.addData('text_14.stopped', text_14.tStopRefresh)
# check responses
if key_resp_11.keys in ['', [], None]:  # No response was made
    key_resp_11.keys = None
    # was no response the correct answer?!
    if str('y').lower() == 'none':
       key_resp_11.corr = 1;  # correct non-response
    else:
       key_resp_11.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('key_resp_11.keys',key_resp_11.keys)
thisExp.addData('key_resp_11.corr', key_resp_11.corr)
if key_resp_11.keys != None:  # we had a response
    thisExp.addData('key_resp_11.rt', key_resp_11.rt)
thisExp.nextEntry()
# the Routine "Q11" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Q12"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_12.keys = []
key_resp_12.rt = []
_key_resp_12_allKeys = []
# keep track of which components have finished
Q12Components = [text_15, key_resp_12]
for thisComponent in Q12Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Q12Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Q12"-------
while continueRoutine:
    # get current time
    t = Q12Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Q12Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_15* updates
    if text_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_15.frameNStart = frameN  # exact frame index
        text_15.tStart = t  # local t and not account for scr refresh
        text_15.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_15, 'tStartRefresh')  # time at next scr refresh
        text_15.setAutoDraw(True)
    
    # *key_resp_12* updates
    if key_resp_12.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_12.frameNStart = frameN  # exact frame index
        key_resp_12.tStart = t  # local t and not account for scr refresh
        key_resp_12.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_12, 'tStartRefresh')  # time at next scr refresh
        key_resp_12.status = STARTED
        # keyboard checking is just starting
        key_resp_12.clock.reset()  # now t=0
        key_resp_12.clearEvents(eventType='keyboard')
    if key_resp_12.status == STARTED:
        theseKeys = key_resp_12.getKeys(keyList=['y', 'n'], waitRelease=False)
        _key_resp_12_allKeys.extend(theseKeys)
        if len(_key_resp_12_allKeys):
            key_resp_12.keys = _key_resp_12_allKeys[-1].name  # just the last key pressed
            key_resp_12.rt = _key_resp_12_allKeys[-1].rt
            # was this correct?
            if (key_resp_12.keys == str('y')) or (key_resp_12.keys == 'y'):
                key_resp_12.corr = 1
            else:
                key_resp_12.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Q12Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Q12"-------
for thisComponent in Q12Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_15.started', text_15.tStartRefresh)
thisExp.addData('text_15.stopped', text_15.tStopRefresh)
# check responses
if key_resp_12.keys in ['', [], None]:  # No response was made
    key_resp_12.keys = None
    # was no response the correct answer?!
    if str('y').lower() == 'none':
       key_resp_12.corr = 1;  # correct non-response
    else:
       key_resp_12.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('key_resp_12.keys',key_resp_12.keys)
thisExp.addData('key_resp_12.corr', key_resp_12.corr)
if key_resp_12.keys != None:  # we had a response
    thisExp.addData('key_resp_12.rt', key_resp_12.rt)
thisExp.nextEntry()
# the Routine "Q12" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Q13"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_13.keys = []
key_resp_13.rt = []
_key_resp_13_allKeys = []
# keep track of which components have finished
Q13Components = [text_16, key_resp_13]
for thisComponent in Q13Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Q13Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Q13"-------
while continueRoutine:
    # get current time
    t = Q13Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Q13Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_16* updates
    if text_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_16.frameNStart = frameN  # exact frame index
        text_16.tStart = t  # local t and not account for scr refresh
        text_16.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_16, 'tStartRefresh')  # time at next scr refresh
        text_16.setAutoDraw(True)
    
    # *key_resp_13* updates
    if key_resp_13.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_13.frameNStart = frameN  # exact frame index
        key_resp_13.tStart = t  # local t and not account for scr refresh
        key_resp_13.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_13, 'tStartRefresh')  # time at next scr refresh
        key_resp_13.status = STARTED
        # keyboard checking is just starting
        key_resp_13.clock.reset()  # now t=0
        key_resp_13.clearEvents(eventType='keyboard')
    if key_resp_13.status == STARTED:
        theseKeys = key_resp_13.getKeys(keyList=['y', 'n'], waitRelease=False)
        _key_resp_13_allKeys.extend(theseKeys)
        if len(_key_resp_13_allKeys):
            key_resp_13.keys = _key_resp_13_allKeys[-1].name  # just the last key pressed
            key_resp_13.rt = _key_resp_13_allKeys[-1].rt
            # was this correct?
            if (key_resp_13.keys == str('y')) or (key_resp_13.keys == 'y'):
                key_resp_13.corr = 1
            else:
                key_resp_13.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Q13Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Q13"-------
for thisComponent in Q13Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_16.started', text_16.tStartRefresh)
thisExp.addData('text_16.stopped', text_16.tStopRefresh)
# check responses
if key_resp_13.keys in ['', [], None]:  # No response was made
    key_resp_13.keys = None
    # was no response the correct answer?!
    if str('y').lower() == 'none':
       key_resp_13.corr = 1;  # correct non-response
    else:
       key_resp_13.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('key_resp_13.keys',key_resp_13.keys)
thisExp.addData('key_resp_13.corr', key_resp_13.corr)
if key_resp_13.keys != None:  # we had a response
    thisExp.addData('key_resp_13.rt', key_resp_13.rt)
thisExp.nextEntry()
# the Routine "Q13" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Q14"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_14.keys = []
key_resp_14.rt = []
_key_resp_14_allKeys = []
# keep track of which components have finished
Q14Components = [text_17, key_resp_14]
for thisComponent in Q14Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Q14Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Q14"-------
while continueRoutine:
    # get current time
    t = Q14Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Q14Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_17* updates
    if text_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_17.frameNStart = frameN  # exact frame index
        text_17.tStart = t  # local t and not account for scr refresh
        text_17.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_17, 'tStartRefresh')  # time at next scr refresh
        text_17.setAutoDraw(True)
    
    # *key_resp_14* updates
    if key_resp_14.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_14.frameNStart = frameN  # exact frame index
        key_resp_14.tStart = t  # local t and not account for scr refresh
        key_resp_14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_14, 'tStartRefresh')  # time at next scr refresh
        key_resp_14.status = STARTED
        # keyboard checking is just starting
        key_resp_14.clock.reset()  # now t=0
        key_resp_14.clearEvents(eventType='keyboard')
    if key_resp_14.status == STARTED:
        theseKeys = key_resp_14.getKeys(keyList=['y', 'n'], waitRelease=False)
        _key_resp_14_allKeys.extend(theseKeys)
        if len(_key_resp_14_allKeys):
            key_resp_14.keys = _key_resp_14_allKeys[-1].name  # just the last key pressed
            key_resp_14.rt = _key_resp_14_allKeys[-1].rt
            # was this correct?
            if (key_resp_14.keys == str('n')) or (key_resp_14.keys == 'n'):
                key_resp_14.corr = 1
            else:
                key_resp_14.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Q14Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Q14"-------
for thisComponent in Q14Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_17.started', text_17.tStartRefresh)
thisExp.addData('text_17.stopped', text_17.tStopRefresh)
# check responses
if key_resp_14.keys in ['', [], None]:  # No response was made
    key_resp_14.keys = None
    # was no response the correct answer?!
    if str('n').lower() == 'none':
       key_resp_14.corr = 1;  # correct non-response
    else:
       key_resp_14.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('key_resp_14.keys',key_resp_14.keys)
thisExp.addData('key_resp_14.corr', key_resp_14.corr)
if key_resp_14.keys != None:  # we had a response
    thisExp.addData('key_resp_14.rt', key_resp_14.rt)
thisExp.nextEntry()
# the Routine "Q14" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Q15"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_15.keys = []
key_resp_15.rt = []
_key_resp_15_allKeys = []
# keep track of which components have finished
Q15Components = [text_18, key_resp_15]
for thisComponent in Q15Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Q15Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Q15"-------
while continueRoutine:
    # get current time
    t = Q15Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Q15Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_18* updates
    if text_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_18.frameNStart = frameN  # exact frame index
        text_18.tStart = t  # local t and not account for scr refresh
        text_18.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_18, 'tStartRefresh')  # time at next scr refresh
        text_18.setAutoDraw(True)
    
    # *key_resp_15* updates
    if key_resp_15.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_15.frameNStart = frameN  # exact frame index
        key_resp_15.tStart = t  # local t and not account for scr refresh
        key_resp_15.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_15, 'tStartRefresh')  # time at next scr refresh
        key_resp_15.status = STARTED
        # keyboard checking is just starting
        key_resp_15.clock.reset()  # now t=0
        key_resp_15.clearEvents(eventType='keyboard')
    if key_resp_15.status == STARTED:
        theseKeys = key_resp_15.getKeys(keyList=['y', 'n'], waitRelease=False)
        _key_resp_15_allKeys.extend(theseKeys)
        if len(_key_resp_15_allKeys):
            key_resp_15.keys = _key_resp_15_allKeys[-1].name  # just the last key pressed
            key_resp_15.rt = _key_resp_15_allKeys[-1].rt
            # was this correct?
            if (key_resp_15.keys == str('n')) or (key_resp_15.keys == 'n'):
                key_resp_15.corr = 1
            else:
                key_resp_15.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Q15Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Q15"-------
for thisComponent in Q15Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_18.started', text_18.tStartRefresh)
thisExp.addData('text_18.stopped', text_18.tStopRefresh)
# check responses
if key_resp_15.keys in ['', [], None]:  # No response was made
    key_resp_15.keys = None
    # was no response the correct answer?!
    if str('n').lower() == 'none':
       key_resp_15.corr = 1;  # correct non-response
    else:
       key_resp_15.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('key_resp_15.keys',key_resp_15.keys)
thisExp.addData('key_resp_15.corr', key_resp_15.corr)
if key_resp_15.keys != None:  # we had a response
    thisExp.addData('key_resp_15.rt', key_resp_15.rt)
thisExp.nextEntry()
# the Routine "Q15" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Q16"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_16.keys = []
key_resp_16.rt = []
_key_resp_16_allKeys = []
# keep track of which components have finished
Q16Components = [text_19, key_resp_16]
for thisComponent in Q16Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Q16Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Q16"-------
while continueRoutine:
    # get current time
    t = Q16Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Q16Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_19* updates
    if text_19.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_19.frameNStart = frameN  # exact frame index
        text_19.tStart = t  # local t and not account for scr refresh
        text_19.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_19, 'tStartRefresh')  # time at next scr refresh
        text_19.setAutoDraw(True)
    
    # *key_resp_16* updates
    if key_resp_16.status == NOT_STARTED and t >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_16.frameNStart = frameN  # exact frame index
        key_resp_16.tStart = t  # local t and not account for scr refresh
        key_resp_16.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_16, 'tStartRefresh')  # time at next scr refresh
        key_resp_16.status = STARTED
        # keyboard checking is just starting
        key_resp_16.clock.reset()  # now t=0
        key_resp_16.clearEvents(eventType='keyboard')
    if key_resp_16.status == STARTED:
        theseKeys = key_resp_16.getKeys(keyList=['y', 'n'], waitRelease=False)
        _key_resp_16_allKeys.extend(theseKeys)
        if len(_key_resp_16_allKeys):
            key_resp_16.keys = _key_resp_16_allKeys[-1].name  # just the last key pressed
            key_resp_16.rt = _key_resp_16_allKeys[-1].rt
            # was this correct?
            if (key_resp_16.keys == str('n')) or (key_resp_16.keys == 'n'):
                key_resp_16.corr = 1
            else:
                key_resp_16.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Q16Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Q16"-------
for thisComponent in Q16Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_19.started', text_19.tStartRefresh)
thisExp.addData('text_19.stopped', text_19.tStopRefresh)
# check responses
if key_resp_16.keys in ['', [], None]:  # No response was made
    key_resp_16.keys = None
    # was no response the correct answer?!
    if str('n').lower() == 'none':
       key_resp_16.corr = 1;  # correct non-response
    else:
       key_resp_16.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('key_resp_16.keys',key_resp_16.keys)
thisExp.addData('key_resp_16.corr', key_resp_16.corr)
if key_resp_16.keys != None:  # we had a response
    thisExp.addData('key_resp_16.rt', key_resp_16.rt)
thisExp.nextEntry()
# the Routine "Q16" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Demo_intro"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_52.keys = []
key_resp_52.rt = []
_key_resp_52_allKeys = []
# keep track of which components have finished
Demo_introComponents = [Demo_Introduction, key_resp_52]
for thisComponent in Demo_introComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Demo_introClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Demo_intro"-------
while continueRoutine:
    # get current time
    t = Demo_introClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Demo_introClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Demo_Introduction* updates
    if Demo_Introduction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Demo_Introduction.frameNStart = frameN  # exact frame index
        Demo_Introduction.tStart = t  # local t and not account for scr refresh
        Demo_Introduction.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Demo_Introduction, 'tStartRefresh')  # time at next scr refresh
        Demo_Introduction.setAutoDraw(True)
    
    # *key_resp_52* updates
    waitOnFlip = False
    if key_resp_52.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_52.frameNStart = frameN  # exact frame index
        key_resp_52.tStart = t  # local t and not account for scr refresh
        key_resp_52.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_52, 'tStartRefresh')  # time at next scr refresh
        key_resp_52.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_52.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_52.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_52.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_52.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_52_allKeys.extend(theseKeys)
        if len(_key_resp_52_allKeys):
            key_resp_52.keys = _key_resp_52_allKeys[-1].name  # just the last key pressed
            key_resp_52.rt = _key_resp_52_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Demo_introComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Demo_intro"-------
for thisComponent in Demo_introComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if key_resp_52.keys in ['', [], None]:  # No response was made
    key_resp_52.keys = None
thisExp.addData('key_resp_52.keys',key_resp_52.keys)
if key_resp_52.keys != None:  # we had a response
    thisExp.addData('key_resp_52.rt', key_resp_52.rt)
thisExp.addData('key_resp_52.started', key_resp_52.tStartRefresh)
thisExp.addData('key_resp_52.stopped', key_resp_52.tStopRefresh)
thisExp.nextEntry()
# the Routine "Demo_intro" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Demo_Q1"-------
continueRoutine = True
# update component parameters for each repeat
textbox_2.reset()
# keep track of which components have finished
Demo_Q1Components = [text_45, textbox_2, button_6]
for thisComponent in Demo_Q1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Demo_Q1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Demo_Q1"-------
while continueRoutine:
    # get current time
    t = Demo_Q1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Demo_Q1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_45* updates
    if text_45.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_45.frameNStart = frameN  # exact frame index
        text_45.tStart = t  # local t and not account for scr refresh
        text_45.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_45, 'tStartRefresh')  # time at next scr refresh
        text_45.setAutoDraw(True)
    
    # *textbox_2* updates
    if textbox_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox_2.frameNStart = frameN  # exact frame index
        textbox_2.tStart = t  # local t and not account for scr refresh
        textbox_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox_2, 'tStartRefresh')  # time at next scr refresh
        textbox_2.setAutoDraw(True)
    
    # *button_6* updates
    if button_6.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        button_6.frameNStart = frameN  # exact frame index
        button_6.tStart = t  # local t and not account for scr refresh
        button_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button_6, 'tStartRefresh')  # time at next scr refresh
        button_6.setAutoDraw(True)
    if button_6.status == STARTED:
        # check whether button_6 has been pressed
        if button_6.isClicked:
            if not button_6.wasClicked:
                button_6.timesOn.append(button_6.buttonClock.getTime()) # store time of first click
                button_6.timesOff.append(button_6.buttonClock.getTime()) # store time clicked until
            else:
                button_6.timesOff[-1] = button_6.buttonClock.getTime() # update time clicked until
            if not button_6.wasClicked:
                continueRoutine = False  # end routine when button_6 is clicked
                None
            button_6.wasClicked = True  # if button_6 is still clicked next frame, it is not a new click
        else:
            button_6.wasClicked = False  # if button_6 is clicked next frame, it is a new click
    else:
        button_6.wasClicked = False  # if button_6 is clicked next frame, it is a new click
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Demo_Q1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Demo_Q1"-------
for thisComponent in Demo_Q1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('textbox_2.text',textbox_2.text)
thisExp.addData('textbox_2.started', textbox_2.tStartRefresh)
thisExp.addData('textbox_2.stopped', textbox_2.tStopRefresh)
thisExp.addData('button_6.numClicks', button_6.numClicks)
if button_6.numClicks:
   thisExp.addData('button_6.timesOn', button_6.timesOn)
   thisExp.addData('button_6.timesOff', button_6.timesOff)
else:
   thisExp.addData('button_6.timesOn', "")
   thisExp.addData('button_6.timesOff', "")
# the Routine "Demo_Q1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Demo_Q2"-------
continueRoutine = True
# update component parameters for each repeat
textbox_3.reset()
# keep track of which components have finished
Demo_Q2Components = [text_46, textbox_3, button_7]
for thisComponent in Demo_Q2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Demo_Q2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Demo_Q2"-------
while continueRoutine:
    # get current time
    t = Demo_Q2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Demo_Q2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_46* updates
    if text_46.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_46.frameNStart = frameN  # exact frame index
        text_46.tStart = t  # local t and not account for scr refresh
        text_46.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_46, 'tStartRefresh')  # time at next scr refresh
        text_46.setAutoDraw(True)
    
    # *textbox_3* updates
    if textbox_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox_3.frameNStart = frameN  # exact frame index
        textbox_3.tStart = t  # local t and not account for scr refresh
        textbox_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox_3, 'tStartRefresh')  # time at next scr refresh
        textbox_3.setAutoDraw(True)
    
    # *button_7* updates
    if button_7.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        button_7.frameNStart = frameN  # exact frame index
        button_7.tStart = t  # local t and not account for scr refresh
        button_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button_7, 'tStartRefresh')  # time at next scr refresh
        button_7.setAutoDraw(True)
    if button_7.status == STARTED:
        # check whether button_7 has been pressed
        if button_7.isClicked:
            if not button_7.wasClicked:
                button_7.timesOn.append(button_7.buttonClock.getTime()) # store time of first click
                button_7.timesOff.append(button_7.buttonClock.getTime()) # store time clicked until
            else:
                button_7.timesOff[-1] = button_7.buttonClock.getTime() # update time clicked until
            if not button_7.wasClicked:
                continueRoutine = False  # end routine when button_7 is clicked
                None
            button_7.wasClicked = True  # if button_7 is still clicked next frame, it is not a new click
        else:
            button_7.wasClicked = False  # if button_7 is clicked next frame, it is a new click
    else:
        button_7.wasClicked = False  # if button_7 is clicked next frame, it is a new click
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Demo_Q2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Demo_Q2"-------
for thisComponent in Demo_Q2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('textbox_3.text',textbox_3.text)
thisExp.addData('textbox_3.started', textbox_3.tStartRefresh)
thisExp.addData('textbox_3.stopped', textbox_3.tStopRefresh)
thisExp.addData('button_7.numClicks', button_7.numClicks)
if button_7.numClicks:
   thisExp.addData('button_7.timesOn', button_7.timesOn)
   thisExp.addData('button_7.timesOff', button_7.timesOff)
else:
   thisExp.addData('button_7.timesOn', "")
   thisExp.addData('button_7.timesOff', "")
# the Routine "Demo_Q2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Demo_Q3"-------
continueRoutine = True
# update component parameters for each repeat
textbox_4.reset()
# keep track of which components have finished
Demo_Q3Components = [text_47, textbox_4, button_8]
for thisComponent in Demo_Q3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Demo_Q3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Demo_Q3"-------
while continueRoutine:
    # get current time
    t = Demo_Q3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Demo_Q3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_47* updates
    if text_47.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_47.frameNStart = frameN  # exact frame index
        text_47.tStart = t  # local t and not account for scr refresh
        text_47.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_47, 'tStartRefresh')  # time at next scr refresh
        text_47.setAutoDraw(True)
    
    # *textbox_4* updates
    if textbox_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox_4.frameNStart = frameN  # exact frame index
        textbox_4.tStart = t  # local t and not account for scr refresh
        textbox_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox_4, 'tStartRefresh')  # time at next scr refresh
        textbox_4.setAutoDraw(True)
    
    # *button_8* updates
    if button_8.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        button_8.frameNStart = frameN  # exact frame index
        button_8.tStart = t  # local t and not account for scr refresh
        button_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button_8, 'tStartRefresh')  # time at next scr refresh
        button_8.setAutoDraw(True)
    if button_8.status == STARTED:
        # check whether button_8 has been pressed
        if button_8.isClicked:
            if not button_8.wasClicked:
                button_8.timesOn.append(button_8.buttonClock.getTime()) # store time of first click
                button_8.timesOff.append(button_8.buttonClock.getTime()) # store time clicked until
            else:
                button_8.timesOff[-1] = button_8.buttonClock.getTime() # update time clicked until
            if not button_8.wasClicked:
                continueRoutine = False  # end routine when button_8 is clicked
                None
            button_8.wasClicked = True  # if button_8 is still clicked next frame, it is not a new click
        else:
            button_8.wasClicked = False  # if button_8 is clicked next frame, it is a new click
    else:
        button_8.wasClicked = False  # if button_8 is clicked next frame, it is a new click
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Demo_Q3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Demo_Q3"-------
for thisComponent in Demo_Q3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('textbox_4.text',textbox_4.text)
thisExp.addData('textbox_4.started', textbox_4.tStartRefresh)
thisExp.addData('textbox_4.stopped', textbox_4.tStopRefresh)
thisExp.addData('button_8.numClicks', button_8.numClicks)
if button_8.numClicks:
   thisExp.addData('button_8.timesOn', button_8.timesOn)
   thisExp.addData('button_8.timesOff', button_8.timesOff)
else:
   thisExp.addData('button_8.timesOn', "")
   thisExp.addData('button_8.timesOff', "")
# the Routine "Demo_Q3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Demo_Q4"-------
continueRoutine = True
# update component parameters for each repeat
textbox_5.reset()
# keep track of which components have finished
Demo_Q4Components = [text_48, textbox_5, button_9]
for thisComponent in Demo_Q4Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Demo_Q4Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Demo_Q4"-------
while continueRoutine:
    # get current time
    t = Demo_Q4Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Demo_Q4Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_48* updates
    if text_48.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_48.frameNStart = frameN  # exact frame index
        text_48.tStart = t  # local t and not account for scr refresh
        text_48.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_48, 'tStartRefresh')  # time at next scr refresh
        text_48.setAutoDraw(True)
    
    # *textbox_5* updates
    if textbox_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox_5.frameNStart = frameN  # exact frame index
        textbox_5.tStart = t  # local t and not account for scr refresh
        textbox_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox_5, 'tStartRefresh')  # time at next scr refresh
        textbox_5.setAutoDraw(True)
    
    # *button_9* updates
    if button_9.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        button_9.frameNStart = frameN  # exact frame index
        button_9.tStart = t  # local t and not account for scr refresh
        button_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button_9, 'tStartRefresh')  # time at next scr refresh
        button_9.setAutoDraw(True)
    if button_9.status == STARTED:
        # check whether button_9 has been pressed
        if button_9.isClicked:
            if not button_9.wasClicked:
                button_9.timesOn.append(button_9.buttonClock.getTime()) # store time of first click
                button_9.timesOff.append(button_9.buttonClock.getTime()) # store time clicked until
            else:
                button_9.timesOff[-1] = button_9.buttonClock.getTime() # update time clicked until
            if not button_9.wasClicked:
                continueRoutine = False  # end routine when button_9 is clicked
                None
            button_9.wasClicked = True  # if button_9 is still clicked next frame, it is not a new click
        else:
            button_9.wasClicked = False  # if button_9 is clicked next frame, it is a new click
    else:
        button_9.wasClicked = False  # if button_9 is clicked next frame, it is a new click
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Demo_Q4Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Demo_Q4"-------
for thisComponent in Demo_Q4Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('textbox_5.text',textbox_5.text)
thisExp.addData('textbox_5.started', textbox_5.tStartRefresh)
thisExp.addData('textbox_5.stopped', textbox_5.tStopRefresh)
thisExp.addData('button_9.numClicks', button_9.numClicks)
if button_9.numClicks:
   thisExp.addData('button_9.timesOn', button_9.timesOn)
   thisExp.addData('button_9.timesOff', button_9.timesOff)
else:
   thisExp.addData('button_9.timesOn', "")
   thisExp.addData('button_9.timesOff', "")
# the Routine "Demo_Q4" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Demo_Q5"-------
continueRoutine = True
# update component parameters for each repeat
textbox_6.reset()
# keep track of which components have finished
Demo_Q5Components = [text_49, textbox_6, button_10]
for thisComponent in Demo_Q5Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Demo_Q5Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Demo_Q5"-------
while continueRoutine:
    # get current time
    t = Demo_Q5Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Demo_Q5Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_49* updates
    if text_49.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_49.frameNStart = frameN  # exact frame index
        text_49.tStart = t  # local t and not account for scr refresh
        text_49.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_49, 'tStartRefresh')  # time at next scr refresh
        text_49.setAutoDraw(True)
    
    # *textbox_6* updates
    if textbox_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox_6.frameNStart = frameN  # exact frame index
        textbox_6.tStart = t  # local t and not account for scr refresh
        textbox_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox_6, 'tStartRefresh')  # time at next scr refresh
        textbox_6.setAutoDraw(True)
    
    # *button_10* updates
    if button_10.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        button_10.frameNStart = frameN  # exact frame index
        button_10.tStart = t  # local t and not account for scr refresh
        button_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button_10, 'tStartRefresh')  # time at next scr refresh
        button_10.setAutoDraw(True)
    if button_10.status == STARTED:
        # check whether button_10 has been pressed
        if button_10.isClicked:
            if not button_10.wasClicked:
                button_10.timesOn.append(button_10.buttonClock.getTime()) # store time of first click
                button_10.timesOff.append(button_10.buttonClock.getTime()) # store time clicked until
            else:
                button_10.timesOff[-1] = button_10.buttonClock.getTime() # update time clicked until
            if not button_10.wasClicked:
                continueRoutine = False  # end routine when button_10 is clicked
                None
            button_10.wasClicked = True  # if button_10 is still clicked next frame, it is not a new click
        else:
            button_10.wasClicked = False  # if button_10 is clicked next frame, it is a new click
    else:
        button_10.wasClicked = False  # if button_10 is clicked next frame, it is a new click
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Demo_Q5Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Demo_Q5"-------
for thisComponent in Demo_Q5Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('textbox_6.text',textbox_6.text)
thisExp.addData('textbox_6.started', textbox_6.tStartRefresh)
thisExp.addData('textbox_6.stopped', textbox_6.tStopRefresh)
thisExp.addData('button_10.numClicks', button_10.numClicks)
if button_10.numClicks:
   thisExp.addData('button_10.timesOn', button_10.timesOn)
   thisExp.addData('button_10.timesOff', button_10.timesOff)
else:
   thisExp.addData('button_10.timesOn', "")
   thisExp.addData('button_10.timesOff', "")
# the Routine "Demo_Q5" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Demo_Q6"-------
continueRoutine = True
# update component parameters for each repeat
textbox_7.reset()
# keep track of which components have finished
Demo_Q6Components = [text_5, textbox_7, button_12]
for thisComponent in Demo_Q6Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Demo_Q6Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Demo_Q6"-------
while continueRoutine:
    # get current time
    t = Demo_Q6Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Demo_Q6Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_5* updates
    if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_5.frameNStart = frameN  # exact frame index
        text_5.tStart = t  # local t and not account for scr refresh
        text_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
        text_5.setAutoDraw(True)
    
    # *textbox_7* updates
    if textbox_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox_7.frameNStart = frameN  # exact frame index
        textbox_7.tStart = t  # local t and not account for scr refresh
        textbox_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox_7, 'tStartRefresh')  # time at next scr refresh
        textbox_7.setAutoDraw(True)
    
    # *button_12* updates
    if button_12.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        button_12.frameNStart = frameN  # exact frame index
        button_12.tStart = t  # local t and not account for scr refresh
        button_12.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button_12, 'tStartRefresh')  # time at next scr refresh
        button_12.setAutoDraw(True)
    if button_12.status == STARTED:
        # check whether button_12 has been pressed
        if button_12.isClicked:
            if not button_12.wasClicked:
                button_12.timesOn.append(button_12.buttonClock.getTime()) # store time of first click
                button_12.timesOff.append(button_12.buttonClock.getTime()) # store time clicked until
            else:
                button_12.timesOff[-1] = button_12.buttonClock.getTime() # update time clicked until
            if not button_12.wasClicked:
                continueRoutine = False  # end routine when button_12 is clicked
                None
            button_12.wasClicked = True  # if button_12 is still clicked next frame, it is not a new click
        else:
            button_12.wasClicked = False  # if button_12 is clicked next frame, it is a new click
    else:
        button_12.wasClicked = False  # if button_12 is clicked next frame, it is a new click
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Demo_Q6Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Demo_Q6"-------
for thisComponent in Demo_Q6Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('textbox_7.text',textbox_7.text)
thisExp.addData('textbox_7.started', textbox_7.tStartRefresh)
thisExp.addData('textbox_7.stopped', textbox_7.tStopRefresh)
thisExp.addData('button_12.numClicks', button_12.numClicks)
if button_12.numClicks:
   thisExp.addData('button_12.timesOn', button_12.timesOn)
   thisExp.addData('button_12.timesOff', button_12.timesOff)
else:
   thisExp.addData('button_12.timesOn', "")
   thisExp.addData('button_12.timesOff', "")
# the Routine "Demo_Q6" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Demo_Q7"-------
continueRoutine = True
# update component parameters for each repeat
textbox_8.reset()
# keep track of which components have finished
Demo_Q7Components = [text_51, textbox_8, button_13]
for thisComponent in Demo_Q7Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Demo_Q7Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Demo_Q7"-------
while continueRoutine:
    # get current time
    t = Demo_Q7Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Demo_Q7Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_51* updates
    if text_51.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_51.frameNStart = frameN  # exact frame index
        text_51.tStart = t  # local t and not account for scr refresh
        text_51.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_51, 'tStartRefresh')  # time at next scr refresh
        text_51.setAutoDraw(True)
    
    # *textbox_8* updates
    if textbox_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox_8.frameNStart = frameN  # exact frame index
        textbox_8.tStart = t  # local t and not account for scr refresh
        textbox_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox_8, 'tStartRefresh')  # time at next scr refresh
        textbox_8.setAutoDraw(True)
    
    # *button_13* updates
    if button_13.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        button_13.frameNStart = frameN  # exact frame index
        button_13.tStart = t  # local t and not account for scr refresh
        button_13.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button_13, 'tStartRefresh')  # time at next scr refresh
        button_13.setAutoDraw(True)
    if button_13.status == STARTED:
        # check whether button_13 has been pressed
        if button_13.isClicked:
            if not button_13.wasClicked:
                button_13.timesOn.append(button_13.buttonClock.getTime()) # store time of first click
                button_13.timesOff.append(button_13.buttonClock.getTime()) # store time clicked until
            else:
                button_13.timesOff[-1] = button_13.buttonClock.getTime() # update time clicked until
            if not button_13.wasClicked:
                continueRoutine = False  # end routine when button_13 is clicked
                None
            button_13.wasClicked = True  # if button_13 is still clicked next frame, it is not a new click
        else:
            button_13.wasClicked = False  # if button_13 is clicked next frame, it is a new click
    else:
        button_13.wasClicked = False  # if button_13 is clicked next frame, it is a new click
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Demo_Q7Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Demo_Q7"-------
for thisComponent in Demo_Q7Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_51.started', text_51.tStartRefresh)
thisExp.addData('text_51.stopped', text_51.tStopRefresh)
thisExp.addData('textbox_8.text',textbox_8.text)
thisExp.addData('textbox_8.started', textbox_8.tStartRefresh)
thisExp.addData('textbox_8.stopped', textbox_8.tStopRefresh)
thisExp.addData('button_13.numClicks', button_13.numClicks)
if button_13.numClicks:
   thisExp.addData('button_13.timesOn', button_13.timesOn)
   thisExp.addData('button_13.timesOff', button_13.timesOff)
else:
   thisExp.addData('button_13.timesOn', "")
   thisExp.addData('button_13.timesOff', "")
# the Routine "Demo_Q7" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Demo_Q8"-------
continueRoutine = True
# update component parameters for each repeat
textbox_9.reset()
# keep track of which components have finished
Demo_Q8Components = [text_52, textbox_9, button_14]
for thisComponent in Demo_Q8Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Demo_Q8Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Demo_Q8"-------
while continueRoutine:
    # get current time
    t = Demo_Q8Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Demo_Q8Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_52* updates
    if text_52.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_52.frameNStart = frameN  # exact frame index
        text_52.tStart = t  # local t and not account for scr refresh
        text_52.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_52, 'tStartRefresh')  # time at next scr refresh
        text_52.setAutoDraw(True)
    
    # *textbox_9* updates
    if textbox_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox_9.frameNStart = frameN  # exact frame index
        textbox_9.tStart = t  # local t and not account for scr refresh
        textbox_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox_9, 'tStartRefresh')  # time at next scr refresh
        textbox_9.setAutoDraw(True)
    
    # *button_14* updates
    if button_14.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        button_14.frameNStart = frameN  # exact frame index
        button_14.tStart = t  # local t and not account for scr refresh
        button_14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button_14, 'tStartRefresh')  # time at next scr refresh
        button_14.setAutoDraw(True)
    if button_14.status == STARTED:
        # check whether button_14 has been pressed
        if button_14.isClicked:
            if not button_14.wasClicked:
                button_14.timesOn.append(button_14.buttonClock.getTime()) # store time of first click
                button_14.timesOff.append(button_14.buttonClock.getTime()) # store time clicked until
            else:
                button_14.timesOff[-1] = button_14.buttonClock.getTime() # update time clicked until
            if not button_14.wasClicked:
                continueRoutine = False  # end routine when button_14 is clicked
                None
            button_14.wasClicked = True  # if button_14 is still clicked next frame, it is not a new click
        else:
            button_14.wasClicked = False  # if button_14 is clicked next frame, it is a new click
    else:
        button_14.wasClicked = False  # if button_14 is clicked next frame, it is a new click
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Demo_Q8Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Demo_Q8"-------
for thisComponent in Demo_Q8Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_52.started', text_52.tStartRefresh)
thisExp.addData('text_52.stopped', text_52.tStopRefresh)
thisExp.addData('textbox_9.text',textbox_9.text)
thisExp.addData('textbox_9.started', textbox_9.tStartRefresh)
thisExp.addData('textbox_9.stopped', textbox_9.tStopRefresh)
thisExp.addData('button_14.numClicks', button_14.numClicks)
if button_14.numClicks:
   thisExp.addData('button_14.timesOn', button_14.timesOn)
   thisExp.addData('button_14.timesOff', button_14.timesOff)
else:
   thisExp.addData('button_14.timesOn', "")
   thisExp.addData('button_14.timesOff', "")
# the Routine "Demo_Q8" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Demo_Q10"-------
continueRoutine = True
# update component parameters for each repeat
textbox_11.reset()
# keep track of which components have finished
Demo_Q10Components = [text_54, textbox_11, button_16]
for thisComponent in Demo_Q10Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Demo_Q10Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Demo_Q10"-------
while continueRoutine:
    # get current time
    t = Demo_Q10Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Demo_Q10Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_54* updates
    if text_54.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_54.frameNStart = frameN  # exact frame index
        text_54.tStart = t  # local t and not account for scr refresh
        text_54.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_54, 'tStartRefresh')  # time at next scr refresh
        text_54.setAutoDraw(True)
    
    # *textbox_11* updates
    if textbox_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox_11.frameNStart = frameN  # exact frame index
        textbox_11.tStart = t  # local t and not account for scr refresh
        textbox_11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox_11, 'tStartRefresh')  # time at next scr refresh
        textbox_11.setAutoDraw(True)
    
    # *button_16* updates
    if button_16.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        button_16.frameNStart = frameN  # exact frame index
        button_16.tStart = t  # local t and not account for scr refresh
        button_16.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button_16, 'tStartRefresh')  # time at next scr refresh
        button_16.setAutoDraw(True)
    if button_16.status == STARTED:
        # check whether button_16 has been pressed
        if button_16.isClicked:
            if not button_16.wasClicked:
                button_16.timesOn.append(button_16.buttonClock.getTime()) # store time of first click
                button_16.timesOff.append(button_16.buttonClock.getTime()) # store time clicked until
            else:
                button_16.timesOff[-1] = button_16.buttonClock.getTime() # update time clicked until
            if not button_16.wasClicked:
                continueRoutine = False  # end routine when button_16 is clicked
                None
            button_16.wasClicked = True  # if button_16 is still clicked next frame, it is not a new click
        else:
            button_16.wasClicked = False  # if button_16 is clicked next frame, it is a new click
    else:
        button_16.wasClicked = False  # if button_16 is clicked next frame, it is a new click
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Demo_Q10Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Demo_Q10"-------
for thisComponent in Demo_Q10Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_54.started', text_54.tStartRefresh)
thisExp.addData('text_54.stopped', text_54.tStopRefresh)
thisExp.addData('textbox_11.text',textbox_11.text)
thisExp.addData('textbox_11.started', textbox_11.tStartRefresh)
thisExp.addData('textbox_11.stopped', textbox_11.tStopRefresh)
thisExp.addData('button_16.numClicks', button_16.numClicks)
if button_16.numClicks:
   thisExp.addData('button_16.timesOn', button_16.timesOn)
   thisExp.addData('button_16.timesOff', button_16.timesOff)
else:
   thisExp.addData('button_16.timesOn', "")
   thisExp.addData('button_16.timesOff', "")
# the Routine "Demo_Q10" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Demo_Q11"-------
continueRoutine = True
# update component parameters for each repeat
textbox_12.reset()
# keep track of which components have finished
Demo_Q11Components = [text_55, textbox_12, button_17]
for thisComponent in Demo_Q11Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Demo_Q11Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Demo_Q11"-------
while continueRoutine:
    # get current time
    t = Demo_Q11Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Demo_Q11Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_55* updates
    if text_55.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_55.frameNStart = frameN  # exact frame index
        text_55.tStart = t  # local t and not account for scr refresh
        text_55.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_55, 'tStartRefresh')  # time at next scr refresh
        text_55.setAutoDraw(True)
    
    # *textbox_12* updates
    if textbox_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox_12.frameNStart = frameN  # exact frame index
        textbox_12.tStart = t  # local t and not account for scr refresh
        textbox_12.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox_12, 'tStartRefresh')  # time at next scr refresh
        textbox_12.setAutoDraw(True)
    
    # *button_17* updates
    if button_17.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        button_17.frameNStart = frameN  # exact frame index
        button_17.tStart = t  # local t and not account for scr refresh
        button_17.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button_17, 'tStartRefresh')  # time at next scr refresh
        button_17.setAutoDraw(True)
    if button_17.status == STARTED:
        # check whether button_17 has been pressed
        if button_17.isClicked:
            if not button_17.wasClicked:
                button_17.timesOn.append(button_17.buttonClock.getTime()) # store time of first click
                button_17.timesOff.append(button_17.buttonClock.getTime()) # store time clicked until
            else:
                button_17.timesOff[-1] = button_17.buttonClock.getTime() # update time clicked until
            if not button_17.wasClicked:
                continueRoutine = False  # end routine when button_17 is clicked
                None
            button_17.wasClicked = True  # if button_17 is still clicked next frame, it is not a new click
        else:
            button_17.wasClicked = False  # if button_17 is clicked next frame, it is a new click
    else:
        button_17.wasClicked = False  # if button_17 is clicked next frame, it is a new click
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Demo_Q11Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Demo_Q11"-------
for thisComponent in Demo_Q11Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_55.started', text_55.tStartRefresh)
thisExp.addData('text_55.stopped', text_55.tStopRefresh)
thisExp.addData('textbox_12.text',textbox_12.text)
thisExp.addData('textbox_12.started', textbox_12.tStartRefresh)
thisExp.addData('textbox_12.stopped', textbox_12.tStopRefresh)
thisExp.addData('button_17.numClicks', button_17.numClicks)
if button_17.numClicks:
   thisExp.addData('button_17.timesOn', button_17.timesOn)
   thisExp.addData('button_17.timesOff', button_17.timesOff)
else:
   thisExp.addData('button_17.timesOn', "")
   thisExp.addData('button_17.timesOff', "")
# the Routine "Demo_Q11" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Demo_Q12"-------
continueRoutine = True
# update component parameters for each repeat
textbox.reset()
# keep track of which components have finished
Demo_Q12Components = [text_44, textbox, button_5]
for thisComponent in Demo_Q12Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Demo_Q12Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Demo_Q12"-------
while continueRoutine:
    # get current time
    t = Demo_Q12Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Demo_Q12Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_44* updates
    if text_44.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_44.frameNStart = frameN  # exact frame index
        text_44.tStart = t  # local t and not account for scr refresh
        text_44.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_44, 'tStartRefresh')  # time at next scr refresh
        text_44.setAutoDraw(True)
    
    # *textbox* updates
    if textbox.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox.frameNStart = frameN  # exact frame index
        textbox.tStart = t  # local t and not account for scr refresh
        textbox.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox, 'tStartRefresh')  # time at next scr refresh
        textbox.setAutoDraw(True)
    
    # *button_5* updates
    if button_5.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        button_5.frameNStart = frameN  # exact frame index
        button_5.tStart = t  # local t and not account for scr refresh
        button_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button_5, 'tStartRefresh')  # time at next scr refresh
        button_5.setAutoDraw(True)
    if button_5.status == STARTED:
        # check whether button_5 has been pressed
        if button_5.isClicked:
            if not button_5.wasClicked:
                button_5.timesOn.append(button_5.buttonClock.getTime()) # store time of first click
                button_5.timesOff.append(button_5.buttonClock.getTime()) # store time clicked until
            else:
                button_5.timesOff[-1] = button_5.buttonClock.getTime() # update time clicked until
            if not button_5.wasClicked:
                continueRoutine = False  # end routine when button_5 is clicked
                None
            button_5.wasClicked = True  # if button_5 is still clicked next frame, it is not a new click
        else:
            button_5.wasClicked = False  # if button_5 is clicked next frame, it is a new click
    else:
        button_5.wasClicked = False  # if button_5 is clicked next frame, it is a new click
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Demo_Q12Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Demo_Q12"-------
for thisComponent in Demo_Q12Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_44.started', text_44.tStartRefresh)
thisExp.addData('text_44.stopped', text_44.tStopRefresh)
thisExp.addData('textbox.text',textbox.text)
thisExp.addData('textbox.started', textbox.tStartRefresh)
thisExp.addData('textbox.stopped', textbox.tStopRefresh)
thisExp.addData('button_5.numClicks', button_5.numClicks)
if button_5.numClicks:
   thisExp.addData('button_5.timesOn', button_5.timesOn[0])
   thisExp.addData('button_5.timesOff', button_5.timesOff[0])
else:
   thisExp.addData('button_5.timesOn', "")
   thisExp.addData('button_5.timesOff', "")
# the Routine "Demo_Q12" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Feedback"-------
continueRoutine = True
# update component parameters for each repeat
textbox_13.reset()
# keep track of which components have finished
FeedbackComponents = [text_57, textbox_13, button_11]
for thisComponent in FeedbackComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
FeedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Feedback"-------
while continueRoutine:
    # get current time
    t = FeedbackClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=FeedbackClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_57* updates
    if text_57.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_57.frameNStart = frameN  # exact frame index
        text_57.tStart = t  # local t and not account for scr refresh
        text_57.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_57, 'tStartRefresh')  # time at next scr refresh
        text_57.setAutoDraw(True)
    
    # *textbox_13* updates
    if textbox_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textbox_13.frameNStart = frameN  # exact frame index
        textbox_13.tStart = t  # local t and not account for scr refresh
        textbox_13.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textbox_13, 'tStartRefresh')  # time at next scr refresh
        textbox_13.setAutoDraw(True)
    
    # *button_11* updates
    if button_11.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        button_11.frameNStart = frameN  # exact frame index
        button_11.tStart = t  # local t and not account for scr refresh
        button_11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(button_11, 'tStartRefresh')  # time at next scr refresh
        button_11.setAutoDraw(True)
    if button_11.status == STARTED:
        # check whether button_11 has been pressed
        if button_11.isClicked:
            if not button_11.wasClicked:
                button_11.timesOn.append(button_11.buttonClock.getTime()) # store time of first click
                button_11.timesOff.append(button_11.buttonClock.getTime()) # store time clicked until
            else:
                button_11.timesOff[-1] = button_11.buttonClock.getTime() # update time clicked until
            if not button_11.wasClicked:
                continueRoutine = False  # end routine when button_11 is clicked
                None
            button_11.wasClicked = True  # if button_11 is still clicked next frame, it is not a new click
        else:
            button_11.wasClicked = False  # if button_11 is clicked next frame, it is a new click
    else:
        button_11.wasClicked = False  # if button_11 is clicked next frame, it is a new click
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in FeedbackComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Feedback"-------
for thisComponent in FeedbackComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_57.started', text_57.tStartRefresh)
thisExp.addData('text_57.stopped', text_57.tStopRefresh)
thisExp.addData('textbox_13.text',textbox_13.text)
thisExp.addData('textbox_13.started', textbox_13.tStartRefresh)
thisExp.addData('textbox_13.stopped', textbox_13.tStopRefresh)
thisExp.addData('button_11.numClicks', button_11.numClicks)
if button_11.numClicks:
   thisExp.addData('button_11.timesOn', button_11.timesOn)
   thisExp.addData('button_11.timesOff', button_11.timesOff)
else:
   thisExp.addData('button_11.timesOn', "")
   thisExp.addData('button_11.timesOff', "")
# the Routine "Feedback" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Thanks"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
ThanksComponents = [text_9, Exit_button]
for thisComponent in ThanksComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
ThanksClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Thanks"-------
while continueRoutine:
    # get current time
    t = ThanksClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=ThanksClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_9* updates
    if text_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_9.frameNStart = frameN  # exact frame index
        text_9.tStart = t  # local t and not account for scr refresh
        text_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_9, 'tStartRefresh')  # time at next scr refresh
        text_9.setAutoDraw(True)
    
    # *Exit_button* updates
    if Exit_button.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        Exit_button.frameNStart = frameN  # exact frame index
        Exit_button.tStart = t  # local t and not account for scr refresh
        Exit_button.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Exit_button, 'tStartRefresh')  # time at next scr refresh
        Exit_button.setAutoDraw(True)
    if Exit_button.status == STARTED:
        # check whether Exit_button has been pressed
        if Exit_button.isClicked:
            if not Exit_button.wasClicked:
                Exit_button.timesOn.append(Exit_button.buttonClock.getTime()) # store time of first click
                Exit_button.timesOff.append(Exit_button.buttonClock.getTime()) # store time clicked until
            else:
                Exit_button.timesOff[-1] = Exit_button.buttonClock.getTime() # update time clicked until
            if not Exit_button.wasClicked:
                continueRoutine = False  # end routine when Exit_button is clicked
                None
            Exit_button.wasClicked = True  # if Exit_button is still clicked next frame, it is not a new click
        else:
            Exit_button.wasClicked = False  # if Exit_button is clicked next frame, it is a new click
    else:
        Exit_button.wasClicked = False  # if Exit_button is clicked next frame, it is a new click
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ThanksComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Thanks"-------
for thisComponent in ThanksComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_9.started', text_9.tStartRefresh)
thisExp.addData('text_9.stopped', text_9.tStopRefresh)
thisExp.addData('Exit_button.started', Exit_button.tStartRefresh)
thisExp.addData('Exit_button.stopped', Exit_button.tStopRefresh)
thisExp.addData('Exit_button.numClicks', Exit_button.numClicks)
if Exit_button.numClicks:
   thisExp.addData('Exit_button.timesOn', Exit_button.timesOn)
   thisExp.addData('Exit_button.timesOff', Exit_button.timesOff)
else:
   thisExp.addData('Exit_button.timesOn', "")
   thisExp.addData('Exit_button.timesOff', "")
# the Routine "Thanks" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
