export enum CALL_TYPE {
    RECEIVED = 'received',
    MISSED = 'missed',
    ANSWERED = 'answered',
    INCOMING_PERSONAL = 'incoming_personal',
}

export interface CallHistoryType {
    id: number,
    caller: string,
    recipient: string,
    duration: string,
    timestamp: string,
    status: CALL_TYPE,
}

export const CALL_HISTORY_JSON : CallHistoryType[] = [
  
  {
    id: 1,
    caller: "John Doe",
    recipient: "Alice Smith",
    duration: "0:10:32",
    timestamp: "2024-01-01T09:15:00Z",
    status: CALL_TYPE.ANSWERED
  },
  {
    id: 2,
    caller: "Jane Johnson",
    recipient: "Bob Brown",
    duration: "0:05:45",
    timestamp: "2024-01-02T14:22:00Z",
    status: CALL_TYPE.RECEIVED
  },
  {
    id: 3,
    caller: "David Davis",
    recipient: "Emily White",
    duration: "0:0:0",
    timestamp: "2024-01-05T11:45:00Z",
    status: CALL_TYPE.MISSED
  },
  {
    id: 4,
    caller: "Michael Miller",
    recipient: "Sophia Wilson",
    duration: "0:08:15",
    timestamp: "2024-01-08T17:30:00Z",
    status: CALL_TYPE.ANSWERED
  },
  {
    id: 5,
    caller: "Daniel Moore",
    recipient: "Olivia Lee",
    duration: "0:0:0",
    timestamp: "2024-01-12T10:12:00Z",
    status: CALL_TYPE.MISSED
  },
  {
    id: 6,
    caller: "Ethan Evans",
    recipient: "Chloe Taylor",
    duration: "0:07:40",
    timestamp: "2024-01-18T13:45:00Z",
    status: CALL_TYPE.ANSWERED
  },
  {
    id: 7,
    caller: "Ava Martinez",
    recipient: "Noah Anderson",
    duration: "0:09:55",
    timestamp: "2024-01-22T16:20:00Z",
    status: CALL_TYPE.RECEIVED
  },
  {
    id: 8,
    caller: "Sophie Harris",
    recipient: "Logan Jackson",
    duration: "0:11:12",
    timestamp: "2024-01-25T08:30:00Z",
    status: CALL_TYPE.ANSWERED
  },
  {
    id: 9,
    caller: "William Clark",
    recipient: "Grace Lewis",
    duration: "0:0:0",
    timestamp: "2024-01-28T12:40:00Z",
    status: CALL_TYPE.MISSED
  },
  {
    id: 10,
    caller: "Mia Scott",
    recipient: "James Carter",
    duration: "0:14:20",
    timestamp: "2024-01-31T09:05:00Z",
    status:CALL_TYPE.INCOMING_PERSONAL
  },
  {
    id: 11,
    caller: "Liam Taylor",
    recipient: "Ella Martinez",
    duration: "0:13:15",
    timestamp: "2024-02-03T14:18:00Z",
    status: CALL_TYPE.ANSWERED
  },
  {
    id: 12,
    caller: "Aiden Moore",
    recipient: "Mia Davis",
    duration: "0:0:0",
    timestamp: "2024-02-08T11:32:00Z",
    status: CALL_TYPE.MISSED
  },
  {
    id: 13,
    caller: "Zoe Jackson",
    recipient: "Noah White",
    duration: "0:09:02",
    timestamp: "2024-02-14T09:45:00Z",
    status: CALL_TYPE.RECEIVED
  },
  {
    id: 14,
    caller: "Lucas Harris",
    recipient: "Chloe Clark",
    duration: "0:12:45",
    timestamp: "2024-02-19T17:20:00Z",
    status: CALL_TYPE.ANSWERED
  },
  {
    id: 15,
    caller: "Lily Brown",
    recipient: "Henry Smith",
    duration: "0:0:0",
    timestamp: "2024-02-24T13:10:00Z",
    status: CALL_TYPE.MISSED
  },
  {
    id: 16,
    caller: "Elijah Anderson",
    recipient: "Ava Martin",
    duration: "0:08:55",
    timestamp: "2024-03-01T15:48:00Z",
    status: CALL_TYPE.RECEIVED
  },
  {
    id: 17,
    caller: "Scarlett Lewis",
    recipient: "Oliver Taylor",
    duration: "0:10:20",
    timestamp: "2024-03-06T12:25:00Z",
    status: CALL_TYPE.ANSWERED
  },
  {
    id: 18,
    caller: "Jackson Wilson",
    recipient: "Emily Clark",
    duration: "0:0:0",
    timestamp: "2024-03-11T08:55:00Z",
    status: CALL_TYPE.MISSED
  },
  {
    id: 19,
    caller: "Penelope Moore",
    recipient: "Daniel Harris",
    duration: "0:0:0",
    timestamp: "2024-03-11T08:55:00Z",
    status: CALL_TYPE.MISSED
  },

  {
    id: 20,
    caller: "Logan White",
    recipient: "Eva Martinez",
    duration: "0:09:15",
    timestamp: "2024-03-21T11:10:00Z",
    status: CALL_TYPE.RECEIVED
  },
  {
    id: 21,
    caller: "Emma Davis",
    recipient: "Noah Clark",
    duration: "0:12:40",
    timestamp: "2024-03-26T14:30:00Z",
    status: CALL_TYPE.ANSWERED
  },
  {
    id: 22,
    caller: "Olivia Harris",
    recipient: "Ethan Jackson",
    duration: "0:0:0",
    timestamp: "2024-04-02T09:45:00Z",
    status: CALL_TYPE.MISSED
  },
  {
    id: 23,
    caller: "Liam Moore",
    recipient: "Ava Taylor",
    duration: "0:11:50",
    timestamp: "2024-04-08T13:20:00Z",
    status: CALL_TYPE.ANSWERED
  },
  {
    id: 24,
    caller: "Chloe Davis",
    recipient: "Lucas Wilson",
    duration: "0:07:35",
    timestamp: "2024-04-15T08:30:00Z",
    status: CALL_TYPE.RECEIVED
  },
  {
    id: 25,
    caller: "Noah Brown",
    recipient: "Sophie Clark",
    duration: "0:13:05",
    timestamp: "2024-04-22T12:40:00Z",
    status: CALL_TYPE.ANSWERED
  },
  {
    id: 26,
    caller: "Mia Jackson",
    recipient: "Logan Harris",
    duration: "0:0:0",
    timestamp: "2024-04-28T09:05:00Z",
    status: CALL_TYPE.MISSED
  },
  {
    id: 27,
    caller: "Ella White",
    recipient: "William Carter",
    duration: "0:14:45",
    timestamp: "2024-05-04T14:18:00Z",
    status: CALL_TYPE.RECEIVED
  },
  {
    id: 28,
    caller: "Jackson Martinez",
    recipient: "Ava Davis",
    duration: "0:09:30",
    timestamp: "2024-05-10T11:32:00Z",
    status: CALL_TYPE.ANSWERED
  },
  {
    id: 29,
    caller: "Sophia Taylor",
    recipient: "Daniel Moore",
    duration: "0:0:0",
    timestamp: "2024-05-16T09:45:00Z",
    status: CALL_TYPE.MISSED
  },
  {
    id: 30,
    caller: "Ethan Wilson",
    recipient: "Lily Harris",
    duration: "0:12:20",
    timestamp: "2024-05-22T17:20:00Z",
    status: CALL_TYPE.ANSWERED
  },
  {
    id: 31,
    caller: "Ava Jackson",
    recipient: "Liam Clark",
    duration: "0:0:0",
    timestamp: "2024-05-28T13:10:00Z",
    status: CALL_TYPE.MISSED
  },
  {
    id: 32,
    caller: "Oliver White",
    recipient: "Zoe Davis",
    duration: "0:10:55",
    timestamp: "2024-06-03T15:48:00Z",
    status: CALL_TYPE.RECEIVED
  },
  {
    id: 33,
    caller: "Scarlett Harris",
    recipient: "Elijah Brown",
    duration: "0:12:20",
    timestamp: "2024-06-09T12:25:00Z",
    status: CALL_TYPE.ANSWERED
  },
  {
    id: 34,
    caller: "Henry Martin",
    recipient: "Chloe Wilson",
    duration: "0:0:0",
    timestamp: "2024-06-15T08:55:00Z",
    status: CALL_TYPE.MISSED
  },
  {
    id: 35,
    caller: "Grace Anderson",
    recipient: "James Clark",
    duration: "0:07:40",
    timestamp: "2024-06-22T14:30:00Z",
    status: CALL_TYPE.ANSWERED
  },
  {
    id: 36,
    caller: "Logan Harris",
    recipient: "Emma White",
    duration: "0:09:15",
    timestamp: "2024-06-28T11:10:00Z",
    status: CALL_TYPE.RECEIVED
  },
  {
    id: 37,
    caller: "Eva Davis",
    recipient: "Noah Taylor",
    duration: "0:12:40",
    timestamp: "2024-07-05T09:45:00Z",
    status: CALL_TYPE.ANSWERED
  },
  {
    id: 38,
    caller: "Lucas Clark",
    recipient: "Sophie Moore",
    duration: "0:0:0",
    timestamp: "2024-07-11T13:20:00Z",
    status: CALL_TYPE.MISSED
  },
  {
    id: 39,
    caller: "Ava Wilson",
    recipient: "Liam White",
    duration: "0:11:50",
    timestamp: "2024-07-17T17:30:00Z",
    status: CALL_TYPE.RECEIVED
  },
  {
    id: 40,
    caller: "Noah Anderson",
    recipient: "Olivia Taylor",
    duration: "0:07:35",
    timestamp: "2024-07-24T08:30:00Z",
    status: CALL_TYPE.ANSWERED
  },
  {
    id: 41,
    caller: "Chloe Brown",
    recipient: "Jackson Wilson",
    duration: "0:0:0",
    timestamp: "2024-07-30T12:40:00Z",
    status: CALL_TYPE.MISSED
  },
  {
    id: 42,
    caller: "Liam Harris",
    recipient: "Emma Clark",
    duration: "0:09:30",
    timestamp: "2024-08-05T09:05:00Z",
    status: CALL_TYPE.RECEIVED
  },
  {
    id: 43,
    caller: "Sophie White",
    recipient: "Aiden Harris",
    duration: "0:10:02",
    timestamp: "2024-08-11T14:18:00Z",
    status: CALL_TYPE.ANSWERED
  },
  {
    id: 44,
    caller: "Ethan Jackson",
    recipient: "Zoe Harris",
    duration: "0:0:0",
    timestamp: "2024-08-17T11:32:00Z",
    status: CALL_TYPE.MISSED
  }

]