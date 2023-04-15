/* eslint-disable camelcase */
const common = [
	// ts-node no transpila, lo corre en ts:
	'--require-module ts-node/register' // Load TypeScript module
];

const mooc_backend = [
	...common,
	'tests/apps/mooc/backend/features/**/*.feature',
	'--require tests/apps/mooc/backend/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
	mooc_backend
};
