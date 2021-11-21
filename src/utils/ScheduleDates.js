import dayjs from 'dayjs';

const scheduleDates = (
  plan,
  deliveryDate,
  signatureDate,
) => {
  const removeTimeZone = 'T10:30:00-03:00';
  const auxDates = [];
  let count = 0;
  let date;
  let day;
  let addDate = 0;

  if (plan === 'semanal') {
    const signatureDay = new Date(signatureDate + removeTimeZone).getDay();

    if (deliveryDate === 'monday') {
      day = 1;
    } else if (deliveryDate === 'wednesday') {
      day = 3;
    } else {
      day = 5;
    }

    if (day !== signatureDay) {
      const diff = day - signatureDay;
      if (diff < 0) {
        addDate = diff + 7;
        date = dayjs(signatureDate).add(addDate, 'day');
      } else {
        addDate = diff;
        date = dayjs(signatureDate).add(addDate, 'day');
      }
    } else {
      date = signatureDate;
    }

    auxDates.push(dayjs(date).format('YYYY-MM-DD'));
    while (count < 2) {
      const nextDate = dayjs(date).add(7, 'day');
      auxDates.push(dayjs(date).add(7, 'day').format('YYYY-MM-DD'));
      date = nextDate;
      count += 1;
    }
  } else {
    const signatureDay = new Date(signatureDate + removeTimeZone).getDate();

    if (deliveryDate === 'day 01') {
      day = 1;
    } else if (deliveryDate === 'day 10') {
      day = 10;
    } else {
      day = 20;
    }

    if (day !== signatureDay) {
      const diff = day - signatureDay;
      if (diff < 0) {
        date = `${new Date(signatureDate + removeTimeZone).getFullYear()}/${new Date(signatureDate + removeTimeZone).getMonth() + 2}/${day}`;
      } else {
        addDate = diff;
        date = dayjs(signatureDate).add(addDate, 'day');
      }
    } else {
      date = signatureDate;
    }

    auxDates.push(dayjs(date).format('YYYY-MM-DD'));
    while (count < 2) {
      const nextDate = dayjs(date).add(1, 'month');
      auxDates.push(dayjs(date).add(1, 'month').format('YYYY-MM-DD'));
      date = nextDate;
      count += 1;
    }
  }

  const nextDates = auxDates.map((value) => {
    if (new Date(value + removeTimeZone).getDay() === 0) {
      return dayjs(value).add(1, 'day').format('DD/MM/YYYY');
    } if (new Date(value + removeTimeZone).getDay() === 6) {
      return dayjs(value).add(2, 'day').format('DD/MM/YYYY');
    }
    return dayjs(value).format('DD/MM/YYYY');
  });
  return nextDates;
};

export default scheduleDates;
