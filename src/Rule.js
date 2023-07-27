import { always, cond, equals, startsWith, test, anyPass } from 'ramda';

const PLURIEL_REGEX = /s$/;
const VOYELLE_REGEX = /^[aeéèêiïîoôuAEÉÈÊIÎÏOÔU]/;
const FEMININ_REGEX = /e$/;

const SAINT = 'Saint';
const ILE = 'Île';

const MASCULIN = 'MASCULIN';
const FEMININ = 'FEMININ';
const EXCEPTION = 'EXCEPTION';
const VOYELLE = 'VOYELLE';
const PLURIEL = 'PLURIEL';

const findArticle = cond([
	[equals(MASCULIN), always('le ')],
	[equals(FEMININ), always('la ')],
	[equals(VOYELLE), always("l'")],
	[equals(PLURIEL), always('les ')],
	[always(true), always('')],
]);

const findPreposition = cond([
	[equals(PLURIEL), always('aux ')],
	[equals(ILE), always("à l'")],
	[equals(EXCEPTION), always('à ')],
	[equals(MASCULIN), always('au ')],
	[equals(FEMININ), always('en ')],
	[always(true), always('')],
]);

const findArticleRule = cond([
	[startsWith(SAINT), always(EXCEPTION)],
	[test(PLURIEL_REGEX), always(PLURIEL)],
	[test(VOYELLE_REGEX), always(VOYELLE)],
	[test(FEMININ_REGEX), always(FEMININ)],
	[always(true), always(MASCULIN)],
]);

const findPrepositionRule = cond([
	[startsWith(SAINT), always(EXCEPTION)],
	[test(PLURIEL_REGEX), always(PLURIEL)],
	[startsWith(ILE), always(ILE)],
	[anyPass([test(VOYELLE_REGEX), test(FEMININ_REGEX)]), always(FEMININ)],
	[always(true), always(MASCULIN)],
]);

export default {
	findArticle,
	findPreposition,
	findArticleRule,
	findPrepositionRule,
	names: { MASCULIN, FEMININ, PLURIEL, VOYELLE, EXCEPTION },
};