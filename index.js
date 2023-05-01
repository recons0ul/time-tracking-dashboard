const WORK_HOURS = {
  daily: {
    current: 5,
    previous: 7,
  },

  weekly: {
    current: 32,
    previous: 36,
  },

  monthly: {
    current: 103,
    previous: 128,
  },
};

const PLAY_HOURS = {
  daily: {
    current: 1,
    previous: 2,
  },

  weekly: {
    current: 10,
    previous: 8,
  },

  monthly: {
    current: 23,
    previous: 29,
  },
};

const STUDY_HOURS = {
  daily: {
    current: 0,
    previous: 1,
  },

  weekly: {
    current: 4,
    previous: 7,
  },

  monthly: {
    current: 13,
    previous: 19,
  },
};

const EXERCISE_HOURS = {
  daily: {
    current: 1,
    previous: 1,
  },

  weekly: {
    current: 4,
    previous: 5,
  },

  monthly: {
    current: 11,
    previous: 18,
  },
};

const SOCIAL_HOURS = {
  daily: {
    current: 1,
    previous: 3,
  },

  weekly: {
    current: 5,
    previous: 10,
  },

  monthly: {
    current: 21,
    previous: 23,
  },
};

const SELF_CARE_HOURS = {
  daily: {
    current: 0,
    previous: 1,
  },

  weekly: {
    current: 2,
    previous: 2,
  },

  monthly: {
    current: 7,
    previous: 11,
  },
};

const CATEGORY_IDS = ["#work", "#play", "#study", "#exercise", "#social", "#self-care"];

function toggleDailyMode(rb) {
  setDailyHours();
}

function setDailyHours() {
  CATEGORY_IDS.forEach(categoryId => {
  let prevHoursPara = document.querySelector(categoryId + " .item-description > p");
  prevHoursPara.innerHTML="Yesterday - <span></span>hrs";
  setHours(categoryId, "daily");
  });
}

function toggleWeeklyMode(rb) {
  setWeeklyHours();
}

function setWeeklyHours() {
  CATEGORY_IDS.forEach(categoryId => {
    let prevHoursPara = document.querySelector(categoryId + " .item-description > p");
    prevHoursPara.innerHTML="Last Week - <span></span>hrs";
    setHours(categoryId, "weekly");
    });
}

function toggleMonthlyMode(rb) {
  setMonthlyHours();
}

function setMonthlyHours() {
  CATEGORY_IDS.forEach(categoryId => {
    let prevHoursPara = document.querySelector(categoryId + " .item-description > p");
    prevHoursPara.innerHTML="Last Month - <span></span>hrs";
    setHours(categoryId, "monthly");
    });
}

function setHours(categoryId, period) {
  
    let currentHoursSpan = document.querySelector(categoryId + " .item-description > h3 > span");
    let prevHoursSpan = document.querySelector(categoryId + " .item-description > p > span");

    switch (categoryId) {
      case "#work":
        currentHoursSpan.textContent = WORK_HOURS[period].current;
        prevHoursSpan.textContent = WORK_HOURS[period].previous;
        break;
      case "#play":
        currentHoursSpan.textContent = PLAY_HOURS[period].current;
        prevHoursSpan.textContent = PLAY_HOURS[period].previous;
        break;
      case "#study":
        currentHoursSpan.textContent = STUDY_HOURS[period].current;
        prevHoursSpan.textContent = STUDY_HOURS[period].previous;
        break;
      case "#exercise":
        currentHoursSpan.textContent = EXERCISE_HOURS[period].current;
        prevHoursSpan.textContent = EXERCISE_HOURS[period].previous;
        break;
      case "#social":
        currentHoursSpan.textContent = SOCIAL_HOURS[period].current;
        prevHoursSpan.textContent = SOCIAL_HOURS[period].previous;
        break;
      case "#self-care":
        currentHoursSpan.textContent = SELF_CARE_HOURS[period].current;
        prevHoursSpan.textContent = SELF_CARE_HOURS[period].previous;
        break;
    }
}
let weeklyRb = document.getElementById("weekly-rb");
weeklyRb.setAttribute("checked", true);
toggleWeeklyMode(weeklyRb);