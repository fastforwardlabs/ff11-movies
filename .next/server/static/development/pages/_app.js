module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/corpora.js":
/*!*************************!*\
  !*** ./data/corpora.js ***!
  \*************************/
/*! exports provided: nouns, adjectives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nouns", function() { return nouns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjectives", function() { return adjectives; });
var nouns = ['abbey', 'absence', 'absorption', 'abstinence', 'absurdity', 'abundance', 'acceptance', 'accessibility', 'accommodation', 'accomplice', 'accountability', 'accounting', 'accreditation', 'accuracy', 'acquiescence', 'acreage', 'actress', 'actuality', 'adage', 'adaptation', 'adherence', 'adjustment', 'advancement', 'advert', 'advertisement', 'advertising', 'advice', 'aesthetics', 'affinity', 'aggression', 'agriculture', 'aircraft', 'airtime', 'allegiance', 'allegory', 'allergy', 'allies', 'alligator', 'allocation', 'allotment', 'ammonia', 'anatomy', 'anemia', 'ankle', 'announcement', 'annoyance', 'annuity', 'anomaly', 'anthropology', 'anxiety', 'apologise', 'apostle', 'apparatus', 'appeasement', 'appellation', 'appendix', 'applause', 'appointment', 'appraisal', 'archery', 'archipelago', 'architecture', 'ardor', 'arrears', 'arrow', 'artisan', 'artistry', 'ascent', 'assembly', 'assignment', 'association', 'asthma', 'atheism', 'attacker', 'attraction', 'attractiveness', 'auspices', 'authority', 'avarice', 'aversion', 'aviation', 'babbling', 'backlash', 'baker', 'ballet', 'banjo', 'baron', 'barrier', 'barrister', 'bases', 'basin', 'basis', 'battery', 'battling', 'bedtime', 'beginner', 'begun', 'bending', 'bicycle', 'billing', 'bingo', 'biography', 'biology', 'birthplace', 'blackberry', 'blather', 'blossom', 'boardroom', 'boasting', 'bodyguard', 'boldness', 'bonding', 'bones', 'bonus', 'bookmark', 'boomer', 'booty', 'bounds', 'bowling', 'brainstorming', 'breadth', 'breaker', 'brewer', 'brightness', 'broccoli', 'broth', 'brotherhood', 'browsing', 'brunch', 'brunt', 'building', 'bullion', 'bureaucracy', 'burglary', 'buyout', 'cabal', 'cabbage', 'calamity', 'campaign', 'canonization', 'captaincy', 'carcass', 'carrier', 'cartridge', 'cassette', 'catfish', 'caught', 'celebrity', 'cemetery', 'certainty', 'certification', 'charade', 'chasm', 'cheerleader', 'cheesecake', 'chili', 'china', 'chivalry', 'cholera', 'cilantro', 'circus', 'civilisation', 'civility', 'clearance', 'clearing', 'clerk', 'climber', 'closeness', 'clothing', 'clutches', 'coaster', 'coconut', 'coding', 'colleague', 'college', 'collision', 'colors', 'combustion', 'comedian', 'comer', 'commander', 'commemoration', 'commenter', 'commissioner', 'commune', 'competition', 'completeness', 'complexity', 'computing', 'comrade', 'concur', 'condominium', 'conduit', 'confidant', 'configuration', 'confiscation', 'conflagration', 'conflict', 'consist', 'consistency', 'consolidation', 'conspiracy', 'constable', 'consul', 'consultancy', 'contentment', 'contents', 'contractor', 'conversation', 'cornerstone', 'corpus', 'correlation', 'councilman', 'counselor', 'countdown', 'countryman', 'coverage', 'covering', 'coyote', 'cracker', 'creator', 'criminality', 'crocodile', 'cropping', 'cross-examination', 'crossover', 'crossroads', 'culprit', 'cumin', 'curator', 'curfew', 'cursor', 'custard', 'cutter', 'cyclist', 'cyclone', 'cylinder', 'cynicism', 'darkness', 'dawning', 'daybreak', 'dealing', 'dedication', 'deduction', 'defection', 'deference', 'deficiency', 'definition', 'deflation', 'degeneration', 'delegation', 'delicacy', 'delirium', 'deliverance', 'demeanor', 'demon', 'demonstration', 'denomination', 'dentist', 'departure', 'depletion', 'designation', 'detention', 'developer', 'devolution', 'dexterity', 'diagnosis', 'dialect', 'differentiation', 'digger', 'digress', 'dioxide', 'diploma', 'disability', 'disarmament', 'discord', 'discovery', 'dishonesty', 'dismissal', 'disobedience', 'dispatcher', 'disservice', 'distribution', 'distributor', 'diver', 'docking', 'dollar', 'dominion', 'donkey', 'doorstep', 'doorway', 'dossier', 'downside', 'drafting', 'drank', 'drilling', 'driver', 'drumming', 'drunkenness', 'duchess', 'ducking', 'dugout', 'dumps', 'dwelling', 'dynamics', 'eagerness', 'earnestness', 'earnings', 'eater', 'editor', 'effectiveness', 'electricity', 'elements', 'eloquence', 'embodiment', 'embroidery', 'emperor', 'employment', 'encampment', 'enclosure', 'encouragement', 'endangerment', 'enlightenment', 'enthusiasm', 'environment', 'environs', 'envoy', 'epilepsy', 'equation', 'equator', 'error', 'espionage', 'estimation', 'evacuation', 'exaggeration', 'examination', 'exclamation', 'expediency', 'exploitation', 'extinction', 'eyewitness', 'falls', 'fascism', 'fastball', 'feedback', 'ferocity', 'finale', 'firing', 'fixing', 'flashing', 'flask', 'flora', 'fluke', 'folklore', 'follower', 'foothold', 'footing', 'forefinger', 'forefront', 'forgiveness', 'formality', 'formation', 'formula', 'foyer', 'fragmentation', 'framework', 'fraud', 'freestyle', 'frequency', 'friendliness', 'fries', 'frigate', 'fulfillment', 'function', 'functionality', 'fundraiser', 'fusion', 'futility', 'gallantry', 'gallery', 'genesis', 'genitals', 'girlfriend', 'glamour', 'glitter', 'glucose', 'google', 'grandeur', 'grappling', 'greens', 'gridlock', 'grocer', 'groundwork', 'grouping', 'gunman', 'gusto', 'habitation', 'hacker', 'hallway', 'hamburger', 'hammock', 'handling', 'hands', 'handshake', 'happiness', 'hardship', 'headcount', 'header', 'headquarters', 'heads', 'headset', 'hearth', 'hearts', 'heath', 'hegemony', 'height', 'hello', 'helper', 'helping', 'helplessness', 'hierarchy', 'hoarding', 'hockey', 'homeland', 'homer', 'honesty', 'horror', 'horseman', 'hostility', 'housing', 'humility', 'hurricane', 'iceberg', 'ignition', 'illness', 'illustration', 'illustrator', 'immunity', 'immunization', 'imperialism', 'inaccuracy', 'inaction', 'inactivity', 'inauguration', 'indecency', 'indicator', 'inevitability', 'infamy', 'infiltration', 'influx', 'iniquity', 'innocence', 'innovation', 'insanity', 'inspiration', 'instruction', 'instructor', 'insurer', 'interact', 'intercession', 'intercourse', 'intermission', 'interpretation', 'intersection', 'interval', 'intolerance', 'intruder', 'invasion', 'investment', 'involvement', 'irrigation', 'iteration', 'jenny', 'jogging', 'jones', 'joseph', 'juggernaut', 'juncture', 'jurisprudence', 'juror', 'kangaroo', 'kingdom', 'knocking', 'laborer', 'larceny', 'laurels', 'layout', 'leadership', 'leasing', 'legislation', 'leopard', 'liberation', 'licence', 'lifeblood', 'lifeline', 'ligament', 'lighting', 'likeness', 'lineage', 'liner', 'lineup', 'liquidation', 'listener', 'literature', 'litigation', 'litre', 'loathing', 'locality', 'lodging', 'logic', 'longevity', 'lookout', 'lordship', 'lustre', "ma'am", 'machinery', 'madness', 'magnificence', 'mahogany', 'mailing', 'mainframe', 'maintenance', 'majority', 'manga', 'mango', 'manifesto', 'mantra', 'manufacturer', 'maple', 'martin', 'martyrdom', 'mathematician', 'matrix', 'matron', 'mayhem', 'mayor', 'means', 'meantime', 'measurement', 'mechanics', 'mediator', 'medics', 'melodrama', 'memory', 'mentality', 'metaphysics', 'method', 'metre', 'miner', 'mirth', 'misconception', 'misery', 'mishap', 'misunderstanding', 'mobility', 'molasses', 'momentum', 'monarchy', 'monument', 'morale', 'mortality', 'motto', 'mouthful', 'mouthpiece', 'mover', 'movie', 'mowing', 'murderer', 'musician', 'mutation', 'mythology', 'narration', 'narrator', 'nationality', 'negligence', 'neighborhood', 'neighbour', 'nervousness', 'networking', 'nexus', 'nightmare', 'nobility', 'nobody', 'noodle', 'normalcy', 'notification', 'nourishment', 'novella', 'nucleus', 'nuisance', 'nursery', 'nutrition', 'nylon', 'oasis', 'obscenity', 'obscurity', 'observer', 'offense', 'onslaught', 'operation', 'opportunity', 'opposition', 'oracle', 'orchestra', 'organisation', 'organizer', 'orientation', 'originality', 'ounce', 'outage', 'outcome', 'outdoors', 'outfield', 'outing', 'outpost', 'outset', 'overseer', 'owner', 'oxygen', 'pairing', 'panther', 'paradox', 'parliament', 'parsley', 'parson', 'passenger', 'pasta', 'patchwork', 'pathos', 'patriotism', 'pendulum', 'penguin', 'permission', 'persona', 'perusal', 'pessimism', 'peter', 'philosopher', 'phosphorus', 'phrasing', 'physique', 'piles', 'plateau', 'playing', 'plaza', 'plethora', 'plurality', 'pneumonia', 'pointer', 'poker', 'policeman', 'polling', 'poster', 'posterity', 'posting', 'postponement', 'potassium', 'pottery', 'poultry', 'pounding', 'pragmatism', 'precedence', 'precinct', 'preoccupation', 'pretense', 'priesthood', 'privacy', 'probation', 'proceeding', 'proceedings', 'processing', 'processor', 'progression', 'projection', 'prominence', 'propensity', 'prophecy', 'prorogation', 'prospectus', 'protein', 'prototype', 'providence', 'provider', 'provocation', 'proximity', 'puberty', 'publicist', 'publicity', 'publisher', 'pundit', 'putting', 'quantity', 'quart', 'quilting', 'quorum', 'radiance', 'ralph', 'rancher', 'ranger', 'rapidity', 'rapport', 'ratification', 'rationality', 'reaction', 'reader', 'reassurance', 'rebirth', 'receptor', 'recipe', 'recognition', 'recourse', 'recreation', 'rector', 'recurrence', 'redemption', 'redistribution', 'redundancy', 'refinery', 'reformer', 'refrigerator', 'regularity', 'regulator', 'reinforcement', 'reins', 'reinstatement', 'relativism', 'relaxation', 'rendition', 'repayment', 'repentance', 'repertoire', 'repository', 'republic', 'reputation', 'resentment', 'residency', 'resignation', 'restaurant', 'resurgence', 'retailer', 'retention', 'retirement', 'reviewer', 'riches', 'righteousness', 'roadblock', 'robber', 'rocks', 'rubbing', 'runoff', 'saloon', 'salvation', 'sarcasm', 'saucer', 'savior', 'scarcity', 'scenario', 'scenery', 'schism', 'scholarship', 'schoolboy', 'schooner', 'scissors', 'scolding', 'scooter', 'scouring', 'scrimmage', 'scrum', 'seating', 'sediment', 'seeder', 'seizure', 'self-confidence', 'self-control', 'self-respect', 'semicolon', 'semiconductor', 'semifinal', 'senator', 'sending', 'serenity', 'seriousness', 'servitude', 'sesame', 'setup', 'sewing', 'sharpness', 'shaving', 'shoplifting', 'shopping', 'siding', 'simplicity', 'simulation', 'sinking', 'skate', 'sloth', 'slugger', 'snack', 'snail', 'snapshot', 'snark', 'soccer', 'solemnity', 'solicitation', 'solitude', 'somewhere', 'sophistication', 'sorcery', 'souvenir', 'spaghetti', 'specification', 'specimen', 'specs', 'spectacle', 'spectre', 'speculation', 'sperm', 'spoiler', 'squad', 'squid', 'staging', 'stagnation', 'staircase', 'stairway', 'stamina', 'standpoint', 'standstill', 'stanza', 'statement', 'stillness', 'stimulus', 'stocks', 'stole', 'stoppage', 'storey', 'storyteller', 'stylus', 'subcommittee', 'subscription', 'subsidy', 'suburb', 'success', 'supposition', 'suspension', 'sweater', 'sweepstakes', 'swimmer', 'syndrome', 'synopsis', 'syntax', 'system', 'tablespoon', 'taker', 'tavern', 'technology', 'telephony', 'template', 'tempo', 'tendency', 'tendon', 'terrier', 'terror', 'terry', 'theater', 'theology', 'therapy', 'thicket', 'thoroughfare', 'threshold', 'thriller', 'thunderstorm', 'ticker', 'tiger', 'tights', 'to-day', 'tossing', 'touchdown', 'tourist', 'tourney', 'toxicity', 'tracing', 'tractor', 'translation', 'transmission', 'transmitter', 'trauma', 'traveler', 'treadmill', 'trilogy', 'trout', 'tuning', 'twenties', 'tycoon', 'tyrant', 'ultimatum', 'underdog', 'unhappiness', 'unification', 'university', 'uprising', 'vaccination', 'validity', 'vampire', 'vanguard', 'variation', 'vegetation', 'verification', 'viability', 'vicinity', 'victory', 'viewpoint', 'villa', 'vindication', 'violation', 'vista', 'vocalist', 'vogue', 'volcano', 'voltage', 'vomiting', 'vulnerability', 'waistcoat', 'waitress', 'wardrobe', 'warmth', 'watchdog', 'wealth', 'weariness', 'whereabouts', 'whisky', 'whiteness', 'widget', 'width', 'windfall', 'wiring', 'witchcraft', 'withholding', 'words', 'workman', 'youngster'];
var adjectives = ['Aristotelian', 'Arthurian', 'Bohemian', 'Brethren', 'Mosaic', 'Oceanic', 'Terran', 'Tudor', 'abroad', 'absorbing', 'abstract', 'academic', 'accelerated', 'accented', 'accountant', 'acquainted', 'acute', 'addicting', 'addictive', 'adjustable', 'admired', 'adult', 'adverse', 'advised', 'aerosol', 'afraid', 'aggravated', 'aggressive', 'agreeable', 'alienate', 'aligned', 'almond', 'alright', 'altruistic', 'ambient', 'ambivalent', 'amiable', 'amino', 'amorphous', 'amused', 'anatomical', 'ancestral', 'angelic', 'angrier', 'answerable', 'antiquarian', 'antiretroviral', 'appellate', 'applicable', 'apportioned', 'approachable', 'appropriated', 'archer', 'arrested', 'assertive', 'assigned', 'athletic', 'atrocious', 'attained', 'authoritarian', 'autobiographical', 'avaricious', 'avocado', 'awake', 'awsome', 'backstage', 'backwoods', 'balding', 'bandaged', 'banded', 'banned', 'barreled', 'battle', 'beaten', 'begotten', 'beguiled', 'bellied', 'belted', 'beneficent', 'besieged', 'betting', 'big-money', 'biggest', 'biochemical', 'blame', 'blessed', 'blindfolded', 'bloat', 'blocked', 'blooded', 'blue-collar', 'blushing', 'boastful', 'bolder', 'bolstered', 'bonnie', 'bored', 'boundary', 'bounded', 'bounding', 'branched', 'brawling', 'brazen', 'bridged', 'brimming', 'brimstone', 'broadest', 'broiled', 'broker', 'bronze', 'bruising', 'buffy', 'bullied', 'bungling', 'burial', 'buttery', 'candied', 'canonical', 'cantankerous', 'cardinal', 'carefree', 'caretaker', 'casual', 'cathartic', 'causal', 'chapel', 'characterized', 'charcoal', 'cheeky', 'cherished', 'chipotle', 'chirping', 'chivalrous', 'circumstantial', 'civic', 'civil', 'civilised', 'clanking', 'clapping', 'claptrap', 'classless', 'cleansed', 'cleric', 'cloistered', 'codified', 'colloquial', 'colour', 'combat', 'combined', 'comely', 'commissioned', 'commonplace', 'commuter', 'commuting', 'comparable', 'complementary', 'compromising', 'conceding', 'concentrated', 'conceptual', 'conditioned', 'confederate', 'confident', 'confidential', 'confining', 'confuse', 'congressional', 'consequential', 'conservative', 'constituent', 'contaminated', 'contemporaneous', 'contraceptive', 'convertible', 'convex', 'cooked', 'coronary', 'corporatist', 'correlated', 'corroborated', 'cosmic', 'cover', 'crash', 'crypto', 'culminate', 'cushioned', 'dandy', 'dashing', 'dazzled', 'decreased', 'decrepit', 'dedicated', 'defaced', 'defective', 'defenseless', 'deluded', 'deodorant', 'departed', 'depress', 'designing', 'despairing', 'destitute', 'detective', 'determined', 'devastating', 'deviant', 'devilish', 'devoted', 'diagonal', 'dictated', 'didactic', 'differentiated', 'diffused', 'dirtier', 'disabling', 'disconnected', 'discovered', 'disdainful', 'diseased', 'disfigured', 'disheartened', 'disheveled', 'disillusioned', 'disparate', 'dissident', 'doable', 'doctrinal', 'doing', 'dotted', 'double-blind', 'downbeat', 'dozen', 'draining', 'draught', 'dread', 'dried', 'dropped', 'dulled', 'duplicate', 'eaten', 'echoing', 'economical', 'elaborated', 'elastic', 'elective', 'electoral', 'elven', 'embryo', 'emerald', 'emergency', 'emissary', 'emotional', 'employed', 'enamel', 'encased', 'encrusted', 'endangered', 'engraved', 'engrossing', 'enlarged', 'enlisted', 'enlivened', 'ensconced', 'entangled', 'enthralling', 'entire', 'envious', 'eradicated', 'eroded', 'esoteric', 'essential', 'evaporated', 'ever-present', 'evergreen', 'everlasting', 'exacting', 'exasperated', 'excess', 'exciting', 'executable', 'existent', 'exonerated', 'exorbitant', 'exponential', 'export', 'extraordinary', 'exultant', 'exulting', 'facsimile', 'fading', 'fainter', 'faith-based', 'fallacious', 'faltering', 'famous', 'fancier', 'fast-growing', 'fated', 'favourable', 'fearless', 'feathered', 'fellow', 'fermented', 'ferocious', 'fiddling', 'filling', 'firmer', 'fitted', 'flammable', 'flawed', 'fledgling', 'fleshy', 'flexible', 'flickering', 'floral', 'flowering', 'flowing', 'foggy', 'folic', 'foolhardy', 'foolish', 'footy', 'forehand', 'forked', 'formative', 'formulaic', 'foul-mouthed', 'fractional', 'fragrant', 'fraudulent', 'freakish', 'freckled', 'freelance', 'freight', 'fresh', 'fretted', 'frugal', 'fulfilling', 'fuming', 'funded', 'funny', 'garbled', 'gathered', 'geologic', 'geometric', 'gibberish', 'gilded', 'ginger', 'glare', 'glaring', 'gleaming', 'glorified', 'glorious', 'goalless', 'gold-plated', 'goody', 'grammatical', 'grande', 'grateful', 'gratuitous', 'graven', 'greener', 'grinding', 'grizzly', 'grudging', 'guaranteed', 'gusty', 'hand-held', 'handheld', 'hands-off', 'hard-pressed', 'healing', 'healthier', 'healthiest', 'heart', 'heart-shaped', 'heathen', 'hedonistic', 'heralded', 'herbal', 'high-density', 'high-performance', 'high-res', 'high-yield', 'hissy', 'hitless', 'holiness', 'homesick', 'honorable', 'hooded', 'hopeless', 'horrendous', 'horrible', 'hot-button', 'huddled', 'human', 'humbling', 'humid', 'humiliating', 'hypnotized', 'idealistic', 'idiosyncratic', 'ignited', 'illustrated', 'illustrative', 'imitated', 'immense', 'immersive', 'immoral', 'impassive', 'impressionable', 'improbable', 'impulsive', 'in-between', 'in-flight', 'inattentive', 'inbound', 'inbounds', 'incalculable', 'incomprehensible', 'indefatigable', 'indigo', 'indiscriminate', 'indomitable', 'inert', 'inflate', 'inform', 'inheriting', 'injured', 'injurious', 'inking', 'inoffensive', 'insane', 'insensible', 'insidious', 'insincere', 'insistent', 'insolent', 'insufferable', 'intemperate', 'interdependent', 'interesting', 'interfering', 'intern', 'interpreted', 'intersecting', 'intuitive', 'irresolute', 'irritate', 'jealous', 'joining', 'joint', 'journalistic', 'joyful', 'keyed', 'knowing', 'lacklustre', 'laden', 'lagging', 'lamented', 'laughable', 'layered', 'leather', 'leathern', 'leery', 'left-footed', 'legible', 'leisure', 'lessening', 'liberating', 'life-size', 'lifted', 'lightest', 'limitless', 'listening', 'literary', 'liver', 'livid', 'lobster', 'locked', 'long-held', 'long-lasting', 'long-running', 'long-suffering', 'loudest', 'loveliest', 'low-budget', 'low-carb', 'lowering', 'lucid', 'luckless', 'luxurious', 'magazine', 'maniac', 'manmade', 'maroon', 'mastered', 'mated', 'material', 'materialistic', 'meaningful', 'measuring', 'mediaeval', 'medical', 'meditated', 'medley', 'melodic', 'memorable', 'memorial', 'metabolic', 'metallic', 'metallurgical', 'metering', 'midair', 'midterm', 'midway', 'mighty', 'migrating', 'mind-blowing', 'mind-boggling', 'minor', 'mirrored', 'misguided', 'misshapen', 'mitigated', 'mixed', 'modernized', 'molecular', 'monarch', 'monastic', 'morbid', 'motley', 'motorized', 'mounted', 'multi-million', 'multidisciplinary', 'muscled', 'muscular', 'muted', 'mysterious', 'mythic', 'nail-biting', 'natural', 'nauseous', 'negative', 'networked', 'neurological', 'neutered', 'newest', 'night', 'nitrous', 'no-fly', 'noncommercial', 'nonsense', 'north', 'nuanced', 'occurring', 'offensive', 'oldest', 'oncoming', 'one-eyed', 'one-year', 'onstage', 'onward', 'opaque', 'open-ended', 'operating', 'opportunist', 'opposing', 'opt-in', 'ordinate', 'outdone', 'outlaw', 'outsized', 'overboard', 'overheated', 'oversize', 'overworked', 'oyster', 'paced', 'panting', 'paralyzed', 'paramount', 'parental', 'parted', 'partisan', 'passive', 'pastel', 'patriot', 'peacekeeping', 'pedestrian', 'peevish', 'penal', 'penned', 'pensive', 'perceptual', 'permissible', 'pernicious', 'perpetuate', 'perplexed', 'pervasive', 'petrochemical', 'philosophical', 'picturesque', 'pillaged', 'piped', 'piquant', 'pitching', 'plausible', 'pliable', 'plumb', 'politician', 'polygamous', 'poorest', 'portmanteau', 'posed', 'positive', 'possible', 'postpartum', 'prank', 'pre-emptive', 'precocious', 'predicted', 'premium', 'preparatory', 'prerequisite', 'prescient', 'preserved', 'presidential', 'pressed', 'pressurized', 'presumed', 'prewar', 'priced', 'pricier', 'primal', 'primer', 'primetime', 'printed', 'private', 'problem', 'procedural', 'process', 'prodigious', 'professional', 'programmed', 'progressive', 'prolific', 'promising', 'promulgated', 'pronged', 'proportionate', 'protracted', 'pulled', 'pulsed', 'purgatory', 'quick', 'rapid-fire', 'razed', 'reactive', 'readable', 'realizing', 'recognised', 'recovering', 'recurrent', 'recycled', 'redeemable', 'reflecting', 'regal', 'registering', 'reliable', 'reminiscent', 'remorseless', 'removable', 'renewable', 'repeating', 'repellent', 'reserve', 'resigned', 'respectful', 'rested', 'restrict', 'resultant', 'retaliatory', 'retiring', 'revelatory', 'reverend', 'reversing', 'revolving', 'ridiculous', 'right-hand', 'ringed', 'risque', 'robust', 'roomful', 'rotating', 'roused', 'rubber', 'run-down', 'running', 'runtime', 'rustling', 'safest', 'salient', 'sanctioned', 'saute', 'saved', 'scandalized', 'scarlet', 'scattering', 'sceptical', 'scheming', 'scoundrel', 'scratched', 'scratchy', 'scrolled', 'seated', 'second-best', 'self-taught', 'semiautomatic', 'senior', 'sensed', 'sentient', 'sexier', 'shadowy', 'shaken', 'shaker', 'shameless', 'shaped', 'shiny', 'shipped', 'shivering', 'shoestring', 'short', 'short-lived', 'signed', 'simplest', 'simplistic', 'sizable', 'skeleton', 'skinny', 'skirting', 'skyrocketed', 'slamming', 'slanting', 'slapstick', 'sleek', 'sleepless', 'sleepy', 'slender', 'slimmer', 'smacking', 'smokeless', 'smothered', 'smouldering', 'snuff', 'socialized', 'solid-state', 'sometime', 'sought', 'spanking', 'sparing', 'spattered', 'specialized', 'specific', 'speedy', 'spherical', 'spiky', 'spineless', 'sprung', 'squint', 'stainless', 'standing', 'starlight', 'startled', 'stately', 'statewide', 'stereoscopic', 'sticky', 'stimulant', 'stinky', 'stoked', 'stolen', 'storied', 'strained', 'strapping', 'strengthened', 'stubborn', 'stylized', 'suave', 'subjective', 'subordinate', 'succeeding', 'suffering', 'summary', 'sunset', 'sunshine', 'supernatural', 'supervisory', 'supply-side', 'surrogate', 'suspended', 'suspenseful', 'swarthy', 'sweating', 'sweeping', 'swinging', 'swooning', 'sympathize', 'synchronized', 'synonymous', 'synthetic', 'tailed', 'tallest', 'tangible', 'tanked', 'tarry', 'technical', 'tectonic', 'telepathic', 'tenderest', 'territorial', 'testimonial', 'theistic', 'thicker', 'threatening', 'tight-lipped', 'timed', 'timely', 'timid', 'torrent', 'totalled', 'tougher', 'traditional', 'transformed', 'trapped', 'traveled', 'traverse', 'treated', 'trial', 'trunk', 'trusting', 'trying', 'twisted', 'two-lane', 'tyrannical', 'unaided', 'unassisted', 'unassuming', 'unattractive', 'uncapped', 'uncomfortable', 'uncontrolled', 'uncooked', 'uncooperative', 'underground', 'undersea', 'undisturbed', 'unearthly', 'uneasy', 'unequal', 'unfazed', 'unfinished', 'unforeseen', 'unforgivable', 'unidentified', 'unimaginative', 'uninspired', 'unintended', 'uninvited', 'universal', 'unmasked', 'unorthodox', 'unparalleled', 'unpleasant', 'unprincipled', 'unread', 'unreasonable', 'unregulated', 'unreliable', 'unremitting', 'unsafe', 'unsanitary', 'unsealed', 'unsuccessful', 'unsupervised', 'untimely', 'unwary', 'unwrapped', 'uppity', 'upstart', 'useless', 'utter', 'valiant', 'valid', 'valued', 'vanilla', 'vaulting', 'vaunted', 'veering', 'vegetative', 'vented', 'verbal', 'verifying', 'veritable', 'versed', 'vinyl', 'virgin', 'visceral', 'visual', 'voluptuous', 'walk-on', 'wanton', 'warlike', 'washed', 'waterproof', 'waved', 'weakest', 'well-chosen', 'well-informed', 'wetting', 'wheeled', 'whirlwind', 'widen', 'widening', 'willful', 'willing', 'winnable', 'winningest', 'wireless', 'wistful', 'woeful', 'wooded', 'woodland', 'wordless', 'workable', 'worldly', 'worldwide', 'worst-case', 'worsted', 'worthless'];

/***/ }),

/***/ "./data/sample_movie_info.js":
/*!***********************************!*\
  !*** ./data/sample_movie_info.js ***!
  \***********************************/
/*! exports provided: info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
var info = [{
  Title: 'Thirst',
  Year: '2009',
  Rated: 'R',
  Released: '30 Apr 2009',
  Runtime: '135 min',
  Genre: 'Drama, Horror, Romance',
  Director: 'Chan-wook Park',
  Writer: 'Émile Zola (inspired by "Thérèse Raquin"), Chan-wook Park (screenplay by), Seo-kyeong Jeong (screenplay by)',
  Actors: 'Kang-ho Song, Hee-jin Choi, Dong-soo Seo, Hwa-ryong Lee',
  Plot: 'Through a failed medical experiment, a priest is stricken with vampirism and is forced to abandon his ascetic ways.',
  Language: 'Korean, English, French',
  Country: 'South Korea, USA',
  Awards: '12 wins & 18 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BNDgwODY0MjM3OV5BMl5BanBnXkFtZTcwNzk3MTY2Mg@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '7.2/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '81%'
  }, {
    Source: 'Metacritic',
    Value: '73/100'
  }],
  Metascore: '73',
  imdbRating: '7.2',
  imdbVotes: '37,525',
  imdbID: 'tt0762073',
  Type: 'movie',
  DVD: '17 Nov 2009',
  BoxOffice: '$296,441',
  Production: 'Focus Features',
  Website: 'http://www.thirstmovie.com/',
  Response: 'True',
  og_id: 'tt0762073'
}, {
  Title: 'Blade',
  Year: '1998',
  Rated: 'R',
  Released: '21 Aug 1998',
  Runtime: '120 min',
  Genre: 'Action, Horror, Sci-Fi',
  Director: 'Stephen Norrington',
  Writer: 'David S. Goyer',
  Actors: "Wesley Snipes, Stephen Dorff, Kris Kristofferson, N'Bushe Wright",
  Plot: 'A half-vampire, half-mortal man becomes a protector of the mortal race, while slaying evil vampires.',
  Language: 'English, Russian, Serbian',
  Country: 'USA',
  Awards: '4 wins & 8 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ4MzkzNjcxNV5BMl5BanBnXkFtZTcwNzk4NTU0Mg@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '7.1/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '54%'
  }, {
    Source: 'Metacritic',
    Value: '45/100'
  }],
  Metascore: '45',
  imdbRating: '7.1',
  imdbVotes: '224,968',
  imdbID: 'tt0120611',
  Type: 'movie',
  DVD: '22 Dec 1998',
  BoxOffice: 'N/A',
  Production: 'New Line Cinema',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0120611'
}, {
  Title: 'Anywhere But Here',
  Year: '1999',
  Rated: 'PG-13',
  Released: '12 Nov 1999',
  Runtime: '114 min',
  Genre: 'Comedy, Drama',
  Director: 'Wayne Wang',
  Writer: 'Mona Simpson (book), Alvin Sargent (screenplay)',
  Actors: 'Susan Sarandon, Natalie Portman, Hart Bochner, Eileen Ryan',
  Plot: 'A mother and daughter search for success in Beverly Hills.',
  Language: 'English',
  Country: 'USA',
  Awards: 'Nominated for 1 Golden Globe. Another 3 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMmRhMGY4Y2QtYTdkOS00MzM2LWE1N2YtZjA5MDQzZmI2MWNjXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.2/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '64%'
  }, {
    Source: 'Metacritic',
    Value: '59/100'
  }],
  Metascore: '59',
  imdbRating: '6.2',
  imdbVotes: '16,063',
  imdbID: 'tt0149691',
  Type: 'movie',
  DVD: '02 May 2000',
  BoxOffice: 'N/A',
  Production: 'Twentieth Century Fox Home Entertainment',
  Website: 'http://www.foxmovies.com/anywherebuthere',
  Response: 'True',
  og_id: 'tt0149691'
}, {
  Title: "Don't Look in the Basement",
  Year: '1973',
  Rated: 'R',
  Released: '01 Sep 1973',
  Runtime: '89 min',
  Genre: 'Horror, Thriller',
  Director: 'S.F. Brownrigg',
  Writer: 'Tim Pope',
  Actors: 'Bill McGhee, Jessie Lee Fulton, Robert Dracup, Harryette Warren',
  Plot: 'A young psychiatric nurse goes to work at a lonesome asylum following a murder. There, she experiences varying degrees of torment from the patients.',
  Language: 'English',
  Country: 'USA',
  Awards: 'N/A',
  Poster: 'https://m.media-amazon.com/images/M/MV5BNzU3NGUxNjUtYzE1Yy00OTNhLTgwZGMtYmVkMWVlN2RiNTYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '5.2/10'
  }],
  Metascore: 'N/A',
  imdbRating: '5.2',
  imdbVotes: '2,531',
  imdbID: 'tt0069994',
  Type: 'movie',
  DVD: '16 Dec 2014',
  BoxOffice: 'N/A',
  Production: 'VCI Entertainment',
  Website: 'http://www.vcientertainment.com/Film-Categories?product_id=235',
  Response: 'True',
  og_id: 'tt0069994'
}, {
  Title: 'Driving Lessons',
  Year: '2006',
  Rated: 'PG-13',
  Released: '13 Oct 2006',
  Runtime: '98 min',
  Genre: 'Comedy, Drama',
  Director: 'Jeremy Brock',
  Writer: 'Jeremy Brock',
  Actors: 'Rupert Grint, Fay Cohen, Ruby Mortlock, Don Wetherhead',
  Plot: 'A coming of age story about a shy teenage boy trying to escape from the influence of his domineering mother. His world changes when he begins to work for a retired actress.',
  Language: 'English',
  Country: 'UK',
  Awards: '3 wins & 2 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTg4NzE5MDE3Ml5BMl5BanBnXkFtZTcwMDgxNjgzMQ@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.8/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '48%'
  }, {
    Source: 'Metacritic',
    Value: '56/100'
  }],
  Metascore: '56',
  imdbRating: '6.8',
  imdbVotes: '10,286',
  imdbID: 'tt0446687',
  Type: 'movie',
  DVD: '03 Jul 2007',
  BoxOffice: 'N/A',
  Production: 'Sony Pictures Classics',
  Website: 'http://www.sonyclassics.com/drivinglessons/',
  Response: 'True',
  og_id: 'tt0446687'
}, {
  Title: 'Christmas in Connecticut',
  Year: '1945',
  Rated: 'Not Rated',
  Released: '11 Aug 1945',
  Runtime: '101 min',
  Genre: 'Comedy, Romance',
  Director: 'Peter Godfrey',
  Writer: 'Lionel Houser (screenplay), Adele Comandini (screenplay), Aileen Hamilton (story)',
  Actors: 'Barbara Stanwyck, Dennis Morgan, Sydney Greenstreet, Reginald Gardiner',
  Plot: 'A food writer who has lied about being the perfect housewife must try to cover her deception when her boss and a returning war hero invite themselves to her home for a traditional family Christmas.',
  Language: 'English, German',
  Country: 'USA',
  Awards: 'N/A',
  Poster: 'https://m.media-amazon.com/images/M/MV5BNDkyNmU2MzgtZWMyMy00YzM3LWI4ODYtMTNiYzA2MWQ1YTc2XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '7.4/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '88%'
  }],
  Metascore: 'N/A',
  imdbRating: '7.4',
  imdbVotes: '6,884',
  imdbID: 'tt0037595',
  Type: 'movie',
  DVD: '08 Nov 2005',
  BoxOffice: 'N/A',
  Production: 'Warner Bros. Pictures',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0037595'
}, {
  Title: 'The Wind and the Lion',
  Year: '1975',
  Rated: 'PG',
  Released: '26 Jun 1975',
  Runtime: '119 min',
  Genre: 'Action, Adventure, Drama',
  Director: 'John Milius',
  Writer: 'John Milius',
  Actors: 'Sean Connery, Candice Bergen, Brian Keith, John Huston',
  Plot: 'In early twentieth century Morocco, a Sharif kidnaps an American woman and her children, forcing President Theodore Roosevelt to send in forces to conduct a rescue mission.',
  Language: 'English',
  Country: 'USA',
  Awards: 'Nominated for 2 Oscars. Another 4 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BYTNhODI4NWYtYzc1Zi00OGIxLTk5ZWUtOTA0MDZkNDM2OTA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '7.0/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '75%'
  }],
  Metascore: 'N/A',
  imdbRating: '7.0',
  imdbVotes: '7,488',
  imdbID: 'tt0073906',
  Type: 'movie',
  DVD: '06 Jan 2004',
  BoxOffice: 'N/A',
  Production: 'MGM Home Entertainment',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0073906'
}, {
  Title: 'Hair',
  Year: '1979',
  Rated: 'PG',
  Released: '09 May 1979',
  Runtime: '121 min',
  Genre: 'Comedy, Drama, Musical, Romance, War',
  Director: 'Milos Forman',
  Writer: 'Gerome Ragni (musical book), James Rado (musical book), Michael Weller',
  Actors: "John Savage, Treat Williams, Beverly D'Angelo, Annie Golden",
  Plot: "Claude Bukowski leaves the family ranch in Oklahoma for New York where he is rapidly embraced into the hippie group of youngsters led by Berger, yet he's already been drafted. He soon falls in love with Sheila Franklin, a rich girl but still a rebel inside.",
  Language: 'English',
  Country: 'West Germany, USA',
  Awards: 'Nominated for 2 Golden Globes. Another 2 wins & 2 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BODUzNjUzNzIzM15BMl5BanBnXkFtZTcwMjc4MjkzNA@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '7.6/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '89%'
  }, {
    Source: 'Metacritic',
    Value: '68/100'
  }],
  Metascore: '68',
  imdbRating: '7.6',
  imdbVotes: '32,079',
  imdbID: 'tt0079261',
  Type: 'movie',
  DVD: '15 May 2001',
  BoxOffice: 'N/A',
  Production: 'United Artists',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0079261'
}, {
  Title: 'Armored',
  Year: '2009',
  Rated: 'PG-13',
  Released: '04 Dec 2009',
  Runtime: '88 min',
  Genre: 'Action, Crime, Thriller',
  Director: 'Nimród Antal',
  Writer: 'James V. Simpson',
  Actors: 'Matt Dillon, Jean Reno, Laurence Fishburne, Amaury Nolasco',
  Plot: 'A newbie guard for an armored truck company is coerced by his veteran coworkers to steal a truck containing $42 million. But a wrinkle in their supposedly foolproof plan divides the group, leading to a potentially deadly resolution.',
  Language: 'English',
  Country: 'USA',
  Awards: 'N/A',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTgyOTI4NzAyMF5BMl5BanBnXkFtZTcwOTk3Mjg3Mg@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '5.7/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '40%'
  }, {
    Source: 'Metacritic',
    Value: '50/100'
  }],
  Metascore: '50',
  imdbRating: '5.7',
  imdbVotes: '28,555',
  imdbID: 'tt0913354',
  Type: 'movie',
  DVD: '16 Mar 2010',
  BoxOffice: '$15,988,876',
  Production: 'Sony/Screen Gems',
  Website: 'http://www.armoredmovie.com/?hs308=AMD028',
  Response: 'True',
  og_id: 'tt0913354'
}, {
  Title: 'The Kid',
  Year: '2000',
  Rated: 'PG',
  Released: '07 Jul 2000',
  Runtime: '104 min',
  Genre: 'Comedy, Family, Fantasy',
  Director: 'Jon Turteltaub',
  Writer: 'Audrey Wells',
  Actors: 'Bruce Willis, Spencer Breslin, Emily Mortimer, Lily Tomlin',
  Plot: 'An unhappy and disliked image consultant gets a second shot at life when he is mysteriously confronted by an eight-year-old version of himself.',
  Language: 'English',
  Country: 'USA',
  Awards: '1 win & 3 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BYTYwM2JmNzgtNzVjMi00NzQ4LTk2MDQtOTE4N2U0ODU0YjYwXkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.1/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '49%'
  }, {
    Source: 'Metacritic',
    Value: '45/100'
  }],
  Metascore: '45',
  imdbRating: '6.1',
  imdbVotes: '38,001',
  imdbID: 'tt0219854',
  Type: 'movie',
  DVD: '23 Jan 2003',
  BoxOffice: '$68,493,389',
  Production: 'Disney',
  Website: 'http://disney.go.com/disneypictures/thekid/homepage.html',
  Response: 'True',
  og_id: 'tt0219854'
}, {
  Title: 'Following',
  Year: '1998',
  Rated: 'R',
  Released: '05 Nov 1999',
  Runtime: '69 min',
  Genre: 'Crime, Mystery, Thriller',
  Director: 'Christopher Nolan',
  Writer: 'Christopher Nolan',
  Actors: 'Jeremy Theobald, Alex Haw, Lucy Russell, John Nolan',
  Plot: 'A young writer who follows strangers for material meets a thief who takes him under his wing.',
  Language: 'English',
  Country: 'UK',
  Awards: '5 wins & 4 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMWZmNzk5M2QtOTM3MC00ZTg1LWJlYWMtMGIxZWVjODUwNTEzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '7.6/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '80%'
  }, {
    Source: 'Metacritic',
    Value: '60/100'
  }],
  Metascore: '60',
  imdbRating: '7.6',
  imdbVotes: '77,869',
  imdbID: 'tt0154506',
  Type: 'movie',
  DVD: '11 Dec 2001',
  BoxOffice: 'N/A',
  Production: 'IFC',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0154506'
}, {
  Title: "Ocean's Twelve",
  Year: '2004',
  Rated: 'PG-13',
  Released: '10 Dec 2004',
  Runtime: '125 min',
  Genre: 'Crime, Thriller',
  Director: 'Steven Soderbergh',
  Writer: 'George Nolfi, George Clayton Johnson (characters), Jack Golden Russell (characters)',
  Actors: 'Brad Pitt, Catherine Zeta-Jones, George Clooney, Ed Kross',
  Plot: "Daniel Ocean recruits one more team member so he can pull off three major European heists in this sequel to Ocean's 11.",
  Language: 'English, Dutch, French, Italian, Mandarin',
  Country: 'USA',
  Awards: '3 wins & 8 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMmJmYzBjNTktMTJjZS00ZGRhLWE1Y2QtOWQxZGU0Y2RmMjkyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.5/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '55%'
  }, {
    Source: 'Metacritic',
    Value: '58/100'
  }],
  Metascore: '58',
  imdbRating: '6.5',
  imdbVotes: '329,778',
  imdbID: 'tt0349903',
  Type: 'movie',
  DVD: '12 Apr 2005',
  BoxOffice: '$125,402,117',
  Production: 'Warner Bros. Pictures',
  Website: 'http://oceans12.warnerbros.com/',
  Response: 'True',
  og_id: 'tt0349903'
}, {
  Title: 'Closet Land',
  Year: '1991',
  Rated: 'R',
  Released: '06 Mar 1991',
  Runtime: '89 min',
  Genre: 'Drama, Thriller',
  Director: 'Radha Bharadwaj',
  Writer: 'Radha Bharadwaj',
  Actors: 'Alan Rickman, Madeleine Stowe',
  Plot: "In a drab police state, a children's book writer is interrogated by a sadistic secret policeman under suspicion of embedding anti-government messages in her stories.",
  Language: 'English',
  Country: 'USA',
  Awards: '1 win & 1 nomination.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTM1MjMxOTQ4N15BMl5BanBnXkFtZTcwNzI1MzMzMQ@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '7.2/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '44%'
  }],
  Metascore: 'N/A',
  imdbRating: '7.2',
  imdbVotes: '2,435',
  imdbID: 'tt0101597',
  Type: 'movie',
  DVD: '12 Sep 1991',
  BoxOffice: 'N/A',
  Production: 'Media Home Entertainment',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0223005'
}, {
  Title: 'Death in Venice',
  Year: '1971',
  Rated: 'GP',
  Released: '05 Mar 1971',
  Runtime: '130 min',
  Genre: 'Drama',
  Director: 'Luchino Visconti',
  Writer: 'Thomas Mann (novel), Luchino Visconti (screenplay), Nicola Badalucco (screenplay)',
  Actors: 'Dirk Bogarde, Romolo Valli, Mark Burns, Nora Ricci',
  Plot: 'While recovering in Venice, a sickly composer becomes dangerously fixated with a teenage boy.',
  Language: 'English, Italian, Polish, French, Russian, German',
  Country: 'Italy, France, USA',
  Awards: 'Nominated for 1 Oscar. Another 18 wins & 6 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BYjUwNDc3OWItODI5Yy00NzdkLTgxMzgtZGE5NWQ4OWQ3MTEzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '7.5/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '65%'
  }],
  Metascore: 'N/A',
  imdbRating: '7.5',
  imdbVotes: '16,430',
  imdbID: 'tt0067445',
  Type: 'movie',
  DVD: '17 Feb 2004',
  BoxOffice: 'N/A',
  Production: 'WARNER BROTHERS PICTURES',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0067445'
}, {
  Title: 'Angels & Demons',
  Year: '2009',
  Rated: 'PG-13',
  Released: '15 May 2009',
  Runtime: '138 min',
  Genre: 'Mystery, Thriller',
  Director: 'Ron Howard',
  Writer: 'David Koepp (screenplay), Akiva Goldsman (screenplay), Dan Brown (novel)',
  Actors: 'Tom Hanks, Ewan McGregor, Ayelet Zurer, Stellan Skarsgård',
  Plot: 'Harvard symbologist Robert Langdon works with a nuclear physicist to solve a murder and prevent a terrorist act against the Vatican during one of the significant events within the church.',
  Language: 'English, Italian, Latin, French, Swiss German, German, Chinese, Spanish, Polish',
  Country: 'USA, Italy',
  Awards: '1 win & 5 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMjEzNzM2MjgxMF5BMl5BanBnXkFtZTcwNTQ1MTM0Mg@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.7/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '37%'
  }, {
    Source: 'Metacritic',
    Value: '48/100'
  }],
  Metascore: '48',
  imdbRating: '6.7',
  imdbVotes: '251,902',
  imdbID: 'tt0808151',
  Type: 'movie',
  DVD: '24 Nov 2009',
  BoxOffice: '$133,375,846',
  Production: 'Sony/Columbia Pictures',
  Website: 'http://www.angelsanddemons.com/',
  Response: 'True',
  og_id: 'tt0808151'
}, {
  Title: 'An American Werewolf in Paris',
  Year: '1997',
  Rated: 'R',
  Released: '25 Dec 1997',
  Runtime: '105 min',
  Genre: 'Comedy, Fantasy, Horror, Thriller',
  Director: 'Anthony Waller',
  Writer: 'John Landis (characters in An American Werewolf in London), Tim Burns, Tom Stern, Anthony Waller',
  Actors: 'Tom Everett Scott, Julie Delpy, Vince Vieluf, Phil Buckman',
  Plot: 'An American man unwittingly gets involved with French werewolves who have developed a serum allowing them to transform at will.',
  Language: 'English, French, German',
  Country: 'UK, Netherlands, Luxembourg, USA, France, Germany',
  Awards: '3 wins & 1 nomination.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BN2U1YTU5MzEtNWJmNi00MDYyLTkwYjctNGMwZDZjY2UwYTQ4XkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '5.1/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '7%'
  }, {
    Source: 'Metacritic',
    Value: '31/100'
  }],
  Metascore: '31',
  imdbRating: '5.1',
  imdbVotes: '21,569',
  imdbID: 'tt0118604',
  Type: 'movie',
  DVD: '21 Jul 1998',
  BoxOffice: 'N/A',
  Production: 'Hollywood Pictures',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0118604'
}, {
  Title: 'Doctor Who',
  Year: '2005–',
  Rated: 'TV-PG',
  Released: '17 Mar 2006',
  Runtime: '45 min',
  Genre: 'Adventure, Drama, Family, Mystery, Sci-Fi',
  Director: 'N/A',
  Writer: 'Sydney Newman',
  Actors: 'Matt Smith, David Tennant, Peter Capaldi, Jenna Coleman',
  Plot: 'The further adventures in time and space of the alien adventurer known as the Doctor and their companions from planet Earth.',
  Language: 'English',
  Country: 'UK, Canada',
  Awards: '110 wins & 174 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BNDY1YmZhZjEtY2E3NC00M2VkLThlZmUtODczMmNiZjMxMWRhXkEyXkFqcGdeQXVyNzA5NTYxMDg@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '8.7/10'
  }],
  Metascore: 'N/A',
  imdbRating: '8.7',
  imdbVotes: '182,614',
  imdbID: 'tt0436992',
  Type: 'series',
  totalSeasons: '12',
  Response: 'True',
  og_id: 'tt0436992'
}, {
  Title: 'Valley Girl',
  Year: '1983',
  Rated: 'R',
  Released: '29 Apr 1983',
  Runtime: '99 min',
  Genre: 'Comedy, Romance',
  Director: 'Martha Coolidge',
  Writer: 'Andrew Lane, Wayne Crawford',
  Actors: 'Nicolas Cage, Deborah Foreman, Elizabeth Daily, Michael Bowen',
  Plot: 'Julie, a girl from the valley, meets Randy, a punk from the city. They are from different worlds and find love. Somehow they need to stay together in spite of her trendy, shallow friends.',
  Language: 'English',
  Country: 'USA',
  Awards: 'N/A',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMjA4NzI5OTgyMV5BMl5BanBnXkFtZTgwODgwNjU1MDE@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.4/10'
  }, {
    Source: 'Metacritic',
    Value: '66/100'
  }],
  Metascore: '66',
  imdbRating: '6.4',
  imdbVotes: '11,806',
  imdbID: 'tt0086525',
  Type: 'movie',
  DVD: '01 Mar 2005',
  BoxOffice: 'N/A',
  Production: 'MGM Home Entertainment',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0086525'
}, {
  Title: 'Man with the Screaming Brain',
  Year: '2005',
  Rated: 'Unrated',
  Released: '03 Apr 2005',
  Runtime: '90 min',
  Genre: 'Adventure, Comedy, Sci-Fi',
  Director: 'Bruce Campbell',
  Writer: 'Bruce Campbell, Bruce Campbell (story), David M. Goodman (story), Sam Raimi (story)',
  Actors: 'Bruce Campbell, Tamara Gorski, Ted Raimi, Antoinette Byron',
  Plot: 'The brains of a Russian taxi driver and a wealthy businessman are brought together in one body by a mad scientist.',
  Language: 'English',
  Country: 'Germany, USA',
  Awards: '1 nomination.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNzkyODQ4NF5BMl5BanBnXkFtZTcwMTg1MDEzMQ@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '5.6/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '33%'
  }],
  Metascore: 'N/A',
  imdbRating: '5.6',
  imdbVotes: '4,891',
  imdbID: 'tt0365478',
  Type: 'movie',
  DVD: '04 Oct 2005',
  BoxOffice: 'N/A',
  Production: 'Anchor Bay Entertainment',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0384312'
}, {
  Title: 'eXistenZ',
  Year: '1999',
  Rated: 'R',
  Released: '23 Apr 1999',
  Runtime: '97 min',
  Genre: 'Horror, Sci-Fi, Thriller',
  Director: 'David Cronenberg',
  Writer: 'David Cronenberg',
  Actors: 'Jennifer Jason Leigh, Jude Law, Ian Holm, Willem Dafoe',
  Plot: 'A game designer on the run from assassins must play her latest virtual reality creation with a marketing trainee to determine if the game has been damaged.',
  Language: 'English',
  Country: 'Canada, UK, France',
  Awards: '3 wins & 7 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMmU1MTJkYWItMzM5Ny00NDgxLTgxOGEtNTkzNDdkZjkwNGI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.8/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '74%'
  }, {
    Source: 'Metacritic',
    Value: '68/100'
  }],
  Metascore: '68',
  imdbRating: '6.8',
  imdbVotes: '87,464',
  imdbID: 'tt0120907',
  Type: 'movie',
  DVD: '19 Oct 1999',
  BoxOffice: 'N/A',
  Production: 'Miramax',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0120907'
}, {
  Title: 'Rock Star',
  Year: '2001',
  Rated: 'R',
  Released: '07 Sep 2001',
  Runtime: '105 min',
  Genre: 'Drama, Music',
  Director: 'Stephen Herek',
  Writer: 'John Stockwell',
  Actors: 'Mark Wahlberg, Jennifer Aniston, Dominic West, Jason Bonham',
  Plot: 'Lead singer of a tribute band becomes lead singer of the real band he idolizes.',
  Language: 'English',
  Country: 'USA',
  Awards: '1 nomination.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMzAxNzNmMzMtYTU4Ni00Y2IxLTk4MGEtZGExNmFiMzBjN2MyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.3/10'
  }, {
    Source: 'Metacritic',
    Value: '54/100'
  }],
  Metascore: '54',
  imdbRating: '6.3',
  imdbVotes: '38,675',
  imdbID: 'tt0202470',
  Type: 'movie',
  DVD: '18 Dec 2001',
  BoxOffice: 'N/A',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0202470'
}, {
  Title: "Heaven's Gate",
  Year: '1980',
  Rated: 'R',
  Released: '19 Nov 1980',
  Runtime: '219 min',
  Genre: 'Adventure, Drama, Western',
  Director: 'Michael Cimino',
  Writer: 'Michael Cimino',
  Actors: 'Kris Kristofferson, Christopher Walken, John Hurt, Sam Waterston',
  Plot: 'A dramatization of the real-life Johnson County War in 1890 Wyoming, in which a Sheriff born into wealth, attempts to protect immigrant farmers from rich cattle interests.',
  Language: 'English, Russian, French, Polish, German',
  Country: 'USA',
  Awards: 'Nominated for 1 Oscar. Another 2 wins & 8 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMzE3YjYzMDgtNjEyYS00ZTk4LThhY2QtMDI4Zjg3MTUyN2ZkXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.8/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '57%'
  }, {
    Source: 'Metacritic',
    Value: '57/100'
  }],
  Metascore: '57',
  imdbRating: '6.8',
  imdbVotes: '11,975',
  imdbID: 'tt0080855',
  Type: 'movie',
  DVD: '15 May 2001',
  BoxOffice: 'N/A',
  Production: 'MGM/UA',
  Website: 'http://www.criterion.com/films/28036-heaven-s-gate',
  Response: 'True',
  og_id: 'tt0080855'
}, {
  Title: 'The Love Letter',
  Year: '1999',
  Rated: 'PG-13',
  Released: '21 May 1999',
  Runtime: '88 min',
  Genre: 'Comedy, Drama, Romance',
  Director: 'Peter Ho-Sun Chan',
  Writer: 'Cathleen Schine (novel), Maria Maggenti (screenplay)',
  Actors: 'Kate Capshaw, Blythe Danner, Ellen DeGeneres, Julianne Nicholson',
  Plot: "The power of words and images to open hearts. Helen runs, miles a day, to burn off energy: she's an emotional celibate. Going through the post at her shop, she finds a romantic and poetic ...",
  Language: 'English',
  Country: 'USA',
  Awards: '1 nomination.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTMyOTcyNjk0Ml5BMl5BanBnXkFtZTcwNDc3NTkxMQ@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '5.4/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '33%'
  }],
  Metascore: 'N/A',
  imdbRating: '5.4',
  imdbVotes: '3,819',
  imdbID: 'tt0166252',
  Type: 'movie',
  DVD: '23 Nov 1999',
  BoxOffice: 'N/A',
  Production: 'DreamWorks SKG',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0166252'
}, {
  Title: '2001: A Space Odyssey',
  Year: '1968',
  Rated: 'G',
  Released: '12 May 1968',
  Runtime: '149 min',
  Genre: 'Adventure, Sci-Fi',
  Director: 'Stanley Kubrick',
  Writer: 'Stanley Kubrick (screenplay), Arthur C. Clarke (screenplay)',
  Actors: 'Keir Dullea, Gary Lockwood, William Sylvester, Daniel Richter',
  Plot: 'After discovering a mysterious artifact buried beneath the lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer HAL 9000.',
  Language: 'English, Russian',
  Country: 'UK, USA',
  Awards: 'Won 1 Oscar. Another 13 wins & 10 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '8.3/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '93%'
  }, {
    Source: 'Metacritic',
    Value: '82/100'
  }],
  Metascore: '82',
  imdbRating: '8.3',
  imdbVotes: '537,872',
  imdbID: 'tt0062622',
  Type: 'movie',
  DVD: '25 Aug 1998',
  BoxOffice: '$135,620',
  Production: 'Warner Bros. Pictures',
  Website: 'https://www.warnerbros.com/2001-space-odyssey',
  Response: 'True',
  og_id: 'tt0062622'
}, {
  Title: 'The King of Queens',
  Year: '1998–2007',
  Rated: 'TV-PG',
  Released: '21 Sep 1998',
  Runtime: '22 min',
  Genre: 'Comedy',
  Director: 'N/A',
  Writer: 'David Litt, Michael J. Weithorn',
  Actors: 'Kevin James, Leah Remini, Jerry Stiller, Victor Williams',
  Plot: "Delivery man Doug Heffernan has a good life: He has a pretty wife (Carrie), a big television, and friends with which to watch it. Then Carrie's goofy and annoying father Arthur moves in with them.",
  Language: 'English',
  Country: 'USA',
  Awards: 'Nominated for 1 Primetime Emmy. Another 14 wins & 4 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTI4NzcwODk1M15BMl5BanBnXkFtZTYwNjkxNTc2._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '7.3/10'
  }],
  Metascore: 'N/A',
  imdbRating: '7.3',
  imdbVotes: '69,240',
  imdbID: 'tt0165581',
  Type: 'series',
  totalSeasons: '9',
  Response: 'True',
  og_id: 'tt0165581'
}, {
  Title: "L'auberge espagnole",
  Year: '2002',
  Rated: 'R',
  Released: '20 Jun 2003',
  Runtime: '122 min',
  Genre: 'Comedy, Drama, Romance',
  Director: 'Cédric Klapisch',
  Writer: 'Cédric Klapisch',
  Actors: 'Romain Duris, Judith Godrèche, Audrey Tautou, Cécile de France',
  Plot: 'A strait-laced French student moves into an apartment in Barcelona with a cast of six other characters from all over Europe. Together, they speak the international language of love and friendship.',
  Language: 'French, Spanish, English, Catalan, Danish, German, Italian',
  Country: 'France, Spain',
  Awards: '8 wins & 9 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BYzZkMWY5M2ItOTA1Yi00MWQ0LWE4OTgtNWY1YmE0NjQyOTdlXkEyXkFqcGdeQXVyMjc4MjcxNzI@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '7.3/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '76%'
  }, {
    Source: 'Metacritic',
    Value: '65/100'
  }],
  Metascore: '65',
  imdbRating: '7.3',
  imdbVotes: '37,509',
  imdbID: 'tt0283900',
  Type: 'movie',
  DVD: '23 Dec 2003',
  BoxOffice: '$3,752,818',
  Production: 'Fox Searchlight Pictures',
  Website: 'http://www.foxsearchlight.com/lauberge',
  Response: 'True',
  og_id: 'tt0283900'
}, {
  Title: 'Nurse Betty',
  Year: '2000',
  Rated: 'R',
  Released: '08 Sep 2000',
  Runtime: '110 min',
  Genre: 'Comedy, Crime, Drama, Romance',
  Director: 'Neil LaBute',
  Writer: 'John C. Richards (story), John C. Richards (screenplay), James Flamberg (screenplay)',
  Actors: 'Morgan Freeman, Renée Zellweger, Chris Rock, Greg Kinnear',
  Plot: "Comedy about a widow's post-traumatic obsession with a soap star.",
  Language: 'English, Spanish',
  Country: 'Germany, USA',
  Awards: 'Won 1 Golden Globe. Another 4 wins & 14 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BYjU2OGVhYjgtYWE3Zi00MzM5LWEwYjgtYjQxNzkxNzhhZGFjXkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.2/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '83%'
  }, {
    Source: 'Metacritic',
    Value: '69/100'
  }],
  Metascore: '69',
  imdbRating: '6.2',
  imdbVotes: '31,804',
  imdbID: 'tt0171580',
  Type: 'movie',
  DVD: '03 Apr 2001',
  BoxOffice: 'N/A',
  Production: 'USA Films',
  Website: 'http://www.nursebetty.com',
  Response: 'True',
  og_id: 'tt0171580'
}, {
  Title: 'See No Evil',
  Year: '2006',
  Rated: 'R',
  Released: '19 May 2006',
  Runtime: '84 min',
  Genre: 'Action, Horror, Thriller',
  Director: 'Gregory Dark',
  Writer: 'Dan Madigan',
  Actors: 'Glenn Jacobs, Christina Vidal, Michael J. Pagan, Samantha Noble',
  Plot: "A group of delinquents are sent to clean the Blackwell Hotel. Little do they know reclusive psychopath Jacob Goodnight has holed away in the rotting hotel. When one of the teens is captured, those who remain - a group that includes the cop who put a bullet in Goodnight's head four years ago - band together to survive against the brutal killer.",
  Language: 'English',
  Country: 'USA, Australia',
  Awards: 'N/A',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTg3MTgxNDI1MV5BMl5BanBnXkFtZTcwMTkzMjYzMQ@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '5.1/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '9%'
  }, {
    Source: 'Metacritic',
    Value: '17/100'
  }],
  Metascore: '17',
  imdbRating: '5.1',
  imdbVotes: '24,311',
  imdbID: 'tt0437179',
  Type: 'movie',
  DVD: '28 Nov 2006',
  BoxOffice: '$15,019,200',
  Production: 'Lionsgate Films',
  Website: 'http://www.seenoevilthemovie.com/',
  Response: 'True',
  og_id: 'tt0437179'
}, {
  Title: 'The Egyptian',
  Year: '1954',
  Rated: 'Approved',
  Released: '17 Dec 1954',
  Runtime: '139 min',
  Genre: 'Biography, Drama, History',
  Director: 'Michael Curtiz',
  Writer: 'Philip Dunne (screen play), Casey Robinson (screen play), Mika Waltari (novel)',
  Actors: 'Jean Simmons, Victor Mature, Gene Tierney, Michael Wilding',
  Plot: "In ancient Egypt, a poor orphan becomes a genial physician and is eventually appointed at the Pharaoh's court where he witnesses palace intrigues and learns dangerous royal secrets.",
  Language: 'English, Greek',
  Country: 'USA',
  Awards: 'Nominated for 1 Oscar. Another 1 win.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BNzE3N2Y4NzAtNzY1Yi00MTliLTkxNzEtNGZhM2EyYWQ0MTdmXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.6/10'
  }],
  Metascore: 'N/A',
  imdbRating: '6.6',
  imdbVotes: '3,182',
  imdbID: 'tt0046949',
  Type: 'movie',
  DVD: 'N/A',
  BoxOffice: 'N/A',
  Production: '20th Century Fox Film Corporation',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0046949'
}, {
  Title: 'The Cell',
  Year: '2000',
  Rated: 'R',
  Released: '18 Aug 2000',
  Runtime: '107 min',
  Genre: 'Horror, Sci-Fi, Thriller',
  Director: 'Tarsem Singh',
  Writer: 'Mark Protosevich',
  Actors: 'Jennifer Lopez, Colton James, Dylan Baker, Marianne Jean-Baptiste',
  Plot: 'An F.B.I. Agent persuades a social worker, who is adept with a new experimental technology, to enter the mind of a comatose serial killer in order to learn where he has hidden his latest kidnap victim.',
  Language: 'English',
  Country: 'USA, Germany',
  Awards: 'Nominated for 1 Oscar. Another 6 wins & 23 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMDY1NmVmOTItYWU0NC00OGU2LWIyNTctYTU3NTY3ZjJkOWJjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.3/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '45%'
  }, {
    Source: 'Metacritic',
    Value: '40/100'
  }],
  Metascore: '40',
  imdbRating: '6.3',
  imdbVotes: '89,303',
  imdbID: 'tt0209958',
  Type: 'movie',
  DVD: '19 Dec 2000',
  BoxOffice: 'N/A',
  Production: 'New Line Cinema',
  Website: 'http://www.cellmovie.com',
  Response: 'True',
  og_id: 'tt0209958'
}, {
  Title: 'Gilmore Girls',
  Year: '2000–2007',
  Rated: 'TV-PG',
  Released: '05 Oct 2000',
  Runtime: '44 min',
  Genre: 'Comedy, Drama',
  Director: 'N/A',
  Writer: 'Amy Sherman-Palladino',
  Actors: 'Lauren Graham, Alexis Bledel, Keiko Agena, Scott Patterson',
  Plot: 'A dramedy centering around the relationship between a thirtysomething single mother and her teen daughter living in Stars Hollow, Connecticut.',
  Language: 'English',
  Country: 'USA',
  Awards: 'Nominated for 1 Golden Globe. Another 22 wins & 81 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ3NDA1ZWYtYjBmMC00NmJjLWI1NjgtYjg2NDhmMTY2YWQ4XkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '8.2/10'
  }],
  Metascore: 'N/A',
  imdbRating: '8.2',
  imdbVotes: '86,257',
  imdbID: 'tt0238784',
  Type: 'series',
  totalSeasons: '7',
  Response: 'True',
  og_id: 'tt0238784'
}, {
  Title: 'Northanger Abbey',
  Year: '1987',
  Rated: 'N/A',
  Released: '06 Dec 1987',
  Season: '3',
  Episode: '7',
  Runtime: '88 min',
  Genre: 'Drama',
  Director: 'Giles Foster',
  Writer: 'Jane Austen (novel), Maggie Wadey',
  Actors: 'Katharine Schlesinger, Peter Firth, Robert Hardy, Googie Withers',
  Plot: 'Catherine Morland is a young woman who enjoys reading Gothic Novels. She is invited to Bath by a family friend, Mrs. Allen, and there she meets Henry Tilney and his sister Eleanor. Upon ...',
  Language: 'English',
  Country: 'UK, USA',
  Awards: 'N/A',
  Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzMTQ2ODMxOV5BMl5BanBnXkFtZTcwMDg2MjA1MQ@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '5.5/10'
  }],
  Metascore: 'N/A',
  imdbRating: '5.5',
  imdbVotes: '753',
  imdbID: 'tt0091649',
  seriesID: 'tt0297626',
  Type: 'episode',
  Response: 'True',
  og_id: 'tt0091649'
}, {
  Title: 'The Box',
  Year: '2009',
  Rated: 'PG-13',
  Released: '06 Nov 2009',
  Runtime: '115 min',
  Genre: 'Drama, Fantasy, Mystery, Sci-Fi, Thriller',
  Director: 'Richard Kelly',
  Writer: 'Richard Kelly (screenplay), Richard Matheson (short story "Button,  Button")',
  Actors: 'Cameron Diaz, James Marsden, Frank Langella, James Rebhorn',
  Plot: "A small wooden box arrives on the doorstep of a married couple, who know that opening it will grant them a million dollars and kill someone they don't know.",
  Language: 'English',
  Country: 'USA',
  Awards: '6 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTI4MDA5NjIwM15BMl5BanBnXkFtZTcwNTA2MjY0Mg@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '5.6/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '44%'
  }, {
    Source: 'Metacritic',
    Value: '47/100'
  }],
  Metascore: '47',
  imdbRating: '5.6',
  imdbVotes: '84,465',
  imdbID: 'tt0362478',
  Type: 'movie',
  DVD: '23 Feb 2010',
  BoxOffice: '$114,882,598',
  Production: 'Warner Bros. Pictures',
  Website: 'http://thebox-movie.warnerbros.com/',
  Response: 'True',
  og_id: 'tt0362478'
}, {
  Title: 'Ali G Indahouse',
  Year: '2002',
  Rated: 'R',
  Released: '22 Mar 2002',
  Runtime: '85 min',
  Genre: 'Comedy',
  Director: 'Mark Mylod',
  Writer: 'Sacha Baron Cohen, Dan Mazer',
  Actors: 'Sacha Baron Cohen, Emilio Rivera, Gina La Piana, Dana de Celis',
  Plot: "Ali G unwittingly becomes a pawn in the Chancellor's plot to overthrow the Prime Minister of Great Britain. However, Ali is embraced by the nation as a voice of the youth, making the PM and his government more popular than ever.",
  Language: 'English, French, Spanish',
  Country: 'France, UK, Germany',
  Awards: 'N/A',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTgxMTA5YmYtNTE0MC00Mzk1LWJkNTUtZjJiYzBjYjdlYTM4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.2/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '56%'
  }],
  Metascore: 'N/A',
  imdbRating: '6.2',
  imdbVotes: '78,649',
  imdbID: 'tt0284837',
  Type: 'movie',
  DVD: '02 Nov 2004',
  BoxOffice: 'N/A',
  Production: 'Universal Pictures',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0284953'
}, {
  Title: "Captain Corelli's Mandolin",
  Year: '2001',
  Rated: 'R',
  Released: '17 Aug 2001',
  Runtime: '131 min',
  Genre: 'Drama, Music, Romance, War',
  Director: 'John Madden',
  Writer: 'Shawn Slovo (screenplay), Louis de Bernières (novel)',
  Actors: 'Penélope Cruz, John Hurt, Christian Bale, Irene Papas',
  Plot: 'When a fisherman leaves to fight with the Greek army during World War II, his fiancée falls in love with the local Italian commander.',
  Language: 'English, Greek, German, Italian',
  Country: 'UK, France, USA',
  Awards: '2 wins & 5 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMjEwMzE5ODcyMF5BMl5BanBnXkFtZTcwODQ1NjEyMQ@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '5.9/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '28%'
  }, {
    Source: 'Metacritic',
    Value: '36/100'
  }],
  Metascore: '36',
  imdbRating: '5.9',
  imdbVotes: '31,072',
  imdbID: 'tt0238112',
  Type: 'movie',
  DVD: '05 Feb 2002',
  BoxOffice: '$25,261,240',
  Production: 'Universal Pictures',
  Website: 'http://www.captain-corellis-mandolin.com',
  Response: 'True',
  og_id: 'tt0238112'
}, {
  Title: 'Unconditional Love',
  Year: '2002',
  Rated: 'PG-13',
  Released: '23 Aug 2002',
  Runtime: '124 min',
  Genre: 'Comedy, Drama, Musical, Romance, Thriller',
  Director: 'P.J. Hogan',
  Writer: 'Jocelyn Moorhouse, P.J. Hogan',
  Actors: 'Jonathan Pryce, Ashley Anne Ayer, Kaja Stiglic, Lisa Nicole Wilkerson',
  Plot: 'After her husband unexpectedly leaves her, Grace Beasley (Kathy Bates) spontaneously travels to Great Britain to attend the funeral of Victor Fox, a singer she adored. There, she meets the ...',
  Language: 'English',
  Country: 'USA',
  Awards: '1 nomination.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTIwNDU5MjEwOV5BMl5BanBnXkFtZTcwOTU3NjUyMQ@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.9/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '14%'
  }],
  Metascore: 'N/A',
  imdbRating: '6.9',
  imdbVotes: '3,402',
  imdbID: 'tt0219374',
  Type: 'movie',
  DVD: '01 Jun 2004',
  BoxOffice: 'N/A',
  Production: 'New Line Cinema',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0219374'
}, {
  Title: 'Nights in Rodanthe',
  Year: '2008',
  Rated: 'PG-13',
  Released: '26 Sep 2008',
  Runtime: '97 min',
  Genre: 'Drama, Romance',
  Director: 'George C. Wolfe',
  Writer: 'Ann Peacock (screenplay), John Romano (screenplay), Nicholas Sparks (novel)',
  Actors: 'Richard Gere, Diane Lane, Christopher Meloni, Viola Davis',
  Plot: 'A doctor, who is travelling to see his estranged son, sparks with an unhappily married woman at a North Carolina inn.',
  Language: 'English, Spanish',
  Country: 'USA, Australia',
  Awards: '1 nomination.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTI2MDA0MTI0Ml5BMl5BanBnXkFtZTcwMDkzNDMwMg@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.0/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '30%'
  }, {
    Source: 'Metacritic',
    Value: '39/100'
  }],
  Metascore: '39',
  imdbRating: '6.0',
  imdbVotes: '21,187',
  imdbID: 'tt0956038',
  Type: 'movie',
  DVD: '10 Feb 2009',
  BoxOffice: '$41,840,908',
  Production: 'Warner Bros. Pictures/Village Roadshow',
  Website: 'http://www.nightsinrodanthe.com/',
  Response: 'True',
  og_id: 'tt0956038'
}, {
  Title: 'House of Wax',
  Year: '2005',
  Rated: 'R',
  Released: '06 May 2005',
  Runtime: '108 min',
  Genre: 'Horror, Mystery, Thriller',
  Director: 'Jaume Collet-Serra',
  Writer: 'Charles Belden (story), Chad Hayes (screenplay), Carey W. Hayes (screenplay)',
  Actors: 'Elisha Cuthbert, Chad Michael Murray, Brian Van Holt, Paris Hilton',
  Plot: 'A group of unwitting teens are stranded near a strange wax museum and soon must fight to survive and keep from becoming the next exhibit.',
  Language: 'English',
  Country: 'Australia, USA',
  Awards: '5 wins & 11 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BNDA4Nzg1NjQ2NV5BMl5BanBnXkFtZTcwMDYwNTgyMQ@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '5.3/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '25%'
  }, {
    Source: 'Metacritic',
    Value: '41/100'
  }],
  Metascore: '41',
  imdbRating: '5.3',
  imdbVotes: '107,416',
  imdbID: 'tt0397065',
  Type: 'movie',
  DVD: '25 Oct 2005',
  BoxOffice: '$32,000,000',
  Production: 'Warner Bros. Pictures',
  Website: 'http://houseofwaxmovie.warnerbros.com/',
  Response: 'True',
  og_id: 'tt0397065'
}, {
  Title: 'Accepted',
  Year: '2006',
  Rated: 'PG-13',
  Released: '18 Aug 2006',
  Runtime: '93 min',
  Genre: 'Comedy',
  Director: 'Steve Pink',
  Writer: 'Adam Cooper (screenplay), Bill Collage (screenplay), Mark Perez (screenplay), Mark Perez (story)',
  Actors: 'Justin Long, Jonah Hill, Adam Herschman, Columbus Short',
  Plot: "A high school slacker who's rejected by every school he applies to opts to create his own institution of higher learning, the South Harmon Institute of Technology, on a rundown piece of property near his hometown.",
  Language: 'English',
  Country: 'USA',
  Awards: '4 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTkzNzY5OTc3Nl5BMl5BanBnXkFtZTcwNjE4NDQzMQ@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.5/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '37%'
  }, {
    Source: 'Metacritic',
    Value: '47/100'
  }],
  Metascore: '47',
  imdbRating: '6.5',
  imdbVotes: '116,153',
  imdbID: 'tt0384793',
  Type: 'movie',
  DVD: '14 Nov 2006',
  BoxOffice: '$36,300,285',
  Production: 'Universal Pictures',
  Website: 'http://www.acceptedmovie.com/',
  Response: 'True',
  og_id: 'tt0384793'
}, {
  Title: 'Showtime',
  Year: '2002',
  Rated: 'PG-13',
  Released: '15 Mar 2002',
  Runtime: '95 min',
  Genre: 'Action, Comedy, Crime',
  Director: 'Tom Dey',
  Writer: 'Jorge Saralegui (story), Keith Sharon (screenplay), Alfred Gough (screenplay), Miles Millar (screenplay)',
  Actors: 'Robert De Niro, Rachael Harris, Eddie Murphy, Zaid Farid',
  Plot: 'A spoof of buddy cop movies where two very different cops are forced to team up on a new reality based television cop show, while tracking down the manufacturer and distributor of an illegally made semi-automatic firearm.',
  Language: 'English',
  Country: 'USA, Australia',
  Awards: '1 win & 6 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BZTQzNGUyYzEtYzhlOC00YTQzLWJmOGYtOTNlMzE1Yjk4MDkzXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '5.5/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '25%'
  }, {
    Source: 'Metacritic',
    Value: '32/100'
  }],
  Metascore: '32',
  imdbRating: '5.5',
  imdbVotes: '57,464',
  imdbID: 'tt0284490',
  Type: 'movie',
  DVD: '13 Aug 2002',
  BoxOffice: '$37,904,545',
  Production: 'Warner Bros. Pictures',
  Website: 'http://www2.warnerbros.com/showtime',
  Response: 'True',
  og_id: 'tt0284490'
}, {
  Title: 'Lost Horizon',
  Year: '1973',
  Rated: 'G',
  Released: '17 Mar 1973',
  Runtime: '150 min',
  Genre: 'Adventure, Drama, Fantasy, Musical, Romance',
  Director: 'Charles Jarrott',
  Writer: 'Larry Kramer (screenplay), James Hilton (original novel)',
  Actors: 'Peter Finch, Liv Ullmann, Sally Kellerman, George Kennedy',
  Plot: 'While escaping war-torn China, a group of Europeans crash in the Himalayas, where they are rescued and taken to the mysterious Valley of the Blue Moon, Shangri-La. Hidden from the rest of ...',
  Language: 'English, French',
  Country: 'USA',
  Awards: 'N/A',
  Poster: 'https://m.media-amazon.com/images/M/MV5BZGMxOWM1ZGMtYjIzMy00NTUyLThmMWMtZjQzYTRhZTJmNjFmXkEyXkFqcGdeQXVyODU2MDg1NzU@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '5.3/10'
  }],
  Metascore: 'N/A',
  imdbRating: '5.3',
  imdbVotes: '1,860',
  imdbID: 'tt0070337',
  Type: 'movie',
  DVD: '04 Oct 2011',
  BoxOffice: 'N/A',
  Production: 'RCA Video',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0070337'
}, {
  Title: 'Head',
  Year: '1968',
  Rated: 'N/A',
  Released: '20 Nov 1968',
  Runtime: '86 min',
  Genre: 'Comedy, Fantasy, Musical',
  Director: 'Bob Rafelson',
  Writer: 'Bob Rafelson, Jack Nicholson',
  Actors: 'Peter Tork, Davy Jones, Micky Dolenz, Michael Nesmith',
  Plot: 'The Monkees are tossed about in a psychedelic, surrealist, plotless, circular bit of fun fluff.',
  Language: 'English, Italian',
  Country: 'USA',
  Awards: 'N/A',
  Poster: 'https://m.media-amazon.com/images/M/MV5BZjMxYTIxOTItYzU4ZC00ZjA5LWFmOGUtYjFlMjM2MmEwM2VlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.6/10'
  }],
  Metascore: 'N/A',
  imdbRating: '6.6',
  imdbVotes: '5,053',
  imdbID: 'tt0063049',
  Type: 'movie',
  DVD: 'N/A',
  BoxOffice: 'N/A',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0168077'
}, {
  Title: 'Separate Lies',
  Year: '2005',
  Rated: 'R',
  Released: '18 Nov 2005',
  Runtime: '85 min',
  Genre: 'Drama, Romance, Thriller',
  Director: 'Julian Fellowes',
  Writer: 'Nigel Balchin (based on the novel by "A Way Through the Wood"), Julian Fellowes',
  Actors: 'Tom Wilkinson, Emily Watson, Hermione Norris, John Warnaby',
  Plot: "A couple's marriage is complicated by the introduction of a third party.",
  Language: 'English, French',
  Country: 'UK',
  Awards: '1 win & 5 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMTI3NjI5OTE1Ml5BMl5BanBnXkFtZTYwMzU3NDQ3._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.5/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '71%'
  }, {
    Source: 'Metacritic',
    Value: '71/100'
  }],
  Metascore: '71',
  imdbRating: '6.5',
  imdbVotes: '3,864',
  imdbID: 'tt0369053',
  Type: 'movie',
  DVD: '21 Feb 2006',
  BoxOffice: '$849,496',
  Production: 'Fox Searchlight Pictures',
  Website: 'http://www.foxsearchlight.com/separatelies/',
  Response: 'True',
  og_id: 'tt0369053'
}, {
  Title: 'Death Wish 3',
  Year: '1985',
  Rated: 'R',
  Released: '01 Nov 1985',
  Runtime: '92 min',
  Genre: 'Action, Crime, Drama, Thriller',
  Director: 'Michael Winner',
  Writer: 'Don Jakoby, Brian Garfield (characters created by)',
  Actors: 'Charles Bronson, Deborah Raffin, Ed Lauter, Martin Balsam',
  Plot: 'Architect/vigilante Paul Kersey arrives back in New York City and is forcibly recruited by a crooked police chief to fight street crime caused by a large gang terrorizing the neighborhoods.',
  Language: 'English',
  Country: 'USA, Israel, UK',
  Awards: 'N/A',
  Poster: 'https://m.media-amazon.com/images/M/MV5BYWE3ZGYzZmQtNjc0Yy00NTkzLTkxZTQtNTljNzE5NGU2ZjJlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '5.9/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '6%'
  }, {
    Source: 'Metacritic',
    Value: '18/100'
  }],
  Metascore: '18',
  imdbRating: '5.9',
  imdbVotes: '12,668',
  imdbID: 'tt0089003',
  Type: 'movie',
  DVD: '03 Feb 2004',
  BoxOffice: 'N/A',
  Production: 'MGM Home Entertainment',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0089003'
}, {
  Title: 'O Brother, Where Art Thou?',
  Year: '2000',
  Rated: 'PG-13',
  Released: '02 Feb 2001',
  Runtime: '107 min',
  Genre: 'Adventure, Comedy, Crime, Music',
  Director: 'Joel Coen, Ethan Coen',
  Writer: 'Homer (epic poem "The Odyssey"), Ethan Coen, Joel Coen',
  Actors: 'George Clooney, John Turturro, Tim Blake Nelson, John Goodman',
  Plot: 'In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them.',
  Language: 'English',
  Country: 'UK, France, USA',
  Awards: 'Nominated for 2 Oscars. Another 7 wins & 35 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMjZkOTdmMWItOTkyNy00MDdjLTlhNTQtYzU3MzdhZjA0ZDEyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '7.8/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '77%'
  }, {
    Source: 'Metacritic',
    Value: '69/100'
  }],
  Metascore: '69',
  imdbRating: '7.8',
  imdbVotes: '263,533',
  imdbID: 'tt0190590',
  Type: 'movie',
  DVD: '12 Jun 2001',
  BoxOffice: '$45,150,731',
  Production: 'Buena Vista',
  Website: 'http://studio.go.com/movies/obrother/index.html',
  Response: 'True',
  og_id: 'tt0215002'
}, {
  Title: "Don't Torture a Duckling",
  Year: '1972',
  Rated: 'Not Rated',
  Released: '29 Sep 1972',
  Runtime: '105 min',
  Genre: 'Horror, Mystery, Thriller',
  Director: 'Lucio Fulci',
  Writer: 'Lucio Fulci (story), Roberto Gianviti (story), Lucio Fulci (screenplay), Roberto Gianviti (screenplay), Gianfranco Clerici (screenplay)',
  Actors: 'Florinda Bolkan, Barbara Bouchet, Tomas Milian, Irene Papas',
  Plot: 'A reporter and a promiscuous young woman try to solve a series of child killings in a remote southern Italian town rife with superstition and a distrust of outsiders.',
  Language: 'Italian, English',
  Country: 'Italy',
  Awards: 'N/A',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMWNkMTMwNGYtM2E2YS00MjQzLTk5NWItNGMzMjc0MjI1NTM1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '7.1/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '80%'
  }],
  Metascore: 'N/A',
  imdbRating: '7.1',
  imdbVotes: '6,775',
  imdbID: 'tt0069019',
  Type: 'movie',
  DVD: '06 Aug 2002',
  BoxOffice: 'N/A',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0069019'
}, {
  Title: 'Fire',
  Year: '1996',
  Rated: 'Unrated',
  Released: '22 Aug 1997',
  Runtime: '104 min',
  Genre: 'Drama, Romance',
  Director: 'Deepa Mehta',
  Writer: 'Deepa Mehta',
  Actors: 'Karishma Jhalani, Ramanjeet Kaur, Dilip Mehta, Javed Jaffrey',
  Plot: 'Two women who are abandoned by their husbands, find love and solace in each other.',
  Language: 'English, Hindi',
  Country: 'Canada, India',
  Awards: 'N/A',
  Poster: 'https://m.media-amazon.com/images/M/MV5BZDJlNjk0NDMtZGYxYy00ZGMxLTljOTUtYTgzZmQ0ODlhY2IzXkEyXkFqcGdeQXVyNTM0NTU5Mg@@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '7.3/10'
  }, {
    Source: 'Metacritic',
    Value: '64/100'
  }],
  Metascore: '64',
  imdbRating: '7.3',
  imdbVotes: '5,327',
  imdbID: 'tt0116308',
  Type: 'movie',
  DVD: 'N/A',
  BoxOffice: 'N/A',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0184474'
}, {
  Title: 'Big Fat Liar',
  Year: '2002',
  Rated: 'PG',
  Released: '08 Feb 2002',
  Runtime: '88 min',
  Genre: 'Adventure, Comedy, Family',
  Director: 'Shawn Levy',
  Writer: 'Dan Schneider (story), Brian Robbins (story), Dan Schneider (screenplay)',
  Actors: 'Frankie Muniz, Paul Giamatti, Amanda Bynes, Amanda Detmer',
  Plot: "After a young boy's school essay erroneously finds its way into the hands of a Hollywood producer who turns the idea into a hit film, the boy travels to Los Angeles to claim his credit.",
  Language: 'English',
  Country: 'USA, Germany',
  Awards: '1 win & 3 nominations.',
  Poster: 'https://m.media-amazon.com/images/M/MV5BNmEyNGFmODYtZjhjNC00NGViLTllMjQtYWYyZmQ1OGEzMzRlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '5.4/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '42%'
  }, {
    Source: 'Metacritic',
    Value: '36/100'
  }],
  Metascore: '36',
  imdbRating: '5.4',
  imdbVotes: '32,545',
  imdbID: 'tt0265298',
  Type: 'movie',
  DVD: '24 Sep 2002',
  BoxOffice: '$47,811,275',
  Production: 'Universal Pictures',
  Website: 'http://www.bigfatliarmovie.com',
  Response: 'True',
  og_id: 'tt0265298'
}, {
  Title: 'The Man with the Golden Arm',
  Year: '1955',
  Rated: 'PASSED',
  Released: '16 Jan 1956',
  Runtime: '119 min',
  Genre: 'Crime, Drama, Film-Noir',
  Director: 'Otto Preminger',
  Writer: 'Walter Newman (screenplay), Lewis Meltzer (screenplay), Nelson Algren (from the novel by)',
  Actors: 'Frank Sinatra, Eleanor Parker, Kim Novak, Arnold Stang',
  Plot: 'A strung-out junkie deals with a demoralizing drug addiction while his crippled wife and card sharks pull him down.',
  Language: 'English',
  Country: 'USA',
  Awards: 'Nominated for 3 Oscars. Another 5 nominations.',
  Poster: 'https://ia.media-imdb.com/images/M/MV5BNzkzODY5YTctZmE5Yy00ZmQyLWE2NzQtNzVlNjc3MTYxZTBiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '7.5/10'
  }, {
    Source: 'Rotten Tomatoes',
    Value: '86%'
  }],
  Metascore: 'N/A',
  imdbRating: '7.5',
  imdbVotes: '7,913',
  imdbID: 'tt0048347',
  Type: 'movie',
  DVD: '16 May 2000',
  BoxOffice: 'N/A',
  Production: 'United Artists',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0048347'
}, {
  Title: 'Just Before Dawn',
  Year: '1981',
  Rated: 'R',
  Released: '27 Nov 1981',
  Runtime: '90 min',
  Genre: 'Horror, Thriller',
  Director: 'Jeff Lieberman',
  Writer: 'Mark Arywitz (screenplay), Jeff Lieberman (screenplay), Jonas Middleton (story)',
  Actors: 'George Kennedy, Mike Kellin, Chris Lemmon, Gregg Henry',
  Plot: 'Five campers arrive in the mountains to examine some property they have bought, but are warned by Forest Ranger Roy McLean that a huge machete-wielding maniac has been terrorising the area....',
  Language: 'English',
  Country: 'USA',
  Awards: 'N/A',
  Poster: 'https://m.media-amazon.com/images/M/MV5BYTc5YjNiN2MtM2JjYy00NDRmLThlNWUtMmFiNDFkNmRlMTA2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  Ratings: [{
    Source: 'Internet Movie Database',
    Value: '6.3/10'
  }],
  Metascore: 'N/A',
  imdbRating: '6.3',
  imdbVotes: '4,438',
  imdbID: 'tt0082592',
  Type: 'movie',
  DVD: '26 Jul 2005',
  BoxOffice: 'N/A',
  Production: 'Picturemedia Ltd.',
  Website: 'N/A',
  Response: 'True',
  og_id: 'tt0082592'
}];

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

var router_1 = __webpack_require__(/*! next/router */ "next/router");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function (_ref) {
      var Component = _ref.Component,
          router = _ref.router,
          ctx = _ref.ctx;

      try {
        return _promise.default.resolve(utils_1.loadGetInitialProps(Component, ctx)).then(function (pageProps) {
          return {
            pageProps: pageProps
          };
        });
      } catch (e) {
        return _promise.default.reject(e);
      }
    }
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (true) {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/Index.js":
/*!************************!*\
  !*** ./pages/Index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parts/PrefixedLink */ "./parts/PrefixedLink.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! chroma-js */ "chroma-js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../parts/Bar */ "./parts/Bar.js");
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
/* harmony import */ var _parts_MovieGrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../parts/MovieGrid */ "./parts/MovieGrid.js");





var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/Index.js";









var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {// let boxed = data.reduce((dict, current) => {
      //   let slice = Object.assign({}, dict)
      //   if (slice[current.url] === undefined) {
      //     slice[current.url] = 'exists'
      //   }
      //   return slice
      // }, {})
      // let movie_keys = Object.keys(boxed)
      // var promises = movie_keys.map((k, i) => {
      //   return fetch(`http://www.omdbapi.com/?apikey=af4abd65&i=${k}`)
      //     .then(r => r.json())
      //     .then(json => {
      //       let og_id = k
      //       if (json.Title === '#DUPE#') {
      //         return fetch(
      //           `http://www.omdbapi.com/?apikey=af4abd65&i=${json.imdbID}`
      //         )
      //           .then(r => r.json())
      //           .then(json => {
      //             let json_mod = Object.assign({}, json)
      //             json_mod.og_id = og_id
      //             return json_mod
      //           })
      //       } else {
      //         let json_mod = Object.assign({}, json)
      //         json_mod.og_id = og_id
      //         return json_mod
      //       }
      //     })
      // })
      // Promise.all(promises).then(function(results) {
      //   console.log(JSON.stringify(results))
      // })
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          font_size = _this$props.font_size,
          line_height = _this$props.line_height,
          grem = _this$props.grem,
          analyze = _this$props.analyze,
          data = _this$props.data,
          info = _this$props.info,
          reviews = _this$props.reviews,
          setAnalyze = _this$props.setAnalyze,
          sort = _this$props.sort,
          setSort = _this$props.setSort,
          show_accuracy = _this$props.show_accuracy,
          setAccuracy = _this$props.setAccuracy,
          compare = _this$props.compare,
          setCompare = _this$props.setCompare,
          nbsvm_data = _this$props.nbsvm_data; // compare and show_accuracy only when analyze is on

      show_accuracy = show_accuracy && analyze;
      compare = compare && analyze;
      var stick_top = grem * 2;
      if (show_accuracy || compare) stick_top = grem * 3;

      if (show_accuracy && compare) {
        stick_top = grem * 5;
      } else if (show_accuracy) {
        stick_top = grem * 3;
      } else if (compare) {
        stick_top = grem * 4;
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          paddingBottom: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Bar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        grem: grem,
        setAnalyze: setAnalyze,
        analyze: analyze,
        total: true,
        setAlgo: this.props.setAlgo,
        algnames: this.props.algnames,
        data_select: this.props.data_select,
        show_accuracy: show_accuracy,
        setAccuracy: setAccuracy,
        compare: compare,
        setCompare: setCompare,
        data: data,
        nbsvm_data: nbsvm_data,
        is_front: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          position: 'sticky',
          top: stick_top,
          background: 'white',
          zIndex: 99
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          paddingLeft: grem / 2,
          paddingRight: grem / 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, data.length, " movies & shows sorted by most:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          display: 'flex',
          paddingRight: grem / 4,
          paddingTop: grem / 2,
          paddingBottom: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, (analyze ? show_accuracy ? [['reviews', 'reviews'], ['positive', 'positive'], ['negative', 'negative'], ['accurate', 'accurate'], ['inaccurate', 'inaccurate']] : [['reviews', 'reviews'], ['positive', 'positive'], ['negative', 'negative']] : [['reviews', 'reviews']]).map(function (a) {
        return sort === a[1] ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            paddingLeft: grem / 4,
            paddingRight: grem / 4,
            background: '#222',
            color: 'white'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }, a[0]) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          onClick: function onClick() {
            setSort(a[1]);
          },
          style: {
            paddingLeft: grem / 4,
            paddingRight: grem / 4,
            textDecoration: 'underline'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        }, a[0]);
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Static__WEBPACK_IMPORTED_MODULE_11__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          display: compare ? 'grid' : 'block',
          gridTemplateColumns: '1fr 1fr',
          marginBottom: -grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, compare ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginRight: -1,
          borderRight: 'solid 2px black'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginRight: -1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_MovieGrid__WEBPACK_IMPORTED_MODULE_12__["default"], {
        data: nbsvm_data,
        info: info,
        grem: grem,
        sort: sort,
        analyze: analyze,
        show_accuracy: show_accuracy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }))) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_MovieGrid__WEBPACK_IMPORTED_MODULE_12__["default"], {
        data: data,
        info: info,
        grem: grem,
        sort: sort,
        analyze: analyze,
        show_accuracy: show_accuracy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/Topic2.js":
/*!*************************!*\
  !*** ./pages/Topic2.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chroma-js */ "chroma-js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data_corpora_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/corpora.js */ "./data/corpora.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-server/config */ "next-server/config");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../parts/Bar */ "./parts/Bar.js");
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
/* harmony import */ var _parts_Sentences__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../parts/Sentences */ "./parts/Sentences.js");
/* harmony import */ var _parts_Reviews__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../parts/Reviews */ "./parts/Reviews.js");





var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/Topic2.js";












var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_11___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var linkPrefix = publicRuntimeConfig.linkPrefix;

var Page =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Page, _React$Component);

  function Page(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Page).call(this, props));
    _this.state = {
      show_all_positive: false,
      show_all_negative: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          font_size = _this$props.font_size,
          line_height = _this$props.line_height,
          data_select = _this$props.data_select,
          grem = _this$props.grem,
          router = _this$props.router,
          analyze = _this$props.analyze,
          data = _this$props.data,
          info = _this$props.info,
          setAnalyze = _this$props.setAnalyze,
          review_sort = _this$props.review_sort,
          setReviewSort = _this$props.setReviewSort,
          show_accuracy = _this$props.show_accuracy,
          setAccuracy = _this$props.setAccuracy,
          compare = _this$props.compare,
          setCompare = _this$props.setCompare,
          nbsvm_data = _this$props.nbsvm_data;
      console.log(this.props);
      var info_ids = info.map(function (o) {
        return o.og_id;
      });
      var topic_info = info[info_ids.indexOf(router.query.id)];
      var reviews = data.filter(function (o) {
        return o.url === router.query.id;
      });
      var nreviews = nbsvm_data.filter(function (o) {
        return o.url === router.query.id;
      }); // compare and show_accuracy only when analyze is on

      show_accuracy = show_accuracy && analyze;
      compare = compare && analyze;
      var stick_top = grem * 2;
      if (show_accuracy || compare) stick_top = grem * 3;

      if (show_accuracy && compare) {
        stick_top = grem * 5;
      } else if (show_accuracy) {
        stick_top = grem * 3;
      } else if (compare) {
        stick_top = grem * 4;
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Bar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        grem: grem,
        setAnalyze: setAnalyze,
        analyze: analyze,
        setAlgo: this.props.setAlgo,
        algnames: this.props.algnames,
        data_select: this.props.data_select,
        show_accuracy: show_accuracy,
        setAccuracy: setAccuracy,
        compare: compare,
        setCompare: setCompare,
        data: reviews,
        nbsvm_data: nreviews,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          maxWidth: 700,
          margin: '0 auto',
          padding: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginBottom: grem * 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, topic_info.Title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          textIndent: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, topic_info.Year, " \xB7 ", topic_info.Runtime, " \xB7", ' ', topic_info.Rated), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          textIndent: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, topic_info.Plot, ' ', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.imdb.com/title/".concat(topic_info.imdbID),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "IMDB \u2192"))))), analyze ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          zIndex: 998,
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, compare ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Static__WEBPACK_IMPORTED_MODULE_13__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          maxWidth: compare ? 700 * 2 + grem + 2 : 700,
          margin: '0 auto',
          display: compare ? 'grid' : 'block',
          gridTemplateColumns: '1fr 1fr'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, compare ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          borderRight: 'solid 1px black'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Sentences__WEBPACK_IMPORTED_MODULE_14__["default"], {
        grem: grem,
        reviews: nreviews,
        analyze: analyze,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          borderLeft: compare ? 'solid 1px black' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Sentences__WEBPACK_IMPORTED_MODULE_14__["default"], {
        grem: grem,
        reviews: reviews,
        analyze: analyze,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }))), compare ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Static__WEBPACK_IMPORTED_MODULE_13__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }) : null) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          position: 'sticky',
          top: stick_top,
          background: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          maxWidth: compare ? 700 * 2 + grem : 700,
          margin: '0 auto',
          padding: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          display: 'flex',
          paddingRight: grem / 4,
          marginLeft: -grem / 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          paddingLeft: grem / 4,
          paddingRight: grem / 4
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, reviews.length, " reviews sorted by most:"), (analyze ? show_accuracy ? [['recent', 'date'], ['positive', 'positive'], ['negative', 'negative'], ['accurate', 'accurate'], ['inaccurate', 'inaccurate']] : [['recent', 'date'], ['positive', 'positive'], ['negative', 'negative']] : [['recent', 'date']]).map(function (a) {
        return review_sort === a[1] ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          style: {
            paddingLeft: grem / 4,
            paddingRight: grem / 4,
            background: '#222',
            color: 'white'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, a[0]) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
          onClick: function onClick() {
            setReviewSort(a[1]);
          },
          style: {
            paddingLeft: grem / 4,
            paddingRight: grem / 4,
            textDecoration: 'underline'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, a[0]);
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Static__WEBPACK_IMPORTED_MODULE_13__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          maxWidth: compare ? 700 * 2 + grem + 2 : 700,
          margin: '0 auto',
          display: compare ? 'grid' : 'block',
          gridTemplateColumns: '1fr 1fr'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, compare ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          borderRight: 'solid 1px black'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Reviews__WEBPACK_IMPORTED_MODULE_15__["default"], {
        reviews: nreviews,
        grem: grem,
        analyze: analyze,
        show_accuracy: show_accuracy,
        review_sort: review_sort,
        setReviewSort: setReviewSort,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      })) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          borderLeft: compare ? 'solid 1px black' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Reviews__WEBPACK_IMPORTED_MODULE_15__["default"], {
        reviews: reviews,
        grem: grem,
        analyze: analyze,
        show_accuracy: show_accuracy,
        review_sort: review_sort,
        setReviewSort: setReviewSort,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }))));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Page));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../data/sample_movie_info.js */ "./data/sample_movie_info.js");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next-server/config */ "next-server/config");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _data_corpora_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../data/corpora.js */ "./data/corpora.js");
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
/* harmony import */ var _parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../parts/PrefixedLink */ "./parts/PrefixedLink.js");
/* harmony import */ var _parts_Bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../parts/Bar */ "./parts/Bar.js");
/* harmony import */ var _parts_Header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../parts/Header */ "./parts/Header.js");
/* harmony import */ var _parts_Tour__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../parts/Tour */ "./parts/Tour.js");











var _jsxFileName = "/Users/grant.custer/Sites/next-movies/pages/_app.js";








var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_15___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var linkPrefix = publicRuntimeConfig.linkPrefix;




var algnames = ['NBSVM', 'BERT'];
var algfiles = ['nbsvm_lime_grouped_pretty.json', 'bert_lime_grouped_pretty.json', 'nbsvm_lime_grouped_pretty_word.json'];
var data_keys = [['nbsvm_data', 'nbsvm_lime_grouped_pretty.json', 'NBSVM'], ['bert_data', 'bert_lime_grouped_pretty.json', 'BERT']];

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(MyApp, _App);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(MyApp, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function MyApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, MyApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp).call(this, props));
    _this.state = {
      analyze: true,
      data_select: 1,
      show_accuracy: false,
      sort: 'reviews',
      review_sort: 'date',
      nbsvm_data: null,
      compare: false,
      bert_data: null,
      show_info: false
    };
    _this.setAnalyze = _this.setAnalyze.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.setReviewSort = _this.setReviewSort.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.setAccuracy = _this.setAccuracy.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.setSort = _this.setSort.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.setAlgo = _this.setAlgo.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.setCompare = _this.setCompare.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(MyApp, [{
    key: "fetchData",
    value: function fetchData() {
      var _this2 = this;

      fetch(linkPrefix + '/static/data/' + algfiles[0]).then(function (r) {
        return r.json();
      }).then(function (r) {
        fetch(linkPrefix + '/static/data/names_and_dates.json').then(function (nd) {
          return nd.json();
        }).then(function (nd) {
          var reviews = r.map(function (r, i) {
            var new_r = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, r);

            new_r.index = i;
            new_r.author = nd[i].author;
            new_r.date = nd[i].date;
            return new_r;
          });
          var key = data_keys[0][0];

          _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, key, reviews));
        });
      });
      fetch(linkPrefix + '/static/data/' + algfiles[1]).then(function (r) {
        return r.json();
      }).then(function (r) {
        fetch(linkPrefix + '/static/data/names_and_dates.json').then(function (nd) {
          return nd.json();
        }).then(function (nd) {
          var reviews = r.map(function (r, i) {
            var new_r = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, r);

            new_r.index = i;
            new_r.author = nd[i].author;
            new_r.date = nd[i].date;
            return new_r;
          });
          var key = data_keys[1][0];

          _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, key, reviews));
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: "setAnalyze",
    value: function setAnalyze(value) {
      this.setState({
        analyze: value
      });
    }
  }, {
    key: "setReviewSort",
    value: function setReviewSort(value) {
      this.setState({
        review_sort: value
      });
    }
  }, {
    key: "setSort",
    value: function setSort(value) {
      this.setState({
        sort: value
      });
    }
  }, {
    key: "setAlgo",
    value: function setAlgo(index) {
      this.setState({
        data_select: index
      });
    }
  }, {
    key: "setAccuracy",
    value: function setAccuracy(value) {
      this.setState({
        show_accuracy: value
      });
    }
  }, {
    key: "setCompare",
    value: function setCompare(value) {
      this.setState({
        compare: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _React$createElement;

      var _this$state = this.state,
          analyze = _this$state.analyze,
          sort = _this$state.sort,
          review_sort = _this$state.review_sort,
          show_accuracy = _this$state.show_accuracy,
          show_info = _this$state.show_info;
      var data = this.state[data_keys[this.state.data_select][0]];
      if (analyze === false) show_accuracy = false;
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var font_size = 16;
      var line_height = 1.5;
      var grem = font_size * line_height;
      var pathname = this.props.router.pathname;
      var is_front = pathname === '/';
      var is_topic = pathname.startsWith('/topic');
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a, {
        id: "2343230763",
        __self: this
      }, "*{box-sizing:border-box;font-family:sans-serif;}html{background:#222;}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;font-size:16px;line-height:1.5;background:white;overflow-x:hidden;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New', monospace;}p{margin:0;text-indent:1.5rem;}p:first-child{text-indent:0;}a,button{color:inherit;-webkit-transition:opacity 0.1s linear;transition:opacity 0.1s linear;}a:hover,button:hover{opacity:0.75;}a.no-opacity-hover:hover,button.no-opacity-hover:hover{opacity:1;}a.no-underline{-webkit-text-decoration:none;text-decoration:none;}.opacity-inner-hover{-webkit-transition:opacity 0.1s linear;transition:opacity 0.1s linear;}a:hover .opacity-inner-hover,button:hover .opacity-inner-hover{opacity:0.75;}button{font:inherit;font-size:inherit;line-height:inherit;border:none;padding:0;margin:0;background:transparent;cursor:pointer;}button:focus{outline:none;}.hover-block{position:absolute;left:0;top:0;right:0;bottom:0;}.hover-block-container .hover-block{display:block;pointer-events:none;opacity:0;-webkit-transition:opacity 0.1s linear;transition:opacity 0.1s linear;background:rgba(0,0,0,0.0625);}.hover-block-container:hover .hover-block{display:block;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0STJCLEFBR21DLEFBSU4sQUFHUCxBQWFFLEFBR0YsQUFJSyxBQUlBLEFBS0QsQUFJSCxBQUdXLEFBR1UsQUFJbEIsQUFHQSxBQVVBLEFBR0ssQUFPSixBQU9BLFNBdEVnQixBQWNYLENBaUJyQixHQUpBLEFBY0EsQUFHb0IsQUFVcEIsQ0FwQ0EsQUFJaUMsQUEwQ1gsQUFPVixFQTVFWixFQThEUyxJQWxFZ0IsRUFpRnpCLENBZFEsR0EzQ1IsR0E4QnNCLEFBY1osR0FNRSxLQUxELEtBTXNCLENBMUVqQyxHQXFFQSxFQTNCQSxDQVljLFlBQ0YsT0FWWixHQVdXLEVBckNYLE9Bc0N5QixFQTFCekIscUJBMkJpQixTQWlCa0IsTUFoQm5DLHdCQWlCQSxlQW5FaUIsZUFDQyxnQkFDQyxpQkFDQyxrQkFDaUIsbUNBQ0Qsa0NBQ3BDIiwiZmlsZSI6Ii9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBpbmZvIH0gZnJvbSAnLi4vZGF0YS9zYW1wbGVfbW92aWVfaW5mby5qcydcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC1zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgbm91bnMsIGFkamVjdGl2ZXMgfSBmcm9tICcuLi9kYXRhL2NvcnBvcmEuanMnXG5pbXBvcnQgeyByZWQsIGJsdWUsIEJvcmRlciB9IGZyb20gJy4uL3BhcnRzL1N0YXRpYydcbmxldCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpXG5sZXQgbGlua1ByZWZpeCA9IHB1YmxpY1J1bnRpbWVDb25maWcubGlua1ByZWZpeFxuaW1wb3J0IExpbmsgZnJvbSAnLi4vcGFydHMvUHJlZml4ZWRMaW5rJ1xuaW1wb3J0IEJhciBmcm9tICcuLi9wYXJ0cy9CYXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL3BhcnRzL0hlYWRlcidcbmltcG9ydCBUb3VyIGZyb20gJy4uL3BhcnRzL1RvdXInXG5cbmxldCBhbGduYW1lcyA9IFsnTkJTVk0nLCAnQkVSVCddXG5sZXQgYWxnZmlsZXMgPSBbXG4gICduYnN2bV9saW1lX2dyb3VwZWRfcHJldHR5Lmpzb24nLFxuICAnYmVydF9saW1lX2dyb3VwZWRfcHJldHR5Lmpzb24nLFxuICAnbmJzdm1fbGltZV9ncm91cGVkX3ByZXR0eV93b3JkLmpzb24nLFxuXVxubGV0IGRhdGFfa2V5cyA9IFtcbiAgWyduYnN2bV9kYXRhJywgJ25ic3ZtX2xpbWVfZ3JvdXBlZF9wcmV0dHkuanNvbicsICdOQlNWTSddLFxuICBbJ2JlcnRfZGF0YScsICdiZXJ0X2xpbWVfZ3JvdXBlZF9wcmV0dHkuanNvbicsICdCRVJUJ10sXG5dXG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pIHtcbiAgICBsZXQgcGFnZVByb3BzID0ge31cblxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICB9XG5cbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYW5hbHl6ZTogdHJ1ZSxcbiAgICAgIGRhdGFfc2VsZWN0OiAxLFxuICAgICAgc2hvd19hY2N1cmFjeTogZmFsc2UsXG4gICAgICBzb3J0OiAncmV2aWV3cycsXG4gICAgICByZXZpZXdfc29ydDogJ2RhdGUnLFxuICAgICAgbmJzdm1fZGF0YTogbnVsbCxcbiAgICAgIGNvbXBhcmU6IGZhbHNlLFxuICAgICAgYmVydF9kYXRhOiBudWxsLFxuICAgICAgc2hvd19pbmZvOiBmYWxzZSxcbiAgICB9XG4gICAgdGhpcy5zZXRBbmFseXplID0gdGhpcy5zZXRBbmFseXplLmJpbmQodGhpcylcbiAgICB0aGlzLnNldFJldmlld1NvcnQgPSB0aGlzLnNldFJldmlld1NvcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0QWNjdXJhY3kgPSB0aGlzLnNldEFjY3VyYWN5LmJpbmQodGhpcylcbiAgICB0aGlzLnNldFNvcnQgPSB0aGlzLnNldFNvcnQuYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0QWxnbyA9IHRoaXMuc2V0QWxnby5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRDb21wYXJlID0gdGhpcy5zZXRDb21wYXJlLmJpbmQodGhpcylcbiAgfVxuXG4gIGZldGNoRGF0YSgpIHtcbiAgICBmZXRjaChsaW5rUHJlZml4ICsgJy9zdGF0aWMvZGF0YS8nICsgYWxnZmlsZXNbMF0pXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4ociA9PiB7XG4gICAgICAgIGZldGNoKGxpbmtQcmVmaXggKyAnL3N0YXRpYy9kYXRhL25hbWVzX2FuZF9kYXRlcy5qc29uJylcbiAgICAgICAgICAudGhlbihuZCA9PiBuZC5qc29uKCkpXG4gICAgICAgICAgLnRoZW4obmQgPT4ge1xuICAgICAgICAgICAgbGV0IHJldmlld3MgPSByLm1hcCgociwgaSkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbmV3X3IgPSBPYmplY3QuYXNzaWduKHt9LCByKVxuICAgICAgICAgICAgICBuZXdfci5pbmRleCA9IGlcbiAgICAgICAgICAgICAgbmV3X3IuYXV0aG9yID0gbmRbaV0uYXV0aG9yXG4gICAgICAgICAgICAgIG5ld19yLmRhdGUgPSBuZFtpXS5kYXRlXG4gICAgICAgICAgICAgIHJldHVybiBuZXdfclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCBrZXkgPSBkYXRhX2tleXNbMF1bMF1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBba2V5XTogcmV2aWV3cyB9KVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgIGZldGNoKGxpbmtQcmVmaXggKyAnL3N0YXRpYy9kYXRhLycgKyBhbGdmaWxlc1sxXSlcbiAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAudGhlbihyID0+IHtcbiAgICAgICAgZmV0Y2gobGlua1ByZWZpeCArICcvc3RhdGljL2RhdGEvbmFtZXNfYW5kX2RhdGVzLmpzb24nKVxuICAgICAgICAgIC50aGVuKG5kID0+IG5kLmpzb24oKSlcbiAgICAgICAgICAudGhlbihuZCA9PiB7XG4gICAgICAgICAgICBsZXQgcmV2aWV3cyA9IHIubWFwKChyLCBpKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBuZXdfciA9IE9iamVjdC5hc3NpZ24oe30sIHIpXG4gICAgICAgICAgICAgIG5ld19yLmluZGV4ID0gaVxuICAgICAgICAgICAgICBuZXdfci5hdXRob3IgPSBuZFtpXS5hdXRob3JcbiAgICAgICAgICAgICAgbmV3X3IuZGF0ZSA9IG5kW2ldLmRhdGVcbiAgICAgICAgICAgICAgcmV0dXJuIG5ld19yXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGV0IGtleSA9IGRhdGFfa2V5c1sxXVswXVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtrZXldOiByZXZpZXdzIH0pXG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoRGF0YSgpXG4gIH1cblxuICBzZXRBbmFseXplKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFuYWx5emU6IHZhbHVlIH0pXG4gIH1cblxuICBzZXRSZXZpZXdTb3J0KHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJldmlld19zb3J0OiB2YWx1ZSB9KVxuICB9XG5cbiAgc2V0U29ydCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzb3J0OiB2YWx1ZSB9KVxuICB9XG5cbiAgc2V0QWxnbyhpbmRleCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhX3NlbGVjdDogaW5kZXggfSlcbiAgfVxuXG4gIHNldEFjY3VyYWN5KHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dfYWNjdXJhY3k6IHZhbHVlIH0pXG4gIH1cblxuICBzZXRDb21wYXJlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbXBhcmU6IHZhbHVlIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgYW5hbHl6ZSwgc29ydCwgcmV2aWV3X3NvcnQsIHNob3dfYWNjdXJhY3ksIHNob3dfaW5mbyB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IGRhdGEgPSB0aGlzLnN0YXRlW2RhdGFfa2V5c1t0aGlzLnN0YXRlLmRhdGFfc2VsZWN0XVswXV1cblxuICAgIGlmIChhbmFseXplID09PSBmYWxzZSkgc2hvd19hY2N1cmFjeSA9IGZhbHNlXG5cbiAgICBsZXQgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGxldCBmb250X3NpemUgPSAxNlxuICAgIGxldCBsaW5lX2hlaWdodCA9IDEuNVxuICAgIGxldCBncmVtID0gZm9udF9zaXplICogbGluZV9oZWlnaHRcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMucm91dGVyXG5cbiAgICBsZXQgaXNfZnJvbnQgPSBwYXRobmFtZSA9PT0gJy8nXG4gICAgbGV0IGlzX3RvcGljID0gcGF0aG5hbWUuc3RhcnRzV2l0aCgnL3RvcGljJylcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsXG4gICAgICAgICAgICAgICdPeHlnZW4nLCAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsXG4gICAgICAgICAgICAgICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvZGUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdDb3VyaWVyIE5ldycsXG4gICAgICAgICAgICAgIG1vbm9zcGFjZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLFxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIsXG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEubm8tb3BhY2l0eS1ob3Zlcjpob3ZlcixcbiAgICAgICAgICBidXR0b24ubm8tb3BhY2l0eS1ob3Zlcjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLm5vLXVuZGVybGluZSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcGFjaXR5LWlubmVyLWhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIgLm9wYWNpdHktaW5uZXItaG92ZXIsXG4gICAgICAgICAgYnV0dG9uOmhvdmVyIC5vcGFjaXR5LWlubmVyLWhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBmb250OiBpbmhlcml0O1xuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXItYmxvY2sge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXItYmxvY2stY29udGFpbmVyIC5ob3Zlci1ibG9jayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBsaW5lYXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYyNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ob3Zlci1ibG9jay1jb250YWluZXI6aG92ZXIgLmhvdmVyLWJsb2NrIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiAke3Nob3dfaW5mbyA/ICdoaWRkZW4nIDogJ2F1dG8nfTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIGlzX2Zyb250PXtpc19mcm9udH1cbiAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgIGFuYWx5emU9e2FuYWx5emV9XG4gICAgICAgICAgc2hvd19hY2N1cmFjeT17c2hvd19hY2N1cmFjeX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtaW5IZWlnaHQ6IGBjYWxjKDEwMHZoIC0gJHtncmVtICogNCArIDF9cHgpYCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2RhdGEgJiYgdGhpcy5zdGF0ZS5uYnN2bV9kYXRhID8gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgICAgICAgICAgZm9udF9zaXplPXtmb250X3NpemV9XG4gICAgICAgICAgICAgICAgbGluZV9oZWlnaHQ9e2xpbmVfaGVpZ2h0fVxuICAgICAgICAgICAgICAgIGdyZW09e2dyZW19XG4gICAgICAgICAgICAgICAgYW5hbHl6ZT17YW5hbHl6ZX1cbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgIGluZm89e2luZm99XG4gICAgICAgICAgICAgICAgc29ydD17c29ydH1cbiAgICAgICAgICAgICAgICByZXZpZXdfc29ydD17cmV2aWV3X3NvcnR9XG4gICAgICAgICAgICAgICAgc2V0QW5hbHl6ZT17dGhpcy5zZXRBbmFseXplfVxuICAgICAgICAgICAgICAgIHNldFNvcnQ9e3RoaXMuc2V0U29ydH1cbiAgICAgICAgICAgICAgICBzZXRSZXZpZXdTb3J0PXt0aGlzLnNldFJldmlld1NvcnR9XG4gICAgICAgICAgICAgICAgc2V0QWxnbz17dGhpcy5zZXRBbGdvfVxuICAgICAgICAgICAgICAgIGFsZ25hbWVzPXthbGduYW1lc31cbiAgICAgICAgICAgICAgICBkYXRhX3NlbGVjdD17dGhpcy5zdGF0ZS5kYXRhX3NlbGVjdH1cbiAgICAgICAgICAgICAgICBzaG93X2FjY3VyYWN5PXtzaG93X2FjY3VyYWN5fVxuICAgICAgICAgICAgICAgIHNldEFjY3VyYWN5PXt0aGlzLnNldEFjY3VyYWN5fVxuICAgICAgICAgICAgICAgIGNvbXBhcmU9e3RoaXMuc3RhdGUuY29tcGFyZX1cbiAgICAgICAgICAgICAgICBzZXRDb21wYXJlPXt0aGlzLnNldENvbXBhcmV9XG4gICAgICAgICAgICAgICAgbmJzdm1fZGF0YT17dGhpcy5zdGF0ZS5uYnN2bV9kYXRhfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogZ3JlbSAvIDIgfX0+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBhZGRpbmc6IGdyZW0gLyAyLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyMyMjInLFxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBib3JkZXJUb3A6ICdzb2xpZCAxcHggYmxhY2snLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBUZXh0ZmxpY2tzIGlzIGEgbmF0dXJhbCBsYW5ndWFnZSBwcm9jZXNzaW5nIHByb3RvdHlwZSBieSBDbG91ZGVyYSBGYXN0XG4gICAgICAgICAgRm9yd2FyZCBMYWJzXG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2hvd19pbmZvID8gKFxuICAgICAgICAgIDxUb3VyXG4gICAgICAgICAgICByb3V0ZXI9e3RoaXMucHJvcHMucm91dGVyfVxuICAgICAgICAgICAgZ3JlbT17Z3JlbX1cbiAgICAgICAgICAgIGZvbnRfc2l6ZT17Zm9udF9zaXplfVxuICAgICAgICAgICAgbGluZV9oZWlnaHQ9e2xpbmVfaGVpZ2h0fVxuICAgICAgICAgICAgZ3JlbT17Z3JlbX1cbiAgICAgICAgICAgIGFuYWx5emU9e2FuYWx5emV9XG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgaW5mbz17aW5mb31cbiAgICAgICAgICAgIHNvcnQ9e3NvcnR9XG4gICAgICAgICAgICByZXZpZXdfc29ydD17cmV2aWV3X3NvcnR9XG4gICAgICAgICAgICBzZXRBbmFseXplPXt0aGlzLnNldEFuYWx5emV9XG4gICAgICAgICAgICBzZXRTb3J0PXt0aGlzLnNldFNvcnR9XG4gICAgICAgICAgICBzZXRSZXZpZXdTb3J0PXt0aGlzLnNldFJldmlld1NvcnR9XG4gICAgICAgICAgICBzZXRBbGdvPXt0aGlzLnNldEFsZ299XG4gICAgICAgICAgICBhbGduYW1lcz17YWxnbmFtZXN9XG4gICAgICAgICAgICBkYXRhX3NlbGVjdD17dGhpcy5zdGF0ZS5kYXRhX3NlbGVjdH1cbiAgICAgICAgICAgIHNob3dfYWNjdXJhY3k9e3Nob3dfYWNjdXJhY3l9XG4gICAgICAgICAgICBzZXRBY2N1cmFjeT17dGhpcy5zZXRBY2N1cmFjeX1cbiAgICAgICAgICAgIGNvbXBhcmU9e3RoaXMuc3RhdGUuY29tcGFyZX1cbiAgICAgICAgICAgIHNldENvbXBhcmU9e3RoaXMuc2V0Q29tcGFyZX1cbiAgICAgICAgICAgIG5ic3ZtX2RhdGE9e3RoaXMuc3RhdGUubmJzdm1fZGF0YX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl19 */\n/*@ sourceURL=/Users/grant.custer/Sites/next-movies/pages/_app.js */"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a, {
        id: "107552866",
        dynamic: [show_info ? 'hidden' : 'auto'],
        __self: this
      }, "body{overflow:".concat(show_info ? 'hidden' : 'auto', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvbmV4dC1tb3ZpZXMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrTzJCLEFBR21ELHNDQUN4QyIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL25leHQtbW92aWVzL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgaW5mbyB9IGZyb20gJy4uL2RhdGEvc2FtcGxlX21vdmllX2luZm8uanMnXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQtc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IG5vdW5zLCBhZGplY3RpdmVzIH0gZnJvbSAnLi4vZGF0YS9jb3Jwb3JhLmpzJ1xuaW1wb3J0IHsgcmVkLCBibHVlLCBCb3JkZXIgfSBmcm9tICcuLi9wYXJ0cy9TdGF0aWMnXG5sZXQgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxubGV0IGxpbmtQcmVmaXggPSBwdWJsaWNSdW50aW1lQ29uZmlnLmxpbmtQcmVmaXhcbmltcG9ydCBMaW5rIGZyb20gJy4uL3BhcnRzL1ByZWZpeGVkTGluaydcbmltcG9ydCBCYXIgZnJvbSAnLi4vcGFydHMvQmFyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9wYXJ0cy9IZWFkZXInXG5pbXBvcnQgVG91ciBmcm9tICcuLi9wYXJ0cy9Ub3VyJ1xuXG5sZXQgYWxnbmFtZXMgPSBbJ05CU1ZNJywgJ0JFUlQnXVxubGV0IGFsZ2ZpbGVzID0gW1xuICAnbmJzdm1fbGltZV9ncm91cGVkX3ByZXR0eS5qc29uJyxcbiAgJ2JlcnRfbGltZV9ncm91cGVkX3ByZXR0eS5qc29uJyxcbiAgJ25ic3ZtX2xpbWVfZ3JvdXBlZF9wcmV0dHlfd29yZC5qc29uJyxcbl1cbmxldCBkYXRhX2tleXMgPSBbXG4gIFsnbmJzdm1fZGF0YScsICduYnN2bV9saW1lX2dyb3VwZWRfcHJldHR5Lmpzb24nLCAnTkJTVk0nXSxcbiAgWydiZXJ0X2RhdGEnLCAnYmVydF9saW1lX2dyb3VwZWRfcHJldHR5Lmpzb24nLCAnQkVSVCddLFxuXVxuXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIGN0eCB9KSB7XG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9XG5cbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFuYWx5emU6IHRydWUsXG4gICAgICBkYXRhX3NlbGVjdDogMSxcbiAgICAgIHNob3dfYWNjdXJhY3k6IGZhbHNlLFxuICAgICAgc29ydDogJ3Jldmlld3MnLFxuICAgICAgcmV2aWV3X3NvcnQ6ICdkYXRlJyxcbiAgICAgIG5ic3ZtX2RhdGE6IG51bGwsXG4gICAgICBjb21wYXJlOiBmYWxzZSxcbiAgICAgIGJlcnRfZGF0YTogbnVsbCxcbiAgICAgIHNob3dfaW5mbzogZmFsc2UsXG4gICAgfVxuICAgIHRoaXMuc2V0QW5hbHl6ZSA9IHRoaXMuc2V0QW5hbHl6ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRSZXZpZXdTb3J0ID0gdGhpcy5zZXRSZXZpZXdTb3J0LmJpbmQodGhpcylcbiAgICB0aGlzLnNldEFjY3VyYWN5ID0gdGhpcy5zZXRBY2N1cmFjeS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zZXRTb3J0ID0gdGhpcy5zZXRTb3J0LmJpbmQodGhpcylcbiAgICB0aGlzLnNldEFsZ28gPSB0aGlzLnNldEFsZ28uYmluZCh0aGlzKVxuICAgIHRoaXMuc2V0Q29tcGFyZSA9IHRoaXMuc2V0Q29tcGFyZS5iaW5kKHRoaXMpXG4gIH1cblxuICBmZXRjaERhdGEoKSB7XG4gICAgZmV0Y2gobGlua1ByZWZpeCArICcvc3RhdGljL2RhdGEvJyArIGFsZ2ZpbGVzWzBdKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKHIgPT4ge1xuICAgICAgICBmZXRjaChsaW5rUHJlZml4ICsgJy9zdGF0aWMvZGF0YS9uYW1lc19hbmRfZGF0ZXMuanNvbicpXG4gICAgICAgICAgLnRoZW4obmQgPT4gbmQuanNvbigpKVxuICAgICAgICAgIC50aGVuKG5kID0+IHtcbiAgICAgICAgICAgIGxldCByZXZpZXdzID0gci5tYXAoKHIsIGkpID0+IHtcbiAgICAgICAgICAgICAgbGV0IG5ld19yID0gT2JqZWN0LmFzc2lnbih7fSwgcilcbiAgICAgICAgICAgICAgbmV3X3IuaW5kZXggPSBpXG4gICAgICAgICAgICAgIG5ld19yLmF1dGhvciA9IG5kW2ldLmF1dGhvclxuICAgICAgICAgICAgICBuZXdfci5kYXRlID0gbmRbaV0uZGF0ZVxuICAgICAgICAgICAgICByZXR1cm4gbmV3X3JcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsZXQga2V5ID0gZGF0YV9rZXlzWzBdWzBdXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgW2tleV06IHJldmlld3MgfSlcbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICBmZXRjaChsaW5rUHJlZml4ICsgJy9zdGF0aWMvZGF0YS8nICsgYWxnZmlsZXNbMV0pXG4gICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4ociA9PiB7XG4gICAgICAgIGZldGNoKGxpbmtQcmVmaXggKyAnL3N0YXRpYy9kYXRhL25hbWVzX2FuZF9kYXRlcy5qc29uJylcbiAgICAgICAgICAudGhlbihuZCA9PiBuZC5qc29uKCkpXG4gICAgICAgICAgLnRoZW4obmQgPT4ge1xuICAgICAgICAgICAgbGV0IHJldmlld3MgPSByLm1hcCgociwgaSkgPT4ge1xuICAgICAgICAgICAgICBsZXQgbmV3X3IgPSBPYmplY3QuYXNzaWduKHt9LCByKVxuICAgICAgICAgICAgICBuZXdfci5pbmRleCA9IGlcbiAgICAgICAgICAgICAgbmV3X3IuYXV0aG9yID0gbmRbaV0uYXV0aG9yXG4gICAgICAgICAgICAgIG5ld19yLmRhdGUgPSBuZFtpXS5kYXRlXG4gICAgICAgICAgICAgIHJldHVybiBuZXdfclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCBrZXkgPSBkYXRhX2tleXNbMV1bMF1cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBba2V5XTogcmV2aWV3cyB9KVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaERhdGEoKVxuICB9XG5cbiAgc2V0QW5hbHl6ZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhbmFseXplOiB2YWx1ZSB9KVxuICB9XG5cbiAgc2V0UmV2aWV3U29ydCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZXZpZXdfc29ydDogdmFsdWUgfSlcbiAgfVxuXG4gIHNldFNvcnQodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc29ydDogdmFsdWUgfSlcbiAgfVxuXG4gIHNldEFsZ28oaW5kZXgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGF0YV9zZWxlY3Q6IGluZGV4IH0pXG4gIH1cblxuICBzZXRBY2N1cmFjeSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93X2FjY3VyYWN5OiB2YWx1ZSB9KVxuICB9XG5cbiAgc2V0Q29tcGFyZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb21wYXJlOiB2YWx1ZSB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGFuYWx5emUsIHNvcnQsIHJldmlld19zb3J0LCBzaG93X2FjY3VyYWN5LCBzaG93X2luZm8gfSA9IHRoaXMuc3RhdGVcblxuICAgIGxldCBkYXRhID0gdGhpcy5zdGF0ZVtkYXRhX2tleXNbdGhpcy5zdGF0ZS5kYXRhX3NlbGVjdF1bMF1dXG5cbiAgICBpZiAoYW5hbHl6ZSA9PT0gZmFsc2UpIHNob3dfYWNjdXJhY3kgPSBmYWxzZVxuXG4gICAgbGV0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgZm9udF9zaXplID0gMTZcbiAgICBsZXQgbGluZV9oZWlnaHQgPSAxLjVcbiAgICBsZXQgZ3JlbSA9IGZvbnRfc2l6ZSAqIGxpbmVfaGVpZ2h0XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB0aGlzLnByb3BzLnJvdXRlclxuXG4gICAgbGV0IGlzX2Zyb250ID0gcGF0aG5hbWUgPT09ICcvJ1xuICAgIGxldCBpc190b3BpYyA9IHBhdGhuYW1lLnN0YXJ0c1dpdGgoJy90b3BpYycpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLFxuICAgICAgICAgICAgICAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLFxuICAgICAgICAgICAgICAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb2RlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnQ291cmllciBOZXcnLFxuICAgICAgICAgICAgICBtb25vc3BhY2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDEuNXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSxcbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyLFxuICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhLm5vLW9wYWNpdHktaG92ZXI6aG92ZXIsXG4gICAgICAgICAgYnV0dG9uLm5vLW9wYWNpdHktaG92ZXI6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYS5uby11bmRlcmxpbmUge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3BhY2l0eS1pbm5lci1ob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIC5vcGFjaXR5LWlubmVyLWhvdmVyLFxuICAgICAgICAgIGJ1dHRvbjpob3ZlciAub3BhY2l0eS1pbm5lci1ob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvdmVyLWJsb2NrIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvdmVyLWJsb2NrLWNvbnRhaW5lciAuaG92ZXItYmxvY2sge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgbGluZWFyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA2MjUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaG92ZXItYmxvY2stY29udGFpbmVyOmhvdmVyIC5ob3Zlci1ibG9jayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBvdmVyZmxvdzogJHtzaG93X2luZm8gPyAnaGlkZGVuJyA6ICdhdXRvJ307XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBpc19mcm9udD17aXNfZnJvbnR9XG4gICAgICAgICAgZ3JlbT17Z3JlbX1cbiAgICAgICAgICBhbmFseXplPXthbmFseXplfVxuICAgICAgICAgIHNob3dfYWNjdXJhY3k9e3Nob3dfYWNjdXJhY3l9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWluSGVpZ2h0OiBgY2FsYygxMDB2aCAtICR7Z3JlbSAqIDQgKyAxfXB4KWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkYXRhICYmIHRoaXMuc3RhdGUubmJzdm1fZGF0YSA/IChcbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICAgICAgICAgIGZvbnRfc2l6ZT17Zm9udF9zaXplfVxuICAgICAgICAgICAgICAgIGxpbmVfaGVpZ2h0PXtsaW5lX2hlaWdodH1cbiAgICAgICAgICAgICAgICBncmVtPXtncmVtfVxuICAgICAgICAgICAgICAgIGFuYWx5emU9e2FuYWx5emV9XG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICBpbmZvPXtpbmZvfVxuICAgICAgICAgICAgICAgIHNvcnQ9e3NvcnR9XG4gICAgICAgICAgICAgICAgcmV2aWV3X3NvcnQ9e3Jldmlld19zb3J0fVxuICAgICAgICAgICAgICAgIHNldEFuYWx5emU9e3RoaXMuc2V0QW5hbHl6ZX1cbiAgICAgICAgICAgICAgICBzZXRTb3J0PXt0aGlzLnNldFNvcnR9XG4gICAgICAgICAgICAgICAgc2V0UmV2aWV3U29ydD17dGhpcy5zZXRSZXZpZXdTb3J0fVxuICAgICAgICAgICAgICAgIHNldEFsZ289e3RoaXMuc2V0QWxnb31cbiAgICAgICAgICAgICAgICBhbGduYW1lcz17YWxnbmFtZXN9XG4gICAgICAgICAgICAgICAgZGF0YV9zZWxlY3Q9e3RoaXMuc3RhdGUuZGF0YV9zZWxlY3R9XG4gICAgICAgICAgICAgICAgc2hvd19hY2N1cmFjeT17c2hvd19hY2N1cmFjeX1cbiAgICAgICAgICAgICAgICBzZXRBY2N1cmFjeT17dGhpcy5zZXRBY2N1cmFjeX1cbiAgICAgICAgICAgICAgICBjb21wYXJlPXt0aGlzLnN0YXRlLmNvbXBhcmV9XG4gICAgICAgICAgICAgICAgc2V0Q29tcGFyZT17dGhpcy5zZXRDb21wYXJlfVxuICAgICAgICAgICAgICAgIG5ic3ZtX2RhdGE9e3RoaXMuc3RhdGUubmJzdm1fZGF0YX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IGdyZW0gLyAyIH19PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwYWRkaW5nOiBncmVtIC8gMixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjMjIyJyxcbiAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgYm9yZGVyVG9wOiAnc29saWQgMXB4IGJsYWNrJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgVGV4dGZsaWNrcyBpcyBhIG5hdHVyYWwgbGFuZ3VhZ2UgcHJvY2Vzc2luZyBwcm90b3R5cGUgYnkgQ2xvdWRlcmEgRmFzdFxuICAgICAgICAgIEZvcndhcmQgTGFic1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Nob3dfaW5mbyA/IChcbiAgICAgICAgICA8VG91clxuICAgICAgICAgICAgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn1cbiAgICAgICAgICAgIGdyZW09e2dyZW19XG4gICAgICAgICAgICBmb250X3NpemU9e2ZvbnRfc2l6ZX1cbiAgICAgICAgICAgIGxpbmVfaGVpZ2h0PXtsaW5lX2hlaWdodH1cbiAgICAgICAgICAgIGdyZW09e2dyZW19XG4gICAgICAgICAgICBhbmFseXplPXthbmFseXplfVxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIGluZm89e2luZm99XG4gICAgICAgICAgICBzb3J0PXtzb3J0fVxuICAgICAgICAgICAgcmV2aWV3X3NvcnQ9e3Jldmlld19zb3J0fVxuICAgICAgICAgICAgc2V0QW5hbHl6ZT17dGhpcy5zZXRBbmFseXplfVxuICAgICAgICAgICAgc2V0U29ydD17dGhpcy5zZXRTb3J0fVxuICAgICAgICAgICAgc2V0UmV2aWV3U29ydD17dGhpcy5zZXRSZXZpZXdTb3J0fVxuICAgICAgICAgICAgc2V0QWxnbz17dGhpcy5zZXRBbGdvfVxuICAgICAgICAgICAgYWxnbmFtZXM9e2FsZ25hbWVzfVxuICAgICAgICAgICAgZGF0YV9zZWxlY3Q9e3RoaXMuc3RhdGUuZGF0YV9zZWxlY3R9XG4gICAgICAgICAgICBzaG93X2FjY3VyYWN5PXtzaG93X2FjY3VyYWN5fVxuICAgICAgICAgICAgc2V0QWNjdXJhY3k9e3RoaXMuc2V0QWNjdXJhY3l9XG4gICAgICAgICAgICBjb21wYXJlPXt0aGlzLnN0YXRlLmNvbXBhcmV9XG4gICAgICAgICAgICBzZXRDb21wYXJlPXt0aGlzLnNldENvbXBhcmV9XG4gICAgICAgICAgICBuYnN2bV9kYXRhPXt0aGlzLnN0YXRlLm5ic3ZtX2RhdGF9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdfQ== */\n/*@ sourceURL=/Users/grant.custer/Sites/next-movies/pages/_app.js */")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_parts_Header__WEBPACK_IMPORTED_MODULE_20__["default"], {
        is_front: is_front,
        grem: grem,
        analyze: analyze,
        show_accuracy: show_accuracy,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          minHeight: "calc(100vh - ".concat(grem * 4 + 1, "px)")
        },
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, data && this.state.nbsvm_data ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_13__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        font_size: font_size,
        line_height: line_height,
        grem: grem,
        analyze: analyze,
        data: data,
        info: _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_14__["info"],
        sort: sort,
        review_sort: review_sort,
        setAnalyze: this.setAnalyze,
        setSort: this.setSort,
        setReviewSort: this.setReviewSort,
        setAlgo: this.setAlgo,
        algnames: algnames,
        data_select: this.state.data_select,
        show_accuracy: show_accuracy,
        setAccuracy: this.setAccuracy,
        compare: this.state.compare,
        setCompare: this.setCompare,
        nbsvm_data: this.state.nbsvm_data,
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]) + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }))) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, "Loading...")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          padding: grem / 2,
          background: '#222',
          color: 'white',
          borderTop: 'solid 1px black'
        },
        className: "jsx-2343230763 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a.dynamic([["107552866", [show_info ? 'hidden' : 'auto']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "Textflicks is a natural language processing prototype by Cloudera Fast Forward Labs"), show_info ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_parts_Tour__WEBPACK_IMPORTED_MODULE_21__["default"], (_React$createElement = {
        router: this.props.router,
        grem: grem,
        font_size: font_size,
        line_height: line_height
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "grem", grem), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "analyze", analyze), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "data", data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "info", _data_sample_movie_info_js__WEBPACK_IMPORTED_MODULE_14__["info"]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "sort", sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "review_sort", review_sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "setAnalyze", this.setAnalyze), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "setSort", this.setSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "setReviewSort", this.setReviewSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "setAlgo", this.setAlgo), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "algnames", algnames), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "data_select", this.state.data_select), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "show_accuracy", show_accuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "setAccuracy", this.setAccuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "compare", this.state.compare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "setCompare", this.setCompare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "nbsvm_data", this.state.nbsvm_data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 284
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$createElement, "__self", this), _React$createElement)) : null);
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_13___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./parts/Bar.js":
/*!**********************!*\
  !*** ./parts/Bar.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parts/PrefixedLink */ "./parts/PrefixedLink.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chroma-js */ "chroma-js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Static__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Static */ "./parts/Static.js");






var _jsxFileName = "/Users/grant.custer/Sites/next-movies/parts/Bar.js";





var Bar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Bar, _React$Component);

  function Bar() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Bar);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Bar).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Bar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          nbsvm_data = _this$props.nbsvm_data,
          grem = _this$props.grem,
          analyze = _this$props.analyze,
          setAnalyze = _this$props.setAnalyze,
          total = _this$props.total,
          setAlgo = _this$props.setAlgo,
          show_accuracy = _this$props.show_accuracy,
          setAccuracy = _this$props.setAccuracy,
          compare = _this$props.compare,
          setCompare = _this$props.setCompare,
          _this$props$is_front = _this$props.is_front,
          is_front = _this$props$is_front === void 0 ? false : _this$props$is_front;
      var certainty_array = data.map(function (r) {
        if (r.logits[1] > r.logits[0]) {
          return {
            class: r.class,
            label: r.label,
            certainty: r.class_probabilities[1]
          };
        } else {
          return {
            class: r.class,
            label: r.label,
            certainty: r.class_probabilities[0]
          };
        }
      });

      var pos = _.sortBy(certainty_array.filter(function (r) {
        return r.class === 'pos';
      }), 'certainty').reverse();

      var neg = _.sortBy(certainty_array.filter(function (r) {
        return r.class === 'neg';
      }), 'certainty');

      var combined = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(pos), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(neg));
      var rightwrong = data.reduce(function (counts, r) {
        var slice = counts.slice();

        if (r.label === r.class) {
          slice[1] += 1;
        } else {
          slice[0] += 1;
        }

        return slice;
      }, [0, 0]);
      var accuracy = rightwrong[1] / data.length;
      var ncertainty_array = nbsvm_data.map(function (r) {
        if (r.logits[1] > r.logits[0]) {
          return {
            class: r.class,
            label: r.label,
            certainty: r.class_probabilities[1]
          };
        } else {
          return {
            class: r.class,
            label: r.label,
            certainty: r.class_probabilities[0]
          };
        }
      });

      var npos = _.sortBy(ncertainty_array.filter(function (r) {
        return r.class === 'pos';
      }), 'certainty').reverse();

      var nneg = _.sortBy(ncertainty_array.filter(function (r) {
        return r.class === 'neg';
      }), 'certainty');

      var ncombined = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(npos), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(nneg));
      var nrightwrong = nbsvm_data.reduce(function (counts, r) {
        var slice = counts.slice();

        if (r.label === r.class) {
          slice[1] += 1;
        } else {
          slice[0] += 1;
        }

        return slice;
      }, [0, 0]);
      var naccuracy = nrightwrong[1] / data.length;
      var counts = [combined.filter(function (r) {
        return r.class === 'neg';
      }).length, combined.filter(function (r) {
        return r.class === 'pos';
      }).length];
      var ncounts = [ncombined.filter(function (r) {
        return r.class === 'neg';
      }).length, ncombined.filter(function (r) {
        return r.class === 'pos';
      }).length];
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          background: 'white',
          position: 'sticky',
          zIndex: 999,
          top: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'top'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, !is_front ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "hover-block-container no-opacity-hover",
        style: {
          display: 'block',
          paddingTop: grem / 2 + grem * 0.125,
          paddingBottom: grem / 2 + grem * 0.125,
          paddingLeft: grem / 2,
          paddingRight: grem / 2,
          borderRight: 'solid 1px black',
          position: 'relative',
          textDecoration: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          width: grem * 0.75,
          height: grem * 0.75,
          border: 'solid 1px black',
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: 0,
          top: 0,
          width: grem * 0.75 / 2 - 1,
          height: grem * 0.75 - 2,
          borderRight: 'solid 1px black'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: 0,
          top: 0,
          height: grem * 0.75 / 2 - 1,
          width: grem * 0.75 - 2,
          borderBottom: 'solid 1px black'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "hover-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }))) : null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          return setAnalyze(!analyze);
        },
        style: {
          display: 'flex',
          paddingLeft: grem / 2,
          paddingRight: grem / 2,
          height: grem * 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          width: grem * 0.5,
          height: grem * 0.5,
          border: 'solid 1px black',
          marginTop: grem * (6 / 8),
          marginRight: grem * (2 / 8),
          background: analyze ? 'black' : 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          textDecoration: 'underline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "Analyze")), analyze ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "\u2013"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          paddingLeft: grem / 2 * 0,
          paddingRight: grem / 8
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "show:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          return setAccuracy(!show_accuracy);
        },
        style: {
          display: 'flex',
          paddingLeft: grem / 4,
          paddingRight: grem / 4,
          height: grem * 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          width: grem * 0.5,
          height: grem * 0.5,
          border: 'solid 1px black',
          marginTop: grem * (6 / 8),
          marginRight: grem * (2 / 8),
          background: show_accuracy ? 'black' : 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          textDecoration: 'underline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, "accuracy")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          return setCompare(!compare);
        },
        style: {
          display: 'flex',
          paddingLeft: grem / 4,
          paddingRight: grem / 4,
          height: grem * 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          width: grem * 0.5,
          height: grem * 0.5,
          border: 'solid 1px black',
          marginTop: grem * (6 / 8),
          marginRight: grem * (2 / 8),
          background: compare ? 'black' : 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingBottom: grem / 2,
          textDecoration: 'underline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "model comparison")))) : null, analyze && !compare ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          padding: "".concat(show_accuracy && false ? 0 : grem / 2, "px ").concat(grem / 2, "px"),
          flexGrow: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'relative',
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, combined.map(function (c, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'absolute',
            left: "".concat(1 / combined.length * i * 100, "%"),
            top: 0,
            bottom: 0,
            width: "".concat(1 / combined.length * 100 + 0.05, "%"),
            background: c.class === 'pos' ? Object(_Static__WEBPACK_IMPORTED_MODULE_9__["scaleBlue"])(c.certainty) : Object(_Static__WEBPACK_IMPORTED_MODULE_9__["scaleRed"])(c.certainty)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, combined.length, " ", total ? 'total ' : '', " review", combined.length > 1 ? 's' : '', analyze ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, ' ', "\xB7 ", counts[1], " positive (", Math.round(counts[1] / combined.length * 100), "%)") : null)), show_accuracy ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'relative',
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, combined.map(function (c, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'absolute',
            left: "".concat(1 / combined.length * i * 100, "%"),
            bottom: 0,
            height: grem,
            width: "".concat(1 / combined.length * 100 + 0.05, "%"),
            background: c.label !== c.class ? c.label === 'pos' ? Object(_Static__WEBPACK_IMPORTED_MODULE_9__["scaleBlue"])(1) : Object(_Static__WEBPACK_IMPORTED_MODULE_9__["scaleRed"])(1) : '#ddd'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, rightwrong[0] > 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, Math.floor(accuracy * 1000 / 10), "% accuracy (", rightwrong[0], " wrong)") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, Math.floor(accuracy * 1000 / 10), "% accuracy")))) : null) : null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Static__WEBPACK_IMPORTED_MODULE_9__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      })), compare && analyze ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, [['NBSVM'], ['BERT']].map(function (item, i) {
        var n = i === 0;
        var cert = n ? ncombined : combined;
        var co = n ? ncounts : counts;
        var rw = n ? nrightwrong : rightwrong;
        var acc = n ? naccuracy : accuracy;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            borderLeft: i === 1 ? 'solid 2px black' : 'none',
            marginLeft: i === 1 ? -1 : 0,
            background: 'white',
            display: 'flex'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 387
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            paddingLeft: grem / 2,
            paddingTop: grem / 2,
            paddingBottom: grem / 2
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 395
          },
          __self: this
        }, item[0]), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            padding: "".concat(show_accuracy && false ? 0 : grem / 2, "px ").concat(grem / 2, "px"),
            flexGrow: 1
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 404
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'relative',
            overflow: 'hidden'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 412
          },
          __self: this
        }, cert.map(function (c, i) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              position: 'absolute',
              left: "".concat(1 / combined.length * i * 100, "%"),
              top: 0,
              bottom: 0,
              width: "".concat(1 / combined.length * 100 + 0.05, "%"),
              background: c.class === 'pos' ? Object(_Static__WEBPACK_IMPORTED_MODULE_9__["scaleBlue"])(c.certainty) : Object(_Static__WEBPACK_IMPORTED_MODULE_9__["scaleRed"])(c.certainty)
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 414
            },
            __self: this
          });
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 429
          },
          __self: this
        }, combined.length, " ", total ? 'total ' : '', " review", combined.length > 1 ? 's' : '', analyze ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 433
          },
          __self: this
        }, ' ', "\xB7 ", co[1], " positive (", Math.round(co[1] / combined.length * 100), "%)") : null)), show_accuracy ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 443
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'relative',
            overflow: 'hidden'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 444
          },
          __self: this
        }, cert.map(function (c, i) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              position: 'absolute',
              left: "".concat(1 / combined.length * i * 100, "%"),
              bottom: 0,
              height: grem,
              width: "".concat(1 / combined.length * 100 + 0.05, "%"),
              background: c.label !== c.class ? c.label === 'pos' ? Object(_Static__WEBPACK_IMPORTED_MODULE_9__["scaleBlue"])(1) : Object(_Static__WEBPACK_IMPORTED_MODULE_9__["scaleRed"])(1) : '#ddd'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 451
            },
            __self: this
          });
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 469
          },
          __self: this
        }, rw[0] > 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 471
          },
          __self: this
        }, Math.floor(acc * 1000 / 10), "% accuracy (", rw[0], " wrong)") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 476
          },
          __self: this
        }, Math.floor(acc * 1000 / 10), "% accuracy")))) : null));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Static__WEBPACK_IMPORTED_MODULE_9__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489
        },
        __self: this
      })) : null);
    }
  }]);

  return Bar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Bar);

/***/ }),

/***/ "./parts/Header.js":
/*!*************************!*\
  !*** ./parts/Header.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parts/PrefixedLink */ "./parts/PrefixedLink.js");
/* harmony import */ var _Static__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Static */ "./parts/Static.js");






var _jsxFileName = "/Users/grant.custer/Sites/next-movies/parts/Header.js";




var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          is_front = _this$props.is_front,
          grem = _this$props.grem,
          analyze = _this$props.analyze,
          show_accuracy = _this$props.show_accuracy;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'relative',
          background: '#222',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: !is_front ? '' : 'no-opacity-hover',
        style: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
          padding: grem / 2,
          display: 'block',
          textDecoration: 'none',
          fontWeight: 700
        }, "display", 'flex'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          width: grem,
          height: grem,
          marginRight: grem / 2,
          position: 'relative',
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: 0,
          top: 0,
          width: grem / 2,
          height: grem / 2,
          background: analyze ? _Static__WEBPACK_IMPORTED_MODULE_8__["blue"] : 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: grem / 2,
          top: 0,
          width: grem / 2,
          height: grem / 2,
          background: analyze ? _Static__WEBPACK_IMPORTED_MODULE_8__["red"] : 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'absolute',
          left: 0,
          top: grem / 2,
          width: grem / 2,
          height: grem / 2,
          background: show_accuracy ? '#ddd' : 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), "Textflicks"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        style: {
          padding: grem / 2,
          textDecoration: 'underline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Info"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./parts/MovieGrid.js":
/*!****************************!*\
  !*** ./parts/MovieGrid.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parts/PrefixedLink */ "./parts/PrefixedLink.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");







var _jsxFileName = "/Users/grant.custer/Sites/next-movies/parts/MovieGrid.js";





var MovieGrid =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MovieGrid, _React$Component);

  function MovieGrid() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MovieGrid);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(MovieGrid).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MovieGrid, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          info = _this$props.info,
          sort = _this$props.sort,
          grem = _this$props.grem,
          analyze = _this$props.analyze,
          show_accuracy = _this$props.show_accuracy;
      var sorted = info.map(function (o) {
        var new_o = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, o);

        new_o.children = [];
        new_o.id = o.og_id;
        return new_o;
      });
      var ids = sorted.map(function (o) {
        return o.id;
      });

      for (var i = 0; i < data.length; i++) {
        var o = data[i];
        var id = o.url;
        var index = ids.indexOf(id);

        if (index === -1) {
          console.log('miss');
        } else {
          sorted[index].children.push(o);
        }
      }

      if (sort === 'reviews') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](sorted, function (o) {
          return -o.children.length;
        });
      } else if (sort === 'positive') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](sorted, [function (o) {
          return o.children.reduce(function (total, r) {
            return r.class === 'pos' ? total - 1 : total;
          }, 0) / o.children.length;
        }, function (o) {
          return -o.children.length;
        }]);
      } else if (sort === 'negative') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](sorted, [function (o) {
          return -o.children.reduce(function (total, r) {
            return r.class === 'neg' ? total + 1 : total;
          }, 0) / o.children.length;
        }, function (o) {
          return -o.children.length;
        }]);
      } else if (sort === 'accurate') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](sorted, [function (o) {
          return o.children.reduce(function (total, r) {
            return r.label !== r.class ? total + 1 : total;
          }, 0) / o.children.length;
        }, function (o) {
          return -o.children.length;
        }]);
      } else if (sort === 'inaccurate') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](sorted, [function (o) {
          return -o.children.reduce(function (total, r) {
            return r.label !== r.class ? total + 1 : total;
          }, 0) / o.children.length;
        }, function (o) {
          return -o.children.length;
        }]);
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gridColumnGap: 1,
          gridRowGap: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, sorted.map(function (o, i) {
        var topic_info = o;
        var reviews = data.filter(function (r) {
          return r.url === o.id;
        });
        var counts = reviews.reduce(function (counts, r) {
          var slice = counts.slice();

          if (r.logits[1] > r.logits[0]) {
            slice[1] += 1;
          } else {
            slice[0] += 1;
          }

          return slice;
        }, [0, 0]);
        var rightwrong = reviews.reduce(function (counts, r) {
          var slice = counts.slice();

          if (r.label === r.class) {
            slice[1] += 1;
          } else {
            slice[0] += 1;
          }

          return slice;
        }, [0, 0]);
        var accuracy = rightwrong[1] / reviews.length;
        var certainty_array = reviews.map(function (r) {
          if (r.logits[1] > r.logits[0]) {
            return {
              class: r.class,
              label: r.label,
              certainty: r.class_probabilities[1],
              correct: r.class === r.label
            };
          } else {
            return {
              class: r.class,
              label: r.label,
              certainty: r.class_probabilities[0]
            };
          }
        });

        var pos = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](certainty_array.filter(function (r) {
          return r.class === 'pos';
        }), 'certainty').reverse();

        var neg = lodash__WEBPACK_IMPORTED_MODULE_9__["sortBy"](certainty_array.filter(function (r) {
          return r.class === 'neg';
        }), 'certainty');

        var combined = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(pos), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(neg));
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
          href: "/topic2?id=".concat(o.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          className: "no-underline hover-block-container no-opacity-hover",
          style: {
            position: 'relative',
            height: 12 * grem,
            cursor: 'zoom-in',
            padding: grem / 2,
            outline: 'solid 1px black'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            display: '-webkit-box',
            webkitBoxOrient: 'vertical',
            WebkitLineClamp: 7,
            overflow: 'hidden'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            textDecoration: 'underline',
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, topic_info.Title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            textIndent: grem
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, topic_info.Year, " \xB7 ", topic_info.Runtime, " \xB7", ' ', topic_info.Rated), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            textIndent: grem
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, topic_info.Plot)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            position: 'absolute',
            bottom: grem / 2,
            left: grem / 2,
            right: grem / 2
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, analyze ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            position: 'absolute',
            overflow: 'hidden',
            width: '100%',
            height: grem
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, combined.map(function (c, i) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            style: {
              position: 'absolute',
              left: "".concat(1 / combined.length * i * 100, "%"),
              bottom: 0,
              height: grem,
              width: "".concat(1 / combined.length * 100 + 0.05, "%"),
              background: c.class === 'pos' ? Object(_parts_Static__WEBPACK_IMPORTED_MODULE_10__["scaleBlue"])(c.certainty) : Object(_parts_Static__WEBPACK_IMPORTED_MODULE_10__["scaleRed"])(c.certainty)
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 215
            },
            __self: this
          });
        })) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }, reviews.length, " reviews", analyze ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          },
          __self: this
        }, "\xB7 ", counts[1], " positive (", Math.floor(counts[1] / combined.length * 100) / 1, "%)") : null), show_accuracy ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            position: 'relative',
            overflow: 'hidden'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }, combined.map(function (c, i) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            style: {
              position: 'absolute',
              left: "".concat(1 / combined.length * i * 100, "%"),
              bottom: 0,
              height: grem,
              width: "".concat(1 / combined.length * 100 + 0.05, "%"),
              background: c.label !== c.class ? c.label === 'pos' ? Object(_parts_Static__WEBPACK_IMPORTED_MODULE_10__["scaleBlue"])(1) : Object(_parts_Static__WEBPACK_IMPORTED_MODULE_10__["scaleRed"])(1) : '#ddd'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 250
            },
            __self: this
          });
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            position: 'relative'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          __self: this
        }, rightwrong[0] > 0 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          },
          __self: this
        }, Math.floor(accuracy * 1000 / 10), "% accuracy (", rightwrong[0], " wrong)") : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          },
          __self: this
        }, Math.floor(accuracy * 1000 / 10), "% accuracy"))) : null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "hover-block",
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.0625)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        })));
      }));
    }
  }]);

  return MovieGrid;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MovieGrid);

/***/ }),

/***/ "./parts/PrefixedLink.js":
/*!*******************************!*\
  !*** ./parts/PrefixedLink.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/config */ "next-server/config");
/* harmony import */ var next_server_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/grant.custer/Sites/next-movies/parts/PrefixedLink.js";


/**
 * Higher order component, which is based on 'next/link'
 * When app is deployed on github pages repository which is not the main one
 * e.g https://username.github.io/repository/
 * standard 'next/link' is not wokring properly, it doesn't add the 'reporsitory'
 * to url so instead of expected 'https://username.github.io/repository/about',
 * it would be 'https://username.github.io/about/
 * This HOC solves the problem, by adding the prefix (which is defined in next.config.js)
 * to 'as' property
 */



var _getConfig = next_server_config__WEBPACK_IMPORTED_MODULE_1___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var linkPrefix = publicRuntimeConfig.linkPrefix;

var PrefixedLink = function PrefixedLink(_ref) {
  var href = _ref.href,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? href : _ref$as,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    as: "".concat(linkPrefix).concat(as),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (PrefixedLink);

/***/ }),

/***/ "./parts/Review.js":
/*!*************************!*\
  !*** ./parts/Review.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");





var _jsxFileName = "/Users/grant.custer/Sites/next-movies/parts/Review.js";





var Review =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Review, _React$Component);

  function Review() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Review);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Review).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Review, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          r = _this$props.r,
          i = _this$props.i,
          grem = _this$props.grem,
          analyze = _this$props.analyze,
          show_accuracy = _this$props.show_accuracy,
          is_review = _this$props.is_review,
          _this$props$threshold = _this$props.threshold,
          threshold = _this$props$threshold === void 0 ? 0.5 : _this$props$threshold,
          _this$props$hide_auth = _this$props.hide_author,
          hide_author = _this$props$hide_auth === void 0 ? false : _this$props$hide_auth,
          _this$props$classific = _this$props.classification_label,
          classification_label = _this$props$classific === void 0 ? '' : _this$props$classific;
      var winner_index, scaleWinner, scaleLoser;
      var winner_name = r.class;

      if (r.class_probabilities[1] > r.class_probabilities[0]) {
        winner_index = 1;
        scaleWinner = _parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleBlue"];
        scaleLoser = _parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleRed"];
      } else {
        winner_index = 0;
        scaleWinner = _parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleRed"];
        scaleLoser = _parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleBlue"];
      }

      var max = Math.max(Math.abs(lodash__WEBPACK_IMPORTED_MODULE_7__["min"](r.lime_scores)), Math.abs(lodash__WEBPACK_IMPORTED_MODULE_7__["max"](r.lime_scores)));

      function scaleScore(value) {
        if (value < 0) {
          return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleTextRed"])(Math.abs(value) / max);
        } else {
          return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleTextBlue"])(Math.abs(value) / max);
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginBottom: grem
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, analyze ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginTop: grem * 0,
          marginBottom: grem * 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          background: scaleWinner(r.class_probabilities[winner_index])
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, classification_label, "classification:", ' ', _parts_Static__WEBPACK_IMPORTED_MODULE_8__["class_labels"][winner_index]), ' ', "\xB7", ' ', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        style: {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, Math.floor(r.class_probabilities[winner_index] * 1000) / 10, "% certainty")), show_accuracy ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          background: r.label === r.class ? '#ddd' : r.label === 'pos' ? Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleBlue"])(1) : Object(_parts_Static__WEBPACK_IMPORTED_MODULE_8__["scaleRed"])(1)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "label: ", r.label === 'pos' ? 'positive' : 'negative', " \xB7", ' ', r.label === r.class ? 'accurate' : 'inaccurate', " classification") : null) : null, !hide_author ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          textIndent: grem * 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "by ", r.author, " \xB7", ' ', is_review ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, r.date, " days ago") : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/review?id=".concat(r.index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, r.date, " days ago"))) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginBottom: grem * 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          textIndent: grem * 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, r.lime_tokens.map(function (t, i) {
        var score = r.lime_scores[i];
        var background = analyze ? Math.abs(score) / max > threshold ? scaleScore(score) : 0 : 'transparent';
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }, ' ', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          style: {
            backgroundImage: "linear-gradient(".concat(background, ", ").concat(background, ")"),
            backgroundSize: '4px 5px',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: "0 0.85em",
            paddingBottom: 2
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, t), ' ');
      }))))));
    }
  }]);

  return Review;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Review);

/***/ }),

/***/ "./parts/Reviews.js":
/*!**************************!*\
  !*** ./parts/Reviews.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _parts_PrefixedLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parts/PrefixedLink */ "./parts/PrefixedLink.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
/* harmony import */ var _parts_Review__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../parts/Review */ "./parts/Review.js");





var _jsxFileName = "/Users/grant.custer/Sites/next-movies/parts/Reviews.js";






var Reviews =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Reviews, _React$Component);

  function Reviews() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Reviews);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Reviews).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Reviews, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          info = _this$props.info,
          sort = _this$props.sort,
          grem = _this$props.grem,
          reviews = _this$props.reviews,
          analyze = _this$props.analyze,
          show_accuracy = _this$props.show_accuracy,
          review_sort = _this$props.review_sort,
          setReviewSort = _this$props.setReviewSort;
      var sorted = reviews.slice();

      if (review_sort === 'date') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_7__["sortBy"](sorted, 'date');
      } else if (review_sort === 'positive') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_7__["sortBy"](sorted, function (r) {
          var sort_val;
          if (r.class === 'pos') sort_val = 1 - r.class_probabilities[1] - 1;
          if (r.class === 'neg') sort_val = r.class_probabilities[0] - 0;
          return sort_val;
        });
      } else if (review_sort === 'negative') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_7__["sortBy"](sorted, function (r) {
          var sort_val;
          if (r.class === 'pos') sort_val = r.class_probabilities[1] - 0;
          if (r.class === 'neg') sort_val = 1 - r.class_probabilities[0] - 1;
          return sort_val;
        });
      } else if (review_sort === 'accurate') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_7__["sortBy"](sorted, [function (r) {
          return r.class === r.label ? 0 : 1;
        }, function (r) {
          var sort_val;
          if (r.class === 'pos') sort_val = 1 - r.class_probabilities[1];
          if (r.class === 'neg') sort_val = 1 - r.class_probabilities[0];
          return sort_val;
        }]);
      } else if (review_sort === 'inaccurate') {
        sorted = lodash__WEBPACK_IMPORTED_MODULE_7__["sortBy"](sorted, [function (r) {
          return r.class === r.label ? 1 : 0;
        }, function (r) {
          var sort_val;
          if (r.class === 'pos') sort_val = 1 - r.class_probabilities[1];
          if (r.class === 'neg') sort_val = 1 - r.class_probabilities[0];
          return sort_val;
        }]);
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, sorted.map(function (r, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_parts_Review__WEBPACK_IMPORTED_MODULE_9__["default"], {
          r: r,
          i: i,
          grem: grem,
          analyze: analyze,
          show_accuracy: show_accuracy,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        });
      }));
    }
  }]);

  return Reviews;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Reviews);

/***/ }),

/***/ "./parts/Scene.js":
/*!************************!*\
  !*** ./parts/Scene.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/grant.custer/Sites/next-movies/parts/Scene.js";


var Scene =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Scene, _React$Component);

  function Scene() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Scene);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Scene).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Scene, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          grem = _this$props.grem,
          _this$props$one_scree = _this$props.one_screen,
          one_screen = _this$props$one_scree === void 0 ? false : _this$props$one_scree,
          _this$props$spacer = _this$props.spacer,
          spacer = _this$props$spacer === void 0 ? false : _this$props$spacer,
          _this$props$wh = _this$props.wh,
          wh = _this$props$wh === void 0 ? null : _this$props$wh;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "scene",
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: one_screen ? 'center' : 'top',
          height: one_screen ? '100vh' : 'auto',
          marginTop: spacer ? spacer * 100 + 'vh' : 'auto'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          maxWidth: 700,
          width: '100%',
          margin: '0 auto',
          background: 'white',
          borderLeft: 'solid 2px black',
          borderTop: 'solid 1px black',
          borderRight: 'solid 4px black',
          borderBottom: 'solid 4px black',
          padding: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, this.props.children));
    }
  }]);

  return Scene;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Scene);

/***/ }),

/***/ "./parts/Sentences.js":
/*!****************************!*\
  !*** ./parts/Sentences.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");






var _jsxFileName = "/Users/grant.custer/Sites/next-movies/parts/Sentences.js";





var Sentences =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Sentences, _React$Component);

  function Sentences(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Sentences);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Sentences).call(this, props));
    _this.state = {
      show_all_positive: false,
      show_all_negative: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Sentences, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          reviews = _this$props.reviews,
          analyze = _this$props.analyze,
          grem = _this$props.grem;
      var top_sentences = reviews.map(function (r) {
        var max = Math.max(Math.abs(lodash__WEBPACK_IMPORTED_MODULE_8__["min"](r.lime_scores)), Math.abs(lodash__WEBPACK_IMPORTED_MODULE_8__["max"](r.lime_scores)));

        function scaleScore(value) {
          if (value < 0) {
            return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_9__["scaleTextRed"])(Math.abs(value) / max);
          } else {
            return Object(_parts_Static__WEBPACK_IMPORTED_MODULE_9__["scaleTextBlue"])(Math.abs(value) / max);
          }
        }

        var sentences = r.lime_tokens.map(function (t, i) {
          var score = r.lime_scores[i];
          var scaled = Math.abs(r.lime_scores[i]) / max;
          return {
            token: t,
            score: score,
            class: r.class,
            scaled_score: scaled,
            background: scaleScore(score),
            author: r.author,
            date: r.date,
            index: r.index
          };
        });

        var sorted = lodash__WEBPACK_IMPORTED_MODULE_8__["sortBy"](sentences, 'score');

        if (r.class === 'pos') sorted = sorted.reverse();
        return sorted[0];
      });

      var top_pos = lodash__WEBPACK_IMPORTED_MODULE_8__["sortBy"](top_sentences.filter(function (s) {
        return s.class === 'pos';
      }), 'date');

      var top_neg = lodash__WEBPACK_IMPORTED_MODULE_8__["sortBy"](top_sentences.filter(function (s) {
        return s.class === 'neg';
      }), 'date');

      var show_limit = 4;
      return analyze ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, [['positive', top_pos, this.state.show_all_positive, 'show_all_positive'], ['negative', top_neg, this.state.show_all_negative, 'show_all_negative']].map(function (a, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            marginBottom: i == 0 ? grem : 0
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, a[1].length, " ", a[0], " review highlights"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            textIndent: grem
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, a[1].slice(0, a[2] ? Infinity : show_limit).map(function (s, i) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            style: {},
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            style: {
              backgroundImage: "linear-gradient(".concat(s.background, ", ").concat(s.background, ")"),
              backgroundSize: '4px 7px',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: "0 0.85em",
              paddingBottom: 2
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }, s.token), ' ', "by ", s.author, ' ', react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/review?id=".concat(s.index),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, s.date, " days ago")), ' ', a[1].length < show_limit && a[1].length - 1 === i ? '' : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          }, "\xB7"), ' ');
        }), ' ', a[1].length > show_limit ? !a[2] ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          style: {
            textDecoration: 'underline'
          },
          onClick: function onClick() {
            return _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, a[3], true));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, "show all") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          style: {
            textDecoration: 'underline'
          },
          onClick: function onClick() {
            return _this2.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, a[3], false));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, "show less") : null));
      })) : null;
    }
  }]);

  return Sentences;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Sentences);

/***/ }),

/***/ "./parts/Static.js":
/*!*************************!*\
  !*** ./parts/Static.js ***!
  \*************************/
/*! exports provided: red, blue, scaleRed, scaleBlue, scaleTextRed, scaleTextBlue, colorExtend, readableSentiment, class_labels, Border */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleRed", function() { return scaleRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleBlue", function() { return scaleBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleTextRed", function() { return scaleTextRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleTextBlue", function() { return scaleTextBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorExtend", function() { return colorExtend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readableSentiment", function() { return readableSentiment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "class_labels", function() { return class_labels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Border", function() { return Border; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chroma-js */ "chroma-js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/grant.custer/Sites/next-movies/parts/Static.js";


var red = chroma_js__WEBPACK_IMPORTED_MODULE_1__('#ffbb3a').luminance(0.625);
var blue = chroma_js__WEBPACK_IMPORTED_MODULE_1__('#3affbb').luminance(0.625);
var scaleRed = chroma_js__WEBPACK_IMPORTED_MODULE_1__["scale"](['#ddd', red]).mode('lch');
var scaleBlue = chroma_js__WEBPACK_IMPORTED_MODULE_1__["scale"](['#ddd', blue]).mode('lch');
var scaleTextRed = chroma_js__WEBPACK_IMPORTED_MODULE_1__["scale"](['white', red]).mode('lch');
var scaleTextBlue = chroma_js__WEBPACK_IMPORTED_MODULE_1__["scale"](['white', blue]).mode('lch');
function colorExtend(color, x0, x1, y0, y1) {
  return "-".concat(x0, "px -").concat(y0, "px 0 ").concat(color, ", ").concat(x1, "px -").concat(y0, "px 0 ").concat(color, ", ").concat(x1, "px ").concat(y1, "px 0 ").concat(color, ", -").concat(x0, "px ").concat(y1, "px 0 ").concat(color);
}
function readableSentiment(value) {
  if (value === 0) {
    return 'all negative';
  } else if (value < 0.1) {
    return 'very negative';
  } else if (value < 0.25) {
    return 'mostly negative';
  } else if (value < 0.5) {
    return 'somewhat negative';
  } else if (value === 0.5) {
    return 'split';
  } else if (value < 0.75) {
    return 'somewhat positive';
  } else if (value < 0.9) {
    return 'mostly positive';
  } else if (value < 1) {
    return 'very positive';
  } else if (value === 1) {
    return 'all positive';
  }
}
var class_labels = ['negative', 'positive'];
var Border = function Border() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: 1,
      background: 'black',
      position: 'relative',
      marginBottom: -0.5,
      marginTop: -0.5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  });
};

/***/ }),

/***/ "./parts/Tour.js":
/*!***********************!*\
  !*** ./parts/Tour.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data_corpora_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/corpora.js */ "./data/corpora.js");
/* harmony import */ var _parts_Static__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../parts/Static */ "./parts/Static.js");
/* harmony import */ var _parts_Scene__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../parts/Scene */ "./parts/Scene.js");
/* harmony import */ var _pages_Topic2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/Topic2 */ "./pages/Topic2.js");
/* harmony import */ var _pages_Index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pages/Index */ "./pages/Index.js");








var _jsxFileName = "/Users/grant.custer/Sites/next-movies/parts/Tour.js";







var choreography = [0, 1];

var Tour =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Tour, _React$Component);

  function Tour(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Tour);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Tour).call(this, props));
    _this.state = {
      scroll: 0,
      step: 0,
      offsets: null,
      wh: null
    };
    _this.scrollRef = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    _this.overviewBlank = _this.overviewBlank.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Tour, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        wh: window.innerHeight
      });
      var scroller = this.scrollRef.current;
      var wh = this.state.wh || window.innerHeight;

      var offsets = this.state.offsets || _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_1___default()(scroller.querySelectorAll('.scene')).map(function (n) {
        return n.offsetTop;
      });

      this.setState({
        offsets: offsets
      });
      scroller.addEventListener('scroll', function () {
        for (var i = 0; i < offsets.length; i++) {
          var r = offsets.length - 1 - i;
          var thresh = offsets[r];

          if (scroller.scrollTop > thresh - wh * (7 / 8)) {
            _this2.setState({
              step: r
            });

            break;
          }
        }
      });
    }
  }, {
    key: "overviewBlank",
    value: function overviewBlank() {
      this.props.router.push('/test', {
        shallow: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _React$createElement, _React$createElement2;

      var _this$props = this.props,
          font_size = _this$props.font_size,
          line_height = _this$props.line_height,
          data_select = _this$props.data_select,
          grem = _this$props.grem,
          router = _this$props.router,
          analyze = _this$props.analyze,
          data = _this$props.data,
          info = _this$props.info,
          setAnalyze = _this$props.setAnalyze,
          review_sort = _this$props.review_sort,
          setReviewSort = _this$props.setReviewSort,
          show_accuracy = _this$props.show_accuracy,
          setAccuracy = _this$props.setAccuracy,
          compare = _this$props.compare,
          setCompare = _this$props.setCompare,
          nbsvm_data = _this$props.nbsvm_data,
          sort = _this$props.sort,
          setSort = _this$props.setSort;
      var _this$props2 = this.props,
          show_info = _this$props2.show_info,
          reviews_length = _this$props2.reviews_length,
          movies_length = _this$props2.movies_length;
      var _this$state = this.state,
          wh = _this$state.wh,
          step = _this$state.step;
      var index_sort = 'reviews';
      if (step === 3) index_sort = 'positive';
      if (step === 4) index_sort = 'negative';
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, step > 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          position: 'fixed',
          left: 0,
          top: grem * 2,
          right: 0,
          bottom: 0,
          background: 'white',
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, data !== null && nbsvm_data !== null ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, step > 0 && step < 5 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_pages_Index__WEBPACK_IMPORTED_MODULE_14__["default"], (_React$createElement = {
        grem: grem,
        font_size: font_size,
        line_height: line_height
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "grem", grem), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "analyze", step === 1 ? false : true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "data", data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "info", info), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "sort", index_sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "review_sort", review_sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setAnalyze", setAnalyze), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setSort", setSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setReviewSort", setReviewSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "show_accuracy", show_accuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setAccuracy", setAccuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "router", {
        query: {
          id: 'tt0762073'
        }
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "compare", compare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "setCompare", setCompare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "nbsvm_data", nbsvm_data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 106
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement)) : null, step > 4 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_pages_Topic2__WEBPACK_IMPORTED_MODULE_13__["default"], (_React$createElement2 = {
        grem: grem,
        font_size: font_size,
        line_height: line_height
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "grem", grem), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "analyze", step < 6 ? false : true), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "data", data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "info", info), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "sort", sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "review_sort", review_sort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "setAnalyze", setAnalyze), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "setSort", setSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "setReviewSort", setReviewSort), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "show_accuracy", show_accuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "setAccuracy", setAccuracy), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "router", {
        query: {
          id: 'tt0762073'
        }
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "compare", compare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "setCompare", setCompare), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "nbsvm_data", nbsvm_data), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "__source", {
        fileName: _jsxFileName,
        lineNumber: 129
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement2, "__self", this), _React$createElement2)) : null) : null) : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          overflow: 'auto'
        },
        ref: this.scrollRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          background: 'white',
          display: 'flex',
          justifyContent: 'space-between'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          padding: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, "Tour"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, wh !== null ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          paddingTop: grem / 2,
          paddingLeft: grem / 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, step) : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        style: {
          padding: grem / 2,
          textDecoration: 'underline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "Pause"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Static__WEBPACK_IMPORTED_MODULE_11__["Border"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          background: 'transparent',
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          paddingBottom: '100vh'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_12__["default"], {
        grem: grem,
        one_screen: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          paddingTop: grem / 4,
          paddingBottom: grem / 4,
          paddingLeft: grem / 2,
          paddingRight: grem / 2,
          marginTop: -grem / 2,
          marginLeft: -grem / 2,
          marginRight: -grem / 2,
          marginBottom: grem / 2,
          background: '#222',
          color: '#fff'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, "Info"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "Textflicks is a sentiment analysis prototype by Cloudera Fast Forward Labs, built to accompany our report on transfer learning for natural language generation. It uses movie reviews to show how NLP techniques can unlock the data embedded in large amounts of unstructured text."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "Textflicks features over 1,000 text reviews for 50 movies and TV shows. The \"Analyze\" function uses a neural network to classify each review as positive or negative. The \"accuracy\" option lets you check the model's predictions against each review's original label, and the \"model comparison\" option lets you compare this model to one trained without transfer learning. Sentence highlights in individual reviews show which sentences are driving the positive or negative classification."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "You can", ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        style: {
          textDecoration: 'underline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "jump in now"), ' ', "or", ' ', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        style: {
          textDecoration: 'underline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "scroll to take the tour \u2193"), "."))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_12__["default"], {
        grem: grem,
        spacer: 1,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, "The overview page shows 50 movie and TV shows.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_12__["default"], {
        grem: grem,
        spacer: 1,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "Analyze shows you the sentiment.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_12__["default"], {
        grem: grem,
        spacer: 1,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, "Then you can see the most liked movie..")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_12__["default"], {
        grem: grem,
        spacer: 1,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "Or the most disliked.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_12__["default"], {
        grem: grem,
        spacer: 1,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, "What about a review page?")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_parts_Scene__WEBPACK_IMPORTED_MODULE_12__["default"], {
        grem: grem,
        spacer: 1,
        wh: wh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, "Analyzed!")))));
    }
  }]);

  return Tour;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Tour);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "chroma-js":
/*!****************************!*\
  !*** external "chroma-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chroma-js");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-server/config":
/*!*************************************!*\
  !*** external "next-server/config" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/config");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map