const { dynamoDbClient } = require('./libs/dynamoClient')

var params = {
  // Specify which items in the results are returned.
  ExpressionAttributeValues: {
    ':appointmentDate': { S: '2022-12-30' }
  },
  FilterExpression: 'appointmentDate = :appointmentDate',
  ProjectionExpression: 'patientName, doctorName, patientEmail',
  TableName: 'Appointments'
};

dynamoDbClient.scan(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    data.Items.forEach(function (element, index, array) {
      console.log(element.patientName.S + " (" + element.patientEmail.S + ")");
    });
  }
});