document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
  
    renderCalendar(currentMonth, currentYear);
  
    document.getElementById("prevMonth").addEventListener("click", function () {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11; // December
        currentYear--;
      }
      renderCalendar(currentMonth, currentYear);
    });
  
    document.getElementById("nextMonth").addEventListener("click", function () {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0; // January
        currentYear++;
      }
      renderCalendar(currentMonth, currentYear);
    });
  });
  
  function renderCalendar(month, year) {
    const monthNames = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startingDay = firstDayOfMonth.getDay();
    
    const calendarElement = document.querySelector('.calendar');
    const daysElement = document.querySelector('.days');
    const currentMonthElement = document.getElementById('currentMonth');
    
    daysElement.innerHTML = "";
    currentMonthElement.textContent = `${monthNames[month]} ${year}`;

    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
  
    for (let i = 0; i < startingDay; i++) {
      const dayElement = document.createElement("div");
      dayElement.classList.add("day", "prevNextMonth");
      dayElement.textContent = "";
      daysElement.appendChild(dayElement);
    }
  
    for (let i = 1; i <= daysInMonth; i++) {
      const dayElement = document.createElement("div");
      dayElement.classList.add("day", "currentMonth");
      dayElement.textContent = i;

      if (i === today.getDate() && month === currentMonth && year === currentYear) {
        dayElement.classList.add("today");
      }
      daysElement.appendChild(dayElement);
    }
  }