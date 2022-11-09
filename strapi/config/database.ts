export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '128.199.102.46'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL'),

      // https://forum.strapi.io/t/error-incorrect-string-value-xf0-x9d-x95-x92-xf0-x9d/17953/3
      charset   : 'utf8mb4',
      collation : 'utf8mb4_unicode_ci',
    },
  },
});
