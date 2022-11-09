import AWS from 'aws-sdk'

AWS.config.region = process.env.AWS_DEFAULT_REGION

export default AWS
