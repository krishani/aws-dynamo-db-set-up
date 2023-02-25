var aws = require('aws-sdk')

aws.config.update({ region: 'ap-southeast-1' }) // Update your region here

var dynamoDbClient = new aws.DynamoDB({ apiVersion: '2012-08-10' }) // Dynamo db service object


module.exports = {
  dynamoDbClient
}