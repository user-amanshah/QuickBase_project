export const saveFormValues = (values) => {
  return fetch("http://www.mocky.io/v2/566061f21200008e3aabd919", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then(console.log(values));
};
