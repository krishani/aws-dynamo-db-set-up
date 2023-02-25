const { dynamoDbClient } = require('./libs/dynamoClient')

const params = {
  RequestItems: {
    Appointments: [
      {
        PutRequest: {
          Item: {
            id: { N: "1" },
            patientName: { S: "Bob" },
            patientEmail: { S: 'krishani.indrachapa@gmail.com' },
            doctorName: { S: 'Teeta' },
            hospital: { S: 'Asiri' },
            appointmentDate: { S: '2023-01-10' },
            bookedDate: { S: '2022-12-29' }
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: { N: "2" },
            patientName: { S: "Sian" },
            patientEmail: { S: 'krishi2.indrachapa@gmail.com' },
            doctorName: { S: 'Alpha' },
            hospital: { S: 'Nawaloka' },
            appointmentDate: { S: '2022-12-30' },
            bookedDate: { S: '2022-12-29' }
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: { N: "3" },
            patientName: { S: "Messi" },
            patientEmail: { S: 'krishani.indrachapa@gmail.com' },
            doctorName: { S: 'Beta' },
            hospital: { S: 'Kings' },
            appointmentDate: { S: '2022-12-30' },
            bookedDate: { S: '2022-12-28' }
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: { N: "4" },
            patientName: { S: "Ronaldo" },
            patientEmail: { S: 'krishi2.indrachapa@gmail.com' },
            doctorName: { S: 'Teeta' },
            hospital: { S: 'Asiri' },
            appointmentDate: { S: '2022-12-30' },
            bookedDate: { S: '2022-12-28' }
          },
        },
      },
    ],
  },
};

dynamoDbClient.batchWriteItem(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});



