export enum ALLOCATION_STATUS {
    HOT_FOLLOWUP = 'hot followup',
    OTHERS = 'others',
    NOT_INTERESTED = 'not interested',
    JOINED = 'joined',
    WEB_ALLOCATIONS = 'web allocations'
}

export interface ALLOCATIONS_DATA_MODEL {
    name:string,
    time:string,
    assigneeName:string,
    phoneNumber:string,
    status:ALLOCATION_STATUS,
}

export const ALLOCATIONS_DATA = [
    {
        name: "Rajesh Kumar",
        time: "2024-01-01T09:30:00Z",
        assigneeName: "John Doe",
        phoneNumber: "123-456-7890",
        status: ALLOCATION_STATUS.HOT_FOLLOWUP
      },
      {
        name: "Sneha Sharma",
        time: "2024-01-02T14:00:00Z",
        assigneeName: "Jane Johnson",
        phoneNumber: "987-654-3210",
        status: ALLOCATION_STATUS.OTHERS
      },
      {
        name: "Amit Verma",
        time: "2024-01-03T10:45:00Z",
        assigneeName: "David Davis",
        phoneNumber: "555-123-4567",
        status: ALLOCATION_STATUS.NOT_INTERESTED
      },
      {
        name: "Neha Singh",
        time: "2024-01-04T12:15:00Z",
        assigneeName: "Michael Miller",
        phoneNumber: "222-333-4444",
        status: ALLOCATION_STATUS.JOINED
      },
      {
        name: "Vikas Gupta",
        time: "2024-01-05T16:30:00Z",
        assigneeName: "Eva Davis",
        phoneNumber: "333-444-5555",
        status: ALLOCATION_STATUS.WEB_ALLOCATIONS
      },
      {
        name: "Pooja Patel",
        time: "2024-01-06T11:00:00Z",
        assigneeName: "Sophie White",
        phoneNumber: "444-555-6666",
        status: ALLOCATION_STATUS.HOT_FOLLOWUP
      },
      {
        name: "Ankur Agarwal",
        time: "2024-01-07T14:45:00Z",
        assigneeName: "Liam Harris",
        phoneNumber: "666-777-8888",
        status: ALLOCATION_STATUS.OTHERS
      },
      {
        name: "Swati Verma",
        time: "2024-01-08T08:30:00Z",
        assigneeName: "Oliver White",
        phoneNumber: "777-888-9999",
        status: ALLOCATION_STATUS.NOT_INTERESTED
      },
      {
        name: "Kunal Gupta",
        time: "2024-01-09T13:00:00Z",
        assigneeName: "Chloe Brown",
        phoneNumber: "999-000-1111",
        status: ALLOCATION_STATUS.JOINED
      },
      {
        name: "Ritu Singh",
        time: "2024-01-10T15:45:00Z",
        assigneeName: "Ethan Jackson",
        phoneNumber: "111-222-3333",
        status: ALLOCATION_STATUS.WEB_ALLOCATIONS
      },
      {
        name: "Amita Yadav",
        time: "2024-01-11T10:15:00Z",
        assigneeName: "Ava Jackson",
        phoneNumber: "444-555-6666",
        status: ALLOCATION_STATUS.HOT_FOLLOWUP
      },
      {
        name: "Vivek Sharma",
        time: "2024-01-12T14:30:00Z",
        assigneeName: "Olivia Harris",
        phoneNumber: "555-666-7777",
        status: ALLOCATION_STATUS.OTHERS
      },
      {
        name: "Seema Gupta",
        time: "2024-01-13T09:00:00Z",
        assigneeName: "Liam Wilson",
        phoneNumber: "666-777-8888",
        status: ALLOCATION_STATUS.NOT_INTERESTED
      },
      {
        name: "Rahul Verma",
        time: "2024-01-14T13:30:00Z",
        assigneeName: "Emma Davis",
        phoneNumber: "888-999-0000",
        status: ALLOCATION_STATUS.JOINED
      },
      {
        name: "Anjali Singh",
        time: "2024-01-15T16:15:00Z",
        assigneeName: "Noah White",
        phoneNumber: "000-111-2222",
        status: ALLOCATION_STATUS.WEB_ALLOCATIONS
      },
      {
        name: "Alok Yadav",
        time: "2024-01-16T11:45:00Z",
        assigneeName: "Sophie Taylor",
        phoneNumber: "222-333-4444",
        status: ALLOCATION_STATUS.HOT_FOLLOWUP
      },
      {
        name: "Meena Patel",
        time: "2024-01-17T14:00:00Z",
        assigneeName: "Daniel Moore",
        phoneNumber: "333-444-5555",
        status: ALLOCATION_STATUS.OTHERS
      },
      {
        name: "Avinash Verma",
        time: "2024-01-18T08:30:00Z",
        assigneeName: "Lily Harris",
        phoneNumber: "444-555-6666",
        status: ALLOCATION_STATUS.NOT_INTERESTED
      },
      {
        name: "Divya Gupta",
        time: "2024-01-19T12:00:00Z",
        assigneeName: "Logan Wilson",
        phoneNumber: "666-777-8888",
        status: ALLOCATION_STATUS.JOINED
      },
      {
        name: "Arjun Singh",
        time: "2024-01-20T15:45:00Z",
        assigneeName: "Eva Jackson",
        phoneNumber: "777-888-9999",
        status: ALLOCATION_STATUS.WEB_ALLOCATIONS
      }
]