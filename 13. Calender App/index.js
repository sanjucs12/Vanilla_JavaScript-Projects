document.addEventListener("DOMContentLoaded", function () {
  const events = [
    {
      name: "Meeting with Ivan",
      time: "2023-05-01 09:28:13 +0530",
      duration_minutes: 15,
      accepted: false,
    },
    {
      name: "Team Standup",
      time: "2023-05-02 10:00:00 +0530",
      duration_minutes: 45,
      accepted: false,
    },
    {
      name: "Meeting with Bob",
      time: "2023-05-03 10:47:42 +0530",
      duration_minutes: 45,
      accepted: false,
    },
    {
      name: "Meeting with David",
      time: "2023-05-04 12:44:23 +0530",
      duration_minutes: 30,
      accepted: true,
    },
    {
      name: "Meeting with Frank",
      time: "2023-05-05 14:54:36 +0530",
      duration_minutes: 45,
      accepted: true,
    },
    {
      name: "Office Holiday",
      time: "all_day",
      duration_minutes: "all_day",
      accepted: true,
    },
    {
      name: "Team Standup",
      time: "2023-05-06 10:00:00 +0530",
      duration_minutes: 120,
      accepted: false,
    },
    {
      name: "Meeting with Bob",
      time: "2023-05-08 10:54:44 +0530",
      duration_minutes: 60,
      accepted: false,
    },
    {
      name: "Meeting with Ivan",
      time: "2023-05-09 09:28:13 +0530",
      duration_minutes: 15,
      accepted: false,
    },
    {
      name: "Team Standup",
      time: "2023-05-10 10:00:00 +0530",
      duration_minutes: 45,
      accepted: false,
    },
    {
      name: "Meeting with Bob",
      time: "2023-05-11 10:47:42 +0530",
      duration_minutes: 45,
      accepted: false,
    },
    {
      name: "Meeting with David",
      time: "2023-05-12 12:44:23 +0530",
      duration_minutes: 30,
      accepted: true,
    },
    {
      name: "Meeting with Frank",
      time: "2023-05-13 14:54:36 +0530",
      duration_minutes: 45,
      accepted: true,
    },
    {
      name: "Office Holiday",
      time: "all_day",
      duration_minutes: "all_day",
      accepted: true,
    },
    {
      name: "Team Standup",
      time: "2023-05-14 10:00:00 +0530",
      duration_minutes: 120,
      accepted: false,
    },
    {
      name: "Meeting with Bob",
      time: "2023-05-15 10:54:44 +0530",
      duration_minutes: 60,
      accepted: false,
    },
    {
      name: "Meeting with Ivan",
      time: "2023-05-16 09:28:13 +0530",
      duration_minutes: 15,
      accepted: false,
    },
    {
      name: "Team Standup",
      time: "2023-05-17 10:00:00 +0530",
      duration_minutes: 45,
      accepted: false,
    },
    {
      name: "Meeting with Bob",
      time: "2023-05-18 10:47:42 +0530",
      duration_minutes: 45,
      accepted: false,
    },
    {
      name: "Meeting with David",
      time: "2023-05-19 12:44:23 +0530",
      duration_minutes: 30,
      accepted: true,
    },
    {
      name: "Meeting with Frank",
      time: "2023-05-20 14:54:36 +0530",
      duration_minutes: 45,
      accepted: true,
    },
    {
      name: "Office Holiday",
      time: "all_day",
      duration_minutes: "all_day",
      accepted: true,
    },
    {
      name: "Team Standup",
      time: "2023-05-21 10:00:00 +0530",
      duration_minutes: 120,
      accepted: false,
    },
    {
      name: "Meeting with Bob",
      time: "2023-05-22 10:54:44 +0530",
      duration_minutes: 60,
      accepted: false,
    },
    {
      name: "Meeting with Ivan",
      time: "2023-05-23 09:28:13 +0530",
      duration_minutes: 15,
      accepted: false,
    },
    {
      name: "Team Standup",
      time: "2023-05-23 10:00:00 +0530",
      duration_minutes: 45,
      accepted: false,
    },
    {
      name: "Meeting with Bob",
      time: "2023-05-05 10:47:42 +0530",
      duration_minutes: 45,
      accepted: false,
    },
    {
      name: "Meeting with David",
      time: "2023-05-26 12:44:23 +0530",
      duration_minutes: 30,
      accepted: true,
    },
    {
      name: "Meeting with Frank",
      time: "2023-05-03 14:54:36 +0530",
      duration_minutes: 45,
      accepted: true,
    },
    {
      name: "Office Holiday",
      time: "all_day",
      duration_minutes: "all_day",
      accepted: true,
    },
    {
      name: "Team Standup",
      time: "2023-05-28 10:00:00 +0530",
      duration_minutes: 120,
      accepted: false,
    },
    {
      name: "Meeting with Bob",
      time: "2023-05-01 10:54:44 +0530",
      duration_minutes: 60,
      accepted: false,
    },
  ];

  const days = document.querySelectorAll(".day");

  // Add event listener to each day
  days.forEach(function (day) {
    day.addEventListener("click", function () {
      // Clear previously selected day
      const selectedDay = document.querySelector(".selected-day");
      if (selectedDay) {
        selectedDay.classList.remove("selected-day");
      }

      // Highlight selected day
      this.classList.add("selected-day");

      // Clear event container
      const eventContainer = document.querySelector(".event-container");
      if (eventContainer) {
        eventContainer.remove();
      }

      // Get events for the selected day
      const date = this.textContent;
      const selectedEvents = events.filter(function (event) {
        const eventDate = new Date(event.time);
        return eventDate.getDate() === Number(date);
      });

      // Create and populate event container
      if (selectedEvents.length > 0) {
        const container = document.createElement("div");
        container.classList.add("event-container");
        this.appendChild(container);

        selectedEvents.forEach(function (event) {
          const eventElement = document.createElement("div");
          eventElement.classList.add("event");

          if (event.accepted) {
            eventElement.classList.add("accepted-event");
          } else {
            eventElement.classList.add("pending-event");
          }

          const eventName = document.createElement("div");
          eventName.classList.add("event-name");

          const eventDetails = {
            name: event.name,
            time: new Date(event.time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              //   second: "2-digit",
            }),
            duration: event.duration_minutes,
          };
          let details = document.createTextNode(
            `${eventDetails.name}    @${eventDetails.time} ${eventDetails.duration}minutes`
          );
          eventName.appendChild(details);
          eventElement.appendChild(eventName);
          container.appendChild(eventElement);
        });
      }
    });
  });
});
