export const toMMddyyyyhhmm = (date) => {
  if (date == null) {
    return "";
  }
  date = new Date(date) 
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  return (
    (month < 10 ? "0" + month : month) +
    `-${day}-${year} ${(hours < 10 ? "0" + hours : hours)}:${minutes < 10 ? "0" + minutes : minutes} ` + ampm
  );
};
export const toMMddyyyyhhmmss = (date) => {
  if (date == null) {
    return "";
  }
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return (
    (month < 10 ? "0" + month : month) +
    `-${day}-${year} ${hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`
  );
};
export const toss = (date) => {
  if (date == null) {
    return "";
  }
  return new Date(date).getSeconds();
};
export const ssdiffMMddyyyyhhmmss = (dateTo, dateFrom) => {
debugger;
  return new Date(new Date(dateTo) - new Date(dateFrom)).getSeconds();
};


