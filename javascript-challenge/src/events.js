/** 
  An event could look like this:
  ```
  {
    id: 107,
    startsAt: '2021-01-27T13:01:11Z', 
    endsAt: '2021-01-27T15:01:11Z', 
    title: 'Daily walk',
  }
  ```
*/

/** 
  Take an array of events and return an object that is a  mapping from the 'day' to the events occuring on that day.
  The keys should be the day-difference to the earliest occuring event.
  Each days events should be sorted in ascending order of startsAt

  A result could look like:
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
      { id: 156, startsAt: '2021-01-27T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' },
    ],
    2: [
      { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
    ]
  }
 ```

 Your solution should not modify any of the function arguments
*/

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

const events = {
  0: [
    {
      id: 001,
      startsAt: randomDate(new Date(2021, 0, 1), new Date()),
      endsAt: randomDate(new Date(2021, 0, 1), new Date()),
      title: 'Daily walk',
    },
    {
      id: 002,
      startsAt: randomDate(new Date(2021, 0, 1), new Date()),
      endsAt: randomDate(new Date(2021, 0, 1), new Date()),
      title: 'Dinner time',
    },
    {
      id: 003,
      startsAt: randomDate(new Date(2021, 0, 1), new Date()),
      endsAt: randomDate(new Date(2021, 0, 1), new Date()),
      title: 'Movie time',
    },
  ],
  1: [
    {
      id: 004,
      startsAt: randomDate(new Date(2021, 0, 2), new Date()),
      endsAt: randomDate(new Date(2021, 0, 2), new Date()),
      title: 'evening run',
    },
  ],
};

const groupEventsByDay = (events) => {
  for (const key in events) {
    console.log(key + ':', events[key]);
  }
};

/** 
  Adjust the start and end date of an event so it maintains its total duration, but is moved `toDay`.
  `eventsByDay` should be the same as the return value of `groupEventsByDay`
  `id` will be the event that should be moved
  `toDay` will be a number that indicates the key of `eventsByDay` that the target event should be moved to

  Example:
  ```
  eventsByDay(
    {
      0: [
        { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
      ],
      2: [
        { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-29T15:01:11Z',  title: 'Daily walk' },
      ]
    },
    5676,
    3,
  )
  ```
  Should return something like 
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
    ],
    3: [
      { id: 5676, startsAt: '2021-01-30T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
    ]
  },
  ```

  Your solution should not modify any of the function arguments
*/
const moveEventToDay = (eventsByDay, id, toDay) => {
  return eventsByDay;
};

console.log(groupEventsByDay(events));
