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

  return (
    (month < 10 ? "0" + month : month) +
    `-${day}-${year} ${hours}:${minutes < 10 ? "0" + minutes : minutes}`
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

  return new Date(new Date(dateTo) - new Date(dateFrom)).getSeconds();
};


