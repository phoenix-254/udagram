export const config = {
  "dev": {
    "username": process.env.UdagramPostgresqlUsername,
    "password": process.env.UdagramPostgresqlPassword,
    "database": process.env.UdagramPostgresqlDatabase,
    "host": process.env.UdagramPostgresqlHost,
    "dialect": process.env.UdagramPostgresqlDialect,
    "aws_region": process.env.UdagramAWSRegion,
    "aws_profile": process.env.UdagramAWSProfile,
    "aws_media_bucket": process.env.UdagramAWSMediaBucket,
    "image_filter_service_url": process.env.UdagramImageFilterServiceUrl
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "mysecret"
  }
}
