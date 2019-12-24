import "formiojs/dist/formio.full.min.css"
import { Formio } from 'formiojs';
import $ from "jquery";

let schema = {
  components: []
};
const apiUrl = 'http://localhost:3000/form';
const formViewerUrl = 'http://localhost:42035/#'

Formio.builder(document.getElementById('builder'), {}, {}).then(function (builder) {
  builder.on('saveComponent', function () {
    schema = builder.schema;
  });
});

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

$('#save').click(async () => {
  const response = await postData(apiUrl, {
    structure: schema,
    name: Math.random() + "th form",
    tags: ['law', 'ok'],
    path: 'lawyer/first'
  });
  const id = response._id;
  console.log(`saved ${id}`);
  $('#form-link').text(`Open form ${id}`);
  $('#form-link').attr('href', `${formViewerUrl}${id}`);
})
