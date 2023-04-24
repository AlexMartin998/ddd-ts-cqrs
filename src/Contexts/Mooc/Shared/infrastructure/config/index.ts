import convict from 'convict';

const moocConfig = convict({
	env: {
		doc: 'The application environment.',
		format: ['production', 'development', 'staging', 'test'],
		default: 'default',
		env: 'NODE_ENV'
	},

	// url: config.get('mongo.url') <- MongoConfigFactory
	mongo: {
		url: {
			doc: 'The Mongo connection URL',
			format: String,
			env: 'MONGO_URL',
			default: 'mongodb://localhost:27017/mooc-backend-dev'
			// default: 'mongodb://adrian:somePassword123@0.0.0.0:2717/'
		}
	},

	typeorm: {
		host: {
			doc: 'The database host',
			format: String,
			env: 'TYPEORM_HOST',
			default: 'localhost'
		},
		port: {
			doc: 'The database port',
			format: Number,
			env: 'TYPEORM_PORT',
			default: 5432
		},
		username: {
			doc: 'The database username',
			format: String,
			env: 'TYPEORM_USERNAME',
			default: 'codely'
		},
		password: {
			doc: 'The database password',
			format: String,
			env: 'TYPEORM_PASSWORD',
			default: 'codely'
		},
		database: {
			doc: 'The database name',
			format: String,
			env: 'TYPEORM_DATABASE',
			default: 'mooc-backend-dev'
		}
	}
});

moocConfig.loadFile([`${__dirname}/default.json`, `${__dirname}/${moocConfig.get('env')}.json`]);

export default moocConfig;
