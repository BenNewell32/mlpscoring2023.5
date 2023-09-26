// https://medium.com/@bastihumann/how-to-backup-firestore-the-firebase-way-874da6d75082


// https://www.youtube.com/watch?v=HYOR42pYYzo

// import * as functions from "firebase-functions";

// import { google } from "googleapis";

// const authClient = new google.auth.JWT({
// email: "backupmlpscores@mlpscores-a6d96.iam.gserviceaccount.com",
// key: "5dd79e7ccf1352fc085ad51cc0bb33abf9854f74",
// scopes: [
//     "https://www.googleapis.com/auth/datastore",
//     "https://www.googleapis.com/auth/cloud-platform",
// ],
// });

// const firestoreClient = google.firestore({
// version: "v1beta2",
// auth: authClient,
// });

// exports.backupFirestore = functions.pubsub
// .schedule("every day 00:00")
// .onRun(async (context) => {
//     const projectId = process.env.GCP_PROJECT;

//     const timestamp = new Date().toISOString();

//     console.log(`Start to backup project ${projectId}`);

//     await authClient.authorize();
//     return firestoreClient.projects.databases.exportDocuments({
//       name: `projects/${projectId}/databases/(default)`,
//       requestBody: {
//         outputUriPrefix: `gs://${projectId}-firestore-backups/backups/${timestamp}`,
//       },
//     });
// });
